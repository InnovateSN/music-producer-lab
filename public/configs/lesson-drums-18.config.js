import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Drums & Rhythm",
  lessonNumber: 18
});

export const lessonConfig = {
  lessonKey: "mpl-drums-18-progress",
  lessonNumber: 18,
  lessonCategory: "Drums & Rhythm",

  progression: {
    difficulty: "advanced",
    prerequisites: ["drums-17","drums-16"],
    outcomes: ["Completare gli obiettivi pratici di drums-18","Consolidare competenze advanced nel modulo drums"]
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
  depthLevel: 8,
  nextLessonUrl: "lesson-drums-19.html",
  prevLessonUrl: "lesson-drums-17.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-18", categoryLabel: "Drums & Rhythm" }),
    title: "Swing & Shuffle",
    titleHighlight: "Variations",
    subtitle: "Go beyond basic swing. Master <strong>triplet-based shuffles</strong>, <strong>half-time shuffle</strong>, and <strong>swing percentages</strong> for different genres. Understand the difference between <strong>binary (straight)</strong> and <strong>ternary (triplet)</strong> groove feels."
  },
  sequencer: { tempo: 88, stepCount: 12, swing: 0, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, requiredTempo: 88 },
  exercise: {
    title: "Build Triplet Shuffle Pattern",
    description: "Create a <strong>12-step triplet shuffle</strong> using 12 steps (4 beats × 3 = 12 triplets). This is the foundation of blues, jazz, and shuffle rock.",
    tip: "In 12-step mode, each beat has 3 subdivisions. Play on beats 1 and 3 of each triplet to get the classic shuffle 'long-short' feel!",
    steps: [
      { text: "<strong>Set tempo to 88 BPM</strong>." },
      { text: "<strong>Kick:</strong> Steps 1, 7 (downbeats)." },
      { text: "<strong>Snare:</strong> Steps 4, 10 (backbeats)." },
      { text: "<strong>Hi-Hat:</strong> Steps 1, 3, 4, 6, 7, 9, 10, 12 (shuffle pattern: long-short-long-short)." },
      { text: "<strong>Listen:</strong> The uneven spacing creates the shuffle groove." }
    ]
  },
  instruments: [
    { id: "kick", label: "Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 6], instructionText: "Kick on 1 and 7.", patternHint: { enabled: true } },
    { id: "snare", label: "Snare", color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", targetSteps: [3, 9], instructionText: "Snare backbeat.", patternHint: { enabled: true } },
    { id: "hihat", label: "Hi-Hat", color: "linear-gradient(135deg, #00cec9, #0984e3)", targetSteps: [0, 2, 3, 5, 6, 8, 9, 11], instructionText: "Shuffle hi-hat pattern.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Swing vs Shuffle", content: "**Swing:** Delays 8th notes slightly (50-75% triplet feel). **Shuffle:** Full triplet-based rhythm (100% triplet). **Half-time shuffle:** Shuffle pattern at half tempo (Rosanna, Fool in the Rain). **Percentage:** 0% = straight, 50% = full triplet, 25% = subtle swing." }] },
  learningObjectives: ["Program triplet-based shuffle patterns", "Understand swing percentages", "Create half-time shuffle grooves", "Differentiate binary vs ternary feels", "Apply swing to different genres"],
  validation: applyMessagePreset("drumSequencer", "correct-placement"),


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
