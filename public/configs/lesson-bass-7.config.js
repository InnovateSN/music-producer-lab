/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 7 - Sidechain Compression Basics
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-7-progress",
  lessonNumber: 7,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-8.html",
  prevLessonUrl: "lesson-bass-6.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Bass & Low End" }),
    title: "Sidechain Compression Basics",
    titleHighlight: "",
    subtitle: "Learn why bass 'ducks' when the kick hits. Program patterns designed for sidechain compression to avoid mud and create the pumping effect that defines modern electronic music."
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
    title: "Bass Pattern for Sidechain",
    description: "Sidechain compression automatically reduces bass volume when kick hits, preventing frequency masking. You'll create a pattern that works perfectly with this technique.",
    tip: "Even without actual sidechain compression, programming bass to leave space for kick creates a cleaner mix.",
    steps: ["Place bass notes on the <strong>'and' of each beat (steps 2, 6, 10, 14)</strong>.", 'Leave beats 1, 5, 9, 13 empty for kick.', "Play and hear how bass and kick don't clash.", "This creates the 'pumping' rhythm even without compression."]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'What Is Sidechain Compression?', 'content': "Sidechain compression uses the kick drum to trigger volume reduction in the bass:\n\n**Without sidechain:** Kick + Bass play together → Mud, phase issues\n**With sidechain:** Kick hits → Bass ducks → Kick cuts through clearly\n\nThis creates the 'pumping' effect in EDM, house, techno. The bass seems to 'breathe' with the kick pattern."}, {'title': 'Programming for Sidechain', 'content': "Even if you don't have compression, you can program bass to work like it's sidechained:\n\n- Place bass notes BETWEEN kick hits\n- Use shorter note durations\n- Leave the downbeats (1, 5, 9, 13) for kick\n\nThis arrangement technique achieves similar results through timing alone."}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 1, 'duration': 1}, {'pitch': 48, 'step': 5, 'duration': 1}, {'pitch': 48, 'step': 9, 'duration': 1}, {'pitch': 48, 'step': 13, 'duration': 1}],
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
