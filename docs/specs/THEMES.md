# Feature Spec: Multi-Theme System

**Version**: 1.0
**Status**: Draft
**Target PR**: #2 (PR #1 is documentation only)
**Owner**: Engineering
**Last Updated**: 2026-01-21

## Problem Statement

Currently, Music Producer Lab supports only two themes (Dark Cyberpunk and Light) with a simple toggle mechanism. Users want:
- More visual variety and personalization options
- Different themes for different moods or contexts
- An extensible system for adding new themes without code changes
- Persistent theme selection that survives page reloads

The current implementation:
- Uses `data-theme` attribute on `<html>`
- Stores theme in localStorage as `'theme'` key
- Hard-coded toggle between `'dark'` and `'light'`
- Requires CSS changes to add new themes

This limits creativity and makes the platform feel less personalized.

## Current State

### Current Implementation

**File**: `navbar.js` (lines 165-193)
```javascript
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeLabel) {
    themeLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
  }
}
```

**CSS**: `styles.css`
- `:root` - Dark theme variables (default)
- `[data-theme="light"]` - Light theme overrides

**Themes Available**:
1. **Dark Cyberpunk** (default): Neon accents, dark background, futuristic
2. **Light**: Clean, minimal, professional

### CSS Variables Used
```css
/* Colors */
--bg-dark, --bg-primary, --bg-secondary, --bg-tertiary, --bg-card
--text-primary, --text-secondary, --text-muted
--accent-cyan, --accent-purple, --accent-pink, --accent-orange, --accent-blue, --accent-green

/* Borders & Shadows */
--border-subtle, --border-light, --shadow-sm, --shadow-md, --shadow-lg

/* Spacing & Sizing */
--spacing-xs, --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl

/* Typography */
--font-body, --font-display, --font-mono
```

### User Flow (Current)
1. User clicks theme toggle button in navbar
2. Theme switches between `'dark'` and `'light'`
3. Label updates ("Dark" or "Light")
4. Preference saved to localStorage
5. On page load, theme restored from localStorage or prefers-color-scheme

## Proposed Solution

### Architecture: Theme Registry System

Create an extensible theme registry that allows adding new themes without modifying core code.

#### 1. Theme Registry (`theme-registry.js`)

**Location**: `/theme-registry.js` (new file)

**Purpose**: Centralized theme definitions

```javascript
// theme-registry.js

export const themes = {
  'dark-cyberpunk': {
    name: 'Dark Cyberpunk',
    description: 'Neon accents and futuristic vibes',
    category: 'dark',
    variables: {
      '--bg-dark': '#030508',
      '--bg-primary': '#050810',
      '--accent-cyan': '#00f0ff',
      // ... all variables
    }
  },
  'light': {
    name: 'Light',
    description: 'Clean and professional',
    category: 'light',
    variables: {
      '--bg-dark': '#e8eaf0',
      '--bg-primary': '#f5f7fa',
      // ... overrides only
    }
  },
  'sunset': {
    name: 'Sunset',
    description: 'Warm oranges and purples',
    category: 'dark',
    variables: {
      '--bg-primary': '#1a0f1e',
      '--accent-primary': '#ff6b35',
      '--accent-secondary': '#9d4edd',
      // ...
    }
  },
  'forest': {
    name: 'Forest',
    description: 'Natural greens and earthy tones',
    category: 'dark',
    variables: {
      '--bg-primary': '#0f1a0f',
      '--accent-primary': '#52b788',
      '--accent-secondary': '#2d6a4f',
      // ...
    }
  },
  'midnight': {
    name: 'Midnight',
    description: 'Deep blues and cool tones',
    category: 'dark',
    variables: {
      '--bg-primary': '#0a0e1a',
      '--accent-primary': '#4d9fff',
      '--accent-secondary': '#667eea',
      // ...
    }
  }
};

export function getTheme(themeId) {
  return themes[themeId] || themes['dark-cyberpunk'];
}

export function getAllThemes() {
  return Object.keys(themes).map(id => ({
    id,
    ...themes[id]
  }));
}

export function getThemesByCategory(category) {
  return getAllThemes().filter(t => t.category === category);
}
```

#### 2. Theme Manager (`theme-manager.js`)

**Location**: `/theme-manager.js` (new file)

**Purpose**: Apply and persist themes

