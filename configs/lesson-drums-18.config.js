/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 18 - Genre Fusion & Hybrid Drums
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-18-progress",
  lessonNumber: 18,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 9,
  
  nextLessonUrl: "lesson-drums-19.html",
  prevLessonUrl: "lesson-drums-17.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 18, categoryLabel: "Drums & Rhythm" }),
    title: "Genre Fusion &",
    titleHighlight: "Hybrid Drums",
    subtitle: "Combine <strong>genre elements</strong> for unique sounds. Blend <strong>electronic and acoustic</strong>, fuse <strong>cultural rhythms</strong>."
  },
  
  sequencer: {
    tempo: 124,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    enableVelocity: true,
    requiredTempo: 124
  },
  
  exercise: {
    title: "Create a Trap House Beat",
    description: "Blend trap hi-hats with a house kick pattern for a modern fusion groove.",
    steps: [
      { text: "<strong>Set the tempo to 124 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> 4-on-the-floor (house)." },
      { text: "<strong>Hi-Hat:</strong> Rolling trap pattern with triplets." },
      { text: "<strong>808:</strong> Sub bass on kick hits." },
      { text: "<strong>Clap:</strong> Beats 2 and 4 for backbeat." }
    ]
  },
  
  instruments: [
    { id: "kick", label: "Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 4, 8, 12] },
    { id: "clap", label: "Clap", color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", targetSteps: [4, 12] },
    { id: "hihat", label: "Hi-Hat", color: "linear-gradient(135deg, #00cec9, #0984e3)", targetSteps: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15] },
    { id: "tom", label: "808", color: "linear-gradient(135deg, #a29bfe, #6c5ce7)", targetSteps: [0, 8] }
  ],
  
  messages: applyMessagePreset("drums", {
    initial: "Create a trap house fusion—4-on-the-floor meets rolling hi-hats!",
    success: "🔀 Perfect fusion! The house and trap elements complement each other.",
    error: "Make sure you have both house (4x4 kick) and trap (rolling hats) elements."
  }),
  
  mode: { sandbox: false, showTargetHint: true, showVelocityLane: true },
  
  learningObjectives: [
    "Blend acoustic and electronic drum elements",
    "Fuse genres like trap+house, afrobeat+techno",
    "Create hybrid percussion textures",
    "Develop signature rhythmic style"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
