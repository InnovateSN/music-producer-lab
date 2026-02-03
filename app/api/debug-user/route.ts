import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import bcrypt from 'bcryptjs';

// Debug endpoint - remove in production!
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // Find user
    const users = await query<{
      id: string;
      email: string;
      password_hash: string | null;
      first_name: string;
      last_name: string;
      role: string;
      is_active: boolean;
    }>(
      'SELECT id, email, password_hash, first_name, last_name, role, is_active FROM users WHERE LOWER(email) = LOWER($1)',
      [email]
    );

    if (users.length === 0) {
      return NextResponse.json({
        found: false,
        message: 'No user found with this email'
      });
    }

    const user = users[0];

    const result: any = {
      found: true,
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
      is_active: user.is_active,
      has_password_hash: !!user.password_hash,
      password_hash_length: user.password_hash?.length || 0,
    };

    // If password provided, test it
    if (password && user.password_hash) {
      try {
        const isValid = await bcrypt.compare(password, user.password_hash);
        result.password_valid = isValid;
      } catch (e) {
        result.password_check_error = e instanceof Error ? e.message : 'Unknown error';
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
