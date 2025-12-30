/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 16 - Drum Sound Design & Layering
 * 
 * This lesson teaches drum sound design through layering techniques,
 * processing chains, and frequency-based sample stacking.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-16-progress",
  lessonNumber: 16,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 8,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-17.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Drums & Rhythm" }),
    title: "Drum Sound Design &",
    titleHighlight: "Layering",
    subtitle: "Design <strong>custom drum sounds</strong>. Master <strong>kick layering</strong>, <strong>snare stacks</strong>, and <strong>processing chains</strong> for signature textures."
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Design a Layered Kick",
    description: "Create a punchy, full kick using 3 frequency-specific layers.",
    tip: "Always check phase alignment—zoom in on waveforms to ensure transients line up.",
    steps: [
      { text: "<strong>Sub layer:</strong> Sine wave or 808 sub (LP at 80Hz)." },
      { text: "<strong>Body layer:</strong> Acoustic kick sample (BP 80-250Hz)." },
      { text: "<strong>Click layer:</strong> Transient sample (HP at 2kHz)." },
      { text: "<strong>Glue:</strong> Bus compression (2-4dB gain reduction)." }
    ]
  },
  
  // ====================
  // LAYER TEMPLATES
  // ====================
  layerTemplates: {
    kick: [
      { id: "sub", name: "Sub Layer", freqRange: "20-80 Hz", description: "Pure weight and chest-shaking power" },
      { id: "body", name: "Body Layer", freqRange: "80-250 Hz", description: "Warmth and tonal character" },
      { id: "punch", name: "Punch Layer", freqRange: "1-4 kHz", description: "Cut-through transient" },
      { id: "click", name: "Click Layer", freqRange: "4-10 kHz", description: "Attack definition" }
    ],
    snare: [
      { id: "body", name: "Body", freqRange: "150-400 Hz", description: "Fundamental tone" },
      { id: "crack", name: "Crack", freqRange: "2-5 kHz", description: "Snappy attack" },
      { id: "tail", name: "Tail", freqRange: "5-12 kHz", description: "Wire rattle, air" }
    ]
  },
  
  // ====================
  // PROCESSING CHAIN
  // ====================
  processingChain: [
    { id: "eq", name: "EQ", icon: "🎚️", description: "Shape frequencies" },
    { id: "comp", name: "Compression", icon: "🔨", description: "Control dynamics" },
    { id: "transient", name: "Transient Shaper", icon: "📊", description: "Shape attack/decay" },
    { id: "saturation", name: "Saturation", icon: "🌊", description: "Add harmonics" },
    { id: "limiter", name: "Limiter", icon: "🔊", description: "Final loudness" }
  ],
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build a layered kick with sub, body, and click!",
    success: "🔊 That kick hits hard! Great layer balance and phase alignment.",
    error: "Check your frequency splits—layers shouldn't overlap too much.",
    alreadyCompleted: "You've mastered drum layering! Design your own signature sounds."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: true,
    showTargetHint: false,
    enablePresets: true,
    enableExport: true,
    showVelocityLane: true,
    showLayerStack: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Layer multiple kick samples by frequency band",
    "Create snare stacks with body, crack, and tail",
    "Apply processing chains for cohesive drum sounds",
    "Design signature drum sounds unique to your style"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
