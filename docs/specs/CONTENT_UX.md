# Feature Spec: Content & UX Polish

**Version**: 1.0
**Status**: Draft
**Target PR**: #5
**Owner**: Engineering
**Last Updated**: 2026-01-21

## Problem Statement

While Music Producer Lab has excellent core functionality, there are several UX rough edges that affect user experience:

### Loading States
- **Issue**: Audio samples load in background with no indication
- **Impact**: Users don't know if app is ready; may click before samples load
- **Current**: No loading indicators anywhere

### Error Handling
- **Issue**: Errors caught but not always shown to user
- **Impact**: Silent failures; users confused when something doesn't work
- **Current**: Some errors use toast, many don't

### Toast System Limitations
- **Issue**: Basic toast system exists but lacks features
- **Impact**: Users can't dismiss toasts, no persistent messages for important info
- **Current**: Auto-dismiss only, no manual close, no action buttons

### Keyboard Accessibility
- **Issue**: Limited keyboard navigation support
- **Impact**: Keyboard users struggle; accessibility issues
- **Current**: Focus indicators weak, no keyboard shortcuts

### Async Operation Feedback
- **Issue**: Long operations (export, save) have no progress indication
- **Impact**: Users don't know if app is working or frozen
- **Current**: No loading overlays or progress bars

### Error Boundaries
- **Issue**: Uncaught errors can break entire page
- **Impact**: White screen, app unusable
- **Current**: No global error catching for React-like recovery

## Current State

### Toast Notification System

**File**: `toast-notifications.js`

```javascript
function showToast({ type = 'info', message, duration = 3000 }) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
```

**Current Features**:
- 4 types: info, success, warning, error
- Auto-dismiss after duration
- Animation (fade in/out)

**Missing**:
- Manual close button
- Persistent toasts (duration: false)
- Action buttons ("Retry", "Undo", etc.)
- Toast queue (multiple toasts at once)
- Position options (currently top-right only)

### Loading Indicators

**Current**: None
**Needed**:
- Sample loading indicator
- Export progress (WAV, MIDI)
- IndexedDB operations
- Page transitions

### Keyboard Support

**Current**:
- Basic tab navigation works
- No custom keyboard shortcuts
- Focus indicators are browser default (subtle)

**Needed**:
- Spacebar: Play/pause
- Arrow keys: Navigate steps
- Delete/Backspace: Clear step
- Ctrl/Cmd + S: Save pattern
- Escape: Close modals
- Strong focus indicators

## Proposed Solution

### 1. Enhanced Toast System

#### Features to Add

**A) Manual Close Button**

```javascript
function showToast({ type, message, duration, dismissible = true }) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const messageEl = document.createElement('span');
  messageEl.className = 'toast-message';
  messageEl.textContent = message;
  toast.appendChild(messageEl);

  // Add close button
  if (dismissible) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.innerHTML = '×';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.onclick = () => dismissToast(toast);
    toast.appendChild(closeBtn);
  }

  document.body.appendChild(toast);

  // Auto-dismiss (if duration provided)
  if (duration !== false && duration > 0) {
    setTimeout(() => dismissToast(toast), duration);
  }
}

function dismissToast(toast) {
  toast.classList.add('toast-exit');
  setTimeout(() => toast.remove(), 300);
}
```

**B) Action Buttons**

```javascript
function showToast({ type, message, actions = [] }) {
  // ... existing code

  // Add action buttons
  if (actions.length > 0) {
    const actionsEl = document.createElement('div');
    actionsEl.className = 'toast-actions';

    actions.forEach(action => {
      const btn = document.createElement('button');
      btn.className = 'toast-action-btn';
      btn.textContent = action.label;
      btn.onclick = () => {
        action.onClick();
        dismissToast(toast);
      };
      actionsEl.appendChild(btn);
    });

    toast.appendChild(actionsEl);
  }
}

// Usage:
showToast({
  type: 'warning',
  message: 'Failed to load sample',
  actions: [
    { label: 'Retry', onClick: () => retryLoadSample() },
    { label: 'Use fallback', onClick: () => useFallbackSample() }
  ]
});
```

**C) Toast Queue**

