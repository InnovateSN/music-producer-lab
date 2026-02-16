# Feature Spec: Audio Engine Improvements

**Version**: 1.0
**Status**: Draft
**Target PR**: #3
**Owner**: Engineering
**Last Updated**: 2026-01-21

## Problem Statement

The current audio engine works well on desktop browsers but has several limitations that affect iOS Safari users and overall audio quality:

### Critical Issues
1. **iOS Safari audio doesn't play without user interaction**: iOS requires audio context to be created and resumed in response to a user gesture (tap/click)
2. **No audio format fallback**: Only loads one format (usually WAV); if it fails, audio breaks entirely
3. **Inconsistent volume levels**: Different samples have different loudness; no normalization
4. **Potential scheduling drift**: Long playback sessions may accumulate timing errors

### User Impact
- iOS users can't hear audio on first page load
- Users on slow connections timeout loading large WAV files
- Some samples are too quiet, others too loud
- Playback may drift out of sync after minutes of looping

## Current State

### Audio Context Initialization

**File**: `sequencer.js` (lines 19-28)

```javascript
let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}
```

**Issues**:
- Creates AudioContext on demand (not in response to user gesture on iOS)
- No state checking (`suspended`, `running`, `closed`)
- No explicit `resume()` call for iOS

### Sample Loading

**File**: `sequencer.js` (lines 30-155)

```javascript
async function loadSample(url) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await getAudioContext().decodeAudioData(arrayBuffer);
    return audioBuffer;
  } catch (error) {
    console.error(`Failed to load sample: ${url}`, error);
    return null;
  }
}
```

**Issues**:
- Only tries one URL (no format fallback)
- No retry logic
- No loading timeout
- Returns `null` on failure (playback breaks silently)

### Sample Library Structure

**File**: `sample-library.json`

```json
{
  "kick": [
    {
      "name": "Punchy Kick",
      "url": "samples/drums/kick-punchy.wav"
    }
  ]
}
```

**Issues**:
- Only one format per sample (WAV)
- No MP3 or OGG alternatives
- Large file sizes (WAV is uncompressed)

### Playback & Scheduling

**File**: `sequencer.js` (startPlayback function)

```javascript
// Simplified scheduling logic
const stepDuration = (60 / currentTempo) / 4;
const scheduledTime = startTime + (step * stepDuration);

source.start(scheduledTime);
```

**Issues**:
- Uses relative timing (could drift)
- No re-sync mechanism
- No compensation for processing delays

### Normalization

**Current**: None
- Samples played at original amplitude
- Mixer volume controls are per-track only
- No loudness matching between samples

## Proposed Solution

### 1. iOS Safari Audio Unlock

**Strategy**: Unlock audio context on first user interaction, anywhere on the page.

**Implementation**: Create `audio-unlock.js`

```javascript
// audio-unlock.js

let audioContext = null;
let isUnlocked = false;

export function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

export function isAudioUnlocked() {
  return isUnlocked;
}

export function unlockAudio() {
  if (isUnlocked) return Promise.resolve();

  const ctx = getAudioContext();

  // If context is already running, we're unlocked
  if (ctx.state === 'running') {
    isUnlocked = true;
    return Promise.resolve();
  }

  // iOS requires resume() in user gesture
  return ctx.resume().then(() => {
    isUnlocked = true;
    console.log('Audio unlocked for iOS Safari');

    // Dispatch event for UI updates
    window.dispatchEvent(new CustomEvent('audioUnlocked'));
  });
}

// Auto-unlock on first user interaction
function setupUnlockListeners() {
  const events = ['touchstart', 'touchend', 'mousedown', 'keydown'];

  const unlock = () => {
    unlockAudio().then(() => {
      // Remove listeners after unlock
      events.forEach(event => {
        document.removeEventListener(event, unlock);
      });
    });
  };

  events.forEach(event => {
    document.addEventListener(event, unlock, { once: true, passive: true });
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupUnlockListeners);
} else {
  setupUnlockListeners();
}
```

