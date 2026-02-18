import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-22-progress",
  lessonNumber: 22,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 10,
  nextLessonUrl: "drum-playground.html",
  prevLessonUrl: "lesson-drums-21.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-22", categoryLabel: "Drums & Rhythm" }),
    title: "Mixing for Loudness &",
    titleHighlight: "Punch",
    subtitle: "Achieve <strong>competitive loudness</strong> without losing dynamics. Master <strong>compression</strong>, <strong>saturation</strong>, and <strong>limiting techniques</strong> for modern drum sounds. Learn how to make drums cut through dense mixes while maintaining impact and clarity."
  },
  sequencer: { tempo: 128, stepCount: 16, swing: 0, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, requiredTempo: 128 },
  exercise: {
    title: "Build Mix-Ready Drum Pattern",
    description: "Create a <strong>loud, punchy drum pattern</strong> optimized for modern mixing standards. Use <strong>proper velocity balance</strong>, <strong>frequency separation</strong>, and <strong>dynamic range</strong>.",
    tip: "Loudness comes from RMS (average level), not peak level. Consistent velocities (100-120) create more perceived loudness than random dynamics!",
    steps: [
      { text: "<strong>Set tempo to 128 BPM</strong> (EDM/house standard)." },
      { text: "<strong>Kick:</strong> Steps 1, 5, 9, 13, velocity 127 (maximum impact)." },
      { text: "<strong>Snare:</strong> Steps 5, 13, velocity 120 (loud backbeat)." },
      { text: "<strong>Hi-Hat:</strong> 16th notes, velocity 95-105 (consistent energy)." },
      { text: "<strong>Clap layer:</strong> Steps 5, 13, velocity 110 (adds thickness to snare)." },
      { text: "<strong>Result:</strong> Dense, loud pattern ready for compression/limiting." }
    ]
  },
  instruments: [
    { id: "kick", label: "Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 4, 8, 12], targetVelocities: { 0: 127, 4: 127, 8: 127, 12: 127 }, instructionText: "Maximum impact kicks.", patternHint: { enabled: true } },
    { id: "snare", label: "Snare", color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", targetSteps: [4, 12], targetVelocities: { 4: 120, 12: 120 }, instructionText: "Loud backbeat.", patternHint: { enabled: true } },
    { id: "clap", label: "Clap", color: "linear-gradient(135deg, #a29bfe, #6c5ce7)", targetSteps: [4, 12], targetVelocities: { 4: 110, 12: 110 }, instructionText: "Clap layer.", patternHint: { enabled: true } },
    { id: "hihat", label: "Hi-Hat", color: "linear-gradient(135deg, #00cec9, #0984e3)", targetSteps: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], targetVelocities: { 0:100, 1:95, 2:102, 3:98, 4:105, 5:97, 6:103, 7:99, 8:101, 9:96, 10:104, 11:98, 12:100, 13:97, 14:102, 15:99 }, instructionText: "Consistent 16ths.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Loudness Concepts", content: "**Peak vs RMS:** Peak = momentary spikes, RMS = average loudness. **Compression:** Reduces dynamic range, increases RMS. **Saturation:** Adds harmonics, increases perceived loudness. **Limiting:** Prevents peaks from exceeding 0dB. **LUFS:** Integrated Loudness Unit (streaming standard: -14 LUFS). **Punch:** Transient + body balance. Fast attack preserves punch, slow attack preserves body." }] },
  learningObjectives: ["Program drums optimized for competitive loudness", "Understand peak vs RMS loudness", "Use velocity consistency for maximum impact", "Apply compression/limiting concepts", "Balance loudness with punch and dynamics"],
  validation: applyMessagePreset("drumSequencer", "correct-placement-and-velocity"),

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
