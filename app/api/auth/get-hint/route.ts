import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find user by email
    const users = await query<{
      password_hint: string | null;
    }>(
      'SELECT password_hint FROM users WHERE LOWER(email) = LOWER($1) AND is_active = true',
      [email]
    );

    const user = users[0];

    // Always return a response to prevent email enumeration
    if (!user) {
      return NextResponse.json({
        found: false,
        message: 'No account found with this email address'
      });
    }

    if (!user.password_hint) {
      return NextResponse.json({
        found: true,
        hasHint: false,
        message: 'No password hint was set for this account'
      });
    }

    return NextResponse.json({
      found: true,
      hasHint: true,
      hint: user.password_hint
    });

  } catch (error) {
    console.error('[get-hint] Error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
