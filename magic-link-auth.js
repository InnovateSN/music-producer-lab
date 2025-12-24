import { PREMIUM_CHECKOUT_URL } from "./lesson-access.js";
import { deriveAccessFromProfile, getSupabaseClient } from "./supabase-access.js";

function setStatus(element, message, state = "info") {
  if (!element) return;
  element.textContent = message || "";
  element.dataset.state = state;
}

export async function initMagicLinkRequest() {
  const form = document.querySelector("[data-magic-link-form]");
  const statusEl = document.querySelector("[data-magic-link-status]");
  if (!form) return;

  const supabase = await getSupabaseClient();
  if (!supabase) {
    setStatus(statusEl, "Configura __SUPABASE_URL__ e __SUPABASE_ANON_KEY__ per inviare il Magic Link.", "error");
    return;
  }

  const redirectPath = `${window.location.origin}/premium.html`;

  const { data: sessionData } = await supabase.auth.getSession();
  if (sessionData?.session) {
    setStatus(statusEl, "Sessione già attiva: reindirizzamento...", "success");
    window.location.href = redirectPath;
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email");

    if (!email) {
      setStatus(statusEl, "Inserisci la tua email.", "error");
      return;
    }

    setStatus(statusEl, "Invio del Magic Link in corso...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectPath,
        shouldCreateUser: true,
      },
    });

    if (error) {
      setStatus(statusEl, error.message || "Errore durante l'invio del link.", "error");
      return;
    }

    setStatus(statusEl, "Controlla la tua casella di posta: il Magic Link è in arrivo.", "success");
    form.reset();
  });
}

function showLockedMessage(messageEl, contentEl, message) {
  const target =
    messageEl.querySelector("[data-premium-locked-message]") ||
    messageEl.querySelector("p") ||
    messageEl;
  target.textContent = message;
  messageEl.removeAttribute("hidden");
  contentEl.setAttribute("hidden", "true");
}

export async function initPremiumGate() {
  const statusEl = document.querySelector("[data-premium-status]");
  const emailEl = document.querySelector("[data-premium-email]");
  const contentEl = document.querySelector("[data-premium-content]");
  const lockedEl = document.querySelector("[data-premium-locked]");
  const logoutBtn = document.querySelector("[data-premium-logout]");

  if (!contentEl || !lockedEl) return;

  const supabase = await getSupabaseClient();
  if (!supabase) {
    showLockedMessage(
      lockedEl,
      contentEl,
      "Configura le chiavi Supabase per verificare l'accesso Premium."
    );
    setStatus(statusEl, "Client Supabase mancante", "error");
    return;
  }

  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData?.session;

  if (!session) {
    showLockedMessage(lockedEl, contentEl, "Devi accedere per vedere questa pagina. Torna alla home e richiedi il Magic Link.");
    setStatus(statusEl, "Nessuna sessione attiva", "error");
    return;
  }

  const email = session.user.email;
  emailEl.textContent = email;
  setStatus(statusEl, "Verifico l'abbonamento...");

  const { data: profile, error } = await supabase
    .from("users")
    .select("email, subscription_type, access_until")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    setStatus(statusEl, "Impossibile leggere il profilo utente.", "error");
    showLockedMessage(lockedEl, contentEl, "Errore nel caricamento del profilo. Riprova più tardi.");
    return;
  }

  const { accessUntil, userHasValidAccess } = deriveAccessFromProfile(profile);
  window.userHasValidAccess = userHasValidAccess;

  const upgradeCta = lockedEl.querySelector("[data-upgrade-btn]") || document.createElement("a");
  upgradeCta.textContent = "Upgrade";
  upgradeCta.href = PREMIUM_CHECKOUT_URL;
  upgradeCta.className = "mpl-button";
  upgradeCta.setAttribute("data-upgrade-btn", "true");
  upgradeCta.target = "_blank";
  upgradeCta.rel = "noopener noreferrer";

  if (!lockedEl.querySelector("[data-upgrade-btn]")) {
    lockedEl.appendChild(upgradeCta);
  }

  if (!userHasValidAccess) {
    setStatus(statusEl, "Profilo free o scaduto", "error");
    showLockedMessage(
      lockedEl,
      contentEl,
      "Accesso riservato solo ai membri attivi. Torna alla home o effettua l'acquisto."
    );
  } else {
    const expiryLabel = accessUntil ? new Date(accessUntil).toLocaleDateString() : "";
    setStatus(
      statusEl,
      expiryLabel ? `Accesso Premium attivo · valido fino al ${expiryLabel}` : "Accesso Premium attivo",
      "success"
    );
    lockedEl.setAttribute("hidden", "true");
    contentEl.removeAttribute("hidden");
  }

  logoutBtn?.addEventListener("click", async () => {
    await supabase.auth.signOut();
    window.location.href = "/index.html";
  });
}
