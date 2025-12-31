/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 19 - Professional Drum Mixing
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-19-progress",
  lessonNumber: 19,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 10,

  nextLessonUrl: "lesson-drums-20.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Drums & Rhythm" }),
    title: "Professional",
    titleHighlight: "Drum Mixing",
    subtitle: "Mix drums to <strong>professional standards</strong>. Master <strong>EQ</strong>, <strong>compression</strong>, <strong>parallel processing</strong>, and <strong>bus techniques</strong>."
  },
  
  exercise: {
    title: "Mix a Drum Bus",
    description: "Apply professional mixing techniques to a drum kit.",
    steps: [
      { text: "Set levels: kick/snare loudest." },
      { text: "EQ: HP filter, cut mud, enhance character." },
      { text: "Compress for punch (4:1, 30ms attack)." },
      { text: "Parallel compression for power." },
      { text: "Bus glue compression (2:1, 1-3dB GR)." }
    ]
  },
  
  mixingChain: [
    { id: "gain", name: "Gain Staging", description: "Set proper levels" },
    { id: "eq-sub", name: "Subtractive EQ", description: "Remove problems" },
    { id: "comp", name: "Compression", description: "Control dynamics" },
    { id: "eq-add", name: "Additive EQ", description: "Enhance character" },
    { id: "sat", name: "Saturation", description: "Add harmonics" },
    { id: "bus", name: "Bus Processing", description: "Glue together" }
  ],
  
  messages: applyMessagePreset("drums", {
    initial: "Apply the professional drum mixing chain!",
    success: "🎛️ That's a polished, punchy drum mix!",
    error: "Check your gain staging—levels should be balanced before processing."
  }),
  
  mode: { sandbox: true, showVelocityLane: true },
  
  learningObjectives: [
    "EQ drums for clarity and punch",
    "Apply compression for control and character",
    "Use parallel drum compression",
    "Create cohesive drum bus processing"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