**Usage**:
```javascript
import { getAudioContext, unlockAudio, isAudioUnlocked } from './audio-unlock.js';

// Before playing any audio
if (!isAudioUnlocked()) {
  await unlockAudio();
}
const ctx = getAudioContext();
// ... proceed with audio playback
```

**UI Indicator** (optional):
- Show "Tap to enable audio" overlay on iOS Safari
- Hide after unlock
- Graceful fallback: auto-unlock on first play button click

### 2. Multi-Format Sample Loading

**Strategy**: Define multiple formats per sample; try WAV → MP3 → OGG in order.

**Updated Sample Library Structure**:

```json
{
  "kick": [
    {
      "name": "Punchy Kick",
      "formats": {
        "wav": "samples/drums/kick-punchy.wav",
        "mp3": "samples/drums/kick-punchy.mp3",
        "ogg": "samples/drums/kick-punchy.ogg"
      }
    }
  ]
}
```

**Implementation**: Update `sequencer.js`

```javascript
async function loadSampleWithFallback(sampleConfig) {
  const formats = ['wav', 'mp3', 'ogg'];

  for (const format of formats) {
    const url = sampleConfig.formats[format];
    if (!url) continue;

    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(10000) // 10s timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await getAudioContext().decodeAudioData(arrayBuffer);

      console.log(`Loaded ${sampleConfig.name} (${format})`);
      return audioBuffer;

    } catch (error) {
      console.warn(`Failed to load ${format} for ${sampleConfig.name}:`, error);
      // Continue to next format
    }
  }

  // All formats failed - return synthetic fallback
  console.error(`All formats failed for ${sampleConfig.name}, using fallback`);
  return createSyntheticSample(sampleConfig.name);
}

function createSyntheticSample(instrumentName) {
  // Generate simple synthetic sound as last resort
  const ctx = getAudioContext();
  const sampleRate = ctx.sampleRate;
  const duration = 0.5;
  const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
  const data = buffer.getChannelData(0);

  // Simple kick: sine wave sweep with envelope
  for (let i = 0; i < buffer.length; i++) {
    const t = i / sampleRate;
    const frequency = 100 * Math.exp(-t * 10); // Pitch sweep down
    const amplitude = Math.exp(-t * 5); // Exponential decay
    data[i] = Math.sin(2 * Math.PI * frequency * t) * amplitude;
  }

  return buffer;
}
```

**Benefits**:
- Smaller MP3 files load faster on mobile
- WAV for best quality on desktop
- OGG for browser compatibility (Firefox, Chrome prefer)
- Synthetic fallback ensures audio always works

### 3. Improved Scheduling Stability

**Problem**: Current scheduling uses `startTime + (step * stepDuration)` which can drift.

**Solution**: Re-sync to AudioContext.currentTime periodically.

**Implementation**:

```javascript
class AudioScheduler {
  constructor(audioContext) {
    this.ctx = audioContext;
    this.isPlaying = false;
    this.startTime = 0;
    this.currentStep = 0;
    this.lastScheduledStep = -1;
    this.lookahead = 0.1; // Schedule 100ms ahead
    this.scheduleInterval = 25; // Check every 25ms
  }

  start() {
    this.isPlaying = true;
    this.startTime = this.ctx.currentTime;
    this.currentStep = 0;
    this.lastScheduledStep = -1;
    this.scheduleLoop();
  }

  stop() {
    this.isPlaying = false;
  }

  scheduleLoop() {
    if (!this.isPlaying) return;

    const currentTime = this.ctx.currentTime;
    const scheduleAheadTime = currentTime + this.lookahead;

    // Schedule all steps that fall within lookahead window
    while (this.getStepTime(this.lastScheduledStep + 1) < scheduleAheadTime) {
      this.lastScheduledStep++;
      this.scheduleStep(this.lastScheduledStep);
    }

    // Schedule next check
    setTimeout(() => this.scheduleLoop(), this.scheduleInterval);
  }

  getStepTime(step) {
    const stepDuration = this.getStepDuration();
    return this.startTime + (step * stepDuration);
  }

  getStepDuration() {
    const tempo = getCurrentTempo(); // From global state
    return (60 / tempo) / 4; // 16th notes
  }

  scheduleStep(step) {
    const time = this.getStepTime(step);
    const pattern = getCurrentPattern(); // From global state
    const stepIndex = step % pattern.length;

    // Play all instruments for this step
    pattern.forEach((track, trackIndex) => {
      if (track[stepIndex]) {
        this.playSound(trackIndex, time, track[stepIndex].velocity);
      }
    });
  }

  playSound(trackIndex, time, velocity) {
    // Existing playback logic
    // ...
  }
}
```

