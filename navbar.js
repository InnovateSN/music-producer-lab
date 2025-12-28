/**
 * MUSIC PRODUCER LAB - SHARED NAVBAR COMPONENT
 * This script creates a consistent navigation bar across all pages
 * Uses the global i18n system from i18n.js
 */

(function() {
  'use strict';

  // Language configuration
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  // Get translation helper from global i18n (fallback if i18n.js not loaded yet)
  function t(key) {
    return window.MPL?.i18n?.t(key) || key;
  }

  // Get current language
  function getCurrentLang() {
    return window.MPL?.i18n?.getCurrentLanguage() || localStorage.getItem('mpl-language') || 'en';
  }

  // Set language using global i18n system
  function setLanguage(lang) {
    if (window.MPL?.i18n?.setLanguage) {
      window.MPL.i18n.setLanguage(lang);
    } else {
      // Fallback if i18n.js not loaded
      localStorage.setItem('mpl-language', lang);
      window.location.reload();
    }
    updateNavbarText();
  }

  // Update navbar text with current language
  function updateNavbarText() {
    const elements = {
      home: document.querySelector('[data-i18n="home"]'),
      labs: document.querySelector('[data-i18n="labs"]'),
      explore: document.querySelector('[data-i18n="explore"]'),
      downloads: document.querySelector('[data-i18n="downloads"]'),
      about: document.querySelector('[data-i18n="about"]'),
      contact: document.querySelector('[data-i18n="contact"]'),
      startLearning: document.querySelector('[data-i18n="startLearning"]'),
      themeLabel: document.getElementById('themeLabel')
    };

    Object.keys(elements).forEach(key => {
      if (elements[key]) {
        elements[key].textContent = t(key);
      }
    });

    // Update theme label based on current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (elements.themeLabel) {
      elements.themeLabel.textContent = currentTheme === 'light' ? t('light') : t('dark');
    }

    // Update language selector button
    const langBtn = document.getElementById('currentLangFlag');
    if (langBtn) {
      const currentLangData = languages.find(l => l.code === currentLang);
      langBtn.textContent = currentLangData ? currentLangData.flag : '🇬🇧';
    }
  }

  // Create the navbar HTML
  function createNavbar() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const currentLang = getCurrentLang();

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
            <li><a href="index.html" class="navbar-link ${isActive('index.html')}" data-i18n="home">${t('home')}</a></li>
            <li><a href="labs.html" class="navbar-link ${isActive('labs.html')}" data-i18n="labs">${t('labs')}</a></li>
            <li><a href="explore.html" class="navbar-link ${isActive('explore.html')}" data-i18n="explore">${t('explore')}</a></li>
            <li><a href="download.html" class="navbar-link ${isActive('download.html')}" data-i18n="downloads">${t('downloads')}</a></li>
            <li><a href="about.html" class="navbar-link ${isActive('about.html')}" data-i18n="about">${t('about')}</a></li>
            <li><a href="contact.html" class="navbar-link ${isActive('contact.html')}" data-i18n="contact">${t('contact')}</a></li>
          </ul>

          <div class="navbar-actions">
            <!-- Progress Badge -->
            <a href="progress.html" class="progress-badge-link" title="View your progress">
              <span class="progress-badge" id="progress-badge">0/90</span>
            </a>

            <!-- Language Selector -->
            <div class="language-selector">
              <button class="language-toggle" id="languageToggle" aria-label="Select language">
                <span id="currentLangFlag">${languages.find(l => l.code === currentLang)?.flag || '🇬🇧'}</span>
              </button>
              <div class="language-dropdown" id="languageDropdown">
                ${languages.map(lang => `
                  <button class="language-option ${lang.code === currentLang ? 'active' : ''}" data-lang="${lang.code}">
                    <span class="language-flag">${lang.flag}</span>
                    <span class="language-name">${lang.name}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Theme Toggle -->
            <div class="theme-toggle-wrapper">
              <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark/light mode">
                <span class="theme-toggle-icon"></span>
              </button>
              <span class="theme-toggle-label" id="themeLabel">${t('dark')}</span>
            </div>

            <a href="labs.html" class="btn btn-primary btn-sm" data-i18n="startLearning">${t('startLearning')}</a>
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
        themeLabel.textContent = theme === 'light' ? t('light') : t('dark');
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

    // Language selector
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageToggle && languageDropdown) {
      languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('open');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        languageDropdown.classList.remove('open');
      });

      // Language option click handlers
      const languageOptions = languageDropdown.querySelectorAll('.language-option');
      languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = option.getAttribute('data-lang');
          setLanguage(lang);
          languageDropdown.classList.remove('open');

          // Update active state
          languageOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
        });
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }

  // Export navbar-specific functions for global access
  window.MPL = window.MPL || {};
  window.MPL.navbar = {
    setLanguage: setLanguage,
    getCurrentLanguage: () => currentLang,
    updateNavbarText: updateNavbarText
  };

  // Listen for language changes from i18n system
  window.addEventListener('languagechange', (e) => {
    currentLang = e.detail.lang;
    updateNavbarText();
  });
})();
