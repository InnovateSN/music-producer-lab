/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 20 - Final Capstone Project
 *
 * This is the ultimate arrangement challenge. Apply everything learned
 * to create a professional, radio-ready arrangement from scratch.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-20-progress",
  lessonNumber: 20,
  lessonCategory: "Arrangement",
  depthLevel: 5,

  nextLessonUrl: null,
  prevLessonUrl: "lesson-arrangement-19.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 20, categoryLabel: "Arrangement" }),
    title: "Arrangement Capstone:",
    titleHighlight: "Your Masterpiece",
    subtitle: "This is it. Apply <strong>everything you've learned</strong> to create a <strong>complete, professional arrangement</strong>. Use all 19 techniques to build a <strong>radio-ready track</strong> from scratch."
  },

  exercise: {
    title: "Create a Complete Professional Arrangement",
    description: "Build a <strong>full 3-4 minute professional arrangement</strong> that demonstrates mastery of all arrangement techniques. This is your capstone project—make it count.",
    tip: "Start with a clear vision. Choose your genre, tempo, and vibe first. Then apply the techniques systematically: structure → dynamics → layering → transitions → development. Reference a professional track you admire.",
    steps: [
      { text: "<strong>Choose genre and vibe</strong> - Clear artistic vision" },
      { text: "<strong>Create strong structure</strong> - Use appropriate genre structure (Lessons 1-7)" },
      { text: "<strong>Manage dynamics and energy</strong> - Build contrast and impact (Lesson 8)" },
      { text: "<strong>Layer intelligently</strong> - Frequency separation, max 5 elements (Lesson 9)" },
      { text: "<strong>Add musical conversation</strong> - Call-and-response patterns (Lesson 10)" },
      { text: "<strong>Balance repetition and variation</strong> - 80/20 rule, rule of three (Lesson 11)" },
      { text: "<strong>Build tension and release</strong> - Multiple tension-release cycles (Lesson 12)" },
      { text: "<strong>Vary section density</strong> - Sparse verses, full choruses (Lesson 13)" },
      { text: "<strong>Manage frequency content</strong> - Strategic frequency movement (Lesson 14)" },
      { text: "<strong>Evolve rhythms</strong> - Groove variation across sections (Lesson 15)" },
      { text: "<strong>Develop melodic themes</strong> - Theme and variation (Lesson 16)" },
      { text: "<strong>Create pro transitions</strong> - Advanced techniques, stack 3-4 (Lesson 17)" },
      { text: "<strong>Optional: Blend genres</strong> - Cross-genre elements (Lesson 18)" },
      { text: "<strong>Make it mix-ready</strong> - Frequency space, headroom, separation (Lesson 19)" },
      { text: "<strong>Polish and refine</strong> - Test, iterate, perfect" }
    ]
  },

  requirements: {
    structure: {
      minLength: "2:30",
      maxLength: "4:30",
      minSections: 5,
      requiredSections: ["intro", "verse", "chorus", "outro"],
      optionalSections: ["pre-chorus", "bridge", "breakdown", "buildup"]
    },
    dynamics: {
      minEnergyRange: 50, // 50% difference between quietest and loudest
      requiredDynamicContrast: true,
      requiredSilence: 1
    },
    layering: {
      maxSimultaneousElements: 5,
      minFrequencyZones: 4,
      requireStereoSeparation: true
    },
    development: {
      requiredRepetitions: 2,
      requiredVariations: 2,
      melodicDevelopment: true
    },
    transitions: {
      minTransitionTechniques: 3,
      requiredAdvancedTransitions: 2
    },
    mixing: {
      requiredHeadroom: 6, // 6dB minimum
      monoCompatibility: true,
      frequencySeparation: true
    }
  },

  checklist: [
    { category: "Structure", items: [
      "Clear intro-verse-chorus-outro structure",
      "Appropriate length (2:30-4:30)",
      "At least 5 distinct sections",
      "Genre-appropriate structure"
    ]},
    { category: "Dynamics", items: [
      "50%+ energy difference between sections",
      "Strategic use of silence",
      "Clear tension-release cycles",
      "Dynamic contrast creates impact"
    ]},
    { category: "Layering", items: [
      "Max 5 simultaneous elements",
      "Each element in separate frequency zone",
      "Stereo separation prevents clashing",
      "Mono-compatible arrangement"
    ]},
    { category: "Development", items: [
      "Core ideas repeated for familiarity",
      "Variations added progressively",
      "Melodic theme developed across sections",
      "80/20 repetition-variation balance"
    ]},
    { category: "Transitions", items: [
      "Pro transition techniques used",
      "Multiple techniques stacked",
      "Smooth section changes",
      "At least one unexpected transition"
    ]},
    { category: "Mix-Ready", items: [
      "6dB+ headroom on master",
      "Clear frequency separation",
      "Works in mono",
      "Professional sound quality"
    ]}
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create your arrangement masterpiece using all 19 techniques!",
    success: "🎉🏆 INCREDIBLE! You've created a professional-grade arrangement. You've mastered the art of arrangement. This is radio-ready, mix-ready, and ready to share with the world. Congratulations!",
    error: "Check the requirements—make sure you're applying all the techniques you've learned.",
    alreadyCompleted: "You've completed the entire Arrangement course! You're now a master arranger. Go create something amazing!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showEnergyGraph: true,
    showFrequencyAnalyzer: true,
    showStereoMeter: true,
    showHeadroomMeter: true,
    showChecklist: true,
    enableAllFeatures: true
  },

  learningObjectives: [
    "Apply all 19 arrangement techniques in one complete track",
    "Create radio-ready, professional arrangements from scratch",
    "Demonstrate mastery of structure, dynamics, layering, and development",
    "Build mix-ready arrangements with proper separation and headroom",
    "Understand the complete arrangement process from vision to polish"
  ],

  congratulations: {
    message: "You've completed the Arrangement & Songwriting module!",
    skillsAchieved: [
      "Song structure mastery (Pop, EDM, Hip-Hop)",
      "Transition techniques (basic and advanced)",
      "5 Elements framework",
      "Dynamic contrast and energy management",
      "Frequency-based arrangement",
      "Layering without muddiness",
      "Call-and-response techniques",
      "Repetition-variation balance",
      "Tension and release cycles",
      "Section density control",
      "Rhythmic variation",
      "Melodic development",
      "Genre blending",
      "Mix-ready arrangement principles"
    ],
    nextSteps: [
      "Apply these techniques to your own productions",
      "Study professional tracks and identify these techniques",
      "Experiment with genre blending and hybrid styles",
      "Continue to Sound Design and Mixing modules"
    ]
  }
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
