/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 6 - Walking Basslines
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-6-progress",
  lessonNumber: 6,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-7.html",
  prevLessonUrl: "lesson-bass-5.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Bass & Low End" }),
    title: "Walking Basslines",
    titleHighlight: "",
    subtitle: "Build smooth, walking basslines that move through chord changes. Use passing tones to connect chords musically and create elegant, flowing bass movement."
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
    title: "Create a Walking Bass Line",
    description: "Walking bass creates smooth connection between chords by using scale tones and chromatic passing notes. It's the foundation of jazz, blues, and many pop styles.",
    tip: "Think of walking bass as a smooth path between destinations (chord roots). You're creating a journey, not teleporting.",
    steps: ['Start with <strong>C3 on step 1</strong> (root of C chord).', 'Add <strong>D3 on step 5</strong> (passing tone).', 'Add <strong>E3 on step 9</strong> (passing tone).', 'Add <strong>G3 on step 13</strong> (arrival at G chord root).', 'Listen to the smooth walk from C to G.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'Walking Bass Principles', 'content': '**Goal:** Smooth connection between chord roots\n\n**Techniques:**\n1. Stepwise motion (C→D→E)\n2. Arpeggios (C→E→G from C chord)\n3. Chromatic passing (C→C#→D)\n4. Approach tones (leading tone before target)\n\n**Common pattern:** Root → Scale tone → Passing tone → Next root'}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 0, 'duration': 1}, {'pitch': 50, 'step': 4, 'duration': 1}, {'pitch': 52, 'step': 8, 'duration': 1}, {'pitch': 55, 'step': 12, 'duration': 1}],
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
