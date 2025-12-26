/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 1 - 4 on the floor
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson1-progress",
  lessonNumber: 1,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-2.html",
  prevLessonUrl: null,
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Drum pattern" }),
    title: "4 on the floor:",
    titleHighlight: "your first full beat",
    subtitle: "In this lesson you build the classic 4 on the floor rhythm and learn what <strong>bars</strong>, <strong>beats</strong> and <strong>subdivisions</strong> (1/4, 1/8, 1/16) are."
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
    title: "Build the 4-on-the-Floor Kick Pattern",
    description: "In this exercise, you'll create the classic <strong>\"4 on the floor\"</strong> kick pattern - the foundation of house, techno, and most dance music.",
    tip: "Think of counting 1-2-3-4. Each number gets a kick drum hit!",
    steps: [
      { text: "<strong>Click on steps 1, 5, 9, and 13</strong> in the Kick row to place your kicks." },
      { text: "These positions correspond to the four beats of the bar (quarter notes)." },
      { text: "Press <strong>Play</strong> to hear your pattern loop." },
      { text: "When satisfied, click <strong>Check Exercise</strong> to verify your answer." }
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
      instructionText: "Exercise — Kick: Place one kick on each beat of the bar (one per quarter note). Work in the 16-step grid where the bar has four beats.",
      patternHint: {
        label: "Kick"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Kick on every beat: steps 1, 5, 9, and 13"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Complete the kick exercise to unlock the next lesson.",
    success: "🎉 Correct! Great job! You can now proceed to the next lesson.",
    error: "Not quite right. Make sure you have kicks on steps 1, 5, 9, and 13!"
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
