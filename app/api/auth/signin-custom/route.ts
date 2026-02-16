import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import { validateOrigin } from '@/lib/security';

export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) return originError;

  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user by email
    const users = await query<{
      id: string;
      email: string;
      password_hash: string;
      first_name: string;
      last_name: string;
      role: string;
      is_active: boolean;
    }>(
      'SELECT id, email, password_hash, first_name, last_name, role, is_active FROM users WHERE LOWER(email) = LOWER($1)',
      [email]
    );

    const user = users[0];

    // Generic error message to prevent enumeration
    const invalidCredentialsError = { error: 'Invalid email or password' };

    if (!user || !user.is_active || !user.password_hash) {
      return NextResponse.json(invalidCredentialsError, { status: 401 });
    }

    // Verify password
    let isValid = false;
    try {
      isValid = await bcrypt.compare(password, user.password_hash);
    } catch {
      return NextResponse.json(invalidCredentialsError, { status: 401 });
    }

    if (!isValid) {
      return NextResponse.json(invalidCredentialsError, { status: 401 });
    }

    // Update last login (non-critical)
    try {
      await query('UPDATE users SET last_login = NOW() WHERE id = $1', [user.id]);
    } catch {
      // Non-critical, continue anyway
    }

    // Require NEXTAUTH_SECRET - no fallback
    if (!process.env.NEXTAUTH_SECRET) {
      console.error('NEXTAUTH_SECRET is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create session token
    let token: string;
    try {
      const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
      token = await new SignJWT({
        id: user.id,
        email: user.email,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email,
        role: user.role,
      })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(secret);
    } catch {
      return NextResponse.json(
        { error: 'Failed to create session' },
        { status: 500 }
      );
    }

    // Set session cookie
    try {
      const cookieStore = await cookies();
      cookieStore.set('mpl-session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } catch {
      return NextResponse.json(
        { error: 'Failed to set session' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
        role: user.role,
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'An error occurred during sign in' },
      { status: 500 }
    );
  }
}
