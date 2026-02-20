import { neon, NeonQueryFunction } from '@neondatabase/serverless';

// === Neon driver (sole database client) ===
let sql: NeonQueryFunction<false, false> | null = null;

function getDb() {
  if (!sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    sql = neon(process.env.DATABASE_URL);
  }
  return sql;
}

/**
 * Execute a parameterized SQL query via Neon's HTTP API.
 */
export async function query<T = any>(queryText: string, params: any[] = []): Promise<T[]> {
  try {
    if (!Array.isArray(params)) {
      throw new Error('Database query params must be an array');
    }

    const placeholderMatches = queryText.match(/\$(\d+)/g) || [];
    const highestPlaceholder = placeholderMatches.reduce((max, placeholder) => {
      const index = Number.parseInt(placeholder.slice(1), 10);
      return Number.isNaN(index) ? max : Math.max(max, index);
    }, 0);

    if (highestPlaceholder > params.length) {
      throw new Error(
        `Database query expected ${highestPlaceholder} parameter(s) but received ${params.length}`
      );
    }

    const result = await getDb().query(queryText, params);
    return result as T[];
  } catch (error) {
    console.error(
      'Database query error:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    if (process.env.NODE_ENV === 'development') {
      console.error(
        'Query (truncated):',
        queryText.substring(0, 100) + (queryText.length > 100 ? '...' : '')
      );
    }
    throw error;
  }
}

// Transaction helper
export async function transaction<T>(callback: (sql: typeof query) => Promise<T>): Promise<T> {
  return callback(query);
}

// Database types
export interface User {
  id: string;
  clerk_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  role: 'student' | 'teacher' | 'school_admin' | 'super_admin';
  school_id?: string;
  email_notifications: boolean;
  progress_emails: boolean;
  marketing_emails: boolean;
  created_at: Date;
  last_login?: Date;
  is_active: boolean;
  gdpr_consent: boolean;
  gdpr_consent_date?: Date;
  data_processing_agreement: boolean;
}

export interface School {
  id: string;
  name: string;
  domain?: string;
  country: string;
  license_tier: 'small' | 'medium' | 'large' | 'enterprise';
  max_students: number;
  license_start: Date;
  license_end: Date;
  status: 'active' | 'suspended' | 'expired' | 'trial';
  monthly_price_gbp?: number;
  billing_email?: string;
  billing_address?: string;
  vat_number?: string;
  created_at: Date;
  updated_at: Date;
  notes?: string;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_key: string;
  status: 'not_started' | 'in_progress' | 'completed';
  completion_percentage: number;
  time_spent_seconds: number;
  started_at?: Date;
  completed_at?: Date;
  last_accessed: Date;
  module_name?: string;
  lesson_number?: number;
}

export interface Class {
  id: string;
  school_id: string;
  teacher_id: string;
  name: string;
  description?: string;
  class_code: string;
  max_students: number;
  is_archived: boolean;
  created_at: Date;
  updated_at: Date;
  academic_year?: string;
}

