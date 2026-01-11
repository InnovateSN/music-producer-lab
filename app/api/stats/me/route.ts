import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';
import { query } from '@/lib/db';

/**
 * GET /api/stats/me
 * Get statistics for the current user
 */
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get progress statistics
    const progressStats = await query(
      `SELECT
        COUNT(*) as total_lessons_started,
        COUNT(*) FILTER (WHERE status = 'completed') as lessons_completed,
        COUNT(*) FILTER (WHERE status = 'in_progress') as lessons_in_progress,
        ROUND(AVG(completion_percentage), 2) as avg_completion,
        SUM(time_spent_seconds) as total_time_seconds,
        MAX(last_accessed) as last_activity
      FROM lesson_progress
      WHERE user_id = $1`,
      [user.id]
    );

    // Get module breakdown
    const moduleStats = await query(
      `SELECT
        module_name,
        COUNT(*) as total_lessons,
        COUNT(*) FILTER (WHERE status = 'completed') as completed_lessons,
        ROUND(AVG(completion_percentage), 2) as avg_completion
      FROM lesson_progress
      WHERE user_id = $1 AND module_name IS NOT NULL
      GROUP BY module_name
      ORDER BY module_name`,
      [user.id]
    );

    // Get certificates count
    const certificatesCount = await query(
      `SELECT COUNT(*) as count FROM certificates WHERE user_id = $1`,
      [user.id]
    );

    // Get saved patterns count
    const patternsCount = await query(
      `SELECT COUNT(*) as count FROM saved_patterns WHERE user_id = $1`,
      [user.id]
    );

    // Calculate completion percentage (out of 175 lessons)
    const totalLessons = 175;
    const completedCount = parseInt(progressStats[0]?.lessons_completed || '0');
    const overallProgress = Math.round((completedCount / totalLessons) * 100);

    return NextResponse.json({
      stats: {
        overall_progress: overallProgress,
        total_lessons: totalLessons,
        lessons_completed: completedCount,
        lessons_in_progress: parseInt(progressStats[0]?.lessons_in_progress || '0'),
        avg_completion: parseFloat(progressStats[0]?.avg_completion || '0'),
        total_time_hours: Math.round((parseInt(progressStats[0]?.total_time_seconds || '0') / 3600) * 10) / 10,
        last_activity: progressStats[0]?.last_activity,
        certificates_earned: parseInt(certificatesCount[0]?.count || '0'),
        patterns_saved: parseInt(patternsCount[0]?.count || '0'),
      },
      modules: moduleStats,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
