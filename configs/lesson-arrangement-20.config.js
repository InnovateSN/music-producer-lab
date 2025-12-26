/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 20
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-20-progress",
  lessonNumber: 20,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: null,
  prevLessonUrl: "lesson-arrangement-19.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 20, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 20"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 20",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
