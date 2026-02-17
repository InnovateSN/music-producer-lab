import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/lib/auth';
import { validateOrigin } from '@/lib/security';
import { sendWelcomeEmail } from '@/lib/email';
import { SignupSchema } from '@/lib/validations';

export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) {
    return originError;
  }

  try {
    const body = await request.json();
    const validation = SignupSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { email, password, firstName, lastName, passwordHint } = validation.data;

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(email, password, firstName, lastName, 'student', passwordHint);

    // Send welcome email (don't fail signup if email fails)
    sendWelcomeEmail(email, firstName).catch((err) => {
      console.error('Failed to send welcome email:', err);
    });

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
