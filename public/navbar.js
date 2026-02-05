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
            <li><a href="glossary.html" class="navbar-link ${isActive('glossary.html')}">Glossary</a></li>
            <li><a href="download.html" class="navbar-link ${isActive('download.html')}">Downloads</a></li>
            <li><a href="about.html" class="navbar-link ${isActive('about.html')}">About</a></li>
            <li><a href="contact.html" class="navbar-link ${isActive('contact.html')}">Contact</a></li>
          </ul>

          <div class="navbar-actions">
            <!-- Progress Badge -->
            <a href="progress.html" class="progress-badge-link" title="View your progress">
              <span class="progress-badge" id="progress-badge">0/90</span>
            </a>

            <!-- Theme Picker -->
            <div class="theme-picker">
              <button class="theme-picker-trigger" id="themePickerTrigger" aria-haspopup="true" aria-expanded="false" aria-label="Choose theme">
                <span class="theme-picker-icon"><img src="images/gear.png" alt="Theme" style="width: 16px; height: 16px; vertical-align: middle;"></span>
                <span class="theme-picker-label" id="themePickerLabel">Select your theme</span>
                <svg class="theme-picker-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              <div class="theme-picker-dropdown" id="themePickerDropdown" role="menu" aria-labelledby="themePickerTrigger">
                <div class="theme-picker-header">Choose Theme</div>
                <div class="theme-picker-grid" id="themePickerGrid">
                  <!-- Theme cards populated by JavaScript -->
                </div>
              </div>
            </div>

            <!-- Auth Buttons (shown when not signed in) -->
            <div id="auth-buttons" style="display: flex; align-items: center; gap: 0.75rem;">
              <button onclick="window.MplAuth ? window.MplAuth.signIn() : window.location.href='/signin.html'" class="btn btn-secondary btn-sm" style="border: 1px solid var(--border-medium);">
                Sign In
              </button>
              <button onclick="window.MplAuth ? window.MplAuth.signUp() : window.location.href='/signup.html'" class="btn btn-primary btn-sm">
                Get Started Free
              </button>
            </div>

            <!-- User Menu (shown when signed in) -->
            <div id="user-menu" style="display: none; align-items: center; gap: 0.5rem; position: relative;">
              <a id="dashboard-link" href="/teacher" style="display: none; margin-right: 0.5rem;" class="btn btn-secondary btn-sm">
                Dashboard
              </a>
              <button onclick="window.MplAuth && window.MplAuth.toggleUserMenu()" style="display: flex; align-items: center; gap: 0.5rem; background: none; border: 1px solid var(--border-medium); padding: 0.4rem 0.75rem; border-radius: var(--radius-full); cursor: pointer; color: var(--text-primary); transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
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
                  <img src="images/stats.png" alt="Progress" style="width: 1em; height: 1em; vertical-align: middle;"> My Progress
                </a>
                <button onclick="window.MplAuth && window.MplAuth.openUserProfile()" style="display: block; width: 100%; text-align: left; padding: 0.75rem; color: var(--text-primary); background: none; border: none; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
                  <img src="images/gear.png" alt="Settings" style="width: 1em; height: 1em; vertical-align: middle;"> Settings
                </button>
                <hr style="margin: 0.5rem 0; border: none; border-top: 1px solid var(--border-subtle);">
                <button onclick="window.MplAuth ? window.MplAuth.signOut() : window.location.href='/signin.html'" style="display: block; width: 100%; text-align: left; padding: 0.75rem; color: var(--accent-pink); background: none; border: none; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition-fast);" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='none'">
                  <img src="images/arrowright.png" alt="Sign Out" style="width: 1em; height: 1em; vertical-align: middle;"> Sign Out
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

    // Theme Picker
    initThemePicker();
  }

  // Initialize theme picker
  function initThemePicker() {
    const trigger = document.getElementById('themePickerTrigger');
    const dropdown = document.getElementById('themePickerDropdown');
    const grid = document.getElementById('themePickerGrid');
    const label = document.getElementById('themePickerLabel');

    if (!trigger || !dropdown || !grid || !window.ThemeRegistry || !window.ThemeManager) {
      console.warn('[Navbar] Theme picker elements or ThemeManager not found');
      return;
    }

    // Populate theme cards
    const themes = window.ThemeRegistry.getAllThemes();
    const currentTheme = window.ThemeManager.getCurrentTheme();

    grid.innerHTML = themes.map(function(theme) {
      const isActive = theme.id === currentTheme;
      return `
        <button class="theme-card ${isActive ? 'active' : ''}"
                data-theme-id="${theme.id}"
                role="menuitemradio"
                aria-checked="${isActive}"
                tabindex="${isActive ? '0' : '-1'}">
          <div class="theme-card-preview">
            ${theme.previewColors.map(function(color) {
              return `<div class="theme-preview-color" style="background: ${color}"></div>`;
            }).join('')}
          </div>
          <div class="theme-card-name">${theme.name}</div>
          <div class="theme-card-description">${theme.description}</div>
          ${isActive ? '<div class="theme-card-checkmark"><img src="images/mplscudo_check.png" alt="Active" style="width: 20px; height: 20px;"></div>' : ''}
        </button>
      `;
    }).join('');

    // Set fixed label text
    label.textContent = 'Select your theme';

    // Toggle dropdown
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        // Focus first theme card
        const firstCard = grid.querySelector('.theme-card');
        if (firstCard) {
          setTimeout(function() { firstCard.focus(); }, 50);
        }
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.theme-picker')) {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Handle theme selection
    grid.addEventListener('click', function(e) {
      const card = e.target.closest('.theme-card');
      if (!card) return;

      const themeId = card.dataset.themeId;
      window.ThemeManager.applyTheme(themeId);

      // Update UI
      grid.querySelectorAll('.theme-card').forEach(function(c) {
        c.classList.remove('active');
        c.setAttribute('aria-checked', 'false');
        const checkmark = c.querySelector('.theme-card-checkmark');
        if (checkmark) checkmark.remove();
      });

      card.classList.add('active');
      card.setAttribute('aria-checked', 'true');
      card.insertAdjacentHTML('beforeend', '<div class="theme-card-checkmark"><img src="images/mplscudo_check.png" alt="Active" style="width: 20px; height: 20px;"></div>');

      // Label stays as "Select your theme" - no update needed

      // Close dropdown and return focus
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    });

    // Keyboard navigation
    dropdown.addEventListener('keydown', function(e) {
      const cards = Array.from(grid.querySelectorAll('.theme-card'));
      const currentIndex = cards.findIndex(function(card) {
        return card === document.activeElement;
      });

      switch(e.key) {
        case 'Escape':
          dropdown.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
          e.preventDefault();
          break;

        case 'ArrowDown':
          const nextIndex = (currentIndex + 1) % cards.length;
          cards[nextIndex].focus();
          e.preventDefault();
          break;

        case 'ArrowUp':
          const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
          cards[prevIndex].focus();
          e.preventDefault();
          break;

        case 'Enter':
        case ' ':
          if (document.activeElement.classList.contains('theme-card')) {
            document.activeElement.click();
            e.preventDefault();
          }
          break;
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
