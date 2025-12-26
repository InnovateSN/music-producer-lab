/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 8
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-8-progress",
  lessonNumber: 8,
  lessonCategory: "Arrangement",
  depthLevel: 2,
  
  nextLessonUrl: "lesson-arrangement-9.html",
  prevLessonUrl: "lesson-arrangement-7.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 8"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 8",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
