import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  const results: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    checks: {}
  };

  // Check 1: RESEND_API_KEY exists
  const hasApiKey = !!process.env.RESEND_API_KEY;
  results.checks = {
    ...results.checks as object,
    resend_api_key_configured: hasApiKey,
    api_key_preview: hasApiKey ? `${process.env.RESEND_API_KEY?.substring(0, 8)}...` : 'NOT SET'
  };

  if (!hasApiKey) {
    results.error = 'RESEND_API_KEY is not configured in environment variables';
    return NextResponse.json(results);
  }

  // Check 2: Try to send a test email
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Music Producer Lab <onboarding@resend.dev>',
      to: 'delivered@resend.dev', // Resend's test email address
      subject: 'Test Email from Music Producer Lab',
      html: '<p>This is a test email to verify Resend is working.</p>'
    });

    if (error) {
      results.checks = {
        ...results.checks as object,
        email_send_test: 'FAILED',
        error_message: error.message,
        error_name: error.name
      };
      results.error = `Resend API error: ${error.message}`;
    } else {
      results.checks = {
        ...results.checks as object,
        email_send_test: 'SUCCESS',
        email_id: data?.id
      };
      results.success = true;
      results.message = 'Resend is configured correctly! Test email sent successfully.';
    }
  } catch (err) {
    results.checks = {
      ...results.checks as object,
      email_send_test: 'ERROR',
      error_details: err instanceof Error ? err.message : 'Unknown error'
    };
    results.error = `Failed to send test email: ${err instanceof Error ? err.message : 'Unknown error'}`;
  }

  return NextResponse.json(results, { status: results.error ? 500 : 200 });
}
