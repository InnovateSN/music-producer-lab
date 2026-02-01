import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/lib/auth';
import { validateOrigin } from '@/lib/security';

export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) return originError;

  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(email, password, firstName, lastName);

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}
