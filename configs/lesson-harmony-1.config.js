/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 1 - Build Your First Chord: Major Triad
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-1-progress",
  lessonNumber: 1,
  lessonCategory: "Chord Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-2.html",
  prevLessonUrl: "labs.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Harmony & Melody" }),
    title: "Build Your First Chord:",
    titleHighlight: "Major Triad",
    subtitle: "Stack three notes on the same beat and hear a real chord instantly. You'll create a C major triad (C-E-G) and understand the root-third-fifth structure that unlocks all major chords. This single pattern is the foundation of harmony in pop, house, and most modern production."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  // Note: Interactive piano roll sequencer is not yet implemented
  // This config is prepared for future integration
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 16,
    bars: 1,
    // Piano roll specific settings (for future implementation)
    pitchRange: {
      low: 48,  // C3
      high: 72  // C5 (2 octaves)
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a C Major Triad",
    description: "A <strong>triad</strong> is three notes played simultaneously. The C major triad uses <strong>C (root), E (third), and G (fifth)</strong>. When stacked on the same beat, these notes create a bright, stable chord that sounds 'complete.' This is the same chord structure used in thousands of songs across all genres.",
    tip: "In your DAW's piano roll, make sure all three notes (C-E-G) start at exactly the same time position. If they're even slightly offset, it won't sound like a proper chord.",
    steps: [
      { text: "Open a MIDI track in your DAW with a piano or synth instrument" },
      { text: "Find <strong>middle C (C4)</strong> in your piano roll editor" },
      { text: "Place three notes at the <strong>same time position</strong>: C4, E4, and G4" },
      { text: "Make sure they're <strong>stacked vertically</strong> - this means they play simultaneously" },
      { text: "Set each note duration to 1-2 bars so you can hear them sustain" },
      { text: "Press <strong>Play</strong> and listen to your first chord!" }
    ]
  },

  // ====================
  // NOTES/CHORD CONFIG (for future piano roll validation)
  // ====================
  validation: {
    type: "exact_chord",
    requiredNotes: {
      time: 0,  // Beat 1
      pitches: [60, 64, 67],  // C4, E4, G4 (MIDI note numbers)
      simultaneous: true,
      chordName: "C Major"
    },
    allowInversions: false,  // Lesson 1 teaches root position only
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Practice building the C major triad (C-E-G) in your DAW.",
    success: "🎉 Perfect! You've built your first chord. You now understand the root-third-fifth structure that creates all major triads.",
    error: "Make sure you have exactly C, E, and G playing simultaneously. Check the note positions in your piano roll."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    // Flag to indicate piano roll is not yet implemented
    sequencerType: "placeholder"  // Will be "piano-roll" when implemented
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
