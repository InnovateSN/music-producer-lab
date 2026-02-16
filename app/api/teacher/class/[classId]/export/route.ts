import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/clerk';
import { query } from '@/lib/db';

/**
 * GET /api/teacher/class/[classId]/export
 * Export class progress as CSV
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ classId: string }> }
) {
  try {
    const user = await requireRole(['teacher', 'school_admin', 'super_admin']);
    const { classId } = await params;

    // Verify teacher owns this class
    const classCheck = await query(
      'SELECT name FROM classes WHERE id = $1 AND teacher_id = $2',
      [classId, user.id]
    );

    if (classCheck.length === 0) {
      return NextResponse.json(
        { error: 'Class not found or access denied' },
        { status: 404 }
      );
    }

    const className = classCheck[0].name;

    // Get student progress data
    const students = await query(
      `SELECT
        u.first_name,
        u.last_name,
        u.email,
        COUNT(lp.id) as lessons_started,
        COUNT(lp.id) FILTER (WHERE lp.status = 'completed') as lessons_completed,
        ROUND(AVG(lp.completion_percentage), 1) as avg_completion,
        SUM(lp.time_spent_seconds) as total_time_seconds,
        MAX(lp.last_accessed) as last_active,
        ce.enrolled_at
      FROM class_enrollments ce
      JOIN users u ON u.id = ce.student_id
      LEFT JOIN lesson_progress lp ON lp.user_id = u.id
      WHERE ce.class_id = $1 AND ce.status = 'active'
      GROUP BY u.id, u.first_name, u.last_name, u.email, ce.enrolled_at
      ORDER BY u.last_name, u.first_name`,
      [classId]
    );

    // Generate CSV
    const csvHeaders = [
      'First Name',
      'Last Name',
      'Email',
      'Lessons Started',
      'Lessons Completed',
      'Completion %',
      'Time Spent (hours)',
      'Last Active',
      'Enrolled Date',
    ];

    const csvRows = students.map((student: any) => [
      student.first_name || '',
      student.last_name || '',
      student.email,
      student.lessons_started || 0,
      student.lessons_completed || 0,
      student.avg_completion || 0,
      ((student.total_time_seconds || 0) / 3600).toFixed(1),
      student.last_active
        ? new Date(student.last_active).toLocaleDateString('en-GB')
        : 'Never',
      new Date(student.enrolled_at).toLocaleDateString('en-GB'),
    ]);

    const csv = [
      csvHeaders.join(','),
      ...csvRows.map((row) =>
        row.map((cell) => `"${cell}"`).join(',')
      ),
    ].join('\n');

    // Return CSV file
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${className.replace(/\s+/g, '-')}-progress-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error: any) {
    console.error('Error exporting class data:', error);

    if (error.message.includes('Forbidden')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
