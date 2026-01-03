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

            <a href="labs.html" class="btn btn-primary btn-sm">Start Learning</a>
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
