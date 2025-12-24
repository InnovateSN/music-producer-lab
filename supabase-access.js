/**
 * Supabase Access Module
 * Handles premium status synchronization with Supabase
 * Works with Stripe subscription data stored in users table
 */

import { clearPremiumEntitlement, persistPremiumEntitlement } from "./lesson-access.js";

let supabaseClient = null;

/**
 * Computes access state from profile data
 * @param {object|null} profile - User profile from database
 * @returns {{accessUntil: Date|null, userHasValidAccess: boolean, subscriptionType: string|null, tier: string}}
 */
function computeAccessState(profile) {
  const accessUntilRaw = profile?.access_until;
  const accessUntil = accessUntilRaw ? new Date(accessUntilRaw) : null;
  
  // Check if access is still valid (with 1 minute grace period for clock skew)
  const GRACE_PERIOD_MS = 60 * 1000;
  const userHasValidAccess = Boolean(
    accessUntil && 
    !isNaN(accessUntil.getTime()) && 
    accessUntil.getTime() > Date.now() - GRACE_PERIOD_MS
  );

  return { 
    accessUntil, 
    userHasValidAccess,
    subscriptionType: profile?.subscription_type || null,
    tier: profile?.plan_tier || 'free',
    subscriptionStatus: profile?.subscription_status || 'inactive',
  };
}

/**
 * Lazily loads and initializes the Supabase client
 * @returns {Promise<SupabaseClient|null>}
 */
async function loadSupabase() {
  if (supabaseClient) return supabaseClient;

  const supabaseUrl = window.__SUPABASE_URL__;
  const supabaseAnonKey = window.__SUPABASE_ANON_KEY__;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("[mpl] Supabase config missing; premium sync skipped.");
    return null;
  }

  const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2?bundle");
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  });

  return supabaseClient;
}

/**
 * Gets the Supabase client instance
 * @returns {Promise<SupabaseClient|null>}
 */
export async function getSupabaseClient() {
  return loadSupabase();
}

/**
 * Ensures a user profile exists in the database
 * Creates one if it doesn't exist (fallback for users who signed up before profile creation trigger)
 * 
 * @param {object} session - Supabase session object
 * @returns {Promise<object|null>} The user profile
 */
async function ensureUserProfile(supabase, session) {
  const email = session.user.email;
  const userId = session.user.id;

  // First try to fetch existing profile
  let { data: profile, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.warn("[mpl] Error fetching profile:", error.message);
    return null;
  }

  // If no profile exists, create one
  if (!profile) {
    console.log("[mpl] Creating profile for user:", email);
    
    const { data: newProfile, error: insertError } = await supabase
      .from("users")
      .insert({
        id: userId,
        email,
        has_paid: false,
        plan_tier: 'free',
        subscription_status: 'inactive',
      })
      .select()
      .single();

    if (insertError) {
      // Profile might have been created by another process (race condition)
      // Try fetching again
      if (insertError.code === '23505') { // Unique violation
        const { data: existingProfile } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .maybeSingle();
        return existingProfile;
      }
      
      console.error("[mpl] Error creating profile:", insertError);
      return null;
    }

    profile = newProfile;
  }

  return profile;
}

/**
 * Syncs premium status from Supabase and updates local storage
 * This is the main function to call to check/refresh user's premium status
 * 
 * @returns {Promise<{synced: boolean, session: object|null, isPremium: boolean, profile?: object, userHasValidAccess?: boolean}>}
 */
export async function syncSupabasePremiumStatus() {
  const supabase = await loadSupabase();
  if (!supabase) return { synced: false, session: null, isPremium: false };

  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) {
    console.error("[mpl] Unable to read Supabase session", sessionError);
  }

  const session = sessionData?.session || null;
  if (!session) {
    clearPremiumEntitlement();
    return { synced: true, session: null, isPremium: false };
  }

  // Ensure profile exists (creates one if needed)
  const profile = await ensureUserProfile(supabase, session);

  if (!profile) {
    console.warn("[mpl] Unable to fetch or create profile");
    return { synced: true, session, isPremium: false };
  }

  const { userHasValidAccess, tier, subscriptionStatus } = computeAccessState(profile);
  
  // User is premium if:
  // 1. They have has_paid = true AND valid access (time-based check)
  // 2. OR they have has_paid = true and no access_until (lifetime with old data)
  const isPremium = profile?.has_paid === true && (
    userHasValidAccess || 
    !profile.access_until // Legacy: has_paid without access_until means lifetime
  );

  if (isPremium) {
    persistPremiumEntitlement();
  } else {
    clearPremiumEntitlement();
  }

  return { 
    synced: true, 
    session, 
    isPremium, 
    profile, 
    userHasValidAccess,
    tier,
    subscriptionStatus,
  };
}

/**
 * Derives access state from a profile object
 * @param {object|null} profile - User profile
 * @returns {{accessUntil: Date|null, userHasValidAccess: boolean}}
 */
export function deriveAccessFromProfile(profile) {
  return computeAccessState(profile);
}

/**
 * Checks if current user has premium access (simple boolean check)
 * @returns {Promise<boolean>}
 */
export async function hasPremiumAccess() {
  const { isPremium } = await syncSupabasePremiumStatus();
  return isPremium;
}

/**
 * Gets the current user's subscription tier
 * @returns {Promise<string>} 'free', 'basic', 'pro', 'premium', or 'elite'
 */
export async function getUserTier() {
  const { profile, isPremium } = await syncSupabasePremiumStatus();
  
  if (!isPremium) return 'free';
  return profile?.plan_tier || 'pro';
}

/**
 * Gets the current user's email if logged in
 * @returns {Promise<string|null>}
 */
export async function getCurrentUserEmail() {
  const supabase = await loadSupabase();
  if (!supabase) return null;

  const { data: { session } } = await supabase.auth.getSession();
  return session?.user?.email || null;
}

/**
 * Signs out the current user
 * @returns {Promise<void>}
 */
export async function signOut() {
  const supabase = await loadSupabase();
  if (!supabase) return;

  await supabase.auth.signOut();
  clearPremiumEntitlement();
  
  // Clear local storage
  localStorage.removeItem('mpl_auth_user');
}

/**
 * Listens for auth state changes
 * @param {function} callback - Called with (session, event) when auth state changes
 * @returns {function} Unsubscribe function
 */
export async function onAuthStateChange(callback) {
  const supabase = await loadSupabase();
  if (!supabase) return () => {};

  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    callback(session, event);
    
    // Re-sync premium status on auth changes
    if (event === 'SIGNED_IN') {
      syncSupabasePremiumStatus();
    } else if (event === 'SIGNED_OUT') {
      clearPremiumEntitlement();
    }
  });

  return () => subscription.unsubscribe();
}
