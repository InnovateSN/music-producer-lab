import { NextResponse } from 'next/server';
import { validateOrigin } from '@/lib/security';

export async function POST(request: Request) {
  const originError = validateOrigin(request);
  if (originError) {
    return originError;
  }

  return NextResponse.json(
    {
      error: 'Password hints have been disabled. Use the secure reset link flow via /forgot-password.html.'
    },
    { status: 410 }
  );
}
