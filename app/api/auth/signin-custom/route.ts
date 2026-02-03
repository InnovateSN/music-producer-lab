import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
  // Add debug logging
  console.log('[signin-custom] Request received');

  try {
    const body = await request.json();
    const { email, password } = body;

    console.log('[signin-custom] Email:', email ? email.substring(0, 3) + '***' : 'missing');

    if (!email || !password) {
      console.log('[signin-custom] Missing email or password');
      return NextResponse.json(
        { error: 'Email and password are required', code: 'MISSING_CREDENTIALS' },
        { status: 400 }
      );
    }

    // Find user by email
    console.log('[signin-custom] Querying database for user');
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

    console.log('[signin-custom] Found', users.length, 'user(s)');
    const user = users[0];

    if (!user) {
      console.log('[signin-custom] User not found');
      return NextResponse.json(
        { error: 'Invalid email or password', code: 'USER_NOT_FOUND' },
        { status: 401 }
      );
    }

    console.log('[signin-custom] User found, is_active:', user.is_active, ', has_password:', !!user.password_hash);

    if (!user.is_active) {
      console.log('[signin-custom] Account deactivated');
      return NextResponse.json(
        { error: 'Account is deactivated', code: 'ACCOUNT_DEACTIVATED' },
        { status: 401 }
      );
    }

    if (!user.password_hash) {
      console.log('[signin-custom] No password hash');
      return NextResponse.json(
        { error: 'Please set up a password for your account', code: 'NO_PASSWORD' },
        { status: 401 }
      );
    }

    // Verify password
    console.log('[signin-custom] Comparing password');
    let isValid = false;
    try {
      isValid = await bcrypt.compare(password, user.password_hash);
      console.log('[signin-custom] Password valid:', isValid);
    } catch (bcryptError) {
      console.error('[signin-custom] bcrypt error:', bcryptError);
      return NextResponse.json(
        { error: 'Password verification failed', code: 'BCRYPT_ERROR' },
        { status: 500 }
      );
    }

    if (!isValid) {
      console.log('[signin-custom] Invalid password');
      return NextResponse.json(
        { error: 'Invalid email or password', code: 'INVALID_PASSWORD' },
        { status: 401 }
      );
    }

    // Update last login
    console.log('[signin-custom] Updating last login');
    await query('UPDATE users SET last_login = NOW() WHERE id = $1', [user.id]);

    // Create a simple session token
    console.log('[signin-custom] Creating JWT');
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'fallback-secret');

    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email,
      role: user.role,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(secret);

    // Set session cookie
    console.log('[signin-custom] Setting cookie');
    const cookieStore = await cookies();
    cookieStore.set('mpl-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    console.log('[signin-custom] Success!');
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
        role: user.role,
      },
    });
  } catch (error) {
    console.error('[signin-custom] Unexpected error:', error);
    return NextResponse.json(
      { error: 'An error occurred during sign in', code: 'SERVER_ERROR', details: error instanceof Error ? error.message : 'Unknown' },
      { status: 500 }
    );
  }
}