```javascript
class ToastManager {
  constructor() {
    this.queue = [];
    this.maxVisible = 3;
    this.container = this.createContainer();
  }

  createContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }

  show(options) {
    const toast = this.createToast(options);
    this.queue.push(toast);
    this.render();
  }

  render() {
    const visible = this.queue.slice(0, this.maxVisible);
    this.container.innerHTML = '';
    visible.forEach(toast => this.container.appendChild(toast));
  }

  dismiss(toast) {
    const index = this.queue.indexOf(toast);
    if (index > -1) {
      this.queue.splice(index, 1);
      this.render();
    }
  }
}

export const toastManager = new ToastManager();
```

### 2. Loading States

#### A) Global Loading Overlay

```javascript
// loading.js

class LoadingManager {
  constructor() {
    this.overlay = this.createOverlay();
    this.activeOperations = new Set();
  }

  createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
      <div class="loading-spinner"></div>
      <div class="loading-message">Loading...</div>
    `;
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    return overlay;
  }

  show(message = 'Loading...', operationId = null) {
    if (operationId) {
      this.activeOperations.add(operationId);
    }

    this.overlay.querySelector('.loading-message').textContent = message;
    this.overlay.style.display = 'flex';
  }

  hide(operationId = null) {
    if (operationId) {
      this.activeOperations.delete(operationId);
    }

    // Only hide if no active operations
    if (this.activeOperations.size === 0) {
      this.overlay.style.display = 'none';
    }
  }
}

export const loadingManager = new LoadingManager();

// Usage:
loadingManager.show('Loading samples...', 'sample-load');
await loadSamples();
loadingManager.hide('sample-load');
```

#### B) Inline Loading Indicators

**For buttons**:
```javascript
function showButtonLoading(button, originalText) {
  button.disabled = true;
  button.dataset.originalText = originalText;
  button.innerHTML = `
    <span class="button-spinner"></span>
    <span>${originalText}</span>
  `;
}

function hideButtonLoading(button) {
  button.disabled = false;
  button.innerHTML = button.dataset.originalText;
}

// Usage:
const exportBtn = document.getElementById('exportBtn');
showButtonLoading(exportBtn, 'Export WAV');
await exportAsWAV();
hideButtonLoading(exportBtn);
```

**For sections**:
```html
<div class="sample-picker loading">
  <div class="section-spinner"></div>
  <div class="sample-list">
    <!-- Content -->
  </div>
</div>
```

```css
.sample-picker.loading .sample-list {
  opacity: 0.5;
  pointer-events: none;
}

.section-spinner {
  display: none;
}

.loading .section-spinner {
  display: block;
}
```

#### C) Progress Bars

```javascript
// progress.js

class ProgressBar {
  constructor(container, options = {}) {
    this.container = container;
    this.options = { label: '', ...options };
    this.element = this.create();
  }

  create() {
    const wrapper = document.createElement('div');
    wrapper.className = 'progress-bar-wrapper';

    if (this.options.label) {
      const label = document.createElement('div');
      label.className = 'progress-bar-label';
      label.textContent = this.options.label;
      wrapper.appendChild(label);
    }

    const bar = document.createElement('div');
    bar.className = 'progress-bar';

    const fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    fill.style.width = '0%';

    bar.appendChild(fill);
    wrapper.appendChild(bar);

    this.container.appendChild(wrapper);
    return wrapper;
  }

  update(percent, label = null) {
    const fill = this.element.querySelector('.progress-bar-fill');
    fill.style.width = `${Math.max(0, Math.min(100, percent))}%`;

    if (label) {
      const labelEl = this.element.querySelector('.progress-bar-label');
      if (labelEl) labelEl.textContent = label;
    }
  }

  complete() {
    this.update(100);
    setTimeout(() => this.remove(), 500);
  }

  remove() {
    this.element.remove();
  }
}

// Usage:
const progress = new ProgressBar(container, { label: 'Exporting...' });
for (let i = 0; i <= 100; i += 10) {
  await processChunk(i);
  progress.update(i);
}
progress.complete();
```

### 3. Error Boundaries

**Purpose**: Catch errors and show recovery UI instead of blank page.

```javascript
// error-boundary.js

