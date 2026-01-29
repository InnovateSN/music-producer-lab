/**
 * Music Producer Lab - Debug Logging Utility
 * Conditional logging that is DISABLED in production for security
 *
 * Usage:
 *   import { debug } from './debug.js';
 *   debug.log('Message', data);
 *   debug.warn('Warning', data);
 *   debug.error('Error', data);
 *
 * Debug mode is only available in development environments (localhost).
 * URL parameters and localStorage cannot enable debug in production.
 */

// Check if we're in a development environment
const isDevelopment = () => {
  const hostname = window.location.hostname;
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local');
};

// Check if debug mode is enabled
// SECURITY: Debug mode is restricted to development environments only
const isDebugEnabled = () => {
  // Only allow debug mode in development environments
  if (!isDevelopment()) {
    return false;
  }

  // In development, check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('debug') === 'true') return true;

  // In development, check localStorage
  if (localStorage.getItem('mpl-debug') === 'true') return true;

  // Default to enabled in development for convenience
  return true;
};

const DEBUG = isDebugEnabled();

// Debug logging functions
export const debug = {
  log: (...args) => {
    if (DEBUG) console.log('[MPL]', ...args);
  },

  warn: (...args) => {
    if (DEBUG) console.warn('[MPL]', ...args);
  },

  error: (...args) => {
    // Always log errors, even in production
    console.error('[MPL]', ...args);
  },

  info: (...args) => {
    if (DEBUG) console.info('[MPL]', ...args);
  },

  table: (data) => {
    if (DEBUG) console.table(data);
  },

  group: (label) => {
    if (DEBUG) console.group(`[MPL] ${label}`);
  },

  groupEnd: () => {
    if (DEBUG) console.groupEnd();
  },

  // Check if debug is enabled
  isEnabled: () => DEBUG
};

// Make available globally
if (typeof window !== 'undefined') {
  window.debug = debug;

  // Provide a way to enable/disable debug at runtime
  window.enableDebug = () => {
    localStorage.setItem('mpl-debug', 'true');
    console.log('%c[MPL] Debug mode ENABLED', 'color: #00ff9d; font-weight: bold;');
    console.log('%cReload the page to see debug logs', 'color: #7a8ba8;');
  };

  window.disableDebug = () => {
    localStorage.removeItem('mpl-debug');
    console.log('%c[MPL] Debug mode DISABLED', 'color: #ff7733; font-weight: bold;');
    console.log('%cReload the page to hide debug logs', 'color: #7a8ba8;');
  };
}

export default debug;
