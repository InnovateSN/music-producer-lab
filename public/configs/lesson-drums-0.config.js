/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 0 - Music Production Fundamentals
 *
 * This is an introductory lesson covering basic concepts for complete beginners.
 * Sandbox mode allows free experimentation while learning fundamental concepts.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson0-progress",
  lessonNumber: 0,
  lessonCategory: "Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: [],
    outcomes: ["Completare gli obiettivi pratici di drums-0","Consolidare competenze beginner nel modulo drums"]
  },


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Digital_audio_workstation",
        "https://en.wikipedia.org/wiki/MIDI",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  },

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-1.html",
  prevLessonUrl: null,
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 0, categoryLabel: "Fundamentals" }),
    title: "Music Production Fundamentals:",
    titleHighlight: "Understanding the Basics",
    subtitle: "Before you start making beats, learn the essential concepts: <strong>DAWs</strong>, <strong>loops</strong>, <strong>tempo</strong>, <strong>bars</strong>, <strong>beats</strong>, and how music is organized in time. This lesson is designed for absolute beginners with zero prior knowledge."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Experiment with the Sequencer",
    description: "This lesson is in <strong>sandbox mode</strong> - there's no right or wrong answer. Click around, press play, and get familiar with the interface. Understanding how the grid works will prepare you for all future lessons.",
    tip: "Try clicking different steps on the Kick row, then press Play. Notice how the sound repeats in a loop!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider." },
      { text: "<strong>Click on any step</strong> in the grid to activate it (it will light up)." },
      { text: "Press <strong>Play</strong> to hear your pattern loop continuously." },
      { text: "Notice how the playhead moves from left to right across 16 steps, then repeats." },
      { text: "Try different patterns. There are no mistakes - just experiments!" },
      { text: "When you feel comfortable, click <strong>Complete Lesson</strong> to move on." }
    ]
  },

  // ====================
  // INSTRUMENTS CONFIG
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [], // Sandbox mode - no target pattern
      instructionText: "Sandbox mode: Click anywhere to place kick drum hits and experiment!",
      patternHint: {
        label: "Kick"
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#b366ff,#d4a5ff)",
      targetSteps: [], // Sandbox mode - no target pattern
      instructionText: "Sandbox mode: Click anywhere to place snare hits and experiment!",
      patternHint: {
        label: "Snare"
      }
    }
  ],

  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: false, // No pattern hint in sandbox mode
    note: ""
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Explore freely, then click 'Complete Lesson' when you're ready to continue.",
    success: "Great! You're ready to start building your first beat pattern.",
    error: "" // No error in sandbox mode
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: true, // Free exploration mode
    showTargetHint: false,
    enablePresets: false,
    enableExport: false,
    alwaysShowNextButton: true // Show Next Lesson button even in sandbox mode
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "What is a DAW?",
        content: "A <strong>DAW (Digital Audio Workstation)</strong> is the main software people use to create music on a computer. Examples include Ableton Live, FL Studio, Logic Pro, and GarageBand. Think of it as a recording studio inside your laptop. A DAW lets you record audio (like voices or guitars) and write musical instructions using a grid."
      },
      {
        title: "What is a Loop?",
        content: "A <strong>loop</strong> is a short piece of music that repeats. Think of it like a small wheel that turns again and again. In dance music, loops are often <strong>one bar long</strong>. When that bar repeats, you get a steady groove that people can move to. The sequencer you see above creates loops."
      },
      {
        title: "Tempo and BPM",
        content: "<strong>Tempo</strong> is the speed of the music, measured in <strong>BPM (beats per minute)</strong>. If the tempo is 120 BPM, there are 120 beats in one minute. Higher BPM feels faster and more energetic. Lower BPM feels slower and heavier. Most house and techno tracks are around 120-140 BPM."
      },
      {
        title: "Understanding Bars and Beats",
        content: "Most dance music is in <strong>4/4 time</strong> (\"four four\"), which means there are <strong>four beats in every bar</strong>. A <strong>beat</strong> is the basic pulse you would naturally clap to. If you count along: <em>one-two-three-four, one-two-three-four</em> - each time you reach \"four\" and start again at \"one,\" you've completed <strong>one bar</strong>."
      },
      {
        title: "The 16-Step Grid",
        content: "The sequencer grid has <strong>16 steps</strong> for one bar. Why 16? Because each of the 4 beats is divided into 4 smaller pieces (4 × 4 = 16). These smaller divisions are called <strong>16th notes</strong>. This grid lets you place sounds precisely in time. <strong>Steps 1, 5, 9, and 13</strong> represent the four main beats (quarter notes)."
      },
      {
        title: "Notes and Subdivisions (Simple)",
        content: "Even if you don't know music theory, you can understand timing as divisions:<br><br>• <strong>Quarter note</strong> = the bar divided into 4 equal parts (the main beats)<br>• <strong>Eighth note</strong> = the bar divided into 8 equal parts<br>• <strong>Sixteenth note</strong> = the bar divided into 16 equal parts<br><br>The grid shows sixteenth notes, giving you maximum precision."
      },
      {
        title: "Audio vs MIDI",
        content: "<strong>Audio</strong> is recorded sound (like a WAV or MP3 file). <strong>MIDI</strong> is just instructions - it tells the computer \"play this sound here.\" In this sequencer, when you click a step, you're creating a MIDI instruction. The actual kick sound is an audio sample that gets triggered by your MIDI pattern."
      },
      {
        title: "Listening Like a Producer",
        content: "When you press Play, focus on two things:<br><br>1. <strong>Does it feel even?</strong> Like a metronome you could dance to?<br>2. <strong>Does it loop smoothly?</strong> Does the end flow back to the start without stumbling?<br><br>These are the foundations of good rhythm programming."
      }
    ]
  },


  learningObjectives: [
    "Understand core concepts in drums 0",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],

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
