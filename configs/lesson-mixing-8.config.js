/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing '"$i"' - [LESSON_TITLE]
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-'"$i"'-progress",
  lessonNumber: '"$i"',
  lessonCategory: "Mixing",
  nextLessonUrl: "lesson-mixing-'"$((i+1))"'.html",
  prevLessonUrl: "lesson-mixing-'"$((i-1))"'.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: '"$i"', categoryLabel: "Mixing" }),
    title: "[LESSON_TITLE]:",
    titleHighlight: "[SUBTITLE]",
    subtitle: "[DESCRIPTION]"
  },
  exercise: {
    title: "[EXERCISE_TITLE]",
    description: "[EXERCISE_DESCRIPTION]",
    tip: "[TIP]",
    steps: [
      { text: "[STEP_1]" },
      { text: "[STEP_2]" }
    ]
  },
  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to continue.",
    success: "🎉 Great work! Your mixing skills are improving!",
    error: "Review the techniques and try again.",
    alreadyCompleted: "You've mastered this mixing technique!"
  }),
  mode: {
    type: "educational",
    sandbox: true,
    showContent: true
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
