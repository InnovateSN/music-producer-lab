import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-17-progress",
  lessonNumber: 17,
  lessonCategory: "Mixing",

  progression: {
    difficulty: "advanced",
    prerequisites: ["mixing-16","mixing-15"],
    outcomes: ["Completare gli obiettivi pratici di mixing-17","Consolidare competenze advanced nel modulo mixing"]
  },
  depthLevel: 9,
  
  nextLessonUrl: "lesson-mixing-18.html",
  prevLessonUrl: "lesson-mixing-16.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-mixing-17", categoryLabel: "Mixing" }),
    title: "Mid-Side Processing &",
    titleHighlight: "Stereo Imaging",
    subtitle: "Control stereo width with surgical precision using <strong>mid-side EQ, compression, and enhancement</strong>. Learn to widen mixes, tighten centers, and create professional spatial imaging without phase issues."
  },
  
  sequencer: {
    tempo: 115,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 115
  },
  
  exercise: {
    title: "Design Center vs. Sides Pattern",
    description: "Create a pattern that demonstrates <strong>center-focused vs. wide elements</strong>. Use different instrument colors to simulate mid (center) and side (stereo) signals, understanding how professional mixes balance mono compatibility with stereo width.",
    tip: "Center elements (kick, bass, lead vocal) provide focus and mono compatibility. Side elements (pads, ambience, effects) create width and space. Balance is key.",
    steps: [
      { text: "<strong>Set tempo to 115 BPM</strong> for a groovy, mid-tempo feel." },
      { text: "<strong>Program center kick</strong> on steps 1, 5, 9, 13 with velocity 110-120 for focus." },
      { text: "<strong>Add center bass</strong> on steps 3, 7, 11, 15 with velocity 100-110 for foundation." },
      { text: "<strong>Layer side pads</strong> on steps 1, 3, 5, 7, 9, 11, 13, 15 with low velocity (60-70) for width." },
      { text: "<strong>Add side hi-hats</strong> on all 16 steps with velocity 50-60 for stereo shimmer." },
      { text: "<strong>Listen</strong> to how center elements anchor the mix while sides create space and width." }
    ]
  },
  
  instruments: [
    {
      id: "center-kick",
      label: "Center Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.001, decay: 0.15, sustain: 0, release: 0.05 },
      filter: { type: "lowpass", frequency: 120, Q: 2.0 }
    },
    {
      id: "center-bass",
      label: "Center Bass",
      color: "linear-gradient(135deg, #6c5ce7, #5f27cd)",
      targetSteps: [2, 6, 10, 14],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.15 },
      filter: { type: "lowpass", frequency: 400, Q: 1.5 }
    },
    {
      id: "side-pad",
      label: "Side Pad",
      color: "linear-gradient(135deg, #81ecec, #00cec9)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      oscillator: { type: "triangle", detune: 12 },
      envelope: { attack: 0.3, decay: 0.5, sustain: 0.7, release: 1.0 },
      filter: { type: "lowpass", frequency: 1800, Q: 0.8 }
    },
    {
      id: "side-hihat",
      label: "Side Hi-Hat",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.02 },
      filter: { type: "highpass", frequency: 8000, Q: 1.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Mid-Side Processing Explained',
        content: `**What Is Mid-Side (M/S)?**
Mid-Side processing splits a stereo signal into two components:
- **Mid (M):** Center/mono information (everything panned center)
- **Side (S):** Stereo information (everything panned left/right)

**Technical Breakdown:**
- **Mid = Left + Right** (sum)
- **Side = Left - Right** (difference)

After processing, the signal is decoded back to stereo:
- **Left = Mid + Side**
- **Right = Mid - Side**

**Why It's Powerful:**
Instead of processing Left and Right channels equally, you can:
- Boost/cut center elements independently
- Widen/narrow stereo image surgically
- Apply different compression, EQ, saturation to center vs. sides
- Fix mono compatibility without sacrificing stereo width

**When to Use M/S:**
- **Mastering:** Final stereo width control
- **Mix bus:** Overall spatial balance
- **Individual elements:** Guitars, synths, pads, drums (overheads)
- **Problem solving:** Tighten muddy center, enhance dull sides`
      },
      {
        title: 'Mid-Side EQ Techniques',
        content: `**Mid-Side EQ Applications:**

**Tighten Low-End (Cut Mid 20-150 Hz):**
- Removes low-end mud and rumble from center
- Keeps kick and bass focused
- Improves clarity without thinning sides

**Add Air to Sides (Boost Side 8-12 kHz):**
- Adds sparkle and width to stereo image
- Makes mix feel more open and expensive
- Doesn't affect center vocal or lead

**Remove Harshness from Center (Cut Mid 2-4 kHz):**
- Reduces harsh frequencies in vocal or lead
- Doesn't affect stereo guitars or pads
- Maintains clarity without losing width

**Widen Guitars (Boost Side 200 Hz - 5 kHz):**
- Emphasizes stereo guitars without muddying center
- Creates space around center elements
- Classic for rock/metal mixes

**M/S EQ Workflow:**
1. **Listen to Mid solo:** Identify problems in center (vocal, kick, bass, snare)
2. **Listen to Side solo:** Identify problems in stereo field (guitars, pads, ambience)
3. **Apply corrective EQ:**
   - Cut problem frequencies in Mid
   - Boost enhancement frequencies in Side
4. **Check mono compatibility:** Sum to mono and listen (no phase cancellation)

**Common M/S EQ Moves:**
- **High-pass Mid at 30-40 Hz** (remove sub rumble from center)
- **High-pass Side at 200-300 Hz** (tighten stereo low-end)
- **Boost Side 10-12 kHz** (+2 to +4dB for air and width)
- **Cut Mid 200-400 Hz** (-1 to -3dB if center is muddy)
- **Boost Mid 3-5 kHz** (+2 to +3dB for vocal presence)

**Tools:**
- FabFilter Pro-Q 3 (built-in M/S mode)
- iZotope Ozone Imager (visual M/S control)
- Waves Center (simple M/S width control)
- Brainworx bx_digital V3 (M/S EQ + compression)`
      },
      {
        title: 'Mid-Side Compression & Dynamics',
        content: `**Why Compress Mid/Side Separately?**
Center and stereo elements often have different dynamic needs:
- **Center:** Needs consistent level (vocal, kick, bass)
- **Sides:** Can be more dynamic (guitars, pads, ambience)

**Mid Compression:**
**Purpose:** Control center elements (vocal, kick, snare, bass)
**Settings:**
- **Ratio:** 3:1 to 6:1 (moderate to heavy)
- **Attack:** 10-30ms (let transients through)
- **Release:** 100-300ms (natural recovery)
- **Threshold:** Adjust for 3-6dB gain reduction

**Side Compression:**
**Purpose:** Control stereo width and ambience
**Settings:**
- **Ratio:** 2:1 to 4:1 (lighter than mid)
- **Attack:** 30-50ms (slower, preserve stereo space)
- **Release:** 200-500ms (slow, maintain atmosphere)
- **Threshold:** Adjust for 2-4dB gain reduction

**Advanced: Multiband M/S Compression:**
Compress different frequency ranges in Mid/Side independently:
- **Low Mid (20-200 Hz):** Heavy compression (control kick/bass)
- **Mid Mid (200 Hz - 5 kHz):** Moderate compression (vocal, snare)
- **High Mid (5-20 kHz):** Light compression (air and presence)
- **Low Side (20-200 Hz):** Heavy compression or limit (control stereo bass)
- **Mid Side (200 Hz - 5 kHz):** Light compression (preserve stereo guitars)
- **High Side (5-20 kHz):** Very light compression (stereo shimmer)

**M/S Compression on Mix Bus:**
Classic mastering technique:
1. **Mid:** 2:1 ratio, slow attack/release, 2-3dB GR (glue center)
2. **Side:** 1.5:1 ratio, very slow attack/release, 1-2dB GR (control width)
3. **Result:** Cohesive center with controlled stereo image`
      },
      {
        title: 'Stereo Width Enhancement & Imaging',
        content: `**Safe Stereo Widening Techniques:**

**1. Mid-Side Balance:**
- **Reduce Mid level** (-1 to -3dB): Emphasizes sides, creates width
- **Increase Side level** (+1 to +3dB): Exaggerates stereo information
- **Balance:** More side = wider, more mid = narrower/focused
- **Caution:** Too much side reduction causes phase issues in mono

**2. Haas Effect (Delay-Based Widening):**
- Duplicate mono signal
- Pan hard left/right
- Delay one side by 10-30ms
- **Result:** Perceived stereo width
- **Warning:** Completely phase-cancels in mono (use carefully)

**3. Stereo Synthesizers:**
Tools that generate stereo width artificially:
- **iZotope Ozone Imager:** Visual stereo width control
- **Waves S1 Stereo Imager:** Simple width slider
- **Goodhertz MidSide:** Surgical M/S control
- **Voxengo MSED:** Free M/S plugin

**4. Double-Tracking (Natural Width):**
- Record two takes of the same part
- Pan hard left/right
- Natural timing/pitch differences create width
- **No phase issues** (different performances)
- Classic for guitars, vocals, synths

**5. Stereo Chorus/Widening:**
- Use chorus or stereo widener on pads, synths
- Creates width through pitch/timing modulation
- **Safe for mono:** Doesn't rely on phase tricks

**Mono Compatibility Testing:**
Critical for professional mixes:
1. Sum your mix to mono (Utility plugin or mono button)
2. Listen for elements that disappear or thin out
3. If something vanishes: You have phase cancellation
4. **Fix:** Reduce Haas widening, reduce M/S side boost, or re-record

**Frequency-Specific Width:**
You don't need to widen everything equally:
- **Low (20-150 Hz):** Narrow/mono (keeps bass focused)
- **Mid (150 Hz - 5 kHz):** Moderate width (guitars, pads)
- **High (5-20 kHz):** Wide (air, ambience, shimmer)

**Use multiband stereo widener:**
- Keep lows narrow (0-20% width)
- Widen mids moderately (40-60% width)
- Widen highs aggressively (70-100% width)

**Genre Guidelines:**
- **EDM/Electronic:** Wide mixes (heavy M/S, stereo synths)
- **Hip-Hop:** Narrow/focused (mono bass, centered vocals, wide effects)
- **Rock/Metal:** Guitars wide, drums/vocals centered
- **Pop:** Balanced (wide chorus, intimate verse)
- **Classical/Jazz:** Natural width (minimal processing)`
      }
    ]
  },
  
  learningObjectives: [
    "Understand mid-side (M/S) processing: splitting stereo signals into center (mid) and sides components",
    "Apply mid-side EQ to tighten low-end, add air to sides, and surgically shape stereo image",
    "Use mid-side compression to control center dynamics independently from stereo width",
    "Master safe stereo widening techniques: M/S balance, double-tracking, frequency-specific width",
    "Test mono compatibility to avoid phase cancellation and ensure mixes translate to all playback systems"
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
