/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 3 - Arrange a Complete Track (Capstone)
 * 
 * This is the capstone lesson where students create a full 3-4 minute
 * arrangement using everything learned in the module.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-3-progress",
  lessonNumber: 3,
  lessonCategory: "Arrangement",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-arrangement-2.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Arrangement" }),
    title: "Arrange a Complete Track:",
    titleHighlight: "Your First Full Song",
    subtitle: "This is it—put <strong>everything together</strong>. Build a complete 3-4 minute track from scratch, using sections from Lesson 1 and transitions from Lesson 2. Create a <strong>professional arrangement</strong> ready to fill with your own sounds."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build Your Complete Track",
    description: "Create a full arrangement with 80-120 bars, at least 2 peak sections, proper intro/outro, and transitions between every section change.",
    tip: "Start with a template structure you know works, then customize it. Learn the rules first, then break them intentionally.",
    steps: [
      { text: "<strong>Choose your genre</strong> — Pop/Rock or EDM (changes recommended sections)." },
      { text: "<strong>Add sections</strong> — Click buttons to add sections to your timeline." },
      { text: "<strong>Add transitions</strong> — Select a transition tool, then click after sections to place it." },
      { text: "<strong>Check the checklist</strong> — Make sure all requirements are met." },
      { text: "<strong>Validate your arrangement</strong> — Click \"Complete Track\" when ready!" }
    ]
  },
  
  // ====================
  // GENRE PRESETS
  // ====================
  genres: {
    pop: {
      name: "Pop/Rock",
      icon: "🎤",
      sections: [
        { type: "intro", bars: 8, energy: 25 },
        { type: "verse", bars: 16, energy: 50 },
        { type: "prechorus", bars: 8, energy: 65 },
        { type: "chorus", bars: 16, energy: 90 },
        { type: "bridge", bars: 8, energy: 55 },
        { type: "outro", bars: 8, energy: 20 }
      ]
    },
    edm: {
      name: "EDM",
      icon: "🎧",
      sections: [
        { type: "intro", bars: 8, energy: 25 },
        { type: "buildup", bars: 8, energy: 70 },
        { type: "drop", bars: 16, energy: 100 },
        { type: "breakdown", bars: 8, energy: 40 },
        { type: "outro", bars: 8, energy: 20 }
      ]
    }
  },
  
  // ====================
  // TEMPLATES
  // ====================
  templates: {
    pop: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "fill", isTransition: true },
      { type: "verse", bars: 16, energy: 50 },
      { type: "fill", isTransition: true },
      { type: "prechorus", bars: 8, energy: 65 },
      { type: "riser", isTransition: true },
      { type: "chorus", bars: 16, energy: 90 },
      { type: "fall", isTransition: true },
      { type: "verse", bars: 16, energy: 55 },
      { type: "fill", isTransition: true },
      { type: "chorus", bars: 16, energy: 95 },
      { type: "filter", isTransition: true },
      { type: "bridge", bars: 8, energy: 60 },
      { type: "riser", isTransition: true },
      { type: "chorus", bars: 16, energy: 100 },
      { type: "fall", isTransition: true },
      { type: "outro", bars: 8, energy: 20 }
    ],
    edm: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "filter", isTransition: true },
      { type: "buildup", bars: 16, energy: 70 },
      { type: "riser", isTransition: true },
      { type: "drop", bars: 16, energy: 100 },
      { type: "fall", isTransition: true },
      { type: "breakdown", bars: 8, energy: 40 },
      { type: "filter", isTransition: true },
      { type: "buildup", bars: 8, energy: 75 },
      { type: "riser", isTransition: true },
      { type: "drop", bars: 16, energy: 100 },
      { type: "fall", isTransition: true },
      { type: "outro", bars: 8, energy: 20 }
    ]
  },
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    minBars: 80,
    maxBars: 120,
    minPeaks: 2,
    peakTypes: ["chorus", "drop"],
    requireIntro: true,
    requireOutro: true,
    minTransitions: 2,
    requireEnergyVariety: true,
    energyVarietyThreshold: 30 // Difference between max and min energy
  },
  
  // ====================
  // CHECKLIST ITEMS
  // ====================
  checklist: [
    { key: "intro", label: "Has Intro" },
    { key: "outro", label: "Has Outro" },
    { key: "peaks", label: "2+ Peak Sections" },
    { key: "length", label: "80-120 Bars" },
    { key: "transitions", label: "Has Transitions" },
    { key: "energy", label: "Energy Variety" }
  ],
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Build your arrangement to meet all checklist requirements.",
    success: "🎉 Amazing! You've created a complete, professional arrangement!",
    error: "Almost there! Check the requirements that aren't checked yet.",
    alreadyCompleted: "You've completed this module! Feel free to experiment more."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "fullTrack",
    sandbox: false,
    showChecklist: true,
    showEnergyGraph: true,
    enableUndo: true,
    enableTemplates: true,
    enableGenreSwitch: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Create a complete 3-4 minute song arrangement from scratch",
    "Apply song structure principles (intro, verse, chorus, bridge, outro)",
    "Use appropriate transitions between all section changes",
    "Maintain proper energy flow with peaks and valleys",
    "Work within professional timing constraints (4/8 bar phrases, 80-120 total bars)"
  ],
  
  // ====================
  // MODULE COMPLETION
  // ====================
  moduleCompletion: {
    moduleName: "Arrangement & Songwriting",
    nextModules: [
      { slug: "sound-design", title: "Sound Design" },
      { slug: "mixing", title: "Mixing" }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
