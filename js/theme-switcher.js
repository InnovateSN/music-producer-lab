/**
 * Music Producer Lab - Theme Version Switcher
 * Allows switching between v1.0 (Original) and v2.0 (New Design)
 */

(function() {
  'use strict';

  const THEME_KEY = 'mpl-theme-version';
  const THEMES = {
    v1: {
      name: 'Classic 1.0',
      cssPath: 'themes/v1/styles-v1.css',
      imagesPath: 'themes/v1/images/'
    },
    v2: {
      name: 'Modern 2.0',
      cssPath: 'themes/v2/styles-v2.css',
      imagesPath: 'themes/v2/images/'
    }
  };

  // Image mappings for theme switching (images that differ between versions)
  const THEME_IMAGES = [
    'AFTER1MONTH.png', 'AFTER1WEEK.png', 'AFTER3MONTHS.png', 'BONUSSKILL.png',
    'CLEAR.png', 'NO GUIDANCE.png', 'PLAY.png', 'SQUAREBUTTON.png', 'STOP.png',
    'THEORY WITHOUT CONTEXT.png', 'X.png', 'arrangement.png', 'arrowright.png',
    'button  small.png', 'button.png', 'chitarra.png', 'clock_anticlockwise.png',
    'cuffie.png', 'dollaro.png', 'drum.png', 'drumpads.png', 'fulmine.png',
    'gear.png', 'idea.png', 'lock.png', 'long rectangular button_.png',
    'longbutton.png', 'loop.png', 'love.png', 'mail.png', 'mastering.png',
    'mixing.png', 'mpl_hero_rightside.png', 'mpl_no_guided_practice.png',
    'mpl_passive_tutorials.png', 'mpl_theory_without_context.png',
    'mpl_tutorial_overload.png', 'mplalert.png', 'mplarrowtarget.png',
    'mplbell.png', 'mpldownload.png', 'mplinfo.png', 'mplscudo_check.png',
    'mplstellinacalendario.png', 'mplstellinaesagono.png', 'notamusicale.png',
    'orologio.png', 'peopleicon.png', 'questionmark.png', 'rectangular.png',
    'scudo.png', 'sound design.png', 'speaker.png', 'speakeroff.png',
    'speakerwave.png', 'stats.png', 'tastiera.png', 'upload.png', 'vocals.png'
  ];

  class ThemeSwitcher {
    constructor() {
      this.currentTheme = this.getSavedTheme();
      this.themeStylesheet = null;
      this.init();
    }

    getSavedTheme() {
      return localStorage.getItem(THEME_KEY) || 'v2'; // Default to v2
    }

    saveTheme(version) {
      localStorage.setItem(THEME_KEY, version);
    }

    init() {
      this.createToggleButton();
      this.applyTheme(this.currentTheme, false);
    }

    createToggleButton() {
      // Create toggle container
      const container = document.createElement('div');
      container.id = 'theme-version-toggle';
      container.innerHTML = `
        <div class="theme-toggle-wrapper">
          <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Switch theme version">
            <span class="theme-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
            </span>
            <span class="theme-label" id="themeLabel">v2.0</span>
          </button>
          <div class="theme-dropdown" id="themeDropdown">
            <div class="theme-option" data-theme="v1">
              <span class="theme-option-icon">1.0</span>
              <span class="theme-option-name">Classic</span>
              <span class="theme-option-desc">Original design</span>
            </div>
            <div class="theme-option" data-theme="v2">
              <span class="theme-option-icon">2.0</span>
              <span class="theme-option-name">Modern</span>
              <span class="theme-option-desc">New professional look</span>
            </div>
          </div>
        </div>
      `;

      // Add styles
      const styles = document.createElement('style');
      styles.textContent = `
        #theme-version-toggle {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 9999;
          font-family: var(--font-body, 'Inter', sans-serif);
        }

        .theme-toggle-wrapper {
          position: relative;
        }

        .theme-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(10, 15, 26, 0.95);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 12px;
          color: #00f0ff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 240, 255, 0.1);
        }

        .theme-toggle-btn:hover {
          border-color: rgba(0, 240, 255, 0.6);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 240, 255, 0.2);
          transform: translateY(-2px);
        }

        .theme-icon {
          display: flex;
          align-items: center;
        }

        .theme-label {
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .theme-dropdown {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 0;
          background: rgba(10, 15, 26, 0.98);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 12px;
          padding: 8px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .theme-dropdown.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .theme-option {
          display: grid;
          grid-template-columns: 40px 1fr;
          grid-template-rows: auto auto;
          gap: 2px 12px;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-option:hover {
          background: rgba(0, 240, 255, 0.1);
        }

        .theme-option.active {
          background: rgba(0, 240, 255, 0.15);
          border: 1px solid rgba(0, 240, 255, 0.3);
        }

        .theme-option-icon {
          grid-row: 1 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(59, 130, 246, 0.2));
          border-radius: 8px;
          font-weight: 700;
          font-size: 12px;
          color: #00f0ff;
        }

        .theme-option-name {
          font-weight: 600;
          color: #f0f4ff;
          font-size: 14px;
        }

        .theme-option-desc {
          font-size: 11px;
          color: #7a8ba8;
        }

        /* Transition overlay for smooth switching */
        .theme-transition-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 8, 16, 0.9);
          z-index: 99999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .theme-transition-overlay.active {
          opacity: 1;
          pointer-events: all;
        }

        .theme-transition-overlay .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #00f0ff;
        }

        .theme-transition-overlay .loader-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 240, 255, 0.2);
          border-top-color: #00f0ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 15px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `;

      document.head.appendChild(styles);
      document.body.appendChild(container);

      // Create transition overlay
      const overlay = document.createElement('div');
      overlay.className = 'theme-transition-overlay';
      overlay.innerHTML = '<div class="loader"><div class="loader-spinner"></div><div>Switching theme...</div></div>';
      document.body.appendChild(overlay);

      // Event listeners
      const btn = document.getElementById('themeToggleBtn');
      const dropdown = document.getElementById('themeDropdown');

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
      });

      document.addEventListener('click', () => {
        dropdown.classList.remove('active');
      });

      dropdown.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          const theme = option.dataset.theme;
          if (theme !== this.currentTheme) {
            this.switchTheme(theme);
          }
          dropdown.classList.remove('active');
        });
      });

      this.updateToggleUI();
    }

    updateToggleUI() {
      const label = document.getElementById('themeLabel');
      const options = document.querySelectorAll('.theme-option');
      
      label.textContent = this.currentTheme === 'v1' ? 'v1.0' : 'v2.0';
      
      options.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === this.currentTheme);
      });
    }

    applyTheme(version, animate = true) {
      const theme = THEMES[version];
      if (!theme) return;

      if (animate) {
        const overlay = document.querySelector('.theme-transition-overlay');
        overlay.classList.add('active');
        
        setTimeout(() => {
          this.loadThemeAssets(version);
          setTimeout(() => {
            overlay.classList.remove('active');
          }, 300);
        }, 300);
      } else {
        this.loadThemeAssets(version);
      }
    }

    loadThemeAssets(version) {
      const theme = THEMES[version];
      
      // Update CSS
      // Remove existing theme stylesheet if any
      if (this.themeStylesheet) {
        this.themeStylesheet.remove();
      }

      // For v1, load v1 styles; for v2, use main styles.css (already loaded)
      if (version === 'v1') {
        this.themeStylesheet = document.createElement('link');
        this.themeStylesheet.rel = 'stylesheet';
        this.themeStylesheet.href = theme.cssPath;
        this.themeStylesheet.id = 'theme-stylesheet';
        document.head.appendChild(this.themeStylesheet);
      }

      // Update images
      this.updateImages(version);

      // Set body attribute for any CSS that needs to know the version
      document.body.setAttribute('data-theme-version', version);

      this.currentTheme = version;
      this.saveTheme(version);
      this.updateToggleUI();
    }

    updateImages(version) {
      const theme = THEMES[version];
      const images = document.querySelectorAll('img');

      images.forEach(img => {
        const src = img.getAttribute('src');
        if (!src) return;

        // Check if this image should be theme-switched
        const filename = src.split('/').pop();
        
        if (THEME_IMAGES.includes(filename)) {
          // Determine base path (handle relative paths)
          let basePath = '';
          if (src.startsWith('images/')) {
            basePath = '';
          } else if (src.includes('/images/')) {
            basePath = src.substring(0, src.indexOf('/images/') + 1);
          }

          // Set new source based on theme
          const newSrc = basePath + theme.imagesPath + filename;
          
          // Only update if file exists (use original if theme version doesn't have it)
          img.onerror = () => {
            img.src = basePath + 'images/' + filename;
          };
          img.src = newSrc;
        }
      });

      // Also update CSS background images (for buttons etc)
      this.updateCSSBackgroundImages(version);
    }

    updateCSSBackgroundImages(version) {
      // This is handled by loading the appropriate CSS file
      // No additional action needed as stylesheets handle this
    }

    switchTheme(version) {
      this.applyTheme(version, true);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ThemeSwitcher());
  } else {
    new ThemeSwitcher();
  }

  // Expose globally for manual control
  window.MPLThemeSwitcher = ThemeSwitcher;
})();
