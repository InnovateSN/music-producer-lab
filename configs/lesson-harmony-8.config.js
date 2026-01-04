/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 8 - Upgrade to 7ths: Maj7 & Min7
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-8-progress",
  lessonNumber: 8,
  lessonCategory: "Advanced Harmony",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-9.html",
  prevLessonUrl: "lesson-harmony-7.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Harmony & Melody" }),
    title: "Upgrade to 7ths:",
    titleHighlight: "Maj7 & Min7",
    subtitle: "Turn basic three-note triads into lush four-note chords by adding the seventh. You'll learn major 7th (Cmaj7) and minor 7th (Dm7) chords - the smooth, sophisticated sound used in house, R&B, neo-soul, and jazz. This single technique instantly makes your progressions sound more professional and modern."
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
      high: 84  // C6
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build Cmaj7 and Dm7 Chords",
    description: "Create a simple 4-bar progression using <strong>seventh chords</strong> instead of plain triads. You'll build <strong>Cmaj7 (C-E-G-B)</strong> and <strong>Dm7 (D-F-A-C)</strong> by stacking four notes. Seventh chords add warmth, sophistication, and harmonic richness that make your music sound instantly more professional.",
    tip: "The magic of seventh chords is the added note on top. For major 7th (Cmaj7), stack Root-3rd-5th-7th (C-E-G-B). For minor 7th (Dm7), use the same pattern from the minor triad: Root-flat3rd-5th-flat7th (D-F-A-C). Listen for the smooth, jazzy quality.",
    steps: [
      { text: "Bar 1: Build <strong>Cmaj7</strong> by stacking C-E-G-B (all four notes on beat 1)" },
      { text: "Bar 2: Build <strong>Dm7</strong> by stacking D-F-A-C (all four notes on beat 1)" },
      { text: "Bar 3: Build <strong>Em7</strong> by stacking E-G-B-D (all four notes on beat 1)" },
      { text: "Bar 4: Build <strong>Fmaj7</strong> by stacking F-A-C-E (all four notes on beat 1)" },
      { text: "Make all notes <strong>2 beats long</strong> to hear them sustain" },
      { text: "Play and listen for the lush, smooth quality vs basic triads" }
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
        pitches: [62, 65, 69, 72],  // Dm7: D4, F4, A4, C5
        chordName: "Dm7",
        allowInversions: false
      },
      {
        time: 32,
        pitches: [64, 67, 71, 74],  // Em7: E4, G4, B4, D5
        chordName: "Em7",
        allowInversions: false
      },
      {
        time: 48,
        pitches: [65, 69, 72, 76],  // Fmaj7: F4, A4, C5, E5
        chordName: "Fmaj7",
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
    initial: "Build the four seventh chords: Cmaj7 (C-E-G-B), Dm7 (D-F-A-C), Em7 (E-G-B-D), Fmaj7 (F-A-C-E). Stack all four notes vertically.",
    success: "🎉 Excellent! You've mastered seventh chords. Notice how they sound richer and more sophisticated than basic triads. This is the foundation of modern harmony in house, R&B, and jazz.",
    error: "Check each chord: Cmaj7 = C-E-G-B, Dm7 = D-F-A-C, Em7 = E-G-B-D, Fmaj7 = F-A-C-E. Make sure all four notes are stacked vertically on the correct beat."
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
