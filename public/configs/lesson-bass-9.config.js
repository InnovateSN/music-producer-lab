/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 9 - Bass Fills & Transitions
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Bass & Low End",
  lessonNumber: 9
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-9-progress",
  lessonNumber: 9,
  lessonCategory: "Bass & Low End",

  progression: {
    difficulty: "intermediate",
    prerequisites: ["bass-8"],
    outcomes: ["Completare gli obiettivi pratici di bass-9","Consolidare competenze intermediate nel modulo bass"]
  },


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-1",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Digital_audio_workstation",
        "https://en.wikipedia.org/wiki/Bass_(sound)",
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

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-10.html",
  prevLessonUrl: "lesson-bass-8.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Bass & Low End" }),
    title: "Bass Fills & Transitions",
    titleHighlight: "",
    subtitle: "Add movement between song sections. Create fill patterns that build tension and guide listeners through changes from verse to chorus, breakdown to drop."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 1,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a Bass Fill",
    description: "Bass fills are short melodic runs that signal 'something is about to change.' They create anticipation before a new section.",
    tip: "Fills work best in the last bar before a section change. They build tension and release into the new section.",
    steps: ['Create ascending pattern: <strong>C3 → D3 → E3 → F3 → G3</strong> (steps 8, 10, 12, 14, 16).', 'This rapid climb signals a transition.', 'Play and hear how it creates anticipation.', 'Check exercise when ready.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'What Are Bass Fills?', 'content': 'Fills are rhythmic/melodic variations that:\n- Signal section changes\n- Build tension\n- Add variety to repetitive patterns\n- Guide listener attention\n\n**Common fill types:**\n- Ascending runs (builds up)\n- Descending runs (drops down)\n- Chromatic walks (half-step movement)\n- Rhythmic variations (syncopation)'}, {'title': 'When to Use Fills', 'content': '**Best placement:**\n- Last bar before chorus\n- End of 8 or 16-bar phrase\n- Before a drop/breakdown\n- Transitioning between sections\n\n**Duration:** Usually 1-2 bars maximum. Too long = loses impact.'}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 7, 'duration': 1}, {'pitch': 50, 'step': 9, 'duration': 1}, {'pitch': 52, 'step': 11, 'duration': 1}, {'pitch': 53, 'step': 13, 'duration': 1}, {'pitch': 55, 'step': 15, 'duration': 1}],
    highlightScale: [48, 50, 52, 53, 55, 57, 59, 60], // C major scale in bass range
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete the bass pattern exercise.",
    success: "Excellent! You've mastered this bass technique.",
    error: "Not quite. Check the target pattern and try again."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    sequencerType: 'piano-roll',
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },


  learningObjectives: [
    "Understand core concepts in bass 9",
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
