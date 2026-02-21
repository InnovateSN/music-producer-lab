import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { validateOrigin } from '@/lib/security';
import { getRequestKey, isRateLimited } from '@/lib/rate-limit';
import crypto from 'crypto';

export async function POST(request: Request) {
  const originError = validateOrigin(request);
  if (originError) {
    return originError;
  }

  const rateLimitKey = getRequestKey(request, 'verify-reset-token');
  if (await isRateLimited(rateLimitKey, 20, 15 * 60 * 1000)) {
    return NextResponse.json({ valid: false }, { status: 429 });
  }

  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ valid: false });
    }

    const tokenDigest = crypto.createHash('sha256').update(token).digest('hex');

    const tokens = await query<{
      id: string;
      user_id: string;
      expires_at: Date;
      used_at: Date | null;
    }>(
      `SELECT id, user_id, expires_at, used_at
       FROM password_reset_tokens
       WHERE token_digest = $1 AND expires_at > NOW() AND used_at IS NULL`,
      [tokenDigest]
    );

    if (tokens.length === 0) {
      return NextResponse.json({ valid: false });
    }

    return NextResponse.json({ valid: true });

  } catch (error) {
    console.error('[verify-reset-token] Error:', error);
    return NextResponse.json({ valid: false });
  }
}
