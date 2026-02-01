#!/bin/bash

# Generate Sound Design configs (15 lessons)
for i in {1..15}; do
  cat > "lesson-sound-design-$i.config.js" << 'EOF'
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
    success: "Excellent! You've mastered this sound design technique!",
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
EOF
done

# Generate Mixing configs (15 lessons)
for i in {1..15}; do
  cat > "lesson-mixing-$i.config.js" << 'EOF'
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
    success: "Great work! Your mixing skills are improving!",
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
EOF
done

# Generate Vocals configs (12 lessons)
for i in {1..12}; do
  cat > "lesson-vocals-$i.config.js" << 'EOF'
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
    success: "Perfect! Your vocal production skills are growing!",
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
EOF
done

# Generate Mastering configs (10 lessons)
for i in {1..10}; do
  cat > "lesson-mastering-$i.config.js" << 'EOF'
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
    success: "Excellent! Your mastering knowledge is expanding!",
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
EOF
done

echo "Generated all config files successfully!"
