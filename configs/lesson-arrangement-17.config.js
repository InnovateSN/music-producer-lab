/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 17 - Advanced Transition Techniques
 *
 * This lesson teaches pro-level transition techniques beyond basic risers.
 * Master reverse effects, noise sweeps, automation, and creative transitions.
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
    title: "Advanced Transitions:",
    titleHighlight: "Pro Techniques",
    subtitle: "Master <strong>professional transition techniques</strong> beyond basic risers. Learn <strong>reverse effects</strong>, <strong>automation tricks</strong>, <strong>creative edits</strong>, and <strong>unexpected moments</strong>."
  },

  exercise: {
    title: "Create Professional Transitions Using Advanced Techniques",
    description: "Use <strong>pro-level transition techniques</strong> to create seamless, exciting section changes. Combine multiple techniques for maximum impact.",
    tip: "Stack techniques for impact: reverse cymbal + filter sweep + volume automation + silence before drop = massive transition. Pros use 3-5 techniques simultaneously.",
    steps: [
      { text: "<strong>Reverse cymbal/vocal</strong> - Create anticipation with reversed audio" },
      { text: "<strong>Automation sweep</strong> - Automate filter, reverb, or pitch" },
      { text: "<strong>Rhythmic stutter</strong> - Chop last bar into repeating fragments" },
      { text: "<strong>Impact moment</strong> - Use silence, kick, or cymbal hit on the '1'" },
      { text: "<strong>Layer 3-4 techniques</strong> - Combine for professional transitions" },
      { text: "<strong>Unexpected transition</strong> - Break the pattern once for surprise" }
    ]
  },

  advancedTechniques: [
    {
      name: "Reverse Cymbal/Vocal",
      icon: "⏮️",
      description: "Reverse a cymbal crash or vocal phrase leading into the drop",
      timing: "Last 1-2 bars before section",
      impact: "High - creates anticipation"
    },
    {
      name: "Filter Automation",
      icon: "🎛️",
      description: "Automate low-pass filter opening from closed to fully open",
      timing: "Last 4-8 bars",
      impact: "Medium - gradual build"
    },
    {
      name: "Rhythmic Stutter",
      icon: "🔀",
      description: "Chop last bar into 1/16th or 1/32nd repeats",
      timing: "Last bar only",
      impact: "High - creates urgency"
    },
    {
      name: "Pitch Rise/Drop",
      icon: "📊",
      description: "Automate pitch up (build) or down (drop intro)",
      timing: "Last 2-4 bars",
      impact: "Medium-High"
    },
    {
      name: "Volume Swell",
      icon: "🔊",
      description: "Fade out current section, fade in next section",
      timing: "Last 1-2 bars",
      impact: "Low - smooth transition"
    },
    {
      name: "Drum Fill into Silence",
      icon: "🥁",
      description: "Drum fill ends on silence, then drop hits",
      timing: "Last bar + 1 beat silence",
      impact: "Maximum - unexpected pause"
    },
    {
      name: "Texture Change",
      icon: "✨",
      description: "Abruptly change reverb/delay/distortion amount",
      timing: "Exactly on section change",
      impact: "Medium - sonic shift"
    }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create advanced transitions using pro techniques!",
    success: "🎚️ Pro-level transitions! Your section changes are seamless and exciting.",
    error: "Try combining multiple transition techniques for bigger impact.",
    alreadyCompleted: "You've mastered advanced transitions!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showAutomationLanes: true,
    enableAdvancedFX: true
  },

  learningObjectives: [
    "Apply seven advanced transition techniques",
    "Layer multiple techniques for maximum impact",
    "Use automation creatively for transitions",
    "Create unexpected transition moments",
    "Understand timing for each technique type"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
