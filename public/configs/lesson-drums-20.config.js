import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Drums & Rhythm",
  lessonNumber: 20
});

export const lessonConfig = {
  lessonKey: "mpl-drums-20-progress",
  lessonNumber: 20,
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
  nextLessonUrl: "lesson-drums-21.html",
  prevLessonUrl: "lesson-drums-19.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-20", categoryLabel: "Drums & Rhythm" }),
    title: "Live Drum Recording",
    titleHighlight: "Simulation",
    subtitle: "Program drums that <strong>sound like a real drummer playing</strong>. Master <strong>room ambience</strong>, <strong>overhead mic bleed</strong>, and <strong>natural dynamics</strong> that make programmed drums feel human. This is the secret to rock, indie, and organic electronic productions."
  },
  sequencer: { tempo: 115, stepCount: 16, swing: 12, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, enableHumanization: true, requiredTempo: 115 },
  exercise: {
    title: "Simulate Live Rock Drum Take",
    description: "Create a <strong>rock drum pattern with human feel</strong>. Use <strong>swing</strong>, <strong>velocity variation</strong>, and <strong>humanization</strong> to make it sound like a drummer, not a machine.",
    tip: "Real drummers never hit every note at the same velocity. Vary hi-hat velocities between 70-100, and add 15-20% humanization!",
    steps: [
      { text: "<strong>Set tempo to 115 BPM, swing to 12%</strong>." },
      { text: "<strong>Kick:</strong> Steps 1, 5, 9, 13, velocity 115-120." },
      { text: "<strong>Snare:</strong> Steps 5, 13, velocity 110-118 (slight variation)." },
      { text: "<strong>Hi-Hat:</strong> 8th notes, varying velocities 70-100." },
      { text: "<strong>Enable humanization:</strong> Timing 15ms, Velocity 20%." },
      { text: "<strong>Listen:</strong> It should groove like a human performance." }
    ]
  },
  instruments: [
    { id: "kick", label: "Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 4, 8, 12], targetVelocities: { 0: 118, 4: 115, 8: 120, 12: 117 }, instructionText: "Kick with velocity variation.", patternHint: { enabled: true } },
    { id: "snare", label: "Snare", color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", targetSteps: [4, 12], targetVelocities: { 4: 112, 12: 116 }, instructionText: "Snare backbeat, varied velocity.", patternHint: { enabled: true } },
    { id: "hihat", label: "Hi-Hat", color: "linear-gradient(135deg, #00cec9, #0984e3)", targetSteps: [0,2,4,6,8,10,12,14], targetVelocities: { 0: 85, 2: 75, 4: 90, 6: 70, 8: 88, 10: 78, 12: 95, 14: 72 }, instructionText: "8th notes with human velocity variation.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Human Simulation Techniques", content: "**Velocity Variation:** Real drummers vary every hit (±10-20 velocity). **Timing:** Slight rushing/dragging (5-20ms humanization). **Swing:** 10-15% swing adds natural groove. **Overhead Bleed:** Subtle room ambience/reverb simulates live recording. **Performance Arcs:** Drummers get louder in choruses, softer in verses." }] },
  learningObjectives: ["Simulate live drummer performance dynamics", "Use humanization settings effectively", "Create natural velocity variations", "Apply swing for organic groove", "Understand mic bleed and room ambience"],
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
