/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 7 - Reverb Types and Uses
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-7-progress",
  lessonNumber: 7,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-8.html",
  prevLessonUrl: "lesson-mixing-6.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Mixing" }),
    title: "Reverb Types and Uses:",
    titleHighlight: "Creating Depth",
    subtitle: "Early reflections, pre-delay, and decay for front-to-back depth"
  },

  exercise: {
    title: "Creating Depth with Reverb",
    description: "Set up two aux reverbs (short room + longer plate/hall), assign them to different mix roles (cohesion vs feature depth), EQ the returns, and use pre-delay to protect clarity while maintaining headroom.",
    tip: "Treat reverb as two jobs: a short room for cohesion (often low in level) and a longer plate/hall for featured depth. Pre-delay is a clarity lever: small changes (e.g., 10 ms → 25 ms) can move a vocal forward without changing the tail length.",
    steps: [
      '<strong>Load session</strong> — Open your previous session "Mixing-6_AttackRelease" and immediately save a new version named "Mixing-7_ReverbDepth".',
      '<strong>Set loop region</strong> — Select a 20–30 second loop (chorus/drop). Keep the loop consistent for evaluation, and keep your master peak meter visible (Lesson 2).',
      '<strong>Create reverb returns</strong> — Create two return/aux tracks: "RoomVerb (Short)" and "Verb (Long)". Route both returns to the master output (not to other effect returns).',
      '<strong>Short room setup</strong> — On "RoomVerb (Short)", insert a reverb. Set its Wet/Dry (Mix) to 100% wet (return workflow). Choose a Room/Small Room style if available; set Decay to ~0.6 s and Pre-delay to ~5 ms as a starting point.',
      '<strong>EQ short room</strong> — After the reverb on "RoomVerb (Short)", insert an EQ. Apply a high-pass filter around 150 Hz (12 dB/oct) and a low-pass filter around 10 kHz (6–12 dB/oct). Solo the return briefly: confirm it\'s "ambience only" (no boomy lows, no excessive hiss).',
      '<strong>Long reverb setup</strong> — On "Verb (Long)", insert a reverb set to 100% wet. Choose Plate or Hall. Set Decay to ~1.8–2.4 s and Pre-delay to ~25 ms as a starting point. Set damping (HF decay) so the tail is not brighter than the vocal sibilance region.',
      '<strong>EQ long reverb</strong> — After the reverb on "Verb (Long)", insert an EQ. Start with HPF around 120 Hz (12 dB/oct). If the tail feels too sharp, add a gentle high-shelf reduction or LPF somewhere around 8–12 kHz. Confirm by soloing the return briefly, then return to full mix.',
      '<strong>Set send modes</strong> — For both reverbs, use post-fader sends as the default so the wet/dry relationship follows fader rides. (If your DAW offers post-pan, choose it when you want panning to affect the reverb send.)',
      '<strong>Drums → short room</strong> — From Drum Bus (or Overheads + Snare), raise the send to "RoomVerb (Short)" from -∞ until you can just perceive the room in the full mix, then back off slightly. Verify by muting/unmuting the return: the kit should feel more cohesive without obvious tail.',
      '<strong>Vocals → long reverb</strong> — From Lead Vocal (or Vocal Bus), raise the send to "Verb (Long)" until the vocal gains depth without losing articulation. If the vocal clouds, adjust Pre-delay on "Verb (Long)" between ~15 ms and ~35 ms and choose the value that preserves consonants.',
      '<strong>Depth differentiation check</strong> — Temporarily send a small amount of vocal to "RoomVerb (Short)" (very low send) and compare. Keep the approach that makes the vocal feel "in the track" while the long verb supplies the sense of distance and emotion.',
      '<strong>Early-reflection vs tail check</strong> — If your reverb exposes ER level, raise ER slightly and reduce tail level (or reduce decay) and listen for "closer but still spatial". Then do the opposite (more tail) for "further". Keep the setting that supports the song\'s front-to-back narrative.',
      '<strong>Headroom verification</strong> — Clear clip indicators, confirm neither return clips, and confirm the master peak has not crept above your mixing headroom target (commonly keeping peaks below about -6 dBFS during mixing). If headroom shrank, reduce return outputs or send levels rather than shortening decay first.',
      '<strong>Export and compare</strong> — Export two bounces of the loop: (A) "Mixing-7_PreReverb" with both returns muted, and (B) "Mixing-7_PostReverb" with both returns active. Re-import both, level-match, and A/B to confirm added depth without lost clarity.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What Reverb Does: Simulated Space, Depth, and "Glue" vs "Effect"',
        content: `Reverb (short for reverberator) is any electronic or acoustical device designed to simulate, or capture, natural reverberation and blend it with the original sound. AES describes reverberation as the total sound field remaining in a room after the source is silenced, and the time it takes that field to decay is quantified as reverberation time (often expressed as RT60).

**In a mix, reverb is a perception tool:**
You are changing the ratio of direct sound to reflected energy over time and frequency, and the listener interprets that as room size, distance, and dimensionality.

**Two Roles for Reverb:**
- **Glue**: Used subtly, shared ambience helps separately recorded elements feel like they occupy one coherent environment without calling attention to the tail
- **Effect**: Used deliberately—a bright plate halo around a vocal, a dramatic hall tail behind a synth, or a springy guitar-amp character

The same processor can serve both roles; the difference is intent plus parameter choices (early reflections, pre-delay, decay time, damping/tonality) and how you route and blend the effect (insert versus send/return).

**Building on Previous Lessons:**
This lesson builds on Lesson 1 routing (returns), Lesson 2 gain staging (reverb returns steal headroom), Lessons 3–4 EQ (filtering returns), and Lessons 5–6 compression (controlling sustain so reverb sits predictably).`
      },
      {
        title: 'Early Reflections vs Late Reflections: The Anatomy of "Space"',
        content: `Most reverbs can be understood as two time regions.

**Early Reflections:**
The first reflections that arrive after the direct sound. AES defines them as the first several reflected sound waves to reach the listener after the direct sound, arriving via slightly longer path lengths. These early arrivals provide strong cues about room size, wall proximity, and the apparent position of the source inside the space. Many mixing references treat early reflections as largely occurring within the first ~50 ms, before the tail becomes diffuse.

**Late Reflections (Reverb Tail):**
The decaying, high-density field that follows. This is where "decay time" and "damping" become audible quickly, and where mixes most often get washed out if the tail is too long or too loud.

**The Haas Effect and Clarity:**
AES's Haas (precedence) effect notes that humans localise the source using the first arrival if later arrivals remain within roughly 25–35 ms; beyond that, the delayed event starts to be perceived as separate.

**Depth Heuristic:**
<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Closer: more dry, longer pre-delay, less tail
Farther: less dry, shorter pre-delay, more tail
</pre>`
      },
      {
        title: 'Core Reverb Parameters and Practical Starting Ranges',
        content: `**Pre-delay** sets the time offset (ms) between the dry signal and the onset of the first early reflection. Typical "natural" values are commonly 1–25 ms. Key depth cue: short pre-delay tends to push sounds back, while longer pre-delay tends to bring sounds more to the forefront by separating the dry attack from the reflections.

**Decay Time / RT60** controls how long the tail persists. AES defines reverberation time as the time for the sound pressure level to decay by 60 dB.

| Decay Range | Character | Typical Use |
|-------------|-----------|-------------|
| 0.3–0.8 s | Short | Ambience, cohesion |
| 1.0–2.0 s | Medium | Vocals, instruments |
| 2.5–6+ s | Long | Deliberate effect |

**Size** changes reflection density/spacing—larger sizes = more sparse early reflections.

**Damping (HF decay)** darkens the tail over time, making it feel more natural and less harsh.

**ER Level** shifts the clarity-versus-wash balance. More early reflections often reads "closer"; more tail reads "further."

**Wet/Dry (or Send Level):**
On a return workflow, set Wet/Dry to 100% wet and control the effect amount from the send, so your balance automation stays predictable.`
      },
      {
        title: 'Reverb Types and Their Character',
        content: `Historically, artificial reverb was created using physical methods (echo chambers, plates, springs) before modern DSP. These names persisted because they describe recognisable reflection behaviour and timbre.

**Room:** Short and intimate, useful for believable ambience and cohesion. Decay typically 0.3–1.0 s.

**Hall:** Larger and smoother, often used for grandeur and long tails. Decay typically 1.5–4+ s.

**Plate:** Dense and often bright, giving vocals or snares a polished "halo" that can sit in a mix without sounding like a literal hall. The EMT plate (invented 1957) is the classic reference.

**Chamber:** From dedicated reflective rooms with a speaker/mic capture chain. Often described as warm and classic.

**Spring:** Mechanical (often associated with guitar amps), distinctive boingy/lo-fi character used as colour rather than realism.

**Algorithmic vs Convolution:**
- **Convolution reverb**: Digital simulation based on convolving audio with an impulse response (IR) captured from a space or hardware. Often wins for realism.
- **Algorithmic reverb**: Generates reflection patterns using delay networks and filters. Often wins for tweakability and creative shaping.`
      },
      {
        title: 'Routing Best Practices: Aux Returns, Send Modes, and EQ',
        content: `Because reverb is a time-based effect shared across multiple sources, a **send/return (aux)** workflow is commonly preferred to inserts. One reverb return lets you place many tracks in the same virtual environment and automate "ambience level" as a mix element.

**Return Setup:**
On a return, set the reverb fully wet (100%). The send level and return fader define the blend.

**Send Position:**
- **Post-fader sends** (most common for reverb): The dry/wet relationship stays consistent when you ride the channel fader
- **Pre-fader sends**: Useful for creative "fade-to-reverb" moments or when you want the effect level independent of the channel fader

**EQ Your Reverb Returns:**
This is standard practice to sculpt the effect so it fits the mix:

<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Typical Return EQ:
• HPF: ~120–200 Hz (higher for vocals) to remove mud
• LPF: ~8–12 kHz to tame harsh/fizzy tails
• Adjust in context, not in solo
</pre>

Sound On Sound notes that EQ after reverb/delay helps sculpt the effect—often by rolling off lows and highs—then refine in context.`
      },
      {
        title: 'Common Mistakes and Troubleshooting',
        content: `**Washing Out the Mix:**
Usually a level and decay problem rather than "wrong reverb type". If the vocal loses intelligibility:
1. Try lowering the vocal send 2–4 dB (or lowering the return) before shortening decay
2. Check pre-delay: 10–30 ms range often restores consonant clarity by separating the dry attack from reflections
3. Near-zero pre-delay tends to push sources backwards

**One Reverb on Everything:**
This often collapses front-to-back depth. Solution: use two returns:
- Short room for cohesion (~0.4–0.9 s)
- Longer plate/hall for featured elements (~1.5–2.5 s)

Create depth by giving foreground sources slightly longer pre-delay and a controlled tail.

**Not EQing Returns:**
Commonly creates low-end build-up and fizzy tails. Start with HPF ~120–200 Hz and LPF ~8–12 kHz on the return, then fine-tune.

**Ignoring Headroom:**
Returns add energy and can reduce master headroom. Verify peaks after adding reverb and trim return output if needed. Keep Lesson 2 discipline.`
      }
    ]
  },

  learningObjectives: [
    "Differentiate early reflections from late reverb tails and explain how each contributes to perceived space and depth",
    "Configure core reverb parameters (pre-delay, decay/RT60, size, damping, early reflections level, wet/dry) using practical starting ranges",
    "Apply appropriate reverb types (room, hall, plate, chamber, spring; algorithmic vs convolution) based on mix intent (glue vs effect)",
    "Configure send/return routing for reverb and evaluate pre-fader vs post-fader send behaviour for mix control",
    "Apply EQ on reverb returns to reduce mud/harshness and maintain headroom established in Lesson 2"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Reverb Types and Uses. Your mixes are improving!",
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
