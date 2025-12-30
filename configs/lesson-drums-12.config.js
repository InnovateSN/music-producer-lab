/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 12 - Rock & Live Drum Simulation
 * 
 * This lesson teaches rock drum programming with focus on realism,
 * cymbal work, tom fills, and dynamic expression.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-12-progress",
  lessonNumber: 12,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 6,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-13.html",
  prevLessonUrl: "lesson-drums-11.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Drums & Rhythm" }),
    title: "Rock & Live",
    titleHighlight: "Drum Simulation",
    subtitle: "Program <strong>realistic rock drums</strong> that sound like a real drummer. Master <strong>cymbal work</strong>, <strong>dynamic tom fills</strong>, and human feel."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 120
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Rock Beat with Crash Accent",
    description: "Create a driving rock pattern using kick, snare, hi-hats, and a crash cymbal to mark the downbeat.",
    tip: "Rock drums are about POWER and DYNAMICS. Add a crash on beat 1 to signal the start of the section!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> Steps 1, 5, 9, 13 (driving quarter notes)." },
      { text: "<strong>Snare:</strong> Steps 5 and 13 (powerful backbeat)." },
      { text: "<strong>Hi-Hat:</strong> 8th notes (1, 3, 5, 7, 9, 11, 13, 15)." },
      { text: "<strong>Crash:</strong> Step 1 to mark the section start." }
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
      targetSteps: [0, 4, 8, 12],
      instructionText: "Driving quarter note kick pattern.",
      patternHint: { enabled: true, note: "Kick: 1, 5, 9, 13" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [4, 12],
      instructionText: "Powerful backbeat on 2 and 4.",
      patternHint: { enabled: true, note: "Snare: 5, 13 (backbeat)" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "Steady 8th note hi-hats for groove.",
      patternHint: { enabled: true, note: "Hi-Hat: 8th notes" }
    },
    {
      id: "crash",
      label: "Crash",
      color: "linear-gradient(135deg, #fdcb6e, #f39c12)",
      targetSteps: [0],
      instructionText: "Crash on beat 1 to mark the section.",
      patternHint: { enabled: true, note: "Crash: step 1 (section marker)" }
    }
  ],
  
  // ====================
  // EXTENDED KIT
  // ====================
  extendedKit: [
    { id: "tom-high", label: "High Tom", color: "#a29bfe" },
    { id: "tom-mid", label: "Mid Tom", color: "#6c5ce7" },
    { id: "tom-floor", label: "Floor Tom", color: "#5f27cd" },
    { id: "ride", label: "Ride", color: "#fdcb6e" },
    { id: "china", label: "China", color: "#e17055" }
  ],
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Rock = driving kick + powerful snare + steady hi-hats + crash accents"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build a rock beat with a crash accent on beat 1!",
    success: "🎸 Rock on! That's a solid rock groove with proper crash placement.",
    error: "Don't forget the crash on step 1—it marks the section start!",
    alreadyCompleted: "You've mastered rock drums! Try adding tom fills for extra flair."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    showVelocityLane: true
  },
  
  // ====================
  // GENRE INFO
  // ====================
  genreInfo: {
    name: "Rock",
    tempoRange: { min: 100, max: 200 },
    subgenres: [
      { name: "Classic Rock", tempo: "100-130 BPM", character: "Driving 8ths, big backbeat" },
      { name: "Hard Rock", tempo: "110-140 BPM", character: "Double kick, china accents" },
      { name: "Pop Rock", tempo: "100-120 BPM", character: "Clean, controlled grooves" },
      { name: "Punk Rock", tempo: "150-200 BPM", character: "Fast, aggressive, D-beat" }
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Program realistic rock drum patterns",
    "Use crash cymbals to mark section changes",
    "Create dynamic tom fills around the kit",
    "Apply dynamics for verse/chorus contrast"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
