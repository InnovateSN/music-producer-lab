/**
 * Music Producer Lab - Debug Logging Utility
 * Conditional logging that can be disabled in production
 *
 * Usage:
 *   import { debug } from './debug.js';
 *   debug.log('Message', data);
 *   debug.warn('Warning', data);
 *   debug.error('Error', data);
 */

// Check if debug mode is enabled
// Enable via URL parameter: ?debug=true
// Or localStorage: localStorage.setItem('mpl-debug', 'true')
const isDebugEnabled = () => {
  // Check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('debug') === 'true') return true;

  // Check localStorage
  if (localStorage.getItem('mpl-debug') === 'true') return true;

  // Check hostname (enable for localhost)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return true;

  return false;
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
