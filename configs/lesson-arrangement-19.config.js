/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 19
 */
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-19-progress",
  lessonNumber: 19,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: "lesson-arrangement-20.html",
  prevLessonUrl: "lesson-arrangement-18.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Arrangement" }),
    title: "Arrangement",
    titleHighlight: "Lesson 19"
  },
  
  messages: applyMessagePreset("arrangement", {
    initial: "Complete the arrangement exercise!",
    success: "Great work on this arrangement lesson!",
    error: "Keep working on your arrangement."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Master arrangement technique 19",
    "Apply professional arrangement principles"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
