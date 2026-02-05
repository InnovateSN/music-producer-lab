import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  let dbStatus = 'ok';

  // Check database connection only - no sensitive details
  try {
    await query('SELECT 1');
  } catch {
    dbStatus = 'error';
  }

  const isHealthy = dbStatus === 'ok';

  return NextResponse.json({
    status: isHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
  });
}
