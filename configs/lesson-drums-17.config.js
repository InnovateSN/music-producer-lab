/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 17 - Odd Time Signatures
 * 
 * This lesson teaches programming drums in odd time signatures like
 * 5/4, 7/8, 9/8, and how to group beats for accessible grooves.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-17-progress",
  lessonNumber: 17,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 9,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-18.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-17", categoryLabel: "Drums & Rhythm" }),
    title: "Odd Time",
    titleHighlight: "Signatures",
    subtitle: "Break from <strong>4/4</strong> with <strong>5/4, 7/8, and other odd meters</strong>. Create unique grooves that stand out."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 110,
    stepCount: 10,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    timeSignature: "5/4",
    requiredTempo: 110
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Create a 5/4 Groove",
    description: "Program a drum pattern in 5/4 time with clear 3+2 grouping.",
    tip: "Feel the natural lilt—once the grouping clicks, 5/4 feels completely natural.",
    steps: [
      { text: "<strong>Set the tempo to 110 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> Beats 1 and 4 (marks 3+2 grouping)." },
      { text: "<strong>Snare:</strong> Beats 3 and 5 for backbeat." },
      { text: "<strong>Hi-Hat:</strong> All 5 beats for steady pulse." },
      { text: "<strong>Crash:</strong> Beat 1 to mark the bar." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 3, 5, 8],
      instructionText: "Kick on 1 and 4—marks the 3+2 grouping.",
      patternHint: { enabled: true, note: "Beats 1, 4 | 1, 4" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [2, 4, 7, 9],
      instructionText: "Snare on 3 and 5.",
      patternHint: { enabled: true, note: "Beats 3, 5" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      instructionText: "Steady quarter notes on all 5 beats.",
      patternHint: { enabled: true, note: "All beats" }
    }
  ],
  
  // ====================
  // TIME SIGNATURES
  // ====================
  timeSignatures: [
    { sig: "5/4", grouping: "3+2", stepCount: 10, name: "Five-Four" },
    { sig: "7/8", grouping: "4+3", stepCount: 14, name: "Seven-Eight" },
    { sig: "9/8", grouping: "3+3+3", stepCount: 18, name: "Nine-Eight" },
    { sig: "11/8", grouping: "3+3+3+2", stepCount: 22, name: "Eleven-Eight" }
  ],
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Create a groove in 5/4—feel the 3+2 grouping!",
    success: "🎵 You nailed 5/4! The grouping is clear and the groove is solid.",
    error: "Make sure kick marks the grouping starts (1 and 4).",
    alreadyCompleted: "Odd time master! Try 7/8 or mix signatures in one track."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: true,
    enableExport: false,
    showVelocityLane: true,
    showTimeSignatureSelector: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Program patterns in 5/4, 7/8, and other odd meters",
    "Understand beat grouping (2s and 3s)",
    "Create accessible odd-meter grooves",
    "Use meter changes for dramatic impact"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
