/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 10 - House Loop: Minor to Major Movement
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-10-progress",
  lessonNumber: 10,
  lessonCategory: "Genre Application",

  nextLessonUrl: "lesson-harmony-11.html",
  prevLessonUrl: "lesson-harmony-9.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Harmony & Melody" }),
    title: "House Loop:",
    titleHighlight: "Minor to Major Movement",
    subtitle: "Build a club-ready 4-bar chord loop using seventh chords with smooth voice leading. You'll create the classic house music harmonic pattern - minor to major movement with added melody. This is the signature sound of deep house, tech house, and melodic techno."
  },

  sequencer: {
    tempo: 124,
    key: "A",
    scale: "Minor",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build a House Chord Loop with Melody",
    description: "Create a 4-bar loop using <strong>Am7 → Fmaj7 → Cmaj7 → Em7</strong> with a simple topline melody. This progression combines minor and major seventh chords for that smooth, hypnotic house vibe. Add a melody that targets chord tones on strong beats.",
    tip: "House music chord loops are all about repetition and groove. Keep chords sustained (2-4 beats each), use seventh chords for smoothness, and add a simple repeating melody that locks with the harmony. The vi→IV→I→iii pattern creates perpetual motion - it loops perfectly!",
    steps: [
      { text: "Bar 1: Build <strong>Am7</strong> (A-C-E-G) sustained for 4 beats" },
      { text: "Bar 2: Build <strong>Fmaj7</strong> (F-A-C-E) sustained for 4 beats" },
      { text: "Bar 3: Build <strong>Cmaj7</strong> (C-E-G-B) sustained for 4 beats" },
      { text: "Bar 4: Build <strong>Em7</strong> (E-G-B-D) sustained for 4 beats" },
      { text: "Add a simple melody (8-12 notes) targeting <strong>chord tones on beats 1 and 3</strong>" },
      { text: "Listen for the smooth, hypnotic loop - perfect for house music!" }
    ]
  },

  validation: {
    type: "chord_progression_with_melody",
    requiredChords: [
      { time: 0, pitches: [69, 72, 76, 79], chordName: "Am7", allowInversions: false },
      { time: 16, pitches: [65, 69, 72, 76], chordName: "Fmaj7", allowInversions: false },
      { time: 32, pitches: [60, 64, 67, 71], chordName: "Cmaj7", allowInversions: false },
      { time: 48, pitches: [64, 67, 71, 74], chordName: "Em7", allowInversions: false }
    ],
    melody: {
      minNotes: 8,
      maxNotes: 16,
      strongBeats: [0, 8, 16, 24, 32, 40, 48, 56],
      strongBeatsMustUseChordTones: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build the house loop: Am7 → Fmaj7 → Cmaj7 → Em7. Add a melody targeting chord tones on beats 1 and 3.",
    success: "🎉 Perfect! You've created a classic house chord progression. Notice how it loops seamlessly - this pattern is used in thousands of deep house and melodic techno tracks!",
    error: "Check: Am7 = A-C-E-G, Fmaj7 = F-A-C-E, Cmaj7 = C-E-G-B, Em7 = E-G-B-D. Melody should have 8-12 notes with chord tones on strong beats."
  }),

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
