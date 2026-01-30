import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { validateOrigin } from '@/lib/security';

/**
 * POST /api/auth/signout
 * Signs out the user and returns redirect URL
 * Protected with CSRF validation
 */
export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) return originError;

  const { userId } = await auth();

  if (!userId) {
    // Already signed out
    return NextResponse.json({ redirectUrl: '/' });
  }

  // Return Clerk's sign-out URL for client-side redirect
  const signOutUrl = new URL('/sign-out', process.env.NEXT_PUBLIC_CLERK_SIGN_OUT_URL || 'https://accounts.clerk.dev');
  signOutUrl.searchParams.set('redirect_url', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');

  return NextResponse.json({ redirectUrl: signOutUrl.toString() });
}

// Block GET requests to prevent CSRF attacks
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST with proper CSRF token.' },
    { status: 405 }
  );
}
