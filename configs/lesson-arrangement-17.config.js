/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 17
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-17-progress",
  lessonNumber: 17,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: "lesson-arrangement-18.html",
  prevLessonUrl: "lesson-arrangement-16.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 17, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 17"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 17",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
