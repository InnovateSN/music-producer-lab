import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';
import db from '@/lib/db';

/**
 * GET /api/patterns
 * Get all saved patterns for the current user
 */
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const patterns = await db.getUserPatterns(user.id);

    return NextResponse.json({ patterns });
  } catch (error) {
    console.error('Error fetching patterns:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/patterns
 * Save a new pattern
 */
export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      pattern_type,
      pattern_name,
      pattern_data,
      lesson_key,
      is_favorite,
    } = body;

    if (!pattern_type || !pattern_data) {
      return NextResponse.json(
        { error: 'pattern_type and pattern_data are required' },
        { status: 400 }
      );
    }

    const validTypes = ['drum_pattern', 'melody', 'chord_progression'];
    if (!validTypes.includes(pattern_type)) {
      return NextResponse.json(
        { error: 'Invalid pattern_type' },
        { status: 400 }
      );
    }

    const pattern = await db.savePattern({
      user_id: user.id,
      pattern_type,
      pattern_name,
      pattern_data,
      lesson_key,
      is_favorite: is_favorite || false,
    });

    return NextResponse.json({ pattern });
  } catch (error) {
    console.error('Error saving pattern:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
