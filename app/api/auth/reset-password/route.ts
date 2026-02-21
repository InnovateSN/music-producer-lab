import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { validateOrigin } from '@/lib/security';
import { getRequestKey, isRateLimited } from '@/lib/rate-limit';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function POST(request: Request) {
  const originError = validateOrigin(request);
  if (originError) {
    return originError;
  }

  const rateLimitKey = getRequestKey(request, 'reset-password');
  if (await isRateLimited(rateLimitKey, 10, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    const tokenDigest = crypto.createHash('sha256').update(token).digest('hex');

    const tokens = await query<{
      id: string;
      user_id: string;
    }>(
      `SELECT id, user_id
       FROM password_reset_tokens
       WHERE token_digest = $1 AND expires_at > NOW() AND used_at IS NULL`,
      [tokenDigest]
    );

    if (tokens.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or expired reset link. Please request a new one.' },
        { status: 400 }
      );
    }

    const resetToken = tokens[0];
    const passwordHash = await bcrypt.hash(password, 12);

    await query(
      'UPDATE users SET password_hash = $1 WHERE id = $2',
      [passwordHash, resetToken.user_id]
    );

    await query(
      'UPDATE password_reset_tokens SET used_at = NOW() WHERE id = $1',
      [resetToken.id]
    );

    return NextResponse.json({
      success: true,
      message: 'Password has been reset successfully'
    });

  } catch (error) {
    console.error('[reset-password] Error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
