/**
 * Music Producer Lab - Piano Roll Sequencer
 * Professional polyphonic sequencer for harmony and melody lessons
 *
 * Features:
 * - 3-octave piano roll (C2-C5, 36 pitches)
 * - Polyphonic note placement and editing
 * - Variable note duration (drag to extend)
 * - Real-time chord detection
 * - Scale highlighting
 * - Voice leading visualization
 * - Web Audio API polyphonic synthesis
 * - Chord inversion support
 */

// ==========================================
// AUDIO CONTEXT & SYNTHESIS
// ==========================================

let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

/**
 * MIDI note number to frequency conversion
 * @param {number} midiNote - MIDI note number (0-127)
 * @returns {number} - Frequency in Hz
 */
function midiToFrequency(midiNote) {
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}

/**
 * Play a single note with polyphonic synthesis
 * @param {number} midiNote - MIDI note number
 * @param {number} duration - Note duration in seconds
 * @param {number} velocity - Note velocity (0-1)
 * @param {Object} options - Synthesis options
 * @param {string} options.waveform - Oscillator waveform ('triangle', 'sawtooth', 'sine', 'square')
 * @param {boolean} options.bassMode - Enable bass-optimized synthesis
 */
function playNote(midiNote, duration = 1.0, velocity = 0.7, options = {}) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Determine waveform (bass mode uses sawtooth, default is triangle)
    const waveform = options.waveform || (options.bassMode ? 'sawtooth' : 'triangle');
    const isBass = options.bassMode || false;

    // Create oscillator
    const oscillator = ctx.createOscillator();
    oscillator.type = waveform;
    oscillator.frequency.value = midiToFrequency(midiNote);

    // Create filter for bass (lowpass to remove harsh highs)
    let filterNode = null;
    if (isBass) {
      filterNode = ctx.createBiquadFilter();
      filterNode.type = 'lowpass';
      filterNode.frequency.value = 800; // Cut highs for smoother bass
      filterNode.Q.value = 1;
    }

    // Create gain envelope (ADSR)
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, now);

    if (isBass) {
      // Bass envelope: longer attack, sustained body
      gainNode.gain.linearRampToValueAtTime(velocity * 0.4, now + 0.005); // Fast attack
      gainNode.gain.exponentialRampToValueAtTime(velocity * 0.35, now + 0.1); // Slight decay
      gainNode.gain.setValueAtTime(velocity * 0.35, now + duration - 0.08); // Long sustain
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration); // Smooth release
    } else {
      // Harmony envelope: standard ADSR
      gainNode.gain.linearRampToValueAtTime(velocity * 0.3, now + 0.01); // Attack
      gainNode.gain.exponentialRampToValueAtTime(velocity * 0.2, now + 0.1); // Decay
      gainNode.gain.setValueAtTime(velocity * 0.2, now + duration - 0.05); // Sustain
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration); // Release
    }

    // Connect audio graph
    if (filterNode) {
      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
    } else {
      oscillator.connect(gainNode);
    }
    gainNode.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
}

/**
 * Play multiple notes simultaneously (chord)
 * @param {Array<number>} midiNotes - Array of MIDI note numbers
 * @param {number} duration - Chord duration in seconds
 * @param {number} velocity - Chord velocity (0-1)
 * @param {Object} options - Synthesis options (passed to playNote)
 */
function playChord(midiNotes, duration = 1.0, velocity = 0.7, options = {}) {
  midiNotes.forEach(note => playNote(note, duration, velocity, options));
}

// ==========================================
// MUSIC THEORY UTILITIES
// ==========================================

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const WHITE_KEYS = [0, 2, 4, 5, 7, 9, 11]; // C, D, E, F, G, A, B
const BLACK_KEYS = [1, 3, 6, 8, 10]; // C#, D#, F#, G#, A#

/**
 * Get note name from MIDI number
 * @param {number} midiNote - MIDI note number
 * @returns {string} - Note name with octave (e.g., "C4")
 */
function getNoteNameFromMidi(midiNote) {
  const octave = Math.floor(midiNote / 12) - 1;
  const noteIndex = midiNote % 12;
  return NOTE_NAMES[noteIndex] + octave;
}

/**
 * Check if MIDI note is a white key
 * @param {number} midiNote - MIDI note number
 * @returns {boolean}
 */
function isWhiteKey(midiNote) {
  return WHITE_KEYS.includes(midiNote % 12);
}

/**
 * Check if MIDI note is in a given scale
 * @param {number} midiNote - MIDI note number
 * @param {string} key - Root note (e.g., "C")
 * @param {string} scale - Scale type (e.g., "Major", "Minor")
 * @returns {boolean}
 */
