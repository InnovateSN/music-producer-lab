/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 1 - From Loop to Song: Understanding Structure
 * 
 * Note: This lesson uses a custom arrangement builder instead of the standard
 * drum sequencer. The config provides metadata and navigation info.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-1-progress",
  lessonNumber: 1,
  lessonCategory: "Arrangement",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-2.html",
  prevLessonUrl: "lesson-drums-6.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Arrangement" }),
    title: "From Loop to Song:",
    titleHighlight: "Understanding Structure",
    subtitle: "You've created killer drum patterns and loops. Now it's time to turn them into <strong>complete songs</strong>. Learn how to organize your musical ideas into sections—like <strong>intro</strong>, <strong>verse</strong>, <strong>chorus</strong>, and <strong>bridge</strong>—to create a journey your listeners will love."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build Your First Arrangement",
    description: "Use the interactive arrangement builder to create a complete song structure. Click sections to add them to your timeline and watch the energy flow visualize your arrangement.",
    tip: "Try creating both a Pop structure (Verse-Chorus-Bridge) AND an EDM structure (Build-Drop-Breakdown). Notice how the energy graphs differ!",
    steps: [
      { text: "<strong>Start with an Intro</strong> — Click the Intro button to add it to your timeline." },
      { text: "<strong>Add a Verse → Chorus pattern</strong> — This is your first \"cycle\"." },
      { text: "<strong>Repeat with variation</strong> — Add another Verse → Chorus, maybe with a Bridge before the final Chorus." },
      { text: "<strong>End with an Outro</strong> — Bring the song to a close." },
      { text: "<strong>Aim for 64-96 bars</strong> (about 2:30-4:00 at 120 BPM)." }
    ]
  },
  
  // ====================
  // ARRANGEMENT SECTIONS
  // ====================
  arrangementSections: [
    { type: "intro", label: "Intro", bars: 8, energy: 25, color: "green" },
    { type: "verse", label: "Verse", bars: 16, energy: 50, color: "cyan" },
    { type: "chorus", label: "Chorus", bars: 16, energy: 90, color: "purple" },
    { type: "bridge", label: "Bridge", bars: 8, energy: 60, color: "pink" },
    { type: "buildup", label: "Buildup", bars: 8, energy: 70, color: "amber" },
    { type: "drop", label: "Drop", bars: 16, energy: 100, color: "red" },
    { type: "breakdown", label: "Breakdown", bars: 8, energy: 35, color: "blue" },
    { type: "outro", label: "Outro", bars: 8, energy: 20, color: "gray" }
  ],
  
  // ====================
  // TEMPLATE ARRANGEMENTS
  // ====================
  templates: {
    pop: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "verse", bars: 16, energy: 50 },
      { type: "chorus", bars: 16, energy: 90 },
      { type: "verse", bars: 16, energy: 55 },
      { type: "chorus", bars: 16, energy: 95 },
      { type: "bridge", bars: 8, energy: 60 },
      { type: "chorus", bars: 16, energy: 100 },
      { type: "outro", bars: 8, energy: 20 }
    ],
    edm: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "buildup", bars: 16, energy: 65 },
      { type: "drop", bars: 16, energy: 100 },
      { type: "breakdown", bars: 8, energy: 35 },
      { type: "buildup", bars: 8, energy: 75 },
      { type: "drop", bars: 16, energy: 100 },
      { type: "outro", bars: 8, energy: 20 }
    ]
  },
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    minBars: 64,
    maxBars: 120,
    requiredSections: ["intro", "outro"],
    requiredPeaks: 1, // Must have at least one chorus or drop
    peakTypes: ["chorus", "drop"]
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Build an arrangement with 64-96 bars to complete this exercise.",
    success: "🎉 Excellent! Your arrangement has great structure. You've completed this lesson!",
    error: "Not quite there yet. Make sure you have an intro, at least one chorus/drop, and an outro.",
    alreadyCompleted: "You've already completed this exercise. Feel free to experiment more!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "arrangement", // Different from drum lessons
    sandbox: false,
    showEnergyGraph: true,
    showStructureType: true,
    enableTemplates: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the concept of song sections (intro, verse, chorus, bridge, outro)",
    "Learn common song structures for Pop/Rock (ABABCB) and EDM (Build-Drop-Breakdown)",
    "Visualize energy flow across a song arrangement",
    "Create a complete arrangement with proper structure",
    "Understand the 5 elements of arrangement: Foundation, Pad, Rhythm, Lead, Fills"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
