/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 13 - Section Density & Contrast
 *
 * This lesson teaches how to vary density between sections.
 * Master sparse verses, full choruses, and strategic emptiness.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-13-progress",
  lessonNumber: 13,
  lessonCategory: "Arrangement",
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-14.html",
  prevLessonUrl: "lesson-arrangement-12.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Arrangement" }),
    title: "Section Density:",
    titleHighlight: "Sparse to Full",
    subtitle: "Master <strong>density contrast</strong> between sections. Learn why <strong>verses should be sparse</strong>, <strong>choruses should be full</strong>, and <strong>emptiness creates impact</strong>."
  },

  exercise: {
    title: "Create Density Variation Across Sections",
    description: "Build an arrangement where sections have clearly different <strong>densities</strong>. Density = number of active instruments + rhythmic activity. Sparse sections make full sections hit harder.",
    tip: "Verse density: 2-3 elements. Pre-chorus: 3-4 elements. Chorus: 4-5 elements. Bridge/breakdown: 1-2 elements. The contrast IS the impact.",
    steps: [
      { text: "<strong>Intro: Low density</strong> - Start with 1-2 elements (30-40% full)" },
      { text: "<strong>Verse: Low-medium density</strong> - 2-3 elements (40-50% full)" },
      { text: "<strong>Pre-chorus: Medium density</strong> - 3-4 elements (60-70% full)" },
      { text: "<strong>Chorus: High density</strong> - 4-5 elements (90-100% full)" },
      { text: "<strong>Breakdown: Minimal density</strong> - 1-2 elements (20-30% full)" },
      { text: "<strong>Final chorus: Maximum density</strong> - All elements + extra layer (100%)" }
    ]
  },

  densityLevels: [
    {
      level: "Minimal",
      elementCount: "1-2",
      percentage: "20-30%",
      sections: ["Intro", "Outro", "Breakdown", "Bridge"],
      purpose: "Create space, intimacy, or contrast",
      examples: ["Just vocals + guitar", "Only drums + bass"]
    },
    {
      level: "Sparse",
      elementCount: "2-3",
      percentage: "40-50%",
      sections: ["Verse", "Post-chorus"],
      purpose: "Leave room for vocals, create anticipation",
      examples: ["Drums + bass + pad", "Rhythm guitar + vocals + light drums"]
    },
    {
      level: "Medium",
      elementCount: "3-4",
      percentage: "60-70%",
      sections: ["Pre-chorus", "Build-up"],
      purpose: "Build energy, transition to fuller sections",
      examples: ["Drums + bass + pad + rhythm", "Full rhythm section + keys"]
    },
    {
      level: "Full",
      elementCount: "4-5",
      percentage: "80-100%",
      sections: ["Chorus", "Drop"],
      purpose: "Maximum impact, energy peak, memorable hook",
      examples: ["All 5 elements present", "Full band + strings + backing vocals"]
    }
  ],

  contrastStrategies: [
    { strategy: "Element Addition", description: "Add 1-2 new instruments per section increase" },
    { strategy: "Rhythmic Density", description: "Increase note frequency (quarter → eighths → sixteenths)" },
    { strategy: "Frequency Fill", description: "Add elements in previously empty frequency ranges" },
    { strategy: "Stereo Width", description: "Narrow in verse, wide in chorus" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create clear density contrast between sections!",
    success: "🎚️ Perfect density control! Your sparse sections make the full sections explode with impact.",
    error: "Check section densities—you need bigger contrast between verses and choruses.",
    alreadyCompleted: "You've mastered density! Try creating even more dramatic contrasts."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showDensityMeter: true,
    showElementCount: true
  },

  learningObjectives: [
    "Understand density as the number of active elements",
    "Apply appropriate density levels to different sections",
    "Create impact through density contrast",
    "Use sparse arrangements effectively for intimacy",
    "Build from minimal to maximum density across a track"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