```javascript
// theme-manager.js

import { getTheme, getAllThemes } from './theme-registry.js';

const STORAGE_KEY = 'mpl-theme';
const DEFAULT_THEME = 'dark-cyberpunk';

export function applyTheme(themeId) {
  const theme = getTheme(themeId);
  const root = document.documentElement;

  // Set data-theme attribute for CSS selectors
  root.setAttribute('data-theme', themeId);

  // Apply CSS variables
  Object.entries(theme.variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // Save to localStorage
  localStorage.setItem(STORAGE_KEY, themeId);

  // Dispatch event for other components
  window.dispatchEvent(new CustomEvent('themeChanged', {
    detail: { themeId, theme }
  }));

  return theme;
}

export function getCurrentTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  return savedTheme || DEFAULT_THEME;
}

export function initializeTheme() {
  const themeId = getCurrentTheme();
  applyTheme(themeId);
}

export { getAllThemes };
```

#### 3. Theme Picker UI Component

**Location**: Integrate into `navbar.js` or new `theme-picker.js`

**Design**: Dropdown/modal with theme previews

**Markup**:
```html
<div class="theme-picker">
  <button class="theme-picker-trigger" id="themePickerTrigger">
    <span class="theme-picker-icon">🎨</span>
    <span class="theme-picker-label" id="currentThemeLabel">Dark Cyberpunk</span>
  </button>

  <div class="theme-picker-dropdown" id="themePickerDropdown">
    <div class="theme-picker-header">Choose Theme</div>
    <div class="theme-picker-grid" id="themePickerGrid">
      <!-- Generated theme cards -->
    </div>
  </div>
</div>
```

**Theme Card**:
```html
<button class="theme-card" data-theme-id="dark-cyberpunk">
  <div class="theme-card-preview">
    <div class="theme-preview-color" style="background: var(--accent-cyan)"></div>
    <div class="theme-preview-color" style="background: var(--accent-purple)"></div>
    <div class="theme-preview-color" style="background: var(--accent-pink)"></div>
  </div>
  <div class="theme-card-name">Dark Cyberpunk</div>
  <div class="theme-card-description">Neon accents and futuristic vibes</div>
</button>
```

**Interaction**:
1. Click theme picker trigger → dropdown opens
2. Click theme card → theme applies immediately
3. Dropdown stays open (allow browsing)
4. Click outside or press Escape → dropdown closes
5. Selected theme highlighted with checkmark

#### 4. CSS Updates

**File**: `styles.css`

**Changes**:
1. Remove hard-coded `[data-theme="light"]` overrides
2. Keep `:root` as default/fallback
3. Let JavaScript set CSS variables dynamically
4. Add theme picker component styles

**New Styles**:
```css
/* Theme Picker Component */
.theme-picker {
  position: relative;
  display: inline-block;
}

.theme-picker-trigger {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-picker-trigger:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-cyan);
}

.theme-picker-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-md);
  display: none;
  z-index: 1000;
}

.theme-picker-dropdown.open {
  display: block;
}

.theme-picker-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.theme-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  background: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.theme-card:hover {
  border-color: var(--accent-cyan);
  transform: translateY(-2px);
}

.theme-card.active {
  border-color: var(--accent-green);
  background: var(--bg-tertiary);
}

.theme-card-preview {
  display: flex;
  gap: 4px;
  margin-bottom: var(--spacing-sm);
}

.theme-preview-color {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}

.theme-card-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.theme-card-description {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .theme-picker-dropdown {
    width: 280px;
  }
}
```

### Migration Strategy

**Phase 1: Add new system alongside old**
- Create `theme-registry.js` and `theme-manager.js`
- Old toggle still works
- No breaking changes

**Phase 2: Update navbar to use new system**
- Replace toggle with picker
- Migrate localStorage key from `'theme'` to `'mpl-theme'`
- If old key exists, migrate automatically

**Phase 3: Add new themes**
- Start with 3 new themes (Sunset, Forest, Midnight)
- Gather user feedback
- Iterate

**Phase 4: Deprecate old toggle**
- Remove old toggle code
- Clean up CSS

### Initial Themes to Ship

1. **Dark Cyberpunk** (existing) - Default
2. **Light** (existing) - Professional
3. **Sunset** (new) - Warm oranges, purples, pinks
4. **Forest** (new) - Natural greens, earthy browns
5. **Midnight** (new) - Deep blues, cool purples

**Future themes** (not in initial release):
- Ocean (teal, aqua, deep blue)
- Retro (80s synthwave)
- Monochrome (grayscale)
- High Contrast (accessibility)

## Acceptance Criteria

### Must Have (MVP)
- ✅ Theme registry with at least 5 themes defined
- ✅ Theme manager can apply themes dynamically
- ✅ Theme picker UI in navbar
- ✅ Clicking a theme applies it immediately
- ✅ Selected theme persists across page reloads
- ✅ Migration from old `'theme'` key to new `'mpl-theme'` key
- ✅ Works on Chrome, Firefox, Safari, iOS Safari
- ✅ Responsive design (mobile + desktop)
- ✅ Keyboard accessible (Tab, Enter, Escape)

