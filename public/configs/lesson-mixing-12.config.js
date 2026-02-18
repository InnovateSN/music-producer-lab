/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 12 - Vocal Mixing in Context
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-12-progress",
  lessonNumber: 12,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-13.html",
  prevLessonUrl: "lesson-mixing-11.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Mixing" }),
    title: "Vocal Mixing in Context:",
    titleHighlight: "Make Vocals & Leads Sit Confidently",
    subtitle: "Master the complete vocal processing chain and lead instrument techniques to place your most important elements perfectly in a dense mix"
  },

  exercise: {
    title: "Build a Professional Vocal Chain & Lead Treatment",
    description: "Starting from your Mixing-11_AutomationBasics session, construct a complete vocal processing chain and apply lead instrument techniques that create clarity, presence, and cohesion without fighting the mix.",
    tip: "Process vocals in context, not solo. Every decision you make should be validated against the full mix—what sounds 'perfect' in solo often sounds wrong in context. Toggle the music bus on/off while processing to constantly check how the vocal sits.",
    steps: [
      '<strong>Load and save session</strong> — Open "Mixing-11_AutomationBasics" and Save As: "Mixing-12_VocalMixing". Confirm your bus architecture from Lesson 10 is intact (Drums/Music/Vocals → Mix Bus).',
      '<strong>Set up gain staging</strong> — Before any processing, confirm your vocal track hits around <strong>-18 dBFS RMS</strong> (Lesson 2 principle). Use clip gain or a trim plugin if needed. This ensures plugins operate in their sweet spot.',
      '<strong>Insert high-pass filter</strong> — Add an EQ as the first insert. Set HPF at <strong>80–100 Hz</strong> for male vocals, <strong>100–120 Hz</strong> for female vocals, <strong>120–150 Hz</strong> for stacked rap vocals. Use 12–18 dB/oct slope. This removes rumble without thinning the voice.',
      '<strong>Apply corrective EQ</strong> — On the same EQ, make surgical cuts: <strong>-2 to -4 dB</strong> narrow Q at <strong>200–300 Hz</strong> (mud/boxiness), <strong>-2 to -3 dB</strong> at <strong>2.5–4 kHz</strong> if harsh, <strong>-1 to -2 dB</strong> at <strong>5–7 kHz</strong> if sibilant. Sweep to find exact problem frequencies.',
      '<strong>Insert leveling compressor</strong> — Add a compressor after the EQ. Settings: <strong>ratio 3:1–4:1</strong>, <strong>attack 10–30 ms</strong> (let consonants through), <strong>release 80–150 ms</strong> or auto. Target <strong>4–8 dB gain reduction</strong> on loud phrases. This is your "leveling" compressor for consistency.',
      '<strong>Insert peak-catching compressor (optional)</strong> — For dynamic vocals, add a second compressor: <strong>ratio 6:1–10:1</strong>, <strong>attack 0.5–3 ms</strong> (fast), <strong>release 50–100 ms</strong>. Target only <strong>1–3 dB GR</strong> on peaks. This catches transients the leveling compressor missed.',
      '<strong>Add de-esser</strong> — Insert a de-esser targeting <strong>5–9 kHz</strong> (adjust by ear). Set threshold so it reduces sibilance by <strong>3–6 dB</strong> on "s" and "t" sounds without lisping. Use split-band mode if available to preserve air.',
      '<strong>Apply dynamic EQ (alternative approach)</strong> — If de-essing isn\'t enough, use dynamic EQ: set a band at <strong>6–8 kHz</strong>, threshold so it only activates on harsh moments, <strong>-3 to -5 dB</strong> reduction, <strong>Q around 2–4</strong>. Add another band at <strong>300–500 Hz</strong> for dynamic mud control if needed.',
      '<strong>Add tone-shaping EQ</strong> — After dynamics, add a second EQ for character: gentle boost <strong>+1 to +2 dB</strong> at <strong>100–150 Hz</strong> (warmth), <strong>+2 to +3 dB</strong> shelf at <strong>10–12 kHz</strong> (air/presence). These are broad, musical moves—not surgical.',
      '<strong>Insert subtle saturation</strong> — Add tape or tube saturation plugin. Drive it gently until you hear slight warmth (often <strong>10–20%</strong> drive or <strong>1–3 dB</strong> into saturation). Level-match the output to bypass—saturation should add character, not volume.',
      '<strong>Set up spatial effects</strong> — Create two aux sends: (1) <strong>Short room/plate reverb</strong> (0.8–1.5s decay, pre-delay 20–40 ms) for presence; (2) <strong>Longer hall/plate</strong> (2–3s decay, pre-delay 60–100 ms) for depth. HPF both returns at <strong>200–300 Hz</strong>, LPF at <strong>8–10 kHz</strong>.',
      '<strong>Add tempo-synced delay</strong> — Create a delay aux: <strong>1/8 note</strong> or <strong>dotted 1/8</strong> (tempo-synced), feedback <strong>20–35%</strong>, HPF at <strong>400–600 Hz</strong>, LPF at <strong>4–6 kHz</strong>. Automate send for throws (Lesson 11). Keep delay subtle—it should support, not echo.',
      '<strong>Create ducking on returns</strong> — Sidechain your reverb and delay returns to the dry vocal (or use a ducker plugin). Set <strong>-3 to -6 dB</strong> reduction when vocal is present. This keeps effects audible in gaps but clear during phrases.',
      '<strong>Apply music bus ducking</strong> — On your Music Bus, insert a compressor sidechained to the vocal. Settings: <strong>ratio 1.5:1–2:1</strong>, <strong>attack 10–20 ms</strong>, <strong>release 100–200 ms</strong>, targeting <strong>1–3 dB</strong> reduction. This creates subtle "pocket" for the vocal without obvious pumping.',
      '<strong>Process lead synth/instrument</strong> — On your main melodic lead: cut <strong>-2 to -4 dB</strong> in the <strong>2–5 kHz</strong> range (vocal presence zone), add compression for consistency, consider mid/side EQ to push it slightly wider while keeping center clear for vocal.',
      '<strong>A/B the vocal chain</strong> — Bypass all vocal processing and level-match. Compare: Is the processed vocal more present without being harsh? Does it sit better in the mix? Does it maintain emotion and dynamics?',
      '<strong>Mono compatibility check</strong> — Fold to mono (Lesson 9) and verify the vocal remains clear and centered. Check that delay/reverb don\'t cause phase issues.',
      '<strong>Export comparison bounces</strong> — Export two 30–60 second sections: (1) pre-vocal-chain (bypass all vocal processing), (2) post-vocal-chain. Re-import, level-match, and critically A/B to confirm improvement.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'The Professional Vocal Processing Chain: Order Matters',
        content: `The order of vocal processing is not arbitrary—each stage prepares the signal for the next. A well-structured chain allows each processor to work optimally without fighting upstream problems.

**The Standard Professional Order:**
1. **High-Pass Filter (HPF)** — Removes rumble, plosives, proximity effect before any dynamics processing
2. **Corrective EQ** — Surgical cuts to remove mud, boxiness, harshness, honk
3. **Leveling Compressor** — Smooths phrase-to-phrase dynamics (main compression)
4. **Peak Catcher (optional)** — Fast compressor to catch transients the leveler misses
5. **De-Esser / Dynamic EQ** — Controls sibilance and frequency-specific harshness
6. **Tone-Shaping EQ** — Broad musical boosts for character (warmth, presence, air)
7. **Saturation** — Adds harmonic richness and "glue"
8. **Level Trim** — Final gain adjustment before sends/bus

**Why This Order Works:**
HPF before compression prevents low-frequency energy from triggering the compressor. Corrective EQ before compression prevents boosted frequencies from causing excessive gain reduction. De-essing after compression catches sibilance that compression might have exaggerated. Tone EQ after dynamics shapes the final character. Saturation last adds cohesive harmonic content to the already-processed signal.

**The Key Principle:** Fix problems first (corrective), then control dynamics (compression/de-essing), then enhance character (tone EQ/saturation).`
      },
      {
        title: 'High-Pass Filter & Corrective EQ: Surgical First, Musical Later',
        content: `Before adding any "good" processing, remove the "bad." This corrective stage is about subtraction—cutting problems so later stages work on clean material.

**High-Pass Filter Settings by Vocal Type:**
| Vocal Type | HPF Frequency | Slope |
|------------|---------------|-------|
| Male (deep) | 70–90 Hz | 12–18 dB/oct |
| Male (tenor) | 90–110 Hz | 12–18 dB/oct |
| Female | 100–130 Hz | 12–18 dB/oct |
| Rap stacks | 120–150 Hz | 18–24 dB/oct |
| Whisper/breathy | 150–200 Hz | 12 dB/oct |

**Common Corrective EQ Targets:**
- **150–250 Hz (Mud):** Proximity effect buildup, especially on close-miked vocals. Cut <strong>-2 to -4 dB</strong>, narrow Q (3–5).
- **300–500 Hz (Boxiness/Honk):** Hollow, "cardboard box" quality. Cut <strong>-2 to -4 dB</strong>, moderate Q (2–4).
- **800 Hz–1.2 kHz (Nasal/Honk):** Telephone-like quality. Cut <strong>-2 to -3 dB</strong>, narrow Q (3–5).
- **2.5–4 kHz (Harshness):** Aggressive, fatiguing presence. Cut <strong>-1 to -3 dB</strong>, wide Q (1–2).
- **5–8 kHz (Sibilance):** "S" and "T" sounds. Address with de-esser, not static EQ (discussed later).

**Technique:** Solo the vocal briefly, sweep a narrow boost to find problem frequencies (they'll sound worse), then cut those frequencies. Return to mix context immediately to verify the cut improved clarity without thinning the vocal.

**Rule:** Corrective EQ is about cuts. Save boosts for tone-shaping EQ later in the chain.`
      },
      {
        title: 'Vocal Compression: Leveling vs Peak Catching',
        content: `Most professional vocal chains use two-stage compression: a "leveling" compressor for overall consistency and a "peak catcher" for transient control. Understanding the difference is crucial.

**Leveling Compressor (Main Compression):**
Goal: Even out phrase-to-phrase dynamics so the vocal sits consistently in the mix.

| Parameter | Setting | Reasoning |
|-----------|---------|-----------|
| Ratio | 3:1 – 4:1 | Moderate control without squashing |
| Attack | 10–30 ms | Lets initial consonants through for intelligibility |
| Release | 80–150 ms / Auto | Returns naturally between phrases |
| Threshold | Target 4–8 dB GR | Consistent leveling on loud phrases |
| Knee | Soft | Smooth, musical onset |

**Peak Catcher (Optional Second Stage):**
Goal: Catch fast transients (plosives, consonants) that slip past the leveling compressor.

| Parameter | Setting | Reasoning |
|-----------|---------|-----------|
| Ratio | 6:1 – 10:1 | Aggressive peak limiting |
| Attack | 0.5–3 ms | Catches fast transients |
| Release | 50–100 ms | Quick recovery |
| Threshold | Target 1–3 dB GR | Only catches peaks, not constant compression |
| Knee | Hard | Precise peak control |

**When to Use Both:**
- If your leveling compressor is working hard (8+ dB GR) and still missing peaks, add a peak catcher
- If the vocal has extreme dynamics (screaming to whispering), two stages help
- If you're stacking multiple vocal takes, a peak catcher tames the combined transients

**Level-Match Both Stages:** Bypass each compressor individually and match loudness. The goal is control, not volume—if it just sounds louder, you're not evaluating fairly.`
      },
      {
        title: 'De-Essing & Dynamic EQ: Frequency-Specific Control',
        content: `Static EQ cannot effectively control sibilance because "S" sounds are intermittent. Cutting 6–8 kHz with static EQ removes sibilance but also removes presence on non-sibilant words. Dynamic processing solves this: it only reduces frequencies when they exceed a threshold.

**De-Esser Settings:**
- **Frequency Range:** 5–9 kHz (adjust by sweeping to find the sharpest "S" sound)
- **Threshold:** Set so de-esser reduces 3–6 dB on "S" and "T" sounds
- **Mode:** Split-band (preferred) only affects the target frequency; wideband affects the whole signal
- **Listen For:** Lisping (over-de-essed) vs. piercing (under-de-essed)

**Dynamic EQ as Advanced Alternative:**
Dynamic EQ offers more surgical control than a de-esser. You can set multiple bands with independent thresholds.

**Common Dynamic EQ Bands for Vocals:**
| Problem | Frequency | Threshold | Reduction | Q |
|---------|-----------|-----------|-----------|---|
| Sibilance | 6–8 kHz | -15 to -20 dBFS | -3 to -6 dB | 2–4 |
| Harshness | 2.5–4 kHz | -12 to -18 dBFS | -2 to -4 dB | 1.5–3 |
| Boxiness | 300–500 Hz | -10 to -15 dBFS | -2 to -4 dB | 2–3 |
| Nasal honk | 800 Hz–1.2 kHz | -12 to -18 dBFS | -2 to -3 dB | 3–5 |

**Setting Thresholds Correctly:**
1. Solo the vocal and find the problem frequency
2. Set the dynamic EQ band to that frequency
3. Lower the threshold until the band activates on problem moments
4. Set reduction amount (start with -3 dB)
5. Return to mix context and verify improvement

**Pro Tip:** Dynamic EQ is more transparent than multiband compression for vocal control because it only affects the specific frequency band, not the whole signal.`
      },
      {
        title: 'Spatial Effects: Reverb, Delay, and Depth Control',
        content: `Spatial effects place the vocal in a three-dimensional space. Used correctly, they add depth and polish; used incorrectly, they create mud and distance. The key is control: keep the dry vocal present while adding supportive ambience.

**Two-Reverb Approach (Standard Technique):**
1. **Short Room/Plate (Presence):** 0.8–1.5s decay, pre-delay 20–40 ms. Adds body and "realness" without pushing the vocal back. Send level: -12 to -6 dB.
2. **Longer Hall/Plate (Depth):** 2–3.5s decay, pre-delay 60–100 ms. Creates depth and emotion. Send level: -18 to -12 dB. Used more on sustained notes, less on fast phrases.

**Filtering Reverb Returns (Critical):**
- HPF at 200–400 Hz: Prevents low-end mud
- LPF at 6–10 kHz: Prevents harsh reflections
- This keeps reverb "behind" the vocal in the mix

**Tempo-Synced Delay Settings:**
| Delay Time | Feel | Best For |
|------------|------|----------|
| 1/8 note | Tight, rhythmic | Fast phrases, modern pop |
| Dotted 1/8 | Bouncy, musical | Pop, rock, singer-songwriter |
| 1/4 note | Spacious | Ballads, slow tempos |
| 1/16 note | Thickening | Subtle doubling effect |

**Delay Processing:**
- Feedback: 20–35% (2–4 repeats)
- HPF: 400–600 Hz (prevents muddy repeats)
- LPF: 4–6 kHz (softens repeats, keeps them behind the dry vocal)
- Consider ping-pong for width on supporting vocals

**Ducking Effects (Professional Technique):**
Sidechain reverb and delay returns to the dry vocal (Lesson 10 routing). When vocal is present, effects duck by 3–6 dB. When vocal stops, effects bloom. This keeps the vocal clear during phrases while allowing lush tails in gaps.

**FX Throws (Lesson 11 Automation):**
Don't leave delay/reverb sends static. Automate them: increase send sharply on the last word of a phrase, then return to normal. This creates intentional, musical moments rather than constant wash.`
      },
      {
        title: 'Making Vocals "Sit": Sidechain Ducking, Automation & Lead Instrument Treatment',
        content: `The vocal can be perfectly processed in isolation but still fight the mix. "Sitting" the vocal requires creating space for it—both spectrally (EQ) and dynamically (ducking/automation).

**Sidechain Ducking on Music Bus:**
The most transparent way to create vocal space:
- Insert compressor on Music Bus (or specific competing elements like synth pads)
- Sidechain to lead vocal
- Settings: ratio 1.5:1–2:1, attack 10–20 ms, release 100–200 ms
- Target: 1–3 dB reduction when vocal is present
- Result: Mix "breathes" around the vocal without obvious pumping

**Automation Rides (Building on Lesson 11):**
- Automate competing elements down -1 to -2 dB during vocal phrases
- Automate vocal up +0.5 to +1 dB in dense chorus sections
- Automate FX sends for intentional depth changes (verse intimate, chorus spacious)

**Lead Synth/Instrument Treatment:**
The main melodic instrument often competes directly with vocals. Solutions:
1. **Carve Vocal Space:** Cut 2–5 kHz on the lead by -2 to -4 dB (surgical, narrow Q)
2. **Transient Control:** Compress leads to reduce attack that masks vocal consonants
3. **Stereo Placement:** Use mid/side EQ to push lead sides wider, keeping center clear for vocal
4. **Frequency Contrast:** If vocal is warm (100–200 Hz boosted), make lead brighter; if vocal is airy, give lead more body
5. **Delay/Reverb Contrast:** If vocal is dry/present, lead can be wetter; if vocal has lush reverb, keep lead drier

**Practical Test:**
Mute the vocal and listen to the lead. Does it occupy the "vocal zone" (1–5 kHz center)? If yes, process the lead to move it spectrally or spatially. Then unmute the vocal—it should slot in naturally without fighting.

**Final Bus vs Track Strategy (Lesson 10 Architecture):**
- Process individual vocal tracks for surgical control
- Process Vocal Bus for glue (light compression, subtle saturation, overall EQ polish)
- This mirrors the Drums/Music/Vocals → Mix Bus architecture you've already built.`
      }
    ]
  },

  learningObjectives: [
    "Apply the correct processing order for vocals: HPF → corrective EQ → compression → de-esser/dynamic EQ → tone EQ → saturation → level trim",
    "Set leveling compressor (3:1–4:1, slow attack, 4–8 dB GR) vs peak catcher (6:1+, fast attack, 1–3 dB GR) with appropriate settings for each stage",
    "Use de-essing and dynamic EQ to control sibilance, harshness, and boxiness without static EQ artifacts",
    "Build a two-reverb + delay spatial effects setup with proper filtering and ducking for clarity",
    "Create space for vocals using sidechain ducking, automation rides, and lead instrument frequency/stereo treatment"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Vocal Mixing in Context. Your vocals now sit perfectly in the mix!",
    error: "Review the mixing concepts and try again.",
    alreadyCompleted: "You've completed this mixing technique. Keep practicing!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  },

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
