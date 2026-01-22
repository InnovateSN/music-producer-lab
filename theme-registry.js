/**
 * Theme Registry
 * Defines all available themes for Music Producer Lab
 * Each theme includes complete CSS variable definitions
 */

(function() {
  'use strict';

  // Theme definitions
  const themes = {
    'dark-cyberpunk': {
      id: 'dark-cyberpunk',
      name: 'Dark Cyberpunk',
      description: 'Neon accents and futuristic vibes',
      category: 'dark',
      previewColors: ['#00f0ff', '#b366ff', '#ff66b2'],
      variables: {
        // Color Palette - Dark Futuristic
        '--bg-dark': '#030508',
        '--bg-primary': '#050810',
        '--bg-secondary': '#0a0f1a',
        '--bg-tertiary': '#0d1424',
        '--bg-card': '#0f1628',
        '--bg-card-hover': '#141c32',
        '--bg-elevated': '#161e35',

        // Text Colors
        '--text-primary': '#f0f4ff',
        '--text-secondary': '#b8c4e0',
        '--text-muted': '#7a8ba8',
        '--text-dim': '#4a5a78',

        // Accent Colors - Neon/Cyberpunk
        '--accent-cyan': '#00f0ff',
        '--accent-purple': '#b366ff',
        '--accent-pink': '#ff66b2',
        '--accent-orange': '#ff7733',
        '--accent-blue': '#4d9fff',
        '--accent-green': '#00ff9d',
        '--accent-amber': '#ffcc00',

        // Gradients
        '--gradient-primary': 'linear-gradient(135deg, #00f0ff 0%, #b366ff 50%, #ff66b2 100%)',
        '--gradient-secondary': 'linear-gradient(135deg, #b366ff 0%, #ff66b2 100%)',
        '--gradient-glow': 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(179, 102, 255, 0.15), rgba(255, 102, 178, 0.15))',
        '--gradient-dark': 'linear-gradient(180deg, #050810 0%, #030508 100%)',
        '--gradient-hero': 'radial-gradient(ellipse at 20% 0%, rgba(0, 240, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(179, 102, 255, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(255, 102, 178, 0.08) 0%, transparent 50%), #050810',

        // Borders
        '--border-subtle': 'rgba(255, 255, 255, 0.06)',
        '--border-light': 'rgba(255, 255, 255, 0.1)',
        '--border-medium': 'rgba(255, 255, 255, 0.15)',
        '--border-glow': 'rgba(0, 240, 255, 0.3)',

        // Shadows & Glows
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        '--shadow-md': '0 8px 24px rgba(0, 0, 0, 0.4)',
        '--shadow-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
        '--shadow-xl': '0 24px 64px rgba(0, 0, 0, 0.6)',
        '--glow-cyan': '0 0 30px rgba(0, 240, 255, 0.3)',
        '--glow-purple': '0 0 30px rgba(179, 102, 255, 0.3)',
        '--glow-pink': '0 0 30px rgba(255, 102, 178, 0.3)',
        '--glow-intense': '0 0 60px rgba(0, 240, 255, 0.4), 0 0 100px rgba(179, 102, 255, 0.2)',

        // Text Shadows
        '--text-shadow-default': '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 240, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)'
      }
    },

    'light': {
      id: 'light',
      name: 'Light',
      description: 'Clean and professional',
      category: 'light',
      previewColors: ['#4d9fff', '#b366ff', '#ff7733'],
      variables: {
        // Color Palette - Light Professional (darker, less bright)
        '--bg-dark': '#c0c4d0',
        '--bg-primary': '#d8dce5',
        '--bg-secondary': '#c8cdd8',
        '--bg-tertiary': '#b8bdc8',
        '--bg-card': '#e0e4ea',
        '--bg-card-hover': '#d0d4e0',
        '--bg-elevated': '#e8ebf0',

        // Text Colors
        '--text-primary': '#1a1f2e',
        '--text-secondary': '#2d3748',
        '--text-muted': '#4a5568',
        '--text-dim': '#718096',

        // Accent Colors
        '--accent-cyan': '#4d9fff',
        '--accent-purple': '#b366ff',
        '--accent-pink': '#ff66b2',
        '--accent-orange': '#ff7733',
        '--accent-blue': '#4d9fff',
        '--accent-green': '#00c774',
        '--accent-amber': '#ffa500',

        // Gradients
        '--gradient-primary': 'linear-gradient(135deg, #4d9fff 0%, #b366ff 50%, #ff66b2 100%)',
        '--gradient-secondary': 'linear-gradient(135deg, #b366ff 0%, #ff66b2 100%)',
        '--gradient-glow': 'linear-gradient(135deg, rgba(77, 159, 255, 0.12), rgba(179, 102, 255, 0.12), rgba(255, 102, 178, 0.12))',
        '--gradient-dark': 'linear-gradient(180deg, #e8ebf0 0%, #d5d8e0 100%)',
        '--gradient-hero': 'radial-gradient(ellipse at 20% 0%, rgba(77, 159, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(179, 102, 255, 0.08) 0%, transparent 40%), #e8ebf0',

        // Borders (increased visibility)
        '--border-subtle': 'rgba(0, 0, 0, 0.15)',
        '--border-light': 'rgba(0, 0, 0, 0.2)',
        '--border-medium': 'rgba(0, 0, 0, 0.25)',
        '--border-glow': 'rgba(77, 159, 255, 0.4)',

        // Shadows & Glows
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.12)',
        '--shadow-md': '0 8px 24px rgba(0, 0, 0, 0.14)',
        '--shadow-lg': '0 16px 48px rgba(0, 0, 0, 0.18)',
        '--shadow-xl': '0 24px 64px rgba(0, 0, 0, 0.22)',
        '--glow-cyan': '0 0 20px rgba(77, 159, 255, 0.25)',
        '--glow-purple': '0 0 20px rgba(179, 102, 255, 0.25)',
        '--glow-pink': '0 0 20px rgba(255, 102, 178, 0.25)',
        '--glow-intense': '0 0 40px rgba(77, 159, 255, 0.35), 0 0 80px rgba(179, 102, 255, 0.18)',

        // Text Shadows
        '--text-shadow-default': '0 1px 3px rgba(0, 0, 0, 0.15)'
      }
    },

    'sunset': {
      id: 'sunset',
      name: 'Sunset',
      description: 'Warm oranges and purples',
      category: 'dark',
      previewColors: ['#ff6b35', '#9d4edd', '#f72585'],
      variables: {
        // Color Palette - Warm Sunset
        '--bg-dark': '#0f0508',
        '--bg-primary': '#1a0f1e',
        '--bg-secondary': '#2a1a2e',
        '--bg-tertiary': '#3a2638',
        '--bg-card': '#2a1a2e',
        '--bg-card-hover': '#3a2638',
        '--bg-elevated': '#4a3648',

        // Text Colors
        '--text-primary': '#ffeef5',
        '--text-secondary': '#e8c4d8',
        '--text-muted': '#b8a4b8',
        '--text-dim': '#8a7888',

        // Accent Colors - Warm Palette
        '--accent-cyan': '#ff8c42',
        '--accent-purple': '#9d4edd',
        '--accent-pink': '#f72585',
        '--accent-orange': '#ff6b35',
        '--accent-blue': '#c77dff',
        '--accent-green': '#fca311',
        '--accent-amber': '#ffb627',

        // Gradients
        '--gradient-primary': 'linear-gradient(135deg, #ff6b35 0%, #9d4edd 50%, #f72585 100%)',
        '--gradient-secondary': 'linear-gradient(135deg, #9d4edd 0%, #f72585 100%)',
        '--gradient-glow': 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(157, 78, 221, 0.15), rgba(247, 37, 133, 0.15))',
        '--gradient-dark': 'linear-gradient(180deg, #1a0f1e 0%, #0f0508 100%)',
        '--gradient-hero': 'radial-gradient(ellipse at 20% 0%, rgba(255, 107, 53, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(247, 37, 133, 0.08) 0%, transparent 50%), #1a0f1e',

        // Borders
        '--border-subtle': 'rgba(255, 238, 245, 0.06)',
        '--border-light': 'rgba(255, 238, 245, 0.1)',
        '--border-medium': 'rgba(255, 238, 245, 0.15)',
        '--border-glow': 'rgba(255, 107, 53, 0.3)',

        // Shadows & Glows
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        '--shadow-md': '0 8px 24px rgba(0, 0, 0, 0.4)',
        '--shadow-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
        '--shadow-xl': '0 24px 64px rgba(0, 0, 0, 0.6)',
        '--glow-cyan': '0 0 30px rgba(255, 140, 66, 0.3)',
        '--glow-purple': '0 0 30px rgba(157, 78, 221, 0.3)',
        '--glow-pink': '0 0 30px rgba(247, 37, 133, 0.3)',
        '--glow-intense': '0 0 60px rgba(255, 107, 53, 0.4), 0 0 100px rgba(157, 78, 221, 0.2)',

        // Text Shadows
        '--text-shadow-default': '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 107, 53, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)'
      }
    },

    'forest': {
      id: 'forest',
      name: 'Forest',
      description: 'Natural greens and earthy tones',
      category: 'dark',
      previewColors: ['#52b788', '#2d6a4f', '#95d5b2'],
      variables: {
        // Color Palette - Natural Forest
        '--bg-dark': '#050a05',
        '--bg-primary': '#0f1a0f',
        '--bg-secondary': '#1a2a1a',
        '--bg-tertiary': '#243424',
        '--bg-card': '#1a2a1a',
        '--bg-card-hover': '#243424',
        '--bg-elevated': '#2e3e2e',

        // Text Colors
        '--text-primary': '#e8f5e8',
        '--text-secondary': '#c4e4c4',
        '--text-muted': '#a4b8a4',
        '--text-dim': '#7a887a',

        // Accent Colors - Natural Palette
        '--accent-cyan': '#52b788',
        '--accent-purple': '#6a994e',
        '--accent-pink': '#95d5b2',
        '--accent-orange': '#a7c957',
        '--accent-blue': '#52b788',
        '--accent-green': '#40916c',
        '--accent-amber': '#a7c957',

        // Gradients
        '--gradient-primary': 'linear-gradient(135deg, #52b788 0%, #6a994e 50%, #95d5b2 100%)',
        '--gradient-secondary': 'linear-gradient(135deg, #6a994e 0%, #52b788 100%)',
        '--gradient-glow': 'linear-gradient(135deg, rgba(82, 183, 136, 0.15), rgba(106, 153, 78, 0.15), rgba(149, 213, 178, 0.15))',
        '--gradient-dark': 'linear-gradient(180deg, #0f1a0f 0%, #050a05 100%)',
        '--gradient-hero': 'radial-gradient(ellipse at 20% 0%, rgba(82, 183, 136, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(106, 153, 78, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(149, 213, 178, 0.08) 0%, transparent 50%), #0f1a0f',

        // Borders
        '--border-subtle': 'rgba(232, 245, 232, 0.06)',
        '--border-light': 'rgba(232, 245, 232, 0.1)',
        '--border-medium': 'rgba(232, 245, 232, 0.15)',
        '--border-glow': 'rgba(82, 183, 136, 0.3)',

        // Shadows & Glows
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        '--shadow-md': '0 8px 24px rgba(0, 0, 0, 0.4)',
        '--shadow-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
        '--shadow-xl': '0 24px 64px rgba(0, 0, 0, 0.6)',
        '--glow-cyan': '0 0 30px rgba(82, 183, 136, 0.3)',
        '--glow-purple': '0 0 30px rgba(106, 153, 78, 0.3)',
        '--glow-pink': '0 0 30px rgba(149, 213, 178, 0.3)',
        '--glow-intense': '0 0 60px rgba(82, 183, 136, 0.4), 0 0 100px rgba(106, 153, 78, 0.2)',

        // Text Shadows
        '--text-shadow-default': '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(82, 183, 136, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)'
      }
    },

    'midnight': {
      id: 'midnight',
      name: 'Midnight',
      description: 'Deep blues and cool tones',
      category: 'dark',
      previewColors: ['#4d9fff', '#667eea', '#a8dadc'],
      variables: {
        // Color Palette - Cool Midnight
        '--bg-dark': '#050810',
        '--bg-primary': '#0a0e1a',
        '--bg-secondary': '#0f1624',
        '--bg-tertiary': '#1a2332',
        '--bg-card': '#141c2e',
        '--bg-card-hover': '#1a2332',
        '--bg-elevated': '#202a3e',

        // Text Colors
        '--text-primary': '#e8f0ff',
        '--text-secondary': '#c4d4e8',
        '--text-muted': '#a4b4c8',
        '--text-dim': '#7a88a8',

        // Accent Colors - Cool Palette
        '--accent-cyan': '#4d9fff',
        '--accent-purple': '#667eea',
        '--accent-pink': '#a8dadc',
        '--accent-orange': '#5ea3d0',
        '--accent-blue': '#4d9fff',
        '--accent-green': '#64b5f6',
        '--accent-amber': '#81c4f0',

        // Gradients
        '--gradient-primary': 'linear-gradient(135deg, #4d9fff 0%, #667eea 50%, #a8dadc 100%)',
        '--gradient-secondary': 'linear-gradient(135deg, #667eea 0%, #4d9fff 100%)',
        '--gradient-glow': 'linear-gradient(135deg, rgba(77, 159, 255, 0.15), rgba(102, 126, 234, 0.15), rgba(168, 218, 220, 0.15))',
        '--gradient-dark': 'linear-gradient(180deg, #0a0e1a 0%, #050810 100%)',
        '--gradient-hero': 'radial-gradient(ellipse at 20% 0%, rgba(77, 159, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(168, 218, 220, 0.08) 0%, transparent 50%), #0a0e1a',

        // Borders
        '--border-subtle': 'rgba(232, 240, 255, 0.06)',
        '--border-light': 'rgba(232, 240, 255, 0.1)',
        '--border-medium': 'rgba(232, 240, 255, 0.15)',
        '--border-glow': 'rgba(77, 159, 255, 0.3)',

        // Shadows & Glows
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        '--shadow-md': '0 8px 24px rgba(0, 0, 0, 0.4)',
        '--shadow-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
        '--shadow-xl': '0 24px 64px rgba(0, 0, 0, 0.6)',
        '--glow-cyan': '0 0 30px rgba(77, 159, 255, 0.3)',
        '--glow-purple': '0 0 30px rgba(102, 126, 234, 0.3)',
        '--glow-pink': '0 0 30px rgba(168, 218, 220, 0.3)',
        '--glow-intense': '0 0 60px rgba(77, 159, 255, 0.4), 0 0 100px rgba(102, 126, 234, 0.2)',

        // Text Shadows
        '--text-shadow-default': '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(77, 159, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)'
      }
    }
  };

  // Public API
  window.ThemeRegistry = {
    /**
     * Get a theme by ID
     * @param {string} themeId - The theme identifier
     * @returns {object|null} Theme object or null if not found
     */
    getTheme: function(themeId) {
      return themes[themeId] || null;
    },

    /**
     * Get all available themes
     * @returns {array} Array of theme objects
     */
    getAllThemes: function() {
      return Object.keys(themes).map(function(id) {
        return themes[id];
      });
    },

    /**
     * Get themes by category
     * @param {string} category - 'dark' or 'light'
     * @returns {array} Array of theme objects in that category
     */
    getThemesByCategory: function(category) {
      return Object.keys(themes)
        .map(function(id) { return themes[id]; })
        .filter(function(theme) { return theme.category === category; });
    }
  };

  // Validation (dev mode only)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Theme Registry] Loaded', Object.keys(themes).length, 'themes');
  }
})();
