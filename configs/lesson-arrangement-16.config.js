/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 16
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-16-progress",
  lessonNumber: 16,
  lessonCategory: "Arrangement",
  depthLevel: 4,
  
  nextLessonUrl: "lesson-arrangement-17.html",
  prevLessonUrl: "lesson-arrangement-15.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 16"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 16",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
