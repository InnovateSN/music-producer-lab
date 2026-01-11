import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';

/**
 * POST /api/auth/sync
 * Sync Clerk user with database
 * Called after sign-up or login to ensure user exists in our database
 */
export async function POST() {
  try {
    // getCurrentUser() automatically creates the user in DB if they don't exist
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    });
  } catch (error) {
    console.error('Error syncing user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
