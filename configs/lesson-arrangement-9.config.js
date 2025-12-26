/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 9
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-9-progress",
  lessonNumber: 9,
  lessonCategory: "Arrangement",
  depthLevel: 3,
  
  nextLessonUrl: "lesson-arrangement-10.html",
  prevLessonUrl: "lesson-arrangement-8.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 9"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 9",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
