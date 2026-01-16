/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 13 - Blues Bass: Turnarounds & Patterns
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-13-progress",
  lessonNumber: 13,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-14.html",
  prevLessonUrl: "lesson-bass-12.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Bass & Low End" }),
    title: "Blues Bass:",
    titleHighlight: "Turnarounds & Patterns",
    subtitle: "Learn the <strong>12-bar blues</strong> bass foundation with <strong>turnarounds</strong>, <strong>walking patterns</strong>, and <strong>classic blues vocabulary</strong>. Master the bass patterns that power rock, blues, and R&B."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 90,
    stepCount: 16,
    bars: 2,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Program a Blues Bass Pattern with Turnaround",
    description: "Blues bass uses <strong>root-fifth patterns</strong> and <strong>chromatic walks</strong> to navigate the 12-bar structure. The <strong>turnaround</strong> (bars 11-12) creates tension that resolves back to the I chord, making the loop feel complete and compelling you to start again.",
    tip: "Blues bass is about feel and timing. Play slightly behind the beat for that laid-back blues groove. The fifth adds movement without overcomplicating.",
    steps: [
      '<strong>Bar 1 (I chord - E)</strong> — E2 (root) on beat 1, B2 (fifth) on beat 3. This is your home base.',
      '<strong>Bar 2 (I chord continued)</strong> — Repeat: E2 on beat 1, B2 on beat 3. Establish the groove.',
      '<strong>Turnaround walk</strong> — Add chromatic approach: D♯2 on beat 4 (step 7) walking up to E2.',
      '<strong>Blues shuffle feel</strong> — In real blues, these are swung eighth notes, not straight.',
      'Play and feel the classic blues foundation. The turnaround creates that "pull" back to the beginning.',
      'Check when ready.'
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: '12-Bar Blues Structure',
        content: `The 12-bar blues is one of the most important harmonic structures in music:

**Standard 12-Bar Blues in E:**
- Bars 1-4: **I chord** (E7)
- Bars 5-6: **IV chord** (A7)
- Bars 7-8: **I chord** (E7)
- Bar 9: **V chord** (B7)
- Bar 10: **IV chord** (A7)
- Bar 11: **I chord** (E7)
- Bar 12: **V chord** (B7) — **Turnaround**

**Bass Movement Patterns:**
- **Root-Fifth** — Strongest, most common (E → B)
- **Root-Sixth** — Minor blues feel (E → C♯)
- **Walking** — Stepwise through chord tones
- **Chromatic approach** — Half-step leading to next chord

The **turnaround** in bars 11-12 uses the V chord (B7) to create tension that pulls you back to the I chord (E7) when the form repeats.`
      },
      {
        title: 'Blues Bass Techniques',
        content: `Blues bass has evolved across genres but maintains core characteristics:

**Shuffle Feel:**
Swing the eighth notes (long-short-long-short)
This is the signature blues rhythm

**Ghost Notes:**
Add percussive muted notes between main notes
Creates groove and movement

**Slap Technique:**
In rockabilly and upright blues
Percussive thumb slap on beats 2 and 4

**Chromatic Walks:**
Connect chords with half-step approaches
E → E♭ → D (descending walk)
C♯ → D → D♯ → E (ascending walk)

**Dynamic Expression:**
Start soft, build tension, release
Follow the vocal dynamics

Blues bassists like Willie Dixon, Duck Dunn, and Donald "Duck" Dunn are masters of this vocabulary. Their bass lines are simple but perfectly serve the song.`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      // Bar 1: E7 (I chord)
      { pitch: 40, step: 0, duration: 2, velocity: 100 },   // E2 root
      { pitch: 47, step: 2, duration: 2, velocity: 90 },    // B2 fifth

      // Bar 2: E7 (I chord) with turnaround approach
      { pitch: 40, step: 4, duration: 2, velocity: 100 },   // E2 root
      { pitch: 47, step: 6, duration: 1, velocity: 85 },    // B2 fifth
      { pitch: 46, step: 7, duration: 1, velocity: 75 }     // A♯2 chromatic approach
    ],
    highlightScale: [40, 42, 43, 45, 46, 47, 48, 50], // E blues scale (E, G, A, A♯, B, D)
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the 12-bar blues structure and chord progression",
    "Program root-fifth bass patterns that define blues",
    "Use chromatic approaches for turnarounds",
    "Apply shuffle feel and blues timing",
    "Recognize blues bass patterns in rock, R&B, and blues music"
  ],

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Program the blues bass pattern to complete this lesson.",
    success: "🎉 Bluesy! You've got that classic foundation. Willie Dixon would be proud!",
    error: "Not quite there. Check your root-fifth pattern and chromatic turnaround.",
    alreadyCompleted: "You've mastered blues bass. That's the backbone of rock and roll!"
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
