import { NextResponse } from 'next/server';

/**
 * Security utilities for API routes
 */

/**
 * Validate the request origin to prevent CSRF attacks
 * Returns null if valid, or an error response if invalid
 */
export function validateOrigin(request: Request): NextResponse | null {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  // In development, allow localhost
  const isLocalhost = origin?.includes('localhost') || origin?.includes('127.0.0.1');
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDevelopment && isLocalhost) {
    return null; // Allow in development
  }

  // Check origin header first (preferred)
  if (origin) {
    if (appUrl && origin.startsWith(appUrl)) {
      return null; // Valid origin
    }
    // Reject if origin doesn't match
    return NextResponse.json(
      { error: 'Invalid origin' },
      { status: 403 }
    );
  }

  // Fall back to referer check if no origin (same-origin requests may omit origin)
  if (referer) {
    if (appUrl && referer.startsWith(appUrl)) {
      return null; // Valid referer
    }
  }

  // If neither origin nor referer, and we're making a state-changing request,
  // this could be a CSRF attempt. However, some legitimate clients may not send these headers.
  // For API calls from the same origin, browsers typically include origin/referer.
  // We'll be strict and require at least one of them for POST/PUT/DELETE requests.
  return NextResponse.json(
    { error: 'Missing origin header' },
    { status: 403 }
  );
}

/**
 * Sanitize user input to prevent injection attacks
 */
export function sanitizeString(input: unknown): string | null {
  if (typeof input !== 'string') {
    return null;
  }
  // Remove any null bytes and trim whitespace
  return input.replace(/\0/g, '').trim();
}

/**
 * Validate that a string matches an expected pattern
 */
export function validatePattern(input: string, pattern: RegExp): boolean {
  return pattern.test(input);
}
