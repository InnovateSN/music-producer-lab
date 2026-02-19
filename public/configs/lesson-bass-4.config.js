/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 4 - House Bass:
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-4-progress",
  lessonNumber: 4,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-5.html",
  prevLessonUrl: "lesson-bass-3.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Bass & Low End" }),
    title: "House Bass:",
    titleHighlight: "Repetitive Grooves",
    subtitle: "Program the classic house bass pattern: repetitive root notes with rhythmic variation. Master the hypnotic, driving bassline that defines house, techno, and electronic dance music."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 1,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a House Bass Groove",
    description: "House bass is about repetition and groove, not melody. You repeat the same note but create interest through rhythm and emphasis. This hypnotic quality is what makes people dance.",
    tip: "In house music, less is more. One note repeated with the right rhythm is more powerful than a complex melody.",
    steps: ['Place <strong>C3 on steps 1, 5, 9, 13</strong> (on every beat).', "Add <strong>C3 on the 'and' of beat 2 (step 7)</strong> for syncopation.", "Add <strong>C3 on the 'and' of beat 4 (step 15)</strong>.", 'Play and feel the driving, hypnotic groove.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'The House Bass Philosophy', 'content': "House music bass is minimalist by design:\n\n- **Repetition = Hypnosis**: Same note looping creates trance-like state\n- **Rhythm over melody**: Pattern and timing matter more than pitch\n- **Locked with kick**: Bass and kick are one unified element\n- **Space for other elements**: Simple bass leaves room for chords, vocals, effects\n\nThis isn't lazy—it's intentional restraint that serves the dance floor."}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 0, 'duration': 1}, {'pitch': 48, 'step': 4, 'duration': 1}, {'pitch': 48, 'step': 6, 'duration': 1}, {'pitch': 48, 'step': 8, 'duration': 1}, {'pitch': 48, 'step': 12, 'duration': 1}, {'pitch': 48, 'step': 14, 'duration': 1}],
    highlightScale: [48, 50, 52, 53, 55, 57, 59, 60], // C major scale in bass range
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete the bass pattern exercise.",
    success: "Excellent! You've mastered this bass technique.",
    error: "Not quite. Check the target pattern and try again."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    sequencerType: 'piano-roll',
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },


  learningObjectives: [
    "Understand core concepts in bass 4",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],

  // ====================
  // REFERENCE SOURCES
  // ====================
  sourceReferences: [
    {
      name: 'AES (Audio Engineering Society)',
      url: 'https://www.aes.org/',
      usage: 'Audio engineering standards, terminology, and critical-listening best practices'
    },
    {
      name: 'Ableton Live Documentation',
      url: 'https://www.ableton.com/en/manual/',
      usage: 'DAW workflows, production techniques, and practical implementation steps'
    },
    {
      name: 'Wikipedia',
      url: 'https://www.wikipedia.org/',
      usage: 'Historical context, genre evolution, and foundational music theory references'
    }
  ],

};
