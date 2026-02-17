import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { getUserByEmail, verifyPassword } from '@/lib/auth';
import { SigninSchema } from '@/lib/validations';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input
    const validation = SigninSchema.safeParse(body);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      return NextResponse.json(
        { error: firstError.message || 'Invalid credentials' },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // Get user
    const user = await getUserByEmail(email);
    if (!user || !user.password_hash) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    if (!user.is_active) {
      return NextResponse.json({ error: 'Account is not active' }, { status: 403 });
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Update last login (optional, don't fail on error)
    try {
      await prisma.user.update({
        where: { id: user.id },
        data: { last_login: new Date() },
      });
    } catch (e) {
      console.warn('Failed to update last_login:', e);
    }

    // Create JWT
    if (!process.env.NEXTAUTH_SECRET) {
      console.error('NEXTAUTH_SECRET is not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
      role: user.role,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('30d')
      .sign(secret);

    // Set cookie
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
        role: user.role,
      },
    });

    response.cookies.set('mpl-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
