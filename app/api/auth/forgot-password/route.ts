import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendPasswordResetEmail } from '@/lib/email';
import { validateOrigin } from '@/lib/security';
import { getRequestKey, isRateLimited } from '@/lib/rate-limit';
import crypto from 'crypto';

export async function POST(request: Request) {
  const originError = validateOrigin(request);
  if (originError) {
    return originError;
  }

  const rateLimitKey = getRequestKey(request, 'forgot-password');
  if (await isRateLimited(rateLimitKey, 8, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const users = await query<{
      id: string;
      email: string;
      first_name: string;
      is_active: boolean;
    }>(
      'SELECT id, email, first_name, is_active FROM users WHERE LOWER(email) = LOWER($1)',
      [email]
    );

    const user = users[0];

    if (user && user.is_active) {
      const token = crypto.randomBytes(32).toString('hex');
      const tokenDigest = crypto.createHash('sha256').update(token).digest('hex');
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

      await query(
        'DELETE FROM password_reset_tokens WHERE user_id = $1',
        [user.id]
      );

      await query(
        'INSERT INTO password_reset_tokens (user_id, token_digest, expires_at) VALUES ($1, $2, $3)',
        [user.id, tokenDigest, expiresAt.toISOString()]
      );

      const emailResult = await sendPasswordResetEmail(
        user.email,
        token,
        user.first_name
      );

      if (!emailResult.success) {
        console.error('[forgot-password] Failed to send email:', emailResult.error);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'If an account exists with this email, you will receive a password reset link.'
    });

  } catch (error) {
    console.error('[forgot-password] Error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
