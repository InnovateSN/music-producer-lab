/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering '"$i"' - [LESSON_TITLE]
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mastering-'"$i"'-progress",
  lessonNumber: '"$i"',
  lessonCategory: "Mastering",
  nextLessonUrl: "lesson-mastering-'"$((i+1))"'.html",
  prevLessonUrl: "lesson-mastering-'"$((i-1))"'.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: '"$i"', categoryLabel: "Mastering" }),
    title: "[LESSON_TITLE]:",
    titleHighlight: "[SUBTITLE]",
    subtitle: "[DESCRIPTION]"
  },
  exercise: {
    title: "[EXERCISE_TITLE]",
    description: "[EXERCISE_DESCRIPTION]",
    tip: "[TIP]",
    steps: [
      { text: "[STEP_1]" }
    ]
  },
  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to continue.",
    success: "🎉 Excellent! Your mastering knowledge is expanding!",
    error: "Review the mastering concepts and try again.",
    alreadyCompleted: "You've mastered this mastering technique!"
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