export interface SavedPattern {
  id: string;
  user_id: string;
  pattern_type: 'drum_pattern' | 'melody' | 'chord_progression';
  pattern_name?: string;
  pattern_data: any;
  lesson_key?: string;
  is_favorite: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Certificate {
  id: string;
  user_id: string;
  certificate_type: 'module_completion' | 'full_course' | 'achievement';
  module_name?: string;
  certificate_url?: string;
  certificate_code: string;
  issued_at: Date;
  completed_lessons?: number;
  total_time_hours?: number;
}

// Query helpers
export const db = {
  // Users
  async getUserByClerkId(clerkId: string): Promise<User | null> {
    const users = await query<User>('SELECT * FROM users WHERE clerk_id = $1', [clerkId]);
    return users[0] || null;
  },

  async getUserById(userId: string): Promise<User | null> {
    const users = await query<User>('SELECT * FROM users WHERE id = $1', [userId]);
    return users[0] || null;
  },

  async createUser(data: Partial<User>): Promise<User> {
    const users = await query<User>(
      `INSERT INTO users (clerk_id, email, first_name, last_name, role, school_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        data.clerk_id,
        data.email,
        data.first_name,
        data.last_name,
        data.role || 'student',
        data.school_id,
      ]
    );
    return users[0];
  },

  async updateUser(userId: string, data: Partial<User>): Promise<User> {
    const fields = Object.keys(data).filter((k) => k !== 'id' && (data as any)[k] !== undefined);

    if (fields.length === 0) {
      throw new Error('No valid fields provided for user update');
    }

    const values = fields.map((k) => (data as any)[k]);
    const setClause = fields.map((k, i) => `${k} = $${i + 2}`).join(', ');

    const users = await query<User>(
      `UPDATE users SET ${setClause}, updated_at = NOW() WHERE id = $1 RETURNING *`,
      [userId, ...values]
    );
    return users[0];
  },

  // Lesson Progress
  async getLessonProgress(userId: string, lessonKey: string): Promise<LessonProgress | null> {
    const progress = await query<LessonProgress>(
      'SELECT * FROM lesson_progress WHERE user_id = $1 AND lesson_key = $2',
      [userId, lessonKey]
    );
    return progress[0] || null;
  },

  async getAllUserProgress(userId: string): Promise<LessonProgress[]> {
    return query<LessonProgress>(
      'SELECT * FROM lesson_progress WHERE user_id = $1 ORDER BY last_accessed DESC',
      [userId]
    );
  },

  async upsertLessonProgress(data: Partial<LessonProgress>): Promise<LessonProgress> {
    const progress = await query<LessonProgress>(
      `INSERT INTO lesson_progress (user_id, lesson_key, status, completion_percentage, time_spent_seconds, module_name, lesson_number)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (user_id, lesson_key)
       DO UPDATE SET
         status = EXCLUDED.status,
         completion_percentage = EXCLUDED.completion_percentage,
         time_spent_seconds = EXCLUDED.time_spent_seconds,
         last_accessed = NOW(),
         completed_at = CASE WHEN EXCLUDED.status = 'completed' THEN NOW() ELSE lesson_progress.completed_at END
       RETURNING *`,
      [
        data.user_id,
        data.lesson_key,
        data.status || 'in_progress',
        data.completion_percentage || 0,
        data.time_spent_seconds || 0,
        data.module_name,
        data.lesson_number,
      ]
    );
    return progress[0];
  },

  // Schools
  async getSchoolById(schoolId: string): Promise<School | null> {
    const schools = await query<School>('SELECT * FROM schools WHERE id = $1', [schoolId]);
    return schools[0] || null;
  },

  async getSchoolStudents(schoolId: string): Promise<User[]> {
    return query<User>(
      `SELECT * FROM users
       WHERE school_id = $1 AND role = 'student'
       ORDER BY created_at DESC`,
      [schoolId]
    );
  },

  async getSchoolTeachers(schoolId: string): Promise<User[]> {
    return query<User>(
      `SELECT * FROM users
       WHERE school_id = $1 AND role = 'teacher'
       ORDER BY created_at DESC`,
      [schoolId]
    );
  },

  // Classes
  async getClassById(classId: string): Promise<Class | null> {
    const classes = await query<Class>('SELECT * FROM classes WHERE id = $1', [classId]);
    return classes[0] || null;
  },

  async getTeacherClasses(teacherId: string): Promise<Class[]> {
    return query<Class>(
      'SELECT * FROM classes WHERE teacher_id = $1 AND is_archived = false ORDER BY created_at DESC',
      [teacherId]
    );
  },

  async getClassStudents(classId: string): Promise<User[]> {
    return query<User>(
      `SELECT u.* FROM users u
       INNER JOIN class_enrollments ce ON ce.student_id = u.id
       WHERE ce.class_id = $1 AND ce.status = 'active'
       ORDER BY u.last_name, u.first_name`,
      [classId]
    );
  },

  // Saved Patterns
  async getUserPatterns(userId: string): Promise<SavedPattern[]> {
    return query<SavedPattern>(
      'SELECT * FROM saved_patterns WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
  },

  async savePattern(data: Partial<SavedPattern>): Promise<SavedPattern> {
    const patterns = await query<SavedPattern>(
      `INSERT INTO saved_patterns (user_id, pattern_type, pattern_name, pattern_data, lesson_key, is_favorite)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        data.user_id,
        data.pattern_type,
        data.pattern_name,
        JSON.stringify(data.pattern_data),
        data.lesson_key,
        data.is_favorite || false,
      ]
    );
    return patterns[0];
  },

  // Certificates
  async getUserCertificates(userId: string): Promise<Certificate[]> {
    return query<Certificate>(
      'SELECT * FROM certificates WHERE user_id = $1 ORDER BY issued_at DESC',
      [userId]
    );
  },

  async generateCertificate(data: Partial<Certificate>): Promise<Certificate> {
    const certs = await query<Certificate>(
      `INSERT INTO certificates (user_id, certificate_type, module_name, certificate_code, completed_lessons, total_time_hours)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        data.user_id,
        data.certificate_type,
        data.module_name,
        data.certificate_code,
        data.completed_lessons,
        data.total_time_hours,
      ]
    );
    return certs[0];
  },
};

export default db;
