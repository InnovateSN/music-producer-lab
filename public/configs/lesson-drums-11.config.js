/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 11 - DnB & Breakbeat Patterns
 * 
 * This lesson teaches drum and bass programming including the Amen break,
 * two-step rhythms, and high-energy breakbeat patterns.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-11-progress",
  lessonNumber: 11,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 6,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-12.html",
  prevLessonUrl: "lesson-drums-10.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Drums & Rhythm" }),
    title: "DnB &",
    titleHighlight: "Breakbeat",
    subtitle: "Create <strong>high-energy drum and bass patterns</strong>. Learn the legendary <strong>Amen break</strong>, <strong>two-step rhythms</strong>, and the fastest beats in electronic music."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 174,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true, // Essential for breakbeat dynamics and ghost notes
    requiredTempo: 174
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Two-Step DnB Beat",
    description: "Create the classic drum and bass two-step pattern with syncopated kick, half-time snare, and driving hi-hats.",
    tip: "At 174 BPM with snare on 2 and 4, it feels like 87 BPM—that's the rolling two-step groove!",
    steps: [
      { text: "<strong>Set the tempo to 174 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> Syncopated on steps 1, 7, 10 for that rolling feel." },
      { text: "<strong>Snare:</strong> Half-time backbeat on steps 5 and 13." },
      { text: "<strong>Hi-Hat:</strong> Driving 8th notes (1, 3, 5, 7, 9, 11, 13, 15)." },
      { text: "<strong>Feel:</strong> At 174 BPM, this should feel energetic but rolling!" }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 6, 9],
      instructionText: "Syncopated kick: 1, 7, 10 for the rolling DnB feel.",
      patternHint: {
        enabled: true,
        note: "Kick: 1, 7, 10 (syncopated)"
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #fdcb6e, #f39c12)",
      targetSteps: [4, 12],
      instructionText: "Half-time snare on beats 2 and 4 (steps 5 and 13).",
      patternHint: {
        enabled: true,
        note: "Snare: 5, 13 (half-time backbeat)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "Driving 8th note hi-hats for energy and pulse.",
      patternHint: {
        enabled: true,
        note: "Hi-Hat: every 8th note (1, 3, 5, 7...)"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Two-step DnB: syncopated kick + half-time snare + driving 8th hi-hats"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build the two-step pattern at 174 BPM!",
    success: "Massive! That's the classic DnB two-step. The energy is incredible!",
    error: "Check your kick placement—DnB kicks are syncopated (1, 7, 10), not straight.",
    alreadyCompleted: "You've mastered DnB drums! Try experimenting with Amen break variations."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },
  
  // ====================
  // GENRE INFO
  // ====================
  genreInfo: {
    name: "Drum & Bass / Breakbeat",
    tempoRange: { min: 160, max: 180 },
    standardTempo: 174,
    subgenres: [
      { name: "Liquid DnB", tempo: "170-176 BPM", character: "Melodic, soulful, rolling" },
      { name: "Jump Up", tempo: "172-176 BPM", character: "Aggressive, bouncy, heavy" },
      { name: "Neurofunk", tempo: "174-178 BPM", character: "Dark, technical, complex" },
      { name: "Jungle", tempo: "160-170 BPM", character: "Ragga, breaks, oldschool" }
    ],
    famousBreaks: [
      { name: "Amen Break", source: "The Winstons - Amen Brother (1969)" },
      { name: "Think Break", source: "Lyn Collins - Think (1972)" },
      { name: "Apache", source: "Incredible Bongo Band (1973)" },
      { name: "Funky Drummer", source: "James Brown (1970)" }
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand DnB's high tempo (174 BPM) and half-time feel",
    "Program the classic two-step rhythm",
    "Recognize and recreate the Amen break pattern",
    "Use syncopated kicks for rolling energy"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Drums 11",
        content: `
This lesson focuses on practical workflow and musical intent.
Use the target pattern as a repeatable building block, then adapt it to your genre and arrangement needs.

When practicing, prioritize timing consistency first, then refine tone, dynamics, and variation.
        `
      }
    ]
  },

  // ====================
  // REFERENCE SOURCES
  // ====================
  sourceReferences: [
    {
      name: 'AES (Audio Engineering Society)',
      url: 'https://www.aes.org/',
      usage: 'Audio engineering standards, terminology, and critical-listening best practices'
    },
    {
      name: 'Ableton Live Documentation',
      url: 'https://www.ableton.com/en/manual/',
      usage: 'DAW workflows, production techniques, and practical implementation steps'
    },
    {
      name: 'Wikipedia',
      url: 'https://www.wikipedia.org/',
      usage: 'Historical context, genre evolution, and foundational music theory references'
    }
  ],

};
