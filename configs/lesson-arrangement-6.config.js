/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 6 - EDM & Electronic Structures
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-6-progress",
  lessonNumber: 6,
  lessonCategory: "Arrangement",
  depthLevel: 4,
  
  nextLessonUrl: "lesson-arrangement-7.html",
  prevLessonUrl: "lesson-arrangement-5.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Arrangement" }),
    title: "EDM & Electronic",
    titleHighlight: "Structures",
    subtitle: "Master <strong>build-drop-breakdown cycles</strong>. Learn <strong>tension building</strong> and <strong>impact moments</strong>."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build an EDM Track Structure",
    description: "Create a classic EDM arrangement using the <strong>Build-Drop-Breakdown</strong> cycle. This structure is essential for house, techno, trance, and most electronic dance music. Learn to control energy flow and create maximum impact.",
    tip: "The drop should feel like a payoff after the buildup. Use all 4-5 arrangement elements in the drop for maximum energy, then strip back to 2-3 elements in the breakdown.",
    steps: [
      { text: "<strong>Start with an Intro</strong> (8-16 bars) - DJ-friendly, minimal elements" },
      { text: "<strong>Add a Buildup</strong> (8-16 bars) - Rising tension with risers and filter sweeps" },
      { text: "<strong>Create the Drop</strong> (16-32 bars) - Full energy with all elements" },
      { text: "<strong>Add a Breakdown</strong> (8-16 bars) - Strip back to create contrast" },
      { text: "<strong>Repeat the cycle</strong> - Second buildup and drop for a complete track" },
      { text: "<strong>End with an Outro</strong> (8 bars) - DJ-friendly minimal ending" }
    ]
  },

  // ====================
  // SECTION DEFINITIONS
  // ====================
  sections: [
    { id: "intro", name: "Intro", bars: "8-16", energy: 30, description: "DJ-friendly, minimal" },
    { id: "buildup", name: "Buildup", bars: "8-16", energy: 70, description: "Rising tension" },
    { id: "drop", name: "Drop", bars: "16-32", energy: 100, description: "Maximum energy" },
    { id: "breakdown", name: "Breakdown", bars: "8-16", energy: 40, description: "Stripped back" }
  ],
  
  buildupTechniques: [
    { id: "riser", name: "Risers", description: "White noise/synth sweeps" },
    { id: "snare-roll", name: "Snare Rolls", description: "Increasing density" },
    { id: "filter", name: "Filter Sweeps", description: "HP filter opening" },
    { id: "pitch", name: "Pitch Rising", description: "Elements rising in pitch" }
  ],
  
  messages: applyMessagePreset("arrangement", {
    initial: "Build an EDM structure with build-drop-breakdown!",
    success: "🎛️ Perfect EDM structure! The tension and release are perfectly balanced.",
    error: "Make sure you have clear buildup before the drop."
  }),
  
  mode: { type: "structure-builder", showTimeline: true, showEnergyGraph: true },
  
  learningObjectives: [
    "Create effective buildups with risers and snare rolls",
    "Design impactful drops with full arrangement",
    "Use breakdowns for contrast and rest",
    "Structure DJ-friendly tracks in 8/16/32 bar phrases"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
