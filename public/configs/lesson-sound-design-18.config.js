import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Sound Design",
  lessonNumber: 18
});

export const lessonConfig = {
  lessonKey: "mpl-sound-design-18-progress",
  lessonNumber: 18,
  lessonCategory: "Sound Design",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 10,
  
  nextLessonUrl: "lesson-sound-design-19.html",
  prevLessonUrl: "lesson-sound-design-17.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-sound-design-18", categoryLabel: "Sound Design" }),
    title: "Physical Modeling &",
    titleHighlight: "Analog Emulation",
    subtitle: "Design realistic acoustic instruments and vintage analog sounds through <strong>physical modeling and circuit emulation</strong>. Master resonators, waveguides, and analog modeling for authentic, expressive sounds."
  },
  
  sequencer: {
    tempo: 100,
    stepCount: 16,
    swing: 5,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 100
  },
  
  exercise: {
    title: "Design Physical Model Instrument",
    description: "Create a <strong>pattern simulating physical modeling</strong> with exciter (initial energy), resonator (body), and damping (decay). Understand how acoustic instruments are synthesized through physics equations.",
    tip: "High velocity = strong excitation (bright attack), Low velocity = soft excitation (mellow tone). Physical modeling recreates the physics of real instruments mathematically.",
    steps: [
      { text: "<strong>Set tempo to 100 BPM</strong> with 5% swing for human feel." },
      { text: "<strong>Program strong exciter</strong> on steps 1, 5, 9, 13 with velocity 110-120 (pluck/strike)." },
      { text: "<strong>Add resonator body</strong> on same steps with velocity 80-90 (sustains tone)." },
      { text: "<strong>Layer damping tail</strong> on steps 2, 6, 10, 14 with velocity 60-70 (natural decay)." },
      { text: "<strong>Add soft exciter</strong> on steps 4, 8, 12, 16 with velocity 70-80 (ghost notes)." },
      { text: "<strong>Listen</strong> to how excitation + resonance + damping creates realistic, expressive instruments." }
    ]
  },
  
  instruments: [
    {
      id: "exciter",
      label: "Exciter",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.02, sustain: 0, release: 0.01 },
      filter: { type: "highpass", frequency: 2000, Q: 0.8 }
    },
    {
      id: "resonator",
      label: "Resonator",
      color: "linear-gradient(135deg, #fdcb6e, #e17055)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.005, decay: 0.8, sustain: 0.3, release: 1.2 },
      filter: { type: "bandpass", frequency: 800, Q: 8.0 }
    },
    {
      id: "damping",
      label: "Damping",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [1, 5, 9, 13],
      oscillator: { type: "triangle", detune: 3 },
      envelope: { attack: 0.05, decay: 1.5, sustain: 0.1, release: 2.0 },
      filter: { type: "lowpass", frequency: 1200, Q: 0.5 }
    },
    {
      id: "soft-exciter",
      label: "Soft Exciter",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [3, 7, 11, 15],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.005, decay: 0.05, sustain: 0, release: 0.03 },
      filter: { type: "highpass", frequency: 1000, Q: 1.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Physical Modeling Fundamentals',
        content: `**What Is Physical Modeling?**
Physical modeling synthesizes sound by simulating the physics of real instruments using mathematical equations. Instead of samples or waveforms, it models vibrations, resonances, and acoustics.

**Core Components:**
- **Exciter:** Initial energy source (pluck, bow, strike, blow)
- **Resonator:** Vibrating body (string, tube, membrane)
- **Coupling:** How exciter and resonator interact
- **Radiation:** How sound propagates to listener

**Karplus-Strong (Plucked String):**
1. Noise burst (excitation)
2. Short delay line (pitch = 1/delay time)
3. Lowpass filter in feedback loop (damping)
4. Result: Plucked string, decay, harmonics

**Waveguide Synthesis:**
Models traveling waves in tubes, strings, membranes:
- **Delay lines** simulate wave propagation
- **Filters** simulate energy loss
- **Junctions** simulate reflections
- Used for: Flutes, brass, strings, drums

**Modal Synthesis:**
Models objects as collections of resonant modes:
- Each mode = frequency + amplitude + decay
- Strike marimba = excite all modes simultaneously
- Result: Realistic mallet instruments, bells, chimes`
      },
      {
        title: 'Analog Circuit Emulation',
        content: `**Component-Level Modeling:**
Emulate individual circuit components:
- **Transistors:** Soft clipping, even harmonics
- **Tubes:** Warm saturation, smooth compression
- **Transformers:** Harmonic richness, low-end weight
- **Op-amps:** Clean or colored amplification

**Vintage Synth Emulation:**
Recreate classic analog behavior:
- **Oscillator drift:** Slight pitch instability
- **Filter self-oscillation:** Resonance at cutoff
- **VCA bleed:** Leakage even when "closed"
- **Component tolerance:** No two synths sound identical

**Analog Compressor Emulation:**
- **VCA (SSL, API):** Fast, transparent, punchy
- **FET (1176):** Aggressive, colored, musical distortion
- **Opto (LA-2A):** Slow, smooth, natural
- **Tube (Fairchild):** Warm, rich, expensive sound

**Tape Saturation:**
Emulate magnetic tape behavior:
- **Soft clipping:** Rounds off peaks
- **Harmonic generation:** Adds warmth
- **Compression:** Natural limiting
- **Hysteresis:** Non-linear response
- **Wow/flutter:** Subtle pitch modulation`
      }
    ]
  },
  
  learningObjectives: [
    "Understand physical modeling: exciter, resonator, damping, and radiation",
    "Design instruments with Karplus-Strong, waveguide, and modal synthesis",
    "Emulate analog circuits: transistors, tubes, transformers, vintage synths",
    "Apply analog compressor and tape saturation emulation for color and character"
  ],
  assessmentRubric: {
    ...lessonQualityPreset.assessmentRubric
  },
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
