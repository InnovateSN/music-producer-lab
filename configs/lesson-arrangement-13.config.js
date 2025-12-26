/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 13
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-13-progress",
  lessonNumber: 13,
  lessonCategory: "Arrangement",
  depthLevel: 4,
  
  nextLessonUrl: "lesson-arrangement-14.html",
  prevLessonUrl: "lesson-arrangement-12.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 13"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 13",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
