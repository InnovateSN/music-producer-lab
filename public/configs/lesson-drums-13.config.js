/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 13 - Humanization & Groove Templates
 * 
 * This lesson teaches humanization techniques including micro-timing,
 * velocity curves, swing, and groove template extraction.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-13-progress",
  lessonNumber: 13,
  lessonCategory: "Drums & Rhythm",

  progression: {
    difficulty: "advanced",
    prerequisites: ["drums-12","drums-11"],
    outcomes: ["Completare gli obiettivi pratici di drums-13","Consolidare competenze advanced nel modulo drums"]
  },


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
  depthLevel: 7,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-14.html",
  prevLessonUrl: "lesson-drums-12.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Drums & Rhythm" }),
    title: "Humanization &",
    titleHighlight: "Groove Templates",
    subtitle: "Make programmed drums <strong>feel human</strong>. Master <strong>micro-timing shifts</strong>, <strong>velocity curves</strong>, and <strong>groove template extraction</strong>."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 90,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    enableHumanization: true,
    showSwingControl: true,
    requiredTempo: 90, // Students must set tempo to 90 BPM for hip-hop feel
    requiredSwing: 54 // Students must add 54% swing for MPC-style groove (Step 5)
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Humanize a Beat",
    description: "Apply humanization techniques to transform a robotic pattern into a living, breathing groove.",
    tip: "Start subtle—8-15ms timing variation and 15-25% velocity randomization. You can always add more.",
    steps: [
      { text: "<strong>Step 1:</strong> Set the tempo to 90 BPM for a classic hip-hop feel." },
      { text: "<strong>Step 2:</strong> Program the basic kick-snare-hihat pattern." },
      { text: "<strong>Step 3:</strong> Apply 15ms timing randomization to hi-hats only." },
      { text: "<strong>Step 4:</strong> Create velocity curve: louder downbeats, softer off-beats." },
      { text: "<strong>Step 5:</strong> Add 54% <a href=\"glossary.html#swing\" style=\"color: var(--accent-cyan); text-decoration: underline;\">swing</a> for MPC-style groove." }
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
      targetSteps: [0, 6, 8, 12],
      instructionText: "Keep kick mostly on grid for foundation.",
      patternHint: { enabled: true, note: "Kick anchors the groove" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [4, 12],
      instructionText: "Snare can lay slightly behind the beat.",
      patternHint: { enabled: true, note: "Try +5ms delay on snare" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "Hi-hats get most humanization—timing and velocity.",
      patternHint: { enabled: true, note: "Apply <a href=\"glossary.html#swing\" style=\"color: var(--accent-cyan); text-decoration: underline;\">swing</a> + <a href=\"glossary.html#velocity\" style=\"color: var(--accent-cyan); text-decoration: underline;\">velocity</a> curve" }
    }
  ],
  
  // ====================
  // HUMANIZATION PRESETS
  // ====================
  humanizationPresets: [
    {
      id: "subtle",
      name: "Subtle",
      timing: 5,
      velocity: 10,
      swing: 50,
      description: "Barely noticeable—keeps pattern tight but alive"
    },
    {
      id: "mpc",
      name: "MPC 60",
      timing: 10,
      velocity: 15,
      swing: 54,
      description: "Classic hip-hop swing and feel"
    },
    {
      id: "loose",
      name: "Loose Pocket",
      timing: 18,
      velocity: 20,
      swing: 58,
      description: "Relaxed, laid-back feel for soul/R&B"
    },
    {
      id: "live",
      name: "Live Feel",
      timing: 12,
      velocity: 25,
      swing: 52,
      description: "Simulates real drummer variation"
    }
  ],
  
  // ====================
  // GROOVE TEMPLATES
  // ====================
  grooveTemplates: [
    { id: "mpc60", name: "MPC 60 Swing", swing: 54, feel: "hip-hop" },
    { id: "tr808", name: "TR-808 Feel", swing: 50, feel: "electronic" },
    { id: "motown", name: "Motown Pocket", swing: 58, feel: "soul" },
    { id: "live", name: "Live Drummer", swing: 52, feel: "organic" }
  ],
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Apply humanization to bring this pattern to life!",
    success: "🎯 That groove feels human! The timing and velocity variation creates a natural pocket.",
    error: "Try adjusting the timing randomization—subtle changes make a big difference.",
    alreadyCompleted: "You've mastered humanization! Apply these techniques to all your drum programming."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: true,
    enableExport: false,
    showVelocityLane: true,
    showHumanizeControls: true,
    showSwingControl: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Apply micro-timing variations (5-20ms) for human feel",
    "Create and use groove templates from recordings",
    "Design velocity curves for natural dynamics",
    "Extract groove from audio and apply to MIDI"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Drums 13",
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
