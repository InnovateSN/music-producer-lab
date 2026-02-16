/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 4 - EQ Techniques - Surgical vs Musical
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-4-progress",
  lessonNumber: 4,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-5.html",
  prevLessonUrl: "lesson-mixing-3.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Mixing" }),
    title: "EQ Techniques:",
    titleHighlight: "Surgical vs Musical",
    subtitle: "Choosing the right bandwidth, curve, and workflow for problem-solving and tone shaping"
  },

  exercise: {
    title: "Surgical Problem Solving + Musical Enhancement Pass",
    description: "Perform a structured two-stage EQ pass: first fix specific problems with narrow moves, then shape tone with broad musical curves, while verifying level matching and headroom.",
    tip: "If you end up stacking many narrow cuts, pause and reassess: often one or two well-placed notches plus a broad 'musical' rebalancing move translates better than building a highly complex notch 'comb'. Keep decisions honest with level-matched A/B and short breaks to reduce fatigue.",
    steps: [
      '<strong>Load session</strong> — Open your previous session "Mixing-3_EQBasics" and immediately save a new version named "Mixing-4_EQTechniques".',
      '<strong>Set loop region</strong> — Loop a representative 20–30 seconds (often a chorus/drop). Keep the full mix playing for most decisions; reserve solo for short diagnosis only.',
      '<strong>Check headroom</strong> — On the master bus, confirm your metering is still behaving as in Lesson 2 (no clipping; comfortable headroom). Keep a peak meter visible throughout the exercise.',
      '<strong>Select surgical targets</strong> — Choose three tracks for surgical work: (1) Lead Vocal, (2) Snare (or a ringy drum close mic), and (3) a harmonic instrument (guitar/synth/piano).',
      '<strong>Vocal resonance notch</strong> — Add (or use) your "EQ1 (surgical)" instance. Create a bell band with Q = 12 and gain = +10 dB. Sweep slowly until the worst resonance is obvious. Set that band to a cut of -4 dB at the found frequency, keep Q ≥ 10, and write down the final frequency value.',
      '<strong>Snare resonance notch</strong> — Create another bell band with Q = 10–14 and gain = +10 dB. Sweep to find a ringing overtone. Convert to a cut of -5 dB at the found frequency. Keep Q ≥ 10 and write down the final frequency value.',
      '<strong>Instrument resonance notch</strong> — Repeat the same method on your guitar/synth/piano track. Convert the found resonance to a cut of -3 dB with Q ≥ 10, and write down the final frequency value.',
      '<strong>Level-matched A/B</strong> — For each of the three tracks, do a level-matched A/B: bypass the EQ (or the band) and adjust the EQ output (or a trim after the EQ) so the processed and bypassed levels match within roughly ±0.5 dB. Confirm the improvement still holds when level-matched.',
      '<strong>Dynamic de-essing</strong> — On the Lead Vocal (or Vocals Bus), add a dynamic EQ band centred between 6–10 kHz (start around 7 kHz) with Q ≈ 3 and dynamic range ≈ -4 dB. Set attack ≈ 2 ms and release ≈ 100 ms. Adjust threshold so gain reduction occurs mainly on sibilant moments (aim for roughly 2–5 dB reduction on the loudest "S" sounds).',
      '<strong>Musical presence lift</strong> — Create (or enable) "EQ2 (musical)" after your surgical stage. On the Lead Vocal, add a broad presence lift (e.g., 3–5 kHz) with Q ≈ 0.7–1.0 and +1 to +2 dB. Level-match output again.',
      '<strong>Pultec-style low end</strong> — On Kick or Bass (track or bus), if you have a Pultec-style EQ, set low frequency to 60 Hz, apply a low boost in the +2 to +4 dB range and a smaller attenuation in the 1 to 3 dB range. If you do not have a Pultec-style EQ, approximate the idea with a gentle low-shelf boost at 60 Hz and a small low-mid cut around 150–300 Hz. Level-match output.',
      '<strong>Tilt EQ move</strong> — On a Music Bus (guitars/synths) or a single instrument, apply a tilt EQ (or emulate tilt with a broad high shelf plus a broad low shelf in opposite directions). Choose a pivot around 1 kHz and apply a small tilt (±1 dB). Keep the move subtle and level-match.',
      '<strong>Final headroom check</strong> — Check that none of your edited tracks, buses, or the master are clipping. If your master peak has risen noticeably, reduce EQ output trims or bus faders slightly rather than undoing the EQ decisions.',
      '<strong>Export and compare</strong> — Export two 20–30 second bounces: (A) "Mixing-4_PrePass" with your new EQ changes bypassed, and (B) "Mixing-4_PostPass" with EQ enabled. Re-import both files, level-match them, and A/B. Write down three audible improvements and one tradeoff (if any) that you can still hear at two different monitoring levels.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'From Frequency Spectrum to Technique',
        content: `Lesson 3 gave you a practical map of the spectrum (where mud tends to live, where presence tends to live) and a first set of EQ moves (HPF, gentle shelves, and bell boosts/cuts). This lesson adds a second axis: <em>how wide and how selective</em> a move should be, and whether it should be static or level-dependent.

**The AES Definition:**
The Audio Engineering Society (AES) defines a parametric equaliser as a multi-band variable equaliser that lets you control amplitude, centre frequency, and bandwidth. In mixing terms, that bandwidth control is the core decision behind "surgical" versus "musical" EQ:
- **Surgical moves** aim to remove a narrow offender with minimal collateral tone change
- **Musical moves** aim to shift an entire region's perceived balance in a cohesive way

**Understanding Q (Quality Factor):**
Bandwidth is frequently controlled via Q. AES defines Q as the ratio of centre frequency (f) to bandwidth (BW), so higher Q values create narrower filters around the selected frequency. A practical implication is that Q is proportional rather than a fixed width in Hertz: the filter's absolute width scales with frequency.

**Before You Touch the EQ:**
Decide the intent—resonance removal, tonal shaping, or unmasking—and keep Lesson 2 habits: compare in context and level-match bypass so you don't mistake "louder" for "better".`
      },
      {
        title: 'Surgical EQ: Resonance Hunting, Notch Filtering, and Dynamic De-Essing',
        content: `Surgical EQ is typically about achieving a clear improvement with minimal tonal "side damage".

**The Hunt → Lock → Cut Method:**
1. Create a narrow bell (often Q ≈ 8–16)
2. Temporarily boost +8 to +12 dB
3. Sweep slowly until the resonance becomes obvious (ringing snare overtone, whistling synth partial, nasal vocal spike)
4. Convert the boost into a controlled cut (often -2 to -8 dB)
5. Widen Q slightly until the cut stops sounding "pinched" but still reduces the offender

**Notch Filters:**
AES describes a notch filter as a cut-only equaliser used to attenuate a narrow band, with frequency, bandwidth, and depth determining the notch. In a DAW, you can implement this either via a notch filter type or a very narrow bell cut, then verify by toggling the band and checking that the track still feels natural in the full mix.

**Dynamic EQ for Intermittent Problems:**
Where surgical EQ becomes more advanced is when the problem is intermittent. AES defines a de-esser as a special compressor operating only at high frequencies (above ~3 kHz) to reduce sibilant sounds.

**Dynamic De-Essing Settings:**
- Place a dynamic bell in the 6–10 kHz region
- Choose Q ≈ 2–5
- Set dynamic range around -2 to -6 dB
- Tune threshold so gain reduction happens mainly on "S/SH" bursts
- Start with attack ≈ 1–5 ms and release ≈ 50–150 ms
- Adjust by listening for lisping, dullness, or over-reduction
- Keep the vocal output level matched when you bypass`
      },
      {
        title: 'Masking Resolution Between Competing Sources',
        content: `Masking (often called frequency masking) is a perceptual situation where one sound makes another harder to perceive when they overlap in frequency and time.

**AES Research Perspective:**
AES research on multitrack mixing treats masking reduction as a recurring objective, commonly addressed through gain, equalisation, and panning, while also recognising that some masking can be acceptable or even desirable depending on style.

**Surgical vs Musical in Masking:**
In practice, "surgical versus musical" becomes a prioritisation exercise: you decide which element should read clearly in a contested band, and then you shape competing elements so they don't fight for the same perceptual space.

**DAW-Friendly Masking Workflow:**
1. Identify the contested band in context
2. Choose the priority source for that band
3. Apply complementary EQ to the competitor
4. Re-check balance and tone

**Practical Example:**
If the vocal needs intelligibility around 3–5 kHz, you might:
- Apply a small, broad cut on guitars/keys in the same zone (commonly -1 to -3 dB with Q ≈ 0.7–1.4)
- Give those instruments a different identity band elsewhere (a gentle shelf above ~8–10 kHz for sheen, or a body lift around ~150–250 Hz if the arrangement allows)

The "musical" part is the rebalancing: you're not only removing, you're re-assigning roles so the mix remains exciting.`
      },
      {
        title: 'Musical EQ: Broad Strokes, Tilt Balance, and Analogue Character',
        content: `Musical EQ is usually about tonal narrative: making a source feel warmer, brighter, bigger, or more "finished" without the listener noticing the processing.

**Typical Musical EQ Settings:**
- Wider bandwidths (often Q ≈ 0.3–1.0)
- Smaller gain moves (+/- 0.5 to 3 dB)
- Judged while the full mix plays

**Shelves vs Bells:**
- **Shelves** are often chosen when you want an end-band to move together (overall brightness/dullness or overall weight/leanness). AES uses the term "shelving response" for a flat end-band shape applied to programme equalisation.
- **Bells** are often preferred when you want to emphasise or reduce a specific region (for example, a vocal presence lift) without shifting the entire top end the way a shelf would.

**Tilt EQ:**
An efficient overall-balance move that behaves like extremely wide high/low shelves working together, so boosting one end also attenuates the other around a pivot (often ~800 Hz–2 kHz). Small tilts (±0.5 to 2 dB) can steer a sound brighter/thinner or darker/thicker quickly.

**Pultec-Style EQ:**
Documentation for the EQP-1A highlights the signature low-end effect where it can appear to boost and cut the same low frequency, creating a tightening effect via an adjacent resonant dip. A starting point is 60 Hz: boost +2–4 dB, attenuate 1–3 dB, then level-match.

**Analogue-Modelled EQs:**
With analogue-modelled EQs, input drive can also add harmonic colour, so keep gain staging intentional.`
      },
      {
        title: 'Problem-Frequency Playbook',
        content: `The ranges below come directly from your Lesson 3 band map, but the technique choice is new: broad bells for "tone zones", narrow bells/notches for isolated resonances, and dynamic bands for problems that only jump out on peaks.

<strong>Common Problem Frequencies:</strong>

<table style="width:100%; border-collapse: collapse; margin: 1em 0;">
<tr style="border-bottom: 2px solid #444;">
<th style="text-align:left; padding: 8px;">Issue</th>
<th style="text-align:left; padding: 8px;">Range</th>
<th style="text-align:left; padding: 8px;">Description</th>
<th style="text-align:left; padding: 8px;">Starting Move</th>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding: 8px;"><strong>Mud</strong></td>
<td style="padding: 8px;">200–400 Hz</td>
<td style="padding: 8px;">Cloudy, smeared low-mids</td>
<td style="padding: 8px;">Broad cut -2 to -4 dB, Q ≈ 0.7–1.2</td>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding: 8px;"><strong>Boxiness</strong></td>
<td style="padding: 8px;">400–600 Hz</td>
<td style="padding: 8px;">"Cardboard", small-room tone</td>
<td style="padding: 8px;">Cut -2 to -5 dB, Q ≈ 1.0–2.0</td>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding: 8px;"><strong>Nasal / honky</strong></td>
<td style="padding: 8px;">800 Hz–1.5 kHz</td>
<td style="padding: 8px;">Telephone-like, nasal spike</td>
<td style="padding: 8px;">Cut -2 to -4 dB, Q ≈ 1.5–3.0</td>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding: 8px;"><strong>Harshness</strong></td>
<td style="padding: 8px;">2–4 kHz</td>
<td style="padding: 8px;">Hard edge, fatigue, "shout"</td>
<td style="padding: 8px;">Cut -1 to -3 dB, Q ≈ 1.0–1.6</td>
</tr>
<tr>
<td style="padding: 8px;"><strong>Sibilance</strong></td>
<td style="padding: 8px;">6–10 kHz</td>
<td style="padding: 8px;">Ess/ssh bite, brittle top</td>
<td style="padding: 8px;">Dynamic band: range -2 to -6 dB, Q ≈ 2–5</td>
</tr>
</table>

<strong>Important Notes:</strong>
- Treat the dB and Q values as starting points and confirm by ear in context
- EQ implementations can interpret Q differently
- Extremely narrow moves can sound over-precise even when they look "correct"`
      },
      {
        title: 'EQ Order, Serial Instances, and Verification',
        content: `EQ order is not a strict rule, but common patterns exist because processors interact.

**Why Subtractive EQ Often Comes First:**
Subtractive EQ (HPF for rumble, resonance notches, harshness reduction) is often placed early so compressors and saturators are not "forced" to react to problems. If a vocal has a sharp ring at, say, 3 kHz, compressing first can make that ring more consistently present, which can push you into deeper cuts later.

**Why Additive EQ Often Comes After Compression:**
Additive "polish" moves (air shelves, gentle presence, low-end lift) are often easier to judge after dynamics are stabilised, because you are not chasing moving targets.

**Typical Serial EQ Chain:**
<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
[EQ1: HPF + notches] → [Compressor] → [EQ2: shelves / broad bells]
</pre>

**Stacking Filters:**
Many DAW EQ designs support stacking filters for stronger shapes; Ableton notes that assigning the same parameters to multiple EQ filters can achieve more drastic filtering effects.

**Verification Loop (From Lesson 2):**
When you use serial EQ or steep slopes, re-run your verification:
- Volume-matched bypass comparisons (often within ±0.5 dB)
- No channel or bus clipping
- Stable master headroom (keeping mix peaks comfortably below full scale during mixing)`
      }
    ]
  },

  learningObjectives: [
    "Identify when a problem calls for surgical EQ (resonances, sibilance, masking) versus musical EQ (overall tone, character, balance)",
    "Apply narrow-Q resonance hunting and notch filtering with appropriate cut depths while avoiding loudness bias via level-matched A/B",
    "Distinguish musical EQ approaches (broad bells, shelves, tilt EQ, Pultec-style boost/cut interaction) and choose shelves versus bells intentionally",
    "Diagnose masking conflicts between competing sources and resolve them with complementary EQ in context",
    "Build and verify serial EQ workflows (subtractive before additive, EQ placement around compression, stacked filters) without losing headroom"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered EQ Techniques - Surgical vs Musical. Your mixes are improving!",
    error: "Review the mixing concepts and try again.",
    alreadyCompleted: "You've completed this mixing technique. Keep practicing!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
