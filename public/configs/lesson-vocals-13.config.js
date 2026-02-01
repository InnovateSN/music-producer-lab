import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-13-progress",
  lessonNumber: 13,
  lessonCategory: "Vocals",
  depthLevel: 9,
  
  nextLessonUrl: "lesson-vocals-14.html",
  prevLessonUrl: "lesson-vocals-12.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-vocals-13", categoryLabel: "Vocals" }),
    title: "Vocal Effects &",
    titleHighlight: "Creative Processing",
    subtitle: "Master delay, reverb, distortion, and modulation effects to transform vocals into <strong>powerful, creative soundscapes</strong>. Learn professional techniques for delay throws, reverb tails, vocal doubling, and lo-fi processing that elevate your vocal productions."
  },
  
  sequencer: {
    tempo: 95,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 95
  },
  
  exercise: {
    title: "Design Creative Vocal Effects Chain",
    description: "Create a rhythmic vocal pattern with <strong>delay throws, reverb swells, and distortion</strong> to understand how effects shape vocal character and space. You'll build a 4-bar vocal rhythm that demonstrates professional FX techniques.",
    tip: "Start with a dry vocal rhythm, then add one effect at a time to hear how each processor colors the sound. Effects order matters: compression → EQ → modulation → delay → reverb is a classic chain.",
    steps: [
      { text: "<strong>Set tempo to 95 BPM</strong> for a mid-tempo groove that works well with vocal FX." },
      { text: "<strong>Program main vocal hits</strong> on steps 1, 5, 9, 13 (downbeats) with velocity 100-110." },
      { text: "<strong>Add vocal stabs</strong> on steps 3, 7, 11, 15 (off-beats) with velocity 80-90 for contrast." },
      { text: "<strong>Create delay throws</strong> by leaving space after vocal hits (silence on steps 2, 6, 10, 14)." },
      { text: "<strong>Layer backing vocals</strong> with lower velocity (60-70) on steps 4, 8, 12, 16 for depth." },
      { text: "<strong>Listen</strong> and imagine adding reverb to create space, distortion for grit, chorus for width." }
    ]
  },
  
  instruments: [
    {
      id: "lead-vocal",
      label: "Lead Vocal",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.01, decay: 0.3, sustain: 0.4, release: 0.4 },
      filter: { type: "lowpass", frequency: 2800, Q: 1.2 }
    },
    {
      id: "vocal-stab",
      label: "Vocal Stab",
      color: "linear-gradient(135deg, #fd79a8, #e84393)",
      targetSteps: [2, 6, 10, 14],
      oscillator: { type: "triangle", detune: -5 },
      envelope: { attack: 0.005, decay: 0.15, sustain: 0.2, release: 0.2 },
      filter: { type: "bandpass", frequency: 1800, Q: 2.5 }
    },
    {
      id: "backing-vocal",
      label: "Backing Vocal",
      color: "linear-gradient(135deg, #81ecec, #00cec9)",
      targetSteps: [3, 7, 11, 15],
      oscillator: { type: "sine", detune: 12 },
      envelope: { attack: 0.05, decay: 0.4, sustain: 0.5, release: 0.6 },
      filter: { type: "lowpass", frequency: 1200, Q: 0.8 }
    },
    {
      id: "vocal-pad",
      label: "Vocal Pad",
      color: "linear-gradient(135deg, #fab1a0, #e17055)",
      targetSteps: [],
      oscillator: { type: "square", detune: -12 },
      envelope: { attack: 0.3, decay: 0.5, sustain: 0.7, release: 1.0 },
      filter: { type: "lowpass", frequency: 800, Q: 1.5 }
    }
  ],
  
  theory: {
    sections: [
      {
        title: 'Vocal Effects Fundamentals',
        content: `**Time-Based Effects:**
**Delay** creates discrete echoes by repeating the signal at timed intervals. Use quarter-note delays (tempo-synced) for rhythmic throws, eighth-note delays for density, and dotted-eighth delays for triplet feels. Set feedback (repeats) to 20-40% for subtle tail, 60-80% for infinite build-ups.

**Reverb** simulates acoustic spaces by creating dense reflections. Short reverbs (0.5-1.5s) add intimacy, medium reverbs (1.5-3s) create room ambience, long reverbs (3-10s) produce epic, ethereal tails. Pre-delay (10-30ms) separates dry signal from wet tail for clarity.

**Modulation Effects:**
**Chorus** creates width and thickness by duplicating the signal with slight pitch/timing variations. Classic for doubling vocals and making mono tracks feel stereo. Rate: 0.5-2 Hz, Depth: 20-50%, Mix: 20-40% for natural doubling.

**Flanger** creates metallic, sweeping comb-filtering effects. More aggressive than chorus. Use sparingly for sci-fi vocal FX or aggressive electronic vocals. Rate: 0.1-1 Hz, Depth: 50-80%, Feedback: 30-60%.

**Distortion Effects:**
**Saturation/Overdrive** adds harmonic richness and warmth. Use tape saturation for analog warmth, tube saturation for smooth harmonics. Drive: 20-40% for subtle color, 60-100% for aggressive distortion.

**Bitcrush/Lo-Fi** reduces sample rate and bit depth for digital degradation. Classic for telephone/radio vocal effects, lo-fi hip-hop aesthetics, or aggressive electronic processing. Bit depth: 8-12 bits, Sample rate: 8-22 kHz.`
      },
      {
        title: 'Professional FX Techniques',
        content: `**Delay Throws:**
Automate delay send to 100% on the last word of a phrase, then back to 0%. This creates the iconic "throw" effect where one word echoes while others stay dry. Pair with high feedback (70%+) for dramatic builds.

**Reverb Swells:**
Reverse reverb: Apply reverb to a reversed vocal, then reverse it back. Creates a "swell" that builds into the vocal. Or use pre-delay automation to bring reverb in gradually during sustained notes.

**Parallel Processing:**
Keep the dry vocal on one channel (clarity), send to parallel FX channels (space/width/character). This maintains intelligibility while adding creative processing. Classic chains:
- **Channel 1 (Dry):** Compression, EQ, De-Esser
- **Channel 2 (Space):** 100% Reverb
- **Channel 3 (Width):** 100% Chorus/Doubler
- **Channel 4 (Character):** Distortion + Filter

**Sidechain Reverb:**
Use a sidechain compressor on your reverb return triggered by the dry vocal. This ducks the reverb when the vocal is present (clarity) and lets it bloom between phrases (space). Ratio: 4:1, Attack: 5ms, Release: 100-200ms.

**Effect Order:**
Standard vocal FX chain order:
1. **Corrective EQ** (remove mud, harsh frequencies)
2. **Compression** (control dynamics)
3. **De-Esser** (tame sibilance)
4. **Creative EQ** (add presence, air)
5. **Modulation** (chorus, flanger)
6. **Delay** (time-based)
7. **Reverb** (last in chain for natural space)

**Genre-Specific FX:**
- **Pop:** Subtle delay (eighth-note, 20% mix), medium reverb (1.5s), light chorus for width
- **Hip-Hop:** Short slap delay (100ms), minimal reverb, saturation for warmth
- **EDM:** Heavy sidechain, long delays with high feedback, massive reverb on builds, distortion for drops
- **Lo-Fi:** Bitcrush, vinyl crackle, tape saturation, spring reverb, chorus`
      }
    ]
  },
  
  learningObjectives: [
    "Understand delay, reverb, chorus, flanger, and distortion effects for creative vocal processing",
    "Program rhythmic vocal patterns that demonstrate professional FX techniques like delay throws",
    "Learn effect order: compression → EQ → modulation → delay → reverb for clarity and impact",
    "Master parallel processing to maintain vocal intelligibility while adding creative effects",
    "Apply genre-specific vocal FX chains for pop, hip-hop, EDM, and lo-fi productions"
  ]
};
