/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 9 - Hip-Hop & Boom Bap Drums
 * 
 * This lesson teaches classic hip-hop beat production including boom bap patterns,
 * swing/groove, and MPC-style quantization techniques.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-9-progress",
  lessonNumber: 9,
  lessonCategory: "Drums & Rhythm",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-1",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Digital_audio_workstation",
        "https://en.wikipedia.org/wiki/Rhythm",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
        "https://help.ableton.com/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  }},
  depthLevel: 5,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-10.html",
  prevLessonUrl: "lesson-drums-8.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Drums & Rhythm" }),
    title: "Hip-Hop &",
    titleHighlight: "Boom Bap",
    subtitle: "Program classic <strong>hip-hop beats</strong> from golden-era boom bap to modern styles. Master <strong>swing</strong>, <strong>velocity variation</strong>, and <strong>MPC-style quantization</strong>."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 90,
    stepCount: 16,
    swing: 55, // Key for boom bap!
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    showSwingControl: true,
    enableVelocity: true, // Essential for ghost notes and dynamics
    requiredTempo: 90,
    requiredSwing: 55 // Students must set swing to 55% for boom bap feel
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Boom Bap Beat",
    description: "Create the classic boom bap pattern with syncopated kick, heavy snare, and 8th-note hi-hats. This should make you nod your head!",
    tip: "The kick is SYNCOPATED (not 4-on-the-floor). Place kicks on 1, 8, 9, and 11 for the classic boom bap bounce.",
    steps: [
      { text: "<strong>Set the tempo to 90 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> Syncopated pattern on steps 1, 8, 9, 11 (the 'boom')." },
      { text: "<strong>Snare:</strong> Heavy hits on steps 5 and 13 (the 'bap')." },
      { text: "<strong>Hi-Hat:</strong> 8th notes on steps 1, 3, 5, 7, 9, 11, 13, 15." },
      { text: "<strong>Feel:</strong> Let the swing setting add that head-nod bounce!" }
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
      targetSteps: [0, 7, 8, 10],
      instructionText: "Syncopated boom bap kick: 1, 8, 9, 11 (NOT 4-on-the-floor!).",
      patternHint: {
        enabled: true,
        note: "Kick: 1, 8, 9, 11 (syncopated groove)"
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #fdcb6e, #f39c12)",
      targetSteps: [4, 12],
      instructionText: "Heavy snare on beats 2 and 4 (steps 5 and 13) - the 'bap'.",
      patternHint: {
        enabled: true,
        note: "Snare: 5, 13 (heavy backbeat)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "8th note hi-hats for consistent pulse with groove.",
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
    note: "Boom bap = syncopated kick (1, 8, 9, 11) + heavy snare (5, 13) + 8th hi-hats"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build the boom bap pattern. Remember: the kick is SYNCOPATED!",
    success: "Classic boom bap! That swing and syncopation is what makes heads nod. You've got the groove!",
    error: "Check your kick placement—boom bap kicks are on 1, 8, 9, 11 (not 4-on-the-floor like house).",
    alreadyCompleted: "You've mastered boom bap! Try adding ghost notes and varying velocity for more flavor."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: true, // Allow saving boom bap variations
    enableExport: false,
    showSwingControl: true
  },
  
  // ====================
  // GENRE INFO
  // ====================
  genreInfo: {
    name: "Hip-Hop / Boom Bap",
    tempoRange: { min: 70, max: 100 },
    swingRange: { min: 50, max: 65 },
    subgenres: [
      { name: "Boom Bap", tempo: "85-98 BPM", swing: "55-62%", character: "Hard-hitting, classic NYC" },
      { name: "Lo-Fi Hip-Hop", tempo: "70-90 BPM", swing: "50-58%", character: "Mellow, jazzy, relaxed" },
      { name: "Modern Hip-Hop", tempo: "70-160 BPM", swing: "0-55%", character: "Clean, punchy, varied" }
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand syncopated kick patterns (not 4-on-the-floor)",
    "Program classic boom bap drum patterns",
    "Use swing to create the hip-hop 'bounce'",
    "Recognize different hip-hop subgenre characteristics"
  ],
  
  // ====================
  // HISTORICAL CONTEXT
  // ====================
  historicalContext: {
    era: "Golden Era (1988-1996)",
    keyProducers: ["DJ Premier", "Pete Rock", "J Dilla", "9th Wonder", "Madlib"],
    keyEquipment: ["Akai MPC60", "E-mu SP-1200", "Roland TR-808"],
    influence: "Sampled from funk, soul, and jazz records; defined East Coast hip-hop sound"
  },


  theory: {
    sections: [
      {
        title: "Core Theory: Drums 9",
        content: `
This lesson focuses on practical workflow and musical intent.
Use the target pattern as a repeatable building block, then adapt it to your genre and arrangement needs.

When practicing, prioritize timing consistency first, then refine tone, dynamics, and variation.
        `
      }
    ]
  },


  assessmentRubric: {
    accuracy: {
      target: ">= 80%",
      evidence: "Quiz answers and concept checks inside the lesson"
    },
    timing: {
      target: "<= ±25 ms on guided rhythmic tasks",
      evidence: "Metronome-aligned exercise submissions"
    },
    mixClarity: {
      target: "No uncontrolled clipping and clear element separation",
      evidence: "A/B playback checks with level-matched references"
    },
    arrangementFlow: {
      target: "Transitions preserve groove and perceived energy",
      evidence: "Section-to-section transition checklist"
    }
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
