/**
 * Supabase Login Guard
 * Enforces premium access after user login by checking subscription status
 * 
 * Refactored version with:
 * - SSR compatibility
 * - Configurable options
 * - Aligned logic with supabase-access.js
 * - Better error handling
 * - Grace period for clock skew
 */

import { createClient } from '@supabase/supabase-js';

// Setup client from window globals (set by supabase-config.js) or fallback to null
// In browser environments, use window.__SUPABASE_URL__ and window.__SUPABASE_ANON_KEY__
// In Node.js environments (SSR/tests), use process.env
const isBrowser = typeof window !== 'undefined';
const supabaseUrl = isBrowser 
  ? (window.__SUPABASE_URL__ || '') 
  : (typeof process !== 'undefined' ? process.env?.SUPABASE_URL || '' : '');
const supabaseAnonKey = isBrowser 
  ? (window.__SUPABASE_ANON_KEY__ || '') 
  : (typeof process !== 'undefined' ? process.env?.SUPABASE_ANON_KEY || '' : '');
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// 1 minute tolerance for clock skew between client and server
const GRACE_PERIOD_MS = 60 * 1000;

/**
 * Validates that the client has required Supabase methods
 * @param {any} client - Object to validate
 * @returns {boolean} True if client has required methods
 */
function isValidSupabaseClient(client) {
  return client && 
    typeof client.auth?.getSession === 'function' && 
    typeof client.from === 'function';
}

/**
 * Computes whether user has valid premium access
 * Logic aligned with supabase-access.js: isPremium = hasValidAccess || has_paid
 * 
 * @param {object|null} profile - User profile from database
 * @returns {{hasAccess: boolean, hasPaid: boolean, subscriptionType: string, accessValid: boolean, reason: string}}
 */
function computePremiumAccess(profile) {
  if (!profile) {
    return { hasAccess: false, hasPaid: false, subscriptionType: 'free', accessValid: false, reason: 'NO_PROFILE' };
  }

  const hasPaid = profile.has_paid === true;
  const subscriptionType = profile.subscription_type || 'free';
  const accessUntil = profile.access_until ? new Date(profile.access_until) : null;
  const accessValid = accessUntil && 
    !isNaN(accessUntil.getTime()) && 
    accessUntil.getTime() > Date.now() - GRACE_PERIOD_MS;

  // CRITICAL: Align with supabase-access.js logic
  // User has access if they have paid OR have valid time-based access
  const hasAccess = hasPaid || accessValid;

  let reason;
  if (hasAccess) {
    reason = 'VALID';
  } else if (subscriptionType === 'free' && !hasPaid) {
    reason = 'FREE_PLAN';
  } else {
    reason = 'EXPIRED';
  }

  return {
    hasAccess,
    hasPaid,
    subscriptionType,
    accessValid,
    accessUntil,
    reason,
  };
}

/**
 * Redirects to premium required page (client-side only)
 * In SSR environments, throws an error to be handled by the caller
 * 
 * @param {string} reason - Reason code for the redirect
 * @throws {Error} In SSR environments with code 'PREMIUM_REQUIRED'
 */
export function redirectToPremiumRequired(reason = 'PREMIUM_REQUIRED') {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get('premium') !== 'required') {
      currentUrl.searchParams.set('premium', 'required');
      if (reason && reason !== 'PREMIUM_REQUIRED') {
        currentUrl.searchParams.set('reason', reason);
      }
      window.location.href = currentUrl.toString();
    }
  } else {
    // SSR: throw error to let caller handle the redirect
    const error = new Error(`Premium access required: ${reason}`);
    error.code = 'PREMIUM_REQUIRED';
    error.reason = reason;
    throw error;
  }
}

/**
 * Enforces premium access after login
 * Checks user authentication, profile, and subscription status
 * Redirects to ?premium=required if user doesn't have valid premium access
 *
 * @param {SupabaseClient} client - Supabase client instance. Defaults to internal client.
 * @param {Object} options - Configuration options
 * @param {Function} options.onAccessDenied - Custom handler for access denied (receives reason string)
 * @param {string} options.profileTable - Table name for profiles (default: 'users')
 * @param {string} options.lookupField - Field to match user: 'id' or 'email' (default: 'id')
 * @returns {Promise<{granted: boolean, reason?: string, profile?: object, access?: object, error?: Error}>}
 */