**Benefits**:
- No drift over long playback sessions
- Precise timing even under CPU load
- Industry-standard lookahead scheduling

### 4. Normalization Strategy (Stub for Future)

**Goal**: Consistent loudness across all samples.

**MVP Implementation**: Add infrastructure, don't process all samples yet.

**Approach A: Peak Normalization**
```javascript
function normalizeSample(audioBuffer, targetPeak = 0.8) {
  const channelData = audioBuffer.getChannelData(0);
  let peak = 0;

  // Find peak amplitude
  for (let i = 0; i < channelData.length; i++) {
    const abs = Math.abs(channelData[i]);
    if (abs > peak) peak = abs;
  }

  // Calculate gain to reach target peak
  const gain = peak > 0 ? targetPeak / peak : 1;

  // Apply gain to all samples
  for (let i = 0; i < channelData.length; i++) {
    channelData[i] *= gain;
  }

  return audioBuffer;
}
```

**Approach B: LUFS Normalization (Future)**
- Measure perceived loudness (not just peak)
- Industry standard for music/broadcast
- More complex; requires additional library
- **Decision**: Not in MVP; document for future

**MVP**: Add `normalizeSample` function but don't apply to library samples yet.
- Apply only to user-uploaded samples (future feature)
- Add flag in sample config: `"normalized": true/false`
- Gradually normalize library samples in batches

### 5. Sample Preloading Strategy

**Problem**: Loading samples on-demand causes delays.

**Solution**: Preload commonly used samples.

```javascript
class SampleManager {
  constructor() {
    this.loadedSamples = new Map();
    this.loadingPromises = new Map();
  }

  async preloadDefaultSamples() {
    const defaultSamples = [
      'kick-punchy',
      'snare-sharp',
      'hihat-closed',
      'clap-analog',
      // ... most used samples
    ];

    const promises = defaultSamples.map(id => this.loadSample(id));
    await Promise.all(promises);

    console.log('Default samples preloaded');
  }

  async loadSample(sampleId) {
    // Return cached sample if already loaded
    if (this.loadedSamples.has(sampleId)) {
      return this.loadedSamples.get(sampleId);
    }

    // Return existing promise if already loading
    if (this.loadingPromises.has(sampleId)) {
      return this.loadingPromises.get(sampleId);
    }

    // Start loading
    const promise = this.fetchSample(sampleId);
    this.loadingPromises.set(sampleId, promise);

    try {
      const buffer = await promise;
      this.loadedSamples.set(sampleId, buffer);
      this.loadingPromises.delete(sampleId);
      return buffer;
    } catch (error) {
      this.loadingPromises.delete(sampleId);
      throw error;
    }
  }

  async fetchSample(sampleId) {
    const config = getSampleConfig(sampleId); // From sample library
    return loadSampleWithFallback(config);
  }
}
```

**Preload Trigger**: On first user interaction (same as audio unlock)

```javascript
document.addEventListener('audioUnlocked', () => {
  sampleManager.preloadDefaultSamples();
});
```

## Acceptance Criteria

