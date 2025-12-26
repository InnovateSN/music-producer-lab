/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 14 - Polyrhythms & Metric Modulation
 * 
 * This lesson teaches polyrhythmic concepts, common ratios (3:4, 5:4, etc.),
 * and metric modulation techniques for advanced rhythm programming.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-14-progress",
  lessonNumber: 14,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 7,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-15.html",
  prevLessonUrl: "lesson-drums-13.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Drums & Rhythm" }),
    title: "Polyrhythms &",
    titleHighlight: "Metric Modulation",
    subtitle: "Layer <strong>contrasting rhythms</strong> for complexity. Master <strong>3-over-4</strong>, <strong>5-over-4</strong>, and create <strong>hypnotic polyrhythmic patterns</strong>."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 100,
    stepCount: 12,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Create a 3:4 Polyrhythm",
    description: "Program a hi-hat pattern in 3 against a kick-snare pattern in 4.",
    tip: "The hi-hats should feel like they're 'floating' against the kick. That's the polyrhythmic tension!",
    steps: [
      { text: "<strong>Kick:</strong> Steps 1, 4, 7, 10 (four evenly spaced)." },
      { text: "<strong>Hi-Hat:</strong> Steps 1, 5, 9 (three evenly spaced)." },
      { text: "<strong>Snare:</strong> Steps 4 and 10 for backbeat." },
      { text: "<strong>Listen:</strong> Hear how the patterns create tension." }
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
      targetSteps: [0, 3, 6, 9],
      instructionText: "Four evenly spaced kicks.",
      patternHint: { enabled: true, note: "Kick: 1, 4, 7, 10" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [3, 9],
      instructionText: "Backbeat on steps 4 and 10.",
      patternHint: { enabled: true, note: "Snare: 4, 10 (backbeat)" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 4, 8],
      instructionText: "Three evenly spaced hi-hats (the '3' in 3:4).",
      patternHint: { enabled: true, note: "Hi-Hat: 1, 5, 9 (3-pulse)" }
    }
  ],
  
  // ====================
  // POLYRHYTHM PRESETS
  // ====================
  polyrhythms: [
    {
      id: "3:4",
      name: "Three over Four",
      gridSize: 12,
      description: "Most common polyrhythm. Creates subtle tension.",
      mnemonic: "Nice cup of tea"
    },
    {
      id: "2:3",
      name: "Two over Three",
      gridSize: 6,
      description: "Foundation of triplet feel and shuffle.",
      mnemonic: "Hot dog"
    },
    {
      id: "5:4",
      name: "Five over Four",
      gridSize: 20,
      description: "Complex and hypnotic, African influence.",
      mnemonic: "I am eating popcorn"
    },
    {
      id: "7:4",
      name: "Seven over Four",
      gridSize: 28,
      description: "Very complex, disorienting. Use sparingly.",
      mnemonic: "I need to call my lawyer"
    }
  ],
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Create a 3:4 polyrhythm with hi-hats against kick!",
    success: "🔄 Perfect polyrhythm! You can hear the 3 and 4 working together.",
    error: "Check your hi-hat placement—they should divide the bar into thirds.",
    alreadyCompleted: "You've mastered 3:4! Try programming 5:4 or 7:4 next."
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
    showPolyrhythmGuide: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand polyrhythmic theory and notation",
    "Create 3-over-4 and other polyrhythmic patterns",
    "Apply metric modulation for tempo feel changes",
    "Build complex rhythmic textures with layered patterns"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
