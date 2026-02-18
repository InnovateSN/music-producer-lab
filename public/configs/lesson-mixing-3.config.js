/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 3 - EQ Basics - Understanding the Frequency Spectrum
 *
 * Research sources: AES Pro Audio Reference, Logic Pro Documentation, FabFilter
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-3-progress",
  lessonNumber: 3,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-4.html",
  prevLessonUrl: "lesson-mixing-2.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Mixing" }),
    title: "EQ Basics:",
    titleHighlight: "Understanding the Frequency Spectrum",
    subtitle: "From 20 Hz to 20 kHz: translate frequency knowledge into mix decisions using parametric EQ, filters, and corrective techniques."
  },

  exercise: {
    title: "First EQ Pass: Vocals + Drums in a Gain-Staged Session",
    description: "Apply foundational EQ moves (HPF, resonance control, presence shaping) while staying level-matched and maintaining mix headroom from Lesson 2.",
    tip: "When resonance-sweeping, keep the high-Q boost temporary and brief. Once you identify the problem frequency, return to a smaller cut and slightly wider Q so the fix feels transparent.",
    steps: [
      '<strong>Open your session</strong> — Load "Mixing-2_GainStaged" and save as "Mixing-3_EQBasics".',
      '<strong>Set up a loop</strong> — Choose a 20-30 second chorus/drop section for consistent listening.',
      '<strong>Create a reference bounce</strong> — Export "Mixing-3_PreEQ.wav" BEFORE adding EQ. Re-import to a track labelled "PRE-EQ PRINT".',
      '<strong>Insert EQ on Lead Vocal</strong> — Add a parametric EQ (Channel EQ, EQ Eight, etc.) early in the chain.',
      '<strong>Add HPF to vocal</strong> — Set High-Pass Filter at 80 Hz, 12 dB/oct slope. Verify rumble reduces while warmth remains.',
      '<strong>Find a resonance (sweep method)</strong> — Add a bell band with high Q, +8 to +12 dB boost. Sweep 200 Hz to 6 kHz listening for annoying rings/spikes.',
      '<strong>Convert boost to cut</strong> — Reduce gain to -2 to -6 dB cut. Widen Q slightly. Toggle band on/off to confirm fix.',
      '<strong>Add presence boost</strong> — Create bell at 3-5 kHz, moderate Q, subtle +1 to +3 dB boost. Check consonants become clearer, not harsh.',
      '<strong>Level-match bypass test</strong> — Adjust EQ output so bypassed and processed match within ±0.5 dB. Confirm it sounds better, not just louder.',
      '<strong>EQ Overheads</strong> — Insert EQ, add HPF at ~100 Hz, 12 dB/oct. Reduce rumble while keeping cymbal body natural.',
      '<strong>EQ Snare (mud control)</strong> — Broad cut in 200-500 Hz range (-2 to -4 dB, medium Q). Verify snare is clearer without losing body.',
      '<strong>Check headroom</strong> — Confirm no channel/bus clips. Master should stay below -6 dBFS peak.',
      '<strong>Export post-EQ bounce</strong> — Create "Mixing-3_PostEQ.wav", import as "POST-EQ PRINT".',
      '<strong>A/B comparison</strong> — Level-match PRE and POST prints. Toggle between them. Write down 3 audible improvements.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Why EQ Follows Gain Staging',
        content: `EQ decisions are often subtle (frequently a few dB or less), so if the level feeding the EQ is unpredictable, you end up "chasing" tone changes that are actually loudness changes.

**Stable pre-fader levels also:**
- Reduce the chance that an EQ boost pushes later processors into saturation or clipping
- Make EQ repeatable and teachable
- Allow honest A/B comparisons

In short: gain staging makes EQ reliable.`
      },
      {
        title: 'The Frequency Spectrum',
        content: `The audible band spans roughly **20 Hz to 20 kHz**, drawn on a logarithmic scale because musical pitch perception follows ratios (an octave = doubling of frequency: 100 Hz → 200 Hz).

**Why this matters:**
- "Small" moves at low frequencies cover fewer Hz than the same visual move at high frequencies
- EQ is rarely about "one frequency" — changing low-mids on a vocal affects both thickness AND intelligibility
- Human hearing isn't equally sensitive at all frequencies — upper-mid boosts feel more dramatic than the same dB in deep bass

**Practical Mixing Bands:**

| Band | Range | Sonic Role | Mix Risks |
|------|-------|------------|-----------|
| Sub-bass | 20-60 Hz | Weight, floor, felt pressure | Rumble, wasted headroom |
| Bass | 60-250 Hz | Body, punch, "fat vs thin" | Boominess, kick-bass masking |
| Low-mids | 250-500 Hz | Warmth, "bass presence" | Mud, boxiness |
| Mids | 500 Hz-2 kHz | Core note info, forwardness | Honk, nasality, fatigue |
| Upper-mids | 2-4 kHz | Attack, definition, consonants | Harshness, edge |
| Presence | 4-6 kHz | Clarity, detail | Sibilance, brittle transients |
| Brilliance/Air | 6-20 kHz | Sparkle, sheen, breath | Hiss, harsh cymbals |`
      },
      {
        title: 'EQ Filter Types',
        content: `An equaliser is a family of filters used to adjust amplitude at selected frequencies. Each type behaves differently:

**Parametric EQ (Bell/Peak)**
- Targets a band around a centre frequency
- Controls: Frequency, Gain (boost/cut), Q (bandwidth)
- Narrow bells = resonance control
- Wide bells = tonal shaping

**Shelving EQ (Low/High Shelf)**
- Raises or lowers an entire end of the spectrum
- Acts like "tilt at the edge" rather than "spot treatment"
- Useful for broad tone moves (brightness, low-end heaviness)

**High-Pass Filter (HPF)**
- Removes energy BELOW the cutoff frequency
- Common use: eliminate rumble, handling noise, sub build-up
- Applied to most tracks except kick and bass

**Low-Pass Filter (LPF)**
- Removes energy ABOVE the cutoff frequency
- Used for distance effects, texture, or taming harsh tops

**Bell vs Shelf Shape:**
\`\`\`
Bell (parametric)              Shelf (high shelf)
      /\\                            _________
     /  \\                          /
____/    \\____              ______/
  f0 (centre)               fc (corner)
\`\`\``
      },
      {
        title: 'EQ Parameters Explained',
        content: `**Frequency**
Where the EQ "aims" — centre frequency for bells, cutoff for filters. Choose by listening in context, not just looking at analysers.

**Gain**
The amplitude change in dB. Small changes can be meaningful; large changes may indicate arrangement or mic issues doing the real work.

**Q (Quality Factor) / Bandwidth**
Controls how wide the affected region is:
- Higher Q = narrower (more "surgical")
- Lower Q = wider (more "musical broadstroke")

For resonance hunting: use high Q temporarily to find the problem, then widen slightly for the final cut.

**Slope (dB/octave)**
How fast a filter attenuates beyond the cutoff:
- 6 dB/oct = gentle, natural transition
- 12 dB/oct = common starting point
- 24 dB/oct = steep, hard boundary

Steeper isn't inherently better — it can make the cutoff sound unnatural.

| Parameter | Applies To | Common Trap |
|-----------|------------|-------------|
| Frequency | All EQ types | Choosing by looking, not listening |
| Gain | Bell / Shelf | Boosting until solo sounds exciting, then harsh in mix |
| Q | Bell (some shelves) | Extremely narrow cuts everywhere → hollow tone |
| Slope | HPF / LPF | Steep by default → losing warmth/air |`
      },
      {
        title: 'Corrective vs Creative EQ',
        content: `**Corrective EQ (Problem-driven)**
Remove rumble, reduce harshness, control resonances, solve masking.

Typical moves:
- HPF to remove non-musical low-end
- Narrow bell cut to tame ringing resonance
- Gentle low-mid cut to reduce mud

Works best when you can NAME the problem: "boxy snare", "nasal vocal", "guitar harshness"

**Creative EQ (Intention-driven)**
Add presence for intelligibility, warmth for thickness, air for sheen.

Typically:
- Broader curves
- Smaller amplitude
- Judged in full mix, not solo

**Critical check:** If the EQ move only sounds "better" because it's louder, it may not be a true tonal improvement. This is where volume-matched bypass comparisons become essential.`
      },
      {
        title: 'Best Practice Habits',
        content: `**Work in Context**
A vocal that feels thin in solo can sit perfectly once guitars and cymbals join. A snare that feels bright alone can become abrasive in the chorus. Keep soloing to short diagnostic moments; return quickly to the full mix.

**Try Cutting Before Boosting**
Removal creates space without inflating level. But boosting is valid when it serves the mix goal and stays controlled.

**Volume-Matched A/B Comparisons**
Reduces loudness bias and helps manage ear fatigue over long sessions. Match levels within ±0.5 dB for honest comparisons.

**Common HPF Starting Points:**
- Vocals: 80-100 Hz
- Acoustic Guitar: 80-100 Hz
- Electric Guitar: 80-100 Hz
- Overheads: 100-200 Hz
- Snare: 80-100 Hz (careful of body)
- Kick/Bass: Very gentle or none

**Next Lesson:** EQ Techniques will cover surgical vs musical approaches, and how to handle specific problem frequencies in detail.`
      }
    ]
  },

  learningObjectives: [
    "Map the audible spectrum (20 Hz–20 kHz) into practical mix bands and describe what each contributes",
    "Distinguish core EQ filter types (parametric, shelving, HPF/LPF) and explain Frequency, Gain, Q, and Slope",
    "Apply corrective vs creative EQ with structured listening and loudness-matched A/B comparisons",
    "Perform a repeatable vocal-and-drum EQ pass without losing headroom or introducing level changes"
  ],

  messages: applyMessagePreset("default", {
    initial: "Learn to shape frequencies with precision using EQ fundamentals.",
    success: "Excellent! You understand EQ basics and can shape frequencies effectively. Ready for advanced techniques!",
    error: "Review the frequency bands and filter types, then try the exercise again.",
    alreadyCompleted: "You've mastered EQ basics. Keep refining your frequency decisions!"
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
