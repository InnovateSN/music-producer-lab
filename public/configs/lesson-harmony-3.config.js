/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 3 - Feel Tension: I to V
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-3-progress",
  lessonNumber: 3,
  lessonCategory: "Chord Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-4.html",
  prevLessonUrl: "lesson-harmony-2.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Harmony & Melody" }),
    title: "Feel Tension:",
    titleHighlight: "I to V",
    subtitle: "Create a two-chord loop that feels like 'home → pull → home.' You'll build the I (tonic) to V (dominant) progression that drives countless songs. This teaches you how chords don't just sit there - they move with purpose, creating tension and resolution that listeners crave."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 32,
    bars: 2,
    pitchRange: {
      low: 48,  // C3
      high: 74  // D5 (to accommodate higher G chord voicing)
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build I to V (C to G)",
    description: "The <strong>I (tonic)</strong> chord feels stable and complete, while the <strong>V (dominant)</strong> chord creates tension that wants to resolve back to I. Build <strong>C major (I)</strong> in bar 1 and <strong>G major (V)</strong> in bar 2 to hear this fundamental relationship.",
    tip: "When you loop these two chords, the G chord should feel like it's pulling you back to C. If you stop playback on G, it will feel incomplete - that's the tension you're learning to create.",
    steps: [
      { text: "Bar 1 beat 1: Place <strong>C major (I)</strong> - C4, E4, G4" },
      { text: "Make the chord sustain for the full bar (4 beats)" },
      { text: "Bar 2 beat 1: Place <strong>G major (V)</strong> - G4, B4, D5" },
      { text: "Make this chord also sustain for the full bar" },
      { text: "Loop both bars and listen for the <strong>pull</strong> from G back to C" },
      { text: "Try stopping on the G chord - it should feel unresolved" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "chord_progression",
    requiredChords: [
      {
        name: "C Major (I)",
        pitches: [60, 64, 67],  // C4, E4, G4
        time: 0,  // Bar 1
        function: "tonic"
      },
      {
        name: "G Major (V)",
        pitches: [67, 71, 74],  // G4, B4, D5 (or allow [55, 59, 62] for G3, B3, D4)
        time: 16,  // Bar 2 (assuming 16 steps = 1 bar)
        function: "dominant"
      }
    ],
    allowInversions: false,
    allowExtraNotes: false,
    allowAlternateVoicings: true  // Allow G3-B3-D4 as alternative to G4-B4-D5
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build the I to V progression (C major to G major) to hear tension and resolution.",
    success: "Perfect! You've created your first chord progression. You now understand how chords create tension (V) and resolution (I).",
    error: "Check your chords: Bar 1 should have C-E-G (I), and bar 2 should have G-B-D (V). Make sure they're on beat 1 of each bar."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 3",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 3",
        content: `
This lesson focuses on practical workflow and musical intent.
Use the target pattern as a repeatable building block, then adapt it to your genre and arrangement needs.

When practicing, prioritize timing consistency first, then refine tone, dynamics, and variation.
        `
      }
    ]
  },

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
