import { getAuthState, onAuthStateChange, refreshAuthState } from "./auth.js";
import { ensureLessonAccess } from "./lesson-access.js";

// Minimal guards to block premium sections/pages without changing layout.

export async function guardPageAccess(options = {}) {
  const { requiresPremium = false, fallbackUrl = "/signup.html", lessonUrl } = options;
  const currentState = getAuthState();

  if (requiresPremium) {
    const gate = ensureLessonAccess({
      lessonUrl,
      requiresPaid: true,
      fallbackUrl,
    });

    if (!gate.allowed) {
      return { allowed: false, state: currentState };
    }
  }

  let state = currentState;
  try {
    state = await refreshAuthState();
  } catch (error) {
    console.warn("[mpl] Guard refresh failed", error);
  }

  if (requiresPremium && state.status !== "premium") {
    if (fallbackUrl) {
      window.location.href = fallbackUrl;
    }
    return { allowed: false, state };
  }

  return { allowed: true, state };
}

export function guardPremiumSections(options = {}) {
  const selector = options.selector || "[data-mpl-premium]";
  const statusSelector = options.statusSelector || "[data-mpl-premium-status]";
  const loginUrl = options.loginUrl || "/explanation.html?auth=login";
  const purchaseUrl = options.purchaseUrl || "/signup.html";

  const sections = Array.from(document.querySelectorAll(selector));
  if (!sections.length) return getAuthState();

  const applyState = (state) => {
    sections.forEach((section) => {
      const locked = state.status !== "premium";
      section.dataset.locked = locked ? "true" : "false";
      section.setAttribute("aria-disabled", locked ? "true" : "false");

      const statusEl = section.matches(statusSelector)
        ? section
        : section.querySelector(statusSelector);

      if (statusEl) {
        if (!locked) {
          statusEl.textContent = "Contenuto premium sbloccato.";
        } else if (state.status === "logged") {
          statusEl.textContent = "Contenuto riservato: aggiorna a Premium per continuare.";
        } else {
          statusEl.textContent = "Accedi o acquista per sbloccare questo contenuto.";
        }
      }

      const loginCta = section.querySelector("[data-mpl-login-cta]");
      const upgradeCta = section.querySelector("[data-mpl-upgrade-cta]");
      if (loginCta) loginCta.href = loginUrl;
      if (upgradeCta) upgradeCta.href = purchaseUrl;
    });
  };

  applyState(getAuthState());
  refreshAuthState().then(applyState).catch(() => applyState(getAuthState()));
  onAuthStateChange(applyState);

  return getAuthState();
}
