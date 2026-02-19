/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 3 - Simple Bassline:
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-3-progress",
  lessonNumber: 3,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-4.html",
  prevLessonUrl: "lesson-bass-2.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Bass & Low End" }),
    title: "Simple Bassline:",
    titleHighlight: "Stepwise Motion",
    subtitle: "Create your first moving bassline. Use stepwise motion (neighboring notes) to build smooth, musical bass patterns that connect different chords and create forward momentum."
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
    title: "Build a Stepwise Bassline",
    description: "Stepwise motion means moving to neighboring notes (C → D → E) rather than jumping large intervals. This creates smooth, singable basslines that feel natural and musical.",
    tip: "Stepwise basslines are easier to follow and remember. They sound 'vocal' because they move like a singer would.",
    steps: ['Place <strong>C3 on step 1</strong> (root note).', 'Add <strong>D3 on step 5</strong> (one step up).', 'Add <strong>E3 on step 9</strong> (another step up).', 'Add <strong>F3 on step 13</strong> (final step up).', 'Listen to the smooth ascending motion, then click <strong>Check Exercise</strong>.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'Stepwise vs Skip Motion', 'content': '**Stepwise motion**: Moving to adjacent scale degrees (C→D, D→E)\n- Smooth, easy to follow\n- Vocal, singable quality\n- Creates gentle momentum\n\n**Skip motion**: Jumping intervals (C→E, C→G)\n- More dramatic\n- Can sound jumpy or disconnected\n- Requires careful use\n\nMost great basslines use primarily stepwise motion with occasional skips for emphasis.'}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 0, 'duration': 1}, {'pitch': 50, 'step': 4, 'duration': 1}, {'pitch': 52, 'step': 8, 'duration': 1}, {'pitch': 53, 'step': 12, 'duration': 1}],
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
    "Understand core concepts in bass 3",
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
