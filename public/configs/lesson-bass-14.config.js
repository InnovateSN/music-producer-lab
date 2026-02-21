/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 14 - R&B Bass: Smooth & Syncopated
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-14-progress",
  lessonNumber: 14,
  lessonCategory: "Bass & Low End",

  progression: {
    difficulty: "advanced",
    prerequisites: ["bass-13","bass-12"],
    outcomes: ["Completare gli obiettivi pratici di bass-14","Consolidare competenze advanced nel modulo bass"]
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
  nextLessonUrl: "lesson-bass-15.html",
  prevLessonUrl: "lesson-bass-13.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Bass & Low End" }),
    title: "R&B Bass:",
    titleHighlight: "Smooth & Syncopated",
    subtitle: "Create <strong>sultry R&B basslines</strong> with <strong>smooth movement</strong>, <strong>syncopation</strong>, and <strong>space</strong>. Master the art of saying <strong>more with less</strong> — the hallmark of modern R&B and neo-soul production."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 85,
    stepCount: 16,
    bars: 1,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Program a Smooth R&B Bass Line",
    description: "R&B bass is about <strong>subtlety and space</strong>. Unlike funk (aggressive) or blues (driving), R&B bass supports the vocal and chords with <strong>minimal notes</strong>, <strong>smooth movement</strong>, and <strong>strategic syncopation</strong>. The bass creates a bed for the vocals to float above.",
    tip: "In R&B, less is more. Every note should be intentional. Leave space for the kick, vocals, and keys. Think support, not dominance.",
    steps: [
      '<strong>Root note foundation</strong> — D2 (MIDI 38) on beat 1 (step 0) with medium velocity. This grounds the harmony.',
      '<strong>Smooth ascent</strong> — F♯2 (MIDI 42) on beat 2 (step 2) — the third adds color.',
      '<strong>Syncopated jump</strong> — A2 (MIDI 45) on the & of beat 3 (step 5) — off-beat creates groove.',
      '<strong>Octave resolution</strong> — D3 (MIDI 50) on beat 4 (step 6) — climbs smoothly.',
      '<strong>Rest and breathe</strong> — No notes on beats after 4. Space is musical.',
      'Play and feel the sultry, laid-back groove. Notice how space creates intimacy.'
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: 'R&B Bass Philosophy',
        content: `R&B bass, from Motown to modern neo-soul, prioritizes emotion over technical display:

**Core Principles:**
- **Space** — Rests are as important as notes
- **Smoothness** — Stepwise motion, no jarring leaps
- **Syncopation** — Off-beat notes create subtle groove
- **Low note count** — 4-8 notes per bar vs funk's 12-16
- **Vocal support** — Bass moves when vocal rests

**Technique:**
- Use chord tones (roots, thirds, fifths, sevenths)
- Connect smoothly (no more than a third apart)
- Play behind the beat (laid-back feel)
- Low velocity (70-95) for subtle presence
- Let the kick drum handle the attack

**Reference Artists:**
- James Jamerson (Motown)
- Bootsy Collins (early funk-R&B)
- Pino Palladino (D'Angelo, neo-soul)
- Thundercat (modern jazz-R&B fusion)

The goal: Make the listener FEEL the groove without consciously noticing the bass.`
      },
      {
        title: 'Modern R&B Bass Production',
        content: `Contemporary R&B bass blends live and electronic techniques:

**Layering:**
- **Sub bass** — Pure sine wave (30-60 Hz)
- **Mid bass** — Sawtooth or filtered square (80-200 Hz)
- **Top texture** — Slight distortion or harmonic content

**Processing:**
- High-pass filter at 30-40 Hz (remove rumble)
- Gentle compression (4:1 ratio, slow attack)
- Sidechain to kick (subtle, -2 to -4 dB)
- Reverb send (10-15%, short decay)

**Rhythm:**
- Lock to the kick on beat 1
- Syncopate on &s (offbeats)
- Rest during vocal phrases
- Fill during instrumental breaks

Modern producers like Frank Dukes, OVO Sound, and The Neptunes use this approach to create bass that's felt more than heard.`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      { pitch: 38, step: 0, duration: 2, velocity: 85 },    // D2 root (foundational)
      { pitch: 42, step: 2, duration: 2, velocity: 80 },    // F♯2 third (smooth)
      { pitch: 45, step: 5, duration: 2, velocity: 90 },    // A2 fifth (syncopated)
      { pitch: 50, step: 6, duration: 2, velocity: 75 }     // D3 octave (resolution)
    ],
    highlightScale: [38, 40, 42, 43, 45, 47, 49, 50], // D major scale (R&B tonality)
    showChordDetection: true,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand R&B bass philosophy: support over dominance",
    "Use space and rests as musical elements",
    "Create smooth, stepwise bass movement",
    "Apply subtle syncopation for groove",
    "Recognize modern R&B bass production techniques"
  ],

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Program the R&B bass line to complete this lesson.",
    success: "Smooth! That's a sultry R&B groove. Pino Palladino vibes!",
    error: "Not quite there. Check your note placement and remember: less is more in R&B.",
    alreadyCompleted: "You've mastered R&B bass. That's some smooth soul!"
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
