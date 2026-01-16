/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 4 - Build a Classic: I–IV–V
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-4-progress",
  lessonNumber: 4,
  lessonCategory: "Chord Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-5.html",
  prevLessonUrl: "lesson-harmony-3.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Harmony & Melody" }),
    title: "Build a Classic:",
    titleHighlight: "I–IV–V",
    subtitle: "Program the most common 'song backbone' progression using C, F, and G major chords. The I–IV–V is the foundation of rock, blues, and pop music - literally thousands of songs use these same three chords. This teaches you the chord family that creates complete, satisfying progressions."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,  // C3
      high: 76  // E5
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build the I–IV–V–I Progression",
    description: "The <strong>I–IV–V progression</strong> is the backbone of rock, blues, and pop. You'll build <strong>C major (I), F major (IV), and G major (V)</strong>, then resolve back to C. These three chords work together to create complete musical statements.",
    tip: "Each chord should sustain for one full bar (4 beats). Loop all 4 bars to hear the complete cycle: stable → supportive → tension → resolution.",
    steps: [
      { text: "Bar 1: Place <strong>C major (I)</strong> - C4, E4, G4 (home base)" },
      { text: "Bar 2: Place <strong>F major (IV)</strong> - F4, A4, C5 (supportive movement)" },
      { text: "Bar 3: Place <strong>G major (V)</strong> - G4, B4, D5 (tension)" },
      { text: "Bar 4: Place <strong>C major (I)</strong> - C4, E4, G4 again (resolution)" },
      { text: "Loop all 4 bars and hear the complete journey" },
      { text: "Notice how bar 4 feels like 'arriving home' after the journey" }
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
        name: "F Major (IV)",
        pitches: [65, 69, 72],  // F4, A4, C5
        time: 16,  // Bar 2
        function: "subdominant"
      },
      {
        name: "G Major (V)",
        pitches: [67, 71, 74],  // G4, B4, D5
        time: 32,  // Bar 3
        function: "dominant"
      },
      {
        name: "C Major (I)",
        pitches: [60, 64, 67],  // C4, E4, G4
        time: 48,  // Bar 4
        function: "tonic"
      }
    ],
    allowInversions: false,
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build the I–IV–V–I progression (C → F → G → C) to create a complete musical statement.",
    success: "🎉 Excellent! You've built the most important progression in popular music. You can now create complete songs with just three chords.",
    error: "Check your progression: Bar 1 = C-E-G (I), Bar 2 = F-A-C (IV), Bar 3 = G-B-D (V), Bar 4 = C-E-G (I)."
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
