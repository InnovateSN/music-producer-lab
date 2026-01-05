/**
 * Music Producer Lab - Toast Notification System
 * Lightweight toast notifications to replace browser alert()
 * No dependencies, pure vanilla JavaScript
 */

export function showToast(message, options = {}) {
  const {
    duration = 3000,
    type = 'info', // 'info', 'success', 'error', 'warning'
    position = 'bottom-right' // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
  } = options;

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `mpl-toast mpl-toast-${type} mpl-toast-${position}`;

  // Set content
  toast.innerHTML = `
    <div class="mpl-toast-content">
      <div class="mpl-toast-icon">${getToastIcon(type)}</div>
      <div class="mpl-toast-message">${message}</div>
      <button class="mpl-toast-close" aria-label="Close notification">×</button>
    </div>
  `;

  // Add to DOM
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('mpl-toast-show');
  });

  // Close button handler
  const closeBtn = toast.querySelector('.mpl-toast-close');
  closeBtn.addEventListener('click', () => removeToast(toast));

  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(() => removeToast(toast), duration);
  }

  return toast;
}

function removeToast(toast) {
  toast.classList.remove('mpl-toast-show');
  toast.classList.add('mpl-toast-hide');

  // Remove from DOM after animation
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

function getToastIcon(type) {
  const icons = {
    success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
    error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
  };
  return icons[type] || icons.info;
}

// Convenience methods
export const toast = {
  success: (message, duration = 3000) => showToast(message, { type: 'success', duration }),
  error: (message, duration = 4000) => showToast(message, { type: 'error', duration }),
  warning: (message, duration = 3500) => showToast(message, { type: 'warning', duration }),
  info: (message, duration = 3000) => showToast(message, { type: 'info', duration })
};

// Make available globally for non-module scripts
if (typeof window !== 'undefined') {
  window.showToast = showToast;
  window.toast = toast;
}
