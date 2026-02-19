import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-sound-design-20-progress",
  lessonNumber: 20,
  lessonCategory: "Sound Design",
  depthLevel: 10,
  
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-sound-design-19.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-sound-design-20", categoryLabel: "Sound Design" }),
    title: "Sound Design for",
    titleHighlight: "Visual Media",
    subtitle: "Master cinematic sound design with <strong>impacts, risers, transitions, and atmospheric textures</strong> for film, trailers, games, and visual media. Learn professional techniques for creating emotional, powerful soundscapes."
  },
  
  sequencer: {
    tempo: 140,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 140
  },
  
  exercise: {
    title: "Design Cinematic Build-Impact",
    description: "Create a <strong>cinematic build-to-impact pattern</strong> with riser (tension), whoosh (transition), impact (hit), and tail (decay). Understand professional film sound design structure and timing.",
    tip: "Cinematic sound design is all about tension → release. Build anticipation with risers, deliver impact with hits, sustain emotion with tails.",
    steps: [
      { text: "<strong>Set tempo to 140 BPM</strong> for dramatic, high-energy pacing." },
      { text: "<strong>Program riser build</strong> on steps 1-12 with increasing velocity (60 → 100) for tension." },
      { text: "<strong>Add whoosh transition</strong> on steps 13-14 with velocity 90-100 (movement)." },
      { text: "<strong>Layer massive impact</strong> on step 15 with max velocity (120) for climax." },
      { text: "<strong>Add reverb tail</strong> on step 16 with velocity 70-80 (sustains emotion)." },
      { text: "<strong>Listen</strong> to how build → whoosh → impact → tail creates cinematic drama." }
    ]
  },
  
  instruments: [
    {
      id: "riser",
      label: "Riser",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 2.0, decay: 0.5, sustain: 0.8, release: 0.3 },
      filter: { type: "highpass", frequency: 100, Q: 0.8 }
    },
    {
      id: "whoosh",
      label: "Whoosh",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [12, 13],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.01, decay: 0.15, sustain: 0, release: 0.1 },
      filter: { type: "bandpass", frequency: 2000, Q: 3.0 }
    },
    {
      id: "impact",
      label: "Impact",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [14],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.001, decay: 0.5, sustain: 0.2, release: 1.0 },
      filter: { type: "lowpass", frequency: 80, Q: 2.0 }
    },
    {
      id: "tail",
      label: "Tail",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [15],
      oscillator: { type: "triangle", detune: 7 },
      envelope: { attack: 0.1, decay: 2.0, sustain: 0.3, release: 3.0 },
      filter: { type: "lowpass", frequency: 1200, Q: 0.5 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Cinematic Sound Design Elements',
        content: `**Core Elements:**

**1. Impacts/Hits:**
Powerful, punchy sounds for dramatic moments:
- **Layering:** Sub (30-60 Hz) + Mid (200-500 Hz) + High (2-8 kHz)
- **Transient shaping:** Fast attack (1-5ms), moderate decay (100-500ms)
- **Saturation:** Add harmonics for power
- **Reverb:** Short plate or chamber for size
- **Sources:** Bass drum, metal hits, explosions, door slams

**2. Risers/Builds:**
Create tension and anticipation:
- **White noise sweep:** High-pass filter automation (20 Hz → 20 kHz)
- **Reverse cymbal:** Reverse crash, pitch up over time
- **Synth build:** Saw wave with filter opening + volume increasing
- **Duration:** 2-8 seconds (match to video edit)
- **Automation:** Volume, filter, pitch all increasing

**3. Whooshes/Transitions:**
Movement between scenes:
- **Doppler effect:** Pitch down as sound "passes by"
- **Stereo movement:** Pan L → R or R → L
- **Duration:** 0.5-2 seconds (quick)
- **Layering:** Wind + tonal element + noise
- **Use:** Scene changes, camera movements, time skips

**4. Drones/Atmospheres:**
Sustained emotional textures:
- **Long evolving pads:** No clear beginning or end
- **Pitch:** Often atonal or dissonant for tension
- **Movement:** Slow filter/volume automation
- **Layering:** 3-5 layers (low, mid, high frequencies)
- **Use:** Background emotional tone, establishes mood`
      },
      {
        title: 'Professional Film Sound Techniques',
        content: `**Hybrid Sound Design:**
Combine organic + synthetic for rich, complex sounds:
- **Organic:** Real recordings (metals, woods, water, fire)
- **Synthetic:** Synths, processed noise, granular
- **Example Impact:** Real bass drum + 808 sub + distorted sine

**Layering Strategy:**
- **Low (20-150 Hz):** Weight and power (sub bass, kick)
- **Mid (150 Hz - 5 kHz):** Body and character (tonal content)
- **High (5-20 kHz):** Air and detail (noise, cymbals, glass)
- **Rule:** Each layer occupies different frequency range

**Emotional Sound Design:**
Match sound to emotion:
- **Tension:** Dissonant drones, rising pitch, increasing volume
- **Release:** Bright impacts, major chords, clear tones
- **Sadness:** Minor keys, slow attacks, low frequencies
- **Fear:** Unpredictable, sudden, harsh sounds
- **Wonder:** Shimmering highs, evolving pads, major harmonies

**Sync to Picture:**
- **Hit Points:** Align impacts to visual edits (frame-accurate)
- **Build Duration:** Match riser length to shot duration
- **Tempo:** Match internal rhythm to pacing of visuals
- **Silence:** Use negative space for dramatic effect

**Reverb for Space:**
- **Tight room:** Intimate, close, personal
- **Hall:** Grand, epic, larger-than-life
- **Cathedral:** Majestic, spiritual, overwhelming
- **Plate:** Musical, smooth, polished
- **Match reverb size to visual environment**`
      },
      {
        title: 'Game Audio & Interactive Sound',
        content: `**Adaptive Music Layers:**
Change music based on game state:
- **Explore:** Ambient pad layer only
- **Combat:** Add drums + bass + melody
- **Boss Fight:** Full orchestral intensity
- **Implementation:** Crossfade between layers seamlessly

**One-Shot Sound Design:**
Sounds triggered by player actions:
- **Footsteps:** Vary pitch/volume per step (avoid machine gun)
- **Weapon fire:** Multiple variations (5-10 samples)
- **UI sounds:** Clear, short, non-fatiguing
- **3D positioning:** Sounds come from correct direction

**Looping Ambiences:**
Seamless environmental audio:
- **No transients at loop point:** Fade in/out
- **Long enough:** 30-120 seconds (avoid obvious looping)
- **Layering:** Multiple loops at different lengths (avoid sync)
- **Randomization:** Pitch/volume variation per playback

**Procedural Audio:**
Generate sound algorithmically:
- **Footsteps:** Synthesize based on surface type + speed
- **Engine sounds:** Granular synthesis controlled by RPM
- **Wind:** Filtered noise with randomized modulation
- **Advantage:** Infinite variation, low memory usage

**Middleware Integration:**
- **Wwise, FMOD:** Industry-standard game audio engines
- **Parameters:** Game state → audio parameters
- **Interactive mixing:** Dynamic ducking, layering, effects
- **Memory:** Compressed audio, streaming vs. loaded

**Spatial Audio:**
- **Stereo:** Basic left/right panning
- **5.1/7.1 Surround:** Multi-channel speaker arrays
- **Binaural (HRTF):** 3D audio for headphones
- **Ambisonics:** Spherical surround (VR/AR)`
      }
    ]
  },
  
  learningObjectives: [
    "Design cinematic elements: impacts, risers, whooshes, drones for film and trailers",
    "Apply professional techniques: hybrid layering, emotional sound design, sync to picture",
    "Master game audio: adaptive layers, one-shots, looping ambiences, procedural synthesis",
    "Implement spatial audio: stereo, surround, binaural, and ambisonics for immersive experiences"
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
