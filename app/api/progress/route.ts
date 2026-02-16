import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';
import { validateOrigin } from '@/lib/security';
import db from '@/lib/db';

/**
 * GET /api/progress
 * Get all lesson progress for the current user
 */
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const progress = await db.getAllUserProgress(user.id);

    return NextResponse.json({ progress });
  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/progress
 * Update or create lesson progress
 */
export async function POST(request: Request) {
  try {
    // CSRF protection: validate request origin
    const originError = validateOrigin(request);
    if (originError) return originError;

    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      lesson_key,
      status,
      completion_percentage,
      time_spent_seconds,
      module_name,
      lesson_number,
    } = body;

    if (!lesson_key) {
      return NextResponse.json(
        { error: 'lesson_key is required' },
        { status: 400 }
      );
    }

    const progress = await db.upsertLessonProgress({
      user_id: user.id,
      lesson_key,
      status: status || 'in_progress',
      completion_percentage: completion_percentage || 0,
      time_spent_seconds: time_spent_seconds || 0,
      module_name,
      lesson_number,
    });

    return NextResponse.json({ progress });
  } catch (error) {
    console.error('Error updating progress:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
