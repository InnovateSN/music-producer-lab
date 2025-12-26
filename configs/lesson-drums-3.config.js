/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 3 - Hi-hats in 1/8 (Feel Subdivisions)
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson3-progress",
  lessonNumber: 3,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-4.html",
  prevLessonUrl: "lesson-drums-2.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Drum pattern" }),
    title: "Hi-hats in 1/8:",
    titleHighlight: "feel subdivisions",
    subtitle: "Program hi-hats on every eighth note to hear the & subdivisions (<span class=\"nowrap\">1 & 2 & 3 & 4 &</span>)."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Add Hi-Hats on Eighth Notes",
    description: "Time to add <strong>hi-hats</strong> playing eighth notes (1 & 2 & 3 & 4 &). This fills in the space between kicks and makes the groove feel more energetic.",
    tip: "Count '1 & 2 & 3 & 4 &' - the hi-hat plays on every number AND every '&'!",
    steps: [
      { text: "<strong>Kick row:</strong> Steps <strong>1, 5, 9, 13</strong> (quarter notes)." },
      { text: "<strong>Snare row:</strong> Steps <strong>5 and 13</strong> (backbeat)." },
      { text: "<strong>Hi-Hat row:</strong> Click <strong>every odd step: 1, 3, 5, 7, 9, 11, 13, 15</strong>." },
      { text: "The hi-hats play twice as fast as the kick, creating the \"pulse\" of the beat." }
    ]
  },
  
  // ====================
  // INSTRUMENTS CONFIG
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Kick: 4 on the floor pattern (locked from L2).",
      patternHint: { label: "Kick" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#5f4dff,#8a9bff)",
      targetSteps: [4, 12],
      instructionText: "Snare: Backbeat on 2 and 4 (locked from L2).",
      patternHint: { label: "Snare" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg,#00d4ff,#b8ffdd)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "Hi-Hat: Program the eighth-note pattern (1 & 2 & 3 & 4 &). It should hit every odd step.",
      patternHint: { label: "Hi-Hat" }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Hi-hat on every eighth note: steps 1, 3, 5, 7, 9, 11, 13, 15"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Add hi-hats on eighth notes to unlock the next lesson.",
    success: "🎉 Correct! You've mastered eighth-note hi-hats. Proceed to the next lesson.",
    error: "Not quite right. Check that hi-hats are on all odd steps (1, 3, 5, 7, 9, 11, 13, 15)!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
