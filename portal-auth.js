import { setAuthState } from "./auth.js";
import { PREMIUM_CHECKOUT_URL } from "./lesson-access.js";
import { getSupabaseClient, syncSupabasePremiumStatus } from "./supabase-access.js";

function setStatus(element, message, state = "info") {
  if (!element) return;
  element.textContent = message || "";
  element.dataset.state = state;
}

async function withSupabase(statusEl) {
  const client = await getSupabaseClient();
  if (!client) {
    setStatus(statusEl, "Configura le chiavi pubbliche Supabase prima di continuare.", "error");
    throw new Error("Supabase client unavailable");
  }
  return client;
}

export async function initAuthForm(mode = "login") {
  const form = document.querySelector("[data-mpl-auth-form]");
  const statusEl = document.querySelector("[data-mpl-auth-status]");
  if (!form) return;

  let supabase;
  try {
    supabase = await withSupabase(statusEl);
  } catch (error) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setStatus(statusEl, "Inserisci email e password.", "error");
      return;
    }

    setStatus(statusEl, mode === "login" ? "Accesso in corso..." : "Creazione account in corso...");

    const action =
      mode === "login"
        ? () => supabase.auth.signInWithPassword({ email, password })
        : () => supabase.auth.signUp({ email, password });

    const { data, error } = await action();

    if (error) {
      setStatus(statusEl, error.message || "Errore di autenticazione.", "error");
      return;
    }

    if (mode === "signup") {
      if (data?.user) {
        setStatus(statusEl, "Account creato. Controlla la mail per confermare e poi accedi.", "success");
        form.reset();
      } else {
        setStatus(statusEl, "Registrazione completata.", "success");
      }
      return;
    }

    if (data?.session) {
      const synced = await syncSupabasePremiumStatus();
      const planTier = synced.profile?.plan_tier || (synced.isPremium ? "premium" : "free");
      setAuthState({ email, hasPaid: synced.isPremium, planTier });
      setStatus(statusEl, "Accesso riuscito! Reindirizzamento...", "success");
      window.location.href = "members/dashboard.html";
      return;
    }

    setStatus(statusEl, "Nessuna sessione trovata. Riprova.", "error");
  });
}

function formatPlan(tier) {
  if (!tier) return "free";
  if (tier.toLowerCase() === "free") return "Free";
  return tier.charAt(0).toUpperCase() + tier.slice(1);
}

export async function initDashboardPage() {
  const statusEl = document.querySelector("[data-mpl-dashboard-status]");
  const userLabel = document.querySelector("[data-mpl-dashboard-user]");
  const upgradeBanner = document.querySelector("[data-mpl-upgrade]");
  const premiumBlocks = Array.from(document.querySelectorAll("[data-mpl-premium-block]"));
  const premiumCtas = Array.from(document.querySelectorAll("[data-mpl-upgrade-cta]")).concat(
    Array.from(document.querySelectorAll("[data-mpl-upgrade-link]"))
  );
  const logoutBtn = document.querySelector("[data-mpl-logout]");

  premiumCtas.forEach((link) => {
    link.href = PREMIUM_CHECKOUT_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  let supabase;
  try {
    supabase = await withSupabase(statusEl);
  } catch (error) {
    return;
  }
  const { data: sessionData } = await supabase.auth.getSession();

  if (!sessionData?.session) {
    window.location.href = "../login.html";
    return;
  }

  const session = sessionData.session;
  const email = session.user.email;
  userLabel.textContent = email;
  setStatus(statusEl, "Sincronizzo lo stato di pagamento...");

  const { data: profile, error } = await supabase
    .from("users")
    .select("has_paid, plan_tier")
    .eq("id", session.user.id)
    .maybeSingle();

  if (error) {
    setStatus(statusEl, "Impossibile caricare il profilo. Riprova.", "error");
    return;
  }

  const hasPaid = profile?.has_paid === true;
  const planTier = profile?.plan_tier || (hasPaid ? "premium" : "free");
  setAuthState({ email, hasPaid, planTier });

  if (hasPaid) {
    setStatus(statusEl, `Accesso Premium (${formatPlan(planTier)}) attivo.`, "success");
    upgradeBanner?.setAttribute("hidden", "true");
    premiumBlocks.forEach((block) => block.classList.remove("mpl-locked"));
  } else {
    setStatus(statusEl, "Profilo free: aggiorna per sbloccare tutti i laboratori.");
    upgradeBanner?.removeAttribute("hidden");
    premiumBlocks.forEach((block) => block.classList.add("mpl-locked"));
  }

  logoutBtn?.addEventListener("click", async () => {
    await supabase.auth.signOut();
    setAuthState(null);
    window.location.href = "../index.html";
  });
}
