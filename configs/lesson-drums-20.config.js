/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 20 - Masterclass: Complete Drum Production
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-20-progress",
  lessonNumber: 20,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 10,
  
  nextLessonUrl: null,
  prevLessonUrl: "lesson-drums-19.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 20, categoryLabel: "Drums & Rhythm" }),
    title: "Masterclass:",
    titleHighlight: "Complete Drum Production",
    subtitle: "Your <strong>final challenge</strong>: produce a complete <strong>multi-section drum arrangement</strong> applying everything you've learned."
  },
  
  sequencer: {
    tempo: 120,
    stepCount: 64,
    swing: 0,
    showBeatMarkers: true,
    enableVelocity: true,
    enableSections: true
  },
  
  exercise: {
    title: "Create a 16-Bar Drum Arrangement",
    description: "Build a complete drum production with intro, verse, build, drop, and breakdown.",
    steps: [
      { text: "<strong>Intro (4 bars):</strong> Stripped down, builds anticipation." },
      { text: "<strong>Verse (4 bars):</strong> Full groove with ghost notes." },
      { text: "<strong>Build (2 bars):</strong> Rising energy, fill at end." },
      { text: "<strong>Drop (4 bars):</strong> Maximum energy, full kit." },
      { text: "<strong>Breakdown (2 bars):</strong> Minimal contrast." }
    ]
  },
  
  requirements: [
    { id: "sounds", text: "At least 4 different drum sounds" },
    { id: "velocity", text: "Velocity variation for dynamics" },
    { id: "fill", text: "At least one fill transition" },
    { id: "ghost", text: "Ghost notes in at least one section" },
    { id: "energy", text: "Clear energy contrast between sections" },
    { id: "humanize", text: "Applied humanization" }
  ],
  
  messages: applyMessagePreset("drums", {
    initial: "Create your masterpiece—a complete drum arrangement!",
    success: "🏆 MASTERCLASS COMPLETE! You're now a professional drum programmer!",
    error: "Check the requirements—make sure all sections are filled."
  }),
  
  mode: { sandbox: true, showVelocityLane: true, showSections: true },
  
  learningObjectives: [
    "Apply all drum programming techniques in one project",
    "Create a complete multi-section drum arrangement",
    "Use automation for dynamic variation",
    "Produce industry-ready drum tracks"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
