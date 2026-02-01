/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 6 - Syncopated Kick (Break from 4/4)
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson6-progress",
  lessonNumber: 6,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-drums-5.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Drum pattern" }),
    title: "Syncopated kick:",
    titleHighlight: "break from the 4/4",
    subtitle: "In this lesson the kick does not follow a classic 4 on the floor: we'll use a syncopated pattern that adds extra push and groove."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 110,
    stepCount: 16,
    swing: 0,
    enableVelocity: true, // Enable velocity control for practice
    requiredTempo: 110
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Master Syncopated Kick Patterns",
    description: "Break free from the 4-on-the-floor! <strong>Syncopation</strong> places kicks on unexpected beats, creating that groovy, off-beat feel found in funk, hip-hop, and many electronic genres.",
    tip: "Syncopation = surprise! The kick lands 'between' where you expect it. The steady snare/hi-hat anchors the groove while the kick adds movement.",
    steps: [
      { text: "<strong>Set the tempo to 110 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick row:</strong> Steps <strong>1, 3, 6, 11</strong> - NOT on every beat!" },
      { text: "<strong>Snare row:</strong> Steps <strong>5 and 13</strong> (keep the backbeat steady)." },
      { text: "<strong>Hi-Hat row:</strong> Steps <strong>1, 3, 5, 7, 9, 11, 13, 15</strong> (straight eighths)." },
      { text: "Notice how the kick on steps 3 and 6 creates tension against the snare." }
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
      targetSteps: [0, 2, 5, 10],
      instructionText: "Kick: Program a syncopated pattern on the suggested steps (1, 3, 6, 11). Try to avoid straight quarters.",
      patternHint: {
        label: "Kick",
        highlightSteps: [2, 5, 10]
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#5f4dff,#8a9bff)",
      targetSteps: [4, 12],
      instructionText: "Snare: Keep the backbeat on 2 and 4 (steps 5 & 13).",
      patternHint: { label: "Snare" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg,#00d4ff,#b8ffdd)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "Hi-Hat: Straight eighths to keep the pulse.",
      patternHint: { label: "Hi-Hat" }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Highlighted kicks show syncopated positions - they don't fall on the main beats!"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Master syncopation to complete the drums module!",
    success: "Congratulations! You've completed the Drums module. Explore other categories or practice more!",
    error: "Not quite right. Check the syncopated kick pattern (1, 3, 6, 11) and keep the backbeat steady!"
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
