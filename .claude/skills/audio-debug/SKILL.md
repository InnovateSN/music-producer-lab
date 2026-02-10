---
name: audio-debug
description: Debug Web Audio issues including latency, cross-browser compat, and AudioContext problems
allowed-tools: Read, Grep, Glob, Bash(npm:*)
---

# Audio Debug Skill

When debugging audio issues in Music Producer Lab — sounds not playing, timing problems,
sequencer glitches, Web Audio API errors, or browser compatibility issues.

## Key Audio Files

| File | Purpose |
|---|---|
| `/public/sequencer.js` | Main drum step sequencer (Web Audio API, step scheduling, sound synthesis) |
| `/public/piano-roll-sequencer.js` | Piano roll sequencer for harmony/melody lessons |
| `/public/harmony-playground-engine.js` | Harmony playground audio engine |
| `/public/lesson-engine.js` | Initializes sequencer from lesson config |
| `/public/toast-notifications.js` | User feedback toasts (success/error on exercise check) |

## Debugging Workflow

### 1. Identify the Problem Category

- **No sound at all** → AudioContext issue (see Issue 1)
- **Wrong sounds / missing instruments** → Config mismatch (see Issue 4)
- **Timing drift / stuttering** → Scheduling issue (see Issue 2)
- **Clicks / pops** → Gain ramping issue (see Issue 3)
- **Works in Chrome, not Safari** → Browser compat (see Issue 5)

### 2. Check the Basics First

```
Open browser DevTools → Console tab
Look for: "[LessonEngine]" or sequencer log prefixes
In dev mode (localhost), detailed logs are enabled via isDev flag
Verify: window.LESSON_CONFIG exists and has correct data
```

## Common Issues and Solutions

### Issue 1: Audio Not Playing (Most Common)

**Cause:** Browser autoplay policy requires user gesture before AudioContext creation/resumption.

**Where to look:** `sequencer.js` — `getAudioContext()` function

**Checklist:**
- [ ] Is AudioContext created inside a user gesture handler (click/touch)?
- [ ] Is `audioContext.state === 'suspended'` checked before playing?
- [ ] Is `audioContext.resume()` called on user interaction?
- [ ] On mobile: is there an explicit "tap to start" interaction?

**Fix pattern:**
```javascript
// AudioContext must be created/resumed in response to user gesture
button.addEventListener('click', () => {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  // Now play audio...
});
```

### Issue 2: Timing Drift / Sequencer Out of Sync

**Cause:** Using `setTimeout`/`setInterval` for scheduling instead of Web Audio API clock.

**Where to look:** `sequencer.js` — scheduling loop / timer function

**Checklist:**
- [ ] Is `audioContext.currentTime` used for note scheduling?
- [ ] Are notes scheduled slightly ahead (lookahead pattern)?
- [ ] Is the scheduling interval tight enough (25ms or less)?
- [ ] Is swing implemented by offsetting odd-numbered steps, not by changing the timer?

**Key concept:** Web Audio schedules notes in the future using `audioContext.currentTime`.
Never rely on JS timers for actual note timing — use them only to trigger the scheduling logic.

### Issue 3: Clicks / Pops in Audio

**Cause:** Abrupt audio start/stop without gain envelope.

**Where to look:** `sequencer.js` — sound synthesis functions

**Checklist:**
- [ ] Does each sound use a GainNode?
- [ ] Is `gain.linearRampToValueAtTime()` used for fade-in?
- [ ] Is `gain.exponentialRampToValueAtTime()` used for fade-out?
- [ ] Are AudioNodes disconnected AFTER the sound finishes (not immediately)?

**Fix pattern:**
```javascript
const gain = audioContext.createGain();
gain.gain.setValueAtTime(0.001, startTime);
gain.gain.linearRampToValueAtTime(volume, startTime + 0.005); // 5ms fade-in
gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // fade-out
```

### Issue 4: Config Mismatch (Wrong or Missing Sounds)

**Cause:** Instrument `id` in lesson config doesn't match available sound IDs.

**Available sound IDs:** `kick`, `snare`, `hihat`, `clap`, `tom`, `rim`

**Checklist:**
- [ ] Does each `instruments[].id` in the config use a valid sound ID?
- [ ] Does `validation.requiredInstruments[].id` match `instruments[].id`?
- [ ] Do `targetSteps` arrays use 0-indexed values (0-15 for 16 steps)?
- [ ] Does `sequencer.stepCount` match the actual grid size?

**Where to check:**
```
/public/configs/lesson-{category}-{number}.config.js
```

### Issue 5: Safari / Cross-Browser Issues

**Where to look:** `sequencer.js` — AudioContext initialization

**Checklist:**
- [ ] Is `webkitAudioContext` fallback used? (`window.AudioContext || window.webkitAudioContext`)
- [ ] Is `audioContext.resume()` called after user gesture on iOS/Safari?
- [ ] Are Web Audio API features checked before use (feature detection)?
- [ ] Is sample rate explicitly set or left to default?

**Safari-specific gotchas:**
- Safari requires `webkitAudioContext` on older versions
- iOS Safari suspends AudioContext aggressively — must resume on every user interaction
- Safari may have different default sample rates (44100 vs 48000)
- Safari has stricter autoplay policies than Chrome

### Issue 6: Memory Leaks (AudioNodes)

**Cause:** AudioNodes not disconnected/released after use.

**Where to look:** `sequencer.js` — sound playback functions

**Checklist:**
- [ ] Are OscillatorNodes stopped after playback? (`oscillator.stop(time)`)
- [ ] Are AudioNodes disconnected when no longer needed?
- [ ] Is AudioContext closed when leaving the page / switching lessons?
- [ ] Are event listeners cleaned up on page unload?

**Fix pattern:**
```javascript
oscillator.stop(stopTime);
oscillator.onended = () => {
  oscillator.disconnect();
  gainNode.disconnect();
};
```

### Issue 7: Sample Loading Failures

**Where to look:** `sequencer.js` — sample loading / `loadedSamples` object

**Checklist:**
- [ ] Check Network tab for 404s on audio file requests
- [ ] Verify paths to `/public/samples/` directory
- [ ] Check if `ArrayBuffer` → `AudioBuffer` decoding succeeds
- [ ] Verify CORS headers if loading from external URLs

## Debugging Steps Summary

1. Open browser DevTools Console
2. Check for Web Audio API errors or warnings
3. Look for `[LessonEngine]` or sequencer log prefixes
4. Verify `window.LESSON_CONFIG` exists in console
5. Check `audioContext.state` — should be `'running'` after user click
6. In Network tab, verify all JS modules loaded (no 404s)
7. Test in Chrome first (best Web Audio support), then Safari, then Firefox
8. On mobile, verify user gesture triggers AudioContext resume

## Audio Architecture Overview

- Audio is **synthesized at runtime** (oscillators + noise), not pre-recorded samples (by default)
- Each instrument has a synthesis function in `sequencer.js`
- The step sequencer runs a timing loop based on Web Audio clock
- Swing is implemented by delaying odd-numbered steps
- `toast-notifications.js` provides user feedback (success/error messages)
- `isDev` flag in sequencer enables verbose logging on localhost

## Reference Documentation
- `/docs/specs/AUDIO_ENGINE.md` — Full audio engine specification
- `/public/sequencer.js` — Primary source of truth for audio implementation