function isNoteInScale(midiNote, key, scale) {
  const scalePatterns = {
    'Major': [0, 2, 4, 5, 7, 9, 11],
    'Minor': [0, 2, 3, 5, 7, 8, 10],
    'Dorian': [0, 2, 3, 5, 7, 9, 10],
    'Mixolydian': [0, 2, 4, 5, 7, 9, 10]
  };

  const rootIndex = NOTE_NAMES.indexOf(key);
  if (rootIndex === -1) return false;

  const pattern = scalePatterns[scale] || scalePatterns['Major'];
  const noteClass = midiNote % 12;
  const transposedPattern = pattern.map(interval => (rootIndex + interval) % 12);

  return transposedPattern.includes(noteClass);
}

/**
 * Detect chord from array of MIDI notes
 * @param {Array<number>} midiNotes - Array of MIDI note numbers
 * @returns {Object} - { name: "C Major", root: 60, type: "major", inversion: 0 }
 */
function detectChord(midiNotes) {
  if (!midiNotes || midiNotes.length === 0) {
    return { name: "No notes", root: null, type: null, inversion: 0 };
  }

  if (midiNotes.length === 1) {
    return {
      name: getNoteNameFromMidi(midiNotes[0]),
      root: midiNotes[0],
      type: "single",
      inversion: 0
    };
  }

  // Sort notes
  const sorted = [...midiNotes].sort((a, b) => a - b);

  // Get pitch classes (mod 12)
  const pitchClasses = sorted.map(n => n % 12);
  const uniqueClasses = [...new Set(pitchClasses)];

  if (uniqueClasses.length < 2) {
    return {
      name: getNoteNameFromMidi(sorted[0]) + " (unison)",
      root: sorted[0],
      type: "unison",
      inversion: 0
    };
  }

  // Try to detect triads (3 unique pitch classes)
  if (uniqueClasses.length === 3) {
    return detectTriad(sorted, uniqueClasses);
  }

  // Try to detect seventh chords (4 unique pitch classes)
  if (uniqueClasses.length === 4) {
    return detectSeventhChord(sorted, uniqueClasses);
  }

  // Interval or other
  if (uniqueClasses.length === 2) {
    const interval = Math.abs(uniqueClasses[1] - uniqueClasses[0]);
    const intervalNames = {
      1: "minor 2nd", 2: "Major 2nd", 3: "minor 3rd", 4: "Major 3rd",
      5: "Perfect 4th", 6: "Tritone", 7: "Perfect 5th", 8: "minor 6th",
      9: "Major 6th", 10: "minor 7th", 11: "Major 7th"
    };
    return {
      name: intervalNames[interval] || "Interval",
      root: sorted[0],
      type: "interval",
      inversion: 0
    };
  }

  return {
    name: "Unknown chord",
    root: sorted[0],
    type: "unknown",
    inversion: 0
  };
}

/**
 * Detect triad type and inversion
 * @param {Array<number>} sorted - Sorted MIDI notes
 * @param {Array<number>} pitchClasses - Unique pitch classes
 * @returns {Object} - Chord info
 */
function detectTriad(sorted, pitchClasses) {
  // Calculate intervals from bass note
  const bass = sorted[0] % 12;
  const intervals = pitchClasses.map(pc => (pc - bass + 12) % 12).sort((a, b) => a - b);

  // Triad patterns (intervals from root)
  const triadPatterns = {
    'Major': [0, 4, 7],
    'minor': [0, 3, 7],
    'diminished': [0, 3, 6],
    'augmented': [0, 4, 8],
    'sus2': [0, 2, 7],
    'sus4': [0, 5, 7]
  };

  // Check all inversions
  for (let inversion = 0; inversion < 3; inversion++) {
    const rotated = [...intervals];
    for (let i = 0; i < inversion; i++) {
      const first = rotated.shift();
      rotated.push(first);
    }
    const normalized = rotated.map((interval, i) => {
      if (i === 0) return 0;
      let diff = interval - rotated[0];
      if (diff < 0) diff += 12;
      return diff;
    }).sort((a, b) => a - b);

    for (const [type, pattern] of Object.entries(triadPatterns)) {
      if (JSON.stringify(normalized) === JSON.stringify(pattern)) {
        const rootPitchClass = (bass - inversion * (type === 'Major' || type === 'augmented' ? 5 : 5) + 12) % 12;
        const rootNote = NOTE_NAMES[pitchClasses[(3 - inversion) % 3]];
        const chordName = rootNote + " " + type;
        const inversionName = inversion === 0 ? "" : inversion === 1 ? " (1st inv)" : " (2nd inv)";

        return {
          name: chordName + inversionName,
          root: sorted[0],
          type: type.toLowerCase(),
          inversion: inversion
        };
      }
    }
  }

  // Simpler detection: just check root position
  const rootIntervals = intervals;
  for (const [type, pattern] of Object.entries(triadPatterns)) {
    if (JSON.stringify(rootIntervals) === JSON.stringify(pattern)) {
      const rootNote = NOTE_NAMES[bass];
      return {
        name: rootNote + " " + type,
        root: sorted[0],
        type: type.toLowerCase(),
        inversion: 0
      };
    }
  }

  return {
    name: "Unknown triad",
    root: sorted[0],
    type: "unknown",
    inversion: 0
  };
}

