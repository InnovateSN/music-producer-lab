/**
 * Page access guard
 *
 * SECURITY NOTE: Client-side checks are for UI/UX only and can be bypassed.
 * All premium/restricted content access MUST be enforced server-side via API.
 * Never trust client-side localStorage values for authorization decisions.
 */

/**
 * Check page access - calls server to verify user's access rights
 * This should be used for premium content gates
 */
export async function guardPageAccess(options = {}) {
  const { lessonKey, requirePremium = false } = options;

  // If no premium requirement, allow access
  if (!requirePremium) {
    return {
      allowed: true,
      reason: 'access_granted'
    };
  }

  // Verify premium status server-side
  try {
    const response = await fetch('/api/users/me');
    if (!response.ok) {
      return {
        allowed: false,
        reason: 'not_authenticated'
      };
    }

    const data = await response.json();
    const user = data.user;

    // Check server-provided premium status (not localStorage!)
    if (user?.is_premium || user?.role === 'school_admin' || user?.role === 'super_admin') {
      return {
        allowed: true,
        reason: 'premium_access'
      };
    }

    return {
      allowed: false,
      reason: 'premium_required'
    };
  } catch (error) {
    console.error('Error checking access:', error);
    // Fail closed - deny access on error for premium content
    return {
      allowed: false,
      reason: 'verification_error'
    };
  }
}

/**
 * Client-side premium indicator (for UI only)
 * WARNING: Do NOT use this for access control - it can be bypassed!
 * Use guardPageAccess() with server verification instead.
 */
export function isPremiumUser() {
  // This is for UI display only, not authorization
  // The actual check is done server-side in guardPageAccess()
  console.warn('isPremiumUser() is for UI hints only. Use guardPageAccess() for access control.');
  return localStorage.getItem('mpl-premium') === 'true';
}

/**
 * Check if a lesson requires premium access
 * The actual enforcement happens server-side
 */
export function requiresPremium(lessonUrl) {
  // Define which lessons require premium (none for now)
  // When premium lessons are added, they should also be checked server-side
  const premiumLessons = [];
  return premiumLessons.includes(lessonUrl);
}

/**
 * Sync premium status from server
 * Call this after login to update the UI indicator
 */
export async function syncPremiumStatus() {
  try {
    const response = await fetch('/api/users/me');
    if (response.ok) {
      const data = await response.json();
      const isPremium = data.user?.is_premium || false;
      // Update localStorage for UI hints only
      localStorage.setItem('mpl-premium', isPremium ? 'true' : 'false');
      return isPremium;
    }
  } catch (error) {
    console.error('Error syncing premium status:', error);
  }
  return false;
}
