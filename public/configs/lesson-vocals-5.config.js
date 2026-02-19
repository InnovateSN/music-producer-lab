/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 5 - Vocal Chain Essentials
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-5-progress",
  lessonNumber: 5,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-6.html",
  prevLessonUrl: "lesson-vocals-4.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Vocals" }),
    title: "Vocal Chain Essentials:",
    titleHighlight: "Build Your Go-To Vocal Processing",
    subtitle: "Master the professional vocal chain: EQ, compression, de-essing, and saturation. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Vocal Chain Essentials",
    description: "Master the professional vocal chain: EQ, compression, de-essing, and saturation. This lesson covers the essential vocal production techniques used in professional recordings.",
    tip: "Vocals are usually the focal point of a track. Spend extra time getting them right - they make or break the production.",
    steps: [
      '<strong>Study vocal production theory</strong> — Understand the concepts and workflow.',
      '<strong>Analyze reference vocals</strong> — Listen to professional vocal productions in your genre.',
      '<strong>Apply the techniques</strong> — Practice the specific vocal processing methods.',
      '<strong>Critical listening</strong> — Compare your results to professional standards.',
      '<strong>Iterate and refine</strong> — Make adjustments based on what you hear.',
      'Complete when you understand the practical application.'
    ]
  },
  
  theory: {
    sections: [
      {
        title: 'Vocal Processing Chain: Signal Flow and Stage Purpose',
        content: `
**Why Chain Order Matters**
Audio processing is sequential—each plugin processes the output of the previous one. Order changes the sound:
- **EQ before compression:** EQ shapes the signal, compression tames the shaped result. Frequency-selective dynamics become more stable.
- **Compression before EQ:** Compressor acts on unequalized signal. EQ then shapes the compressed dynamics. Can sound more natural on vocals.

**Standard Vocal Chain (Recommended Starting Point)**
1. **High-Pass Filter** (80–120 Hz) — Remove sub-low rumble, handling noise, plosive energy that escaped the pop filter. Clean the foundation.
2. **De-Esser** (optional at this point) — If sibilance is very harsh, de-ess early to prevent compressors from over-reacting to high-frequency bursts.
3. **Corrective EQ** — Remove problem frequencies: boxiness (200–400 Hz), nasal honk (500–800 Hz), harshness (4–6 kHz). Cut with narrow Q.
4. **Compression** — Tame dynamics. Ratio 3:1–6:1. Attack 5–15ms (let transients breathe). Release 50–100ms. Aim for 4–8 dB gain reduction on average.
5. **De-Esser** — Tame sibilance (S, Sh, T sounds). Typically 5–9 kHz range. Use dynamic EQ or dedicated de-esser. Threshold: just catches harsh sibilance, ignores normal speech.
6. **Creative/Additive EQ** — Boost presence (2–4 kHz) for clarity in the mix. Boost air (10–16 kHz) for sparkle. Small cuts before boosting for transparency.
7. **Saturation (optional)** — Subtle harmonic enhancement (0.5–3%). Adds analog warmth, helps vocals sit in dense mixes. Use tube or tape saturation types.
8. **Reverb / Delay** — Time-based effects always last. Send-based (aux) for flexibility over dry/wet balance.
9. **Limiter** — Optional ceiling to prevent occasional peaks from exceeding 0 dBFS before export.

**Key Parameters to Learn Per Stage**
- **Compression:** Threshold, Ratio, Attack, Release, Knee, Makeup Gain
- **EQ:** Frequency, Gain, Q (bandwidth), Filter type
- **De-Esser:** Frequency range, Threshold, Mode (broadband vs. frequency-selective)
        `
      },
      {
        title: 'Genre-Specific Vocal Processing Starting Points',
        content: `
**Pop Vocal Chain**
Goal: Present, polished, sits on top of the mix, commercially competitive.
- High-pass: 100 Hz, 12 dB/oct
- EQ: -3 dB at 300 Hz (boxiness), +2 dB at 3 kHz (presence), +1.5 dB at 12 kHz (air)
- Compression: 4:1 ratio, 8ms attack, 60ms release, -3 dB threshold, 8 dB GR
- De-esser: 7 kHz, tight range, -4 dB reduction
- Reverb: short plate (0.8s), 18% wet
- Reference: Billie Eilish, Dua Lipa, Harry Styles productions

**Hip-Hop / Rap Chain**
Goal: Dry, upfront, punchy, clear articulation, cuts through 808 bass.
- High-pass: 80 Hz, 18 dB/oct
- EQ: -2 dB at 400 Hz, +3 dB at 2–3 kHz (presence/cut), minimal high-end boost
- Compression: 6:1 ratio, 3ms attack, 30ms release (fast, snappy)
- De-esser: 6 kHz
- Reverb: little to none (or very short room ~0.3s, 5% wet)
- Reference: Drake, Kendrick Lamar, Travis Scott mixing templates

**R&B / Soul Chain**
Goal: Smooth, warm, intimate, harmonically rich.
- High-pass: 90 Hz
- EQ: +1.5 dB at 200 Hz (warmth), -2 dB at 4 kHz (remove harshness), +2 dB at 10 kHz (air)
- Compression: 3:1, slow attack (20ms), medium release (80ms) — preserve breath and vibrato
- Parallel compression: 8:1, -8 dB GR, blend 20–30%
- Reverb: Medium hall or plate (1.5s), 20–25% wet, pre-delay 20ms
- Reference: Frank Ocean, SZA, H.E.R.

**Rock / Alternative Chain**
Goal: Raw energy, natural imperfection, sits in dense guitars.
- High-pass: 120 Hz (cut more to clear guitar low-mids)
- EQ: Cut 300–500 Hz (clears guitar/vocal clash), +2 dB at 1–2 kHz (presence)
- Compression: 2:1–3:1, medium attack, medium release — light-handed
- Saturation: More aggressive (3–10%) for grit
- Delay: Slap delay (60–120ms, 1–3 repeats) instead of reverb for rock clarity
- Reference: Arctic Monkeys, Florence + the Machine, Foo Fighters
        `
      }
    ]
  },
  
  learningObjectives: [
    "Master professional vocal production techniques",
    "Understand the complete vocal workflow from recording to mixing",
    "Apply genre-specific vocal processing approaches",
    "Develop critical listening skills for vocal production",
    "Create commercial-quality vocal recordings"
  ],
  
  messages: applyMessagePreset("default", {
    initial: "Complete this vocal production lesson to advance.",
    success: "Excellent! You've mastered Vocal Chain Essentials. Your vocal productions are pro-level!",
    error: "Review the vocal production concepts and try again.",
    alreadyCompleted: "You've completed this vocal technique. Keep refining your skills!"
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
