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
  rim: 'samples/drums/rim/rim'
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
 * Play a loaded sample with velocity
 * @param {string} instrument - Instrument name (kick, snare, etc)
 * @param {number} velocity - Velocity 0-1 (normalized)
 */
function playSample(instrument, velocity = 1.0) {
  const buffer = loadedSamples[instrument];
  if (!buffer) return false; // Sample not loaded

  const ctx = getAudioContext();
  const source = ctx.createBufferSource();
  const gainNode = ctx.createGain();

  source.buffer = buffer;
  gainNode.gain.value = velocity; // Apply velocity

  source.connect(gainNode);
  gainNode.connect(ctx.destination);

  source.start(ctx.currentTime);
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
  }

};

// Play a drum sound with velocity
// @param {string} type - The drum sound type (kick, snare, hihat, etc)
// @param {number} velocity - MIDI velocity (0-127), defaults to 100
function playSound(type, velocity = 100) {
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

    // Try to play loaded sample first
    const samplePlayed = playSample(baseType, normalizedVelocity);

    // If no sample available, fall back to synthetic sound
    if (!samplePlayed) {
      const sound = drumSounds[baseType] || drumSounds.kick;
      sound(normalizedVelocity);
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

// Store references for external control
let sequencerState = null;
let sequencerInstruments = null;

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

  // Preload audio samples (non-blocking - loads in background)
  preloadSamples().then(() => {
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
    requiredTempo = null, // Optional: Required BPM for exercise validation
    requiredSwing = null // Optional: Required swing % for exercise validation
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
      
      const baseStepTime = (60 / tempo) * 1000 / (stepCount / 4); // Step duration in ms
      
      const playStep = () => {
        // Calculate swing delay
        // Swing works by delaying the second eighth note of each beat
        // In 16-step: delays steps 3, 7, 11, 15 (the 4th, 8th, 12th, 16th in UI)
        // We do this by increasing delay BEFORE off-beat eighth and decreasing AFTER
        let stepDelay = baseStepTime;
        if (swing > 0) {
          const stepsPerBeat = stepCount / 4;
          const positionInBeat = currentStep % stepsPerBeat;

          if (positionInBeat === stepsPerBeat - 2) {
            // Step BEFORE the off-beat eighth: increase delay
            // This pushes the next note (off-beat eighth) later
            stepDelay = baseStepTime * (1 + (swing / 100) * 0.5);
          } else if (positionInBeat === stepsPerBeat - 1) {
            // Off-beat eighth step: decrease delay to compensate and maintain tempo
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
        
        // Play sounds for active steps with their velocity
        instruments.forEach(inst => {
          if (state[inst.id][currentStep]) {
            playSound(inst.id, velocityState[inst.id][currentStep]);
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
        }
      });
      
      // Reset UI
      document.querySelectorAll('.sequencer-step').forEach((el) => {
        const stepIdx = parseInt(el.dataset.step);
        const beatStart = stepIdx % (stepCount / 4) === 0;
        el.style.background = beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)';
        el.style.borderColor = beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)';
      });
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
    // If playing, restart with new tempo
    if (isPlaying) {
      stopSequencer();
      playBtn?.click();
    }
  });
  
  // Listen for swing changes
  window.addEventListener('mpl-swing-change', (e) => {
    swing = e.detail.swing;
  });
  
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
        alert(`Preset "${presetName}" saved!`);
      } catch (e) {
        console.error('Failed to save preset:', e);
      }
    }
  });
  
  // Listen for preset load
  window.addEventListener('mpl-preset-load', () => {
    try {
      const presets = JSON.parse(localStorage.getItem('mpl-presets') || '{}');
      const presetNames = Object.keys(presets);
      if (presetNames.length === 0) {
        alert('No presets saved yet!');
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
        alert(`Preset "${presetName}" loaded!`);
      }
    } catch (e) {
      console.error('Failed to load preset:', e);
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

// Export for use in lesson pages
export { playSound, drumSounds, changeSample, sampleLibrary, selectedSamples };
