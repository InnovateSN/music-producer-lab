import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { query } from '@/lib/db';

// Verify admin access
async function verifyAdmin(): Promise<{ authorized: boolean; userId?: string; role?: string; error?: string }> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('mpl-session')?.value;

    if (!token || !process.env.NEXTAUTH_SECRET) {
      return { authorized: false };
    }

    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
    const { payload } = await jwtVerify(token, secret);

    // Check if user is admin or super_admin
    const role = payload.role as string;
    if (role !== 'admin' && role !== 'super_admin') {
      return { authorized: false };
    }

    return { authorized: true, userId: payload.id as string, role };
  } catch {
    return { authorized: false };
  }
}

export async function GET() {
  const auth = await verifyAdmin();

  if (!auth.authorized) {
    return NextResponse.json(
      { error: 'Unauthorized. Admin access required.' },
      { status: 403 }
    );
  }

  try {
    const users = await query<{
      id: string;
      email: string;
      first_name: string;
      last_name: string;
      role: string;
      is_active: boolean;
      created_at: Date;
      last_login: Date;
    }>(
      `SELECT id, email, first_name, last_name, role, is_active, created_at, last_login
       FROM users
       ORDER BY created_at DESC`
    );

    // Get user count stats
    const stats = await query<{ role: string; count: string }>(
      `SELECT role, COUNT(*) as count FROM users GROUP BY role`
    );

    return NextResponse.json({
      users,
      stats: stats.reduce((acc, s) => ({ ...acc, [s.role]: parseInt(s.count) }), {}),
      total: users.length,
    });

  } catch (error) {
    console.error('[admin/users] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