/**
 * Detect seventh chord type
 * @param {Array<number>} sorted - Sorted MIDI notes
 * @param {Array<number>} pitchClasses - Unique pitch classes
 * @returns {Object} - Chord info
 */
function detectSeventhChord(sorted, pitchClasses) {
  const bass = sorted[0] % 12;
  const intervals = pitchClasses.map(pc => (pc - bass + 12) % 12).sort((a, b) => a - b);

  const seventhPatterns = {
    'Major 7': [0, 4, 7, 11],
    'Dominant 7': [0, 4, 7, 10],
    'minor 7': [0, 3, 7, 10],
    'minor 7♭5': [0, 3, 6, 10],
    'diminished 7': [0, 3, 6, 9]
  };

  for (const [type, pattern] of Object.entries(seventhPatterns)) {
    if (JSON.stringify(intervals) === JSON.stringify(pattern)) {
      const rootNote = NOTE_NAMES[bass];
      return {
        name: rootNote + " " + type,
        root: sorted[0],
        type: type.toLowerCase(),
        inversion: 0
      };
    }
  }

  return {
    name: "Unknown 7th chord",
    root: sorted[0],
    type: "unknown",
    inversion: 0
  };
}

// ==========================================
// PIANO ROLL STATE
// ==========================================

let pianoRollState = {
  notes: [], // Array of { pitch: 60, start: 0, duration: 4 }
  tempo: 90,
  swing: 0, // Swing amount 0-100
  stepCount: 16,
  bars: 1,
  key: 'C',
  scale: 'Major',
  pitchRange: { low: 36, high: 72 }, // C2 to C5 (3 octaves)
  isPlaying: false,
  currentStep: 0,
  // Bass mode synthesis options
  bassMode: false,
  waveform: 'triangle' // Default: triangle for harmony, sawtooth for bass
};

let playbackIntervalId = null;
let lessonValidation = null;
let nextLessonUrl = null;
let lessonKey = null;

// ==========================================
// PIANO ROLL UI CREATION
// ==========================================

/**
 * Initialize piano roll sequencer
 * @param {Object} config - Configuration object from lesson config
 * @param {string} containerId - Container element ID
 */
function initPianoRollSequencer(config, containerId = 'mpl-sequencer-collection') {
  console.log('[PianoRoll] Starting initialization...', { config, containerId });

  const container = document.getElementById(containerId);
  if (!container) {
    console.error('[PianoRoll] Container not found:', containerId);
    console.error('[PianoRoll] Available elements:', document.querySelectorAll('[id]'));
    return;
  }

  console.log('[PianoRoll] Container found:', container);

  // Update state from config
  pianoRollState.tempo = config.sequencer?.tempo || 90;
  pianoRollState.swing = config.sequencer?.swing || 0;
  pianoRollState.stepCount = config.sequencer?.stepCount || 16;
  pianoRollState.bars = config.sequencer?.bars || 1;
  pianoRollState.key = config.sequencer?.key || 'C';
  pianoRollState.scale = config.sequencer?.scale || 'Major';
  pianoRollState.pitchRange = config.sequencer?.pitchRange || { low: 36, high: 72 };
  pianoRollState.bassMode = config.pianoRoll?.bassMode || false;
  pianoRollState.waveform = config.pianoRoll?.waveform || (pianoRollState.bassMode ? 'sawtooth' : 'triangle');
  lessonValidation = config.validation || null;
  nextLessonUrl = config.nextLessonUrl || null;
  lessonKey = config.lessonKey || null;

  console.log('[PianoRoll] State configured:', pianoRollState);
  console.log('[PianoRoll] Navigation:', { nextLessonUrl, lessonKey });

  // Clear container
  container.innerHTML = '';

  // Create piano roll UI
  console.log('[PianoRoll] Creating UI...');
  const pianoRoll = createPianoRollUI();
  console.log('[PianoRoll] UI created:', pianoRoll);

  container.appendChild(pianoRoll);
  console.log('[PianoRoll] UI appended to container');

  // Setup controls
  console.log('[PianoRoll] Setting up controls...');
  setupPianoRollControls();

  // Setup chord display
  console.log('[PianoRoll] Setting up chord display...');
  setupChordDisplay();

  console.log('[PianoRoll] ✓ Initialization complete!', pianoRollState);
}

/**
 * Create the piano roll UI grid
 * @returns {HTMLElement} - Piano roll container
 */
