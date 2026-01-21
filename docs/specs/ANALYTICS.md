# Feature Spec: Analytics & Error Tracking

**Version**: 1.0
**Status**: Draft
**Target PR**: #6
**Owner**: Engineering
**Last Updated**: 2026-01-21

## Problem Statement

Currently, Music Producer Lab has limited visibility into:
- How users interact with the platform
- Which lessons are completed vs. abandoned
- Which features are used most/least
- Errors that occur in production
- Performance bottlenecks users experience

### Impact of No Analytics
- Can't prioritize features based on usage data
- Can't debug production errors (users report "it broke")
- Can't measure success of new features
- Can't identify lessons that are too hard or confusing
- Can't optimize for common user paths

### Privacy Concerns
- Must respect user privacy (GDPR, CCPA)
- No tracking without consent
- No personally identifiable information (PII)
- Must be transparent about data collection

## Current State

### Debugging Infrastructure

**File**: `debug.js`

```javascript
// Conditional logging (only in dev)
export function debugLog(message, data) {
  if (shouldLog()) {
    console.log(`[MPL Debug] ${message}`, data);
  }
}

function shouldLog() {
  return window.location.hostname === 'localhost' ||
         localStorage.getItem('debug') === 'true' ||
         new URLSearchParams(window.location.search).get('debug') === 'true';
}
```

**Current**: Only logs to console in dev mode
**Missing**: No error reporting to server, no analytics

### Error Handling

**Current**: Ad-hoc try-catch blocks

```javascript
// Example from sequencer.js
try {
  const audioBuffer = await loadSample(url);
} catch (error) {
  console.error('Failed to load sample:', error);
  return null;
}
```

**Issues**:
- Errors logged locally only
- No way to know how often errors occur in production
- No context about user state when error occurred

### No Analytics Currently
- No event tracking
- No user journey tracking
- No feature usage metrics
- No performance monitoring

## Proposed Solution

### Architecture: Privacy-First Analytics

