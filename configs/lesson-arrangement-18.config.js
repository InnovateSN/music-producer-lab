/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 18
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-18-progress",
  lessonNumber: 18,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: "lesson-arrangement-19.html",
  prevLessonUrl: "lesson-arrangement-17.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 18, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 18"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 18",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
