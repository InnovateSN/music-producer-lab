import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/auth';
import { SignupSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input with Zod
    const validation = SignupSchema.safeParse(body);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      return NextResponse.json(
        { error: firstError.message || 'Validation failed' },
        { status: 400 }
      );
    }

    const { email, password, firstName, lastName, passwordHint } = validation.data;

    // Create user
    const user = await createUser(email, password, firstName, lastName, passwordHint);

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error('Signup error:', error);

    // Prisma unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 });
  }
}
