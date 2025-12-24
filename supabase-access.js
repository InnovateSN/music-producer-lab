import { clearPremiumEntitlement, persistPremiumEntitlement } from "./lesson-access.js";

let supabaseClient = null;

function computeAccessState(profile) {
  const accessUntilRaw = profile?.access_until;
  const accessUntil = accessUntilRaw ? new Date(accessUntilRaw) : null;
  const userHasValidAccess = Boolean(accessUntil && accessUntil.getTime() > Date.now());

  return { accessUntil, userHasValidAccess };
}

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

export async function getSupabaseClient() {
  return loadSupabase();
}

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

  const email = session.user.email;
  const { data: profile, error } = await supabase
    .from("users")
    .select("has_paid, email, plan_tier, subscription_type, access_until")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.warn("[mpl] Unable to fetch premium status", error.message);
  }

  const { userHasValidAccess } = computeAccessState(profile);
  const isPremium = userHasValidAccess || profile?.has_paid === true;

  if (isPremium) {
    persistPremiumEntitlement();
  } else {
    clearPremiumEntitlement();
  }

  return { synced: true, session, isPremium, profile, userHasValidAccess };
}

export function deriveAccessFromProfile(profile) {
  return computeAccessState(profile);
}