function createPianoRollUI() {
  const container = document.createElement('div');
  container.className = 'piano-roll-container';
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 240, 255, 0.2);
    border-radius: 8px;
    padding: var(--space-md);
    overflow-x: auto;
    max-width: 100%;
  `;

  // Header: Step numbers
  const header = createStepHeader();
  container.appendChild(header);

  // Piano roll grid
  const grid = createPianoGrid();
  container.appendChild(grid);

  return container;
}

/**
 * Create step number header
 * @returns {HTMLElement}
 */
function createStepHeader() {
  const header = document.createElement('div');
  header.className = 'piano-roll-header';
  header.style.cssText = `
    display: flex;
    margin-bottom: var(--space-sm);
    padding-left: 80px;
  `;

  // Step numbers
  const stepsContainer = document.createElement('div');
  stepsContainer.className = 'piano-roll-steps-header';
  stepsContainer.style.cssText = `
    display: flex;
    flex: 1;
    gap: 1px;
  `;

  const stepsPerBeat = pianoRollState.stepCount / 4;
  for (let i = 0; i < pianoRollState.stepCount; i++) {
    const stepNum = document.createElement('div');
    stepNum.className = 'piano-roll-step-number';
    stepNum.textContent = i + 1;
    const isBeat = i % stepsPerBeat === 0;
    stepNum.style.cssText = `
      flex: 1;
      min-width: 32px;
      text-align: center;
      font-size: 11px;
      font-family: var(--font-mono, monospace);
      color: ${isBeat ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.4)'};
      font-weight: ${isBeat ? '700' : '400'};
      box-sizing: border-box;
      border: 1px solid transparent;
    `;
    stepsContainer.appendChild(stepNum);
  }

  header.appendChild(stepsContainer);
  return header;
}

/**
 * Create piano grid with all pitches
 * @returns {HTMLElement}
 */
function createPianoGrid() {
  const grid = document.createElement('div');
  grid.className = 'piano-roll-grid';
  grid.style.cssText = `
    display: flex;
    flex-direction: column-reverse;
    gap: 1px;
  `;

  const { low, high } = pianoRollState.pitchRange;

  // Create row for each pitch (bottom to top: low to high)
  for (let pitch = low; pitch <= high; pitch++) {
    const row = createPianoRow(pitch);
    grid.appendChild(row);
  }

  return grid;
}

/**
 * Create a single piano roll row for one pitch
 * @param {number} pitch - MIDI note number
 * @returns {HTMLElement}
 */
function createPianoRow(pitch) {
  const row = document.createElement('div');
  row.className = 'piano-roll-row';
  row.dataset.pitch = pitch;
  row.style.cssText = `
    display: flex;
    align-items: stretch;
    min-height: 20px;
  `;

  // Piano key label
  const label = createPianoKeyLabel(pitch);
  row.appendChild(label);

  // Grid cells
  const cellsContainer = document.createElement('div');
  cellsContainer.className = 'piano-roll-cells';
  cellsContainer.style.cssText = `
    display: flex;
    flex: 1;
    gap: 1px;
    position: relative;
  `;

  const stepsPerBeat = pianoRollState.stepCount / 4;
  const isInScale = isNoteInScale(pitch, pianoRollState.key, pianoRollState.scale);
  const isWhite = isWhiteKey(pitch);

  for (let step = 0; step < pianoRollState.stepCount; step++) {
    const cell = document.createElement('div');
    cell.className = 'piano-roll-cell';
    cell.dataset.pitch = pitch;
    cell.dataset.step = step;

    const isBeat = step % stepsPerBeat === 0;
    const cellColor = isWhite
      ? (isInScale ? 'rgba(0, 240, 255, 0.05)' : 'rgba(255,255,255,0.02)')
      : (isInScale ? 'rgba(95, 77, 255, 0.08)' : 'rgba(0,0,0,0.2)');

    cell.style.cssText = `
      flex: 1;
      min-width: 32px;
      height: 20px;
      background: ${cellColor};
      border: 1px solid ${isBeat ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255,255,255,0.05)'};
      cursor: pointer;
      transition: all 0.1s ease;
      position: relative;
      box-sizing: border-box;
    `;

    // Click to add/remove note
    cell.addEventListener('click', (e) => {
      toggleNote(pitch, step);
      e.stopPropagation();
    });

    // Hover effect
    cell.addEventListener('mouseenter', () => {
      cell.style.background = isInScale
        ? 'rgba(0, 240, 255, 0.2)'
        : 'rgba(255,255,255,0.1)';
    });
    cell.addEventListener('mouseleave', () => {
      if (!hasNoteAt(pitch, step)) {
        cell.style.background = cellColor;
      }
    });

    cellsContainer.appendChild(cell);
  }

  row.appendChild(cellsContainer);
  return row;
}

/**
 * Create piano key label for a row
 * @param {number} pitch - MIDI note number
 * @returns {HTMLElement}
 */
function createPianoKeyLabel(pitch) {
  const label = document.createElement('div');
  label.className = 'piano-key-label';
  const noteName = getNoteNameFromMidi(pitch);
  const isWhite = isWhiteKey(pitch);
  const isC = (pitch % 12) === 0;

  label.textContent = noteName;
  label.style.cssText = `
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-family: var(--font-mono, monospace);
    font-weight: ${isC ? '700' : '400'};
    color: ${isWhite ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)'};
    background: ${isWhite ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.3)'};
    border-right: 1px solid rgba(0, 240, 255, 0.2);
    cursor: pointer;
    box-sizing: border-box;
  `;

  // Click piano key to preview sound
  label.addEventListener('click', () => {
    playNote(pitch, 0.5, 0.6);
    label.style.background = 'rgba(0, 240, 255, 0.3)';
    setTimeout(() => {
      label.style.background = isWhite ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.3)';
    }, 200);
  });

  return label;
}

// ==========================================
// NOTE MANAGEMENT
// ==========================================

/**
 * Toggle note at specific pitch and step
 * @param {number} pitch - MIDI note number
 * @param {number} step - Step number (0-15)
 */
function toggleNote(pitch, step) {
  const existingIndex = pianoRollState.notes.findIndex(
    n => n.pitch === pitch && n.start === step
  );

  if (existingIndex >= 0) {
    // Remove note
    pianoRollState.notes.splice(existingIndex, 1);
    playNote(pitch, 0.2, 0.4); // Short click sound
  } else {
    // Add note
    pianoRollState.notes.push({
      pitch: pitch,
      start: step,
      duration: 4 // Default 1 beat (4 steps in 16-step grid)
    });
    playNote(pitch, 0.5, 0.6); // Longer preview
  }

  // Re-render notes
  renderNotes();

  // Update chord display
  updateChordDisplay();

  console.log('[PianoRoll] Notes:', pianoRollState.notes);
}

/**
 * Check if note exists at pitch and step
 * @param {number} pitch - MIDI note number
 * @param {number} step - Step number
 * @returns {boolean}
 */
function hasNoteAt(pitch, step) {
  return pianoRollState.notes.some(n => n.pitch === pitch && n.start === step);
}

/**
 * Render all notes on the grid
 */
function renderNotes() {
  // Clear existing note visuals
  document.querySelectorAll('.piano-roll-note').forEach(el => el.remove());

  // Render each note
  pianoRollState.notes.forEach(note => {
    renderNote(note);
  });

  // Update cell backgrounds
  document.querySelectorAll('.piano-roll-cell').forEach(cell => {
    const pitch = parseInt(cell.dataset.pitch);
    const step = parseInt(cell.dataset.step);
    const isWhite = isWhiteKey(pitch);
    const isInScale = isNoteInScale(pitch, pianoRollState.key, pianoRollState.scale);

    if (hasNoteAt(pitch, step)) {
      cell.style.background = 'linear-gradient(135deg, #ff5a3d, #ffb28a)';
    } else {
      const cellColor = isWhite
        ? (isInScale ? 'rgba(0, 240, 255, 0.05)' : 'rgba(255,255,255,0.02)')
        : (isInScale ? 'rgba(95, 77, 255, 0.08)' : 'rgba(0,0,0,0.2)');
      cell.style.background = cellColor;
    }
  });
}

/**
 * Setup note interactions: resize, move pitch, and delete
 * @param {HTMLElement} noteBar - Note bar element
 * @param {HTMLElement} leftHandle - Left resize handle
 * @param {HTMLElement} rightHandle - Right resize handle
 * @param {Object} note - Note object reference
 * @param {number} cellWidth - Width of one grid cell
 */
function setupNoteInteractions(noteBar, leftHandle, rightHandle, note, cellWidth) {
  let isResizing = false;
  let isDraggingPitch = false;
  let resizeMode = null; // 'left' or 'right'
  let startX = 0;
  let startY = 0;
  let startNoteStart = 0;
  let startNoteDuration = 0;
  let startNotePitch = 0;
  let hasMoved = false;

  // Prevent context menu
  noteBar.addEventListener('contextmenu', (e) => e.preventDefault());

  // LEFT HANDLE - Move note start position
  leftHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();
    isResizing = true;
    resizeMode = 'left';
    startX = e.clientX;
    startNoteStart = note.start;
    startNoteDuration = note.duration;
  });

  // RIGHT HANDLE - Extend/shorten note
  rightHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();
    isResizing = true;
    resizeMode = 'right';
    startX = e.clientX;
    startNoteStart = note.start;
    startNoteDuration = note.duration;
  });

  // NOTE BODY - Drag to change pitch or click to delete
  noteBar.addEventListener('mousedown', (e) => {
    // Ignore if clicking on handles
    if (e.target.classList.contains('note-resize-handle-left') ||
        e.target.classList.contains('note-resize-handle-right')) {
      return;
    }

    e.stopPropagation();
    e.preventDefault();
    isDraggingPitch = true;
    startX = e.clientX;
    startY = e.clientY;
    startNotePitch = note.pitch;
    hasMoved = false;

    // Visual feedback
    noteBar.style.opacity = '0.7';
    noteBar.style.cursor = 'move';
  });

  // Global mouse move
  const onMouseMove = (e) => {
    if (isResizing) {
      // HORIZONTAL RESIZE
      const deltaX = e.clientX - startX;
      const deltaCells = Math.round(deltaX / cellWidth);

      if (deltaCells === 0) return; // No change

      if (resizeMode === 'left') {
        // Moving the start position
        const newStart = Math.max(0, Math.min(pianoRollState.stepCount - 1, startNoteStart + deltaCells));
        const deltaStart = newStart - startNoteStart;
        const newDuration = Math.max(1, startNoteDuration - deltaStart);

        if (newStart + newDuration <= pianoRollState.stepCount) {
          note.start = newStart;
          note.duration = newDuration;
          renderNotes();
          updateChordDisplay();
        }
      } else if (resizeMode === 'right') {
        // Extending/shortening from the right
        const newDuration = Math.max(1, startNoteDuration + deltaCells);

        if (note.start + newDuration <= pianoRollState.stepCount) {
          note.duration = newDuration;
          renderNotes();
          updateChordDisplay();
        }
      }
    } else if (isDraggingPitch) {
      // VERTICAL PITCH CHANGE
      const deltaY = e.clientY - startY;

      // Check if moved enough to trigger drag (3px threshold)
      if (Math.abs(deltaY) > 3 || Math.abs(e.clientX - startX) > 3) {
        hasMoved = true;
      }

      if (hasMoved && Math.abs(deltaY) > 5) {
        // Find the piano roll row at current mouse Y position
        const newPitch = getPitchAtY(e.clientY);

        if (newPitch !== null && newPitch !== note.pitch) {
          note.pitch = newPitch;
          renderNotes();
          updateChordDisplay();
        }
      }
    }
  };

  // Global mouse up
  const onMouseUp = () => {
    if (isResizing) {
      console.log('[PianoRoll] Note resized:', note);
      isResizing = false;
      resizeMode = null;
    } else if (isDraggingPitch) {
      // Reset visual feedback
      noteBar.style.opacity = '1';
      noteBar.style.cursor = 'pointer';

      if (!hasMoved) {
        // Click without movement = delete
        deleteNote(note);
      } else {
        console.log('[PianoRoll] Note pitch changed:', note);
      }

      isDraggingPitch = false;
      hasMoved = false;
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

/**
 * Get the pitch at a given Y coordinate
 * @param {number} y - Y coordinate in viewport
 * @returns {number|null} - MIDI pitch or null
 */
function getPitchAtY(y) {
  const rows = document.querySelectorAll('.piano-roll-row');
  let closestPitch = null;
  let closestDistance = Infinity;

  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    const rowCenterY = rect.top + rect.height / 2;
    const distance = Math.abs(y - rowCenterY);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestPitch = parseInt(row.dataset.pitch);
    }
  });

  return closestPitch;
}

/**
 * Delete a note from the piano roll
 * @param {Object} note - Note to delete
 */
function deleteNote(note) {
  const index = pianoRollState.notes.findIndex(
    n => n.pitch === note.pitch && n.start === note.start
  );

  if (index >= 0) {
    pianoRollState.notes.splice(index, 1);
    playNote(note.pitch, 0.1, 0.3); // Short click sound
    renderNotes();
    updateChordDisplay();
    console.log('[PianoRoll] Note deleted:', note);
  }
}

/**
 * Render a single note visual
 * @param {Object} note - { pitch, start, duration }
 */
function renderNote(note) {
  const row = document.querySelector(`.piano-roll-row[data-pitch="${note.pitch}"]`);
  if (!row) return;

  const cellsContainer = row.querySelector('.piano-roll-cells');
  const firstCell = cellsContainer.querySelector(`[data-step="${note.start}"]`);
  if (!firstCell) return;

  // Calculate position and width based on grid
  const cellWidth = firstCell.offsetWidth;
  const cellHeight = firstCell.offsetHeight;
  const left = firstCell.offsetLeft;
  const width = cellWidth * note.duration;

  // Create visual note bar
  const noteBar = document.createElement('div');
  noteBar.className = 'piano-roll-note';
  noteBar.dataset.pitch = note.pitch;
  noteBar.dataset.start = note.start;
  noteBar.dataset.duration = note.duration;

  noteBar.style.cssText = `
    position: absolute;
    left: ${left}px;
    top: 0;
    width: ${width}px;
    height: ${cellHeight}px;
    background: linear-gradient(135deg, rgba(255, 90, 61, 0.9), rgba(255, 178, 138, 0.8));
    border: 2px solid rgba(255, 90, 61, 1);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(255, 90, 61, 0.4);
    cursor: pointer;
    user-select: none;
    z-index: 10;
  `;

  // LEFT RESIZE HANDLE - Move note start position
  const leftHandle = document.createElement('div');
  leftHandle.className = 'note-resize-handle-left';
  leftHandle.style.cssText = `
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    cursor: ew-resize;
    border-radius: 4px 0 0 4px;
    transition: background 0.1s;
    z-index: 12;
  `;
  leftHandle.addEventListener('mouseenter', () => {
    leftHandle.style.background = 'rgba(255, 255, 255, 0.6)';
  });
  leftHandle.addEventListener('mouseleave', () => {
    leftHandle.style.background = 'rgba(255, 255, 255, 0.3)';
  });

  // RIGHT RESIZE HANDLE - Extend/shorten note duration
  const rightHandle = document.createElement('div');
  rightHandle.className = 'note-resize-handle-right';
  rightHandle.style.cssText = `
    position: absolute;
    right: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    cursor: ew-resize;
    border-radius: 0 4px 4px 0;
    transition: background 0.1s;
    z-index: 12;
  `;
  rightHandle.addEventListener('mouseenter', () => {
    rightHandle.style.background = 'rgba(255, 255, 255, 0.6)';
  });
  rightHandle.addEventListener('mouseleave', () => {
    rightHandle.style.background = 'rgba(255, 255, 255, 0.3)';
  });

  noteBar.appendChild(leftHandle);
  noteBar.appendChild(rightHandle);

  cellsContainer.style.position = 'relative';
  cellsContainer.appendChild(noteBar);

  // Setup interactions
  setupNoteInteractions(noteBar, leftHandle, rightHandle, note, cellWidth);
}

// ==========================================
// PLAYBACK
// ==========================================

/**
 * Start piano roll playback
 */
function startPlayback() {
  if (pianoRollState.isPlaying) return;

  pianoRollState.isPlaying = true;
  pianoRollState.currentStep = 0;

  const stepDuration = (60 / pianoRollState.tempo) * (4 / pianoRollState.stepCount) * 1000;

  playbackIntervalId = setInterval(() => {
    // Highlight current step
    highlightCurrentStep(pianoRollState.currentStep);

    // Play notes that start at this step
    const notesToPlay = pianoRollState.notes.filter(n => n.start === pianoRollState.currentStep);
    if (notesToPlay.length > 0) {
      // Calculate note duration in seconds based on BPM and note length
      const stepsPerBeat = pianoRollState.stepCount / 4; // 16 steps = 4 beats
      const secondsPerBeat = 60 / pianoRollState.tempo;

      // Calculate swing delay for offbeat notes
      const isOffbeat = pianoRollState.currentStep % 2 === 1;
      const swingDelay = isOffbeat ? (pianoRollState.swing / 100) * (stepDuration / 2000) : 0;

      notesToPlay.forEach(note => {
        const noteDurationInBeats = note.duration / stepsPerBeat;
        const noteDurationInSeconds = noteDurationInBeats * secondsPerBeat;

        // Apply swing delay
        const synthOptions = {
          bassMode: pianoRollState.bassMode,
          waveform: pianoRollState.waveform
        };

        if (swingDelay > 0) {
          setTimeout(() => {
            playNote(note.pitch, noteDurationInSeconds, 0.6, synthOptions);
          }, swingDelay * 1000);
        } else {
          playNote(note.pitch, noteDurationInSeconds, 0.6, synthOptions);
        }
      });
    }

    // Advance step
    pianoRollState.currentStep++;
    if (pianoRollState.currentStep >= pianoRollState.stepCount) {
      pianoRollState.currentStep = 0;
    }
  }, stepDuration);
}

/**
 * Stop piano roll playback
 */
function stopPlayback() {
  pianoRollState.isPlaying = false;
  if (playbackIntervalId) {
    clearInterval(playbackIntervalId);
    playbackIntervalId = null;
  }

  // Clear step highlights
  document.querySelectorAll('.piano-roll-cell').forEach(cell => {
    cell.style.outline = '';
  });
}

/**
 * Highlight current playback step
 * @param {number} step - Current step number
 */
function highlightCurrentStep(step) {
  // Clear previous highlights
  document.querySelectorAll('.piano-roll-cell').forEach(cell => {
    cell.style.outline = '';
  });

  // Highlight current step column
  document.querySelectorAll(`.piano-roll-cell[data-step="${step}"]`).forEach(cell => {
    cell.style.outline = '2px solid var(--accent-cyan)';
    cell.style.outlineOffset = '-1px';
  });
}

// ==========================================
// CHORD DETECTION & DISPLAY
// ==========================================

/**
 * Setup chord display UI
 */
function setupChordDisplay() {
  const existingDisplay = document.getElementById('piano-roll-chord-display');
  if (existingDisplay) return;

  const display = document.createElement('div');
  display.id = 'piano-roll-chord-display';
  display.style.cssText = `
    margin-top: var(--space-md);
    padding: var(--space-md);
    background: linear-gradient(135deg, rgba(95,77,255,0.1), rgba(138,155,255,0.05));
    border: 2px solid rgba(95,77,255,0.3);
    border-radius: 8px;
    text-align: center;
  `;

  const label = document.createElement('div');
  label.style.cssText = `
    font-size: 0.85rem;
    color: rgba(255,255,255,0.6);
    margin-bottom: var(--space-xs);
    text-transform: uppercase;
    letter-spacing: 1px;
  `;
  label.textContent = 'Current Chord';

  const chordName = document.createElement('div');
  chordName.id = 'chord-name-display';
  chordName.style.cssText = `
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-primary);
    font-family: var(--font-mono, monospace);
  `;
  chordName.textContent = 'No notes';

  display.appendChild(label);
  display.appendChild(chordName);

  const container = document.getElementById('mpl-sequencer-section');
  if (container) {
    container.appendChild(display);
  }
}

/**
 * Update chord display based on current notes
 */
function updateChordDisplay() {
  const chordNameEl = document.getElementById('chord-name-display');
  if (!chordNameEl) return;

  // Get all simultaneous notes (notes at step 0 for simplicity, or first beat)
  const simultaneousNotes = pianoRollState.notes
    .filter(n => n.start === 0)
    .map(n => n.pitch);

  if (simultaneousNotes.length === 0) {
    // Check if any notes exist
    const allPitches = [...new Set(pianoRollState.notes.map(n => n.pitch))];
    if (allPitches.length > 0) {
      const chord = detectChord(allPitches);
      chordNameEl.textContent = chord.name;
    } else {
      chordNameEl.textContent = 'No notes';
    }
  } else {
    const chord = detectChord(simultaneousNotes);
    chordNameEl.textContent = chord.name;
  }
}

// ==========================================
// CONTROLS
// ==========================================

/**
 * Setup piano roll control buttons
 */
function setupPianoRollControls() {
  // Play button
  const playBtn = document.getElementById('mpl-seq-play-all');
  if (playBtn) {
    playBtn.onclick = () => {
      if (!pianoRollState.isPlaying) {
        startPlayback();
        playBtn.textContent = '⏸ Pause';
      } else {
        stopPlayback();
        playBtn.textContent = '▶ Play';
      }
    };
  }

  // Stop button
  const stopBtn = document.getElementById('mpl-seq-stop-all');
  if (stopBtn) {
    stopBtn.onclick = () => {
      stopPlayback();
      pianoRollState.currentStep = 0;
      if (playBtn) playBtn.textContent = '▶ Play';
    };
  }

  // Clear button
  const clearBtn = document.getElementById('mpl-seq-clear-all');
  if (clearBtn) {
    clearBtn.onclick = () => {
      pianoRollState.notes = [];
      renderNotes();
      updateChordDisplay();
    };
  }

  // Check exercise button
  const checkBtn = document.getElementById('mpl-seq-check-all');
  if (checkBtn) {
    checkBtn.onclick = () => {
      validateExercise();
    };
  }

  // Next lesson button
  const nextBtn = document.getElementById('mpl-next-lesson');
  const statusEl = document.getElementById('mpl-seq-status');

  if (nextBtn && nextLessonUrl) {
    nextBtn.addEventListener('click', () => {
      window.location.href = nextLessonUrl;
    });

    // Check if already completed
    try {
      if (lessonKey && localStorage.getItem(lessonKey) === 'completed') {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.title = '';
        if (statusEl) {
          statusEl.innerHTML = '<span style="color: var(--accent-green);">✓ You\'ve already completed this exercise. Feel free to practice or move to the next lesson!</span>';
        }
      }
    } catch (e) {
      console.warn('[PianoRoll] localStorage error:', e);
    }
  }
}

// ==========================================
// VALIDATION
// ==========================================

/**
 * Validate exercise against lesson requirements
 */
function validateExercise() {
  if (!lessonValidation) {
    console.warn('[PianoRoll] No validation config');
    return;
  }

  const statusEl = document.getElementById('mpl-seq-status');
  const nextBtn = document.getElementById('mpl-next-lesson');

  // Check if required notes/chords are present
  if (lessonValidation.type === 'exact_chord') {
    const required = lessonValidation.requiredNotes;
    const notesAtTime = pianoRollState.notes
      .filter(n => n.start === required.time)
      .map(n => n.pitch)
      .sort((a, b) => a - b);

    const requiredSorted = [...required.pitches].sort((a, b) => a - b);

    if (JSON.stringify(notesAtTime) === JSON.stringify(requiredSorted)) {
      // Success!
      if (statusEl) {
        statusEl.innerHTML = '<span style="color: var(--accent-green);">✓ Perfect! You built the chord correctly. You can now proceed to the next lesson!</span>';
      }
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.title = '';
      }

      // Mark lesson as complete
      if (lessonKey) {
        try {
          localStorage.setItem(lessonKey, 'completed');
          console.log('[PianoRoll] Lesson marked as completed:', lessonKey);
        } catch (e) {
          console.warn('[PianoRoll] Could not save progress:', e);
        }
      }

      // Play success chord
      playChord(required.pitches, 1.0, 0.7);
    } else {
      // Not correct
      if (statusEl) {
        statusEl.innerHTML = '<span style="color: var(--accent-red);">✗ Not quite. Check the required notes.</span>';
      }
    }
  }
}

// ==========================================
// EXPORTS
// ==========================================

export {
  initPianoRollSequencer,
  pianoRollState,
  playNote,
  playChord,
  detectChord,
  getNoteNameFromMidi
};
