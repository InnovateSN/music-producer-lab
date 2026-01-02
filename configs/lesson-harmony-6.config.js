/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 6 - Melody from Chord Tones
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-6-progress",
  lessonNumber: 6,
  lessonCategory: "Melody Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-7.html",
  prevLessonUrl: "lesson-harmony-5.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Harmony & Melody" }),
    title: "Melody from",
    titleHighlight: "Chord Tones",
    subtitle: "Write a simple melody that 'fits' perfectly by targeting chord tones. You'll create melodic lines using only the notes from each chord (root, third, fifth), ensuring every note harmonizes beautifully. This teaches you the safest, most effective way to write melodies over any progression."
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
      low: 60,  // C4
      high: 84  // C6 (for melody range)
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Write a Chord Tone Melody",
    description: "Create a melody using <strong>only chord tones</strong> (1-3-5 of each chord). Over the I–V–vi–IV progression, you'll write at least 8 melody notes that harmonize perfectly because they're all part of the underlying chords.",
    tip: "Start simple - use quarter notes or 8th notes with a clear rhythm. Aim for chord tones on strong beats (beats 1 and 3) for maximum stability.",
    steps: [
      { text: "Set up your I–V–vi–IV progression from Lesson 5 (C–G–Am–F)" },
      { text: "Bar 1 (C major): Write melody notes using <strong>only C, E, or G</strong>" },
      { text: "Bar 2 (G major): Write melody notes using <strong>only G, B, or D</strong>" },
      { text: "Bar 3 (A minor): Write melody notes using <strong>only A, C, or E</strong>" },
      { text: "Bar 4 (F major): Write melody notes using <strong>only F, A, or C</strong>" },
      { text: "Create at least <strong>8 total melody notes</strong> (2 per bar minimum)" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "melody_with_harmony",
    chordProgression: [
      { name: "C", pitches: [60, 64, 67], time: 0 },
      { name: "G", pitches: [67, 71, 74], time: 16 },
      { name: "Am", pitches: [69, 72, 76], time: 32 },
      { name: "F", pitches: [65, 69, 72], time: 48 }
    ],
    melodyRules: {
      minNotes: 8,
      mustUseChordTonesOnly: true,
      allowedNotesPerBar: [
        { bar: 1, notes: [60, 64, 67, 72, 76, 79] },  // C, E, G (multiple octaves)
        { bar: 2, notes: [62, 67, 71, 74, 79, 83] },  // D, G, B (multiple octaves)
        { bar: 3, notes: [64, 69, 72, 76, 81, 84] },  // E, A, C (multiple octaves)
        { bar: 4, notes: [60, 65, 69, 72, 77, 81] }   // C, F, A (multiple octaves)
      ],
      strongBeatPreference: "chord_tones"
    }
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Write a melody using only chord tones (1-3-5 of each chord) over your progression.",
    success: "🎉 Perfect! You've written a melody that harmonizes beautifully. You understand how chord tones create stable, fitting melodies.",
    error: "Check that all your melody notes are chord tones: Bar 1 (C/E/G), Bar 2 (G/B/D), Bar 3 (A/C/E), Bar 4 (F/A/C)."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "placeholder"
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
