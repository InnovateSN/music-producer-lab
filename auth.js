import { getStoredUser, setStoredUser } from "./lesson-access.js";
import { syncSupabasePremiumStatus } from "./supabase-access.js";

// Lightweight client auth state built on existing storage + Supabase sync.

const AUTH_EVENT = "mpl:auth-change";

function deriveState(user) {
  if (!user) {
    return { status: "free", user: null };
  }

  const hasPaid = Boolean(user.hasPaid);
  return {
    status: hasPaid ? "premium" : "logged",
    user: { ...user, hasPaid },
  };
}

function emitAuthState(state) {
  window.dispatchEvent(
    new CustomEvent(AUTH_EVENT, {
      detail: state,
    })
  );
  return state;
}

export function getAuthState() {
  return deriveState(getStoredUser());
}

export function setAuthState(user) {
  setStoredUser(user || null);
  return emitAuthState(getAuthState());
}

export function onAuthStateChange(callback) {
  if (typeof callback !== "function") return () => {};

  const handler = (event) => {
    const state = event?.detail || getAuthState();
    callback(state);
  };

  window.addEventListener(AUTH_EVENT, handler);
  callback(getAuthState());

  return () => window.removeEventListener(AUTH_EVENT, handler);
}

export async function refreshAuthState() {
  let nextState = getAuthState();

  try {
    const sync = await syncSupabasePremiumStatus();
    const storedUser = getStoredUser() || null;

    if (sync?.session?.user) {
      const syncedUser = {
        ...(storedUser || {}),
        email: sync.session.user.email,
        hasPaid: sync.isPremium === true,
      };
      setStoredUser(syncedUser);
    } else if (storedUser) {
      setStoredUser({ ...storedUser, hasPaid: sync?.isPremium ?? storedUser.hasPaid ?? false });
    }

    nextState = getAuthState();
  } catch (error) {
    console.warn("[mpl] Unable to refresh auth state", error);
  }

  return emitAuthState(nextState);
}