### Must Have (MVP)
- ✅ Audio works on iOS Safari without manual unlock prompt
- ✅ Audio context resumes automatically on first user gesture
- ✅ Multi-format sample loading (WAV → MP3 → OGG fallback)
- ✅ Synthetic fallback sound if all formats fail
- ✅ No silent failures (always produce sound or show error)
- ✅ Scheduling stability (no drift over 5+ minutes of playback)
- ✅ Sample manager with preloading for default samples
- ✅ Works on Chrome, Firefox, Safari, iOS Safari
- ✅ No regressions to existing audio features

### Should Have
- ✅ Loading indicators for samples
- ✅ Console logging for audio unlock status
- ✅ Error messages if audio fails to initialize

### Nice to Have (Future)
- ⏳ LUFS-based normalization
- ⏳ Audio worklet for sample processing
- ⏳ Offline audio rendering improvements
- ⏳ Audio visualization (waveforms, spectrum analyzer)

## Test Plan

### Test 1: iOS Safari Audio Unlock
**Device**: iPhone with Safari

1. Load drum playground page
2. **Expected**: No audio plays yet (context suspended)
3. Tap anywhere on page (not necessarily play button)
4. Tap play button
5. **Expected**:
   - Audio context resumes
   - Drum loop plays correctly
   - No "unlock audio" prompt needed
6. Check console for "Audio unlocked for iOS Safari" message
7. **Expected**: Message appears after first tap

### Test 2: Multi-Format Fallback
**Browser**: Chrome with DevTools

1. Open DevTools → Network tab
2. Block all `.wav` requests (Network Conditions → Blocked URLs: `*.wav`)
3. Load drum playground
4. Start playback
5. **Expected**:
   - Console shows "Failed to load wav for Kick"
   - Console shows "Loaded Kick (mp3)"
   - Kick sound plays from MP3
6. Block `.mp3` as well
7. Reload and play
8. **Expected**:
   - Loads OGG format
   - Sound still plays
9. Block all formats (WAV, MP3, OGG)
10. Reload and play
11. **Expected**:
    - Console shows "All formats failed, using fallback"
    - Synthetic kick sound plays

### Test 3: Scheduling Stability (Long Playback)
**Browser**: Chrome

1. Load drum playground
2. Set tempo to 120 BPM
3. Create simple pattern (kick on 1, snare on 5, etc.)
4. Start playback
5. Let run for 10 minutes
6. Tap along with beat using external metronome app
7. **Expected**:
   - No noticeable drift after 10 minutes
   - Timing matches external metronome
8. Check console for timing warnings
9. **Expected**: No warnings about scheduler lag

### Test 4: Preloading Performance
**Browser**: Chrome, slow 3G throttling

1. Open DevTools → Network → Throttling: Slow 3G
2. Load drum playground
3. Wait for page load
4. Click anywhere (trigger audio unlock)
5. Watch Network tab
6. **Expected**:
   - Default samples start loading automatically
   - Loading indicators appear (if implemented)
7. Once loaded, start playback immediately
8. **Expected**:
   - Playback starts with no delay
   - No sample loading during playback

### Test 5: Audio Context State Management
**Browser**: Chrome

