export async function enforcePremiumAccessAfterLogin(client = supabase) {
  if (!client) {
    throw new Error("Supabase client is required to check premium access.");
  }

  const { data: userData, error: userError } = await client.auth.getUser();

  if (userError || !userData?.user?.id) {
    console.error("[mpl] Unable to read Supabase user", userError);
    window.location.href = "?premium=required";
    return false;
  }

  const { data: profile, error: profileError } = await client
    .from("profiles")
    .select("subscription_type, access_until")
    .eq("id", userData.user.id)
    .maybeSingle();

  if (profileError) {
    console.error("[mpl] Unable to fetch profile after login", profileError);
    window.location.href = "?premium=required";
    return false;
  }

  const subscriptionType = profile?.subscription_type || "free";
  const accessUntil = profile?.access_until ? new Date(profile.access_until) : null;
  const accessExpired = !accessUntil || Number.isNaN(accessUntil.getTime()) || accessUntil.getTime() <= Date.now();

  if (subscriptionType === "free" || accessExpired) {
    window.location.href = "?premium=required";
    return false;
  }

  return true;
}
