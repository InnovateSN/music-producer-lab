/**
 * Music Producer Lab - Interactive Drum Sequencer
 * A modular 16/8/32-step sequencer for the interactive lessons
 * Full-width horizontal layout with step numbers
 *
 * Features:
 * - Variable step count (8, 16, 32)
 * - Swing support
 * - Tempo control
 * - Sandbox mode (no target validation)
 * - Preset save/load
 * - Responsive design
 */

// Import toast notifications and debug utilities
import { toast } from './toast-notifications.js';
import { debug } from './debug.js';

// Audio Context (Web Audio API)
let audioContext = null;

// Get or create audio context
function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

// ====================
// SAMPLE LOADING SYSTEM
// ====================

// Storage for loaded audio samples (AudioBuffers)
const loadedSamples = {};

// Sample library (loaded from sample-library.json)
let sampleLibrary = {};

// Currently selected samples for each instrument (stored in localStorage)
const selectedSamples = {};

// Load sample library from JSON
async function loadSampleLibrary() {
  try {
    const response = await fetch('sample-library.json');
    if (response.ok) {
      sampleLibrary = await response.json();
      console.log('✓ Sample library loaded:', Object.keys(sampleLibrary).length, 'instruments');

      // Initialize selected samples (load from localStorage or use first sample)
      Object.keys(sampleLibrary).forEach(instrument => {
        const savedSelection = localStorage.getItem(`mpl-sample-${instrument}`);
        if (savedSelection && sampleLibrary[instrument].find(s => s.path === savedSelection)) {
          selectedSamples[instrument] = savedSelection;
        } else if (sampleLibrary[instrument].length > 0) {
          // Use first sample as default
          selectedSamples[instrument] = sampleLibrary[instrument][0].path;
        }
      });

      return true;
    }
  } catch (error) {
    console.warn('Could not load sample library, using fallback paths:', error);
  }
  return false;
}

// Sample paths configuration (base paths - will try multiple formats)
// DEPRECATED: Now using dynamic paths from sample-library.json
const SAMPLE_BASE_PATHS = {
  kick: 'samples/drums/kick/kick',
  snare: 'samples/drums/snare/snare',
  hihat: 'samples/drums/hihat/hihat',
  clap: 'samples/drums/clap/clap',
  tom: 'samples/drums/tom/tom',
  rim: 'samples/drums/rim/rim',
  crash: 'samples/drums/crash/crash',
  ride: 'samples/drums/ride/ride',
  cymbals: 'samples/drums/cymbals/cymbals'
};

// Supported audio formats (in order of preference)
const AUDIO_FORMATS = ['.wav', '.mp3', '.ogg'];

/**
 * Load an audio sample from a URL
 * @param {string} url - Path to the audio file
 * @returns {Promise<AudioBuffer|null>} - Loaded AudioBuffer or null if failed
 */
async function loadSample(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null; // File not found, will use synthetic fallback
    }
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await getAudioContext().decodeAudioData(arrayBuffer);
    return audioBuffer;
  } catch (error) {
    console.warn(`Failed to load sample: ${url}`, error);
    return null;
  }
}

/**
 * Try to load a sample with multiple format attempts
 * @param {string} basePath - Base path without extension
 * @returns {Promise<AudioBuffer|null>}
 */
async function loadSampleWithFormats(basePath) {
  for (const format of AUDIO_FORMATS) {
    const url = basePath + format;
    const buffer = await loadSample(url);
    if (buffer) {
      return buffer;
    }
  }
  return null; // No format found
}

/**
 * Preload all drum samples
 * Called once when the sequencer initializes
 */
async function preloadSamples() {
  // Try to load sample library first
  await loadSampleLibrary();

  // If we have sample library, load selected samples
  if (Object.keys(selectedSamples).length > 0) {
    const loadPromises = Object.entries(selectedSamples).map(async ([instrument, samplePath]) => {
      const buffer = await loadSample(samplePath);
      if (buffer) {
        loadedSamples[instrument] = buffer;
        console.log(`✓ Loaded sample: ${instrument} (${samplePath})`);
      } else {
        console.log(`→ Using synthetic sound for: ${instrument}`);
      }
    });
    await Promise.all(loadPromises);
  } else {
    // Fallback to old system
    const loadPromises = Object.entries(SAMPLE_BASE_PATHS).map(async ([instrument, basePath]) => {
      const buffer = await loadSampleWithFormats(basePath);
      if (buffer) {
        loadedSamples[instrument] = buffer;
        console.log(`✓ Loaded sample: ${instrument}`);
      } else {
        console.log(`→ Using synthetic sound for: ${instrument}`);
      }
    });
    await Promise.all(loadPromises);
  }

  console.log(`Sample loading complete. Loaded ${Object.keys(loadedSamples).length} samples.`);
}

/**
 * Change the selected sample for an instrument
 * @param {string} instrument - Instrument name
 * @param {string} samplePath - Path to the new sample
 */
async function changeSample(instrument, samplePath) {
  selectedSamples[instrument] = samplePath;
  localStorage.setItem(`mpl-sample-${instrument}`, samplePath);

  // Reload the sample
  const buffer = await loadSample(samplePath);
  if (buffer) {
    loadedSamples[instrument] = buffer;
    console.log(`✓ Changed sample for ${instrument}: ${samplePath}`);
    return true;
  } else {
    console.warn(`Failed to load sample: ${samplePath}`);
    return false;
  }
}

/**
 * Play a loaded sample with velocity and panning
 * @param {string} instrument - Instrument name (kick, snare, etc)
 * @param {number} velocity - Velocity 0-1 (normalized)
 * @param {number} timingOffset - Timing offset in milliseconds (default 0)
 * @param {number} pan - Pan position -1 (left) to 1 (right), 0 = center (optional)
 * @param {number} volume - Volume multiplier 0-1 (optional, defaults to 1.0)
 */
function playSample(instrument, velocity = 1.0, timingOffset = 0, pan = 0, volume = 1.0) {
  const buffer = loadedSamples[instrument];
  if (!buffer) return false; // Sample not loaded

  const ctx = getAudioContext();
  const source = ctx.createBufferSource();
  const gainNode = ctx.createGain();
  const panNode = ctx.createStereoPanner();

  source.buffer = buffer;
  gainNode.gain.value = velocity * volume; // Apply velocity and volume
  panNode.pan.value = Math.max(-1, Math.min(1, pan)); // Clamp pan to -1...1

  source.connect(gainNode);
  gainNode.connect(panNode);
  panNode.connect(ctx.destination);

  source.start(ctx.currentTime + (timingOffset / 1000));
  return true; // Successfully played sample
}

// ====================
// SYNTHETIC DRUM SOUNDS (Fallback)
// ====================

