/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 9 - Create Pull: Dominant 7
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-9-progress",
  lessonNumber: 9,
  lessonCategory: "Advanced Harmony",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-10.html",
  prevLessonUrl: "lesson-harmony-8.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Harmony & Melody" }),
    title: "Create Pull:",
    titleHighlight: "Dominant 7",
    subtitle: "Master the G7 chord - the most powerful tension-and-release tool in harmony. You'll learn how dominant 7th chords (G7) create an irresistible pull to resolve back home (C). This is the secret behind satisfying chord progressions in pop, blues, jazz, and virtually all Western music."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 100,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,  // C3
      high: 84  // C6
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a G7 → C Resolution",
    description: "Create a chord progression that uses <strong>G7 (G-B-D-F)</strong> to create tension, then resolves to <strong>Cmaj7 (C-E-G-B)</strong> for satisfaction. This V7 → I resolution is the foundation of musical tension and release. You'll feel the 'pull' when G7 wants to resolve to C.",
    tip: "The magic is in the notes: G7 contains F (wants to fall to E) and B (wants to rise to C). These two notes create tension that demands resolution. Listen for how satisfying it feels when G7 finally resolves to C!",
    steps: [
      { text: "Bar 1: Build <strong>Cmaj7</strong> (C-E-G-B) - the home chord" },
      { text: "Bar 2: Build <strong>Am7</strong> (A-C-E-G) - smooth minor chord" },
      { text: "Bar 3: Build <strong>G7</strong> (G-B-D-F) - the tension chord!" },
      { text: "Bar 4: Resolve back to <strong>Cmaj7</strong> (C-E-G-B) - satisfaction!" },
      { text: "Make all chords <strong>2 beats long</strong>" },
      { text: "Listen to how bar 3 (G7) creates tension that bar 4 (C) releases" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "exact_chord_sequence",
    requiredChords: [
      {
        time: 0,
        pitches: [60, 64, 67, 71],  // Cmaj7: C4, E4, G4, B4
        chordName: "Cmaj7",
        allowInversions: false
      },
      {
        time: 16,
        pitches: [69, 72, 76, 79],  // Am7: A4, C5, E5, G5
        chordName: "Am7",
        allowInversions: false
      },
      {
        time: 32,
        pitches: [67, 71, 74, 77],  // G7: G4, B4, D5, F5
        chordName: "G7",
        allowInversions: false
      },
      {
        time: 48,
        pitches: [60, 64, 67, 71],  // Cmaj7: C4, E4, G4, B4 (resolution!)
        chordName: "Cmaj7",
        allowInversions: false
      }
    ],
    simultaneous: true,
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build the progression: Cmaj7 → Am7 → G7 → Cmaj7. Listen for how G7 creates tension that demands resolution.",
    success: "Perfect! You've mastered the dominant 7th resolution. This V7 → I movement is the engine that drives thousands of songs. Now you understand functional harmony!",
    error: "Check: Cmaj7 = C-E-G-B, Am7 = A-C-E-G, G7 = G-B-D-F. Make sure G7 (bar 3) uses F (not F#) for the flat seventh that creates tension."
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
