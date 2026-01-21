# Test Matrix

**Version**: 1.0
**Last Updated**: 2026-01-21

## Overview

This document defines the browser testing requirements for Music Producer Lab. Every PR must complete the test matrix for the features it modifies or adds.

## Target Browsers

### Desktop Browsers

| Browser | Version | Priority | Notes |
|---------|---------|----------|-------|
| **Chrome** | Latest stable | High | Primary development browser |
| **Firefox** | Latest stable | High | Second most popular |
| **Safari** | Latest stable | High | macOS users, webkit engine |
| **Edge** | Latest stable | Medium | Chromium-based, usually works if Chrome works |

### Mobile Browsers

| Browser | Version | Priority | Notes |
|---------|---------|----------|-------|
| **iOS Safari** | Latest iOS | **Critical** | Only browser on iOS, audio constraints |
| **Chrome Mobile** | Latest Android | Medium | Test if mobile-specific features |
| **Samsung Internet** | Latest | Low | Only test if resources available |

### Browser Support Policy

**Supported**:
- Latest 2 versions of Chrome, Firefox, Safari
- Latest 1 version of Edge
- iOS Safari (latest iOS version)

**Not Supported**:
- Internet Explorer (any version)
- Browsers >2 versions old
- Beta/canary/dev channels (nice to have, not required)

## Test Environments

### Desktop Testing

**Recommended OS**:
- macOS: Safari testing required
- Windows: Edge testing optional
- Linux: Chrome/Firefox testing fine

**Screen Resolutions to Test**:
- 1920x1080 (standard desktop)
- 1366x768 (common laptop)
- 2560x1440 (high-res display)

### Mobile Testing

**Real Devices (Preferred)**:
- iPhone (any model from last 3 years)
- Android phone (Pixel or Samsung)

**Emulation (Acceptable)**:
- Chrome DevTools device emulation
- Xcode iOS Simulator
- Android Studio emulator

**Screen Sizes to Test**:
- 375x667 (iPhone SE, small phone)
- 390x844 (iPhone 13/14, standard)
- 428x926 (iPhone 13/14 Pro Max, large)
- 360x640 (Android, small)
- 412x915 (Pixel 5, standard)

## Test Matrix Template

### How to Use

For each PR, copy the relevant section(s) below and fill in the test results.

**Legend**:
- ✅ **Pass**: Feature works as expected, no issues
- ⚠️ **Partial**: Works with minor issues (document the issues)
- ❌ **Fail**: Feature broken or unusable (blocker)
- ⬜ **Not Tested**: Not tested yet
- 🔄 **In Progress**: Currently testing
- N/A: Not applicable for this browser/feature

### Core Features Test Matrix

**Test these for every PR that touches core functionality.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Notes |
|---------|--------|---------|--------|-----------|-------|
| Page loads without errors | ⬜ | ⬜ | ⬜ | ⬜ | Check console for errors |
| Navigation works | ⬜ | ⬜ | ⬜ | ⬜ | All links, menus |
| Responsive layout | ⬜ | ⬜ | ⬜ | ⬜ | Test at 375px, 768px, 1920px |
| Theme toggle works | ⬜ | ⬜ | ⬜ | ⬜ | Dark/light switch |
| localStorage persistence | ⬜ | ⬜ | ⬜ | ⬜ | Settings survive reload |

### Audio Features Test Matrix

**Test these for PRs touching audio engine or playback.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Notes |
|---------|--------|---------|--------|-----------|-------|
| Audio context initializes | ⬜ | ⬜ | ⬜ | ⬜ | No errors in console |
| iOS audio unlock works | N/A | N/A | N/A | ⬜ | Tap to enable audio |
| Sample loading succeeds | ⬜ | ⬜ | ⬜ | ⬜ | All instruments load |
| Playback starts/stops | ⬜ | ⬜ | ⬜ | ⬜ | Play button works |
| Tempo changes work | ⬜ | ⬜ | ⬜ | ⬜ | 60-180 BPM range |
| Mixer controls work | ⬜ | ⬜ | ⬜ | ⬜ | Volume, pan, mute, solo |
| Export WAV works | ⬜ | ⬜ | ⬜ | ⬜ | File downloads correctly |
| Export MIDI works | ⬜ | ⬜ | ⬜ | ⬜ | File downloads correctly |
| No audio glitches | ⬜ | ⬜ | ⬜ | ⬜ | Play for 2+ minutes |

### Sequencer Features Test Matrix

