import { clearPremiumEntitlement, persistPremiumEntitlement } from "./lesson-access.js";

let supabaseClient = null;

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

  const userId = session.user.id;
  const { data: profile, error } = await supabase
    .from("users")
    .select("has_paid, email")
    .eq("id", userId)
    .single();

  if (error) {
    console.warn("[mpl] Unable to fetch premium status", error.message);
  }

  const isPremium = profile?.has_paid === true;

  persistPremiumEntitlement({
    status: {
      hasAccess: isPremium,
      plan: isPremium ? "premium" : "free",
      checkedAt: Date.now(),
      entitlementToken: session.access_token,
      expiresAt: null,
      revoked: !isPremium,
    },
    token: session.access_token,
  });

  return { synced: true, session, isPremium, profile };
}
