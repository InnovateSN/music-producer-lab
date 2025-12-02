const AUTH_USER_KEY = "mpl_auth_user";
const PREMIUM_STATUS_KEY = "mpl_premium_status";
const PENDING_LESSON_KEY = "mpl_pending_lesson";

function safeParse(json, fallback = null) {
  try {
    return JSON.parse(json);
  } catch (err) {
    return fallback;
  }
}

export function getStoredUser() {
  return safeParse(localStorage.getItem(AUTH_USER_KEY));
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

export function getStoredPremiumStatus() {
  return safeParse(localStorage.getItem(PREMIUM_STATUS_KEY));
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
  const user = getStoredUser();
  const isGuest = !!user?.isGuest;
  const hasPremium = !!premium?.hasAccess;

  if (!requiresPremium) {
    return { allowed: true };
  }

  if (hasPremium) {
    return { allowed: true };
  }

  if (lessonUrl) {
    markPendingLesson(lessonUrl);
  }

  const reason = isGuest
    ? "Guest sessions cannot open premium lessons yet. Create a free account to continue."
    : "This is a premium lesson. Log in or join to unlock it.";

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
