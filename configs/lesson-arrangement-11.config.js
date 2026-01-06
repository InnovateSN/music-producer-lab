/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 11 - Repetition vs Variation
 *
 * This lesson teaches the balance between repetition (for catchiness) and
 * variation (for interest). Master when to repeat and when to evolve.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-11-progress",
  lessonNumber: 11,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  nextLessonUrl: "lesson-arrangement-12.html",
  prevLessonUrl: "lesson-arrangement-10.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Arrangement" }),
    title: "Repetition vs Variation:",
    titleHighlight: "The Art of Balance",
    subtitle: "Master the <strong>repetition-variation balance</strong>. Learn when to <strong>repeat for catchiness</strong> and when to <strong>vary for interest</strong>. Too much repetition = boring. Too much variation = confusing."
  },

  exercise: {
    title: "Create an Arrangement Balancing Repetition and Variation",
    description: "Build an arrangement that uses <strong>strategic repetition</strong> to make ideas stick, plus <strong>subtle variation</strong> to maintain interest. The key is changing one element at a time while keeping others constant.",
    tip: "The 80/20 rule: Keep 80% the same (familiar), change 20% (fresh). Example: Second chorus keeps melody/chords the same, but adds a new synth layer. Third chorus adds harmonies. Final chorus modulates up a key.",
    steps: [
      { text: "<strong>Establish the core loop</strong> - Create your main 4-8 bar pattern" },
      { text: "<strong>Repeat exactly once</strong> - Build familiarity with exact repetition" },
      { text: "<strong>Add ONE new element</strong> - Keep 80% same, change 20%" },
      { text: "<strong>Repeat with variation</strong> - Alternate texture, melody, or harmony" },
      { text: "<strong>Build to climax</strong> - Final repetition adds all variations together" },
      { text: "<strong>Use the rule of three</strong> - Things happen in threes for satisfaction" }
    ]
  },

  variationTechniques: [
    { name: "Additive", description: "Add new layers each repetition", example: "Verse 1: Drums+Bass, Verse 2: +Pad, Verse 3: +Lead" },
    { name: "Subtractive", description: "Remove elements for contrast", example: "Chorus 2: Remove drums for 2 bars" },
    { name: "Textural", description: "Change sound/timbre, keep rhythm/melody", example: "Chorus 2: Switch synth to piano" },
    { name: "Rhythmic", description: "Vary rhythm pattern, keep melody", example: "Chorus 2: Drums switch from 4-on-floor to breakbeat" },
    { name: "Harmonic", description: "Change chords, keep melody", example: "Chorus 2: Modulate up a key" },
    { name: "Melodic", description: "Vary melody, keep harmony", example: "Verse 2: Add vocal ad-libs over same chords" }
  ],

  ruleOfThree: {
    description: "Musical ideas work best in groups of three",
    examples: [
      "Three choruses: Simple → Add harmonies → Modulate up",
      "Three verses: Sparse → Medium → Full",
      "Build pattern three times before the drop"
    ],
    reasoning: "First time: Learn it. Second time: Recognize it. Third time: Expect variation."
  },

  messages: applyMessagePreset("arrangement", {
    initial: "Create an arrangement that repeats core ideas while adding variations!",
    success: "🔁 Perfect balance! Your repetition creates familiarity while variations keep it interesting.",
    error: "Check your repetition/variation balance—aim for 80% same, 20% new each time.",
    alreadyCompleted: "You've mastered repetition and variation! Experiment with more complex evolution patterns."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    highlightRepetitions: true,
    showVariationIndicator: true
  },

  learningObjectives: [
    "Understand the repetition-variation balance in arrangements",
    "Apply the 80/20 rule for changes",
    "Use the rule of three for satisfying structure",
    "Implement six variation techniques effectively",
    "Create familiar yet evolving arrangements"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
