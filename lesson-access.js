const AUTH_USER_KEY = "mpl_auth_user";

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

export function setStoredUser(user) {
  if (!user) {
    localStorage.removeItem(AUTH_USER_KEY);
    return;
  }

  localStorage.setItem(
    AUTH_USER_KEY,
    JSON.stringify({ ...user, hasPaid: Boolean(user.hasPaid) })
  );
}

export function isLessonProtected(lessonUrl = "") {
  const fileName = lessonUrl.split("/").pop() || "";

  const drumLessonMatch = fileName.match(/lesson-drums-(\d+)\.html/i);
  if (drumLessonMatch) {
    const lessonNumber = Number(drumLessonMatch[1]);
    return Number.isFinite(lessonNumber) && lessonNumber >= 6;
  }

  return true;
}

export function ensureLessonAccess({
  lessonUrl = "",
  requiresPaid = false,
  fallbackUrl = "/signup",
} = {}) {
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
    lessonUrl,
  };
}
