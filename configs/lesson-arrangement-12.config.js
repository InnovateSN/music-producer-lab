/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 12
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-12-progress",
  lessonNumber: 12,
  lessonCategory: "Arrangement",
  depthLevel: 3,
  
  nextLessonUrl: "lesson-arrangement-13.html",
  prevLessonUrl: "lesson-arrangement-11.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 12"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 12",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
