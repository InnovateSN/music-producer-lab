// Stripe Checkout URL - will redirect to checkout.html which handles Stripe session
export const PREMIUM_CHECKOUT_URL = "/checkout.html";
export const PREMIUM_GATE_URL = "/index.html?premium=required";

const AUTH_USER_KEY = "mpl_auth_user";

function safeParse(json, fallback = null) {
  try {
    return JSON.parse(json);
  } catch (err) {
    return fallback;
  }
}

function normalizeSlug(slugOrUrl = "") {
  if (typeof slugOrUrl !== "string") return "";

  const fileName = slugOrUrl.split("/").pop() || "";
  return fileName.replace(/\.html$/i, "");
}

const premiumSlugs = [
  "lesson-drums-6",
  "lesson-arrangement",
  "lesson-mixing",
  "lesson-mastering",
  "lesson-distribution",
  "lesson-sound-design",
  "lesson-vocals",
];

export function getStoredUser() {
  return safeParse(localStorage.getItem(AUTH_USER_KEY));
}

export function setStoredUser(user) {
  if (!user) {
    localStorage.removeItem(AUTH_USER_KEY);
    return;
  }

  const planTier = user.planTier || user.tier || (user.hasPaid ? "premium" : "free");
  const normalizedUser = { ...user, hasPaid: Boolean(user.hasPaid), planTier };
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(normalizedUser));
}

export function isLessonProtected(slugOrUrl = "") {
  const slug = normalizeSlug(slugOrUrl);

  if (!slug) return false;

  const drumLessonMatch = slug.match(/^lesson-drums-(\d+)$/i);
  if (drumLessonMatch) {
    const lessonNumber = Number(drumLessonMatch[1]);
    if (Number.isFinite(lessonNumber) && lessonNumber <= 5) return false;
  }

  return premiumSlugs.includes(slug);
}

export function ensureLessonAccess(options = {}) {
  const slugOrUrl = typeof options === "string" ? options : options.lessonUrl || options.slug || "";
  const fallbackUrl =
    typeof options === "object" && options.fallbackUrl
      ? options.fallbackUrl
      : PREMIUM_GATE_URL;
  const requiresPaid =
    typeof options === "object" && "requiresPaid" in options
      ? options.requiresPaid
      : isLessonProtected(slugOrUrl);

  if (!requiresPaid) {
    return { allowed: true };
  }

  const user = getStoredUser();

  if (user?.hasPaid) {
    return { allowed: true, user };
  }

  if (fallbackUrl) {
    window.location.href = fallbackUrl;
  }

  return {
    allowed: false,
    redirectUrl: fallbackUrl,
    lessonUrl: slugOrUrl,
  };
}

export function persistPremiumEntitlement() {
  const user = getStoredUser() || {};
  user.hasPaid = true;
  setStoredUser(user);
}

export function clearPremiumEntitlement() {
  const user = getStoredUser();
  if (user) {
    user.hasPaid = false;
    setStoredUser(user);
  }
}
