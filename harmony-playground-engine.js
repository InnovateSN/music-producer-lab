/**
 * Music Producer Lab - Harmony Playground Engine
 * Initializes the piano roll sequencer for the harmony playground
 */

import { initPianoRollSequencer } from './piano-roll-sequencer.js';

export function initHarmonyPlayground() {
  console.log('[HarmonyPlayground] Initializing...');

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

  console.log('[HarmonyPlayground] ✓ Initialized');
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
      console.log(`[HarmonyPlayground] Chord preset clicked: ${chordName}`);

      // TODO: Implement chord preset insertion
      // This would insert pre-made chord voicings into the piano roll
    });
  });
}
