import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/clerk';
import { validateOrigin } from '@/lib/security';
import db from '@/lib/db';

/**
 * GET /api/users/me
 * Get current user's profile
 */
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/users/me
 * Update current user's profile
 */
export async function PATCH(request: Request) {
  try {
    // CSRF protection
    const originError = validateOrigin(request);
    if (originError) return originError;

    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const updatableFields = [
      'first_name',
      'last_name',
      'email_notifications',
      'progress_emails',
      'marketing_emails',
    ] as const;

    const updates = updatableFields.reduce<Record<string, unknown>>((acc, field) => {
      if (Object.prototype.hasOwnProperty.call(body, field)) {
        acc[field] = body[field];
      }
      return acc;
    }, {});

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No updatable fields were provided in the request body' },
        { status: 400 }
      );
    }

    const updatedUser = await db.updateUser(user.id, updates);

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