**Test these for PRs touching sequencer UI or functionality.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Notes |
|---------|--------|---------|--------|-----------|-------|
| Steps can be toggled | ⬜ | ⬜ | ⬜ | ⬜ | Click to enable/disable |
| Velocity control works | ⬜ | ⬜ | ⬜ | ⬜ | Drag to change velocity |
| Pattern save works | ⬜ | ⬜ | ⬜ | ⬜ | Save and reload pattern |
| Pattern load works | ⬜ | ⬜ | ⬜ | ⬜ | List shows saved patterns |
| Presets work | ⬜ | ⬜ | ⬜ | ⬜ | Load preset patterns |
| Sample picker works | ⬜ | ⬜ | ⬜ | ⬜ | Change instrument samples |
| Swing control works | ⬜ | ⬜ | ⬜ | ⬜ | 0-75% range |
| Humanization works | ⬜ | ⬜ | ⬜ | ⬜ | Timing/velocity variation |
| Sequencer scrolls on mobile | N/A | N/A | N/A | ⬜ | Horizontal scroll if needed |

### Lesson System Test Matrix

**Test these for PRs touching lesson engine or content.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Notes |
|---------|--------|---------|--------|-----------|-------|
| Lesson loads correctly | ⬜ | ⬜ | ⬜ | ⬜ | Config loads, UI renders |
| Instructions display | ⬜ | ⬜ | ⬜ | ⬜ | Text readable, formatted |
| Pattern validation works | ⬜ | ⬜ | ⬜ | ⬜ | Correct/incorrect patterns |
| Feedback shows | ⬜ | ⬜ | ⬜ | ⬜ | Success/error messages |
| Progress saved | ⬜ | ⬜ | ⬜ | ⬜ | Completion tracked |
| Score calculated | ⬜ | ⬜ | ⬜ | ⬜ | 0-100 score shown |
| Next lesson button works | ⬜ | ⬜ | ⬜ | ⬜ | Navigate to next lesson |

### Storage Features Test Matrix

**Test these for PRs touching data persistence.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Notes |
|---------|--------|---------|--------|-----------|-------|
| localStorage works | ⬜ | ⬜ | ⬜ | ⬜ | Save/load data |
| IndexedDB works | ⬜ | ⬜ | ⬜ | ⬜ | Large data storage |
| Export JSON works | ⬜ | ⬜ | ⬜ | ⬜ | File downloads |
| Import JSON works | ⬜ | ⬜ | ⬜ | ⬜ | File picker, parse, import |
| Migration works | ⬜ | ⬜ | ⬜ | ⬜ | localStorage → IndexedDB |
| Private mode works | ⬜ | ⬜ | ⬜ | ⬜ | Incognito/private browsing |

### UI/UX Features Test Matrix

**Test these for PRs touching user interface.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Notes |
|---------|--------|---------|--------|-----------|-------|
| Buttons respond to click | ⬜ | ⬜ | ⬜ | ⬜ | No lag, clear feedback |
| Forms work correctly | ⬜ | ⬜ | ⬜ | ⬜ | Input, validation, submit |
| Modals open/close | ⬜ | ⬜ | ⬜ | ⬜ | Overlay, close button |
| Toasts appear | ⬜ | ⬜ | ⬜ | ⬜ | Success/error notifications |
| Loading states show | ⬜ | ⬜ | ⬜ | ⬜ | Spinners, progress bars |
| Animations smooth | ⬜ | ⬜ | ⬜ | ⬜ | No jank, 60fps |
| Touch targets (mobile) | N/A | N/A | N/A | ⬜ | Min 44x44px |

### Accessibility Test Matrix

**Test these for PRs touching accessibility.**

| Feature | Chrome | Firefox | Safari | iOS Safari | Screen Reader |
|---------|--------|---------|--------|-----------|---------------|
| Keyboard navigation works | ⬜ | ⬜ | ⬜ | N/A | Tab through elements |
| Focus indicators visible | ⬜ | ⬜ | ⬜ | N/A | Clear focus outline |
| Screen reader announces | ⬜ | ⬜ | ⬜ | ⬜ | Test with NVDA/VoiceOver |
| ARIA labels correct | ⬜ | ⬜ | ⬜ | ⬜ | Buttons, inputs labeled |
| Color contrast passes | ⬜ | ⬜ | ⬜ | ⬜ | WCAG AA (4.5:1) |
| Skip links work | ⬜ | ⬜ | ⬜ | N/A | Skip to main content |

### Performance Test Matrix

**Test these for PRs that may impact performance.**

