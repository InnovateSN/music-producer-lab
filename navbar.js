/**
 * MUSIC PRODUCER LAB - SHARED NAVBAR COMPONENT
 * This script creates a consistent navigation bar across all pages
 */

(function() {
  'use strict';

  // Create the navbar HTML
  function createNavbar() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    function isActive(page) {
      if (page === 'index.html' && (currentPage === 'index.html' || currentPage === '')) {
        return 'active';
      }
      return currentPage === page ? 'active' : '';
    }

    return `
      <!-- Navigation -->
      <nav class="navbar" id="navbar">
        <div class="container navbar-inner">
          <a href="index.html" class="navbar-logo">
            <img src="mpl-logo-icon.svg" alt="" width="36" height="36">
            <span>MPL</span>
          </a>

          <button class="navbar-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="navbar-nav" id="navMenu">
            <li><a href="index.html" class="navbar-link ${isActive('index.html')}">Home</a></li>
            <li><a href="learn-tools.html" class="navbar-link ${isActive('learn-tools.html')}">Tools</a></li>
            <li><a href="labs.html" class="navbar-link ${isActive('labs.html')}">Labs</a></li>
            <li><a href="download.html" class="navbar-link ${isActive('download.html')}">Downloads</a></li>
            <li><a href="about.html" class="navbar-link ${isActive('about.html')}">About</a></li>
            <li><a href="contact.html" class="navbar-link ${isActive('contact.html')}">Contact</a></li>
          </ul>

          <div class="navbar-actions">
            <!-- Progress Badge -->
            <a href="progress.html" class="progress-badge-link" title="View your progress">
              <span class="progress-badge" id="progress-badge">0/90</span>
            </a>

            <!-- Theme Toggle -->
            <div class="theme-toggle-wrapper">
              <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark/light mode">
                <span class="theme-toggle-icon"></span>
              </button>
              <span class="theme-toggle-label" id="themeLabel">Dark</span>
            </div>

            <!-- Auth Buttons (shown when not signed in) -->
            <div id="auth-buttons" style="display: flex; align-items: center; gap: 0.75rem;">
              <button onclick="window.MplAuth.signIn()" class="btn btn-secondary btn-sm" style="border: 1px solid var(--border-medium);">
                Sign In
              </button>
              <button onclick="window.MplAuth.signUp()" class="btn btn-primary btn-sm">
                Get Started Free
              </button>
            </div>

            <!-- User Menu (shown when signed in) -->
            <div id="user-menu" style="display: none; align-items: center; gap: 0.5rem; position: relative;">
              <a id="dashboard-link" href="/teacher" style="display: none; margin-right: 0.5rem;" class="btn btn-secondary btn-sm">
                Dashboard
              </a>
              <button onclick="window.MplAuth.toggleUserMenu()" style="display: flex; align-items: center; gap: 0.5rem; background: none; border: 1px solid var(--border-medium); padding: 0.4rem 0.75rem; border-radius: var(--radius-full); cursor: pointer; color: var(--text-primary); transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
                <img id="user-avatar" src="/mpl-favicon.svg" alt="User" style="width: 24px; height: 24px; border-radius: 50%;">
                <span id="user-name" style="font-size: 0.9rem; font-weight: 500;">User</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              <!-- User Menu Dropdown -->
              <div id="user-menu-dropdown" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.5rem; min-width: 200px; box-shadow: var(--shadow-lg); z-index: 1000;">
                <div style="padding: 0.75rem; border-bottom: 1px solid var(--border-subtle);">
                  <div id="user-email" style="font-size: 0.85rem; color: var(--text-muted); word-break: break-all;">user@example.com</div>
                </div>
                <a href="/progress.html" style="display: block; padding: 0.75rem; color: var(--text-primary); text-decoration: none; border-radius: var(--radius-sm); transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
                  📊 My Progress
                </a>
                <button onclick="window.MplAuth.openUserProfile()" style="display: block; width: 100%; text-align: left; padding: 0.75rem; color: var(--text-primary); background: none; border: none; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
                  ⚙️ Settings
                </button>
                <hr style="margin: 0.5rem 0; border: none; border-top: 1px solid var(--border-subtle);">
                <button onclick="window.MplAuth.signOut()" style="display: block; width: 100%; text-align: left; padding: 0.75rem; color: var(--accent-pink); background: none; border: none; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
                  🚪 Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // Initialize navbar
  function initNavbar() {
    // Create a placeholder for the navbar at the beginning of body
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    if (navbarPlaceholder) {
      navbarPlaceholder.innerHTML = createNavbar();
    } else {
      // Insert at the beginning of body if no placeholder exists
      const body = document.body;
      const navbarContainer = document.createElement('div');
      navbarContainer.innerHTML = createNavbar();
      body.insertBefore(navbarContainer.firstElementChild, body.firstChild);
    }

    // Initialize navbar interactions
    initNavbarInteractions();
  }

  // Initialize navbar interactions (mobile menu, theme toggle, etc.)
  function initNavbarInteractions() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close mobile nav when clicking a link
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      if (themeLabel) {
        themeLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
      }
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (!prefersDark.matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
