/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 4 - 16th-Note Groove (More Movement)
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson4-progress",
  lessonNumber: 4,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-5.html",
  prevLessonUrl: "lesson-drums-3.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Drum pattern" }),
    title: "16th-note groove:",
    titleHighlight: "more movement",
    subtitle: "Add 16th-note hi-hats or selective ghost notes to create movement and variation inside the bar."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    enableVelocity: true // Enable velocity control for practice
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a 16th-Note Hi-Hat Groove",
    description: "Make your beat more energetic by adding <strong>16th-note movement</strong> to the hi-hats. You'll add one extra hi-hat hit to create that modern, danceable feel.",
    tip: "That extra hi-hat on step 8 creates anticipation. It's a small change that makes a big difference!",
    steps: [
      { text: "<strong>Kick row:</strong> Steps <strong>1, 5, 9, 13</strong> (unchanged)." },
      { text: "<strong>Snare row:</strong> Steps <strong>5 and 13</strong> (unchanged)." },
      { text: "<strong>Hi-Hat row:</strong> Start with eighth notes <strong>(1, 3, 5, 7, 9, 11, 13, 15)</strong> then add step <strong>8</strong>." },
      { text: "Step 8 is the 'e' of beat 2 - it adds a subtle push before the snare resolves." }
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
      instructionText: "Kick: 4 on the floor pattern (locked).",
      patternHint: { label: "Kick" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#5f4dff,#8a9bff)",
      targetSteps: [4, 12],
      instructionText: "Snare: Backbeat on 2 and 4 (locked).",
      patternHint: { label: "Snare" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg,#00d4ff,#b8ffdd)",
      targetSteps: [0, 2, 4, 6, 7, 8, 10, 12, 14],
      instructionText: "Hi-Hat: Add selective 16th notes for a more energetic groove. Target: 1, 3, 5, 7, the 'e' of 2 (step 8), 9, 11, 13, 15.",
      patternHint: {
        label: "Hi-Hat",
        highlightSteps: [7]
      }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "The highlighted step 8 is the new 16th-note addition!"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Add 16th-note movement to unlock the next lesson.",
    success: "🎉 Correct! You've added rhythmic movement with 16th notes. Proceed to the next lesson.",
    error: "Not quite right. Remember to add step 8 to your eighth-note hi-hat pattern!"
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
