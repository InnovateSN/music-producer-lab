/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 15
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-15-progress",
  lessonNumber: 15,
  lessonCategory: "Arrangement",
  depthLevel: 4,
  
  nextLessonUrl: "lesson-arrangement-16.html",
  prevLessonUrl: "lesson-arrangement-14.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 15"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 15",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
