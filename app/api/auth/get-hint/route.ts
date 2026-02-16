import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { validateOrigin } from '@/lib/security';

export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) {
    return originError;
  }

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

    // Always return the same response structure to prevent account enumeration
    // If user doesn't exist or has no hint, return the same "no hint" response
    if (!user || !user.password_hint) {
      return NextResponse.json({
        hasHint: false,
        message: 'If an account exists with this email, your password hint would appear here.'
      });
    }

    return NextResponse.json({
      hasHint: true,
      hint: user.password_hint
    });

  } catch {
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
