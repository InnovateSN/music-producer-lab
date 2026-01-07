/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Sound Design '"$i"' - [LESSON_TITLE]
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-sound-design-'"$i"'-progress",
  lessonNumber: '"$i"',
  lessonCategory: "Sound Design",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-sound-design-'"$((i+1))"'.html",
  prevLessonUrl: "lesson-sound-design-'"$((i-1))"'.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: '"$i"', categoryLabel: "Sound Design" }),
    title: "[LESSON_TITLE]:",
    titleHighlight: "[SUBTITLE]",
    subtitle: "[DESCRIPTION]"
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "[EXERCISE_TITLE]",
    description: "[EXERCISE_DESCRIPTION]",
    tip: "[TIP]",
    steps: [
      { text: "[STEP_1]" },
      { text: "[STEP_2]" },
      { text: "[STEP_3]" }
    ]
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete this lesson to unlock the next sound design topic.",
    success: "🎉 Excellent! You've mastered this sound design technique!",
    error: "Review the content and try again.",
    alreadyCompleted: "You've already completed this lesson. Keep exploring!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
