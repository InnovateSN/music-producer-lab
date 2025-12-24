/**
 * Supabase Login Guard
 * Enforces premium access after user login by checking subscription status
 */

import { createClient } from '@supabase/supabase-js';

// Setup client from env or fallback to null
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Enforces premium access after login
 * Checks user authentication, profile, and subscription status
 * Redirects to ?premium=required if user doesn't have valid premium access
 *
 * @param {SupabaseClient} client - Optional. Pass your own Supabase client. Defaults to internal one.
 * @returns {Promise<boolean>} true if access granted, false if redirected.
 */
export async function enforcePremiumAccessAfterLogin(client = supabase) {
  if (!client) {
    console.error("[mpl] Supabase client is not initialized.");
    redirectToPremiumRequired();
    return false;
  }

  try {
    const { data: { session }, error: sessionError } = await client.auth.getSession();

    if (sessionError || !session?.user) {
      console.error("[mpl] Invalid session or user", sessionError);
      redirectToPremiumRequired();
      return false;
    }

    const userId = session.user.id;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("subscription_type, access_until")
      .eq("id", userId)
      .maybeSingle();

    if (profileError || !profile) {
      console.error("[mpl] Unable to fetch profile", profileError);
      redirectToPremiumRequired();
      return false;
    }

    const subscriptionType = profile.subscription_type || "free";
    const accessUntil = profile.access_until ? new Date(profile.access_until) : null;
    const accessExpired = !accessUntil || isNaN(accessUntil.getTime()) || accessUntil <= new Date();

    if (subscriptionType === "free" || accessExpired) {
      console.log("[mpl] Access denied: free plan or expired");
      redirectToPremiumRequired();
      return false;
    }

    console.log("[mpl] Access granted: premium valid");
    return true;
  } catch (err) {
    console.error("[mpl] Unexpected error in access check", err);
    redirectToPremiumRequired();
    return false;
  }
}

/**
 * Redirects to ?premium=required if not already set
 */
function redirectToPremiumRequired() {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get('premium') !== 'required') {
      currentUrl.searchParams.set('premium', 'required');
      window.location.href = currentUrl.toString();
    }
  }
}