class ErrorBoundary {
  constructor(rootElement, options = {}) {
    this.root = rootElement;
    this.options = {
      fallbackUI: this.createFallbackUI.bind(this),
      onError: null,
      ...options
    };

    this.setupErrorHandling();
  }

  setupErrorHandling() {
    // Wrap all event handlers
    this.wrapElement(this.root);

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(event.error);
    });
  }

  wrapElement(element) {
    // Wrap all click handlers
    element.addEventListener('click', (event) => {
      try {
        // Event will propagate normally
      } catch (error) {
        this.handleError(error);
        event.stopPropagation();
      }
    }, true);

    // Wrap form submissions
    element.addEventListener('submit', (event) => {
      try {
        // Handle normally
      } catch (error) {
        this.handleError(error);
        event.preventDefault();
      }
    }, true);
  }

  handleError(error) {
    console.error('[Error Boundary]', error);

    // Call custom error handler
    if (this.options.onError) {
      this.options.onError(error);
    }

    // Show fallback UI
    this.showFallback(error);
  }

  createFallbackUI(error) {
    return `
      <div class="error-boundary-fallback">
        <div class="error-icon">⚠️</div>
        <h2>Something went wrong</h2>
        <p>We encountered an unexpected error.</p>
        <details>
          <summary>Error details</summary>
          <pre>${error.message}\n${error.stack}</pre>
        </details>
        <div class="error-actions">
          <button onclick="window.location.reload()">Reload Page</button>
          <button onclick="window.history.back()">Go Back</button>
        </div>
      </div>
    `;
  }

  showFallback(error) {
    this.root.innerHTML = this.options.fallbackUI(error);
  }
}

// Usage: Wrap main app container
const appRoot = document.getElementById('app');
new ErrorBoundary(appRoot, {
  onError: (error) => {
    // Log to analytics
    analytics.trackError('error_boundary', error.message);
  }
});
```

### 4. Keyboard Accessibility

#### A) Focus Indicators

**CSS**:
```css
/* Strong focus indicators */
:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Button focus */
button:focus-visible,
.btn:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 240, 255, 0.2);
}

/* Input focus */
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--accent-cyan);
  border-color: var(--accent-cyan);
}

/* Remove focus on mouse click (keep for keyboard) */
:focus:not(:focus-visible) {
  outline: none;
}
```

#### B) Keyboard Shortcuts

```javascript
// keyboard-shortcuts.js

class KeyboardShortcuts {
  constructor() {
    this.shortcuts = new Map();
    this.enabled = true;
    this.setupListeners();
  }

  setupListeners() {
    document.addEventListener('keydown', (event) => {
      if (!this.enabled) return;

      // Don't trigger if user is typing in input
      if (event.target.matches('input, textarea, select')) return;

      const key = this.getKeyCombo(event);
      const handler = this.shortcuts.get(key);

      if (handler) {
        event.preventDefault();
        handler(event);
      }
    });
  }

  getKeyCombo(event) {
    const parts = [];
    if (event.ctrlKey || event.metaKey) parts.push('mod');
    if (event.shiftKey) parts.push('shift');
    if (event.altKey) parts.push('alt');
    parts.push(event.key.toLowerCase());
    return parts.join('+');
  }

  register(keyCombo, handler, description) {
    this.shortcuts.set(keyCombo, handler);
    console.log(`[Shortcuts] Registered: ${keyCombo} - ${description}`);
  }

  unregister(keyCombo) {
    this.shortcuts.delete(keyCombo);
  }

  disable() {
    this.enabled = false;
  }

  enable() {
    this.enabled = true;
  }

  showHelp() {
    // Show modal with all shortcuts
    const shortcuts = Array.from(this.shortcuts.entries());
    // ... build and show modal
  }
}

export const shortcuts = new KeyboardShortcuts();

// Register shortcuts
shortcuts.register('space', () => togglePlayback(), 'Play/Pause');
shortcuts.register('mod+s', () => savePattern(), 'Save pattern');
shortcuts.register('mod+e', () => exportWAV(), 'Export WAV');
shortcuts.register('escape', () => closeModal(), 'Close modal');
shortcuts.register('?', () => shortcuts.showHelp(), 'Show keyboard shortcuts');
```

#### C) Focus Trap for Modals

```javascript
// focus-trap.js

