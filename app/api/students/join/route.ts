import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';
import { query } from '@/lib/db';

/**
 * POST /api/students/join
 * Join a class with a class code
 */
export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { class_code } = body;

    if (!class_code) {
      return NextResponse.json(
        { error: 'Class code is required' },
        { status: 400 }
      );
    }

    // Find the class by code
    const classes = await query(
      'SELECT * FROM classes WHERE class_code = $1 AND is_archived = false',
      [class_code.toUpperCase()]
    );

    if (classes.length === 0) {
      return NextResponse.json(
        { error: 'Invalid class code' },
        { status: 404 }
      );
    }

    const classData = classes[0];

    // Check if already enrolled
    const existing = await query(
      'SELECT * FROM class_enrollments WHERE class_id = $1 AND student_id = $2',
      [classData.id, user.id]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: true,
          message: 'You are already enrolled in this class',
          class: classData,
          enrollment: existing[0],
        }
      );
    }

    // Check class capacity
    const enrollmentCount = await query(
      'SELECT COUNT(*) as count FROM class_enrollments WHERE class_id = $1 AND status = \'active\'',
      [classData.id]
    );

    const currentCount = parseInt(enrollmentCount[0].count);

    if (currentCount >= classData.max_students) {
      return NextResponse.json(
        { error: 'Class is full' },
        { status: 400 }
      );
    }

    // Enroll the student
    const enrollment = await query(
      `INSERT INTO class_enrollments (class_id, student_id, status)
       VALUES ($1, $2, 'active')
       RETURNING *`,
      [classData.id, user.id]
    );

    // If student doesn't have a school_id, update it
    if (!user.school_id && classData.school_id) {
      await query(
        'UPDATE users SET school_id = $1 WHERE id = $2',
        [classData.school_id, user.id]
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined class',
        class: classData,
        enrollment: enrollment[0],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error joining class:', error);

    if (error.message.includes('Forbidden') || error.message.includes('Unauthorized')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/students/join
 * Get classes the current user is enrolled in
 */
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const classes = await query(
      `SELECT
        c.*,
        ce.enrolled_at,
        ce.status as enrollment_status,
        u.first_name as teacher_first_name,
        u.last_name as teacher_last_name,
        u.email as teacher_email
      FROM class_enrollments ce
      JOIN classes c ON c.id = ce.class_id
      JOIN users u ON u.id = c.teacher_id
      WHERE ce.student_id = $1 AND ce.status = 'active'
      ORDER BY ce.enrolled_at DESC`,
      [user.id]
    );

    return NextResponse.json({ classes });
  } catch (error) {
    console.error('Error fetching enrolled classes:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
