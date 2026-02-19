import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-16-progress",
  lessonNumber: 16,
  lessonCategory: "Mixing",
  depthLevel: 9,
  
  nextLessonUrl: "lesson-mixing-17.html",
  prevLessonUrl: "lesson-mixing-15.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-mixing-16", categoryLabel: "Mixing" }),
    title: "Advanced Parallel",
    titleHighlight: "Processing",
    subtitle: "Master the art of parallel compression, saturation, and distortion to add <strong>power and character</strong> without sacrificing dynamics. Learn New York compression, parallel saturation chains, and how to blend processed signals for professional impact."
  },
  
  sequencer: {
    tempo: 128,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 128
  },
  
  exercise: {
    title: "Build Parallel Processing Chain",
    description: "Create a <strong>dynamic pattern demonstrating parallel processing</strong> with clean signal (high velocity) and heavily processed signal (low velocity). You'll understand how blending clean and aggressive signals creates powerful, punchy mixes.",
    tip: "High velocity represents clean, dynamic signal. Low velocity represents heavily compressed/saturated parallel signal. When mixed together, they create power without losing punch.",
    steps: [
      { text: "<strong>Set tempo to 128 BPM</strong> for an energetic electronic/EDM groove." },
      { text: "<strong>Program clean kick</strong> on steps 1, 5, 9, 13 with high velocity (110-120) for punch." },
      { text: "<strong>Add parallel kick</strong> on same steps with low velocity (60-70) simulating heavy compression." },
      { text: "<strong>Program clean snare</strong> on steps 5, 13 with velocity 100-110 for snap." },
      { text: "<strong>Layer parallel snare</strong> on steps 5, 13 with velocity 50-60 simulating saturation." },
      { text: "<strong>Listen</strong> to how blending clean + processed signals creates power and character." }
    ]
  },
  
  instruments: [
    {
      id: "clean-kick",
      label: "Clean Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.001, decay: 0.15, sustain: 0, release: 0.05 },
      filter: { type: "lowpass", frequency: 120, Q: 2.0 }
    },
    {
      id: "parallel-kick",
      label: "Parallel Kick",
      color: "linear-gradient(135deg, #fab1a0, #e17055)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "square", detune: 0 },
      envelope: { attack: 0.001, decay: 0.3, sustain: 0.5, release: 0.2 },
      filter: { type: "lowpass", frequency: 200, Q: 1.5 }
    },
    {
      id: "clean-snare",
      label: "Clean Snare",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [4, 12],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.12, sustain: 0, release: 0.05 },
      filter: { type: "highpass", frequency: 300, Q: 1.0 }
    },
    {
      id: "parallel-snare",
      label: "Parallel Snare",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [4, 12],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.25, sustain: 0.3, release: 0.15 },
      filter: { type: "bandpass", frequency: 1200, Q: 2.5 }
    }
  ],
  
  theory: {
    sections: [
      {
        title: 'Parallel Compression (New York Compression)',
        content: `**What Is Parallel Compression?**
Instead of inserting a compressor directly on a track (series), you send a copy of the signal to a separate bus with heavy compression, then blend the compressed signal with the original.

**The Magic:**
- **Clean signal:** Preserves transients, punch, and dynamics
- **Compressed signal:** Adds sustain, body, and power
- **Blend:** Get the best of both worlds—dynamic AND powerful

**Classic "New York Compression" Setup:**
1. Create a bus called "Parallel Compression"
2. Send drum bus (or any element) to this bus
3. Apply **aggressive compression:**
   - **Ratio:** 8:1 to 20:1 (brick wall)
   - **Attack:** 1-5ms (fast, catch transients)
   - **Release:** 50-150ms (fast, recover quickly)
   - **Threshold:** Low (hitting 10-20dB gain reduction)
   - **Makeup Gain:** +10 to +20dB (compensate for reduction)
4. Blend compressed bus at -6 to -12dB below original signal

**Why It Works:**
- Original signal keeps punch and attack
- Parallel signal brings up quiet elements (room mics, tails, sustain)
- Result: Everything feels powerful without sounding squashed

**Common Applications:**
- **Drums:** Makes drums feel huge and punchy
- **Vocals:** Adds presence and power without losing articulation
- **Bass:** Adds sustain and weight without losing attack
- **Full mix:** Adds glue and energy on the mix bus`
      },
      {
        title: 'Parallel Saturation & Distortion',
        content: `**Parallel Saturation Concept:**
Similar to parallel compression, but using saturation/distortion processors to add harmonic richness and aggression without destroying the clean signal.

**Parallel Saturation Chain:**
1. **Send clean signal to saturation bus**
2. **Apply one or more saturation types:**
   - **Tape saturation:** Warm, smooth harmonics (Waves J37, UAD Ampex ATR-102)
   - **Tube saturation:** Rich, even-order harmonics (UAD Fairchild 670, Softube Tube-Tech)
   - **Analog saturation:** Console/preamp color (Slate VCC, UAD Neve, SSL)
   - **Distortion/Overdrive:** Aggressive, crunchy harmonics (Decapitator, Saturn 2)
3. **High-pass filter the saturated bus** (80-150 Hz) to avoid muddying low end
4. **Blend at 10-30%** with original signal

**Advanced: Serial Parallel Processing**
Chain multiple saturators in parallel for complex harmonic layering:
- **Bus 1:** Tape saturation (warmth)
- **Bus 2:** Tube saturation (richness)
- **Bus 3:** Analog console saturation (glue)
- **Bus 4:** Aggressive distortion (edge)
Blend each bus at different levels for custom tone.

**Genre Applications:**
- **EDM/Electronic:** Parallel distortion on synth buses for aggression
- **Rock/Metal:** Parallel saturation on guitars, drums for analog punch
- **Hip-Hop:** Parallel tape saturation on drums for warmth and weight
- **Pop:** Subtle parallel tube saturation on vocals for presence`
      },
      {
        title: 'Parallel Effects & Creative Processing',
        content: `**Beyond Compression & Saturation:**
You can use parallel processing with ANY effect for creative mixing.

**Parallel Reverb:**
**Standard:** Insert reverb, adjust wet/dry mix
**Parallel:** Send to reverb bus at 100% wet, blend to taste
**Advantage:** More control—compress the reverb, EQ it, automate send level independently

**Setup:**
1. Create reverb bus, set reverb to 100% wet
2. High-pass filter reverb return (200-300 Hz) to avoid muddiness
3. Compress reverb return (4:1, fast attack/release) to control blooming
4. Send drums/vocals to this bus, adjust send level for depth
5. **Pro tip:** Use different reverb types on different sends (plate for snare, hall for vocals)

**Parallel Delay:**
1. Create delay bus, set to 100% wet
2. Apply quarter-note or eighth-note delay (tempo-synced)
3. High-pass filter delay return (500 Hz+) for clarity
4. Send vocals or lead instruments, automate for delay throws
5. Compress delay return to keep it consistent

**Parallel Distortion/Lo-Fi:**
1. Create "grit" bus with bitcrusher, distortion, or lo-fi plugin
2. Send vocals or synths to this bus
3. Blend at 5-20% for subtle harmonic excitement
4. **Pro tip:** Automate parallel send during chorus for added energy

**Parallel Pitch Shifting:**
1. Create pitch-shift bus (octave down or up)
2. Send bass or vocals for thickness
3. Blend low in mix for subtle reinforcement
4. Classic on bass: +1 octave parallel for high-end presence

**Parallel EQ (Frequency Splitting):**
1. Create multiple buses with different EQ curves
2. **Bus 1:** High-pass 5 kHz+ (air and sparkle)
3. **Bus 2:** Bandpass 200-500 Hz (warmth and body)
4. **Bus 3:** Low-pass <80 Hz (sub weight)
5. Process each bus independently (compress air, saturate body, limit sub)
6. Blend back with original for surgical control`
      },
      {
        title: 'Blending & Balancing Parallel Signals',
        content: `**The Art of the Blend:**
Parallel processing power comes from finding the perfect balance between clean and processed signals.

**Gain Staging Parallel Chains:**
1. Start with parallel bus at -∞ (muted)
2. Solo original signal, set clean level
3. Bring up parallel bus gradually
4. Listen for the "sweet spot" where it adds impact without overpowering

**Listening Tests:**
- **Too little parallel:** No noticeable difference, wasting processing
- **Too much parallel:** Sounds squashed, lifeless, or distorted
- **Perfect blend:** Adds power, energy, or character while maintaining dynamics

**Common Blend Ratios:**
- **Parallel Compression:** 30-50% blend (drums), 20-30% (vocals)
- **Parallel Saturation:** 10-30% blend
- **Parallel Distortion:** 5-20% blend (subtle), 30-50% (aggressive EDM/rock)
- **Parallel Reverb:** 15-40% blend (depends on depth desired)

**Phase Considerations:**
Parallel processing can cause phase issues if not careful:
- **Check mono compatibility:** Sum to mono and listen
- **If signal gets thinner in mono:** You have phase cancellation
- **Fix:** Flip polarity on parallel bus, or add small delay (1-5ms) to parallel bus

**Frequency Masking:**
Use EQ on parallel buses to carve space:
- **High-pass parallel compression bus** (50-100 Hz) to avoid low-end buildup
- **Low-pass parallel distortion bus** (8-10 kHz) if it adds harsh highs
- **Notch out problem frequencies** on parallel buses without affecting original

**Automation for Dynamic Mixing:**
Automate parallel send levels for dynamic impact:
- **Verse:** Lower parallel blend (10-20%) for intimacy
- **Chorus:** Higher parallel blend (30-50%) for power
- **Breakdown:** Mute parallel buses for stark contrast
- **Drop:** Max out parallel buses for maximum energy`
      }
    ]
  },
  
  learningObjectives: [
    "Master parallel compression (New York compression) for powerful drums, vocals, and mix bus processing",
    "Apply parallel saturation and distortion chains for harmonic richness without destroying clean signals",
    "Use parallel reverb, delay, pitch-shifting, and creative effects for surgical control",
    "Balance clean and processed signals with proper blending ratios and frequency management",
    "Automate parallel processing for dynamic impact across different song sections"
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
