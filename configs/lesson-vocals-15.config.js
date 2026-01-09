import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-15-progress",
  lessonNumber: 15,
  lessonCategory: "Vocals",
  depthLevel: 10,
  
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-vocals-14.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-vocals-15", categoryLabel: "Vocals" }),
    title: "Advanced Vocal",
    titleHighlight: "Mixing",
    subtitle: "Master the final stage of vocal production with <strong>expert mixing techniques</strong> that make vocals sit perfectly in any mix. Learn compression chains, EQ surgery, spatial placement, automation, and how to achieve radio-ready vocal sound."
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
    title: "Mix Dynamics: Verse to Chorus Transition",
    description: "Program a <strong>dynamic vocal arrangement</strong> that demonstrates verse (sparse) to chorus (full) layering and automation. You'll create a pattern that shows how professional mixers use dynamics to create emotional impact.",
    tip: "Verses should be intimate with fewer layers, choruses should explode with width and power. Use velocity to simulate automation: low velocity = quiet/intimate, high velocity = loud/powerful. Think of the journey from whisper to shout.",
    steps: [
      { text: "<strong>Set tempo to 120 BPM</strong> for an energetic, dynamic vocal showcase." },
      { text: "<strong>Program verse lead vocal</strong> on steps 1-8 with moderate velocity (80-90) for intimacy." },
      { text: "<strong>Add minimal backing</strong> on steps 4, 8 with low velocity (60-70) for sparse verse feel." },
      { text: "<strong>Program chorus lead vocal</strong> on steps 9-16 with high velocity (110-120) for power." },
      { text: "<strong>Layer chorus harmonies</strong> on steps 10, 12, 14, 16 with velocity 90-100 for fullness." },
      { text: "<strong>Listen</strong> to the dynamic contrast between sparse verse and powerful chorus." }
    ]
  },
  
  instruments: [
    {
      id: "verse-lead",
      label: "Verse Lead",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 2, 4, 6],
      oscillator: { type: "triangle", detune: 0 },
      envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 0.4 },
      filter: { type: "lowpass", frequency: 2400, Q: 1.0 }
    },
    {
      id: "verse-backing",
      label: "Verse Backing",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [3, 7],
      oscillator: { type: "sine", detune: -5 },
      envelope: { attack: 0.05, decay: 0.3, sustain: 0.3, release: 0.4 },
      filter: { type: "lowpass", frequency: 1800, Q: 1.2 }
    },
    {
      id: "chorus-lead",
      label: "Chorus Lead",
      color: "linear-gradient(135deg, #fd79a8, #e84393)",
      targetSteps: [8, 10, 12, 14],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.01, decay: 0.4, sustain: 0.6, release: 0.5 },
      filter: { type: "lowpass", frequency: 3200, Q: 0.8 }
    },
    {
      id: "chorus-harmony",
      label: "Chorus Harmony",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [9, 11, 13, 15],
      oscillator: { type: "square", detune: 7 },
      envelope: { attack: 0.02, decay: 0.4, sustain: 0.5, release: 0.6 },
      filter: { type: "bandpass", frequency: 2000, Q: 1.5 }
    }
  ],
  
  theory: {
    sections: [
      {
        title: 'Advanced Compression Chains',
        content: `**Serial Compression (2-3 Compressors in Series):**
Instead of one heavy compressor, use multiple gentle compressors for transparent control:

**Compressor 1: "Catch the Peaks" (Fast Compressor)**
- **Type:** FET or VCA (1176, DBX 160)
- **Purpose:** Tame harsh peaks and sibilance
- **Settings:** Ratio 4:1, Attack 0.5-2ms, Release 50-100ms, Threshold: -6dB, Gain Reduction: 3-5dB
- **Result:** Catches fast transients without squashing sustain

**Compressor 2: "Control Dynamics" (Medium Compressor)**
- **Type:** Opto or VCA (LA-2A, SSL Bus Comp)
- **Purpose:** Even out overall performance dynamics
- **Settings:** Ratio 3:1, Attack 10-30ms, Release 100-300ms, Threshold: -12dB, Gain Reduction: 3-6dB
- **Result:** Smooths out loud/quiet variations naturally

**Compressor 3: "Glue & Character" (Slow Compressor)**
- **Type:** Tube or Opto (Fairchild 670, LA-2A)
- **Purpose:** Add warmth, sustain, and "glue" to the mix
- **Settings:** Ratio 2:1, Attack 30-50ms, Release 300-500ms (auto release), Threshold: -18dB, Gain Reduction: 1-3dB
- **Result:** Adds analog color and sustain without pumping

**Total Gain Reduction:** 7-14dB across all three compressors (transparent vs. one 14dB compressor which sounds squashed)

**Parallel Compression:**
Blend heavily compressed vocal (80-100% squashed) with dry vocal for "New York style" compression. Gives power without losing dynamics.`
      },
      {
        title: 'Surgical EQ & Frequency Management',
        content: `**Corrective EQ (First in Chain):**

**High-Pass Filter (80-120 Hz):**
- **Purpose:** Remove low-end rumble, room noise, proximity effect
- **Settings:** 12 dB/octave slope at 80-120 Hz (depends on singer's voice)
- **Result:** Clean low-end, reduces muddiness

**Notch Out Problem Frequencies:**
- **200-400 Hz:** "Mud" and boxiness (narrow cut, -3 to -6dB, Q: 2-4)
- **500-800 Hz:** Nasal, honky tone (narrow cut, -2 to -4dB, Q: 2-3)
- **2-4 kHz:** Harsh, tinny, fatiguing (narrow cut, -2 to -4dB, Q: 2-3)
- Use **spectrum analyzer** to identify exact problem frequencies

**Creative EQ (After Compression):**

**Presence Boost (2-5 kHz):**
- **Purpose:** Forward, clear, intelligible vocals
- **Settings:** Broad boost (+2 to +4dB, Q: 0.7-1.2) around 3-4 kHz
- **Result:** Vocal cuts through dense mixes

**Air Boost (8-12 kHz):**
- **Purpose:** Sparkle, openness, "expensive" sound
- **Settings:** Shelving boost (+2 to +6dB) above 8-10 kHz
- **Result:** Modern, hi-fi vocal tone

**Warmth (200-400 Hz):**
- **Purpose:** Body and fullness (if needed)
- **Settings:** Gentle boost (+1 to +3dB, Q: 0.8-1.5) around 250-300 Hz
- **Result:** Fuller, warmer tone (use sparingly to avoid mud)

**EQ Order:**
High-Pass → Corrective Cuts → Compression → Creative Boosts → De-Esser`
      },
      {
        title: 'Spatial Placement & Automation',
        content: `**Spatial Mixing Techniques:**

**Depth (Front-to-Back):**
- **Close:** Less reverb/delay, brighter EQ, louder
- **Distant:** More reverb/delay, darker EQ (roll off highs), quieter
- **Lead vocal:** Front (minimal reverb, bright)
- **Backing vocals:** Middle-to-back (more reverb, slightly darker)

**Width (Left-to-Right):**
- **Lead vocal:** Center (mono)
- **Doubles:** Slight L/R (10-20% pan)
- **Harmonies:** Hard L/R (70-100% pan)
- **Ad-libs:** Varied stereo placement

**Height (Frequency Range):**
- **Low vocals:** Feel grounded, powerful (preserve 200-400 Hz)
- **High vocals:** Feel airy, ethereal (boost 10-12 kHz)
- Use EQ to position vocals vertically in the mix

**Haas Effect (Fake Stereo Width):**
Duplicate vocal, pan hard L/R, delay one side by 15-30ms. Creates wide stereo image from mono vocal. **Warning:** Can cause phase issues on mono playback.

**Volume Automation (Critical for Professional Sound):**

**Syllable-Level Automation:**
- Boost quiet consonants (+1 to +3dB) so lyrics are intelligible
- Reduce loud peaks (-1 to -3dB) that poke out of the mix
- Smooth out "p," "t," "k" plosives that are too loud

**Section-Level Automation:**
- **Verse:** -2 to -4dB (intimate)
- **Pre-Chorus:** -1 to -2dB (building)
- **Chorus:** 0dB (reference level, fullest)
- **Bridge:** -3 to -5dB (stripped back)
- **Final Chorus:** +1 to +2dB (climax)

**Effect Automation:**
- **Delay throws:** Automate delay send to 100% on last word of phrase
- **Reverb swells:** Increase reverb during sustained notes
- **Filter sweeps:** Automate high-pass filter for lo-fi/telephone effect

**Sidechain Ducking:**
Duck vocals slightly (-1 to -3dB) when other instruments (kick, snare) hit for clarity. Use fast attack (5ms), fast release (50-100ms).`
      },
      {
        title: 'Final Mix Polish',
        content: `**Reference Mixing:**
A/B your vocal mix against professional tracks in the same genre:
1. Import reference track into your DAW
2. Match loudness (use LUFS meter, aim for -14 LUFS for streaming)
3. Compare vocal level, brightness, width, effects
4. Make adjustments to match professional sound

**Mono Compatibility:**
Check your mix in mono (sum L+R to mono):
- Does the vocal maintain presence?
- Do harmonies/doubles disappear? (Phase cancellation issue)
- Fix phase issues with slight panning or delay adjustments

**Headroom & Loudness:**
- Leave -6dB headroom on master for mastering
- Vocal should peak around -3 to -6dB on vocal bus
- Don't over-compress trying to match commercial loudness (that's mastering's job)

**Vocal Presence Test:**
Can you clearly hear every word?
- If no: Boost 2-5 kHz, reduce reverb/delay mix, automate quiet words
- If vocals are too loud: Check if instrumental is too quiet vs. vocal being too loud

**Frequency Masking:**
Use **spectrum analyzer** to ensure vocal occupies its frequency range (1-5 kHz) without competition:
- Duck guitars/synths at 2-4 kHz when vocal is present
- High-pass bass/kick to leave room for vocal warmth (200-400 Hz)
- Create "vocal pocket" by carving space in other instruments

**Final Chain (Lead Vocal Example):**
1. High-Pass Filter (100 Hz)
2. Corrective EQ (notch cuts)
3. Fast Compressor (catch peaks, 4:1)
4. Medium Compressor (even dynamics, 3:1)
5. Creative EQ (presence, air)
6. De-Esser (6-8 kHz)
7. Slow Compressor (glue, 2:1)
8. Saturation (subtle warmth)
9. Send to Reverb Bus (20-40% wet)
10. Send to Delay Bus (10-30% wet)

**Mastering Preparation:**
- Bounce stems: Lead vocal dry, Doubles dry, Harmonies dry, FX returns (reverb, delay)
- This gives mastering engineer flexibility to adjust vocal balance
- Export at 24-bit, 48kHz WAV (or higher) with -6dB headroom`
      }
    ]
  },
  
  learningObjectives: [
    "Master serial compression chains: fast compressor (peaks) + medium (dynamics) + slow (glue) for transparent control",
    "Apply surgical EQ: high-pass filtering, corrective cuts, presence boosts, air for radio-ready tone",
    "Understand spatial placement: depth (reverb), width (panning), height (EQ) for 3D vocal imaging",
    "Implement volume automation: syllable-level adjustments, section dynamics, effect automation for emotional impact",
    "Polish final mix: reference mixing, mono compatibility, headroom, frequency masking for professional sound"
  ]
};
