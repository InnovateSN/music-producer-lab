const AUTH_USER_KEY = "mpl_auth_user";
const PREMIUM_STATUS_KEY = "mpl_premium_status";
const PREMIUM_TOKEN_COOKIE = "mpl_premium_token";
const PENDING_LESSON_KEY = "mpl_pending_lesson";
const ACCESS_PLAN_KEY = "mpl-access-plan";
const ENTITLEMENT_MAX_AGE_MS = 1000 * 60 * 30; // 30 minutes freshness window

function safeParse(json, fallback = null) {
  try {
    return JSON.parse(json);
  } catch (err) {
    return fallback;
  }
}

function isBackendAvailable() {
  try {
    const apiBaseUrl = (window.mplApiBaseUrl || "").replace(/\/$/, "");
    return Boolean(
      window.mplBackendAvailable ??
        window.__MPL_BACKEND_ENABLED__ ??
        (apiBaseUrl && apiBaseUrl.length > 0)
    );
  } catch (err) {
    return false;
  }
}

export function getStoredUser() {
  return safeParse(localStorage.getItem(AUTH_USER_KEY));
}

function enableDemoAdminFromQuery() {
  if (isBackendAvailable()) return;

  try {
    const params = new URLSearchParams(window.location?.search || "");
    const adminFlag = params.get("admin");
    const isDemoAdmin =
      typeof adminFlag === "string" &&
      ["true", "1", "demo"].includes(adminFlag.toLowerCase());

    if (!isDemoAdmin) return;

    const existingUser = getStoredUser();
    if (existingUser?.role === "admin") return;

    const adminUser = {
      name: "Demo Admin",
      email: "admin@mpl.local",
      username: "admin",
      role: "admin",
      isAdmin: true,
    };

    const entitlementToken = "mpl-demo-admin";

    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(adminUser));
    localStorage.setItem(ACCESS_PLAN_KEY, "admin");

    persistPremiumEntitlement({
      token: entitlementToken,
      status: {
        hasAccess: true,
        plan: "admin",
        checkedAt: Date.now(),
        entitlementToken,
        expiresAt: null,
        revoked: false,
      },
    });

    // Optional visual confirmation for debugging/demo purposes only
    console.info("[mpl] Demo admin access enabled via URL parameter.");
    document.body?.setAttribute("data-mpl-demo-admin", "true");
  } catch (err) {
    console.warn("Unable to apply demo admin access", err);
  }
}

export function persistPremiumStatus(status) {
  try {
    if (!status) {
      localStorage.removeItem(PREMIUM_STATUS_KEY);
      return;
    }
    localStorage.setItem(PREMIUM_STATUS_KEY, JSON.stringify(status));
  } catch (err) {
    console.warn("Unable to persist premium status", err);
  }
}

export function getStoredPremiumStatus({ validate = true } = {}) {
  const stored = safeParse(localStorage.getItem(PREMIUM_STATUS_KEY));

  if (!validate || !stored) return stored;

  const now = Date.now();
  const isExpired = stored?.expiresAt && now > stored.expiresAt;
  const isRevoked = stored?.revoked === true;

  if (isExpired || isRevoked) {
    clearPremiumEntitlement();
    return null;
  }

  return stored;
}