### Should Have
- ✅ Theme preview colors in picker
- ✅ Theme categories (dark/light)
- ✅ Smooth transitions between themes
- ✅ Active theme indicator (checkmark)

### Nice to Have (Future)
- ⏳ User-created custom themes
- ⏳ Theme import/export
- ⏳ Per-page theme preferences
- ⏳ Automatic theme based on time of day

## Test Plan

### Automated Tests
*Not required for MVP (no test framework yet)*

### Manual Test Steps

#### Test 1: Theme Picker Opens/Closes
**Browsers**: Chrome, Firefox, Safari, iOS Safari

1. Load any page with navbar
2. Locate theme picker trigger button (🎨 icon)
3. Click trigger
4. **Expected**: Dropdown opens with theme cards
5. Click outside dropdown
6. **Expected**: Dropdown closes
7. Open dropdown again
8. Press Escape key
9. **Expected**: Dropdown closes

#### Test 2: Theme Application
**Browsers**: Chrome, Firefox, Safari, iOS Safari

1. Open theme picker
2. Note current theme
3. Click a different theme card
4. **Expected**:
   - Theme applies immediately
   - Colors change throughout page
   - Selected theme has checkmark/highlight
   - Dropdown remains open
5. Close dropdown
6. Inspect `<html data-theme="...">`
7. **Expected**: Attribute matches selected theme

#### Test 3: Persistence
**Browsers**: Chrome, Firefox, Safari, iOS Safari

1. Select "Sunset" theme
2. Refresh page
3. **Expected**: "Sunset" theme still active
4. Navigate to different page
5. **Expected**: "Sunset" theme still active
6. Open browser DevTools → Application → localStorage
7. Check `mpl-theme` key
8. **Expected**: Value is `"sunset"`

#### Test 4: Migration from Old System
**Browsers**: Chrome, Firefox, Safari

