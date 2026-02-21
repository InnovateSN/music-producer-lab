import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-20-progress",
  lessonNumber: 20,
  lessonCategory: "Mixing",

  progression: {
    difficulty: "expert",
    prerequisites: ["mixing-19","mixing-18"],
    outcomes: ["Completare gli obiettivi pratici di mixing-20","Consolidare competenze expert nel modulo mixing"]
  },
  depthLevel: 10,
  
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-mixing-19.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-mixing-20", categoryLabel: "Mixing" }),
    title: "Advanced Automation",
    titleHighlight: "Techniques",
    subtitle: "Master dynamic mixing with <strong>volume rides, effect automation, and movement</strong> for engaging, professional mixes. Learn how to create excitement, build tension, and guide listeners through your productions with strategic automation."
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
    title: "Design Dynamic Automation Pattern",
    description: "Create a <strong>pattern that demonstrates dynamic automation</strong> with volume changes (velocity variations) that simulate professional automation curves. Understand how builds, drops, and dynamic contrast create emotional impact.",
    tip: "Velocity represents automation: Low velocity (50-70) = quiet/buildup section, Medium (80-100) = verse/groove, High (110-120) = chorus/drop. Professional mixes use constant micro-automation for movement.",
    steps: [
      { text: "<strong>Set tempo to 140 BPM</strong> for an energetic, build-drop structure." },
      { text: "<strong>Program quiet build</strong> (steps 1-4) with low velocity (50-70) simulating automation ramp-up." },
      { text: "<strong>Add moderate groove</strong> (steps 5-8) with medium velocity (80-90) for verse energy." },
      { text: "<strong>Create pre-drop tension</strong> (steps 9-12) with velocity drop (60-70) simulating breakdown." },
      { text: "<strong>Layer massive drop</strong> (steps 13-16) with max velocity (110-120) for climax." },
      { text: "<strong>Listen</strong> to how dynamic velocity changes create excitement and movement." }
    ]
  },
  
  instruments: [
    {
      id: "build-element",
      label: "Build Element",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 1, 2, 3],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.1, decay: 0.3, sustain: 0.6, release: 0.5 },
      filter: { type: "lowpass", frequency: 800, Q: 1.0 }
    },
    {
      id: "groove-element",
      label: "Groove Element",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [4, 5, 6, 7],
      oscillator: { type: "triangle", detune: 5 },
      envelope: { attack: 0.02, decay: 0.2, sustain: 0.5, release: 0.3 },
      filter: { type: "lowpass", frequency: 1800, Q: 1.2 }
    },
    {
      id: "tension-element",
      label: "Tension Element",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [8, 9, 10, 11],
      oscillator: { type: "sine", detune: 12 },
      envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 0.6 },
      filter: { type: "bandpass", frequency: 1200, Q: 2.0 }
    },
    {
      id: "drop-element",
      label: "Drop Element",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [12, 13, 14, 15],
      oscillator: { type: "square", detune: 0 },
      envelope: { attack: 0.001, decay: 0.15, sustain: 0.7, release: 0.2 },
      filter: { type: "lowpass", frequency: 3000, Q: 0.8 }
    }
  ],
  
  theory: {
    sections: [
      {
        title: 'Automation Fundamentals & Philosophy',
        content: `**What Is Automation?**
**Automation** is recording parameter changes over time to create movement, dynamics, and emotional impact in your mix.

**Common Automated Parameters:**
- **Volume (Level):** Bring elements in/out, balance sections
- **Panning:** Create movement, stereo interest
- **EQ:** Filter sweeps, frequency builds
- **Effects (Send Level):** Delay throws, reverb swells
- **Plugin Parameters:** Filter cutoff, resonance, distortion amount
- **Mutes:** Remove elements strategically

**Why Automate?**
- **Static mixes are boring:** Automation creates excitement and movement
- **Emotional storytelling:** Guide the listener through the song's arc
- **Fix balance issues:** Adjust levels that don't work throughout the song
- **Create builds & drops:** Essential for EDM, pop, and modern production
- **Professional polish:** Separates amateur from pro mixes

**Types of Automation:**

**1. Latch Mode:**
Starts recording when you touch a parameter, keeps recording until you stop playback.
- **Best for:** Smooth, continuous changes (volume rides, filter sweeps)

**2. Touch Mode:**
Only records while you're actively touching the parameter, returns to previous value when released.
- **Best for:** Quick adjustments, surgical edits

**3. Write Mode:**
Records all movements and overwrites existing automation.
- **Best for:** Starting fresh automation passes

**4. Read Mode:**
Plays back existing automation without recording new changes.
- **Best for:** Listening to your automation work

**Automation Workflow:**
1. **Mix statically first:** Get a solid balance without automation
2. **Identify problems:** Note sections that need adjustment
3. **Automate strategically:** Focus on problem areas and creative moments
4. **Refine:** Smooth out automation curves, adjust timing
5. **A/B test:** Bypass automation to ensure it's helping, not hurting`
      },
      {
        title: 'Volume Automation Techniques',
        content: `**Micro-Level Volume Automation:**

**Syllable-Level Vocal Automation:**
The most tedious but impactful automation:
- Boost quiet consonants (+1 to +3dB) so every word is intelligible
- Reduce loud peaks (-1 to -3dB) that poke out awkwardly
- Smooth out breaths, plosives, and harsh "s" sounds

**How To Do It:**
1. Loop a vocal section
2. Draw automation (or use clip gain) to even out dynamics
3. Zoom in to syllable-level detail
4. Adjust +/- 1-3dB as needed
5. **Result:** Every word sits perfectly, sounds natural

**Pro Tip:** Use **clip gain** for this (non-destructive level adjustment before fader) to keep fader automation clean for section-level moves.

**Macro-Level Volume Automation:**

**Sectional Balancing:**
Adjust entire sections for dynamic contrast:
- **Intro:** -3 to -5dB (intimate, draw listeners in)
- **Verse 1:** -2 to -3dB (intimate, storytelling)
- **Pre-Chorus:** -1 to -2dB (building energy)
- **Chorus:** 0dB (reference level, maximum energy)
- **Verse 2:** -2 to -3dB (back to intimate)
- **Bridge:** -4 to -6dB (stripped back, tension)
- **Final Chorus:** +1 to +2dB (climax, biggest moment)

**This creates a dynamic "rollercoaster" that keeps listeners engaged.**

**Element-Specific Volume Rides:**

**Kick Automation:**
- Quiet during sparse sections
- Loud during drops
- **Example:** Drop kick by -3dB during breakdown, bring back to 0dB for drop

**Snare Automation:**
- Increase velocity/volume on key hits (last snare before drop)
- Reduce during verses if snare feels too aggressive

**Hi-Hat Automation:**
- Automate closed hi-hats louder (+1 to +2dB) during choruses for energy
- Drop them down during verses for intimacy

**Bass Automation:**
- Drop bass -3 to -6dB during pre-drops for tension
- Bring bass to full level on the drop for maximum impact

**Melodic Elements:**
- Pad volume up during choruses for fullness
- Drop pads down during verses to leave space for vocals

**Automation Curves:**
- **Linear:** Straight line (mechanical, good for precise moves)
- **Logarithmic:** Gradual start, fast finish (natural feel)
- **Exponential:** Fast start, gradual finish (dramatic)
- **S-Curve:** Smooth ramp up, smooth ramp down (most natural)

**Most DAWs default to linear—manually adjust curves for natural feel.**`
      },
      {
        title: 'Effect Automation & Movement',
        content: `**Filter Automation (Sweeps & Builds):**

**Low-Pass Filter Sweep:**
Classic build-up technique:
1. Insert EQ or filter on element (synth, drums, full mix)
2. Automate low-pass filter from 200 Hz → 20 kHz over 8-16 bars
3. **Creates tension** as frequency range opens up
4. Pair with volume automation for maximum impact

**High-Pass Filter Sweep:**
Opposite effect (removes lows gradually):
1. Automate high-pass filter from 20 Hz → 500 Hz during breakdown
2. **Creates tension** by thinning out the mix
3. Drop filter back to 20 Hz on the drop for **massive impact**

**Bandpass Filter Automation:**
Creates "telephone" or "radio" effect:
- Automate bandpass from 300 Hz - 3 kHz (narrow) during verse
- Open to full range (20 Hz - 20 kHz) on chorus
- Classic for vocals, synths, drums

**Resonance Automation:**
Pair with filter sweeps for dramatic effect:
- Automate resonance from Q: 0.5 → Q: 8 during filter sweep
- Creates whistling, resonant buildup (iconic EDM sound)

**Delay Automation (Throws):**

**Vocal Delay Throw:**
1. Automate delay send level on vocal track
2. **Verse:** 0% (dry vocal)
3. **Last word of phrase:** 100% (full delay)
4. **Next phrase starts:** 0% (back to dry)
5. Set delay feedback to 40-70% for multiple echoes

**Instrument Delay Throws:**
- Automate delay on snare (last snare before drop)
- Automate delay on synth lead (end of phrases)
- Creates space and rhythmic interest

**Reverb Automation (Swells):**

**Reverb Send Automation:**
1. Create reverb bus (100% wet)
2. Automate send level to reverb bus
3. **Normal:** 20-30% reverb send
4. **Swell moment (sustained note):** Ramp up to 80-100% over 2-4 bars
5. **Drop:** Back to 20-30%

**Reverb Decay Time Automation:**
- Short reverb (0.8s) during verses for clarity
- Long reverb (3-5s) during choruses for space
- Automate reverb plugin's decay parameter

**Reverb Pre-Delay Automation:**
- Automate pre-delay from 0ms → 100ms during sustained notes
- Creates "swell" effect that builds into the note

**Distortion/Saturation Automation:**

**Drive Automation:**
- Clean sound during verse
- Automate distortion drive up during chorus for aggression
- Classic on bass, synths, vocals

**Chorus/Flanger/Phaser Automation:**

**Depth/Rate Automation:**
- Subtle modulation during verses
- Ramp up depth/rate during builds
- Automate to 0% on drop for clean impact

**Stereo Width Automation:**

**Width Expansion:**
- Narrow stereo width (50%) during verses (focused, intimate)
- Widen to 100-120% during chorus (huge, enveloping)
- Automate stereo imaging plugin width parameter

**Pan Automation:**

**Auto-Pan Effect:**
- Automate panning L → R → L rhythmically (1/4 notes, 1/8 notes)
- Creates movement on hi-hats, synths, pads
- Use sparingly (can be distracting)

**Static to Wide Pan:**
- Start with element centered (pan: 0%)
- Automate to hard left (pan: 100% L) or right during chorus
- Widens the mix dramatically`
      },
      {
        title: 'Advanced Automation Strategies',
        content: `**Build-Up Automation Chains:**

Professional producers stack multiple automation parameters for maximum impact:

**Classic EDM Build (8-16 Bars Before Drop):**
1. **Volume:** Gradually increase by +3 to +6dB
2. **High-Pass Filter:** 20 Hz → 500 Hz (removes lows)
3. **Reverb Send:** 20% → 80% (add space and depth)
4. **White Noise Riser:** Fade in from -∞ to -6dB
5. **Snare Roll:** Increase frequency (1/4 → 1/8 → 1/16 notes)
6. **Drum Mute:** Mute kick last 2 bars before drop (tension)
7. **Vocal Delay Throw:** 100% send on last vocal word
8. **Impact/Cymbal:** Hit on downbeat of drop

**Result:** Maximum tension → explosive release

**Breakdown Automation (Tension Before Drop):**

**Remove Energy Strategically:**
1. **Mute drums** (or filter them heavily)
2. **Drop bass** -6 to -12dB
3. **Reduce melodic elements** -3 to -6dB
4. **Increase reverb/delay** (create space)
5. **Leave one focal element** (vocal, lead synth)
6. **White noise reverse riser** (builds anticipation)
7. **Optional: Pitch automation** (pitch down -1 semitone last bar)

**Result:** Stark contrast → massive impact on drop

**Dynamic Panning Automation:**

**Call-and-Response Panning:**
- Automate lead synth: L (bar 1) → R (bar 2) → L (bar 3) → R (bar 4)
- Creates conversation between left and right speakers
- Adds movement and interest

**Circular Panning:**
- Automate element in circular motion: Center → R → Rear R → Rear L → L → Front → Center
- Requires surround or stereo imaging plugin
- Creates immersive, 3D movement

**Automation for Fixing Mix Issues:**

**De-Masking with Automation:**
If guitar and vocal clash in frequency range:
1. Automate guitar EQ: Cut -3dB at 2-4 kHz when vocal is present
2. Return to flat EQ when vocal stops
3. **Result:** Guitar stays present but doesn't mask vocal

**Dynamic Sidechain Automation:**
Instead of constant sidechain ducking:
1. Automate sidechain threshold: Low (aggressive ducking) during busy sections
2. High threshold (subtle ducking) during sparse sections
3. **Result:** Dynamic mix that breathes naturally

**Automation Smoothing & Refinement:**

**Avoid Zipper Noise:**
Fast automation can cause clicking/zipper noise:
- **Solution:** Use automation smoothing/interpolation in DAW settings
- Or draw smoother curves manually

**Automation Thinning:**
Recording with mouse/controller creates hundreds of automation points:
- **Solution:** Use DAW's "thin automation" function to reduce points while maintaining shape
- Makes editing easier

**Backup Automation:**
Before making drastic changes:
- Duplicate track with automation
- Mute duplicate (backup)
- Edit original freely

**Automation Layers:**
Some DAWs support multiple automation lanes:
- **Lane 1:** Volume automation (sectional)
- **Lane 2:** Volume automation (micro-adjustments)
- **Lane 3:** Pan automation
- **Result:** Non-destructive, easy to edit independently

**Automation Best Practices:**

1. **Less is More:** Don't automate everything—use strategically
2. **Listen in Context:** Solo automation changes sound different than in full mix
3. **Smooth Transitions:** Abrupt automation jumps sound unnatural (unless intentional)
4. **A/B Test:** Bypass automation to ensure it's improving the mix
5. **Commit or Preserve:** Print automation to audio if happy (saves CPU), or keep live for flexibility

**Genre-Specific Automation:**

**EDM/Electronic:**
- Heavy filter automation (builds, drops)
- Volume automation for dynamics
- Effect throws (delay, reverb)
- Frequent builds and drops

**Hip-Hop:**
- Subtle vocal level adjustments
- Hi-hat velocity automation
- Delay/reverb throws on ad-libs
- Bass level adjustments

**Pop:**
- Vocal automation (syllable-level precision)
- Chorus vocal doubling (automate doubles up during chorus)
- Pre-chorus build (volume, reverb)
- Backing vocal automation (fade in/out)

**Rock:**
- Guitar solo automation (bring up +2 to +3dB)
- Drum overhead automation (cymbals louder during chorus)
- Vocal doubles (automate stereo doubles during chorus only)

**Automation Checklist (Before Finalizing Mix):**
✅ Vocal syllables all audible
✅ Sectional volume rides create dynamic contrast
✅ Build-ups have multiple automated parameters
✅ Drops have maximum impact (filter, volume, effects)
✅ Transitions are smooth (no abrupt jumps)
✅ Effects automation adds excitement (delay throws, reverb swells)
✅ A/B tested all automation (helps vs. hurts)
✅ Automation curves are natural (smooth, not linear)
✅ Automation saved/backed up (in case of crash)`
      }
    ]
  },
  
  learningObjectives: [
    "Master volume automation: micro-level (syllable adjustments) and macro-level (sectional balancing) for dynamics",
    "Apply effect automation: filter sweeps, delay throws, reverb swells for builds, drops, and emotional impact",
    "Create advanced automation chains: multi-parameter builds and breakdowns for maximum tension and release",
    "Use automation to fix mix issues: de-masking, dynamic sidechain, and frequency management over time",
    "Refine automation: smooth curves, thin automation points, A/B testing, and genre-specific techniques"
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
