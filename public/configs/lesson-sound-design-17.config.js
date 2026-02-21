import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-sound-design-17-progress",
  lessonNumber: 17,
  lessonCategory: "Sound Design",

  progression: {
    difficulty: "advanced",
    prerequisites: ["sound-design-16","sound-design-15"],
    outcomes: ["Completare gli obiettivi pratici di sound-design-17","Consolidare competenze advanced nel modulo sound-design"]
  },
  depthLevel: 9,
  
  nextLessonUrl: "lesson-sound-design-18.html",
  prevLessonUrl: "lesson-sound-design-16.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-sound-design-17", categoryLabel: "Sound Design" }),
    title: "Granular Synthesis &",
    titleHighlight: "Texture Design",
    subtitle: "Create atmospheric textures and experimental sounds with <strong>granular synthesis and micro-sampling</strong>. Master grain clouds, time-stretching, and textural sound design for cinematic and ambient productions."
  },
  
  sequencer: {
    tempo: 85,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 85
  },
  
  exercise: {
    title: "Build Granular Texture Layers",
    description: "Create a <strong>multi-layer granular texture pattern</strong> with different grain sizes, densities, and pitches. Understand how micro-samples combine to form atmospheric, evolving soundscapes.",
    tip: "Low velocity = sparse grains (airy texture), High velocity = dense grains (solid texture). Granular synthesis turns any sound into a malleable cloud of sonic particles.",
    steps: [
      { text: "<strong>Set tempo to 85 BPM</strong> for a slow, atmospheric feel." },
      { text: "<strong>Program sparse grain layer</strong> on steps 1, 5, 9, 13 with velocity 60-70 (spacious)." },
      { text: "<strong>Add medium density layer</strong> on steps 1, 3, 5, 7, 9, 11, 13, 15 with velocity 80-90." },
      { text: "<strong>Layer dense grain cloud</strong> on all 16 steps with velocity 50-60 (background shimmer)." },
      { text: "<strong>Add pitched grains</strong> on steps 4, 8, 12, 16 with velocity 100-110 (melodic accents)." },
      { text: "<strong>Listen</strong> to how grain density and velocity create textural depth and movement." }
    ]
  },
  
  instruments: [
    {
      id: "sparse-grains",
      label: "Sparse Grains",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.2, decay: 0.8, sustain: 0.3, release: 1.5 },
      filter: { type: "lowpass", frequency: 800, Q: 0.5 }
    },
    {
      id: "medium-grains",
      label: "Medium Grains",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      oscillator: { type: "triangle", detune: 5 },
      envelope: { attack: 0.1, decay: 0.4, sustain: 0.4, release: 0.8 },
      filter: { type: "bandpass", frequency: 1200, Q: 1.5 }
    },
    {
      id: "dense-cloud",
      label: "Dense Cloud",
      color: "linear-gradient(135deg, #81ecec, #00cec9)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      oscillator: { type: "sine", detune: 12 },
      envelope: { attack: 0.5, decay: 1.0, sustain: 0.6, release: 2.0 },
      filter: { type: "lowpass", frequency: 600, Q: 0.8 }
    },
    {
      id: "pitched-grains",
      label: "Pitched Grains",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [3, 7, 11, 15],
      oscillator: { type: "sawtooth", detune: -5 },
      envelope: { attack: 0.05, decay: 0.3, sustain: 0.5, release: 0.6 },
      filter: { type: "lowpass", frequency: 2000, Q: 1.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Granular Synthesis Explained',
        content: `**What Is Granular Synthesis?**
Granular synthesis chops audio into tiny fragments called "grains" (1-100ms), then reassembles them to create new textures. Like painting with sound molecules.

**Key Parameters:**
- **Grain Size:** Length of each grain (1-100ms). Small = grainy/noisy, Large = smooth/musical
- **Grain Density:** Grains per second. Sparse = rhythmic pulses, Dense = continuous texture
- **Grain Pitch:** Transpose individual grains independently of time
- **Playback Position:** Where in source audio to extract grains
- **Grain Envelope:** Shape of each grain (Gaussian, Hanning, rectangular)

**Applications:**
- **Time-stretching:** Change duration without affecting pitch
- **Pitch-shifting:** Change pitch without affecting duration
- **Texture creation:** Transform any sound into atmospheric clouds
- **Freeze effects:** Sustain a moment indefinitely
- **Sound mangling:** Experimental sound design`
      },
      {
        title: 'Advanced Granular Techniques',
        content: `**Cloud Synthesis:**
Randomly scatter grains in time, pitch, and pan for evolving textures:
- Random pitch variation (±12 semitones) creates shimmering clouds
- Random pan creates wide stereo field
- Random grain size adds textural complexity

**Granular Time-Stretching:**
Slow down or speed up without pitch change:
- Overlap many grains while moving slowly through source
- Artifact: Robotic/phase-y sound at extreme stretches
- Solution: Add pitch/time randomization for natural feel

**Asynchronous Granular:**
Grains triggered rhythmically, not continuously:
- Sync grain density to tempo (e.g., 16th notes)
- Creates stuttering, glitchy rhythms
- Used in IDM, glitch, and electronic music

**Multi-Stream Granular:**
Multiple grain generators reading from different positions:
- Stream 1: Beginning of sample
- Stream 2: Middle of sample
- Stream 3: End of sample
- Morph between streams for evolving textures

**Granular Effects:**
Apply effects to individual grains before reassembly:
- Grain-level reverb creates dense, evolving ambience
- Grain-level distortion adds aggression
- Grain-level filtering shapes spectral content`
      }
    ]
  },
  
  learningObjectives: [
    "Understand granular synthesis: grain size, density, pitch, and position parameters",
    "Create atmospheric textures with cloud synthesis and random grain modulation",
    "Master time-stretching and pitch-shifting without artifacts",
    "Apply advanced techniques: asynchronous grains, multi-stream granular, grain-level effects"
  ],

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
