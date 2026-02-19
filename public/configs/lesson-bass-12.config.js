/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 12 - Jazz Walking Bass: Advanced Techniques
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-12-progress",
  lessonNumber: 12,
  lessonCategory: "Bass & Low End",


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
  nextLessonUrl: "lesson-bass-13.html",
  prevLessonUrl: "lesson-bass-11.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Bass & Low End" }),
    title: "Jazz Walking Bass:",
    titleHighlight: "Advanced Techniques",
    subtitle: "Build sophisticated walking basslines with <strong>chromatic approaches</strong>, <strong>chord tone targets</strong>, and <strong>rhythmic displacement</strong>. Master the art of melodic bass movement that defines jazz and sophisticated harmony."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 2,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Program an Advanced Walking Bass Line",
    description: "Walking bass moves through chord changes using <strong>chord tones</strong> (roots, thirds, fifths, sevenths) as <strong>target notes</strong>, connected by <strong>chromatic approach tones</strong> (notes a half-step above or below). The bass walks in quarter notes, creating constant forward motion.",
    tip: "Target chord tones on strong beats (1 and 3), use approach tones on weak beats (2 and 4). Walk toward your target from a half-step above or below.",
    steps: [
      '<strong>Bar 1: C Major 7 (C-E-G-B)</strong> — Place C2 (root) on beat 1, E2 (3rd) on beat 2, G2 (5th) on beat 3, B2 (7th) on beat 4.',
      '<strong>Bar 2: F Major 7 (F-A-C-E)</strong> — Approach F2 with E2 chromatic (step 15), then F2 (beat 1), A2 (beat 2), C3 (beat 3), E3 (beat 4).',
      '<strong>Chromatic approach</strong> — Notice how E2 at the end of bar 1 walks chromatically up to F2.',
      'Play and hear the smooth, sophisticated movement through the chord changes.',
      'Check when ready.'
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: 'Walking Bass Principles',
        content: `Walking bass is the foundation of jazz, creating melodic movement while outlining harmony:

**Core Principles:**
1. **Quarter note pulse** — Steady, even rhythm (one note per beat)
2. **Chord tone targets** — Land on roots, thirds, fifths, sevenths on strong beats
3. **Chromatic approaches** — Half-step lead-ins to target notes
4. **Smooth voice leading** — Prefer stepwise motion over large leaps
5. **Rhythmic consistency** — Keep the time rock solid

**Chromatic Approach Techniques:**
- **From below** — Note a half-step below the target (E → F)
- **From above** — Note a half-step above the target (G♯ → G)
- **Double chromatic** — Two approach notes (E♭ → E → F)

**Chord Tone Hierarchy:**
- **Beats 1 & 3** — Strong beats, use roots and fifths
- **Beats 2 & 4** — Weak beats, use thirds, sevenths, or approach tones`
      },
      {
        title: 'Advanced Walking Bass Vocabulary',
        content: `Beyond basic chord tones, jazz bassists use advanced techniques:

**Scale Passages:**
Walk through chord scales (Dorian, Mixolydian, major)

**Enclosures:**
Surround target notes from both sides (D♭ → D → D♯ encloses D)

**Rhythmic Displacement:**
Anticipate chord changes by one eighth note

**Pedal Tones:**
Repeat the root while harmony moves above

**Contrary Motion:**
Move opposite direction from melody

These techniques create interest while maintaining harmonic clarity. Ray Brown, Ron Carter, and Paul Chambers are masters of this vocabulary.`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      // Bar 1: C Major 7
      { pitch: 48, step: 0, duration: 1, velocity: 95 },    // C2 root
      { pitch: 52, step: 1, duration: 1, velocity: 90 },    // E2 third
      { pitch: 55, step: 2, duration: 1, velocity: 90 },    // G2 fifth
      { pitch: 59, step: 3, duration: 1, velocity: 85 },    // B2 seventh (approach to F)

      // Bar 2: F Major 7
      { pitch: 53, step: 4, duration: 1, velocity: 100 },   // F2 root
      { pitch: 57, step: 5, duration: 1, velocity: 90 },    // A2 third
      { pitch: 60, step: 6, duration: 1, velocity: 85 },    // C3 fifth
      { pitch: 64, step: 7, duration: 1, velocity: 85 }     // E3 seventh
    ],
    highlightScale: [48, 50, 52, 53, 55, 57, 59, 60, 62, 64], // C major scale (jazz range)
    showChordDetection: true,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Build walking basslines using chord tones as targets",
    "Apply chromatic approach tones to connect chords smoothly",
    "Understand chord tone hierarchy (roots on strong beats)",
    "Create forward motion with quarter note pulse",
    "Recognize jazz walking bass in different contexts"
  ],

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Program the walking bass line to complete this lesson.",
    success: "Swingin'! Your walking bass is sophisticated and smooth. Ray Brown would approve!",
    error: "Check your chord tones and chromatic approaches. Target notes should be on beats 1 and 3.",
    alreadyCompleted: "You've mastered jazz walking bass. That's some serious chops!"
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
