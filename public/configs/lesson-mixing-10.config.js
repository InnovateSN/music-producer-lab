/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 10 - Bus Processing and Grouping
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-10-progress",
  lessonNumber: 10,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-11.html",
  prevLessonUrl: "lesson-mixing-9.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Mixing" }),
    title: "Bus Processing and Grouping:",
    titleHighlight: "Cohesive Glue",
    subtitle: "Streamlined routing for faster decisions and cohesive \"glue\" across the mix"
  },

  exercise: {
    title: "Group, Glue, and Verify",
    description: "Starting from Mixing-9_PanningWidth, you'll build buses, apply light bus processing, and validate results with headroom + level-matched A/B + mono checks.",
    tip: "If bus processing improves tone but reduces impact, revisit attack/release (Lesson 6): slightly slower attack or faster release often restores punch without removing glue.",
    steps: [
      '<strong>Load and save session</strong> — Open Mixing-9_PanningWidth and immediately Save As: Mixing-10_BusProcessing.',
      '<strong>Create buses</strong> — Create three stereo buses: Drums, Music, Vocals. Create a Mix Bus (optional if your DAW\'s master is sufficient, but preferred for A/B control).',
      '<strong>Route drums</strong> — Route all drum tracks (kick, snare, toms, OH, rooms, percussion) to Drums Bus.',
      '<strong>Route instruments</strong> — Route non-vocal instruments to Music Bus.',
      '<strong>Route vocals</strong> — Route all vocal tracks (lead + doubles + harmonies) to Vocals Bus.',
      '<strong>Route to master</strong> — Route Drums/Music/Vocals buses to the Mix Bus, then Mix Bus to the Master.',
      '<strong>Verify routing</strong> — Confirm routing by muting each bus one at a time: when Drums Bus is muted, only drums disappear (verifiable outcome).',
      '<strong>Check bus meters</strong> — Before processing: identify the loudest chorus/section and note peak levels on each bus. Aim to keep healthy headroom (e.g., bus peaks not crowding 0 dBFS).',
      '<strong>Add drum bus compression</strong> — Insert a bus compressor on Drums Bus. Start: ratio 2:1, attack 20 ms, release 150 ms (or Auto), threshold until you see ~1–2 dB GR on the loudest hits.',
      '<strong>Level-match compression</strong> — Toggle bypass and adjust makeup/output so bypass ON/OFF sounds equal in loudness (difference ≤ ~0.5 dB by meter if available).',
      '<strong>Add music bus EQ</strong> — Add a gentle bus EQ on Music Bus: try a wide cut -1 dB at ~300 Hz (Q ~0.7–1.0) if it feels cloudy, or a wide dip -0.5 to -1 dB at 2.5–3.5 kHz if it competes with vocal presence. Keep it subtle.',
      '<strong>Verify FX returns</strong> — On your reverb and delay returns (from Lessons 7–8), verify lows are controlled (e.g., HPF around 120–200 Hz) so bus processing isn\'t fighting rumble.',
      '<strong>Add subtle saturation</strong> — On Vocals Bus or Mix Bus (choose one): increase drive until you barely perceive density, then back off slightly; output-match to bypass.',
      '<strong>Headroom verification</strong> — Play the loudest section and confirm Master peak stays ≤ -6 dBFS peak during mixing (pre-master). If not, reduce Mix Bus output (or trim bus inputs) rather than slamming a limiter.',
      '<strong>Mono check</strong> — Collapse to mono (or use a mono utility) and confirm lead vocal remains stable and key groove elements don\'t vanish (builds on Lesson 9).',
      '<strong>Export comparisons</strong> — Export two short bounces (e.g., 20–30 seconds of the chorus): A) bus processing bypassed, B) bus processing active. Normalize nothing.',
      '<strong>A/B evaluation</strong> — Re-import both bounces to a new track pair, level-match if needed, and do an A/B comparison. Your pass condition: B should sound more cohesive without obvious pumping, harshness, or loss of punch.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What a Bus/Group Is and Why It Speeds Up Mixing',
        content: `A bus (group/submix) is a shared signal path where multiple channels converge so you can control them as a set and apply processing "once for many." In practical mixing, buses reduce repeated work (e.g., one reverb send EQ, one drum-bus compressor, one vocal-bus de-esser) and—more importantly—improve cohesion: instruments that belong together can be shaped together.

**The Conceptual Basis:**
The Audio Engineering Society defines groups/subgroups as combining channels treated as a set with overall level control via a group fader—this is the conceptual basis of bus workflow in both consoles and DAWs.

**Building on Previous Lessons:**
- In Lesson 1 you built routing and static balance; buses make that routing intentional
- Instead of "20 drum tracks fighting for attention," you get "one Drum Bus you can push/pull by 0.5 dB and instantly hear the result"
- In Lesson 2 you learned gain staging and plugin level-matching; buses are where that discipline prevents hidden clipping

**The Goal:**
The goal is not "process everything," but "create a controllable hierarchy" so changes remain predictable. The classic problem to avoid: the mix seems clean on individual channels, but the Drum Bus or Mix Bus is quietly clipping or hammering a compressor.`
      },
      {
        title: 'Audio Groups vs VCA Faders vs Folder Tracks',
        content: `Different DAWs label these differently, but the concepts are stable:

**Audio Group / Bus (summing bus):**
Routes audio into a shared channel where you can insert processing. This changes tone/dynamics across the group because the processors see the combined signal.

**VCA-style control:**
Changes the levels of member channels without summing their audio into a single point first. This preserves each track's insert behavior and post-fader sends relationships (depending on implementation). Use it when you want "one knob" control but not shared processing.

**Folder tracks:**
Organizational containers; sometimes they also act as an audio group, sometimes not. Confirm by checking whether inserts on the folder affect audio and whether meters show summed signal.

| Feature | Audio Group/Bus | VCA-style Control |
|---------|----------------|-------------------|
| Audio summing | Yes | No |
| Insert processing affects whole set | Yes | No |
| Best for | Glue, shared tone, macro dynamics | Macro level rides, balancing without tonal change |
| Common pitfall | Over-processing / hidden clipping | Expecting "glue compression" to work |

**Why This Matters:**
If you put "glue compression" on a VCA, nothing happens—because there's no shared audio to compress. Build a mental map: routing is topology, and topology determines what processing "sees."`
      },
      {
        title: 'Glue Compression on Buses: What It Is (and What It Isn\'t)',
        content: `"Glue compression" typically means low ratios, modest gain reduction, and timing that respects transients—enough to unify a group without flattening it.

**Drum Bus Starting Point:**
- Ratio: 2:1
- Attack: 10–30 ms (lets the initial hit through)
- Release: 100–300 ms or Auto
- Target: 1–2 dB gain reduction on the loudest sections

The measurable target is simple: you should see consistent GR movement on peaks, but the drums should not lose punch or start "pumping" unless you want that as an effect (Lesson 6).

**Music Bus (keys/guitars/synths):**
Glue compression is often even gentler: 1–2 dB GR max, slower attack if you want transient clarity, and releases that don't "breathe" with every chord.

**Vocal Bus:**
Compression may be more about containment and consistency, but the "glue" part still stays moderate—if you need heavy control, do it earlier in the chain per-track, then use bus compression lightly.

| Bus | Compression Target | EQ Intention | Saturation |
|-----|-------------------|--------------|------------|
| Drum Bus | 1–2 dB GR, 2:1, A 10–30 ms, R 100–300 ms/Auto | Reduce mud 250–400 Hz, manage bite 2–4 kHz | Subtle density, output matched |
| Music Bus | 0.5–1.5 dB GR | Gentle tonal tilt; carve vocal space | Very light, avoid fizz |
| Vocal Bus | 1–3 dB GR depending on control needed | Presence shaping 3–5 kHz, control harshness | Rarely necessary; keep clean |
| Mix Bus | 0.5–1.5 dB GR | Minimal; broad balance only | Optional, extremely subtle |

**Key Principle from Lesson 2:**
Level-match when comparing. If the bus compressor makes the group louder, your brain will prefer it even if it's worse.`
      },
      {
        title: 'Bus EQ and Saturation: Cohesion, Not Surgery',
        content: `Lesson 4 separated surgical vs musical EQ. On buses, you'll usually lean musical: broad moves that tilt tone and reduce collective buildup.

**Drum Bus Examples:**
- A wide cut around 250–400 Hz (mud) by 0.5–2 dB can clean the kit if multiple mics stack there
- A gentle shelf above 8–12 kHz by 0.5–1.5 dB can add air if overheads feel dull—only if cymbals don't get harsh

**Music Bus Examples:**
- A subtle dip 2–4 kHz can reduce bite when guitars + synths mask vocals
- Small boosts around 700 Hz–1.2 kHz can add forwardness if the arrangement feels hollow

**Vocal Bus Examples:**
- A broad presence lift 3–5 kHz is sometimes better than boosting every vocal track separately
- Then you correct harsh moments with dynamic EQ per-track

**Saturation on a Bus:**
Treat it as "density + harmonic glue," not distortion:
1. Start with very small drive
2. Compensate output to match bypass loudness
3. If your DAW has an oversampling option, enabling it can reduce aliasing artifacts when pushing saturation (especially on bright material)

The goal is cohesion through shared processing, not aggressive tone-shaping that belongs on individual tracks.`
      },
      {
        title: 'Gain Staging Through Buses: Practical Reference Targets',
        content: `Buses make gain staging visible. Use simple targets:

**Individual Tracks (post-clip gain, pre-fader):**
Roughly aligned from Lesson 2 (e.g., -18 dBFS RMS-ish reference where appropriate).

**Bus Channel Peaks:**
Often healthy around -12 to -8 dBFS peak during typical sections, leaving transient room.

**Master Bus During Mixing (pre-mastering):**
Keep peaks ≤ -6 dBFS peak as a conservative working target so you have headroom for later mastering moves (and to avoid inter-sample/true-peak surprises when exporting).

**Loudness Metering Context:**
If you use loudness meters, standards like EBU R 128 define LUFS/true-peak concepts for program loudness normalization. While music targets vary by platform, the measurement concepts and "true peak matters" idea carry over.

**Pan Law Interaction (from Lesson 9):**
Center-panned signals may be attenuated depending on project settings, which changes how much energy hits a bus when you re-balance panning. For example, Logic Pro documents multiple pan law options (e.g., -3 dB, -4.5 dB, -6 dB). Be aware that panning changes affect bus levels.

**The Discipline:**
Check bus meters regularly. Hidden clipping inside a bus can cause distortion that's hard to diagnose later.`
      },
      {
        title: 'A Practical Bus Architecture You Can Reuse',
        content: `A reliable "mid-course" architecture for this curriculum:

<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Drum tracks ──────► Drum Bus ──┐
                               │
Instrument tracks ─► Music Bus ─┼──► Mix Bus ──► Master
                               │
Vocal tracks ──────► Vocal Bus ─┘

FX Returns (reverb/delay) ─► Mix Bus directly
                            OR to relevant group buses
</pre>

**Component Breakdown:**
- **Drum Bus** (all drum tracks) → Mix Bus
- **Music Bus** (all instruments except vocals) → Mix Bus
- **Vocal Bus** (lead + doubles + harmonies) → Mix Bus
- **FX Returns** (reverb/delay from Lessons 7–8) → either Mix Bus directly or to the relevant group buses if you want the FX to be "part of the group tone"

**Two Workflow Wins:**

1. **One place to A/B:** Bypass processing on the Drum Bus and hear instantly what your "bus tone" contributes.

2. **One place to automate macro moves:** Later (Lesson 11) you can automate group level or bus processing for arrangement energy without rewriting every track.

This architecture scales: as arrangements grow, you can add sub-buses (e.g., "Synth Bus" under Music Bus) without restructuring the entire session.`
      }
    ]
  },

  learningObjectives: [
    "Create functional buses (Drums / Music / Vocals / Mix Bus) and route tracks consistently from the Mixing-9 session",
    "Distinguish between audio groups (signal summing + processing) and VCA-style control (level control without summing) and choose appropriately",
    "Apply bus processing (EQ, compression, saturation) with level-matched A/B and measurable headroom targets",
    "Maintain gain staging through buses and the master, avoiding hidden clipping and over-driving analog-modeled plugins",
    "Evaluate mono compatibility after bus processing changes (builds on Lesson 9's mono checks)"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Bus Processing and Grouping. Your mixes are improving!",
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
