/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals '"$i"' - [LESSON_TITLE]
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-'"$i"'-progress",
  lessonNumber: '"$i"',
  lessonCategory: "Vocals",
  nextLessonUrl: "lesson-vocals-'"$((i+1))"'.html",
  prevLessonUrl: "lesson-vocals-'"$((i-1))"'.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: '"$i"', categoryLabel: "Vocals" }),
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
    initial: "Complete this vocal production lesson to continue.",
    success: "🎉 Perfect! Your vocal production skills are growing!",
    error: "Review the vocal techniques and try again.",
    alreadyCompleted: "You've mastered this vocal technique!"
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
