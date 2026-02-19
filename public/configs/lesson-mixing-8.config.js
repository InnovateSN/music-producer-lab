/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 8 - Delay and Time-Based Effects
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-8-progress",
  lessonNumber: 8,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-9.html",
  prevLessonUrl: "lesson-mixing-7.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Mixing" }),
    title: "Delay and Time-Based Effects:",
    titleHighlight: "Rhythmic Interest",
    subtitle: "Rhythm, width, and controlled repeats without washing out the mix"
  },

  exercise: {
    title: "Rhythmic Delay and Vocal Throws",
    description: "Set up a tempo-synced vocal delay return with filtered feedback, automate throw moments, add ducking for clarity, and integrate delay with Lesson 7's reverb returns while protecting headroom.",
    tip: "If a delay feels messy, reduce feedback first and darken the repeats (LPF) before turning the return down. Quiet, filtered repeats often read as 'space' more reliably than loud, bright repeats.",
    steps: [
      '<strong>Load session</strong> — Open your previous session "Mixing-7_ReverbDepth" and immediately save a new version named "Mixing-8_DelayFX".',
      '<strong>Note tempo</strong> — Choose a 20–30 second loop (commonly a chorus/drop). Note the project tempo (BPM), because you will cross-check rhythmic delay times against it.',
      '<strong>Verification</strong> — Confirm no track, return, bus, or master is clipping. Keep the master peak meter visible and aim to keep mix peaks comfortably below full scale (a practical mixing target is to remain under about -6 dBFS peak while adding time-based effects).',
      '<strong>Create delay return</strong> — Create a return/aux track named "Vocal Delay (Tempo)". Insert a delay plugin and set it to 100% wet (return workflow).',
      '<strong>Set tempo-sync time</strong> — Enable tempo sync on the delay and set the delay time to 1/8 or dotted 1/8. Cross-check with the tempo: at 120 BPM, 1/8 ≈ 250 ms and dotted 1/8 ≈ 375 ms (your DAW may display this).',
      '<strong>Set feedback</strong> — Set Feedback to a moderate starting point (e.g., 25–40%) so you hear roughly 2–5 audible repeats. Verify by sending a short vocal word or snare hit and counting the repeats before they fade.',
      '<strong>Configure filtering</strong> — Set a high-pass around 200 Hz and a low-pass around 7–9 kHz (either inside the delay\'s feedback section or by inserting an EQ after the delay). Verify that the repeats sound darker/thinner than the dry vocal.',
      '<strong>Set stereo behaviour</strong> — Choose Ping-Pong (if available) or unlink L/R and offset one side slightly (e.g., left = 1/8, right = dotted 1/8). Verify width by listening on headphones, then briefly check mono for comb-filtering or level drops.',
      '<strong>Send vocal to delay</strong> — From the Lead Vocal track (or Vocal Bus), create a post-fader send to "Vocal Delay (Tempo)". Raise the send until the delay is clearly audible, then back it down until it supports the vocal without sounding like a second lead.',
      '<strong>Create throw delay</strong> — Create a second return/aux named "Vocal Throw (Wide)". Insert another delay, set 100% wet, set time to 1/4 or dotted 1/8 (choose a contrasting rhythm), set feedback slightly lower (e.g., 15–30%) for 1–3 repeats, and apply similar HPF/LPF filtering.',
      '<strong>Automate throw</strong> — On the Lead Vocal send to "Vocal Throw (Wide)", draw automation so the send stays at -∞ (or very low) most of the time, then briefly rises for one chosen word or phrase ending. Verify by looping: only the selected phrase should trigger the throw.',
      '<strong>Implement ducking</strong> — If your delay has built-in ducking, enable it and adjust threshold until repeats tuck under the active vocal and rise in gaps. If not available, insert a compressor after the delay on the return, sidechain it from the dry Lead Vocal, set attack 1–5 ms, release 150–300 ms, ratio ~4:1, and adjust threshold for about 3–6 dB gain reduction during vocal phrases.',
      '<strong>Depth integration</strong> — Optional: send a small amount of "Vocal Delay (Tempo)" to your long reverb return (e.g., "Verb (Long)") to seat repeats behind the dry vocal. Verify that the repeats feel less "stuck on top" without reducing vocal clarity.',
      '<strong>Headroom check</strong> — Confirm neither delay return clips (especially with higher feedback). Ensure the master peak remains within your mixing headroom target; if it rises, reduce return outputs or send levels before changing timing.',
      '<strong>Export and compare</strong> — Export two 20–30 second bounces: (A) "Mixing-8_PreDelay" with both delay returns muted, and (B) "Mixing-8_PostDelay" with delays active. Re-import both, level-match, and A/B. Write down (1) the rhythmic role the delay created, and (2) what you changed (filters, ducking, feedback) to keep the vocal intelligible.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Delay vs Reverb: Discrete Echoes vs Diffuse Ambience',
        content: `A delay creates one or more time-shifted copies of the original signal. When those copies are clearly separated from the dry sound, you perceive them as repeats (echoes). In acoustics, "echo" is commonly described as a discrete reflection that arrives at least around 50 ms after the direct sound and stands out from the background reverberant field.

**Reverb**, by contrast, is the dense, decaying field that builds up after many reflections—it tends to read as continuous ambience rather than individual repeats.

**The Practical Mix Choice:**
- **Delay**: Adds rhythmic interest, fills gaps between phrases, creates stereo motion while keeping the dry source intelligible
- **Reverb**: Excellent for cohesion and front-to-back depth, but longer decay times can occupy continuous bandwidth and soften diction

**Many modern mixes use both:** delay contributes movement and clarity, while a short room or controlled plate provides glue and a shared sense of environment.

**Decision Test:**
Do you want the listener to notice repeats (delay as effect), or to feel a spatial bed (reverb as glue)? Once you decide, use return tracks for most delays, set the delay 100% wet on the return, and control the amount from sends so your dry balance and headroom remain predictable.`
      },
      {
        title: 'Core Delay Parameters: Time, Feedback, Filtering, and Stereo',
        content: `**Delay Time** determines whether a delay reads as rhythm, thickening, or spatial widening. Most delays offer time in milliseconds (free) or tempo-sync note values.

**Tempo-Sync Formulas:**
<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Quarter note (ms) = 60,000 ÷ BPM
Eighth note (ms) = 30,000 ÷ BPM
Sixteenth note (ms) = 15,000 ÷ BPM
Dotted = multiply by 1.5
Triplet = multiply by 2/3
</pre>

| Value | 120 BPM | Common Role |
|-------|---------|-------------|
| 1/8 | 250 ms | Energy/motion |
| 1/8 dotted | 375 ms | Syncopation/"push" |
| 1/4 | 500 ms | Space between lines |
| Slapback | 80–140 ms | Thickening/vibe |

**Feedback** controls the number of repeats: low (~10–25%) = few repeats; moderate (~30–60%) = longer trail; very high = approaches self-oscillation.

**Filters** keep delays mix-ready: HPF repeats (~150–300 Hz) reduces low-end build-up; LPF (~6–10 kHz) keeps repeats behind the lead.

**Stereo options** include ping-pong, independent L/R times, and Haas-style micro-delays (5–25 ms). Check mono occasionally—short offsets can create comb filtering.`
      },
      {
        title: 'Delay Types and Character',
        content: `Delay "type" is mostly about repeat tone, time stability, and whether the device adds movement or saturation as repeats recirculate.

**Simple/Digital Delay:**
Clean, stable repeats close to a copy of the original. Useful for precise rhythmic patterns (tight vocal throws, rhythmic guitars) and for learning timing because the repeats are easy to hear and measure.

**Tape/Analog-Style Delay:**
Intentionally degrades repeats with saturation, high-frequency loss, noise, wow/flutter, or time-change "repitch" behaviour. Helps repeats sit behind the dry source because they become darker and less literal.

**Modulated Delay:**
Adds LFO or envelope movement to delay time and/or filtering. Produces chorus-like widening at short settings (~10–35 ms) and a more animated trail at longer times.

**Slapback:**
A single short repeat (~80–140 ms) that thickens vocals or guitars and implies a lively space without a long tail. Classic rockabilly and vocal production technique.

**Ping-Pong:**
Alternates repeats left/right for obvious width and ear candy. Still benefits from filtered feedback so the echo doesn't dominate the mix.`
      },
      {
        title: 'Rhythmic Techniques: Tempo-Sync and Vocal Throws',
        content: `**Tempo-synced delays** are most convincing when they support the groove rather than competing with it.

**Choosing a Role:**
- **Quarter-note delay**: Reads as "space between lines"
- **Eighth-note delay**: Energises and creates subtle push
- **Sixteenth-note delay**: Adds sparkle but can clutter fast vocals
- **Dotted eighths (1/8D)**: Create off-beat syncopation in straight 4/4
- **Triplet values**: Reinforce swing or shuffle feels

Because repeats are rhythmically organised, tempo-sync often lets you use smaller send moves while still hearing a clear effect.

**Throw Delays:**
A workflow technique where you automate a send so only specific words or phrase endings trigger repeats. This preserves clarity in busy lines and makes delay feel intentional.

**Practical Method:**
1. Keep the delay return low by default
2. Automate a brief send boost (+6 to +12 dB) on the last word of a line
3. The repeat blooms into the gap after the vocal stops
4. Level-match A/B: if the better version is only louder, trim the return

**Two Refinements:**
- Filter the repeats (HPF + LPF) so the echo sits behind the dry
- Reduce feedback for throws (1–3 repeats) to avoid masking the next lyric`
      },
      {
        title: 'Creative Chains: Delay with Reverb and Modulation',
        content: `Delays become more mix-ready when placed inside a deliberate spatial chain.

**Delay → Reverb:**
Sending delay into reverb can push repeats backwards and make them feel like part of the ambience. Useful when the dry vocal needs to remain forward but the repeats should "live" behind it.

**Reverb → Delay:**
Creates rhythmic, ghostly tails. Can be effective for ambient textures, but can crowd a busy pop arrangement quickly if the return isn't filtered and automated.

**Modulation as a Depth Cue:**
- Light modulation (slow rate, small depth) makes repeats feel less static
- Can keep a sync delay from sounding like copy-paste
- Strong modulation becomes a chorus-like effect—useful as a special moment rather than a constant mix bed

**Time Automation:**
If your delay offers different transition modes (repitch vs fade/jump), changing delay time while audio is repeating can deliberately pitch-shift or smear the repeat. Automation of time, feedback, and filtering can function as an effect "performance."`
      },
      {
        title: 'Ducking, Routing, and Common Mistakes',
        content: `**Ducking** solves the problem of repeats competing with the dry signal during phrases. It reduces the wet signal while the dry source is present, then lets repeats rise in the gaps.

**Ducking Setup:**
- Some delays include built-in ducking
- Otherwise: insert a compressor on the delay return, sidechain from the dry vocal
- Settings: ratio ~4:1, attack 1–5 ms, release 150–300 ms, threshold for ~3–6 dB GR while vocal is active
- Goal: intelligibility first, repeats second

**Routing Discipline:**
- Use return workflow (delay 100% wet, control via sends)
- Post-fader sends keep wet/dry stable when you ride the vocal fader
- Pre-fader sends are useful for special transitions

**Common Mistakes:**
- **Too much return level**: Repeats overpower the dry
- **Too much feedback**: Creates a wash that never settles
- **Repeats too bright**: Compete with the lead instead of supporting
- **Headroom loss**: Feedback accumulation can clip the return or master—verify peaks after dialing feedback
- **Haas micro-delay issues**: Can sound wide in stereo but create comb filtering in mono if pushed too far`
      }
    ]
  },

  learningObjectives: [
    "Distinguish delay from reverb by identifying discrete repeats versus diffuse ambience, and choose an effect based on mix intent (rhythm vs depth)",
    "Configure a tempo-synced delay (time, feedback, filters, stereo mode) and verify the result with level-matched A/B comparisons",
    "Implement filtered feedback (HPF/LPF) and stereo spread (ping-pong, L/R offsets, Haas micro-delays) while checking mono compatibility",
    "Automate delay sends to create vocal throw effects that land in gaps without masking the next lyric",
    "Apply ducking (built-in or sidechained) on a delay return and evaluate clarity, headroom, and translation using the workflow from Lessons 2 and 7"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Delay and Time-Based Effects. Your mixes are improving!",
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
