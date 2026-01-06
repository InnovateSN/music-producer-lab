/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 8 - Dynamics & Contrast
 *
 * This lesson teaches dynamic range management, the loud-quiet-loud technique,
 * and how to use contrast to create emotional impact.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-8-progress",
  lessonNumber: 8,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-9.html",
  prevLessonUrl: "lesson-arrangement-7.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Arrangement" }),
    title: "Dynamics & Contrast:",
    titleHighlight: "The Power of Quiet",
    subtitle: "Master the <strong>loud-quiet-loud</strong> technique. Learn how <strong>contrast creates impact</strong> and why <strong>silence is powerful</strong>. Professional arrangements breathe—they don't stay at one energy level."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create Dynamic Contrast in an Arrangement",
    description: "Build an arrangement that uses <strong>dynamic contrast</strong> to create emotional impact. The secret to making loud sections hit hard is to have quiet sections before them. Learn to manage energy flow strategically.",
    tip: "The biggest mistake beginners make is keeping everything at maximum energy. Professional tracks have dynamics—they get quieter to make the loud parts feel explosive. Think Pixies' \"loud-quiet-loud\" formula.",
    steps: [
      { text: "<strong>Start medium energy</strong> - Intro with 50-60% energy" },
      { text: "<strong>Drop to minimal</strong> - Verse/breakdown with only 2-3 elements (30-40% energy)" },
      { text: "<strong>Build gradually</strong> - Add elements progressively" },
      { text: "<strong>Explode to maximum</strong> - Chorus/drop hits at 100% energy" },
      { text: "<strong>Create at least 40% energy difference</strong> between quiet and loud sections" },
      { text: "Use <strong>strategic silence</strong> (1-2 beats) before impact moments" }
    ]
  },

  // ====================
  // DYNAMIC TECHNIQUES
  // ====================
  dynamicTechniques: [
    {
      name: "Element Subtraction",
      icon: "🔇",
      description: "Remove instruments instead of adding them. Drop the drums, bass, or pads to create instant contrast.",
      examples: ["Verse after chorus", "Post-chorus breakdown", "Bridge section"],
      energyChange: "Drop 30-50%"
    },
    {
      name: "Frequency Filtering",
      icon: "🎛️",
      description: "Use low-pass or high-pass filters to reduce frequency range, creating a 'filtered' or 'underwater' effect.",
      examples: ["Intro buildup", "Transition effect", "Breakdown"],
      energyChange: "Drop 20-40%"
    },
    {
      name: "Strategic Silence",
      icon: "⏸️",
      description: "Brief moments of complete silence (1/4 to 1 beat) before big drops create massive impact.",
      examples: ["Before drops", "Before chorus", "Before final section"],
      energyChange: "Amplifies following section by 30%"
    },
    {
      name: "Density Variation",
      icon: "📊",
      description: "Change the number of active elements. Sparse = low energy, dense = high energy.",
      examples: ["Verse: 2-3 elements", "Chorus: 4-5 elements"],
      energyChange: "Variable (20-60%)"
    }
  ],

  // ====================
  // ENERGY LEVELS GUIDE
  // ====================
  energyLevelsGuide: {
    minimal: { range: "20-40%", elements: "1-2", examples: ["Intro", "Outro", "Breakdown"] },
    low: { range: "40-60%", elements: "2-3", examples: ["Verse", "Pre-chorus", "Bridge"] },
    medium: { range: "60-80%", elements: "3-4", examples: ["Pre-chorus", "Build-up"] },
    high: { range: "80-100%", elements: "4-5", examples: ["Chorus", "Drop", "Final chorus"] }
  },

  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "dynamic-range",
    minEnergyDifference: 40, // Must have 40% difference between quietest and loudest
    requireQuietSection: true,
    requiredSilence: 1, // Must use at least one strategic silence
    minSections: 4
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Create an arrangement with strong dynamic contrast (40%+ energy difference)!",
    success: "🎚️ Perfect dynamics! Your contrast creates real emotional impact. This is pro-level arrangement.",
    error: "Check your energy range. You need bigger differences between quiet and loud sections.",
    alreadyCompleted: "You've mastered dynamics! Try experimenting with even more extreme contrasts."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showEnergyGraph: true,
    showDynamicMeter: true,
    enableSilence: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the power of dynamic contrast in arrangements",
    "Apply the loud-quiet-loud formula for maximum impact",
    "Use element subtraction to create breathing room",
    "Implement strategic silence before drops and choruses",
    "Manage energy flow across an entire track"
  ],

  // ====================
  // REFERENCE
  // ====================
  reference: {
    technique: "Loud-Quiet-Loud",
    originators: ["Pixies", "Nirvana"],
    modernUse: ["EDM drops", "Pop chorus impact", "Hip-hop beat switches"]
  }
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
