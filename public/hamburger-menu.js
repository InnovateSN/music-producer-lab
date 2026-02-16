/**
 * Mobile hamburger menu functionality
 * Include this script at the end of pages with hamburger menus
 */
export function initHamburgerMenu() {
  const hamburger = document.getElementById('mpl-hamburger');
  const mobileNav = document.getElementById('mpl-mobile-nav');
  
  if (!hamburger || !mobileNav) return;
  
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('is-open');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });
  
  // Close mobile nav when clicking a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

// Auto-init if not imported as module
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initHamburgerMenu();
  });
}
