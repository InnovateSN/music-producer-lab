/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 2 - Transitions & Energy Flow
 * 
 * This lesson teaches transition techniques: risers, falls, filter sweeps,
 * drum fills, and strategic silence.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-2-progress",
  lessonNumber: 2,
  lessonCategory: "Arrangement",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-3.html",
  prevLessonUrl: "lesson-arrangement-1.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Arrangement" }),
    title: "Transitions & Energy:",
    titleHighlight: "The Glue Between Sections",
    subtitle: "Learn how to connect sections seamlessly using <strong>risers</strong>, <strong>falls</strong>, <strong>filter sweeps</strong>, <strong>drum fills</strong>, and <strong>strategic silence</strong>. Great transitions are what separate amateur tracks from professional productions."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Add Transitions to an Arrangement",
    description: "Place appropriate transitions between sections in a pre-built arrangement. Match the transition type to the energy change between sections.",
    tip: "Think about energy flow. Verse→Buildup needs energy building (riser/filter). Drop→Breakdown needs energy releasing (fall).",
    steps: [
      { text: "<strong>Select a transition tool</strong> from the palette (Riser, Fall, Filter, Fill, or Silence)." },
      { text: "<strong>Click the (+) slots</strong> between sections to place your transition." },
      { text: "<strong>Match transitions to context</strong> — risers before energy increases, falls after peaks." },
      { text: "<strong>Fill all 3 transition slots</strong> to complete the exercise." }
    ]
  },
  
  // ====================
  // TRANSITION TECHNIQUES
  // ====================
  transitionTechniques: [
    {
      type: "riser",
      name: "Risers (Uplifters)",
      icon: "📈",
      color: "green",
      description: "Sweeps upward in pitch or intensity. Creates tension and anticipation before drops/choruses.",
      uses: ["Before drops", "Before choruses", "Building tension"],
      energyEffect: "building"
    },
    {
      type: "fall",
      name: "Falls (Downlifters)",
      icon: "📉",
      color: "purple",
      description: "Sweeps downward to release built-up energy. Used after drops to settle into new sections.",
      uses: ["After drops", "Into breakdowns", "Energy release"],
      energyEffect: "releasing"
    },
    {
      type: "filter",
      name: "Filter Sweeps",
      icon: "🎛️",
      color: "amber",
      description: "Gradually opens/closes a low-pass filter. Opening brightens (builds); closing creates underwater effect (reduces).",
      uses: ["Buildups", "Intros/Outros", "Smooth transitions"],
      energyEffect: "variable"
    },
    {
      type: "fill",
      name: "Drum Fills",
      icon: "🥁",
      color: "pink",
      description: "Rhythmic break in the drum pattern—snare rolls, tom fills, kick patterns that signal section changes.",
      uses: ["End of sections", "Before choruses", "Every 8-16 bars"],
      energyEffect: "signaling"
    },
    {
      type: "silence",
      name: "Silence / Gaps",
      icon: "🔇",
      color: "gray",
      description: "Brief silence before impact. Even 1/4 beat of silence before a drop makes it hit 10x harder.",
      uses: ["Before big drops", "Dramatic effect", "Reset listener"],
      energyEffect: "impact"
    }
  ],
  
  // ====================
  // EXERCISE SECTIONS
  // ====================
  exerciseSections: [
    { type: "verse", bars: 16, energy: 50 },
    { type: "buildup", bars: 8, energy: 70 },
    { type: "chorus", bars: 16, energy: 100 },
    { type: "breakdown", bars: 8, energy: 40 }
  ],
  
  // ====================
  // SUGGESTED SOLUTION
  // ====================
  suggestedSolution: ["fill", "riser", "fall"],
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    requiredSlots: 3,
    validChoices: {
      0: ["fill", "filter", "riser"], // Verse → Buildup
      1: ["riser", "filter", "silence"], // Buildup → Chorus
      2: ["fall", "filter", "silence"] // Chorus → Breakdown
    }
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Add transitions to all 3 slots to complete this exercise.",
    success: "🎉 Excellent! Your transitions make musical sense! You've completed this lesson.",
    error: "Add some transitions first! Select a tool and click the (+) slots.",
    alreadyCompleted: "You've already completed this exercise. Feel free to experiment more!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "transitions",
    sandbox: false,
    showEnergyPreview: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the 5 essential transition techniques: Risers, Falls, Filter Sweeps, Drum Fills, Silence",
    "Know when to use each technique based on energy direction",
    "Apply transitions at appropriate points in an arrangement",
    "Create smooth, professional-sounding section changes",
    "Understand the timing of transitions (1-2, 4, 8, 16 bars)"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
