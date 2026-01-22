/**
 * Theme Manager
 * Handles theme application, persistence, and migration
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'mpl-theme';
  const OLD_STORAGE_KEY = 'theme';
  const DEFAULT_THEME = 'sunset';

  /**
   * Migrate from old theme localStorage key to new key
   */
  function migrateOldTheme() {
    // Check if current theme is deprecated 'light', migrate to 'ocean'
    const currentTheme = localStorage.getItem(STORAGE_KEY);
    if (currentTheme === 'light') {
      localStorage.setItem(STORAGE_KEY, 'ocean');
      console.log('[Theme Manager] Migrated deprecated light theme to ocean');
      return;
    }

    // Check if new key already exists
    if (currentTheme) {
      return; // Already migrated or using new system
    }

    // Check for old key
    const oldTheme = localStorage.getItem(OLD_STORAGE_KEY);
    if (!oldTheme) {
      return; // No old theme to migrate
    }

    // Map old values to new theme IDs
    const themeMap = {
      'dark': 'dark-cyberpunk',
      'light': 'ocean'
    };

    const newTheme = themeMap[oldTheme] || DEFAULT_THEME;
    localStorage.setItem(STORAGE_KEY, newTheme);

    console.log('[Theme Manager] Migrated theme from', oldTheme, 'to', newTheme);
    // Keep old key for backward compatibility (don't delete)
  }

  /**
   * Apply a theme by ID
   * @param {string} themeId - The theme identifier
   * @returns {object|null} Applied theme object or null if not found
   */
  function applyTheme(themeId) {
    if (!window.ThemeRegistry) {
      console.error('[Theme Manager] ThemeRegistry not loaded!');
      return null;
    }

    const theme = window.ThemeRegistry.getTheme(themeId);
    if (!theme) {
      console.error('[Theme Manager] Theme not found:', themeId);
      return null;
    }

    const root = document.documentElement;

    // Set data-theme attribute (for CSS selectors that still use it)
    root.setAttribute('data-theme', themeId);

    // Apply all CSS variables dynamically
    Object.keys(theme.variables).forEach(function(prop) {
      root.style.setProperty(prop, theme.variables[prop]);
    });

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch (e) {
      console.warn('[Theme Manager] Failed to save theme to localStorage:', e);
    }

    // Notify other components
    try {
      window.dispatchEvent(new CustomEvent('themeChanged', {
        detail: { themeId: themeId, theme: theme }
      }));
    } catch (e) {
      console.warn('[Theme Manager] Failed to dispatch themeChanged event:', e);
    }

    console.log('[Theme Manager] Applied theme:', theme.name);
    return theme;
  }

  /**
   * Get current theme ID from localStorage
   * @returns {string} Current theme ID or default theme
   */
  function getCurrentTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && window.ThemeRegistry && window.ThemeRegistry.getTheme(saved)) {
        return saved;
      }
    } catch (e) {
      console.warn('[Theme Manager] Failed to read from localStorage:', e);
    }

    // Check for system preference as fallback
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return DEFAULT_THEME;
  }

  /**
   * Initialize theme system
   * Runs migration and applies saved theme
   */
  function init() {
    // Run migration first
    migrateOldTheme();

    // Apply current theme
    const themeId = getCurrentTheme();
    applyTheme(themeId);
  }

  // Public API
  window.ThemeManager = {
    applyTheme: applyTheme,
    getCurrentTheme: getCurrentTheme,
    init: init
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Log successful load (dev mode only)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Theme Manager] Initialized');
  }
})();
