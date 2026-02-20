import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function POST(request: Request) {
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

    // Find valid token
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

    // Hash new password
    const passwordHash = await bcrypt.hash(password, 12);

    // Update user password
    await query(
      'UPDATE users SET password_hash = $1 WHERE id = $2',
      [passwordHash, resetToken.user_id]
    );

    // Mark token as used
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