export async function enforcePremiumAccessAfterLogin(client = supabase, options = {}) {
  const {
    onAccessDenied = redirectToPremiumRequired,
    profileTable = 'users',
    lookupField = 'id',
  } = options;

  // Validate client
  if (!isValidSupabaseClient(client)) {
    console.error("[mpl] Supabase client is not initialized or invalid.");
    onAccessDenied('NO_CLIENT');
    return { granted: false, reason: 'NO_CLIENT' };
  }

  try {
    // Get session
    const { data: { session }, error: sessionError } = await client.auth.getSession();

    if (sessionError) {
      console.warn("[mpl] Session error:", sessionError.message);
      onAccessDenied('SESSION_ERROR');
      return { granted: false, reason: 'SESSION_ERROR', error: sessionError };
    }

    if (!session?.user) {
      console.warn("[mpl] No active session");
      onAccessDenied('NO_SESSION');
      return { granted: false, reason: 'NO_SESSION' };
    }

    // Determine lookup value based on field type
    const lookupValue = lookupField === 'email' 
      ? session.user.email 
      : session.user.id;

    if (!lookupValue) {
      console.warn("[mpl] No lookup value available for field:", lookupField);
      onAccessDenied('NO_LOOKUP_VALUE');
      return { granted: false, reason: 'NO_LOOKUP_VALUE' };
    }

    // Fetch profile with required fields
    const { data: profile, error: profileError } = await client
      .from(profileTable)
      .select("has_paid, subscription_type, access_until")
      .eq(lookupField, lookupValue)
      .maybeSingle();

    if (profileError) {
      console.error("[mpl] Profile fetch error:", profileError.message);
      onAccessDenied('PROFILE_ERROR');
      return { granted: false, reason: 'PROFILE_ERROR', error: profileError };
    }

    if (!profile) {
      console.warn("[mpl] No profile found for user:", lookupValue);
      onAccessDenied('NO_PROFILE');
      return { granted: false, reason: 'NO_PROFILE' };
    }

    // Check access using aligned logic
    const access = computePremiumAccess(profile);

    if (!access.hasAccess) {
      console.log(`[mpl] Access denied: ${access.reason}`);
      onAccessDenied(access.reason);
      return { granted: false, reason: access.reason, profile, access };
    }

    console.log("[mpl] Access granted: premium valid");
    return { granted: true, reason: 'VALID', profile, access };

  } catch (err) {
    // Re-throw SSR redirect errors for caller to handle
    if (err.code === 'PREMIUM_REQUIRED') {
      throw err;
    }
    
    console.error("[mpl] Unexpected error in access check:", err);
    onAccessDenied('UNEXPECTED_ERROR');
    return { granted: false, reason: 'UNEXPECTED_ERROR', error: err };
  }
}

/**
 * SSR-safe version that returns result without redirecting
 * Use this in server components, API routes, or middleware
 * 
 * @param {SupabaseClient} client - Supabase client instance
 * @param {Object} options - Configuration options (same as enforcePremiumAccessAfterLogin)
 * @returns {Promise<{granted: boolean, reason?: string, profile?: object, access?: object, error?: Error}>}
 */
export async function checkPremiumAccess(client = supabase, options = {}) {
  return enforcePremiumAccessAfterLogin(client, {
    ...options,
    onAccessDenied: () => {}, // No-op, just return result without redirect
  });
}

/**
 * Convenience function to check if current user has premium access
 * Returns a simple boolean, useful for conditional rendering
 * 
 * @param {SupabaseClient} client - Supabase client instance
 * @returns {Promise<boolean>}
 */
export async function hasPremiumAccess(client = supabase) {
  const result = await checkPremiumAccess(client);
  return result.granted;
}
