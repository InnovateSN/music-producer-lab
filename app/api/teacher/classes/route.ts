import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/clerk';
import { query } from '@/lib/db';

/**
 * Generate a unique class code (e.g., "MUSIC-2024-A1B2")
 */
function generateClassCode(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `MUSIC-${year}-${random}`;
}

/**
 * POST /api/teacher/classes
 * Create a new class
 */
export async function POST(request: Request) {
  try {
    const user = await requireRole(['teacher', 'school_admin', 'super_admin']);

    const body = await request.json();
    const { name, description, max_students = 30, academic_year } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Class name is required' },
        { status: 400 }
      );
    }

    // Get teacher's school_id
    const school_id = user.school_id;

    // Generate unique class code
    let class_code = generateClassCode();
    let attempts = 0;

    // Ensure class code is unique
    while (attempts < 10) {
      const existing = await query(
        'SELECT id FROM classes WHERE class_code = $1',
        [class_code]
      );

      if (existing.length === 0) {
        break; // Code is unique
      }

      class_code = generateClassCode();
      attempts++;
    }

    if (attempts >= 10) {
      return NextResponse.json(
        { error: 'Failed to generate unique class code' },
        { status: 500 }
      );
    }

    // Create the class
    const classes = await query(
      `INSERT INTO classes (
        school_id,
        teacher_id,
        name,
        description,
        class_code,
        max_students,
        academic_year
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        school_id,
        user.id,
        name,
        description,
        class_code,
        max_students,
        academic_year,
      ]
    );

    return NextResponse.json(
      {
        success: true,
        class: classes[0],
        message: 'Class created successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating class:', error);

    if (error.message.includes('Forbidden')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/teacher/classes
 * Get all classes for the current teacher
 */
export async function GET() {
  try {
    const user = await requireRole(['teacher', 'school_admin', 'super_admin']);

    const classes = await query(
      `SELECT
        c.*,
        COUNT(DISTINCT ce.student_id) as student_count
      FROM classes c
      LEFT JOIN class_enrollments ce ON ce.class_id = c.id AND ce.status = 'active'
      WHERE c.teacher_id = $1 AND c.is_archived = false
      GROUP BY c.id
      ORDER BY c.created_at DESC`,
      [user.id]
    );

    return NextResponse.json({ classes });
  } catch (error: any) {
    console.error('Error fetching classes:', error);

    if (error.message.includes('Forbidden')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