// Simple drum sounds using Web Audio API oscillators/noise
const drumSounds = {
  kick: (velocity = 1.0) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    // Apply velocity to gain
    gain.gain.setValueAtTime(1 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  },
  
  snare: (velocity = 1.0) => {
    const ctx = getAudioContext();

    // Noise component
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;

    const noiseGain = ctx.createGain();
    // Apply velocity to noise component
    noiseGain.gain.setValueAtTime(0.3 * velocity, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    // Tone component
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    // Apply velocity to oscillator component
    oscGain.gain.setValueAtTime(0.7 * velocity, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  },
  
  hihat: (velocity = 1.0) => {
    const ctx = getAudioContext();

    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5000;

    const gain = ctx.createGain();
    // Apply velocity
    gain.gain.setValueAtTime(0.3 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  },

  clap: (velocity = 1.0) => {
    const ctx = getAudioContext();

    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.5;

    const gain = ctx.createGain();
    // Apply velocity
    gain.gain.setValueAtTime(0.4 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  },

  tom: (velocity = 1.0) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);

    // Apply velocity
    gain.gain.setValueAtTime(0.8 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  },

  rim: (velocity = 1.0) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(500, ctx.currentTime);

    // Apply velocity
    gain.gain.setValueAtTime(0.3 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  },

  crash: (velocity = 1.0) => {
    const ctx = getAudioContext();

    // Create bright metallic noise for crash cymbal
    const bufferSize = ctx.sampleRate * 2.0; // Longer decay for crash
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.5));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 4000; // Bright, metallic frequency
    filter.Q.value = 0.3;

    const gain = ctx.createGain();
    // Apply velocity with longer decay
    gain.gain.setValueAtTime(0.5 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.0);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  },

  ride: (velocity = 1.0) => {
    const ctx = getAudioContext();

    // Create metallic ping sound for ride cymbal
    const bufferSize = ctx.sampleRate * 0.8;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.3));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 3500;
    filter.Q.value = 0.5;

    const gain = ctx.createGain();
    // Apply velocity
    gain.gain.setValueAtTime(0.4 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  }

};

// Play a drum sound with velocity
// @param {string} type - The drum sound type (kick, snare, hihat, etc)
// @param {number} velocity - MIDI velocity (0-127), defaults to 100
// @param {number} timingOffset - Timing offset in milliseconds (default 0)
function playSound(type, velocity = 100, timingOffset = 0) {
  // Normalize type: remove suffixes like "-ghost", "-accent", etc.
  // Examples: "snare-ghost" -> "snare", "kick-heavy" -> "kick"
  const baseType = type.split('-')[0];

  try {
    // Ensure audio context is running (browser autoplay policy)
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(err => console.warn('Failed to resume audio context:', err));
    }

    // Normalize velocity to 0-1 range for gain
    const normalizedVelocity = Math.max(0, Math.min(127, velocity)) / 127;

    // Get mixer settings for this instrument (if any)
    const mixerSettings = mixerState[baseType] || { volume: 1.0, pan: 0 };

    // Trigger meter update callback if registered
    if (meterUpdateCallback) {
      const delay = Math.max(0, timingOffset);
      if (delay > 0) {
        setTimeout(() => {
          meterUpdateCallback(baseType, normalizedVelocity * mixerSettings.volume);
        }, delay);
      } else {
        meterUpdateCallback(baseType, normalizedVelocity * mixerSettings.volume);
      }
    }

    // Try to play loaded sample first
    const samplePlayed = playSample(baseType, normalizedVelocity, timingOffset, mixerSettings.pan, mixerSettings.volume);

    // If no sample available, fall back to synthetic sound
    if (!samplePlayed) {
      const sound = drumSounds[baseType] || drumSounds.kick;
      // For synthetic sounds, use setTimeout for timing offset
      if (timingOffset > 0) {
        setTimeout(() => sound(normalizedVelocity * mixerSettings.volume), timingOffset);
      } else if (timingOffset < 0) {
        // Clamp negative offsets to 0 (can't play in the past)
        sound(normalizedVelocity * mixerSettings.volume);
      } else {
        sound(normalizedVelocity * mixerSettings.volume);
      }
    }
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
}

// Sequencer state
let isPlaying = false;
let currentStep = 0;
let intervalId = null;
let tempo = 120;
let swing = 0;
let stepCount = 16;

// Humanization state
let humanizationEnabled = false;
let timingRandomization = 0; // milliseconds (0-50ms range)
let velocityRandomization = 0; // percentage (0-50% range)

// Mixer state (per-instrument volume and pan)
const mixerState = {};

// Meter animation callbacks
let meterUpdateCallback = null;

// Store references for external control
let sequencerState = null;
let sequencerInstruments = null;

// ====================
// HUMANIZATION FUNCTIONS
// ====================

/**
 * Apply timing randomization to a step
 * @param {number} baseDelay - Base delay in ms
 * @param {number} randomAmount - Randomization amount in ms (0-50)
 * @returns {number} - Randomized delay
 */
function applyTimingHumanization(baseDelay, randomAmount) {
  if (randomAmount === 0) return baseDelay;
  const variation = (Math.random() - 0.5) * 2 * randomAmount; // -randomAmount to +randomAmount
  return Math.max(0, baseDelay + variation);
}

/**
 * Apply velocity randomization
 * @param {number} baseVelocity - Base velocity (0-127)
 * @param {number} randomPercent - Randomization percentage (0-50)
 * @returns {number} - Randomized velocity (0-127)
 */
function applyVelocityHumanization(baseVelocity, randomPercent) {
  if (randomPercent === 0) return baseVelocity;
  const variation = (Math.random() - 0.5) * 2 * (randomPercent / 100) * baseVelocity;
  return Math.max(1, Math.min(127, Math.round(baseVelocity + variation)));
}

/**
 * Initialize drum sequencer
 * @param {Array} instruments - Array of instrument objects
 * @param {string} lessonKey - LocalStorage key for progress
 * @param {string} nextLessonUrl - URL for next lesson
 * @param {Object} options - Additional options (tempo, stepCount, swing, messages, sandbox)
 * @param {string} containerId - Optional container ID (defaults to 'mpl-sequencer-collection')
 */