1. Open DevTools → Application → localStorage
2. Set `theme` key to `"light"` (old key)
3. Delete `mpl-theme` key (if exists)
4. Refresh page
5. **Expected**:
   - Light theme applied
   - `mpl-theme` key created with value `"dark-cyberpunk"` or migrated value
   - Old `theme` key still exists (don't break old system until phase 4)

#### Test 5: All Themes Work
**Browsers**: Chrome, Firefox

1. Open theme picker
2. For each theme:
   a. Click theme card
   b. Verify colors change
   c. Check no console errors
   d. Verify text is readable
   e. Verify buttons/links are visible
3. **Expected**: All 5 themes render correctly

#### Test 6: Keyboard Accessibility
**Browsers**: Chrome, Firefox, Safari

1. Tab to theme picker trigger
2. Press Enter
3. **Expected**: Dropdown opens
4. Tab through theme cards
5. **Expected**: Focus visible on each card
6. Press Enter on a theme card
7. **Expected**: Theme applies
8. Press Escape
9. **Expected**: Dropdown closes, focus returns to trigger

#### Test 7: Mobile Responsive
**Browsers**: iOS Safari, Chrome mobile emulation

1. Load page on mobile device (<768px width)
2. Open theme picker
3. **Expected**:
   - Dropdown fits on screen
   - Touch targets are at least 44x44px
   - No horizontal scroll
4. Tap theme cards
5. **Expected**: Theme changes work on touch

#### Test 8: Theme Consistency Across Pages
**Browsers**: Chrome

1. On homepage, select "Forest" theme
2. Navigate to:
   - /drum-playground.html
   - /harmony-playground.html
   - /labs.html
   - /progress.html
3. **Expected**: "Forest" theme active on all pages

### Browser Test Matrix

| Test Case | Chrome | Firefox | Safari | iOS Safari |
|-----------|--------|---------|--------|-----------|
| Test 1: Picker Open/Close | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 2: Theme Application | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 3: Persistence | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 4: Migration | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 5: All Themes Work | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 6: Keyboard Access | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 7: Mobile Responsive | ⬜ Pass | ⬜ N/A | ⬜ N/A | ⬜ Pass |
| Test 8: Cross-Page Consistency | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |

**Legend**: ⬜ Not tested, ✅ Pass, ❌ Fail, ⚠️ Partial, N/A = Not applicable

## Technical Considerations

### Performance
- **CSS variable updates**: Very fast (no repaint, just property updates)
- **Theme registry size**: ~2KB for 5 themes (negligible)
- **localStorage**: Synchronous but fast for small data

### Security
- **No XSS risk**: Theme IDs validated against registry
- **No injection**: CSS variables are CSS-only (can't execute JS)

### Accessibility
- **ARIA labels**: Theme picker button needs `aria-label`
- **Focus management**: Dropdown should trap focus when open
- **Color contrast**: All themes must meet WCAG AA (4.5:1 for text)
- **Keyboard navigation**: Full keyboard support required

### Browser Compatibility
- **CSS variables**: Supported in all target browsers (IE11 not supported)
- **localStorage**: Supported everywhere
- **CustomEvent**: Supported in all modern browsers

### Safari/iOS Specific
- **Touch targets**: Minimum 44x44px (theme cards already comply)
- **Viewport issues**: None expected (standard dropdown pattern)

## Files to Create/Modify

### New Files
1. `/theme-registry.js` - Theme definitions
2. `/theme-manager.js` - Theme application logic
3. `/theme-picker.js` (optional) - UI component logic (or integrate into navbar.js)

### Modified Files
1. `/navbar.js` - Replace toggle with picker, integrate new system
2. `/styles.css` - Add theme picker styles, remove hard-coded `[data-theme="light"]`
3. All HTML files - Update navbar include (if needed) or no changes if navbar is dynamically loaded

### Documentation
1. `/docs/THEME_SYSTEM.md` (optional) - Technical documentation for developers
2. Update `/docs/PROJECT_STATUS_REPORT_*.md` - Add theme system to recent changes

## Rollout Plan

### Phase 1: Development (PR #2)
- Create theme registry and manager
- Build theme picker UI
- Test locally on all browsers

### Phase 2: Staging Review
- Deploy to staging environment
- Internal team testing
- Gather feedback on theme choices

### Phase 3: Production Release
- Merge to main
- Deploy to production
- Monitor for errors

### Phase 4: User Feedback
- Collect user feedback on themes
- Iterate on color choices if needed
- Plan additional themes based on requests

## Success Metrics

### Technical Metrics
- **Bundle size increase**: <5KB (acceptable)
- **Performance impact**: None (CSS variable updates are instant)
- **Error rate**: 0 JavaScript errors related to themes

### User Metrics
- **Theme adoption**: >50% of users try non-default theme within 7 days
- **Theme diversity**: All 5 themes used by at least 5% of users
- **Theme stickiness**: >80% of users keep selected theme for 7+ days

## Open Questions

1. **Should we support theme preview on hover?**
   - Pro: Lets users try before committing
   - Con: Could be jarring; adds complexity
   - **Decision**: Not in MVP; consider for future

2. **Should we add a "random theme" button?**
   - Pro: Fun, encourages exploration
   - Con: Could be annoying if user gets theme they dislike
   - **Decision**: Not in MVP; easy to add later

3. **Should themes be namespaced per page?**
   - Pro: Different theme for playground vs. lessons
   - Con: Could be confusing; more complex
   - **Decision**: Not in MVP; global theme only

4. **Should we support user-created themes?**
   - Pro: Ultimate personalization
   - Con: Complex UX; risk of unreadable themes
   - **Decision**: Not in MVP; define interface now for future

## Risks & Mitigations

### Risk 1: Color contrast issues
**Mitigation**: Test all themes with contrast checker; aim for WCAG AA minimum

### Risk 2: Theme picker doesn't fit on small screens
**Mitigation**: Responsive design; consider full-screen modal on mobile if needed

### Risk 3: Users don't discover theme picker
**Mitigation**: Add onboarding tooltip or announcement on first visit

### Risk 4: Too many themes overwhelm users
**Mitigation**: Start with 5; add more based on demand; consider categorization

## Appendix

### Color Palette Ideas

**Sunset Theme**:
- Primary: `#ff6b35` (coral orange)
- Secondary: `#9d4edd` (purple)
- Accent: `#f72585` (hot pink)
- Background: `#1a0f1e` (deep purple-black)

**Forest Theme**:
- Primary: `#52b788` (sage green)
- Secondary: `#2d6a4f` (forest green)
- Accent: `#95d5b2` (light mint)
- Background: `#0f1a0f` (dark green-black)

**Midnight Theme**:
- Primary: `#4d9fff` (sky blue)
- Secondary: `#667eea` (indigo)
- Accent: `#a8dadc` (light blue)
- Background: `#0a0e1a` (navy-black)

### Inspiration
- VS Code theme system
- Spotify theme variations
- Discord themes
- Slack themes

---

**Next Steps After Spec Approval**:
1. Create feature branch: `claude/theme-system-{sessionId}`
2. Implement theme-registry.js
3. Implement theme-manager.js
4. Build theme picker UI
5. Update navbar.js
6. Update styles.css
7. Manual testing
8. Create PR with this spec linked