| Metric | Chrome | Firefox | Safari | iOS Safari | Target |
|--------|--------|---------|--------|-----------|--------|
| Page load time | ⬜ | ⬜ | ⬜ | ⬜ | <2s |
| Time to interactive | ⬜ | ⬜ | ⬜ | ⬜ | <3s |
| Audio latency | ⬜ | ⬜ | ⬜ | ⬜ | <100ms |
| Sample load time | ⬜ | ⬜ | ⬜ | ⬜ | <500ms |
| Pattern save time | ⬜ | ⬜ | ⬜ | ⬜ | <200ms |
| Export WAV time | ⬜ | ⬜ | ⬜ | ⬜ | <5s |
| Memory usage | ⬜ | ⬜ | ⬜ | ⬜ | <200MB |
| CPU usage (idle) | ⬜ | ⬜ | ⬜ | ⬜ | <5% |
| CPU usage (playing) | ⬜ | ⬜ | ⬜ | ⬜ | <30% |

## Testing Procedures

### Manual Testing Checklist

1. **Clear browser cache and localStorage**
   - Ensures fresh state for testing

2. **Test on target browsers**
   - Desktop: Chrome, Firefox, Safari
   - Mobile: iOS Safari (critical)

3. **Test at different screen sizes**
   - Desktop: 1920px, 1366px
   - Mobile: 375px, 390px, 428px

4. **Test core user flows**
   - Create pattern → Play → Save → Export
   - Start lesson → Complete → Check progress

5. **Test error cases**
   - Disconnect network mid-operation
   - Invalid input data
   - Browser storage full

6. **Check console for errors**
   - No JavaScript errors
   - No 404s for assets
   - No CORS errors

7. **Verify accessibility**
   - Tab through all interactive elements
   - Test with screen reader
   - Check color contrast

8. **Test performance**
   - Profile with DevTools
   - Check memory leaks
   - Verify smooth animations

### Automated Testing (Future)

**Not required for MVP**, but plan to add:
- Unit tests (Jest/Vitest)
- Integration tests (Playwright/Cypress)
- Visual regression tests (Percy/Chromatic)
- Performance tests (Lighthouse CI)

## Bug Reporting

### When Tests Fail

If any test fails, create a bug report with:

**Title**: [Browser] Feature fails when...

**Description**:
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happened
- **Steps to reproduce**: Numbered list
- **Browser**: Version and OS
- **Screenshots/video**: If visual bug
- **Console errors**: Copy/paste errors

**Example**:
```
Title: [Safari] Audio doesn't play on first click

Expected: Audio starts playing when clicking play button
Actual: No sound, but button shows playing state

Steps to reproduce:
1. Load drum-playground.html in Safari
2. Click play button
3. Observe: Button animates but no audio

Browser: Safari 17.1 on macOS Sonoma 14.1
Console: "AudioContext state: suspended"
```

### Severity Levels

**Critical (P0)**: Blocks core functionality, immediate fix required
- Audio doesn't work on iOS
- Page crashes on load
- Data loss

**High (P1)**: Major feature broken, fix before release
- Export doesn't work
- Lessons can't be completed
- Navigation broken

**Medium (P2)**: Feature partially broken, fix soon
- Minor visual glitches
- Non-critical feature broken
- Performance degradation

**Low (P3)**: Minor issue, fix when time allows
- Cosmetic issues
- Edge case bugs
- Nice-to-have features

## Test Coverage Requirements

### Minimum Test Coverage for Merge

- ✅ Chrome desktop: 100% of test matrix
- ✅ Firefox desktop: 100% of test matrix
- ✅ Safari desktop: 100% of test matrix
- ✅ iOS Safari: 100% of core + audio features
- ⚠️ Chrome mobile: Optional (test if mobile-specific)
- ⚠️ Edge: Optional (test if resources available)

### Regression Testing

For each PR, also verify:
- ✅ No regressions in existing features
- ✅ Test at least 3 existing features that might be affected
- ✅ Run full smoke test before release

### Smoke Test Checklist

**Run before every production deployment:**

1. ✅ Homepage loads
2. ✅ Navigation works
3. ✅ Drum playground loads and plays
4. ✅ Pattern save/load works
5. ✅ Sample picker works
6. ✅ Export WAV works
7. ✅ Lesson loads and completes
8. ✅ Progress saves
9. ✅ Theme toggle works
10. ✅ iOS Safari audio works

**Time estimate**: 10-15 minutes

## Resources

### Testing Tools

**Browser DevTools**:
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector

**Screen Readers**:
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (macOS/iOS, built-in)

**Accessibility**:
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

**Performance**:
- Chrome DevTools Performance tab
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

**Cross-Browser**:
- [BrowserStack](https://www.browserstack.com/) (paid)
- [LambdaTest](https://www.lambdatest.com/) (paid)
- [Sauce Labs](https://saucelabs.com/) (paid)

### Testing Guides

- [MDN Testing Guide](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [Web.dev Testing Guide](https://web.dev/lighthouse-performance/)
- [WCAG Testing Techniques](https://www.w3.org/WAI/test-evaluate/)

---

**Last Updated**: 2026-01-21
**Next Review**: Every 6 months or when browser support changes
