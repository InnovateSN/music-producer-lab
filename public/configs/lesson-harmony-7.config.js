/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 7 - Stepwise Melody: Use the Scale
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-7-progress",
  lessonNumber: 7,
  lessonCategory: "Melody Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-8.html",
  prevLessonUrl: "lesson-harmony-6.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Harmony & Melody" }),
    title: "Stepwise Melody:",
    titleHighlight: "Use the Scale",
    subtitle: "Expand beyond chord tones using the C major scale safely. You'll add 'passing tones' between chord tones to create smooth, flowing melodies with professional stepwise motion. This teaches you how to use scale notes as travel notes between your stable anchor points."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 110,
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
    title: "Add Passing Tones for Smooth Melody",
    description: "Create a melody that uses <strong>chord tones on strong beats (1 and 3)</strong> for stability, and <strong>any C major scale note on weak beats</strong> for smooth motion. Passing tones connect chord tones with stepwise movement, creating professional-sounding phrases.",
    tip: "The key is balance: chord tones anchor the melody on important beats, while passing tones create flowing motion between them. This is how pros write singable, memorable melodies.",
    steps: [
      { text: "Set up your I–V–vi–IV progression (C–G–Am–F)" },
      { text: "Rule: <strong>Beats 1 and 3 must use chord tones</strong> for stability" },
      { text: "Rule: <strong>Beats 2, 4, and off-beats can use any C major scale note</strong> (C-D-E-F-G-A-B)" },
      { text: "Create a melody with at least <strong>4 passing tones</strong> total" },
      { text: "Use passing tones to create <strong>stepwise motion</strong> between chord tones" },
      { text: "Listen for smooth, flowing phrases that feel natural and singable" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "melody_with_passing_tones",
    chordProgression: [
      { name: "C", pitches: [60, 64, 67], time: 0 },
      { name: "G", pitches: [67, 71, 74], time: 16 },
      { name: "Am", pitches: [69, 72, 76], time: 32 },
      { name: "F", pitches: [65, 69, 72], time: 48 }
    ],
    scale: {
      key: "C",
      type: "Major",
      notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84]  // C-D-E-F-G-A-B (multiple octaves)
    },
    melodyRules: {
      minNotes: 12,
      minPassingTones: 4,
      strongBeats: [0, 8, 16, 24, 32, 40, 48, 56],  // Beats 1 and 3 of each bar
      strongBeatsMustUseChordTones: true,
      weakBeatsAllowAnyScaleNote: true,
      preferStepwiseMotion: true,
      maxConsecutiveLeaps: 2
    }
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Write a melody using chord tones on strong beats (1 and 3) and any scale note on weak beats. Include at least 4 passing tones.",
    success: "Congratulations! You've completed the beginner harmony and melody lessons. You can now write chord progressions and melodies with professional techniques!",
    error: "Check: Strong beats (1 and 3) should use chord tones. All notes should be from C major scale (C-D-E-F-G-A-B). Include at least 4 passing tones."
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
    "Understand core concepts in harmony 7",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 7",
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
