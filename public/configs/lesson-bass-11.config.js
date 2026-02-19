/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 11 - Funk Bass: Slap, Pop & Groove
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-11-progress",
  lessonNumber: 11,
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
  nextLessonUrl: "lesson-bass-12.html",
  prevLessonUrl: "lesson-bass-10.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Bass & Low End" }),
    title: "Funk Bass:",
    titleHighlight: "Slap, Pop & Groove",
    subtitle: "Master funk bass patterns with <strong>syncopated rhythms</strong>, <strong>ghost notes</strong>, and <strong>percussive techniques</strong>. Create that classic P-Funk bounce that makes people move. Funk is all about the groove between the beats."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 100,
    stepCount: 16,
    bars: 1,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Program a Funk Bass Groove",
    description: "Funk bass is about <strong>syncopation</strong> (off-beat notes), <strong>ghost notes</strong> (soft percussive hits), and <strong>space</strong>. The groove sits in the pocket between beats, creating that irresistible bounce. Emphasize the & (and) of each beat.",
    tip: "In funk, what you DON'T play is as important as what you DO play. Leave space for the drums and rhythm guitar to breathe.",
    steps: [
      '<strong>Root note on beat 1</strong> — Place E2 (MIDI 40) on step 0 with medium velocity.',
      '<strong>Ghost note on the &</strong> — Add a soft E2 on step 1 (low velocity ~60) for percussive texture.',
      '<strong>Syncopated jump</strong> — Add G2 (MIDI 43) on step 6 (the & of beat 2).',
      '<strong>Octave slap</strong> — Add E3 (MIDI 52) on step 10 (beat 3) for that signature funk pop.',
      '<strong>Return to root</strong> — E2 on step 14 (& of beat 4) to complete the phrase.',
      'Play and feel the bouncy, syncopated groove. Check when ready.'
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: 'Funk Bass Characteristics',
        content: `Funk bass, pioneered by legends like Bootsy Collins, Larry Graham, and Marcus Miller, has distinct features:

**Key Elements:**
- **Syncopation** — Notes on the off-beats (&) create rhythmic tension
- **Ghost notes** — Soft, muted notes add percussive texture
- **Slap & Pop** — Percussive thumb slap (low notes) and finger pop (high notes)
- **Space** — Rests are as important as notes
- **The Pocket** — Groove sits slightly behind or ahead of the beat

**Velocity Dynamics:**
- Strong notes: 100-127 velocity (slaps, main notes)
- Ghost notes: 40-70 velocity (muted, percussive)
- Pops: 110-127 velocity (bright, snappy high notes)

**Common Patterns:**
Root → Ghost → Syncopated jump → Octave → Return

This creates that infectious bounce that defines funk.`
      },
      {
        title: 'Funk in Different Genres',
        content: `Funk bass techniques are used across many genres:

**Classic Funk** (P-Funk, James Brown): Heavy syncopation, aggressive slap
**Jazz-Funk** (Herbie Hancock): More melodic, sophisticated harmony
**Modern R&B/Hip-Hop**: Simplified funk patterns with 808 influence
**Nu-Disco/French House**: Filtered funk bass samples with electronic production

Even electronic producers sample and synthesize funk bass to add organic groove to their tracks.`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      { pitch: 40, step: 0, duration: 1, velocity: 100 },   // E2 root (slap)
      { pitch: 40, step: 1, duration: 1, velocity: 60 },    // E2 ghost note
      { pitch: 43, step: 6, duration: 2, velocity: 95 },    // G2 syncopated
      { pitch: 52, step: 10, duration: 1, velocity: 120 },  // E3 octave pop
      { pitch: 40, step: 14, duration: 2, velocity: 90 }    // E2 return
    ],
    highlightScale: [40, 42, 43, 45, 47, 48, 50, 52], // E minor pentatonic (funk scale)
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand syncopation and off-beat placement in funk bass",
    "Use ghost notes to add percussive texture and groove",
    "Apply velocity dynamics (slap vs pop vs ghost)",
    "Create space and pocket in bass patterns",
    "Recognize funk bass patterns in different genres"
  ],

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Program the funk bass groove to complete this lesson.",
    success: "Funky! You've got that P-Funk bounce! The groove is infectious.",
    error: "Not quite the funk. Check velocity dynamics and syncopation placement.",
    alreadyCompleted: "You've mastered funk bass. That pocket is tight!"
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