**Principles**:
1. **Opt-in by default** (or clear notice with opt-out)
2. **No PII collected** (no names, emails, IPs)
3. **Anonymous identifiers** only (UUID stored locally)
4. **Minimal data** collection (only what's needed)
5. **Transparent** (users can see what data is collected)
6. **Local-first** (events queued locally, batched to reduce requests)

### Phase 1: Analytics Abstraction Layer

**Purpose**: Define interface for analytics without committing to specific provider.

**File**: `analytics.js`

```javascript
// analytics.js

class Analytics {
  constructor(config = {}) {
    this.enabled = false;
    this.userId = null;
    this.sessionId = null;
    this.queue = [];
    this.config = {
      batchSize: 10,
      batchInterval: 30000, // 30 seconds
      endpoint: '/api/analytics', // Future backend
      ...config
    };
  }

  async init() {
    // Check consent
    const consent = this.getConsent();
    if (!consent) {
      console.log('[Analytics] User has not consented, analytics disabled');
      return;
    }

    this.enabled = true;

    // Get or create anonymous user ID
    this.userId = this.getOrCreateUserId();

    // Create session ID
    this.sessionId = this.createSessionId();

    // Start batch processor
    this.startBatchProcessor();

    console.log('[Analytics] Initialized', {
      userId: this.userId,
      sessionId: this.sessionId
    });
  }

  getConsent() {
    // Check localStorage for consent
    const consent = localStorage.getItem('mpl-analytics-consent');
    return consent === 'true';
  }

  setConsent(consented) {
    localStorage.setItem('mpl-analytics-consent', consented ? 'true' : 'false');
    if (consented && !this.enabled) {
      this.init();
    } else if (!consented && this.enabled) {
      this.enabled = false;
      this.queue = [];
    }
  }

  getOrCreateUserId() {
    let userId = localStorage.getItem('mpl-analytics-user-id');
    if (!userId) {
      userId = this.generateUUID();
      localStorage.setItem('mpl-analytics-user-id', userId);
    }
    return userId;
  }

  createSessionId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  track(eventName, properties = {}) {
    if (!this.enabled) return;

    const event = {
      eventName,
      properties,
      userId: this.userId,
      sessionId: this.sessionId,
      timestamp: Date.now(),
      url: window.location.pathname,
      userAgent: navigator.userAgent.substring(0, 100) // Truncate for privacy
    };

    this.queue.push(event);

    // Flush immediately for critical events
    if (eventName.startsWith('error_')) {
      this.flush();
    }
  }

  startBatchProcessor() {
    setInterval(() => {
      if (this.queue.length >= this.config.batchSize) {
        this.flush();
      }
    }, this.config.batchInterval);
  }

  async flush() {
    if (this.queue.length === 0) return;

    const batch = this.queue.splice(0, this.config.batchSize);

    // For MVP: Just log to console (no backend yet)
    console.log('[Analytics] Batch:', batch);

    // Future: Send to backend
    // try {
    //   await fetch(this.config.endpoint, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(batch)
    //   });
    // } catch (error) {
    //   console.error('[Analytics] Failed to send batch:', error);
    //   // Re-queue events
    //   this.queue.unshift(...batch);
    // }
  }

  // Convenience methods for common events
  trackPageView(pageName = window.location.pathname) {
    this.track('page_view', { pageName });
  }

  trackClick(elementName, elementType = 'button') {
    this.track('click', { elementName, elementType });
  }

  trackLessonStart(lessonId) {
    this.track('lesson_start', { lessonId });
  }

  trackLessonComplete(lessonId, score, duration) {
    this.track('lesson_complete', { lessonId, score, duration });
  }

  trackError(errorName, errorMessage, context = {}) {
    this.track('error_occurred', {
      errorName,
      errorMessage: errorMessage.substring(0, 200), // Truncate
      ...context
    });
  }

  trackPerformance(metricName, value, unit = 'ms') {
    this.track('performance', { metricName, value, unit });
  }
}

// Singleton instance
export const analytics = new Analytics();

// Auto-init on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => analytics.init());
} else {
  analytics.init();
}
```

### Phase 2: Error Tracking Hook

**Purpose**: Catch unhandled errors and log them.

**File**: `error-tracker.js`

```javascript
// error-tracker.js

import { analytics } from './analytics.js';

class ErrorTracker {
  constructor() {
    this.setupGlobalHandlers();
  }

  setupGlobalHandlers() {
    // Catch unhandled JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError({
        type: 'javascript_error',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        type: 'unhandled_rejection',
        message: event.reason?.message || String(event.reason),
        stack: event.reason?.stack
      });
    });
  }

  handleError(error) {
    // Log to console (always)
    console.error('[Error Tracker]', error);

    // Send to analytics (if enabled)
    analytics.trackError(
      error.type,
      error.message,
      {
        filename: error.filename,
        lineno: error.lineno,
        colno: error.colno,
        stack: this.sanitizeStack(error.stack)
      }
    );

    // Show user-friendly error message
    this.showErrorToUser(error);
  }

  sanitizeStack(stack) {
    if (!stack) return null;

    // Remove full file paths (privacy)
    // Only keep last 5 frames (brevity)
    const frames = stack.split('\n').slice(0, 5);
    return frames.map(frame => {
      // Remove absolute paths: /Users/foo/... → ...
      return frame.replace(/\/.+\/(.*?)/, '$1');
    }).join('\n');
  }

  showErrorToUser(error) {
    // Use toast notification system
    if (window.showToast) {
      window.showToast({
        type: 'error',
        message: 'Something went wrong. We\'ve been notified.',
        duration: 5000
      });
    }
  }

  // Manual error logging
  logError(error, context = {}) {
    this.handleError({
      type: 'caught_error',
      message: error.message,
      stack: error.stack,
      ...context
    });
  }
}

export const errorTracker = new ErrorTracker();
```

### Phase 3: Feature Usage Tracking

**Events to Track**:

1. **Page Views**
   - `page_view`: User visits a page
   - Properties: `pageName`

2. **Lesson Interactions**
   - `lesson_start`: User starts a lesson
   - `lesson_complete`: User completes a lesson
   - `lesson_abandon`: User leaves lesson without completing
   - Properties: `lessonId`, `score`, `duration`, `attempts`

3. **Playground Usage**
   - `playground_pattern_create`: User creates pattern
   - `playground_pattern_save`: User saves pattern
   - `playground_pattern_export`: User exports pattern
   - `playground_sample_change`: User changes sample
   - Properties: `instrumentType`, `patternComplexity`

4. **Audio Interactions**
   - `audio_play`: User starts playback
   - `audio_stop`: User stops playback
   - `audio_export_wav`: User exports as WAV
   - `audio_export_midi`: User exports as MIDI

5. **Settings**
   - `theme_change`: User changes theme
   - `sample_select`: User selects different sample

6. **Errors**
   - `error_occurred`: JavaScript error or API failure
   - `audio_error`: Audio context or playback error
   - `network_error`: Fetch or CORS error

### Integration Examples

**Lesson Engine Integration**:
```javascript
// lesson-engine.js

import { analytics } from './analytics.js';

function startLesson(lessonId) {
  analytics.trackLessonStart(lessonId);
  lessonStartTime = Date.now();
  // ... existing code
}

function completeLesson(lessonId, score) {
  const duration = Date.now() - lessonStartTime;
  analytics.trackLessonComplete(lessonId, score, duration);
  // ... existing code
}
```

**Sequencer Integration**:
```javascript
// sequencer.js

import { analytics } from './analytics.js';

function exportAsWAV() {
  analytics.track('audio_export_wav', {
    tempo: currentTempo,
    stepCount: currentPattern.length,
    trackCount: currentTracks.length
  });
  // ... existing code
}
```

### Phase 4: Privacy Controls UI

**Consent Banner** (on first visit):

```html
<div class="analytics-consent-banner" id="analyticsConsent">
  <div class="consent-content">
    <h3>Help us improve Music Producer Lab</h3>
    <p>
      We'd like to collect anonymous usage data to improve the platform.
      We don't collect any personal information.
      <a href="/privacy.html">Learn more</a>
    </p>
    <div class="consent-actions">
      <button class="btn-secondary" id="consentDecline">No thanks</button>
      <button class="btn-primary" id="consentAccept">Accept</button>
    </div>
  </div>
</div>
```

**Settings Page** (toggle analytics):

```html
<div class="settings-section">
  <h3>Privacy</h3>

  <label class="settings-toggle">
    <input type="checkbox" id="analyticsToggle">
    <span>Share anonymous usage data</span>
  </label>

  <p class="settings-help">
    Helps us understand how you use Music Producer Lab.
    No personal information is collected.
  </p>

  <button class="btn-secondary" id="viewAnalyticsData">
    View collected data
  </button>

  <button class="btn-secondary" id="deleteAnalyticsData">
    Delete my data
  </button>
</div>
```

**"View Collected Data" Modal**:

Shows user exactly what data has been queued (before sending to server).

```javascript
function showAnalyticsData() {
  const data = analytics.queue;
  const modal = document.getElementById('analyticsDataModal');

  // Show JSON in modal
  modal.querySelector('.data-display').textContent =
    JSON.stringify(data, null, 2);

  modal.classList.add('open');
}
```

### MVP Scope (This PR)

**Include**:
- ✅ Analytics abstraction layer (`analytics.js`)
- ✅ Error tracking hook (`error-tracker.js`)
- ✅ Consent banner UI
- ✅ Privacy settings toggle
- ✅ "View collected data" feature
- ✅ Console logging (no backend yet)
- ✅ Integration in 2-3 key places (lesson-engine, sequencer)

**Exclude** (Future):
- ⏳ Backend endpoint for receiving analytics
- ⏳ Analytics dashboard for viewing data
- ⏳ Data retention policies and deletion
- ⏳ Advanced analysis (funnels, cohorts, etc.)

## Acceptance Criteria

### Must Have (MVP)
- ✅ Analytics system with opt-in consent
- ✅ Consent banner on first visit
- ✅ Privacy settings toggle (enable/disable analytics)
- ✅ "View collected data" feature
- ✅ Error tracking for unhandled errors
- ✅ Events tracked: page views, lesson interactions, audio exports
- ✅ No PII collected (no names, emails, IPs stored)
- ✅ Anonymous user ID (UUID)
- ✅ Batching system (reduce network requests)
- ✅ Works on Chrome, Firefox, Safari, iOS Safari
- ✅ Console logging works (backend integration future)

### Should Have
- ✅ "Delete my data" button (clears localStorage analytics ID)
- ✅ Link to privacy policy
- ✅ Error messages shown to user via toast

### Nice to Have (Future)
- ⏳ Backend API for receiving events
- ⏳ Dashboard for viewing analytics
- ⏳ Email alerts for critical errors
- ⏳ Performance monitoring (Core Web Vitals)
- ⏳ A/B testing framework

## Test Plan

### Test 1: Consent Banner (First Visit)
**Browsers**: Chrome, Firefox, Safari

1. Clear all site data (cookies, localStorage)
2. Visit homepage
3. **Expected**: Consent banner appears at bottom
4. Click "No thanks"
5. **Expected**:
   - Banner closes
   - localStorage has `mpl-analytics-consent: false`
   - Console logs: "[Analytics] User has not consented"
6. Refresh page
7. **Expected**: Banner does not appear again

### Test 2: Consent Acceptance
**Browsers**: Chrome, Firefox, Safari

1. Clear all site data
2. Visit homepage
3. Click "Accept" on consent banner
4. **Expected**:
   - Banner closes
   - localStorage has `mpl-analytics-consent: true`
   - localStorage has `mpl-analytics-user-id: <UUID>`
   - Console logs: "[Analytics] Initialized"
5. Refresh page
6. **Expected**:
   - Banner does not appear
   - Same user ID used (persistent)

### Test 3: Event Tracking
**Browsers**: Chrome

1. Accept analytics consent
2. Open console (filter logs to "[Analytics]")
3. Navigate to /drum-playground.html
4. **Expected**: Console log: `page_view` event with `pageName: /drum-playground.html`
5. Create a drum pattern
6. Click "Play"
7. **Expected**: Console log: `audio_play` event
8. Click "Export WAV"
9. **Expected**: Console log: `audio_export_wav` event with tempo, tracks
10. After 30 seconds, check console
11. **Expected**: Batch of events logged

### Test 4: Error Tracking
**Browsers**: Chrome

1. Accept analytics consent
2. Open console
3. Trigger JavaScript error (e.g., call undefined function):
   ```javascript
   nonExistentFunction();
   ```
4. **Expected**:
   - Error logged to console
   - Toast notification: "Something went wrong"
   - Analytics event: `error_occurred` with error details
   - Stack trace sanitized (no full paths)

### Test 5: Privacy Settings Toggle
**Browsers**: Chrome

1. Accept analytics consent
2. Navigate to settings page (or add settings section to playground)
3. Find "Share anonymous usage data" toggle
4. Toggle OFF
5. **Expected**:
   - localStorage `mpl-analytics-consent: false`
   - Console log: Analytics disabled
6. Navigate to drum playground
7. **Expected**: No `page_view` event logged
8. Toggle ON again
9. **Expected**: Analytics re-enabled

### Test 6: View Collected Data
**Browsers**: Chrome

1. Accept analytics consent
2. Trigger 5 events (page views, clicks, etc.)
3. Click "View collected data" button (in settings)
4. **Expected**:
   - Modal opens
   - JSON displayed showing queued events
   - Each event shows: eventName, timestamp, userId (UUID), properties
   - No PII visible

### Test 7: Delete My Data
**Browsers**: Chrome

1. Accept analytics consent
2. Generate some events
3. Click "Delete my data" button
4. **Expected**:
   - Confirmation prompt: "Are you sure?"
5. Confirm deletion
6. **Expected**:
   - localStorage `mpl-analytics-user-id` deleted
   - localStorage `mpl-analytics-consent` set to false
   - Event queue cleared
   - Toast: "Your analytics data has been deleted"
7. Refresh page
8. **Expected**: Consent banner appears again (fresh start)

### Test 8: Batching Behavior
**Browsers**: Chrome

1. Accept analytics consent
2. Open console
3. Trigger 9 events (just below batch size of 10)
4. **Expected**: No batch sent yet
5. Trigger 1 more event (total 10)
6. **Expected**: Batch of 10 events logged to console
7. Wait 30 seconds with no events
8. Trigger 1 event
9. Wait 30 more seconds
10. **Expected**: Batch sent after 30-second interval

### Test 9: Error Event Priority
**Browsers**: Chrome

1. Accept analytics consent
2. Trigger 1 non-error event
3. Trigger JavaScript error
4. **Expected**:
   - Error event sent immediately (not batched)
   - Console shows batch with 2 events (non-error + error)

### Test 10: Cross-Page Session Tracking
**Browsers**: Chrome

1. Accept analytics consent
2. Note session ID from console
3. Navigate to different page (e.g., /labs.html)
4. Check console for new events
5. **Expected**: Same session ID used across pages
6. Close tab, wait 5 minutes, reopen site
7. **Expected**: New session ID generated

### Browser Test Matrix

| Test Case | Chrome | Firefox | Safari | iOS Safari |
|-----------|--------|---------|--------|-----------|
| Test 1: Consent Banner | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 2: Consent Accept | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 3: Event Tracking | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 4: Error Tracking | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 5: Settings Toggle | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 6: View Data | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 7: Delete Data | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 8: Batching | ⬜ Pass | ⬜ Pass | ⬜ Skip | ⬜ Skip |
| Test 9: Error Priority | ⬜ Pass | ⬜ Pass | ⬜ Skip | ⬜ Skip |
| Test 10: Session Tracking | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |

## Technical Considerations

### Performance
- **Batching**: Reduces network requests (10 events = 1 request)
- **Async**: All tracking is non-blocking
- **Memory**: Queue limited to batch size (10 events ≈ 5 KB)

### Security
- **No XSS**: Event data is not rendered as HTML
- **No injection**: Data is JSON-serialized safely
- **CORS**: Future backend must have CORS headers

### Privacy
- **GDPR compliance**: Opt-in consent, right to deletion
- **CCPA compliance**: Opt-out available, data portable
- **No PII**: No names, emails, IPs stored
- **Anonymous**: User ID is random UUID, not tied to identity

### Accessibility
- **Consent banner**: Keyboard accessible
- **Settings**: Screen reader compatible
- **No impact on core functionality**: Analytics optional

### Browser Compatibility
- **localStorage**: Supported everywhere
- **Fetch API**: Supported in all target browsers
- **addEventListener**: Universal support

## Files to Create/Modify

### New Files
1. `/analytics.js` - Analytics abstraction layer
2. `/error-tracker.js` - Global error handling
3. `/analytics-ui.js` - Consent banner, settings UI
4. `/privacy.html` (optional) - Privacy policy page

### Modified Files
1. `/lesson-engine.js` - Add analytics events for lessons
2. `/sequencer.js` - Add analytics events for audio exports
3. `/index.html` - Add consent banner HTML
4. `/styles.css` - Add consent banner and settings styles
5. All HTML pages - Import analytics.js

### Documentation
1. `/docs/ANALYTICS_PRIVACY.md` (optional) - Privacy documentation
2. Update `/docs/PROJECT_STATUS_REPORT_*.md`

## Migration Strategy

**No migration needed** (new feature).

### Phased Rollout
1. **Week 1**: Deploy with consent banner, track page views only
2. **Week 2**: Add lesson interaction tracking
3. **Week 3**: Add playground and audio export tracking
4. **Week 4**: Add error tracking
5. **Future**: Backend integration, dashboard

## Success Metrics

### Technical Metrics
- **Consent rate**: >60% of users accept analytics
- **Event capture rate**: >95% of events successfully queued
- **Error rate**: <1% of sessions have JavaScript errors

### Product Metrics
- **Feature discovery**: Which features are used most?
- **Lesson completion**: Which lessons have high/low completion?
- **User journey**: What paths do users take through the site?
- **Error visibility**: How often do errors occur? Which errors?

## Open Questions

1. **Should analytics be opt-in or opt-out?**
   - Pro (opt-in): Better privacy, GDPR-friendly
   - Con (opt-in): Lower adoption, less data
   - **Decision**: Opt-in with clear value proposition

2. **Should we track returning users differently?**
   - Pro: Can measure retention, feature adoption over time
   - Con: Adds complexity
   - **Decision**: Yes, use persistent user ID (UUID)

3. **Should we integrate third-party analytics (Google Analytics)?**
   - Pro: Free, powerful, proven
   - Con: Privacy concerns, GDPR issues, tracking blockers
   - **Decision**: Not in MVP; build our own lightweight system first

4. **What retention period for analytics data?**
   - Options: 30 days, 90 days, 1 year
   - **Decision**: 90 days (reasonable for trends, not excessive)

## Risks & Mitigations

### Risk 1: Low consent rate
**Mitigation**: Clear value proposition ("Help us improve"), transparent about privacy

### Risk 2: Analytics adds bloat/performance cost
**Mitigation**: Lightweight system (<5 KB), async, batched

### Risk 3: Privacy backlash
**Mitigation**: Full transparency, easy opt-out, no PII, privacy policy

### Risk 4: Tracking blockers
**Mitigation**: Accept that some users block; don't circumvent blockers

## Appendix

### Privacy Laws Compliance

**GDPR (EU)**:
- ✅ Explicit consent required
- ✅ Right to access data (view collected data)
- ✅ Right to deletion (delete my data)
- ✅ Data portability (JSON export)
- ✅ Privacy by design (no PII)

**CCPA (California)**:
- ✅ Right to know what data is collected
- ✅ Right to opt-out
- ✅ Right to deletion
- ✅ No sale of data (we don't sell data)

### Example Events

**Lesson Start**:
```json
{
  "eventName": "lesson_start",
  "properties": {
    "lessonId": "lesson-drums-3"
  },
  "userId": "a1b2c3d4-e5f6-4789-0123-456789abcdef",
  "sessionId": "1705843200000-x7y8z9",
  "timestamp": 1705843200000,
  "url": "/lesson-drums-3.html",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)..."
}
```

**Error Event**:
```json
{
  "eventName": "error_occurred",
  "properties": {
    "errorName": "javascript_error",
    "errorMessage": "Cannot read property 'play' of null",
    "filename": "sequencer.js",
    "lineno": 245,
    "stack": "at playStep (sequencer.js:245)\nat startPlayback..."
  },
  "userId": "...",
  "sessionId": "...",
  "timestamp": 1705843300000,
  "url": "/drum-playground.html"
}
```

### Resources
- [GDPR Compliance Guide](https://gdpr.eu/)
- [CCPA Compliance Guide](https://oag.ca.gov/privacy/ccpa)
- [Privacy by Design](https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf)

---

**Next Steps After Spec Approval**:
1. Create feature branch: `claude/analytics-{sessionId}`
2. Implement analytics.js
3. Implement error-tracker.js
4. Implement analytics-ui.js (consent banner)
5. Add consent banner to HTML template
6. Integrate into lesson-engine.js and sequencer.js
7. Add privacy settings UI
8. Test consent flow
9. Test event tracking
10. Create PR with this spec linked
