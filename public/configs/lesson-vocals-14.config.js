import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-14-progress",
  lessonNumber: 14,
  lessonCategory: "Vocals",
  depthLevel: 9,
  
  nextLessonUrl: "lesson-vocals-15.html",
  prevLessonUrl: "lesson-vocals-13.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-vocals-14", categoryLabel: "Vocals" }),
    title: "Vocal Production",
    titleHighlight: "Techniques",
    subtitle: "Master advanced recording, comping, tuning, and editing workflows that <strong>professional producers use daily</strong>. Learn how to capture perfect takes, comp the best moments, tune with transparency, and edit for emotional impact."
  },
  
  sequencer: {
    tempo: 88,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 88
  },
  
  exercise: {
    title: "Build Multi-Layer Vocal Arrangement",
    description: "Create a <strong>professional vocal stack</strong> with lead, double, harmony, and ad-lib layers to understand vocal production architecture. You'll design a 4-bar vocal arrangement that demonstrates industry-standard layering techniques.",
    tip: "Each vocal layer serves a purpose: lead (focus), double (thickness), harmony (color), ad-libs (interest). Keep lead vocal loudest and most present, doubles 3-6dB quieter, harmonies 6-9dB quieter, ad-libs mixed tastefully.",
    steps: [
      { text: "<strong>Set tempo to 88 BPM</strong> for a slow, emotional vocal showcase." },
      { text: "<strong>Program lead vocal</strong> on steps 1, 5, 9, 13 (downbeats) with velocity 110-120 for prominence." },
      { text: "<strong>Add vocal double</strong> on same steps (1, 5, 9, 13) with velocity 90-100, slightly detuned for thickness." },
      { text: "<strong>Create harmony vocal</strong> on steps 3, 7, 11, 15 (off-beats) with velocity 70-80 for color." },
      { text: "<strong>Layer ad-libs</strong> on steps 2, 6, 10, 14 with velocity 60-70 for rhythmic interest." },
      { text: "<strong>Listen</strong> to how each layer contributes to the full vocal stack and emotional impact." }
    ]
  },
  
  instruments: [
    {
      id: "lead-vocal",
      label: "Lead Vocal",
      color: "linear-gradient(135deg, #6c5ce7, #5f27cd)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.01, decay: 0.4, sustain: 0.5, release: 0.5 },
      filter: { type: "lowpass", frequency: 3000, Q: 1.0 }
    },
    {
      id: "vocal-double",
      label: "Vocal Double",
      color: "linear-gradient(135deg, #a29bfe, #8478f7)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sawtooth", detune: -8 },
      envelope: { attack: 0.015, decay: 0.4, sustain: 0.5, release: 0.5 },
      filter: { type: "lowpass", frequency: 2800, Q: 1.0 }
    },
    {
      id: "harmony-vocal",
      label: "Harmony Vocal",
      color: "linear-gradient(135deg, #fd79a8, #e84393)",
      targetSteps: [2, 6, 10, 14],
      oscillator: { type: "triangle", detune: 7 },
      envelope: { attack: 0.02, decay: 0.4, sustain: 0.5, release: 0.6 },
      filter: { type: "lowpass", frequency: 2400, Q: 1.2 }
    },
    {
      id: "ad-lib",
      label: "Ad-Lib",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [1, 5, 9, 13],
      oscillator: { type: "sine", detune: 12 },
      envelope: { attack: 0.005, decay: 0.2, sustain: 0.3, release: 0.3 },
      filter: { type: "bandpass", frequency: 1800, Q: 2.0 }
    }
  ],
  
  theory: {
    sections: [
      {
        title: 'Recording & Comping Workflows',
        content: `**Recording Best Practices:**
**Gain Staging:** Record vocals peaking at -18dB to -12dB (yellow on meters, never red). This leaves headroom for processing and prevents clipping. Use a pop filter to reduce plosives (p, b, t) and position mic 6-12 inches from singer.

**Multiple Takes:** Record 3-5 full takes of each section (verse, chorus, bridge). Don't stop for small mistakes—capture the full emotion. Then record 2-3 "punch-in" takes for specific difficult phrases.

**Comping (Compilation):**
Listen to all takes and select the best moments from each:
1. **Listen once** without editing to get familiar
2. **Mark favorites** on second listen (A, B, C rating system)
3. **Comp the best lines** from different takes into one "perfect" performance
4. **Crossfade edits** (10-30ms) to hide transitions between takes
5. **Prioritize emotion** over technical perfection—a slightly pitchy but passionate line beats a perfect but lifeless one

**Pro Tip:** Use playlist comping in your DAW:
- **Ableton:** Take Lanes
- **Logic Pro:** Quick Swipe Comping
- **FL Studio:** Playlist feature
- **Pro Tools:** Playlisting mode

**Performance Direction:**
- **Verse:** More intimate, conversational delivery (6-8 inches from mic)
- **Chorus:** More powerful, backed-off delivery (10-12 inches to control dynamics)
- **Ad-libs:** Closer, breathy, or energetic (4-6 inches for presence)`
      },
      {
        title: 'Tuning & Editing Techniques',
        content: `**Vocal Tuning Philosophy:**
**When to tune:** Modern pop/EDM expects near-perfect tuning. Hip-hop, R&B, rock, and indie tolerate more natural variation. Tune **after** comping but **before** adding effects.

**Tuning Tools:**
- **Auto-Tune/Melodyne:** Real-time or manual pitch correction
- **Retune Speed:** 0-20ms = robotic T-Pain effect, 30-80ms = natural pop vocal, 100-200ms = subtle correction
- **Humanize:** Leave small imperfections (vibrato, transitions) for authenticity

**Manual Tuning Best Practices:**
1. **Tune to the key** (if song is in C Major, tune to C Major scale)
2. **Focus on sustained notes** (long notes are most noticeable)
3. **Leave transitions alone** (pitch slides between notes add expression)
4. **Preserve vibrato** (don't flatten the natural wavering at note ends)
5. **A/B test** (bypass tuning to ensure it sounds natural)

**Timing Correction:**
**Quantize vocals sparingly.** Unlike drums, vocals sound robotic if perfectly aligned. Instead:
- Move early/late syllables that feel awkward
- Tighten backing vocals/doubles more than lead
- Keep lead vocal's natural timing (it's the "heart" of the track)

**Editing Techniques:**
**Breath Control:** Remove loud breaths before phrases (or reduce volume by -6 to -12dB). Keep subtle breaths for realism.

**Silence Between Phrases:** Add small fades (5-10ms) at the start/end of vocal clips to remove room noise and mouth clicks.

**Crossfades:** Always use short crossfades (10-30ms) when editing vocal clips to avoid clicks/pops.

**Sibilance Control:** Use a de-esser plugin to tame harsh "s," "sh," "t" sounds (4-8 kHz). Target frequency: 6-8 kHz, Threshold: -6 to -12dB, Ratio: 4:1.`
      },
      {
        title: 'Vocal Layering Architecture',
        content: `**Standard Vocal Stack:**

**Lead Vocal (Center, Loudest):**
- **Purpose:** Main melody, lyrical focus
- **Processing:** Full compression, EQ, de-esser, reverb, delay
- **Pan:** Center (mono)
- **Volume:** 0dB (reference level)

**Double Vocal (Center or Slight L/R, -3 to -6dB):**
- **Purpose:** Adds thickness and confidence to lead
- **Recording:** Same melody as lead, slightly different timing/tone
- **Processing:** Less compression than lead, high-pass filter at 150Hz to avoid low-end buildup
- **Pan:** Center (mono) OR slight L/R (L: 10%, R: 10%) for width
- **Volume:** -3 to -6dB quieter than lead

**Harmony Vocals (Stereo, -6 to -9dB):**
- **Purpose:** Adds color, emotion, and musicality
- **Recording:** Different pitches (thirds, fifths above/below lead melody)
- **Processing:** More reverb than lead for depth, chorus for width
- **Pan:** Hard L/R (L: 100%, R: 100%) for stereo width
- **Volume:** -6 to -9dB quieter than lead

**Backing Vocals / Ad-Libs (Stereo, -9 to -12dB):**
- **Purpose:** Adds rhythmic interest, call-and-response, hype
- **Recording:** Short phrases, exclamations, echoes of lead
- **Processing:** Heavy effects (distortion, lo-fi, delay) for character
- **Pan:** Wide stereo (L: 80%, R: 80% or varied)
- **Volume:** -9 to -12dB quieter than lead (mixed tastefully, not constant)

**Vocal Pad (Stereo, -12 to -18dB):**
- **Purpose:** Ambient texture, dreamy atmosphere
- **Processing:** Pitch-shifted down 1 octave, heavy reverb, chorus
- **Pan:** Wide stereo
- **Volume:** Barely audible, felt more than heard

**Pro Tip:** Don't use all layers at once. Sparse verses with just lead + subtle double, then bring in harmonies and ad-libs for choruses to create dynamic contrast.`
      }
    ]
  },
  
  learningObjectives: [
    "Master vocal recording best practices: gain staging, multiple takes, performance direction",
    "Learn professional comping workflows to compile the best moments from multiple takes",
    "Understand vocal tuning philosophy: when to tune, retune speeds, preserving natural expression",
    "Apply timing correction and editing techniques: breath control, crossfades, de-essing",
    "Design multi-layer vocal stacks: lead, double, harmony, ad-libs, and vocal pads for dynamic arrangements"
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
