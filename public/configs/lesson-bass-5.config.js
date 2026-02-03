/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 5 - 808 Bass Basics
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-5-progress",
  lessonNumber: 5,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-6.html",
  prevLessonUrl: "lesson-bass-4.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Bass & Low End" }),
    title: "808 Bass Basics",
    titleHighlight: "",
    subtitle: "Create 808-style bass: sustained low notes with pitch decay. The foundation of trap, hip-hop, and modern bass music. Master the iconic bass sound that dominates contemporary production."
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
    title: "Program an 808 Bass Pattern",
    description: "808 bass is about long, sustained notes that sit below the kick. Unlike house bass (short, punchy), 808s ring out and occupy space. They're the sub-bass foundation of hip-hop and trap.",
    tip: "808s should sustain longer than your kick. Let them ring out to fill the space between hits.",
    steps: ['Place a long <strong>C2 note on step 1</strong> (very low, duration 4 steps).', 'Add <strong>C2 on step 13</strong> for variation (duration 4 steps).', 'Play and feel the heavy, sustained low end.', 'Check exercise when ready.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'What Makes 808 Bass Special', 'content': 'The Roland TR-808 drum machine (1980) had a unique bass drum that producers started using as a bass instrument:\n\n**Characteristics:**\n- Very low pitch (often C1-C2)\n- Long sustain (1-4 beats)\n- Pitch envelope (slight decay)\n- Sub-bass heavy (felt more than heard)\n\n**Modern use:** Hip-hop, trap, future bass, dubstep all use 808-style sustained sub-bass as a foundational element.'}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 36, 'step': 0, 'duration': 4}, {'pitch': 36, 'step': 12, 'duration': 4}],
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
