import { query } from '@/lib/db';

type MemoryBucket = {
  count: number;
  resetAt: number;
};

const memoryBuckets = new Map<string, MemoryBucket>();
function applyMemoryRateLimit(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  for (const [bucketKey, bucket] of memoryBuckets.entries()) {
    if (bucket.resetAt <= now) {
      memoryBuckets.delete(bucketKey);
    }
  }

  const existing = memoryBuckets.get(key);
  if (!existing || existing.resetAt <= now) {
    memoryBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (existing.count >= maxRequests) {
    return true;
  }

  existing.count += 1;
  return false;
}

export async function isRateLimited(key: string, maxRequests: number, windowMs: number): Promise<boolean> {
  try {
    const rows = await query<{ count: number }>(
      `INSERT INTO auth_rate_limits (key, count, reset_at, updated_at)
       VALUES ($1, 1, NOW() + ($2 || ' milliseconds')::INTERVAL, NOW())
       ON CONFLICT (key) DO UPDATE
       SET count = CASE
         WHEN auth_rate_limits.reset_at <= NOW() THEN 1
         ELSE auth_rate_limits.count + 1
       END,
       reset_at = CASE
         WHEN auth_rate_limits.reset_at <= NOW() THEN NOW() + ($2 || ' milliseconds')::INTERVAL
         ELSE auth_rate_limits.reset_at
       END,
       updated_at = NOW()
       RETURNING count`,
      [key, String(windowMs)]
    );

    await query('DELETE FROM auth_rate_limits WHERE reset_at <= NOW()');
    return (rows[0]?.count || 0) > maxRequests;
  } catch (error) {
    console.warn('[rate-limit] Falling back to in-memory limiter:', error);
    return applyMemoryRateLimit(key, maxRequests, windowMs);
  }
}

export function getRequestKey(request: Request, namespace: string): string {
  const forwardedFor = request.headers.get('x-forwarded-for') || 'unknown-ip';
  const origin = request.headers.get('origin') || 'unknown-origin';

  return `${namespace}:${forwardedFor}:${origin}`;
}
