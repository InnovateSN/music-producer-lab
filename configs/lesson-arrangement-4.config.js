/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 4 - The 5 Elements of Arrangement
 * 
 * This lesson teaches Bobby Owsinski's arrangement framework:
 * Foundation, Pad, Rhythm, Lead, and Fills.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-4-progress",
  lessonNumber: 4,
  lessonCategory: "Arrangement",
  depthLevel: 3,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-5.html",
  prevLessonUrl: "lesson-arrangement-3.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Arrangement" }),
    title: "The 5 Elements of",
    titleHighlight: "Arrangement",
    subtitle: "Learn <strong>Bobby Owsinski's legendary framework</strong> for professional arrangements. Master the <strong>5 essential elements</strong>—Foundation, Pad, Rhythm, Lead, and Fills."
  },
  
  // ====================
  // THE 5 ELEMENTS
  // ====================
  elements: [
    {
      name: "Foundation",
      icon: "🔊",
      color: "#e17055",
      description: "The low-end elements that ground your song. Usually bass and drums working together.",
      examples: ["Kick + Bass", "808", "Drums + Synth Bass", "Upright Bass + Drums"],
      purpose: "Anchor the track harmonically and rhythmically",
      frequencyRange: "Sub-bass to low-mids (20Hz-300Hz)"
    },
    {
      name: "Pad",
      icon: "☁️",
      color: "#a29bfe",
      description: "Sustained elements that provide harmonic context and fill the mid-range.",
      examples: ["Synth Pad", "Strings", "Organ", "Electric Piano", "Choir"],
      purpose: "Create warmth and harmonic bed for other elements",
      frequencyRange: "Low-mids to high-mids (200Hz-4kHz)"
    },
    {
      name: "Rhythm",
      icon: "🎸",
      color: "#fdcb6e",
      description: "Elements that add rhythmic interest and forward motion.",
      examples: ["Rhythm Guitar", "Synth Arpeggios", "Percussion", "Piano Comping"],
      purpose: "Add motion and groove beyond the drums",
      frequencyRange: "Mids (300Hz-5kHz)"
    },
    {
      name: "Lead",
      icon: "🎤",
      color: "#00cec9",
      description: "The main melodic element that listeners focus on.",
      examples: ["Vocals", "Lead Synth", "Guitar Solo", "Saxophone", "Whistle"],
      purpose: "Carry the melody and focal point of the track",
      frequencyRange: "Mids to highs (300Hz-8kHz)"
    },
    {
      name: "Fills",
      icon: "✨",
      color: "#fd79a8",
      description: "Short, attention-grabbing elements in gaps or transitions.",
      examples: ["Drum Fills", "Vocal Ad-libs", "FX Sweeps", "Guitar Licks", "One-shots"],
      purpose: "Add interest and ear candy without competing with lead",
      frequencyRange: "Variable (based on fill type)"
    }
  ],
  
  // ====================
  // THE GOLDEN RULE
  // ====================
  goldenRule: {
    maxElements: 5,
    recommendedElements: 4,
    reasoning: "More than 4-5 simultaneous elements creates frequency clashing and muddiness. Professional producers know: less is more."
  },
  
  // ====================
  // SECTION EXAMPLES
  // ====================
  sectionExamples: [
    { section: "Intro", elements: ["Foundation (light)", "Pad"], count: 2 },
    { section: "Verse", elements: ["Foundation", "Pad", "Lead (Vocals)"], count: 3 },
    { section: "Chorus", elements: ["Foundation", "Pad", "Rhythm", "Lead"], count: 4 },
    { section: "Drop", elements: ["Foundation (heavy)", "Rhythm", "Lead", "Fills"], count: 4 }
  ],
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build an Arrangement with the 5 Elements",
    description: "Use the interactive builder to understand how elements combine. Keep under 5 elements for clarity!",
    tip: "Start with Foundation, add elements one by one, and notice how the 'fullness' changes.",
    validation: {
      minElementsCombined: 3, // User must try at least 3 elements together
      maxBeforeWarning: 5
    }
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Experiment with the 5 elements to understand how they combine.",
    success: "🎉 You understand the 5 elements! Now you can build clear, professional arrangements.",
    error: "Try combining more elements to see how they interact.",
    alreadyCompleted: "You've mastered the 5 elements framework!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "interactive",
    sandbox: true,
    showTargetHint: false,
    enablePresets: false,
    enableExport: false
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Identify the 5 arrangement elements: Foundation, Pad, Rhythm, Lead, Fills",
    "Understand the purpose of each element in a mix",
    "Apply the 4-5 element rule for clear arrangements",
    "Know which elements to use in different sections"
  ],
  
  // ====================
  // SOURCE ATTRIBUTION
  // ====================
  source: {
    author: "Bobby Owsinski",
    reference: "The Mixing Engineer's Handbook",
    concept: "5 Elements of a Great Arrangement"
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
