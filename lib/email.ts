import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL || 'Music Producer Lab <noreply@musicproducerlab.com>';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL || 'https://music-producer-lab.vercel.app';

export interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Send welcome email to new user
 */
export async function sendWelcomeEmail(
  email: string,
  firstName?: string
): Promise<EmailResult> {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[email] RESEND_API_KEY not set, skipping welcome email');
    return { success: true }; // Don't fail signup if email not configured
  }

  const name = firstName || email.split('@')[0];

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Welcome to Music Producer Lab!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Music Producer Lab!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thanks for joining Music Producer Lab! We're excited to have you on board.</p>
              <p>You now have access to:</p>
              <ul>
                <li>90+ interactive music production lessons</li>
                <li>Hands-on labs for any DAW</li>
                <li>Progress tracking across all modules</li>
              </ul>
              <p>Ready to start producing?</p>
              <a href="${APP_URL}/labs.html" class="button">Start Learning</a>
            </div>
            <div class="footer">
              <p>Music Producer Lab - Learn music production by actually producing.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('[email] Welcome email sent to:', email);
    return { success: true };
  } catch (error) {
    console.error('[email] Failed to send welcome email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(
  email: string,
  resetToken: string,
  firstName?: string
): Promise<EmailResult> {
  if (!process.env.RESEND_API_KEY) {
    console.error('[email] RESEND_API_KEY not set, cannot send password reset email');
    return { success: false, error: 'Email service not configured' };
  }

  const name = firstName || email.split('@')[0];
  const resetUrl = `${APP_URL}/reset-password.html?token=${resetToken}`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Reset your password - Music Producer Lab',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .warning { background: #fff3cd; border: 1px solid #ffc107; padding: 10px; border-radius: 5px; margin-top: 20px; font-size: 14px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .link { word-break: break-all; color: #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Password Reset Request</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>We received a request to reset your password for your Music Producer Lab account.</p>
              <p>Click the button below to set a new password:</p>
              <a href="${resetUrl}" class="button">Reset Password</a>
              <p>Or copy and paste this link into your browser:</p>
              <p class="link">${resetUrl}</p>
              <div class="warning">
                <strong>Note:</strong> This link will expire in 1 hour. If you didn't request this password reset, you can safely ignore this email.
              </div>
            </div>
            <div class="footer">
              <p>Music Producer Lab - Learn music production by actually producing.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('[email] Password reset email sent to:', email);
    return { success: true };
  } catch (error) {
    console.error('[email] Failed to send password reset email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
