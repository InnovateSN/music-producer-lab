/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 5 - Write the Pop Loop: I–V–vi–IV
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-5-progress",
  lessonNumber: 5,
  lessonCategory: "Chord Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-6.html",
  prevLessonUrl: "lesson-harmony-4.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Harmony & Melody" }),
    title: "Write the Pop Loop:",
    titleHighlight: "I–V–vi–IV",
    subtitle: "Build the modern hit-style progression (C–G–Am–F) that powers thousands of pop songs. This four-chord loop creates an endless, emotionally satisfying cycle that listeners can't get enough of. Learn why this specific sequence became the backbone of contemporary songwriting."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 95,
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
    title: "Build the I–V–vi–IV Pop Progression",
    description: "The <strong>I–V–vi–IV</strong> is the most popular chord progression in modern pop music. You'll build <strong>C (I) → G (V) → Am (vi) → F (IV)</strong> - a sequence that creates an infinitely loopable, emotionally engaging cycle used in thousands of hit songs.",
    tip: "The vi chord (Am) adds emotional depth with its minor quality. When this loops back to I (C major), the cycle feels natural and endless - perfect for repeating song sections.",
    steps: [
      { text: "Bar 1: Place <strong>C major (I)</strong> - C4, E4, G4 (bright start)" },
      { text: "Bar 2: Place <strong>G major (V)</strong> - G4, B4, D5 (energy)" },
      { text: "Bar 3: Place <strong>A minor (vi)</strong> - A4, C5, E5 (emotional depth)" },
      { text: "Bar 4: Place <strong>F major (IV)</strong> - F4, A4, C5 (supportive lift)" },
      { text: "Loop all 4 bars and hear the endless cycle" },
      { text: "Notice how the minor chord (Am) adds contrast and emotion" }
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
        pitches: [67, 71, 74],  // G4, B4, D5
        time: 16,  // Bar 2
        function: "dominant"
      },
      {
        name: "A Minor (vi)",
        pitches: [69, 72, 76],  // A4, C5, E5
        time: 32,  // Bar 3
        function: "relative_minor"
      },
      {
        name: "F Major (IV)",
        pitches: [65, 69, 72],  // F4, A4, C5
        time: 48,  // Bar 4
        function: "subdominant"
      }
    ],
    allowInversions: false,
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build the I–V–vi–IV pop progression (C → G → Am → F) for an infinitely loopable cycle.",
    success: "Amazing! You've built the most popular progression in modern pop. You now have the foundation for countless hit songs.",
    error: "Check your progression: Bar 1 = C-E-G (I), Bar 2 = G-B-D (V), Bar 3 = A-C-E (vi), Bar 4 = F-A-C (IV)."
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