export function initDrumSequencer(instruments, lessonKey, nextLessonUrl, options = {}, containerId = 'mpl-sequencer-collection') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Load custom samples from instrument config if specified
  const loadCustomSamples = async () => {
    const customLoadPromises = instruments
      .filter(inst => inst.samplePath)
      .map(async (inst) => {
        const buffer = await loadSample(inst.samplePath);
        if (buffer) {
          loadedSamples[inst.id] = buffer;
          console.log(`✓ Loaded custom sample for ${inst.id}: ${inst.samplePath}`);
          return true;
        }
        return false;
      });

    return Promise.all(customLoadPromises);
  };

  // Preload audio samples (non-blocking - loads in background)
  Promise.all([preloadSamples(), loadCustomSamples()]).then(() => {
    // Resolve the sample library loaded promise
    if (sampleLibraryLoadedResolve) {
      sampleLibraryLoadedResolve(true);
    }

    // Show sample status banner
    const samplesLoaded = Object.keys(loadedSamples).length;
    if (samplesLoaded > 0) {
      const banner = document.createElement('div');
      banner.style.cssText = `
        background: linear-gradient(135deg, rgba(0, 255, 157, 0.15), rgba(0, 240, 255, 0.15));
        border: 1px solid rgba(0, 255, 157, 0.4);
        border-radius: 8px;
        padding: 12px 16px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.85rem;
        color: var(--text-primary, #e0e6f0);
      `;

      banner.innerHTML = `
        <div style="flex-shrink: 0; font-size: 1.5rem;">🎵</div>
        <div style="flex: 1;">
          <div style="font-weight: 700; color: var(--accent-green, #00ff9d); margin-bottom: 2px;">
            ${samplesLoaded} Custom Samples Loaded
          </div>
          <div style="color: var(--text-muted, #a0aec0); font-size: 0.8rem;">
            ${Object.keys(sampleLibrary).length > 0 ? 'Use the dropdowns below each instrument to change samples' : 'Using your custom audio samples'}
          </div>
        </div>
      `;

      const firstElement = container.firstChild;
      if (firstElement) {
        container.insertBefore(banner, firstElement);
      } else {
        container.appendChild(banner);
      }
    }
  }).catch(err => {
    console.warn('Sample preloading failed, using synthetic sounds:', err);
  });

  // Apply options
  const {
    tempo: tempoOption = 120,
    stepCount: stepCountOption = 16,
    swing: swingOption = 0,
    messages = {},
    sandbox: isSandbox = false,
    autoSaveState = true,
    enablePresets = false,
    enableExport = false,
    enableVelocity = false, // Enable velocity lanes UI
    enableHumanization = false, // Enable humanization controls
    requiredTempo = null, // Optional: Required BPM for exercise validation
    requiredSwing = null, // Optional: Required swing % for exercise validation
    accentedSteps = null // Optional: Custom accented steps for beat markers
  } = options;

  tempo = tempoOption;
  stepCount = stepCountOption;
  swing = swingOption;

  // Track state for each instrument
  const state = {};
  const velocityState = {}; // Track velocity for each step (0-127)
  instruments.forEach(inst => {
    state[inst.id] = new Array(stepCount).fill(false);
    velocityState[inst.id] = new Array(stepCount).fill(100); // Default velocity 100
  });

  // Store for external access
  sequencerState = state;
  sequencerInstruments = instruments;

  // Initialize mixer if enabled
  if (options.enableMixer) {
    initMixer(instruments);
  }

  // Build UI - Full width horizontal layout
  container.innerHTML = '';
  
  // Create wrapper with CSS
  const wrapper = document.createElement('div');
  wrapper.className = 'sequencer-wrapper';
  wrapper.style.cssText = `
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding-right: 2px;
  `;
  
  // Add velocity guide if enabled
  if (enableVelocity) {
    const velocityGuide = document.createElement('div');
    velocityGuide.className = 'velocity-guide';
    velocityGuide.style.cssText = `
      background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1));
      border: 1px solid rgba(0, 240, 255, 0.3);
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 0.85rem;
      color: var(--text-primary, #e0e6f0);
    `;

    velocityGuide.innerHTML = `
      <div style="flex-shrink: 0;">
        <svg width="40" height="40" viewBox="0 0 40 40" style="display: block;">
          <!-- Step button example -->
          <rect x="2" y="2" width="36" height="36" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(0,240,255,0.3)" stroke-width="1"/>
          <!-- Velocity fill -->
          <rect x="2" y="20" width="36" height="18" rx="4" fill="rgba(0,240,255,0.4)" opacity="0.5"/>
          <!-- Velocity handle -->
          <line x1="2" y1="20" x2="38" y2="20" stroke="#00f0ff" stroke-width="2" opacity="1"/>
          <!-- Arrow up -->
          <path d="M20 8 L20 14 M17 11 L20 8 L23 11" stroke="#8a2be2" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <!-- Arrow down -->
          <path d="M20 32 L20 26 M17 29 L20 32 L23 29" stroke="#8a2be2" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
      </div>
      <div style="flex: 1;">
        <div style="font-weight: 700; color: var(--accent-cyan, #00f0ff); margin-bottom: 4px; font-size: 0.9rem;">
          💡 Velocity Control Active
        </div>
        <div style="color: var(--text-muted, #a0aec0); line-height: 1.4;">
          <strong>Click</strong> to toggle on/off •
          <strong>Drag up/down</strong> to adjust volume (0-127) •
          The blue bar shows note intensity
        </div>
      </div>
      <div style="flex-shrink: 0; display: flex; flex-direction: column; gap: 4px; font-size: 0.75rem; color: var(--text-muted, #a0aec0);">
        <div style="display: flex; align-items: center; gap: 6px;">
          <div style="width: 12px; height: 12px; background: linear-gradient(to top, transparent, rgba(0,240,255,0.6)); border-radius: 2px;"></div>
          <span>High (100-127)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <div style="width: 12px; height: 12px; background: linear-gradient(to top, transparent 50%, rgba(0,240,255,0.4) 50%); border-radius: 2px;"></div>
          <span>Medium (50-100)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <div style="width: 12px; height: 12px; background: linear-gradient(to top, transparent 75%, rgba(0,240,255,0.2) 75%); border-radius: 2px;"></div>
          <span>Low (0-50)</span>
        </div>
      </div>
    `;

    wrapper.appendChild(velocityGuide);
  }

  // Main grid container
  const grid = document.createElement('div');
  grid.className = 'sequencer-grid';
  grid.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  `;
  
  // Step numbers header row
  const headerRow = document.createElement('div');
  headerRow.className = 'sequencer-header-row';
  headerRow.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 4px;
  `;
  
  // Empty space for label column
  const headerLabel = document.createElement('div');
  headerLabel.style.cssText = `
    width: 70px;
    flex-shrink: 0;
  `;
  headerRow.appendChild(headerLabel);
  
  // Step numbers container
  const stepNumbersContainer = document.createElement('div');
  stepNumbersContainer.style.cssText = `
    display: flex;
    flex: 1;
    gap: 1px;
  `;
  
  const stepsPerBeat = stepCount / 4; // For 16 steps = 4 per beat
  
  for (let i = 0; i < stepCount; i++) {
    const stepNum = document.createElement('div');
    stepNum.className = 'sequencer-step-number';
    const beatStart = i % stepsPerBeat === 0;
    stepNum.style.cssText = `
      flex: 1;
      min-width: ${stepCount > 16 ? '12px' : '16px'};
      text-align: center;
      font-family: var(--font-mono, monospace);
      font-size: ${stepCount > 16 ? '0.5rem' : '0.6rem'};
      font-weight: ${beatStart ? '700' : '400'};
      color: ${beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)'};
      padding: 2px 0;
    `;
    stepNum.textContent = i + 1;
    stepNumbersContainer.appendChild(stepNum);
  }
  
  headerRow.appendChild(stepNumbersContainer);
  grid.appendChild(headerRow);
  
  // Beat markers row (1, 2, 3, 4)
  const beatRow = document.createElement('div');
  beatRow.className = 'sequencer-beat-row';
  beatRow.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 8px;
  `;
  
  const beatLabel = document.createElement('div');
  beatLabel.style.cssText = `
    width: 70px;
    flex-shrink: 0;
    font-size: 0.75rem;
    color: var(--text-muted, #7a8ba8);
  `;
  beatLabel.textContent = 'Beat';
  beatRow.appendChild(beatLabel);
  
  const beatMarkersContainer = document.createElement('div');
  beatMarkersContainer.style.cssText = `
    display: flex;
    flex: 1;
    gap: 1px;
  `;

  // Check if custom accentedSteps is provided
  if (accentedSteps && Array.isArray(accentedSteps)) {
    // Use custom accented steps
    for (let step = 0; step < stepCount; step++) {
      const marker = document.createElement('div');
      const isAccented = accentedSteps.includes(step);
      marker.style.cssText = `
        flex: 1;
        min-width: ${stepCount > 16 ? '12px' : '16px'};
        height: 4px;
        background: ${isAccented ? 'var(--accent-cyan, #00f0ff)' : 'var(--border-subtle, rgba(255,255,255,0.06))'};
        border-radius: 2px;
      `;
      beatMarkersContainer.appendChild(marker);
    }
  } else {
    // Default 4/4 behavior with beat groups
    for (let beat = 1; beat <= 4; beat++) {
      const beatGroup = document.createElement('div');
      beatGroup.style.cssText = `
        flex: 1;
        display: flex;
        gap: 1px;
      `;

      for (let sub = 0; sub < stepsPerBeat; sub++) {
        const marker = document.createElement('div');
        marker.style.cssText = `
          flex: 1;
          min-width: ${stepCount > 16 ? '12px' : '16px'};
          height: 4px;
          background: ${sub === 0 ? 'var(--accent-cyan, #00f0ff)' : 'var(--border-subtle, rgba(255,255,255,0.06))'};
          border-radius: 2px;
        `;
        beatGroup.appendChild(marker);
      }

      beatMarkersContainer.appendChild(beatGroup);
    }
  }

  beatRow.appendChild(beatMarkersContainer);
  grid.appendChild(beatRow);
  
  // Instrument rows
  instruments.forEach(inst => {
    const row = document.createElement('div');
    row.className = 'sequencer-row';
    row.style.cssText = `
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 4px;
    `;

    // Label container (includes label + sample selector)
    const labelContainer = document.createElement('div');
    labelContainer.style.cssText = `
      width: 70px;
      flex-shrink: 0;
      padding-right: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    `;

    // Label
    const label = document.createElement('div');
    label.className = 'sequencer-label';
    label.textContent = inst.label;
    label.style.cssText = `
      font-weight: 600;
      font-size: 0.85rem;
      color: var(--text-secondary, #b8c4e0);
    `;
    labelContainer.appendChild(label);

    // Sample selector (if samples available)
    if (sampleLibrary[inst.id] && sampleLibrary[inst.id].length > 0) {
      const sampleSelect = document.createElement('select');
      sampleSelect.className = 'sample-selector';
      sampleSelect.style.cssText = `
        width: 100%;
        font-size: 0.65rem;
        padding: 2px 4px;
        background: rgba(0, 240, 255, 0.1);
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 4px;
        color: var(--text-primary, #e0e6f0);
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease;
      `;

      // Add options
      sampleLibrary[inst.id].forEach(sample => {
        const option = document.createElement('option');
        option.value = sample.path;
        option.textContent = sample.name;
        option.style.cssText = `
          background: var(--bg-card, #0f1628);
          color: var(--text-primary, #f0f4ff);
          padding: 4px;
        `;
        if (selectedSamples[inst.id] === sample.path) {
          option.selected = true;
        }
        sampleSelect.appendChild(option);
      });

      // Change handler
      sampleSelect.addEventListener('change', async (e) => {
        const newPath = e.target.value;
        const success = await changeSample(inst.id, newPath);
        if (success) {
          // Visual feedback
          sampleSelect.style.background = 'rgba(0, 255, 157, 0.2)';
          setTimeout(() => {
            sampleSelect.style.background = 'rgba(0, 240, 255, 0.1)';
          }, 300);
        }
      });

      // Hover effect
      sampleSelect.addEventListener('mouseenter', () => {
        sampleSelect.style.background = 'rgba(0, 240, 255, 0.2)';
      });
      sampleSelect.addEventListener('mouseleave', () => {
        sampleSelect.style.background = 'rgba(0, 240, 255, 0.1)';
      });

      labelContainer.appendChild(sampleSelect);
    }

    row.appendChild(labelContainer);
    
    // Steps container - full width, no wrap
    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'sequencer-steps';
    stepsContainer.style.cssText = `
      display: flex;
      flex: 1;
      gap: 1px;
    `;
    
    for (let i = 0; i < stepCount; i++) {
      const step = document.createElement('button');
      step.type = 'button';
      step.className = 'sequencer-step';
      step.dataset.instrument = inst.id;
      step.dataset.step = i;
      step.setAttribute('aria-label', `${inst.label} step ${i + 1}`);

      const beatStart = i % stepsPerBeat === 0;
      step.style.cssText = `
        flex: 1;
        min-width: ${stepCount > 16 ? '12px' : '16px'};
        height: ${stepCount > 16 ? '30px' : '34px'};
        border: 1px solid ${beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)'};
        border-radius: 4px;
        background: ${beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)'};
        cursor: ns-resize;
        transition: all 0.15s ease;
        padding: 0;
        position: relative;
        overflow: hidden;
      `;

      // Velocity fill element (vertical bar showing velocity level)
      const velocityFill = document.createElement('div');
      velocityFill.className = 'velocity-fill-inline';
      velocityFill.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: ${(velocityState[inst.id][i] / 127) * 100}%;
        background: ${inst.color};
        opacity: ${state[inst.id][i] ? 0.5 : 0};
        pointer-events: none;
        transition: height 0.1s ease, opacity 0.15s ease;
        z-index: 0;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
      `;
      step.appendChild(velocityFill);

      // Velocity handle (visual indicator at the top of the fill)
      const velocityHandle = document.createElement('div');
      velocityHandle.className = 'velocity-handle';
      velocityHandle.style.cssText = `
        position: absolute;
        bottom: ${(velocityState[inst.id][i] / 127) * 100}%;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(0,240,255,0.95) 50%, rgba(255,255,255,0.9) 100%);
        opacity: ${state[inst.id][i] ? 1 : 0};
        pointer-events: none;
        transition: bottom 0.1s ease, opacity 0.15s ease;
        z-index: 1;
        box-shadow: 0 -1px 6px rgba(0,240,255,0.7), 0 1px 4px rgba(0,0,0,0.6);
        border-radius: 2px;
      `;
      step.appendChild(velocityHandle);

      // Velocity tooltip (shows numeric value during drag)
      const velocityTooltip = document.createElement('div');
      velocityTooltip.className = 'velocity-tooltip';
      velocityTooltip.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.9);
        color: #00f0ff;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 700;
        font-family: var(--font-mono, monospace);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.1s ease;
        z-index: 100;
        white-space: nowrap;
        box-shadow: 0 0 12px rgba(0, 240, 255, 0.6), 0 2px 8px rgba(0,0,0,0.8);
        border: 1px solid rgba(0, 240, 255, 0.4);
      `;
      step.appendChild(velocityTooltip);

      // Drag state
      let isDragging = false;
      let dragStartY = 0;
      let hasMovedEnough = false;

      step.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStartY = e.clientY;
        hasMovedEnough = false;

        // Show tooltip immediately
        velocityTooltip.textContent = `${velocityState[inst.id][i]}`;
        velocityTooltip.style.opacity = '1';

        e.preventDefault(); // Prevent text selection
      });

      const handleMouseMove = (e) => {
        if (!isDragging) return;

        const dragDistance = Math.abs(e.clientY - dragStartY);
        if (dragDistance > 3) {
          hasMovedEnough = true;
        }

        // Calculate velocity based on Y position within the button
        const rect = step.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const height = rect.height;

        // Inverted: top = 127 (max), bottom = 0 (min)
        const velocityPercent = Math.max(0, Math.min(1, 1 - (y / height)));
        const newVelocity = Math.round(velocityPercent * 127);

        velocityState[inst.id][i] = newVelocity;

        // Update fill height
        velocityFill.style.height = `${(newVelocity / 127) * 100}%`;

        // Update handle position (synchronized with fill)
        velocityHandle.style.bottom = `${(newVelocity / 127) * 100}%`;

        // Update tooltip
        velocityTooltip.textContent = `${newVelocity}`;

        // If step is active, update opacity to show fill and handle
        if (state[inst.id][i]) {
          velocityFill.style.opacity = '0.5';
          velocityHandle.style.opacity = '1';
        }
      };

      const handleMouseUp = (e) => {
        if (!isDragging) return;

        // If not dragged enough, treat as click to toggle step
        if (!hasMovedEnough) {
          state[inst.id][i] = !state[inst.id][i];

          // Update fill and handle opacity based on step state
          velocityFill.style.opacity = state[inst.id][i] ? '0.5' : '0';
          velocityHandle.style.opacity = state[inst.id][i] ? '1' : '0';

          // Update background
          const beatStart = i % stepsPerBeat === 0;
          step.style.background = state[inst.id][i]
            ? inst.color
            : (beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)');
          step.style.borderColor = state[inst.id][i]
            ? 'transparent'
            : (beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)');

          if (state[inst.id][i]) {
            // Play sound with current velocity
            playSound(inst.id, velocityState[inst.id][i]);
          }
        } else {
          // Was dragging - ensure step is active and play preview
          if (!state[inst.id][i]) {
            state[inst.id][i] = true;
            velocityFill.style.opacity = '0.5';
            velocityHandle.style.opacity = '1';
            step.style.background = inst.color;
            step.style.borderColor = 'transparent';
          }

          // Play sound with new velocity
          playSound(inst.id, velocityState[inst.id][i]);
        }

        isDragging = false;
        hasMovedEnough = false;
        velocityTooltip.style.opacity = '0';

        // Auto-save if enabled
        if (autoSaveState) {
          savePatternState(lessonKey + '-pattern', { state, velocityState });
        }
      };

      // Attach move and up listeners to document for better drag experience
      step.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp, { once: true });
      });

      // Hover effect (only when not active)
      step.addEventListener('mouseenter', () => {
        if (!state[inst.id][i] && !isDragging) {
          step.style.background = 'rgba(255,255,255,0.1)';
        }
      });

      step.addEventListener('mouseleave', () => {
        // Clean up drag listeners if mouse leaves
        if (isDragging) {
          document.removeEventListener('mousemove', handleMouseMove);
          isDragging = false;
          hasMovedEnough = false;
          velocityTooltip.style.opacity = '0';
        }

        if (!state[inst.id][i]) {
          const beatStart = i % stepsPerBeat === 0;
          step.style.background = beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)';
        }
      });

      stepsContainer.appendChild(step);
    }
    
    row.appendChild(stepsContainer);
    grid.appendChild(row);
  });

  wrapper.appendChild(grid);
  container.appendChild(wrapper);
  
  // Instructions
  if (instruments.length > 0 && instruments[0].instructions) {
    const instructionsDiv = document.createElement('p');
    instructionsDiv.style.cssText = `
      margin-top: 16px;
      font-size: 0.9rem;
      color: var(--text-muted, #7a8ba8);
      line-height: 1.6;
    `;
    instructionsDiv.textContent = instruments[0].instructions;
    container.appendChild(instructionsDiv);
  }
  
  // Legend
  const legend = document.createElement('div');
  legend.className = 'sequencer-legend';
  legend.style.cssText = `
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 0.8rem;
    color: var(--text-muted, #7a8ba8);
  `;
  legend.innerHTML = `
    <div style="display: flex; align-items: center; gap: 6px;">
      <div style="width: 16px; height: 16px; background: rgba(0, 240, 255, 0.08); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 3px;"></div>
      <span>Beat start (downbeat)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <div style="width: 16px; height: 16px; background: ${instruments[0]?.color || 'linear-gradient(135deg,#ff5a3d,#ffb28a)'}; border-radius: 3px;"></div>
      <span>Active step</span>
    </div>
  `;
  container.appendChild(legend);

  // Humanization controls (if enabled)
  if (enableHumanization) {
    const humanizationSection = document.createElement('div');
    humanizationSection.className = 'humanization-controls';
    humanizationSection.style.cssText = `
      margin-top: 24px;
      padding: 20px;
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(0, 240, 255, 0.1));
      border: 1px solid rgba(138, 43, 226, 0.3);
      border-radius: 12px;
    `;

    humanizationSection.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-purple, #8a2be2);">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary, #e0e6f0);">
          Humanization
        </h3>
        <label style="margin-left: auto; display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <input type="checkbox" id="mpl-humanize-enable" style="width: 18px; height: 18px; cursor: pointer;">
          <span style="font-size: 0.9rem; color: var(--text-secondary, #b8c4e0);">Enable</span>
        </label>
      </div>

      <div id="mpl-humanize-controls" style="display: none; opacity: 0.5; pointer-events: none; transition: opacity 0.3s ease;">
        <!-- Timing Randomization Slider -->
        <div style="margin-bottom: 16px;">
          <label style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-secondary, #b8c4e0);">
              Timing Randomization
            </span>
            <span id="mpl-timing-value" style="font-family: var(--font-mono, monospace); font-size: 0.85rem; color: var(--accent-cyan, #00f0ff);">
              0ms
            </span>
          </label>
          <input type="range" id="mpl-timing-slider" min="0" max="50" step="1" value="0"
            style="width: 100%; height: 6px; border-radius: 3px; background: linear-gradient(90deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2)); outline: none; cursor: pointer;">
          <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-dim, #4a5a78); margin-top: 4px;">
            <span>0ms</span>
            <span>25ms</span>
            <span>50ms</span>
          </div>
        </div>

        <!-- Velocity Randomization Slider -->
        <div style="margin-bottom: 20px;">
          <label style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-secondary, #b8c4e0);">
              Velocity Randomization
            </span>
            <span id="mpl-velocity-rand-value" style="font-family: var(--font-mono, monospace); font-size: 0.85rem; color: var(--accent-cyan, #00f0ff);">
              0%
            </span>
          </label>
          <input type="range" id="mpl-velocity-rand-slider" min="0" max="50" step="1" value="0"
            style="width: 100%; height: 6px; border-radius: 3px; background: linear-gradient(90deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2)); outline: none; cursor: pointer;">
          <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-dim, #4a5a78); margin-top: 4px;">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
          </div>
        </div>

        <!-- Preset Buttons -->
        <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px;">
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted, #7a8ba8); margin-bottom: 10px;">
            Humanization Presets:
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px;">
            <button type="button" class="humanize-preset-btn" data-timing="8" data-velocity="15"
              style="padding: 8px 12px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 6px; color: var(--text-primary, #e0e6f0); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
              <div style="margin-bottom: 2px;">Subtle</div>
              <div style="font-size: 0.7rem; font-weight: 400; color: var(--text-dim, #4a5a78);">8ms / 15%</div>
            </button>
            <button type="button" class="humanize-preset-btn" data-timing="15" data-velocity="25"
              style="padding: 8px 12px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 6px; color: var(--text-primary, #e0e6f0); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
              <div style="margin-bottom: 2px;">MPC 60</div>
              <div style="font-size: 0.7rem; font-weight: 400; color: var(--text-dim, #4a5a78);">15ms / 25%</div>
            </button>
            <button type="button" class="humanize-preset-btn" data-timing="30" data-velocity="35"
              style="padding: 8px 12px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 6px; color: var(--text-primary, #e0e6f0); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
              <div style="margin-bottom: 2px;">Loose</div>
              <div style="font-size: 0.7rem; font-weight: 400; color: var(--text-dim, #4a5a78);">30ms / 35%</div>
            </button>
            <button type="button" class="humanize-preset-btn" data-timing="20" data-velocity="40"
              style="padding: 8px 12px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 6px; color: var(--text-primary, #e0e6f0); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
              <div style="margin-bottom: 2px;">Live</div>
              <div style="font-size: 0.7rem; font-weight: 400; color: var(--text-dim, #4a5a78);">20ms / 40%</div>
            </button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(humanizationSection);
  }

  // Get control elements (search within container first, then in previous sibling, then globally for backwards compatibility)
  const previousSibling = container.previousElementSibling;
  const playBtn = container.querySelector('#mpl-seq-play-all, [id^="mpl-seq-play-all"]') ||
                  (previousSibling && previousSibling.querySelector('[id^="mpl-seq-play-all"]')) ||
                  document.getElementById('mpl-seq-play-all');
  const stopBtn = container.querySelector('#mpl-seq-stop-all, [id^="mpl-seq-stop-all"]') ||
                  (previousSibling && previousSibling.querySelector('[id^="mpl-seq-stop-all"]')) ||
                  document.getElementById('mpl-seq-stop-all');
  const clearBtn = container.querySelector('#mpl-seq-clear-all, [id^="mpl-seq-clear-all"]') ||
                   (previousSibling && previousSibling.querySelector('[id^="mpl-seq-clear-all"]')) ||
                   document.getElementById('mpl-seq-clear-all');
  const checkBtn = container.querySelector('#mpl-seq-check-all') || document.getElementById('mpl-seq-check-all');
  const statusEl = container.querySelector('#mpl-seq-status') || document.getElementById('mpl-seq-status');
  const nextBtn = container.querySelector('#mpl-next-lesson') || document.getElementById('mpl-next-lesson');
  const presetControls = container.querySelector('#mpl-preset-controls') || document.getElementById('mpl-preset-controls');
  const exportBtn = container.querySelector('#mpl-export-json') || document.getElementById('mpl-export-json');

  if (presetControls) {
    presetControls.style.display = enablePresets ? 'flex' : 'none';
  }

  if (exportBtn) {
    exportBtn.style.display = enableExport ? 'inline-flex' : 'none';
  }
  
  // Play button
  if (playBtn) {
    playBtn.addEventListener('click', async () => {
      if (isPlaying) return;

      // Resume audio context if suspended (browser autoplay policy)
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      isPlaying = true;
      currentStep = 0;

      const playStep = () => {
        // Recalculate base step time to pick up tempo changes dynamically
        const baseStepTime = (60 / tempo) * 1000 / (stepCount / 4); // Step duration in ms

        // Calculate swing delay
        // Swing works by delaying ALL off-beat sixteenth notes
        // In 16-step: delays steps 2, 4, 6, 8, 10, 12, 14, 16 (all even-numbered steps in UI)
        // This is consistent with how DAWs apply 16th-note swing
        let stepDelay = baseStepTime;
        if (swing > 0) {
          if (currentStep % 2 === 0) {
            // Even step (0, 2, 4, 6, 8, 10, 12, 14): increase delay before next note
            // This pushes the next note (odd step in 0-indexed, even in UI) later
            stepDelay = baseStepTime * (1 + (swing / 100) * 0.5);
          } else {
            // Odd step (1, 3, 5, 7, 9, 11, 13, 15): decrease delay to compensate and maintain tempo
            stepDelay = baseStepTime * (1 - (swing / 100) * 0.5);
          }
        }
        
        // Highlight current step
        document.querySelectorAll('.sequencer-step').forEach((el) => {
          const stepIdx = parseInt(el.dataset.step);
          if (stepIdx === currentStep) {
            el.style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.6), inset 0 0 8px rgba(0, 240, 255, 0.3)';
            el.style.filter = 'brightness(1.15)';
          } else {
            el.style.boxShadow = 'none';
            el.style.filter = 'none';
          }
        });
        
        // Update step numbers highlight
        document.querySelectorAll('.sequencer-step-number').forEach((el, i) => {
          if (i === currentStep) {
            el.style.color = 'var(--accent-cyan, #00f0ff)';
            el.style.fontWeight = '700';
          } else {
            const beatStart = i % (stepCount / 4) === 0;
            el.style.color = beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)';
            el.style.fontWeight = beatStart ? '700' : '400';
          }
        });
        
        // Play sounds for active steps with their velocity and humanization
        instruments.forEach(inst => {
          if (state[inst.id][currentStep]) {
            let velocity = velocityState[inst.id][currentStep];
            let timingOffset = 0;

            // Apply humanization if enabled
            if (humanizationEnabled) {
              velocity = applyVelocityHumanization(velocity, velocityRandomization);
              timingOffset = (Math.random() - 0.5) * 2 * timingRandomization;
            }

            // Play sound with humanization
            playSound(inst.id, velocity, timingOffset);
          }
        });
        
        currentStep = (currentStep + 1) % stepCount;
        
        if (isPlaying) {
          intervalId = setTimeout(playStep, stepDelay);
        }
      };
      
      playStep();
    });
  }
  
  // Stop button
  if (stopBtn) {
    stopBtn.addEventListener('click', stopSequencer);
  }
  
  // Clear button (sandbox mode)
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      instruments.forEach(inst => {
        for (let i = 0; i < stepCount; i++) {
          state[inst.id][i] = false;
          // Reset velocity to default (100)
          if (velocityState[inst.id]) {
            velocityState[inst.id][i] = 100;
          }
        }
      });

      // Reset UI - remove all active states and classes
      document.querySelectorAll('.sequencer-step').forEach((el) => {
        const stepIdx = parseInt(el.dataset.step);
        const beatStart = stepIdx % (stepCount / 4) === 0;
        el.style.background = beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)';
        el.style.borderColor = beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)';
        // Remove active/playing classes
        el.classList.remove('active', 'playing');

        // Reset velocity fill and handle (inline elements)
        const velocityFill = el.querySelector('.velocity-fill-inline');
        const velocityHandle = el.querySelector('.velocity-handle');
        if (velocityFill) {
          velocityFill.style.height = '78.74%'; // 100/127 * 100
          velocityFill.style.opacity = '0'; // Hide completely
        }
        if (velocityHandle) {
          velocityHandle.style.bottom = '78.74%'; // Position at default velocity
          velocityHandle.style.opacity = '0'; // Hide completely
        }
      });

      // Reset velocity UI bars (legacy)
      document.querySelectorAll('.velocity-bar').forEach(bar => {
        const fillEl = bar.querySelector('.velocity-fill');
        if (fillEl) {
          fillEl.style.height = '78.74%'; // 100/127 * 100 = 78.74%
        }
      });

      // Reset velocity sliders (legacy)
      document.querySelectorAll('.sequencer-velocity-slider').forEach(slider => {
        slider.value = 100;
      });

      // Save cleared state
      if (lessonKey) {
        savePatternState(lessonKey + '-pattern', { state, velocityState });
      }
    });
  }
  
  // Check button
  if (checkBtn && !isSandbox) {
    checkBtn.addEventListener('click', () => {
      let allCorrect = true;
      let tempoCorrect = true;
      let swingCorrect = true;

      // Check if tempo matches required tempo (if specified)
      if (requiredTempo !== null && tempo !== requiredTempo) {
        tempoCorrect = false;
        allCorrect = false;
      }

      // Check if swing matches required swing (if specified)
      if (requiredSwing !== null && swing !== requiredSwing) {
        swingCorrect = false;
        allCorrect = false;
      }

      instruments.forEach(inst => {
        const target = inst.target || [];
        const current = state[inst.id];

        // Check if pattern matches
        for (let i = 0; i < stepCount; i++) {
          const shouldBeActive = target.includes(i);
          if (current[i] !== shouldBeActive) {
            allCorrect = false;
            break;
          }
        }
      });

      if (allCorrect && tempoCorrect && swingCorrect) {
        if (statusEl) {
          statusEl.textContent = messages.success || '🎉 Correct! Great job! You can now proceed to the next lesson.';
          statusEl.style.color = 'var(--accent-green, #00ff9d)';
        }
        if (nextBtn) {
          nextBtn.disabled = false;
          nextBtn.style.opacity = '1';
        }

        // Save progress
        try {
          localStorage.setItem(lessonKey, 'completed');
        } catch (e) {}
      } else {
        if (statusEl) {
          // Provide specific error message based on what's wrong
          if (!tempoCorrect && requiredTempo !== null) {
            statusEl.textContent = `⏱️ Please set the tempo to ${requiredTempo} BPM before checking the exercise.`;
            statusEl.style.color = 'var(--accent-amber, #ffcc00)';
          } else if (!swingCorrect && requiredSwing !== null) {
            statusEl.textContent = `🎵 Please set the swing to ${requiredSwing}% before checking the exercise.`;
            statusEl.style.color = 'var(--accent-amber, #ffcc00)';
          } else {
            statusEl.textContent = messages.error || 'Not quite right. Check the pattern and try again!';
            statusEl.style.color = 'var(--accent-amber, #ffcc00)';
          }
        }

        // Show correct pattern briefly (only if pattern is wrong, not tempo/swing)
        if (tempoCorrect && swingCorrect) {
          instruments.forEach(inst => {
            const target = inst.target || [];
            document.querySelectorAll(`.sequencer-step[data-instrument="${inst.id}"]`).forEach((el, i) => {
              if (target.includes(i) && !state[inst.id][i]) {
                el.style.outline = '2px solid rgba(0, 240, 255, 0.7)';
                el.style.outlineOffset = '2px';
                setTimeout(() => {
                  el.style.outline = 'none';
                  el.style.outlineOffset = '0';
                }, 2000);
              }
            });
          });
        }
      }
    });
  }
  
  // Next lesson button
  if (nextBtn && nextLessonUrl) {
    nextBtn.addEventListener('click', () => {
      window.location.href = nextLessonUrl;
    });
    
    // Check if already completed
    try {
      if (localStorage.getItem(lessonKey) === 'completed') {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        if (statusEl) {
          statusEl.textContent = messages.alreadyCompleted || 'You\'ve already completed this exercise. Feel free to practice or move to the next lesson!';
        }
      }
    } catch (e) {}
  }
  
  // Listen for tempo changes
  window.addEventListener('mpl-tempo-change', (e) => {
    tempo = e.detail.tempo;
    // Note: No need to restart playback - the next scheduled step
    // will automatically use the new tempo value for timing calculation
  });
  
  // Listen for swing changes
  window.addEventListener('mpl-swing-change', (e) => {
    swing = e.detail.swing;
  });

  // Humanization control event listeners
  if (enableHumanization) {
    const humanizeEnableCheckbox = document.getElementById('mpl-humanize-enable');
    const humanizeControlsDiv = document.getElementById('mpl-humanize-controls');
    const timingSlider = document.getElementById('mpl-timing-slider');
    const timingValue = document.getElementById('mpl-timing-value');
    const velocityRandSlider = document.getElementById('mpl-velocity-rand-slider');
    const velocityRandValue = document.getElementById('mpl-velocity-rand-value');
    const presetButtons = document.querySelectorAll('.humanize-preset-btn');

    // Enable/disable humanization
    if (humanizeEnableCheckbox) {
      humanizeEnableCheckbox.addEventListener('change', (e) => {
        humanizationEnabled = e.target.checked;

        if (humanizeControlsDiv) {
          if (humanizationEnabled) {
            humanizeControlsDiv.style.display = 'block';
            humanizeControlsDiv.style.opacity = '1';
            humanizeControlsDiv.style.pointerEvents = 'auto';
          } else {
            humanizeControlsDiv.style.opacity = '0.5';
            humanizeControlsDiv.style.pointerEvents = 'none';
          }
        }
      });
    }

    // Timing randomization slider
    if (timingSlider && timingValue) {
      timingSlider.addEventListener('input', (e) => {
        timingRandomization = parseFloat(e.target.value);
        timingValue.textContent = `${timingRandomization}ms`;
      });
    }

    // Velocity randomization slider
    if (velocityRandSlider && velocityRandValue) {
      velocityRandSlider.addEventListener('input', (e) => {
        velocityRandomization = parseFloat(e.target.value);
        velocityRandValue.textContent = `${velocityRandomization}%`;
      });
    }

    // Preset buttons
    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const timing = parseFloat(btn.dataset.timing);
        const velocity = parseFloat(btn.dataset.velocity);

        // Update state
        timingRandomization = timing;
        velocityRandomization = velocity;

        // Update UI
        if (timingSlider) timingSlider.value = timing;
        if (timingValue) timingValue.textContent = `${timing}ms`;
        if (velocityRandSlider) velocityRandSlider.value = velocity;
        if (velocityRandValue) velocityRandValue.textContent = `${velocity}%`;

        // Enable humanization if not already enabled
        if (!humanizationEnabled && humanizeEnableCheckbox) {
          humanizeEnableCheckbox.checked = true;
          humanizationEnabled = true;
          if (humanizeControlsDiv) {
            humanizeControlsDiv.style.display = 'block';
            humanizeControlsDiv.style.opacity = '1';
            humanizeControlsDiv.style.pointerEvents = 'auto';
          }
        }

        // Visual feedback
        btn.style.background = 'rgba(0, 255, 157, 0.2)';
        btn.style.borderColor = 'rgba(0, 255, 157, 0.5)';
        setTimeout(() => {
          btn.style.background = 'rgba(0, 240, 255, 0.1)';
          btn.style.borderColor = 'rgba(0, 240, 255, 0.3)';
        }, 300);
      });

      // Hover effect for preset buttons
      btn.addEventListener('mouseenter', () => {
        btn.style.background = 'rgba(0, 240, 255, 0.2)';
        btn.style.transform = 'translateY(-2px)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'rgba(0, 240, 255, 0.1)';
        btn.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Listen for preset save
  window.addEventListener('mpl-preset-save', () => {
    const presetData = {
      state: state,
      tempo: tempo,
      swing: swing,
      stepCount: stepCount
    };
    const presetJson = JSON.stringify(presetData);
    const presetName = prompt('Enter preset name:', 'My Pattern');
    if (presetName) {
      try {
        const presets = JSON.parse(localStorage.getItem('mpl-presets') || '{}');
        presets[presetName] = presetData;
        localStorage.setItem('mpl-presets', JSON.stringify(presets));
        toast.success(`Preset "${presetName}" saved!`);
      } catch (e) {
        console.error('Failed to save preset:', e);
        toast.error('Failed to save preset. Please try again.');
      }
    }
  });
  
  // Listen for preset load
  window.addEventListener('mpl-preset-load', () => {
    try {
      const presets = JSON.parse(localStorage.getItem('mpl-presets') || '{}');
      const presetNames = Object.keys(presets);
      if (presetNames.length === 0) {
        toast.warning('No presets saved yet!');
        return;
      }
      const presetName = prompt(`Available presets:\n${presetNames.join('\n')}\n\nEnter preset name to load:`);
      if (presetName && presets[presetName]) {
        const preset = presets[presetName];
        // Apply preset state
        Object.keys(preset.state).forEach(instId => {
          if (state[instId]) {
            preset.state[instId].forEach((val, i) => {
              state[instId][i] = val;
            });
          }
        });
        // Update UI
        updateSequencerUI(state, instruments, stepCount, velocityState);
        toast.success(`Preset "${presetName}" loaded!`);
      }
    } catch (e) {
      console.error('Failed to load preset:', e);
      toast.error('Failed to load preset. Please try again.');
    }
  });

  // Load initial patterns from config if specified
  let hasInitialPattern = false;
  instruments.forEach(inst => {
    if (inst.initialPattern && inst.initialPattern.steps && inst.initialPattern.steps.length > 0) {
      hasInitialPattern = true;
      inst.initialPattern.steps.forEach((stepIdx, i) => {
        if (stepIdx >= 0 && stepIdx < stepCount) {
          state[inst.id][stepIdx] = true;
          // Set velocity if provided, otherwise use default
          if (inst.initialPattern.velocities && inst.initialPattern.velocities[i] !== undefined) {
            velocityState[inst.id][stepIdx] = inst.initialPattern.velocities[i];
          }
        }
      });
    }
  });

  // Load saved pattern state if exists (overwrites initial pattern if user has saved work)
  try {
    const savedPattern = localStorage.getItem(lessonKey + '-pattern');
    if (savedPattern) {
      const parsed = JSON.parse(savedPattern);

      // Handle both old format (direct state) and new format ({ state, velocityState })
      if (parsed.state && parsed.velocityState) {
        // New format with velocity
        Object.keys(parsed.state).forEach(instId => {
          if (state[instId]) {
            parsed.state[instId].forEach((val, i) => {
              if (i < stepCount) state[instId][i] = val;
            });
          }
        });
        Object.keys(parsed.velocityState).forEach(instId => {
          if (velocityState[instId]) {
            parsed.velocityState[instId].forEach((val, i) => {
              if (i < stepCount) velocityState[instId][i] = val;
            });
          }
        });
        updateSequencerUI(state, instruments, stepCount, velocityState);
      } else {
        // Old format (backward compatibility)
        Object.keys(parsed).forEach(instId => {
          if (state[instId]) {
            parsed[instId].forEach((val, i) => {
              if (i < stepCount) state[instId][i] = val;
            });
          }
        });
        updateSequencerUI(state, instruments, stepCount, velocityState);
      }
    } else if (hasInitialPattern) {
      // If no saved pattern but we have initial pattern, update UI to show it
      updateSequencerUI(state, instruments, stepCount, velocityState);
    }
  } catch (e) {}
}

// Stop the sequencer
function stopSequencer() {
  isPlaying = false;
  if (intervalId) {
    clearTimeout(intervalId);
    intervalId = null;
  }
  currentStep = 0;
  
  // Remove highlights
  document.querySelectorAll('.sequencer-step').forEach(el => {
    el.style.boxShadow = 'none';
    el.style.filter = 'none';
  });
  
  // Reset step number colors
  const stepsPerBeat = stepCount / 4;
  document.querySelectorAll('.sequencer-step-number').forEach((el, i) => {
    const beatStart = i % stepsPerBeat === 0;
    el.style.color = beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)';
    el.style.fontWeight = beatStart ? '700' : '400';
  });
}

// Update sequencer UI from state
function updateSequencerUI(state, instruments, stepCount, velocityState = null) {
  const stepsPerBeat = stepCount / 4;
  instruments.forEach(inst => {
    document.querySelectorAll(`.sequencer-step[data-instrument="${inst.id}"]`).forEach((el, i) => {
      const beatStart = i % stepsPerBeat === 0;
      el.style.background = state[inst.id][i]
        ? inst.color
        : (beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)');
      el.style.borderColor = state[inst.id][i]
        ? 'transparent'
        : (beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)');

      // Update velocity fill and handle if present
      if (velocityState && velocityState[inst.id]) {
        const velocityFill = el.querySelector('.velocity-fill-inline');
        const velocityHandle = el.querySelector('.velocity-handle');
        if (velocityFill) {
          const velocityPercent = (velocityState[inst.id][i] / 127) * 100;
          velocityFill.style.height = `${velocityPercent}%`;
          velocityFill.style.opacity = state[inst.id][i] ? '0.5' : '0';
        }
        if (velocityHandle) {
          const velocityPercent = (velocityState[inst.id][i] / 127) * 100;
          velocityHandle.style.bottom = `${velocityPercent}%`;
          velocityHandle.style.opacity = state[inst.id][i] ? '1' : '0';
        }
      }
    });
  });
}

// Save pattern state to localStorage
function savePatternState(key, state) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {}
}

// ====================
// MIXER FUNCTIONS
// ====================

/**
 * Set volume for an instrument
 * @param {string} instrument - Instrument ID
 * @param {number} volume - Volume 0.0 to 1.0
 */
function setMixerVolume(instrument, volume) {
  if (!mixerState[instrument]) {
    mixerState[instrument] = { volume: 1.0, pan: 0 };
  }
  mixerState[instrument].volume = Math.max(0, Math.min(1, volume));
}

/**
 * Set pan for an instrument
 * @param {string} instrument - Instrument ID
 * @param {number} pan - Pan -1.0 (left) to 1.0 (right), 0 = center
 */
function setMixerPan(instrument, pan) {
  if (!mixerState[instrument]) {
    mixerState[instrument] = { volume: 1.0, pan: 0 };
  }
  mixerState[instrument].pan = Math.max(-1, Math.min(1, pan));
}

/**
 * Initialize mixer state from config
 * @param {Array} instruments - Array of instrument configs with defaultVolume and defaultPan
 */
function initMixer(instruments) {
  instruments.forEach(inst => {
    mixerState[inst.id] = {
      volume: inst.defaultVolume !== undefined ? inst.defaultVolume : 1.0,
      pan: inst.defaultPan !== undefined ? inst.defaultPan : 0
    };
  });
}

/**
 * Get current mixer state for an instrument
 * @param {string} instrument - Instrument ID
 * @returns {Object} { volume, pan }
 */
function getMixerState(instrument) {
  return mixerState[instrument] || { volume: 1.0, pan: 0 };
}

/**
 * Register a callback for meter updates
 * @param {Function} callback - Function called when a sound is played: callback(instrument, level)
 */
function setMeterUpdateCallback(callback) {
  meterUpdateCallback = callback;
}

/**
 * Wait for sample library to be loaded
 * @returns {Promise<boolean>} - Resolves to true when library is ready
 */
let sampleLibraryLoadedResolve = null;
let sampleLibraryLoadedPromise = new Promise((resolve) => {
  sampleLibraryLoadedResolve = resolve;
});

function waitForSampleLibrary() {
  return sampleLibraryLoadedPromise;
}

/**
 * Check if sample library is loaded (synchronously)
 * @returns {boolean}
 */
function isSampleLibraryLoaded() {
  return Object.keys(sampleLibrary).length > 0 && Object.keys(selectedSamples).length > 0;
}

// Export for use in lesson pages
export { playSound, drumSounds, changeSample, sampleLibrary, selectedSamples, setMixerVolume, setMixerPan, initMixer, getMixerState, setMeterUpdateCallback, waitForSampleLibrary, isSampleLibraryLoaded };

// ==========================================
// MODULE-LEVEL INITIALIZATION
// ==========================================

// Automatically load sample library when module is imported
// This ensures the library is available for standalone pages like drum-playground
(async () => {
  try {
    await preloadSamples();
    console.log('✅ Sample library preloaded at module level');

    // Resolve the promise for pages waiting for the library
    if (sampleLibraryLoadedResolve) {
      sampleLibraryLoadedResolve(true);
    }
  } catch (error) {
    console.warn('⚠️ Could not preload sample library:', error);

    // Still resolve the promise even if loading failed
    // This prevents pages from hanging indefinitely
    if (sampleLibraryLoadedResolve) {
      sampleLibraryLoadedResolve(false);
    }
  }
})();
