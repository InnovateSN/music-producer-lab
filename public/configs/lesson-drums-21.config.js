import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Drums & Rhythm",
  lessonNumber: 21
});

export const lessonConfig = {
  lessonKey: "mpl-drums-21-progress",
  lessonNumber: 21,
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
  depthLevel: 9,
  nextLessonUrl: "lesson-drums-22.html",
  prevLessonUrl: "lesson-drums-20.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-21", categoryLabel: "Drums & Rhythm" }),
    title: "Advanced Polyrhythms &",
    titleHighlight: "Cross-Rhythms",
    subtitle: "Master <strong>complex independent rhythms</strong> layered across drums. Create <strong>5/4 over 4/4</strong>, <strong>metric displacement</strong>, and <strong>phase shifting patterns</strong>. These techniques are used in prog rock, math rock, IDM, and experimental electronic music."
  },
  sequencer: { tempo: 96, stepCount: 20, swing: 0, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, requiredTempo: 96 },
  exercise: {
    title: "Create 5:4 Polyrhythm (20-step grid)",
    description: "Layer a <strong>5-pulse pattern</strong> against a <strong>4-pulse pattern</strong> using a 20-step grid (LCM of 4 and 5). The kick divides 20 into 4 parts (every 5 steps), while the hi-hat divides into 5 parts (every 4 steps).",
    tip: "The patterns align only on step 1, then drift apart creating hypnotic tension. This is the polyrhythm used in King Crimson's 'Frame by Frame'!",
    steps: [
      { text: "<strong>Set tempo to 96 BPM</strong>." },
      { text: "<strong>Kick:</strong> Steps 1, 6, 11, 16 (four pulses = 20÷4)." },
      { text: "<strong>Hi-Hat:</strong> Steps 1, 5, 9, 13, 17 (five pulses = 20÷5)." },
      { text: "<strong>Snare:</strong> Step 11 (middle anchor point)." },
      { text: "<strong>Listen:</strong> The cyclical tension and resolution every 20 steps." }
    ]
  },
  instruments: [
    { id: "kick", label: "Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 5, 10, 15], instructionText: "4-pulse kick.", patternHint: { enabled: true } },
    { id: "snare", label: "Snare", color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", targetSteps: [10], instructionText: "Anchor snare.", patternHint: { enabled: true } },
    { id: "hihat", label: "Hi-Hat", color: "linear-gradient(135deg, #00cec9, #0984e3)", targetSteps: [0, 4, 8, 12, 16], instructionText: "5-pulse hi-hat.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Advanced Polyrhythmic Concepts", content: "**5:4 Polyrhythm:** Most complex common polyrhythm. **7:4 Polyrhythm:** Needs 28-step grid (very advanced). **Metric Displacement:** Shifting patterns by offsets. **Cross-Rhythms:** Implied subdivisions that conflict with meter. **Phase Shifting:** Gradually delaying one pattern relative to another (Steve Reich)." }] },
  learningObjectives: ["Program 5:4 polyrhythms", "Understand LCM (lowest common multiple) for grid sizing", "Create metric displacement patterns", "Apply phase shifting techniques", "Use polyrhythms musically, not just mathematically"],
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
