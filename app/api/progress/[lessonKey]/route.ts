import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';
import db from '@/lib/db';

/**
 * GET /api/progress/[lessonKey]
 * Get progress for a specific lesson
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ lessonKey: string }> }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { lessonKey } = await params;
    const progress = await db.getLessonProgress(user.id, lessonKey);

    if (!progress) {
      return NextResponse.json({ progress: null });
    }

    return NextResponse.json({ progress });
  } catch (error) {
    console.error('Error fetching lesson progress:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
