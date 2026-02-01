/**
 * CLERK AUTHENTICATION INTEGRATION
 * Handles user authentication, sync with database, and UI updates
 *
 * CONFIGURATION: Set the Clerk publishable key via:
 * 1. Meta tag: <meta name="clerk-publishable-key" content="pk_...">
 * 2. Or global variable before this script: window.CLERK_PUBLISHABLE_KEY = 'pk_...'
 */

(function() {
  'use strict';

  // Get publishable key from meta tag or global variable (do not hardcode in production!)
  const CLERK_PUBLISHABLE_KEY = (function() {
    // Try meta tag first
    const metaTag = document.querySelector('meta[name="clerk-publishable-key"]');
    if (metaTag && metaTag.content) {
      return metaTag.content;
    }
    // Fall back to global variable
    if (window.CLERK_PUBLISHABLE_KEY) {
      return window.CLERK_PUBLISHABLE_KEY;
    }
    // Development fallback (should be replaced in production build)
    console.warn('Clerk publishable key not configured. Set via meta tag or window.CLERK_PUBLISHABLE_KEY');
    return null;
  })();

  // Global state
  window.MplAuth = {
    user: null,
    isLoaded: false,
    isSignedIn: false,
  };

  // Initialize Clerk
  async function initClerk() {
    try {
      // Wait for Clerk to load
      if (!window.Clerk) {
        console.error('Clerk not loaded');
        return;
      }

      await window.Clerk.load();

      window.MplAuth.isLoaded = true;
      window.MplAuth.user = window.Clerk.user;
      window.MplAuth.isSignedIn = !!window.Clerk.user;

      // Update UI
      updateAuthUI();

      // Sync with database if signed in
      if (window.MplAuth.isSignedIn) {
        await syncUserWithDatabase();
      }

      // Listen for auth state changes
      window.Clerk.addListener((event) => {
        if (event.user) {
          window.MplAuth.user = event.user;
          window.MplAuth.isSignedIn = true;
          updateAuthUI();
          syncUserWithDatabase();
        } else {
          window.MplAuth.user = null;
          window.MplAuth.isSignedIn = false;
          updateAuthUI();
        }
      });

    } catch (error) {
      console.error('Error initializing Clerk:', error);
    }
  }

  // Sync user with backend database
  async function syncUserWithDatabase() {
    try {
      const response = await fetch('/api/auth/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ User synced with database:', data.user);

        // Store user role locally
        if (data.user.role) {
          localStorage.setItem('userRole', data.user.role);
        }

        // Redirect teachers to dashboard
        if (data.user.role === 'teacher' || data.user.role === 'school_admin' || data.user.role === 'super_admin') {
          // Only redirect if on homepage or auth pages
          const currentPath = window.location.pathname;
          if (currentPath === '/' || currentPath === '/index.html' || currentPath.includes('sign-in') || currentPath.includes('sign-up')) {
            window.location.href = '/teacher';
          }
        }
      }
    } catch (error) {
      console.error('Error syncing user:', error);
    }
  }

  // Update authentication UI elements
  function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');

    if (!authButtons || !userMenu) return;

    if (window.MplAuth.isSignedIn) {
      // Hide auth buttons, show user menu
      authButtons.style.display = 'none';
      userMenu.style.display = 'flex';

      // Update user info
      const user = window.MplAuth.user;
      const userEmail = document.getElementById('user-email');
      const userAvatar = document.getElementById('user-avatar');
      const userName = document.getElementById('user-name');

      if (userEmail) {
        userEmail.textContent = user.primaryEmailAddress?.emailAddress || 'User';
      }

      if (userName) {
        const name = user.firstName || user.primaryEmailAddress?.emailAddress?.split('@')[0] || 'User';
        userName.textContent = name;
      }

      if (userAvatar && user.imageUrl) {
        userAvatar.src = user.imageUrl;
      }

      // Show role-specific links
      const role = localStorage.getItem('userRole');
      const dashboardLink = document.getElementById('dashboard-link');
      if (dashboardLink) {
        if (role === 'teacher' || role === 'school_admin' || role === 'super_admin') {
          dashboardLink.style.display = 'block';
          dashboardLink.href = '/teacher';
        } else {
          dashboardLink.style.display = 'none';
        }
      }

    } else {
      // Show auth buttons, hide user menu
      authButtons.style.display = 'flex';
      userMenu.style.display = 'none';
    }
  }

  // Auth actions
  window.MplAuth.signIn = function() {
    if (window.Clerk) {
      window.Clerk.openSignIn();
    }
  };

  window.MplAuth.signUp = function() {
    if (window.Clerk) {
      window.Clerk.openSignUp();
    }
  };

  window.MplAuth.signOut = async function() {
    if (window.Clerk) {
      await window.Clerk.signOut();
      localStorage.removeItem('userRole');
      window.location.href = '/index.html';
    }
  };

  window.MplAuth.openUserProfile = function() {
    if (window.Clerk) {
      window.Clerk.openUserProfile();
    }
  };

  // Toggle user menu dropdown
  window.MplAuth.toggleUserMenu = function() {
    const dropdown = document.getElementById('user-menu-dropdown');
    if (dropdown) {
      const isOpen = dropdown.style.display === 'block';
      dropdown.style.display = isOpen ? 'none' : 'block';
    }
  };

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('user-menu');
    const dropdown = document.getElementById('user-menu-dropdown');

    if (dropdown && userMenu && !userMenu.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });

  // Initialize when Clerk script loads
  window.addEventListener('load', () => {
    // Wait for Clerk to be available
    const checkClerk = setInterval(() => {
      if (window.Clerk) {
        clearInterval(checkClerk);
        initClerk();
      }
    }, 100);

    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(checkClerk);
      if (!window.Clerk) {
        console.warn('Clerk failed to load after 10 seconds');
      }
    }, 10000);
  });

})();
