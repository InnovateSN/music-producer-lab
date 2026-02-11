import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendPasswordResetEmail } from '@/lib/email';
import { validateOrigin } from '@/lib/security';
import crypto from 'crypto';

export async function POST(request: Request) {
  // CSRF protection
  const originError = validateOrigin(request);
  if (originError) return originError;

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find user by email
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

    // Always return success to prevent email enumeration attacks
    // But only send email if user exists and is active
    if (user && user.is_active) {
      // Generate secure token
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      // Delete any existing tokens for this user
      await query(
        'DELETE FROM password_reset_tokens WHERE user_id = $1',
        [user.id]
      );

      // Insert new token
      await query(
        'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
        [user.id, token, expiresAt.toISOString()]
      );

      // Send email
      const emailResult = await sendPasswordResetEmail(
        user.email,
        token,
        user.first_name
      );

      if (!emailResult.success) {
        console.error('[forgot-password] Failed to send email:', emailResult.error);
        // Don't expose email errors to user
      }
    }

    // Always return success to prevent email enumeration
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
