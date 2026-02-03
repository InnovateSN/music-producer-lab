import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('mpl-session')?.value;

    if (!token) {
      // Return empty object (no user) for compatibility with auth-integration.js
      return NextResponse.json({});
    }

    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'fallback-secret');

    try {
      const { payload } = await jwtVerify(token, secret);

      // Parse name into firstName/lastName
      const name = payload.name as string || '';
      const nameParts = name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Return format compatible with auth-integration.js
      return NextResponse.json({
        user: {
          id: payload.id,
          email: payload.email,
          name: payload.name,
          firstName,
          lastName,
          role: payload.role || 'student',
        },
      });
    } catch (verifyError) {
      // Token is invalid or expired
      console.error('[session] Token verification failed:', verifyError);
      return NextResponse.json({});
    }
  } catch (error) {
    console.error('[session] Error:', error);
    return NextResponse.json({});
  }
}
