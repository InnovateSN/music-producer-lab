import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

/**
 * GET /api/auth/signout
 * Signs out the user and redirects to home page
 */
export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    // Already signed out, redirect to home
    return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
  }

  // Redirect to Clerk's sign-out URL
  // This will clear the session and redirect back to the app
  const signOutUrl = new URL('/sign-out', process.env.NEXT_PUBLIC_CLERK_SIGN_OUT_URL || 'https://accounts.clerk.dev');
  signOutUrl.searchParams.set('redirect_url', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');

  return NextResponse.redirect(signOutUrl);
}