export function createFocusTrap(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  function handleTabKey(event) {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  element.addEventListener('keydown', handleTabKey);

  // Focus first element
  firstFocusable?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

// Usage:
const modal = document.getElementById('myModal');
const releaseTrap = createFocusTrap(modal);

// When closing modal:
modal.addEventListener('close', () => {
  releaseTrap();
});
```

### 5. Empty States

**Purpose**: Show helpful message when no data available.

```html
<!-- Empty pattern list -->
<div class="empty-state" id="emptyPatternState">
  <div class="empty-state-icon">🎵</div>
  <h3>No patterns yet</h3>
  <p>Create your first drum pattern to get started</p>
  <button class="btn-primary" onclick="createNewPattern()">
    Create Pattern
  </button>
</div>

<!-- Empty lesson progress -->
<div class="empty-state">
  <div class="empty-state-icon">📚</div>
  <h3>Start your journey</h3>
  <p>Complete lessons to track your progress</p>
  <a href="/labs.html" class="btn-primary">Browse Lessons</a>
</div>
```

## Acceptance Criteria

### Must Have (MVP)
- ✅ Enhanced toast system with close button
- ✅ Toast action buttons support
- ✅ Toast queue (max 3 visible)
- ✅ Loading overlay for async operations
- ✅ Button loading states (spinner)
- ✅ Progress bars for long operations (export)
- ✅ Error boundary for critical sections
- ✅ Strong focus indicators (CSS)
- ✅ Keyboard shortcuts (play/pause, save, export, escape)
- ✅ Focus trap for modals
- ✅ Empty states for pattern list, progress
- ✅ Works on Chrome, Firefox, Safari, iOS Safari
- ✅ Keyboard-only navigation possible

### Should Have
- ✅ Keyboard shortcuts help modal (?)
- ✅ Skip link for screen readers
- ✅ ARIA labels for all interactive elements
- ✅ Loading state for sample picker

### Nice to Have (Future)
- ⏳ Undo/redo system
- ⏳ Command palette (Cmd+K)
- ⏳ Customizable keyboard shortcuts
- ⏳ Animations for state transitions

## Test Plan

### Test 1: Enhanced Toast with Close Button
**Browsers**: Chrome, Firefox, Safari

1. Trigger a toast notification
2. **Expected**: Toast appears with close button (×)
3. Click close button
4. **Expected**: Toast dismisses immediately (fade out)
5. Trigger toast with `duration: false`
6. Wait 10 seconds
7. **Expected**: Toast does not auto-dismiss
8. Close manually
9. **Expected**: Toast dismisses

### Test 2: Toast Action Buttons
**Browsers**: Chrome

1. Trigger error toast with "Retry" action
2. **Expected**: Toast has "Retry" button
3. Click "Retry"
4. **Expected**:
   - Retry function called
   - Toast dismisses
5. Trigger toast with 2 actions
6. **Expected**: Both buttons visible, styled correctly

### Test 3: Toast Queue
**Browsers**: Chrome

1. Trigger 5 toasts rapidly
2. **Expected**:
   - Only 3 toasts visible at once
   - Toasts stacked vertically
   - Oldest toast on top
3. Dismiss top toast
4. **Expected**: 4th toast appears from queue
5. Wait for auto-dismiss
6. **Expected**: Toasts dismiss in order, queue empties

### Test 4: Loading Overlay
**Browsers**: Chrome, Firefox, Safari

1. Click "Export WAV" button
2. **Expected**:
   - Loading overlay appears
   - Spinner animates
   - Message: "Exporting WAV..."
   - Page content dimmed/blocked
3. Export completes
4. **Expected**: Overlay dismisses smoothly

### Test 5: Button Loading State
**Browsers**: Chrome

1. Click "Save Pattern" button
2. **Expected**:
   - Button disabled
   - Spinner appears inside button
   - Button text remains visible
3. Save completes
4. **Expected**:
   - Button enabled
   - Spinner removed
   - Original text restored

### Test 6: Progress Bar
**Browsers**: Chrome

1. Trigger long operation (e.g., export with many tracks)
2. **Expected**:
   - Progress bar appears
   - Label: "Exporting... 0%"
   - Bar fill animates from 0% to 100%
3. Operation completes
4. **Expected**:
   - Bar reaches 100%
   - Fades out after 500ms

### Test 7: Error Boundary
**Browsers**: Chrome

1. Navigate to page with error boundary
2. Trigger JavaScript error (via button or console)
3. **Expected**:
   - Error boundary catches error
   - Fallback UI shows:
     - Error icon
     - Message: "Something went wrong"
     - "Reload Page" and "Go Back" buttons
     - Expandable error details
4. Click "Reload Page"
5. **Expected**: Page reloads
6. Click "Go Back"
7. **Expected**: Browser navigates back

### Test 8: Focus Indicators (Keyboard Navigation)
**Browsers**: Chrome, Firefox

1. Press Tab key to navigate
2. **Expected**:
   - Focus indicator visible on current element
   - Blue outline (2px, cyan color)
   - Clear contrast with background
3. Navigate through buttons, links, inputs
4. **Expected**: All interactive elements have focus indicator
5. Click element with mouse
6. **Expected**: No focus indicator (only on keyboard focus)

### Test 9: Keyboard Shortcuts (Spacebar Play/Pause)
**Browsers**: Chrome

1. Load drum playground
2. Press Spacebar
3. **Expected**: Playback starts
4. Press Spacebar again
5. **Expected**: Playback stops
6. Focus on input field
7. Press Spacebar
8. **Expected**: Space character typed (shortcut disabled in inputs)

### Test 10: Keyboard Shortcuts (Save)
**Browsers**: Chrome, Safari

1. Create drum pattern
2. Press Cmd+S (Mac) or Ctrl+S (Windows/Linux)
3. **Expected**:
   - Save dialog appears (or pattern saved)
   - Browser's default save dialog prevented
   - Toast: "Pattern saved"

### Test 11: Escape to Close Modal
**Browsers**: Chrome, Firefox

1. Open modal (e.g., sample picker)
2. Press Escape key
3. **Expected**: Modal closes
4. Press Escape again
5. **Expected**: Nothing happens (no error)

### Test 12: Focus Trap in Modal
**Browsers**: Chrome

1. Open modal with multiple focusable elements
2. Press Tab repeatedly
3. **Expected**:
   - Focus cycles through modal elements only
   - When reaching last element, Tab moves to first element
4. Press Shift+Tab at first element
5. **Expected**: Focus moves to last element
6. Close modal
7. Press Tab
8. **Expected**: Focus returns to page (not trapped)

### Test 13: Keyboard Shortcuts Help
**Browsers**: Chrome

1. Press ? key
2. **Expected**:
   - Help modal opens
   - Lists all keyboard shortcuts
   - Shows key + description
   - Example: "Space - Play/Pause"
3. Press Escape
4. **Expected**: Help modal closes

### Test 14: Empty States
**Browsers**: Chrome, Firefox

1. Clear all saved patterns (localStorage)
2. Navigate to drum playground
3. Open pattern list
4. **Expected**:
   - Empty state shows
   - Icon: 🎵
   - Message: "No patterns yet"
   - Button: "Create Pattern"
5. Click "Create Pattern"
6. **Expected**: New pattern created, empty state hidden

### Test 15: Screen Reader (Accessibility)
**Browser**: Chrome + screen reader (NVDA/JAWS on Windows, VoiceOver on Mac)

1. Enable screen reader
2. Navigate through page with Tab
3. **Expected**:
   - All buttons announced with accessible names
   - ARIA labels read correctly
   - Focus order logical
   - Skip link available ("Skip to main content")
4. Trigger toast notification
5. **Expected**: Toast content announced via `aria-live`

### Browser Test Matrix

| Test Case | Chrome | Firefox | Safari | iOS Safari |
|-----------|--------|---------|--------|-----------|
| Test 1: Toast Close | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 2: Toast Actions | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 3: Toast Queue | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 4: Loading Overlay | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 5: Button Loading | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 6: Progress Bar | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 7: Error Boundary | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 8: Focus Indicators | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 9: Spacebar Shortcut | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 10: Save Shortcut | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 11: Escape Key | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 12: Focus Trap | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 13: Shortcuts Help | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ N/A |
| Test 14: Empty States | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 15: Screen Reader | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |

## Technical Considerations

### Performance
- **Toast queue**: Limits DOM elements (max 3)
- **Loading overlay**: Single instance, reused
- **Keyboard shortcuts**: Single event listener, Map lookup O(1)

### Security
- **No XSS**: Toast content is textContent (not innerHTML)
- **Error messages**: Sanitized before display

### Accessibility
- **WCAG 2.1 AA**: Target standard
- **Focus indicators**: 4.5:1 contrast ratio minimum
- **Keyboard navigation**: All features keyboard-accessible
- **Screen readers**: ARIA labels, live regions

### Browser Compatibility
- **:focus-visible**: Supported in all modern browsers
- **Keyboard events**: Universal support
- **ARIA**: Supported by all screen readers

## Files to Create/Modify

### New Files
1. `/loading-manager.js` - Loading states
2. `/progress-bar.js` - Progress bars
3. `/error-boundary.js` - Error recovery
4. `/keyboard-shortcuts.js` - Keyboard handling
5. `/focus-trap.js` - Modal focus management

### Modified Files
1. `/toast-notifications.js` - Enhanced toast system
2. `/sequencer.js` - Add loading states, keyboard shortcuts
3. `/drum-playground.html` - Empty states, keyboard shortcuts
4. `/styles.css` - Focus indicators, loading spinners, progress bars
5. `/lesson-engine.js` - Error boundary integration

## Migration Strategy

**No migration needed** (enhancements only).

### Phased Rollout
1. **Phase 1**: Enhanced toasts, loading states
2. **Phase 2**: Keyboard shortcuts, focus indicators
3. **Phase 3**: Error boundaries, progress bars
4. **Phase 4**: Empty states, polish

## Success Metrics

### Technical Metrics
- **Loading indicators shown**: >95% of async operations
- **Error recovery**: <1% of errors cause page crashes
- **Keyboard accessibility**: 100% features keyboard-accessible

### User Metrics
- **User satisfaction**: Increase NPS by 10 points
- **Accessibility**: Increase screen reader user engagement by 50%
- **Error reports**: Decrease by 30% (better UX reduces confusion)

## Open Questions

1. **Should keyboard shortcuts be customizable?**
   - Pro: Power users can optimize
   - Con: Adds complexity
   - **Decision**: Not in MVP; fixed shortcuts only

2. **Should we add undo/redo?**
   - Pro: Users love it; forgiving UX
   - Con: Complex state management
   - **Decision**: Future PR; design carefully

3. **Should focus indicators be themeable?**
   - Pro: Matches theme colors
   - Con: Must maintain contrast
   - **Decision**: Use accent-cyan for all themes; adjust if needed

## Risks & Mitigations

### Risk 1: Keyboard shortcuts conflict with browser shortcuts
**Mitigation**: Use Cmd/Ctrl for most; test on all browsers; document conflicts

### Risk 2: Loading overlays block user interaction too long
**Mitigation**: Only use for operations >500ms; add cancel button for long ops

### Risk 3: Focus indicators too subtle
**Mitigation**: Test with real users; aim for WCAG AAA if possible

## Appendix

### WCAG 2.1 AA Requirements

**Focus Visible (2.4.7)**:
- ✅ Keyboard focus indicator must be visible
- ✅ Minimum 2px outline, high contrast

**Keyboard (2.1.1)**:
- ✅ All functionality available via keyboard
- ✅ No keyboard traps (except intentional focus traps with escape)

**On Focus (3.2.1)**:
- ✅ Focus doesn't trigger unexpected context changes

**Name, Role, Value (4.1.2)**:
- ✅ All interactive elements have accessible names
- ✅ ARIA labels where native labels unavailable

### Resources
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Keyboard Navigation Best Practices](https://webaim.org/techniques/keyboard/)
- [Focus Management](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard)

---

**Next Steps After Spec Approval**:
1. Create feature branch: `claude/ux-polish-{sessionId}`
2. Enhance toast-notifications.js
3. Implement loading-manager.js
4. Implement progress-bar.js
5. Implement error-boundary.js
6. Implement keyboard-shortcuts.js
7. Implement focus-trap.js
8. Update styles.css (focus indicators)
9. Add empty states to HTML
10. Test keyboard navigation
11. Test with screen reader
12. Create PR with this spec linked
