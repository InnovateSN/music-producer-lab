import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-sound-design-19-progress",
  lessonNumber: 19,
  lessonCategory: "Sound Design",

  progression: {
    difficulty: "expert",
    prerequisites: ["sound-design-18","sound-design-17"],
    outcomes: ["Completare gli obiettivi pratici di sound-design-19","Consolidare competenze expert nel modulo sound-design"]
  },
  depthLevel: 10,
  
  nextLessonUrl: "lesson-sound-design-20.html",
  prevLessonUrl: "lesson-sound-design-18.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-sound-design-19", categoryLabel: "Sound Design" }),
    title: "Spectral Processing &",
    titleHighlight: "Resynthesis",
    subtitle: "Transform sounds at the spectral level with <strong>FFT processing, vocoding, and spectral resynthesis</strong>. Master frequency domain manipulation, cross-synthesis, and advanced spectral effects for otherworldly sounds."
  },
  
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 120
  },
  
  exercise: {
    title: "Build Spectral Layers",
    description: "Create a <strong>pattern representing spectral processing layers</strong>: carrier (harmonic content), modulator (spectral shape), and vocoder bands. Understand how frequency domain manipulation creates hybrid, morphed sounds.",
    tip: "Spectral processing works in frequency domain, not time domain. Each instrument represents a frequency band being analyzed, modified, and resynthesized.",
    steps: [
      { text: "<strong>Set tempo to 120 BPM</strong> for rhythmic spectral patterns." },
      { text: "<strong>Program carrier signal</strong> on all 16 steps with velocity 90-100 (provides harmonics)." },
      { text: "<strong>Add modulator shape</strong> on steps 1, 5, 9, 13 with velocity 100-110 (imposes spectral envelope)." },
      { text: "<strong>Layer low band</strong> on steps 1, 3, 5, 7 with velocity 80-90 (bass frequencies)." },
      { text: "<strong>Add high band</strong> on steps 9, 11, 13, 15 with velocity 70-80 (treble frequencies)." },
      { text: "<strong>Listen</strong> to how spectral analysis creates frequency-based transformations." }
    ]
  },
  
  instruments: [
    {
      id: "carrier",
      label: "Carrier",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
      filter: { type: "lowpass", frequency: 3000, Q: 0.8 }
    },
    {
      id: "modulator",
      label: "Modulator",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "triangle", detune: 0 },
      envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 0.4 },
      filter: { type: "bandpass", frequency: 1500, Q: 2.0 }
    },
    {
      id: "low-band",
      label: "Low Band",
      color: "linear-gradient(135deg, #6c5ce7, #5f27cd)",
      targetSteps: [0, 2, 4, 6],
      oscillator: { type: "sine", detune: -12 },
      envelope: { attack: 0.02, decay: 0.4, sustain: 0.5, release: 0.5 },
      filter: { type: "lowpass", frequency: 400, Q: 1.5 }
    },
    {
      id: "high-band",
      label: "High Band",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [8, 10, 12, 14],
      oscillator: { type: "sine", detune: 12 },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.3, release: 0.3 },
      filter: { type: "highpass", frequency: 2000, Q: 1.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'FFT & Spectral Processing',
        content: `**Fast Fourier Transform (FFT):**
Converts time-domain signal (waveform) into frequency-domain (spectrum):
- **Time Domain:** Amplitude over time
- **Frequency Domain:** Amplitude per frequency

**Why Use FFT?**
Edit individual frequencies independently—impossible in time domain. Allows surgical, creative sound transformation.

**Spectral Operations:**
- **Freeze:** Sustain current spectrum indefinitely
- **Blur:** Smear frequencies together (creates dreamy, reverb-like effect)
- **Shift:** Move all frequencies up/down (creates dissonance)
- **Filter:** Remove specific frequency bands surgically
- **Gate:** Keep only loudest frequencies (creates sparse, glitchy sounds)

**Spectral Delay:**
Delay different frequencies by different amounts:
- Low frequencies delayed more → bass lags behind highs
- Creates comb filtering, phasing, surreal effects

**Spectral Compression:**
Compress individual frequency bands independently:
- Bring up quiet harmonics
- Tame harsh frequencies
- More transparent than multiband compression`
      },
      {
        title: 'Vocoding & Cross-Synthesis',
        content: `**Vocoder Explained:**
Analyzes spectral envelope of modulator, applies to carrier:
1. **Split both signals** into frequency bands (8-32 bands)
2. **Analyze modulator** amplitude per band
3. **Apply to carrier** frequency bands
4. **Result:** Carrier speaks/sings like modulator

**Classic Applications:**
- **Robot voice:** Synth carrier + vocal modulator
- **Talking instruments:** Any carrier + vocal modulator
- **Rhythmic pads:** Pad carrier + drums modulator

**Phase Vocoder:**
Advanced FFT-based vocoder:
- Independent pitch and time manipulation
- High-quality time-stretching
- Formant preservation
- Used in: Elastic Audio, Auto-Tune, spectral effects

**Cross-Synthesis Techniques:**
**Spectral Morphing:**
- Interpolate between two spectra (A → B)
- Creates smooth transformations between sounds
- 0% = Sound A, 50% = hybrid, 100% = Sound B

**Spectral Filtering:**
- Use one sound as spectral filter for another
- Drum loop filters synth = rhythmic, dynamic texture

**Spectral Convolution:**
- Multiply two spectra together
- Creates hybrid timbres impossible by additive means`
      }
    ]
  },
  
  learningObjectives: [
    "Understand FFT and spectral processing: frequency-domain manipulation",
    "Apply spectral operations: freeze, blur, shift, filter, gate, spectral delay",
    "Master vocoding: carrier/modulator analysis, band splitting, envelope following",
    "Use cross-synthesis: spectral morphing, filtering, and convolution for hybrid sounds"
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
