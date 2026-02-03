/**
 * AUTHENTICATION INTEGRATION (NextAuth)
 * Handles user authentication, session management, and UI updates
 * Replaces Clerk with local email/password authentication
 */

(function() {
  'use strict';

  // Only log in development
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const log = isDev ? console.log.bind(console) : function() {};

  // Global state
  window.MplAuth = {
    user: null,
    isLoaded: false,
    isSignedIn: false,
  };

  // Initialize authentication
  async function initAuth() {
    try {
      // Check for existing session via NextAuth
      const response = await fetch('/api/auth/session');
      const session = await response.json();

      window.MplAuth.isLoaded = true;

      if (session && session.user) {
        window.MplAuth.user = {
          id: session.user.id,
          email: session.user.email,
          firstName: session.user.firstName || session.user.name?.split(' ')[0],
          lastName: session.user.lastName || session.user.name?.split(' ').slice(1).join(' '),
          role: session.user.role || 'student',
          imageUrl: session.user.image || null,
          primaryEmailAddress: { emailAddress: session.user.email }
        };
        window.MplAuth.isSignedIn = true;

        // Store user role locally
        localStorage.setItem('userRole', session.user.role || 'student');

        log('[Auth] User signed in:', session.user.email);

        // Redirect teachers to dashboard if on home/auth pages
        const role = session.user.role;
        if (role === 'teacher' || role === 'school_admin' || role === 'super_admin') {
          const currentPath = window.location.pathname;
          if (currentPath === '/' || currentPath === '/index.html' ||
              currentPath.includes('signin') || currentPath.includes('signup')) {
            window.location.href = '/teacher';
            return;
          }
        }
      } else {
        window.MplAuth.user = null;
        window.MplAuth.isSignedIn = false;
        localStorage.removeItem('userRole');
        log('[Auth] No active session');
      }

      // Update UI
      updateAuthUI();

    } catch (error) {
      console.error('[Auth] Error initializing:', error);
      window.MplAuth.isLoaded = true;
      updateAuthUI();
    }
  }

  // Update authentication UI elements
  function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');

    if (!authButtons || !userMenu) return;

    if (window.MplAuth.isSignedIn && window.MplAuth.user) {
      // Hide auth buttons, show user menu
      authButtons.style.display = 'none';
      userMenu.style.display = 'flex';

      // Update user info
      const user = window.MplAuth.user;
      const userEmail = document.getElementById('user-email');
      const userAvatar = document.getElementById('user-avatar');
      const userName = document.getElementById('user-name');

      if (userEmail) {
        userEmail.textContent = user.email || 'User';
      }

      if (userName) {
        const name = user.firstName || user.email?.split('@')[0] || 'User';
        userName.textContent = name;
      }

      if (userAvatar) {
        if (user.imageUrl) {
          userAvatar.src = user.imageUrl;
        } else {
          // Generate avatar from initials
          const initials = (user.firstName?.[0] || '') + (user.lastName?.[0] || user.email?.[0] || '');
          userAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0f1628&color=00f0ff`;
        }
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
    window.location.href = '/signin.html';
  };

  window.MplAuth.signUp = function() {
    window.location.href = '/signup.html';
  };

  window.MplAuth.signOut = async function() {
    try {
      // Call signout endpoint to clear session cookie
      await fetch('/api/auth/signout', {
        method: 'POST',
        credentials: 'include'
      });

      localStorage.removeItem('userRole');
      window.location.href = '/index.html';
    } catch (error) {
      console.error('[Auth] Sign out error:', error);
      // Force redirect anyway
      localStorage.removeItem('userRole');
      window.location.href = '/index.html';
    }
  };

  window.MplAuth.openUserProfile = function() {
    // Redirect to a profile page (could be created later)
    window.location.href = '/progress.html';
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

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
  } else {
    initAuth();
  }

})();