function persistPremiumToken(token) {
  try {
    if (!token) {
      document.cookie = `${PREMIUM_TOKEN_COOKIE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      return;
    }

    // Keep the token short-lived so entitlement checks remain fresh
    const maxAge = 60 * 60; // 1 hour
    document.cookie = `${PREMIUM_TOKEN_COOKIE}=${token}; path=/; secure; samesite=strict; max-age=${maxAge}`;
  } catch (err) {
    console.warn("Unable to persist premium token", err);
  }
}

function getPremiumToken() {
  try {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === PREMIUM_TOKEN_COOKIE && value) {
        return value;
      }
    }
  } catch (err) {
    console.warn("Unable to read premium token", err);
  }
  return null;
}

export function persistPremiumEntitlement({ status, token }) {
  persistPremiumStatus(status);
  persistPremiumToken(token);
}

export function clearPremiumEntitlement() {
  persistPremiumStatus(null);
  persistPremiumToken(null);
}

export function markPendingLesson(url) {
  if (!url) return;
  try {
    sessionStorage.setItem(PENDING_LESSON_KEY, url);
  } catch (err) {
    console.warn("Unable to persist pending lesson", err);
  }
}

export function consumePendingLesson(defaultUrl = null) {
  try {
    const stored = sessionStorage.getItem(PENDING_LESSON_KEY);
    if (stored) {
      sessionStorage.removeItem(PENDING_LESSON_KEY);
      return stored;
    }
  } catch (err) {
    console.warn("Unable to read pending lesson", err);
  }
  return defaultUrl;
}

export function clearPendingLesson() {
  try {
    sessionStorage.removeItem(PENDING_LESSON_KEY);
  } catch (err) {
    console.warn("Unable to clear pending lesson", err);
  }
}

export function ensureLessonAccess({
  lessonUrl,
  requiresPremium = false,
  fallbackUrl = "explanation.html",
} = {}) {
  const premium = getStoredPremiumStatus();
  const token = getPremiumToken() || premium?.entitlementToken;
  const user = getStoredUser();
  const isAdmin = user?.role === "admin" || user?.isAdmin;
  const isGuest = !!user?.isGuest;
  const now = Date.now();
  const isExpired = premium?.expiresAt && now > premium.expiresAt;
  const isRevoked = premium?.revoked === true;
  const isFresh = Boolean(
    premium?.hasAccess &&
      token &&
      premium?.checkedAt &&
      now - premium.checkedAt < ENTITLEMENT_MAX_AGE_MS &&
      !isExpired &&
      !isRevoked
  );

  if ((isExpired || isRevoked) && premium) {
    clearPremiumEntitlement();
  }

  if (isAdmin) {
    return { allowed: true };
  }

  if (!requiresPremium) {
    return { allowed: true };
  }

  if (isFresh) {
    return { allowed: true };
  }

  if (lessonUrl) {
    markPendingLesson(lessonUrl);
  }

  const reason = isGuest
    ? "Guest sessions cannot open premium lessons yet. Create a free account to continue."
    : "Music Producer Lab premium lesson. Sign in or unlock access via Gumroad to continue.";

  return {
    allowed: false,
    reason,
    fallbackUrl,
  };
}

export function renderLessonLock(message, fallbackUrl = "explanation.html") {
  const lock = document.createElement("div");
  lock.setAttribute("role", "alertdialog");
  lock.setAttribute("aria-live", "assertive");
  lock.style.position = "fixed";
  lock.style.inset = "0";
  lock.style.background = "rgba(7,7,10,0.9)";
  lock.style.color = "#f6f7fb";
  lock.style.zIndex = "9999";
  lock.style.display = "flex";
  lock.style.alignItems = "center";
  lock.style.justifyContent = "center";
  lock.style.padding = "1.5rem";

  lock.innerHTML = `
    <div style="max-width: 540px; width: 100%; background: #0f111a; border: 1px solid #2c3042; border-radius: 16px; padding: 1.4rem 1.6rem; box-shadow: 0 16px 48px rgba(0,0,0,0.35);">
      <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem;">Lesson locked</div>
      <p style="line-height: 1.6; margin-bottom: 0.9rem;">${message}</p>
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
        <button id="mpl-lesson-lock-home" style="padding: 0.55rem 1rem; background: transparent; color: #f6f7fb; border: 1px solid #3b3f53; border-radius: 10px; cursor: pointer;">Back to overview</button>
        <button id="mpl-lesson-lock-retry" style="padding: 0.55rem 1rem; background: linear-gradient(135deg,#ff5a3d,#ffb28a); color: #0f111a; border: none; border-radius: 10px; cursor: pointer;">Log in or join</button>
      </div>
    </div>
  `;

  lock.querySelector("#mpl-lesson-lock-home").addEventListener("click", () => {
    window.location.href = fallbackUrl;
  });

  lock.querySelector("#mpl-lesson-lock-retry").addEventListener("click", () => {
    window.location.href = fallbackUrl;
  });

  document.body.appendChild(lock);
}

enableDemoAdminFromQuery();
