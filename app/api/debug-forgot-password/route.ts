import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email parameter required. Use ?email=your@email.com' });
  }

  const results: Record<string, unknown> = {
    email_checked: email,
    timestamp: new Date().toISOString(),
  };

  try {
    // Check if user exists
    const users = await query<{
      id: string;
      email: string;
      first_name: string;
      is_active: boolean;
    }>(
      'SELECT id, email, first_name, is_active FROM users WHERE LOWER(email) = LOWER($1)',
      [email]
    );

    if (users.length === 0) {
      results.user_found = false;
      results.error = 'No user found with this email address';
      return NextResponse.json(results);
    }

    const user = users[0];
    results.user_found = true;
    results.user_id = user.id;
    results.user_email = user.email;
    results.user_first_name = user.first_name;
    results.user_is_active = user.is_active;

    // Check if password_reset_tokens table exists
    try {
      const tokenCheck = await query<{ count: string }>(
        `SELECT COUNT(*) as count FROM password_reset_tokens WHERE user_id = $1`,
        [user.id]
      );
      results.tokens_table_exists = true;
      results.existing_tokens_count = parseInt(tokenCheck[0]?.count || '0');
    } catch (tableError) {
      results.tokens_table_exists = false;
      results.tokens_table_error = tableError instanceof Error ? tableError.message : 'Unknown error';
    }

    return NextResponse.json(results);

  } catch (error) {
    results.error = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(results, { status: 500 });
  }
}
