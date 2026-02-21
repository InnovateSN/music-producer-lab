/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 5 - Compression Fundamentals
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-5-progress",
  lessonNumber: 5,
  lessonCategory: "Mixing",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mixing-4"],
    outcomes: ["Completare gli obiettivi pratici di mixing-5","Consolidare competenze beginner nel modulo mixing"]
  },

  nextLessonUrl: "lesson-mixing-6.html",
  prevLessonUrl: "lesson-mixing-4.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Mixing" }),
    title: "Compression Fundamentals:",
    titleHighlight: "Controlling Dynamics",
    subtitle: "Controlling dynamics for consistency, punch, glue, and tone"
  },

  exercise: {
    title: "First Compression Pass - Vocals and Drums",
    description: "Apply controlled, level-matched compression to lead vocal and core drum elements, then add subtle drum-bus glue while protecting headroom from Lesson 2 and the serial EQ workflow from Lesson 4.",
    tip: "If you are not getting the gain reduction you expect, check the chain order and gain staging before increasing ratio. A stable input level (Lesson 2) and level-matched comparisons often make 'moderate' compression settings feel more effective than extreme settings applied to an unstable signal.",
    steps: [
      '<strong>Load session</strong> — Open your previous session "Mixing-4_EQTechniques" and immediately save a new version named "Mixing-5_CompressionFundamentals".',
      '<strong>Set loop region</strong> — Loop a representative 20–30 second section (often the chorus/drop). Keep the full mix playing for most decisions and use solo only briefly for diagnosis.',
      '<strong>Visibility check</strong> — Confirm no track, bus, or master is clipping. Keep a peak meter on the master and aim to keep mix peaks comfortably below 0 dBFS; a practical mixing target is to stay under about -6 dBFS peak on the master while you work.',
      '<strong>Verify serial chain</strong> — On the Lead Vocal, confirm your serial chain from Lesson 4: place compression after your subtractive/surgical EQ stage and before any "musical" EQ stage (if you are using two EQ instances).',
      '<strong>Vocal compressor setup</strong> — Insert a stock compressor on the Lead Vocal. Set a starting ratio of 3:1, attack 15–25 ms, release 80–120 ms, and a soft or medium knee (if available).',
      '<strong>Set vocal threshold</strong> — Lower the threshold until the gain-reduction meter shows roughly 2–4 dB of GR on the loudest phrases. If your compressor offers Peak/RMS detection, start with RMS for a smoother levelling feel, then compare Peak if you need firmer transient control.',
      '<strong>Level-match vocal</strong> — Toggle bypass on/off and adjust makeup/output gain so the vocal\'s perceived loudness stays similar. Use the compressor\'s output meter (or a meter after the compressor) to keep the comparison honest.',
      '<strong>Kick compression</strong> — On the Kick track, insert a compressor after your EQ. Start with ratio 4:1, attack 15–30 ms, release 50–100 ms, and adjust threshold for about 3–6 dB GR on the strongest hits. Listen for punch: if the kick loses attack, try a slower attack; if peaks still poke out, try a slightly faster attack.',
      '<strong>Snare compression</strong> — On the Snare track, insert a compressor after EQ. Start with ratio 4:1, attack 10–25 ms, release 70–150 ms, and adjust threshold for about 3–6 dB GR on peaks. Check that ghost notes remain audible rather than being pulled down excessively.',
      '<strong>Level-match drums</strong> — Level-match Kick and Snare compressors individually using bypass comparisons and output trims. Confirm that any "better" feeling remains when levels are matched.',
      '<strong>Drum bus glue</strong> — On the Drum Bus, insert a bus-style compressor (VCA/glue style if available). Start with ratio 2:1, attack around 30 ms, release Auto or around 0.1–0.3 s. Lower threshold until you see about 1–3 dB GR on the loudest section.',
      '<strong>Check for pumping</strong> — Listen for unwanted pumping on the Drum Bus. If the kit "breathes" in an unmusical way, lengthen release, reduce threshold (less GR), or consider filtering the sidechain if your compressor supports it.',
      '<strong>Headroom verification</strong> — After compression, re-check peak levels on the Drum Bus and master. If the master peak rises materially because of makeup gain, reduce compressor outputs or bus faders slightly to restore comfortable headroom.',
      '<strong>Export and compare</strong> — Export two 20–30 second bounces of the loop: (A) with your new compressors bypassed ("Mixing-5_PreComp"), and (B) with compression enabled ("Mixing-5_PostComp"). Re-import both prints onto new tracks, level-match them, then A/B to confirm improvements.',
      '<strong>Document settings</strong> — Write down your final settings for Lead Vocal, Kick, Snare, and Drum Bus (ratio, attack, release, approximate GR). Note one audible benefit and one tradeoff for each, so you build a repeatable decision process for Lesson 6 (Attack & Release).'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What Compression Actually Does in a Mix',
        content: `A compressor is a signal-processing device used to reduce dynamic range: when the input exceeds a chosen threshold, the device applies gain reduction so the output level increases more slowly than the input. In a mix, you can think of it as a repeatable, level-dependent fader move.

**Two Related Goals:**
- **Peak control**: Taming fast transients so a part does not jump out unpredictably
- **Level stabilisation**: Smoothing the average level so words, notes, or ghost hits remain intelligible in context

**Four Mixing Reasons for Compression:**
- **Consistency**: Common on lead vocals and bass so phrases hold together without constant automation
- **Punch**: Envelope shaping—letting some transient through, then controlling sustain so a hit feels solid
- **Glue**: Subtle bus compression (often only 1–3 dB of reduction) that makes multiple elements feel unified
- **Tone**: Many compressors add harmonic colour or subtle saturation, especially when driven

**Building on Previous Lessons:**
This lesson builds directly on Lesson 2 gain staging: stable pre-fader levels make threshold and ratio choices meaningful rather than random. It also extends Lesson 4's serial EQ workflow: a common chain is subtractive EQ (rumble/resonances) → compression → musical EQ (presence/air), verified with level-matched bypass so "better" is not simply "louder."`
      },
      {
        title: 'Core Controls: Threshold, Ratio, Timing, Knee, and Makeup Gain',
        content: `**Threshold** sets where compression begins. **Ratio** sets how strongly levels above threshold are reduced; for example, at 4:1 a signal that moves 4 dB above the threshold will typically emerge about 1 dB above it.

**Attack** sets how quickly the compressor reaches its target reduction after the threshold is exceeded. **Release** sets how quickly it returns toward unity once the signal falls back. These timing choices are what make compression feel transparent, punchy, or "grabby" on the same source.

**Knee** describes how gradually compression turns on around the threshold:
- Harder knees tend to sound more immediate
- Softer knees tend to sound smoother when the level hovers around threshold (common on vocals and buses)

**Makeup gain** (and/or output gain) compensates for the level lost to gain reduction and enables honest A/B comparisons.

**Practical Starting Points:**

| Source | Ratio | Attack | Release | Target GR |
|--------|-------|--------|---------|-----------|
| Lead Vocal | 2:1–4:1 | 10–30 ms | 60–150 ms | 2–4 dB |
| Kick/Snare | 4:1–8:1 | 10–30 ms | 50–120 ms | 3–6 dB |
| Drum Bus | ~2:1 | ~30 ms | Auto/0.1–0.3s | 1–3 dB |`
      },
      {
        title: 'Reading Compressor Meters and Interpreting Gain Reduction',
        content: `Compression is easy to misjudge if you only listen and never look, or only look and never listen. Use both.

**Essential Meters:**
1. An input meter
2. An output meter
3. A gain-reduction (GR) meter

Many compressors offer an activity view that shows input level and either GR or output over time, which is helpful for timing decisions because "pumping" or "stuck" gain reduction becomes visible as well as audible.

**GR Amount Guidelines:**
- **Light (1–3 dB GR on peaks)**: Stabilises a part while preserving performance dynamics
- **Moderate (3–6 dB GR)**: Sounds clearly controlled; common in contemporary vocals and drums
- **Heavy (6+ dB)**: Usually an audible effect; can reduce articulation if applied continuously; works well as deliberate effect or in parallel for density

**Level-Matching Is Critical:**
Makeup gain is where headroom disappears. After setting threshold/ratio/timing, adjust makeup so the processed and bypassed signals are close in level (often within ±0.5 dB). If the compressed version feels better only because it is louder, keep tuning.

Treat input trim as gain staging and output trim as the comparison tool.`
      },
      {
        title: 'Compressor Types and Their Typical Sonic "Feel"',
        content: `Many compressors expose similar knobs, but the gain element and detector design shape character.

**VCA (Voltage-Controlled Amplifier):**
Clean, predictable control. Common on drum buses and mix-bus "glue" because they can tighten dynamics without heavy tonal shift at light settings.

**FET (Field-Effect Transistor):**
Very fast transient response, can sound forward and energetic. Classic 1176-style units are famous for fast "grab" and sounding exciting when pushed.

**Optical:**
Uses a light-dependent element; timing is often programme-dependent. Feels smooth and forgiving on vocals and bass.

**Variable-Mu (Tube):**
Reduces gain by re-biasing a tube, producing a naturally soft curve that often feels "musical" on buses when used for only a dB or two of reduction.

**Important Notes:**
- These categories are starting points rather than rules
- Different models can behave differently, especially at heavier GR or when driven harder
- Modern DAWs sometimes present these as "circuit types" inside one compressor plugin
- Keep Lesson 2 in mind: feeding an analogue-modelled compressor far above its nominal level may cause more distortion and less transient clarity than intended`
      },
      {
        title: 'Workflow Integration: Where Compression Sits in Your Chain',
        content: `Compression interacts with EQ because it reacts to level. If a vocal has a sharp resonance, compressing first can make that resonance more consistently loud, which may force deeper cuts later.

**The Serial Approach (from Lesson 4):**
<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
[EQ1: filters + surgical cuts] → [Compressor] → [EQ2: broad musical shaping]
</pre>

This arrangement reduces the chance that a compressor is "triggered" by rumble, plosives, or narrow rings you do not want emphasised.

**Detector Mode Matters:**
- **Peak mode**: Reacts to very short transients; useful for strict peak control
- **RMS mode**: Less sensitive to short spikes; often feels smoother for musical levelling
- **Lookahead**: Can help catch peaks more cleanly, but may soften the front edge of a transient if overused
- **Sidechain filtering**: High-passing the detector can reduce low-frequency pumping on a drum bus or vocal when plosives are present

**Verification (from Lesson 2):**
After every compressor, check that you did not create clipping at the plugin output, bus, or master. Compression often reduces peaks, but makeup gain can raise the overall level and unexpectedly remove headroom if not managed intentionally.`
      },
      {
        title: 'Common Compression Mistakes and How to Diagnose Them',
        content: `**Over-Compression:**
Identifiable by flattened phrasing, reduced groove contrast, and audible pumping. If the GR meter is pinned high most of the time, reduce ratio, raise threshold, or consider parallel compression to keep uncompressed transients.

**Attack/Release Mismatches:**
A frequent cause of "why did my drums get smaller?" Extremely fast attack can shave off transients and dull punch, while very fast release can create pumping or audible distortion on sustained tones and low-frequency material.

**Failing to Level-Match:**
Compression often sounds "better" simply because makeup gain makes it louder. Level-match bypass before you decide.

**Threshold Chasing:**
If your track levels are inconsistent (clip gain not controlled), the compressor will behave like a different setting every phrase. Fix the input first (Lesson 2) before assuming you need more ratio.

**Hidden Headroom Loss:**
It is common to reduce peak energy with compression, then add too much makeup gain, then clip a bus or the master. Keep meters visible, clear clip indicators regularly, and maintain conservative master peaks during mixing so you keep space for later processing and export.`
      }
    ]
  },

  learningObjectives: [
    "Identify when compression is being used for peak control versus RMS-style levelling, and describe how each affects perceived consistency and punch",
    "Apply core compressor parameters (threshold, ratio, attack, release, knee, makeup gain) using realistic starting values and context-based listening",
    "Interpret compressor metering (gain reduction, input/output meters) and choose an appropriate gain-reduction range from light (1–3 dB) to heavy (6+ dB)",
    "Distinguish common compressor types (VCA, FET, optical, variable-mu/tube) and select a type based on source and mixing intent",
    "Diagnose common compression mistakes (over-compression, attack/release mismatches, non-level-matched comparisons) while maintaining headroom and serial EQ workflow"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Compression Fundamentals. Your mixes are improving!",
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
