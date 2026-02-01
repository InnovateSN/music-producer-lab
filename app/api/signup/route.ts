import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/lib/auth';
import { validateOrigin } from '@/lib/security';

export async function POST(request: Request) {
  console.log('Signup API called');

  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) {
    console.log('Origin validation failed');
    return originError;
  }
  console.log('Origin validation passed');

  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;
    console.log('Signup attempt for:', email);

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
    console.log('Checking if user exists...');
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      console.log('User already exists');
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      );
    }
    console.log('User does not exist, creating...');

    // Create user
    const user = await createUser(email, password, firstName, lastName);
    console.log('User created:', user.id);

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error('Signup error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to create account: ${errorMessage}` },
      { status: 500 }
    );
  }
}
