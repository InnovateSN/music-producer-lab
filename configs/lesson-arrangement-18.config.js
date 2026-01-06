/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 18 - Genre Blending
 *
 * This lesson teaches how to blend elements from different genres.
 * Master cross-genre arrangement, fusion techniques, and hybrid styles.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-18-progress",
  lessonNumber: 18,
  lessonCategory: "Arrangement",
  depthLevel: 5,

  nextLessonUrl: "lesson-arrangement-19.html",
  prevLessonUrl: "lesson-arrangement-17.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 18, categoryLabel: "Arrangement" }),
    title: "Genre Blending:",
    titleHighlight: "Fusion Techniques",
    subtitle: "Master <strong>cross-genre arrangement</strong>. Learn to blend <strong>hip-hop with EDM</strong>, <strong>rock with electronic</strong>, or <strong>pop with trap</strong>. Modern hits often blend multiple genres."
  },

  exercise: {
    title: "Create a Genre-Blending Arrangement",
    description: "Combine elements from <strong>two or more genres</strong> into a cohesive arrangement. Use verse from one genre, chorus from another, or blend simultaneously. The key is maintaining identity from both genres.",
    tip: "Genre blending recipe: Take the DRUMS from one genre + HARMONY from another + STRUCTURE from a third. Example: Trap drums + Pop chords + EDM structure = Modern pop hit.",
    steps: [
      { text: "<strong>Choose 2-3 genres to blend</strong> - Select complementary styles" },
      { text: "<strong>Identify signature elements</strong> - What defines each genre?" },
      { text: "<strong>Intro: Establish genre A</strong> - Start with one genre identity" },
      { text: "<strong>Verse: Introduce genre B elements</strong> - Blend begins" },
      { text: "<strong>Chorus: Full fusion</strong> - Both genres present simultaneously" },
      { text: "<strong>Bridge: Genre C surprise</strong> - Optional third genre element" }
    ]
  },

  genreCombinations: [
    {
      blend: "Pop + Trap",
      signatureElements: {
        pop: ["Major key", "Verse-chorus structure", "Catchy melody"],
        trap: ["808 bass", "Hi-hat rolls", "Snare hits"],
        result: "Modern Billboard pop (Ariana Grande, Post Malone)"
      }
    },
    {
      blend: "Rock + Electronic",
      signatureElements: {
        rock: ["Live drums", "Electric guitar", "Organic feel"],
        electronic: ["Synth bass", "EDM drops", "Electronic FX"],
        result: "Alternative/indie electronic (CHVRCHES, Twenty One Pilots)"
      }
    },
    {
      blend: "Hip-Hop + House",
      signatureElements: {
        hiphop: ["Rap vocals", "808s", "16-bar verses"],
        house: ["4-on-floor kick", "Chord stabs", "Filter sweeps"],
        result: "Future house rap (DJ Snake, Major Lazer)"
      }
    },
    {
      blend: "Jazz + Lo-Fi",
      signatureElements: {
        jazz: ["7th chords", "Swing feel", "Walking bass"],
        lofi: ["Vinyl crackle", "Downtempo beats", "Sample aesthetic"],
        result: "Lo-fi hip-hop (ChilledCow, Jinsang)"
      }
    }
  ],

  blendingTechniques: [
    { technique: "Sectional Blending", description: "Verse = Genre A, Chorus = Genre B" },
    { technique: "Simultaneous Blending", description: "Both genres present at once" },
    { technique: "Transitional Blending", description: "Gradually morph from A to B" },
    { technique: "Element Substitution", description: "Replace one genre's element with another's" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Blend elements from two or more genres!",
    success: "🎭 Brilliant genre fusion! Your blend creates something fresh while honoring both styles.",
    error: "Make sure signature elements from both genres are clearly present.",
    alreadyCompleted: "You've mastered genre blending! Try more unexpected combinations."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showGenreIndicators: true
  },

  learningObjectives: [
    "Identify signature elements that define genres",
    "Blend two or more genres cohesively",
    "Apply four blending techniques effectively",
    "Create modern cross-genre arrangements",
    "Maintain identity from multiple genres simultaneously"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
