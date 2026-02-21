/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 2 - Gain Staging Fundamentals
 *
 * Research sources: AES Pro Audio Reference, EBU Tech 3341, ITU-R BS.1770-5,
 * Ableton Live Manual, Logic Pro Documentation
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-2-progress",
  lessonNumber: 2,
  lessonCategory: "Mixing",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mixing-1"],
    outcomes: ["Completare gli obiettivi pratici di mixing-2","Consolidare competenze beginner nel modulo mixing"]
  },

  nextLessonUrl: "lesson-mixing-3.html",
  prevLessonUrl: "lesson-mixing-1.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Mixing" }),
    title: "Gain Staging Fundamentals:",
    titleHighlight: "Building Stable Levels Across the Signal Chain",
    subtitle: "Learn to manage levels at every point in your mix for predictable processing, low distortion risk, and repeatable decisions."
  },

  exercise: {
    title: "Gain-Stage a Multitrack Session to a Stable Nominal Level",
    description: "Import stems, set clip gain to a consistent RMS reference, verify no clipping at any stage, and confirm plug-in input/output matching before moving into EQ work.",
    tip: "If a track feels 'too quiet' at -18 dBFS RMS, avoid fixing it by pushing the channel fader into extreme ranges. Instead, check whether the stem's dynamics are highly transient-heavy (high crest factor) and consider a small clip-gain adjustment combined with later compression.",
    steps: [
      '<strong>Open your template</strong> — Load "Mixing-1_Template" or recreate routing: tracks → 4 buses (Drums/Bass/Music/Vocals) → master. Save as "Mixing-2_GainStaging".',
      '<strong>Import multitrack stems</strong> — Confirm every track routes to the correct bus and buses feed the master.',
      '<strong>Reset to neutral</strong> — Disable clip normalisation. Set all track and bus faders to unity (0 dB).',
      '<strong>Add RMS meters</strong> — Insert a meter showing RMS (or Peak+RMS) as the FIRST insert on each audio track.',
      '<strong>Loop a loud section</strong> — Choose the chorus/drop, loop 10-20 seconds for stable RMS readings.',
      '<strong>Set clip gain on Track 1</strong> — Adjust clip/region gain until meter shows approximately -18 dBFS RMS. Clear any clipping indicators.',
      '<strong>Repeat for all tracks</strong> — Aim for ~-18 dBFS RMS per track. Log your clip gain values (e.g., "Vox -6 dB, Snare -3 dB").',
      '<strong>Verify no clipping</strong> — Play the loop. Confirm no track or bus meter shows clipping. If a bus is hot, reduce the loudest stem\'s clip gain.',
      '<strong>Test a compressor</strong> — On one vocal track, insert a compressor AFTER the meter. Set ratio ~3:1, attack ~10ms, release ~100ms. Adjust for 3-6 dB gain reduction.',
      '<strong>Level-match the compressor</strong> — Toggle bypass while watching the meter. Adjust make-up gain so processed level is within ±0.5 dB of bypassed level.',
      '<strong>Check bus levels</strong> — Insert Peak/True Peak meters on each bus. Confirm peaks stay below -6 dBFS during the loop.',
      '<strong>Check master level</strong> — Insert Peak meter on master BEFORE any limiter. Confirm peaks don\'t exceed -6 dBFS during mixing.',
      '<strong>Export and verify</strong> — Bounce 20-30 seconds without normalisation. Re-import and verify: no clipping, peaks below ceiling, true peaks safe.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What is Gain Staging?',
        content: `Gain staging is the practice of managing signal levels at multiple points in the chain—clip/region gain, plug-in input/output trims, bus levels, and the master—so that you maintain usable headroom and feed processors in ranges they are designed to handle.

**It is NOT the same as "making everything loud":** During mixing, you are optimising *consistency and control*, not delivery loudness.

**Simple working definition:** Set a sensible nominal level, keep peaks away from clipping, and keep each processing stage comparable before and after.

**Why this matters after Lesson 1:**
In Lesson 1 you built a structured session: tracks feeding group buses, shared returns, and a master output. That routing is the "map". Gain staging is the "traffic control": it defines how much level hits each part of the map so that meters, processors, buses, and the master behave predictably.`
      },
      {
        title: '0 dBFS, Clipping, and Headroom',
        content: `**0 dBFS (Digital Full Scale)**
In fixed-point digital audio, 0 dBFS represents a hard ceiling. Once you hit it, you can no longer represent higher sample values, and overs (hard clipping) occur.

**Headroom** describes the "space" between your typical operating level and the maximum level (onset of clipping).

**Why headroom is not optional:**
Headroom allows transient peaks (kick attacks, consonants, snare cracks) and level changes from processing (EQ boosts, resonant filters, make-up gain) to exist without colliding with full scale.

**Mental model:** Averaged musical energy (nominal level) sits lower; short peaks rise above it; headroom is the buffer keeping those peaks safe.

**Floating-point DAWs:**
Modern DAWs use high-headroom floating-point processing. Tracks can go "into the red" without internal clipping because of 32-bit floating-point headroom. However, level problems occur when audio *leaves* the DAW (physical I/O, main output, or file export). Clipping inside a plug-in may still be audible and irreversible.`
      },
      {
        title: 'Nominal Level Targets',
        content: `There is no single universal set of numbers, but the industry commonly uses **-18 dBFS RMS** as a working nominal level because:
- It aligns with professional calibration conventions
- Many analogue-modelled plug-ins use this as their 0 VU reference
- EBU practice points to -18 dBFS as an alignment level

**Level Map Across the Signal Chain:**

| Signal Point | Target | Why It Matters |
|--------------|--------|----------------|
| Clip/Region (pre-insert) | ~-18 dBFS RMS | Compressors/analogue processors behave predictably at nominal level |
| After inserts (per track) | Match input level | Prevents "louder sounds better" bias, keeps headroom stable |
| Group buses | Peaks well below 0 dBFS (e.g., <-6 dBFS) | Bus processing can raise peaks; margin avoids chasing overloads |
| Master during mixing | Peaks below ~-6 dBFS | Leaves room for mastering, reduces export/codec risk |

**Pre-fader vs Fader:**
If you only pull down the channel fader, you may still be driving inserts too hot (most inserts are pre-fader). Use clip/region gain to set the level *before* the channel strip processing.`
      },
      {
        title: 'Plugin Calibration and Level Matching',
        content: `**Analogue-modelled plug-ins** frequently assume "-18 dBFS ≈ 0 VU / +4 dBu" inside their virtual circuit. Some manufacturers document this and allow calibration adjustment.

**Why "hot sessions" sound wrong:**
Feeding a model far above its nominal point causes unexpected over-compression or over-saturation—the plugin isn't broken, it's being misdriven.

**Practical workflow:**
1. Set clip/region gain so inserts receive sensible average level
2. Choose processing (EQ, compression, saturation)
3. Adjust plug-in output so processed and bypassed signals match loudness
4. Re-check peaks and bus levels after processing

**Input/Output Matching:**
Always compare processed vs bypassed at matched levels. Our ears perceive louder as "better"—without level matching, you can't make honest decisions about whether processing actually improved the sound.`
      },
      {
        title: 'Metering: Peak vs RMS vs LUFS',
        content: `You need multiple meter types for different purposes:

**Peak (Sample Peak)**
- Measures highest discrete sample values
- Good for tracking and avoiding obvious clipping
- May miss intersample peaks after reconstruction

**True Peak (dBTP)**
- Estimates intersample peaks using oversampling
- More reliable for bounce/export and delivery checks
- Required for broadcast/streaming compliance

**RMS (Root Mean Square)**
- Average energy over a time window
- Useful for setting nominal levels and perceived density
- Can hide brief peaks; not a delivery standard alone

**LUFS (Loudness Units Full Scale)**
- Standards-based loudness (ITU-R BS.1770, EBU R128)
- Uses K-weighting + time windows + gating
- Relevant to streaming/broadcast normalisation
- Chasing LUFS during early mixing encourages over-processing; better used as a constraint/check later

**Time Windows (LUFS):**
- Momentary: 0.4 seconds
- Short-term: 3 seconds
- Integrated: entire programme with gating`
      },
      {
        title: 'Diagnosing Gain Staging Problems',
        content: `**Audible Distortion**
- Sample clipping at an output stage
- True-peak overloads after reconstruction/encoding
- Unintentional saturation inside non-linear plug-ins

**Noise and "Washy" Grit**
- Clips set too quiet, then large amounts of gain added later
- This raises the recorded noise floor alongside the signal

**Plugins "Malfunctioning"**
- Thresholds feel wrong
- Compressors clamp too early
- Analogue models sound overly driven
- Limiters hit constantly
- Usually means the device is fed far above nominal calibration

**Signal Flow with Level Checkpoints:**

[Audio Clip]
  → (A) Clip Gain: target -18 dBFS RMS
[Track Inserts]
  → (B) Plugin input trim / 0 VU calibration
  → (C) Plugin output: level-match for fair A/B
[Track Fader + Pan]
[Group Bus]
  → (D) Bus processing headroom (avoid creeping peaks)
[Master]
  → (E) Mixing headroom: peaks below ~-6 dBFS
[Export]
  → (F) True Peak check + file verification

**Next Lesson:** EQ decisions become far clearer when input levels are stable. Resonances show up predictably, boosts don't clip downstream, and comparisons remain honest.`
      }
    ]
  },

  learningObjectives: [
    "Explain gain staging as a level-management strategy that supports predictable processing and low distortion risk",
    "Set pre-fader levels using clip/region gain so inserts receive consistent nominal levels (~-18 dBFS RMS)",
    "Calibrate and level-match plug-ins (input/output trims, unity gain A/B, analogue-modelled 0 VU references)",
    "Differentiate Peak, True Peak, RMS, and LUFS metering and choose the right meter for each stage",
    "Diagnose gain-staging failures (clipping, noise, compressors misbehaving, plugins sounding 'off')"
  ],

  messages: applyMessagePreset("default", {
    initial: "Master gain staging to build a solid foundation for all your mixing decisions.",
    success: "Excellent! Your session is properly gain-staged. Ready for EQ work in Lesson 3!",
    error: "Review the nominal level concepts and check your metering setup.",
    alreadyCompleted: "You've mastered gain staging fundamentals. Keep refining your level management!"
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
