/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 7 - Hip-Hop & Urban Structures
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-7-progress",
  lessonNumber: 7,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: "lesson-arrangement-8.html",
  prevLessonUrl: "lesson-arrangement-6.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Arrangement" }),
    title: "Hip-Hop & Urban",
    titleHighlight: "Structures",
    subtitle: "Arrange <strong>hip-hop tracks</strong> with <strong>verses, hooks, and 808s</strong>. Master <strong>beat switches</strong> and <strong>interludes</strong>."
  },
  
  sections: [
    { id: "intro", name: "Intro", bars: "4-8", energy: 40 },
    { id: "verse", name: "Verse", bars: "16", energy: 60 },
    { id: "hook", name: "Hook", bars: "8", energy: 85 },
    { id: "bridge", name: "Bridge", bars: "8", energy: 50 }
  ],
  
  messages: applyMessagePreset("arrangement", {
    initial: "Build a hip-hop arrangement with verse-hook structure!",
    success: "🎤 Fire arrangement! The verse-hook flow is perfect.",
    error: "Make sure verses have room for vocals and hooks are fuller."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Structure verse-hook patterns effectively",
    "Create beat switches for variety",
    "Use interludes and bridges strategically",
    "Build momentum through hip-hop tracks"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
