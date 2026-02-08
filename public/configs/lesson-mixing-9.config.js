/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 9 - Panning and Stereo Width
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-9-progress",
  lessonNumber: 9,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-10.html",
  prevLessonUrl: "lesson-mixing-8.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Mixing" }),
    title: "Panning and Stereo Width:",
    titleHighlight: "Stereo Image Stability",
    subtitle: "Creating a stable stereo image that holds up in mono"
  },

  exercise: {
    title: "Creating a Balanced Stereo Image",
    description: "Pan core elements into a coherent stage, verify mono compatibility, and apply subtle M/S width management on a bus without losing headroom or collapsing key elements.",
    tip: "If the mix feels narrow, widen the arrangement with panning and doubles before reaching for a stereo widener. If the mix feels wide but unstable, reduce side content or time offsets and re-check mono—phase cancellation and comb filtering are common reasons width \"disappears\" on collapse.",
    steps: [
      '<strong>Load and save session</strong> — Open your previous session "Mixing-8_DelayFX" and immediately save a new version named "Mixing-9_PanningWidth".',
      '<strong>Select loop and verify headroom</strong> — Choose a representative 20–30 second loop (often chorus/drop). Keep the master peak meter visible and maintain your mixing headroom from Lesson 2 (a practical target is to remain under about -6 dBFS peak while you work).',
      '<strong>Document pan law</strong> — Locate your DAW\'s pan law / pan depth setting and write down the current value (for example, -3 dB). Do not change it during the exercise; the goal is to learn consistent panning decisions.',
      '<strong>Set centre anchors</strong> — Pan Lead Vocal to Centre (C). Pan Kick to Centre and Snare to Centre. Pan Bass to Centre or very close to centre (e.g., C or L5/R5) to keep low-end energy stable while you make width decisions elsewhere.',
      '<strong>Pan drum overheads</strong> — Pan Overheads to a moderate stereo spread (e.g., OH-L at L60 and OH-R at R60). Pan Hi-hat (if separate) slightly off-centre (e.g., R20) and pan Ride slightly opposite (e.g., L20), adjusting based on the kit perspective you prefer.',
      '<strong>Position toms</strong> — Pan toms to follow the overhead perspective: for example, Rack Tom at L25 and Floor Tom at R35 (or wider if your overheads are wide). Verify by listening for tom movement across the field during fills.',
      '<strong>Balance music layer</strong> — Choose two complementary elements (e.g., Guitar 1 and Guitar 2, or Guitar and Keys). Place one at L50 and the other at R50. If you only have one wide element, move it to one side (e.g., L40) and place another supportive element (pads/keys/secondary synth) on the other side (e.g., R40) to restore balance.',
      '<strong>Evaluate stage weight</strong> — Close your eyes and ask whether the left or right feels brighter, louder, or denser. If one side feels heavier, adjust panning (e.g., shift L50 to L40) or level slightly rather than adding EQ immediately.',
      '<strong>LCR comparison</strong> — Pick one pair (e.g., guitars) and temporarily hard-pan them (hard L / hard R). Listen for increased width and potential holes. Then return to your graded positions (e.g., L50/R50) and keep the placement that best supports the vocal focus.',
      '<strong>Mono compatibility check 1</strong> — Activate a mono downmix on your monitor path (or temporarily set the master to mono using a utility/mono plugin). Listen for 10–15 seconds. Identify one element that changes tone or level noticeably (common culprits: Haas delays, wideners, chorus, ping-pong FX).',
      '<strong>Diagnose mono issues</strong> — If something collapses in mono, bypass the suspected width/time-based plugin and re-check mono. If the issue disappears, reduce that effect\'s width, reduce Haas offsets, or reduce "side" level until mono becomes acceptable.',
      '<strong>Apply M/S management</strong> — On a bus (Music Bus or Mix Bus): insert an M/S-capable EQ or stereo tool. High-pass the Side channel around 120 Hz (12 dB/oct) so sub/low-bass energy remains more stable in Mid, then A/B in stereo and mono to confirm the mix stays wide without low-end wobble.',
      '<strong>Mono compatibility check 2</strong> — Return to mono and confirm that Lead Vocal, Kick, Snare, and Bass remain present and stable. If the vocal became masked, reduce side-heavy content or narrow competing elements slightly rather than boosting vocal EQ.',
      '<strong>Final verification and export</strong> — Return to stereo, confirm no clipping on channels/buses/master, and export a short bounce named "Mixing-9_StereoImage". Then export a second bounce with your monitor path in mono (or create a mono downmix) named "Mixing-9_MonoCheck". Compare them to confirm translation rather than perfection.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Stereo Field Fundamentals: Phantom Centre and Why Mono Still Matters',
        content: `In two-channel mixing, "stereo imaging" refers to how reliably a listener can localise elements left-to-right between loudspeakers. A critical mechanism is the **phantom centre**: when a mono signal is sent equally to left and right, the listener often perceives it as coming from between the speakers.

**The Haas (Precedence) Effect:**
The Haas effect describes why this works: localisation is dominated by the first-arriving sound when subsequent arrivals are within roughly 25–35 ms, and a simultaneous arrival is perceived as straight ahead (or behind/within the head, depending on conditions). This is one reason two loudspeakers can create a coherent stereo stage without a physical centre speaker.

**The Stereo Stage as a Finite Resource:**
From a mix perspective, the stereo field is a finite "stage":
- If too many priority elements occupy the centre region, the mix can feel narrow and congested
- If too many elements compete at the edges, the centre can feel hollow

**Why Mono Compatibility Matters:**
Mono compatibility matters because many playback situations partially or fully collapse stereo:
- Phone speakers
- Club systems
- Bluetooth devices
- Broadcast chains
- Certain social platforms

Some widening techniques change tone dramatically when left and right are summed. Treat mono checks as a **verification step**, not a nostalgia exercise.

<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Stereo "stage" intuition (typical):
Left edge   ←    left     centre (phantom)     right    →   Right edge
               (L30–L60)         (C)         (R30–R60)
</pre>`
      },
      {
        title: 'Frequency Considerations: Low End Stability vs High-Frequency Width',
        content: `Panning and width decisions often benefit from frequency awareness. Low-frequency localisation is generally less precise than midrange localisation, and in many real-world systems bass is managed separately (e.g., via subwoofer crossovers).

**Bass Management and Localisation:**
Listening-condition guidance in broadcasting notes that to prevent bass source locations becoming perceptible, lower crossover frequencies may be required when the bass loudspeaker position is further from the main loudspeakers—an indicator that bass routing and localisation are strongly influenced by playback configuration.

**Practical Defaults:**
- **Kick and Bass**: Often kept near the phantom centre so low-end energy feels stable across playback systems
- **Higher-frequency elements** (cymbals, guitars, synth layers, ambience): Can be spread wider without destabilising the groove

This is not an absolute rule, but it is a useful default when you are still building reliable translation habits.

**Anchoring Strategy:**
Lesson 8 introduced Haas-style micro-delays and ping-pong delays as width tools. To keep that width safe:
1. "Anchor" the low end and lead elements in the middle (or near-middle)
2. Use panning, doubles, M/S, and time-based effects to create width above that anchor
3. Follow with consistent mono verification`
      },
      {
        title: 'Panning Techniques: Static Placement, LCR, and Gradual Panning',
        content: `A pan (panoramic) control is designed to move the apparent position of a signal between left and right outputs; in the middle, the signal is typically heard from both outputs, with theoretical level compensation to preserve perceived loudness as it moves.

**Panning for Arrangement Clarity:**
In the context of a mix, panning is less about "making it stereo" and more about arrangement clarity: you are deciding which elements share the same space and which elements deserve separation so they can be heard without excessive EQ or compression.

**Two Common Philosophies:**

| Approach | Typical Pan Positions | Strength | Common Risk |
|----------|----------------------|----------|-------------|
| **LCR** | Hard L / Centre / Hard R | Fast clarity; strong width if arrangement supports it | Holes in the middle if too much is hard-panned without support |
| **Gradual panning** | L10–L60 / R10–R60 (+ centre anchors) | Smoother stage; easier to "fit" many parts | Can drift into a crowded centre if everything is "a little bit off-centre" |

**Stage Balance Mental Model:**
Think of a stage layout: if you put a guitar at L70, consider a counterbalance on the right (another guitar at R70, a keyboard at R40, or stereo ambience).

Balance here is **perceptual, not mathematical**: you are balancing attention, brightness, and rhythmic density—not only meters.`
      },
      {
        title: 'Pan Law: Why Levels Change When You Pan',
        content: `Pan law (sometimes called pan depth) is the rule that determines how level is adjusted as a signal moves between centre and the sides.

**The Classic Result:**
At the middle of a pan pot, a signal is heard equally from both outputs but reduced by about 3 dB relative to its original value—intended to keep perceived loudness more consistent across positions, acknowledging that real rooms complicate this.

**DAW Variations:**
DAWs implement different pan-law options, and the same session can sound different if the pan law changes because centre-panned elements may become louder or quieter relative to hard-panned elements.

| Pan Law | Centre Behaviour | When It Matters |
|---------|-----------------|-----------------|
| **0 dB** | Centre can sound louder than hard L/R | Centre-heavy mixes may feel "inflated" unless compensated by faders |
| **-3 dB** | Common "constant power" style behaviour | General mixing; predictable centre image for mono sources |
| **-4.5 dB / -6 dB** | Stronger centre attenuation | Some workflows prioritise different summing/translation assumptions |

**Practical Takeaway:**
The goal is not "pick the perfect law" but **"know which one you are using, and don't change it mid-mix"**. If you import stems into another DAW (or hand off a session), pan law is one of the first settings to check when balances feel unexpectedly different.`
      },
      {
        title: 'Stereo Width Tools: M/S Processing, Wideners, and Double-Tracking',
        content: `Beyond panning mono sources, width can be shaped by changing the relationship between the "middle" (mono) and "sides" (stereo difference) of a signal.

**Mid/Side (M/S) Matrix:**
<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Mid (M) ≈ (L + R) / 2    (mono content)
Side (S) ≈ (L - R) / 2   (stereo difference)

Reconstruct: L = M + S,  R = M - S
</pre>

**Width Control via M/S:**
- Increasing Side content relative to Mid tends to widen the image
- Reducing Side content tends to narrow toward mono
- Many stereo tools offer width controls or M/S modes on EQ and dynamics

**Widener Risks:**
Wideners can be powerful, but the risks are predictable:
- Many rely on phase manipulation, decorrelation, or short time offsets
- When summed to mono, these relationships can create **phase cancellation and comb filtering**
- This changes tone and sometimes reduces level

**Haas Effect Width (from Lesson 8):**
A 10–25 ms offset between left and right can sound wide, but it can also create comb filtering when collapsed to mono.

**Double-Tracking Advantage:**
Recording two different performances and panning them apart is often more mono-resilient than artificial widening because the differences are performance-based rather than phase-based—though it still needs mono checking.`
      },
      {
        title: 'Mono Compatibility Workflow and Quick Conventions',
        content: `Mono compatibility is simple to test but easy to forget. "Monoed" is effectively left+right summed, and if the left and right signals contain out-of-phase components, summing can cause cancellation.

**Technical Foundation:**
- **Phase cancellation**: The subtraction effect that occurs when out-of-phase signals add as vectors
- **Comb filter**: A response with peaks and valleys caused by reflections (or delayed copies) arriving out of phase, producing reinforcements and cancellations

That is the technical underpinning of why some widening tricks collapse badly in mono.

**Practical Mixing Routine:**
1. Pan in stereo
2. Check mono briefly
3. Return to stereo

**When You Find a Problem:**
If an element changes tone or level noticeably in mono (e.g., guitars become thin):
1. Diagnose whether it's caused by a widener, Haas delay, stereo chorus/modulation, or M/S processing
2. Solve by reducing Side level, reducing time offsets, narrowing width, or keeping critical frequency bands more stable in Mid

**Common Conventions (Starting Points, Not Laws):**
| Element | Typical Position | Reason |
|---------|-----------------|--------|
| Kick, Snare, Bass | Centre | Keeps groove anchors stable |
| Lead Vocal | Centre | Focus and clarity |
| Overheads, Toms | Spread | Kit perspective and width |
| Harmonies, Doubles | Spread | Support without competing |
| Guitars, Keys | Complementary L/R zones | Reduces centre competition |

These conventions work because they reduce competition for the phantom centre while keeping groove anchors stable.`
      }
    ]
  },

  learningObjectives: [
    "Position key mix elements across the stereo field using clear pan targets (centre, L30/R30, L60/R60, hard L/R) while preserving a stable phantom centre",
    "Evaluate stereo image balance using both listening (speaker/headphone checks) and verification tools (mono sum, phase/correlation cues)",
    "Apply and verify panning workflows (LCR and gradual panning) to improve arrangement clarity without relying on EQ to 'separate everything'",
    "Apply Mid/Side (M/S) concepts to manage stereo width responsibly and diagnose widening side-effects (phase cancellation and comb filtering)",
    "Verify mono compatibility throughout by identifying which elements remain stable in mono and which wideners/delays collapse or change tone"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Panning and Stereo Width. Your mixes are improving!",
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
