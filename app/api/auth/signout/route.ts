import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * POST /api/auth/signout
 * Signs out the user by clearing the session cookie
 */
export async function POST() {
  try {
    const cookieStore = await cookies();

    // Clear the custom session cookie
    cookieStore.set('mpl-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0, // Expire immediately
      path: '/',
    });

    return NextResponse.json({ success: true, redirectUrl: '/' });
  } catch (error) {
    console.error('[signout] Error:', error);
    return NextResponse.json({ success: true, redirectUrl: '/' });
  }
}

// Block GET requests to prevent CSRF attacks
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST with proper CSRF token.' },
    { status: 405 }
  );
}
