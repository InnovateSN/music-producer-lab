import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/auth';
import { SignupSchema } from '@/lib/validations';
import { SignJWT } from 'jose';
import { validateOrigin } from '@/lib/security';

export async function POST(req: NextRequest) {
  try {
    const originError = validateOrigin(req);
    if (originError) return originError;

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

    const { email, password, firstName, lastName } = validation.data;

    // Create user
    const user = await createUser(email, password, firstName, lastName);

    const response = NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: user.id,
        email: user.email,
      },
    });

    if (process.env.NEXTAUTH_SECRET) {
      const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
      const token = await new SignJWT({
        id: user.id,
        email: user.email,
        name: `${firstName || ''} ${lastName || ''}`.trim(),
        role: 'student',
      })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('30d')
        .sign(secret);

      response.cookies.set('mpl-session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }

    return response;
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
