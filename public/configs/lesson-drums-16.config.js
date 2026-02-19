import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-16-progress",
  lessonNumber: 16,
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
  depthLevel: 8,
  nextLessonUrl: "lesson-drums-17.html",
  prevLessonUrl: "lesson-drums-15.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-16", categoryLabel: "Drums & Rhythm" }),
    title: "Advanced Fills &",
    titleHighlight: "Transitions",
    subtitle: "Build <strong>dramatic drum fills</strong> that bridge song sections seamlessly. Master <strong>tom rolls</strong>, <strong>crash patterns</strong>, and <strong>fill placement strategies</strong> that create excitement without derailing the groove. Learn when to use simple vs complex fills, how to build tension, and the art of the perfect transition."
  },
  sequencer: { tempo: 105, stepCount: 16, swing: 0, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, requiredTempo: 105 },
  exercise: {
    title: "Create Tom Roll Fill",
    description: "Build a classic <strong>tom roll fill</strong> that transitions between sections. Use <strong>high, mid, and low toms</strong> in descending order with a <strong>crash cymbal accent</strong> on beat 1.",
    tip: "Fills should lead INTO the downbeat, not land ON it. End fills on step 15-16 so the crash hits step 1 of the next bar!",
    steps: [
      { text: "<strong>Set tempo to 105 BPM</strong>." },
      { text: "<strong>High Tom:</strong> Steps 13, 14 (16th notes)." },
      { text: "<strong>Mid Tom:</strong> Step 15." },
      { text: "<strong>Low Tom (Floor):</strong> Step 16." },
      { text: "<strong>Crash:</strong> Step 1 (next bar - imagine it!)." },
      { text: "<strong>Velocities:</strong> Crescendo from 90 → 120 across toms." }
    ]
  },
  instruments: [
    { id: "tom1", label: "High Tom", color: "linear-gradient(135deg, #ff6b6b, #ee5a6f)", targetSteps: [12, 13], targetVelocities: { 12: 90, 13: 100 }, instructionText: "High tom on steps 13-14.", patternHint: { enabled: true } },
    { id: "tom2", label: "Mid Tom", color: "linear-gradient(135deg, #f9ca24, #f0932b)", targetSteps: [14], targetVelocities: { 14: 110 }, instructionText: "Mid tom on step 15.", patternHint: { enabled: true } },
    { id: "tom3", label: "Low Tom", color: "linear-gradient(135deg, #6c5ce7, #a29bfe)", targetSteps: [15], targetVelocities: { 15: 120 }, instructionText: "Low tom on step 16.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Fill Construction Principles", content: "**Rule of thumb:** Fills should be 1-2 bars maximum. Longer fills lose impact. **Placement:** Last 2 beats of a bar (steps 13-16 in 16-step grid). **Velocity:** Build energy with crescendo. **Simplicity:** Simple fills often work better than complex ones." }] },
  learningObjectives: ["Build effective tom roll fills", "Use velocity crescendos for drama", "Place fills strategically between sections", "Balance simplicity and complexity", "Create smooth transitions"],
  validation: applyMessagePreset("drumSequencer", "correct-placement-and-velocity"),


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
