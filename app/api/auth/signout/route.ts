import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { validateOrigin } from '@/lib/security';

/**
 * POST /api/auth/signout
 * Signs out the user and returns redirect URL
 * Protected with CSRF validation
 * Note: NextAuth also handles signout at /api/auth/signout via [...nextauth]
 */
export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) return originError;

  const session = await getServerSession(authOptions);

  if (!session) {
    // Already signed out
    return NextResponse.json({ redirectUrl: '/' });
  }

  // Return redirect URL - actual signout handled by NextAuth
  return NextResponse.json({ redirectUrl: '/' });
}

// Block GET requests to prevent CSRF attacks
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST with proper CSRF token.' },
    { status: 405 }
  );
}
