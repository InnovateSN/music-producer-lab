/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 11
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-11-progress",
  lessonNumber: 11,
  lessonCategory: "Arrangement",
  depthLevel: 3,
  
  nextLessonUrl: "lesson-arrangement-12.html",
  prevLessonUrl: "lesson-arrangement-10.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 11"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 11",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