1. Load page
2. Open console, run: `window.audioContext.state`
3. **Expected**: `"suspended"` (before interaction)
4. Click anywhere
5. Run: `window.audioContext.state`
6. **Expected**: `"running"`
7. Switch to another tab for 30 seconds
8. Switch back
9. Run: `window.audioContext.state`
10. **Expected**: Still `"running"` (context doesn't suspend)

### Test 6: Synthetic Fallback Quality
**Browser**: Chrome

1. Modify sample-library.json: Remove all formats for kick
2. Reload drum playground
3. Start playback with kick pattern
4. **Expected**:
   - Kick sound plays (synthetic)
   - Sound is recognizable as a kick (low frequency)
   - No errors or silence

### Test 7: Cross-Browser Audio Format Support
**Browsers**: Chrome, Firefox, Safari

**Chrome**:
- Test with only MP3: ✅ Should work
- Test with only OGG: ✅ Should work
- Test with only WAV: ✅ Should work

**Firefox**:
- Test with only MP3: ✅ Should work
- Test with only OGG: ✅ Should work
- Test with only WAV: ✅ Should work

**Safari**:
- Test with only MP3: ✅ Should work
- Test with only WAV: ✅ Should work
- Test with only OGG: ⚠️ May not work (Safari has limited OGG support)

### Test 8: Audio Latency
**Browser**: All browsers

1. Load drum playground
2. Click play button
3. Measure time from click to first sound
4. **Expected**: <100ms latency on desktop, <150ms on mobile
5. Compare before/after this PR
6. **Expected**: No regression in latency

### Browser Test Matrix

| Test Case | Chrome | Firefox | Safari | iOS Safari |
|-----------|--------|---------|--------|-----------|
| Test 1: iOS Audio Unlock | ⬜ N/A | ⬜ N/A | ⬜ N/A | ⬜ Pass |
| Test 2: Format Fallback | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 3: Scheduling (10min) | ⬜ Pass | ⬜ Pass | ⬜ Skip | ⬜ Skip |
| Test 4: Preloading | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 5: Context State | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 6: Synthetic Fallback | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 7: Format Support | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 8: Latency | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |

## Technical Considerations

### Performance
- **Preloading impact**: ~2-5 MB of audio data loaded upfront
- **Mitigation**: Only preload most-used samples; lazy-load others
- **Memory**: AudioBuffers are efficient; 5 samples ≈ 10-20 MB RAM

### Security
- **No execution risk**: Audio data can't execute code
- **CORS**: Sample files must be same-origin or have CORS headers

### Accessibility
- **No impact**: Audio improvements don't affect screen readers
- **Future**: Add visual metronome for deaf users

### Browser Compatibility
- **Web Audio API**: Supported in all target browsers
- **AbortSignal.timeout**: Chrome 103+, Firefox 100+, Safari 16+
  - Fallback: Use manual timeout with `setTimeout` + `AbortController`

### iOS Safari Specific
- **Audio context suspension**: iOS suspends contexts aggressively
  - Mitigation: Keep playback active or resume on visibility change
- **Memory limits**: iOS has stricter memory limits
  - Mitigation: Don't preload all samples; prioritize most-used
- **Silent mode**: Hardware switch mutes all audio
  - Limitation: Can't detect or override in web

## Files to Create/Modify

### New Files
1. `/audio-unlock.js` - iOS Safari audio context management
2. `/sample-manager.js` - Sample loading, caching, preloading
3. `/audio-scheduler.js` - Lookahead scheduling system (optional: could be in sequencer.js)

### Modified Files
1. `/sequencer.js` - Integrate new audio system, update sample loading
2. `/sample-library.json` - Add multiple formats per sample
3. `/drum-playground.html` - Import new audio modules
4. `/harmony-playground.html` - Import audio-unlock for synthesis
5. All lesson HTML files - Import audio-unlock

### Sample Files to Add
For top 10 most-used samples, add MP3 and OGG versions:
- `samples/drums/kick-punchy.mp3`
- `samples/drums/kick-punchy.ogg`
- `samples/drums/snare-sharp.mp3`
- `samples/drums/snare-sharp.ogg`
- ... (8 more)

Use ffmpeg to convert:
```bash
ffmpeg -i kick-punchy.wav -q:a 2 kick-punchy.mp3
ffmpeg -i kick-punchy.wav -q:a 6 kick-punchy.ogg
```

## Migration Strategy

### Phase 1: Add New System (No Breaking Changes)
- Create `audio-unlock.js`, `sample-manager.js`
- Old system still works
- New system available but optional

### Phase 2: Integrate New System
- Update `sequencer.js` to use new audio unlock
- Update sample loading to use `sample-manager.js`
- Test thoroughly

### Phase 3: Add Multi-Format Samples
- Convert top 10 samples to MP3/OGG
- Update `sample-library.json` with new structure
- Old structure still supported (fallback to WAV-only)

### Phase 4: Clean Up
- Remove old audio context init code
- Remove old sample loading code
- Fully migrate sample library to new format

## Rollout Plan

### Week 1: Development
- Implement audio-unlock.js
- Implement sample-manager.js
- Local testing on iOS device

### Week 2: Sample Conversion
- Convert top 10 samples to MP3/OGG
- Update sample-library.json
- Test format fallback

### Week 3: Integration & Testing
- Integrate into sequencer.js
- Test on all browsers
- Test on real iOS devices (not just simulator)

### Week 4: Production Release
- Deploy to production
- Monitor error logs for audio failures
- Gather user feedback

## Success Metrics

### Technical Metrics
- **iOS audio unlock success rate**: >99%
- **Sample load success rate**: >98% (with fallback)
- **Average sample load time**: <500ms on 3G
- **Scheduling drift**: <10ms over 10 minutes

### User Metrics
- **iOS bounce rate**: Decrease by 20% (users no longer leave due to no audio)
- **Audio error reports**: Decrease by 80%
- **Playback duration**: Increase average session length

## Open Questions

1. **Should we show "Enable Audio" button on iOS?**
   - Pro: Clear call-to-action for users
   - Con: Auto-unlock is more seamless
   - **Decision**: Auto-unlock; add button only if auto fails

2. **Should we normalize all samples in library?**
   - Pro: Consistent loudness out of the box
   - Con: Requires reprocessing all samples; could affect character
   - **Decision**: Not in MVP; add normalization function for future use

3. **Should we use Web Audio Worklets?**
   - Pro: Better performance, runs off main thread
   - Con: More complex, not needed for current use case
   - **Decision**: Not in MVP; document for future

4. **How many samples to preload?**
   - Option A: Top 10 most-used (conservative)
   - Option B: All samples in current kit (aggressive)
   - **Decision**: Top 10 for MVP; make configurable later

## Risks & Mitigations

### Risk 1: iOS audio still doesn't work
**Mitigation**: Test on real iOS devices early; add fallback "Enable Audio" button

### Risk 2: MP3/OGG conversions lose quality
**Mitigation**: Use high bitrate (320kbps for MP3, q:6 for OGG); A/B test with users

### Risk 3: Preloading slows down page load
**Mitigation**: Defer preloading until after first interaction; use loading indicators

### Risk 4: Scheduling refactor introduces timing bugs
**Mitigation**: Keep old scheduler as fallback; add feature flag to toggle

## Appendix

### iOS Safari Audio Constraints
- AudioContext starts in "suspended" state
- Must call `audioContext.resume()` in user gesture handler
- Valid user gestures: `touchend`, `click`, `keydown`
- Context may suspend if tab is backgrounded (resume on `visibilitychange`)

### Audio Format Comparison

| Format | Size (1s) | Quality | Browser Support | Use Case |
|--------|-----------|---------|-----------------|----------|
| WAV | ~176 KB | Lossless | All | Desktop, best quality |
| MP3 | ~32 KB | Lossy | All | Mobile, fast loading |
| OGG | ~28 KB | Lossy | Chrome, Firefox | Alternative to MP3 |

### Web Audio API Resources
- [MDN: Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [iOS Safari Audio Best Practices](https://webkit.org/blog/6784/new-video-policies-for-ios/)
- [A Tale of Two Clocks](https://web.dev/audio-scheduling/) - Web Audio timing

---

**Next Steps After Spec Approval**:
1. Create feature branch: `claude/audio-engine-{sessionId}`
2. Implement audio-unlock.js
3. Implement sample-manager.js
4. Convert sample files
5. Update sample-library.json
6. Integrate into sequencer.js
7. Test on iOS device
8. Create PR with this spec linked
