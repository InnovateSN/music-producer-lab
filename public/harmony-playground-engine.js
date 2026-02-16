/**
 * Music Producer Lab - Harmony Playground Engine
 * Initializes the piano roll sequencer for the harmony playground
 */

import {
  initPianoRollSequencer,
  pianoRollState,
  renderNotes,
  updateChordDisplay
} from './piano-roll-sequencer.js';

// Only log in development
const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const log = isDev ? console.log.bind(console) : function() {};

export function initHarmonyPlayground() {
  log('[HarmonyPlayground] Initializing...');

  // Configuration for harmony playground (sandbox mode)
  const playgroundConfig = {
    lessonKey: 'harmony-playground',
    lessonNumber: 0,
    lessonCategory: 'Harmony Practice',

    sequencer: {
      tempo: 120,
      key: 'C',
      scale: 'Major',
      stepCount: 64,
      bars: 4,
      pitchRange: {
        low: 36,   // C2
        high: 84   // C6
      }
    },

    mode: {
      sandbox: true,              // No validation, free play
      showTargetHint: false,      // No target hints
      enablePresets: true,        // Enable chord presets
      enableExport: true,         // Enable WAV export
      sequencerType: 'piano-roll'
    },

    messages: {
      initial: 'Click on the piano roll to place notes. Build chords and melodies.',
      success: '',
      error: ''
    }
  };

  // Initialize piano roll sequencer
  initPianoRollSequencer(playgroundConfig, 'mpl-sequencer-collection');

  // Connect control panel event listeners
  connectControlPanel();

  log('[HarmonyPlayground] ✓ Initialized');
}

/**
 * Chord preset voicings (MIDI note numbers)
 * Each chord is an array of pitches in a comfortable voicing
 */
const CHORD_PRESETS = {
  'C-major': [48, 52, 55, 60],      // C3, E3, G3, C4
  'C-minor': [48, 51, 55, 60],      // C3, Eb3, G3, C4
  'G-major': [43, 47, 50, 55],      // G2, B2, D3, G3
  'G-minor': [43, 46, 50, 55],      // G2, Bb2, D3, G3
  'F-major': [41, 45, 48, 53],      // F2, A2, C3, F3
  'F-minor': [41, 44, 48, 53],      // F2, Ab2, C3, F3
  'A-minor': [45, 48, 52, 57],      // A2, C3, E3, A3
  'D-minor': [50, 53, 57, 62],      // D3, F3, A3, D4
  'E-minor': [52, 55, 59, 64],      // E3, G3, B3, E4
};

/**
 * Insert a chord preset into the piano roll
 * @param {string} chordName - Name of the chord preset
 */
function insertChordPreset(chordName) {
  const voicing = CHORD_PRESETS[chordName];
  if (!voicing) {
    console.warn(`[HarmonyPlayground] Unknown chord preset: ${chordName}`);
    return;
  }

  // Determine insertion position (start at step 0 or current step if playing)
  const insertStep = pianoRollState.isPlaying ? pianoRollState.currentStep : 0;

  // Insert each note of the chord
  voicing.forEach(pitch => {
    // Check if note already exists at this position
    const existingIndex = pianoRollState.notes.findIndex(
      n => n.pitch === pitch && n.start === insertStep
    );

    // Only add if not already present
    if (existingIndex === -1) {
      pianoRollState.notes.push({
        pitch: pitch,
        start: insertStep,
        duration: 8  // 2 beats (8 steps in 16-step grid)
      });
    }
  });

  // Re-render the piano roll
  renderNotes();
  updateChordDisplay();

  log(`[HarmonyPlayground] Inserted ${chordName} chord at step ${insertStep}`);
}

/**
 * Connect control panel UI elements to sequencer
 */
function connectControlPanel() {
  // Tempo slider
  const tempoSlider = document.getElementById('mpl-tempo-slider');
  const tempoDisplay = document.getElementById('mpl-tempo-display');

  if (tempoSlider && tempoDisplay) {
    tempoSlider.addEventListener('input', (e) => {
      const tempo = parseInt(e.target.value);
      tempoDisplay.textContent = `${tempo} BPM`;

      // Update sequencer tempo (if exposed globally)
      if (window.mplSequencer && window.mplSequencer.setTempo) {
        window.mplSequencer.setTempo(tempo);
      }
    });
  }

  // Key select
  const keySelect = document.getElementById('mpl-key-select');
  if (keySelect) {
    keySelect.addEventListener('change', (e) => {
      const key = e.target.value;

      // Update sequencer key (if exposed globally)
      if (window.mplSequencer && window.mplSequencer.setKey) {
        window.mplSequencer.setKey(key);
      }
    });
  }

  // Instrument select
  const instrumentSelect = document.getElementById('mpl-instrument-select');
  if (instrumentSelect) {
    instrumentSelect.addEventListener('change', (e) => {
      const instrument = e.target.value;

      // Update sequencer instrument (if exposed globally)
      if (window.mplSequencer && window.mplSequencer.setInstrument) {
        window.mplSequencer.setInstrument(instrument);
      }
    });
  }

  // Chord preset buttons (if implemented)
  const presetButtons = document.querySelectorAll('.chord-preset-btn');
  presetButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const chordName = e.target.dataset.chord;
      log(`[HarmonyPlayground] Chord preset clicked: ${chordName}`);

      // Insert chord preset into piano roll
      insertChordPreset(chordName);
    });
  });
}
