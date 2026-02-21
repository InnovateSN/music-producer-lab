import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-sound-design-16-progress",
  lessonNumber: 16,
  lessonCategory: "Sound Design",

  progression: {
    difficulty: "advanced",
    prerequisites: ["sound-design-15","sound-design-14"],
    outcomes: ["Completare gli obiettivi pratici di sound-design-16","Consolidare competenze advanced nel modulo sound-design"]
  },
  depthLevel: 9,
  
  nextLessonUrl: "lesson-sound-design-17.html",
  prevLessonUrl: "lesson-sound-design-15.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-sound-design-16", categoryLabel: "Sound Design" }),
    title: "Advanced Modular",
    titleHighlight: "Synthesis",
    subtitle: "Master complex modulation routing, CV control, and <strong>modular synthesis techniques</strong> for dynamic, evolving sounds. Learn patch design, feedback loops, and generative synthesis strategies used in professional sound design."
  },
  
  sequencer: {
    tempo: 105,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 105
  },
  
  exercise: {
    title: "Design Modulation Matrix Pattern",
    description: "Create a <strong>pattern demonstrating modular synthesis concepts</strong> with multiple interconnected layers representing oscillators, modulators, and effects. Understand how complex modulation routing creates evolving, dynamic sounds.",
    tip: "Each instrument represents a modular component: Oscillator (carrier), Modulator (LFO/envelope), Filter (shaper), Output (final sound). In modular synthesis, everything can modulate everything else.",
    steps: [
      { text: "<strong>Set tempo to 105 BPM</strong> for a groovy, exploratory feel." },
      { text: "<strong>Program carrier oscillator</strong> on steps 1, 5, 9, 13 with velocity 100-110 for foundation." },
      { text: "<strong>Add modulator LFO</strong> on all 16 steps with velocity 60-70 (continuous modulation)." },
      { text: "<strong>Layer filter envelope</strong> on steps 1, 5, 9, 13 with velocity 80-90 (shapes timbre)." },
      { text: "<strong>Add feedback path</strong> on steps 3, 7, 11, 15 with velocity 70-80 (creates complexity)." },
      { text: "<strong>Listen</strong> to how layered modulation creates evolving, organic textures." }
    ]
  },
  
  instruments: [
    {
      id: "carrier-osc",
      label: "Carrier Osc",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.02, decay: 0.3, sustain: 0.5, release: 0.4 },
      filter: { type: "lowpass", frequency: 2000, Q: 1.0 }
    },
    {
      id: "modulator-lfo",
      label: "Modulator LFO",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      oscillator: { type: "sine", detune: 5 },
      envelope: { attack: 0.1, decay: 0.5, sustain: 0.7, release: 1.0 },
      filter: { type: "lowpass", frequency: 800, Q: 0.8 }
    },
    {
      id: "filter-env",
      label: "Filter Env",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "triangle", detune: -7 },
      envelope: { attack: 0.05, decay: 0.2, sustain: 0.3, release: 0.3 },
      filter: { type: "bandpass", frequency: 1500, Q: 2.0 }
    },
    {
      id: "feedback",
      label: "Feedback",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [2, 6, 10, 14],
      oscillator: { type: "square", detune: 12 },
      envelope: { attack: 0.01, decay: 0.15, sustain: 0.4, release: 0.5 },
      filter: { type: "lowpass", frequency: 1200, Q: 3.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Modular Synthesis Fundamentals',
        content: `**Modular Philosophy:**
In modular synthesis, every parameter is a potential modulation destination, and every signal can be a modulation source. This creates infinite sonic possibilities through complex signal routing.

**Core Modules:**
- **Oscillators (VCO):** Generate audio-rate waveforms (carriers)
- **Filters (VCF):** Shape frequency content
- **Amplifiers (VCA):** Control amplitude
- **Envelopes:** Create time-based modulation
- **LFOs:** Generate sub-audio modulation signals
- **Utilities:** Mixers, multiples, attenuators, offsets

**CV (Control Voltage):**
Modulation signals that control parameters. CV is the "language" of modular synthesis—every parameter accepts CV input.

**Patching Strategy:**
Start simple, add complexity gradually. Classic patch: VCO → VCF → VCA (output), with envelopes controlling filter and amplitude.`
      },
      {
        title: 'Advanced Modulation Routing',
        content: `**Complex Modulation Matrices:**
Route multiple sources to multiple destinations for evolving sounds:
- **LFO 1 → Filter Cutoff:** Creates wah-wah movement
- **LFO 2 → LFO 1 Rate:** Creates evolving modulation speed (meta-modulation)
- **Envelope → LFO Depth:** Dynamic modulation intensity
- **Velocity → Everything:** Touch-sensitive parameters

**Cross-Modulation:**
Oscillators modulate each other for complex timbres:
- **Osc 1 → Osc 2 Pitch:** Creates FM-style harmonics
- **Osc 2 → Osc 1 PWM:** Creates evolving pulse width
- **Both → Each Other:** Creates chaotic, unpredictable sounds

**Feedback Loops:**
Route output back to input for self-modulation:
- **Filter output → Filter input:** Creates resonant feedback and instability
- **Delay output → Pitch input:** Creates karplus-strong synthesis
- **⚠️ Warning:** Can create runaway feedback—use attenuators!

**Modulation Offsets & Scaling:**
Use utilities to fine-tune modulation:
- **Attenuators:** Reduce modulation depth (0-100%)
- **Offsets:** Shift modulation range up/down
- **Inverters:** Flip modulation polarity (negative modulation)
- **Mixers:** Combine multiple modulation sources`
      },
      {
        title: 'Generative & Self-Evolving Patches',
        content: `**Generative Synthesis:**
Design patches that evolve without user input—used in ambient, experimental, and game audio.

**Random Voltage Sources:**
- **Sample & Hold:** Generates random stepped voltages
- **Random LFO:** Smooth random modulation
- **Noise:** Chaotic modulation source

**Self-Evolving Patch Example:**
1. Random LFO → VCO Pitch (wandering melody)
2. Sample & Hold → Filter Cutoff (evolving timbre)
3. Slow LFO → Random LFO Rate (changing randomness speed)
4. Envelope → Feedback Amount (dynamic complexity)
5. **Result:** Patch that never repeats, always evolving

**Clock Dividers & Sequencers:**
Create polyrhythmic, evolving patterns:
- **Master Clock:** 16th notes
- **÷2 output:** 8th notes (trigger filter envelope)
- **÷3 output:** Triplets (trigger pitch change)
- **÷7 output:** Polyrhythm (trigger timbre shift)

**Probability & Logic:**
Use logic modules for unpredictable behavior:
- **Coin toss:** 50% chance of gate passing through
- **Bernoulli gate:** Adjustable probability (0-100%)
- **Logic gates (AND, OR, XOR):** Complex triggering conditions`
      },
      {
        title: 'Professional Modular Techniques',
        content: `**West Coast vs. East Coast Synthesis:**

**East Coast (Subtractive):**
- Start with harmonically rich waveform
- Subtract frequencies with filter
- Control amplitude with VCA
- Examples: Moog, ARP, Sequential

**West Coast (Additive/Complex):**
- Start with simple waveform (sine, triangle)
- Add complexity through waveshaping, FM, AM
- No traditional filter—shape with wavefolders, ring modulators
- Examples: Buchla, Serge

**Buchla-Style Lowpass Gates (LPG):**
Combines VCA + VCF in one module—amplitude and brightness controlled simultaneously. Creates natural, "plucky" sounds similar to acoustic instruments.

**Complex Oscillators:**
Two oscillators with built-in cross-modulation:
- **Carrier + Modulator** with through-zero FM
- **Linear FM** for harmonic sidebands
- **Exponential FM** for inharmonic timbres

**Waveshaping & Folding:**
Distort waveforms by "folding" them back on themselves:
- Low input: Sine wave
- Medium input: Folded wave (adds harmonics)
- High input: Highly complex, metallic timbre
- **Use:** Evolving timbres with single VCO

**Karplus-Strong Synthesis:**
Physical modeling technique using short delay + feedback:
1. Noise burst → Short delay (pitch = 1/delay time)
2. Feedback with lowpass filter (damping)
3. Result: Plucked string, bell, drum sounds

**Audio Rate Modulation:**
Use audio-rate signals as modulators (not just LFOs):
- **VCO → VCA CV input:** Amplitude modulation (tremolo → ring mod)
- **VCO → Filter cutoff:** Creates formants and vowel sounds
- **VCO → Wavefolder:** Creates evolving, complex timbres`
      }
    ]
  },
  
  learningObjectives: [
    "Understand modular synthesis: CV control, signal routing, and modulation matrices",
    "Design complex modulation patches: cross-modulation, feedback loops, meta-modulation",
    "Create generative self-evolving patches with random sources, clock dividers, and logic",
    "Apply professional techniques: West Coast synthesis, LPGs, waveshaping, Karplus-Strong",
    "Master audio-rate modulation for AM, FM, and formant synthesis"
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
