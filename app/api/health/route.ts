import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  const checks: Record<string, { status: string; message?: string }> = {};

  // Check database connection
  try {
    await query('SELECT 1 as test');
    checks.database = { status: 'ok' };
  } catch (error) {
    checks.database = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }

  // Check if users table has password_hash column
  try {
    const result = await query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'users' AND column_name = 'password_hash'`
    );
    if (result.length > 0) {
      checks.password_hash_column = { status: 'ok' };
    } else {
      checks.password_hash_column = {
        status: 'error',
        message: 'password_hash column does not exist - run migration'
      };
    }
  } catch (error) {
    checks.password_hash_column = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }

  // Check if clerk_id is nullable
  try {
    const result = await query<{ is_nullable: string }>(
      `SELECT is_nullable FROM information_schema.columns
       WHERE table_name = 'users' AND column_name = 'clerk_id'`
    );
    if (result.length > 0 && result[0].is_nullable === 'YES') {
      checks.clerk_id_nullable = { status: 'ok' };
    } else {
      checks.clerk_id_nullable = {
        status: 'warning',
        message: 'clerk_id is NOT NULL - may cause issues with local auth'
      };
    }
  } catch (error) {
    checks.clerk_id_nullable = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }

  // Check user count
  try {
    const result = await query<{ count: string }>('SELECT COUNT(*) as count FROM users');
    checks.user_count = { status: 'ok', message: `${result[0].count} users` };
  } catch (error) {
    checks.user_count = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }

  const allOk = Object.values(checks).every(c => c.status === 'ok');

  return NextResponse.json({
    status: allOk ? 'healthy' : 'unhealthy',
    checks,
    timestamp: new Date().toISOString(),
  });
}
