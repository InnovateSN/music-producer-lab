/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 10 - Call and Response
 *
 * This lesson teaches the call-and-response technique—a fundamental musical
 * conversation where one element "asks" and another "answers."
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-10-progress",
  lessonNumber: 10,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-11.html",
  prevLessonUrl: "lesson-arrangement-9.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Arrangement" }),
    title: "Call and Response:",
    titleHighlight: "Musical Conversation",
    subtitle: "Master the <strong>call-and-response</strong> technique. Learn how elements <strong>talk to each other</strong>, creating engaging musical dialogues. This ancient technique appears in blues, jazz, gospel, hip-hop, and EDM."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a Call-and-Response Arrangement",
    description: "Build an arrangement where instruments <strong>answer each other</strong>. One element plays a phrase (the call), then another responds (the response). This creates <strong>musical conversation</strong> and keeps the listener engaged.",
    tip: "Think of it like a conversation: Person A asks a question, Person B answers. In music: Lead plays 2 bars, response element plays 2 bars. The response should complement or answer the call, not just copy it.",
    steps: [
      { text: "<strong>Create the call</strong> - Lead melody or vocal phrase (2-4 bars)" },
      { text: "<strong>Create the response</strong> - Different instrument answers (2-4 bars)" },
      { text: "<strong>Alternate between call and response</strong> - Create a dialogue" },
      { text: "<strong>Vary the intensity</strong> - Responses can agree, argue, or build" },
      { text: "<strong>Use in different sections</strong> - Verse, chorus, or breakdown" },
      { text: "<strong>Try overlapping</strong> - Advanced: response starts before call finishes" }
    ]
  },

  // ====================
  // CALL-AND-RESPONSE PATTERNS
  // ====================
  patterns: [
    {
      name: "2-Bar Exchange",
      icon: "💬",
      structure: "A-A | B-B",
      description: "Classic pattern: call for 2 bars, response for 2 bars.",
      examples: ["Blues guitar licks", "Gospel vocals", "Jazz horns"],
      usage: "Most common, easy to follow"
    },
    {
      name: "4-Bar Exchange",
      icon: "🗣️",
      structure: "A-A-A-A | B-B-B-B",
      description: "Longer phrases for more development.",
      examples: ["Verse-chorus vocals", "EDM build/drop", "Hip-hop verse/ad-lib"],
      usage: "Builds more tension"
    },
    {
      name: "Question-Answer",
      icon: "❓",
      structure: "A-up? | B-down.",
      description: "Call ends on high note (question), response resolves down (answer).",
      examples: ["Gospel call-response", "Classical antecedent-consequent"],
      usage: "Creates strong resolution"
    },
    {
      name: "Overlapping",
      icon: "🔗",
      structure: "A-A-AB | B-B-BA",
      description: "Response begins before call finishes, creating continuous dialogue.",
      examples: ["Jazz improvisation", "Gospel choir", "EDM vocal chops"],
      usage: "Advanced, creates urgency"
    }
  ],

  // ====================
  // INSTRUMENT PAIRINGS
  // ====================
  instrumentPairings: [
    { call: "Vocals", response: "Guitar licks", genre: "Blues, Rock" },
    { call: "Lead synth", response: "Vocal chops", genre: "EDM, House" },
    { call: "Rapper", response: "Hype man ad-libs", genre: "Hip-Hop" },
    { call: "Main vocal", response: "Backing vocals", genre: "Gospel, Pop" },
    { call: "Horn section", response: "Piano", genre: "Jazz, Funk" },
    { call: "Melody", response: "Bass line", genre: "Funk, Disco" }
  ],

  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "call-and-response",
    minExchanges: 2, // At least 2 call-response pairs
    requireDistinctElements: true, // Call and response must be different instruments
    maxGapBetween: 2, // Max 2 beats of silence between call and response
    recommendedLength: { call: "2-4 bars", response: "2-4 bars" }
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Create a call-and-response dialogue between two musical elements!",
    success: "🎭 Beautiful musical conversation! Your call-and-response creates engaging flow.",
    error: "Make sure you have clear call and response sections with different elements.",
    alreadyCompleted: "You've mastered call-and-response! Try more complex overlapping patterns."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    highlightPhrases: true,
    showCallResponseIndicator: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the call-and-response technique and its musical origins",
    "Create effective musical dialogues between instruments",
    "Apply 2-bar and 4-bar exchange patterns",
    "Use question-answer phrasing for strong resolution",
    "Implement call-and-response in different genres and contexts"
  ],

  // ====================
  // HISTORICAL CONTEXT
  // ====================
  context: {
    origins: "African musical traditions, gospel, blues",
    modernUse: "Hip-hop ad-libs, EDM vocal chops, pop backing vocals",
    examples: ["Ray Charles - What'd I Say", "Kanye West - All of the Lights", "Daft Punk - Around the World"]
  }
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
