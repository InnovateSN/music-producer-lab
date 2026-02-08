/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 11 - Automation Basics
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-11-progress",
  lessonNumber: 11,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-12.html",
  prevLessonUrl: "lesson-mixing-10.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Mixing" }),
    title: "Automation Basics:",
    titleHighlight: "Shape a Dynamic Mix Over Time",
    subtitle: "Use precise, repeatable control to make your mix evolve with the song"
  },

  exercise: {
    title: "Automation Pass: Vocal Rides, Section Energy, and FX Throws",
    description: "Starting from your Mixing-10_BusProcessing session, create automation that improves vocal intelligibility and section impact without compromising headroom or mono compatibility.",
    tip: "A safe workflow is \"Touch, then Edit, then Read\": write a rough pass in Touch mode, clean curves with ramps/S-curves, then switch back to Read before doing anything else. It prevents accidental overwrites and keeps A/B comparisons trustworthy.",
    steps: [
      '<strong>Load and save session</strong> — Open the session "Mixing-10_BusProcessing" and immediately Save As: "Mixing-11_AutomationBasics".',
      '<strong>Show automation lanes</strong> — Set your DAW to show automation lanes. Confirm you can switch automation mode per track (Read/Write/Touch/Latch).',
      '<strong>Protect existing automation</strong> — Set all tracks to <strong>Read</strong> to protect existing automation. Choose the <strong>Lead Vocal track</strong> and set it to <strong>Touch</strong> mode.',
      '<strong>Identify problem areas</strong> — Create a loop around Verse 1 and Chorus 1 (or the busiest 60–90 seconds). Play once without writing, and identify 3–5 words that fall behind the mix.',
      '<strong>Write vocal ride</strong> — Write a first-pass vocal ride in Touch mode: gently raise quiet words by about <strong>+0.5 to +1.5 dB</strong> and reduce overly loud words by <strong>-0.5 to -1.0 dB</strong>. Keep moves small and musical.',
      '<strong>Smooth curves</strong> — Switch the Lead Vocal back to <strong>Read</strong>. Zoom in and smooth obvious jumps: replace vertical steps with short ramps (about <strong>20–100 ms</strong>) to avoid "switch-like" changes.',
      '<strong>Create chorus lift</strong> — Create automation on the <strong>Vocal Bus</strong> (or Vocal Group) in <strong>Read</strong> mode first. Manually draw a chorus lift of about <strong>+0.5 to +1.0 dB</strong>, starting slightly before the chorus downbeat (e.g., <strong>100–300 ms</strong> early) with an S-curve ramp.',
      '<strong>Verify headroom</strong> — Play the chorus and confirm the lift increases perceived energy without pushing the master peak above your mixing headroom target (commonly ≤ <strong>-6 dBFS peak</strong>). If peaks rise too much, reduce the lift or rebalance competing elements.',
      '<strong>Set up delay throw</strong> — Create an automation lane for the <strong>Delay Send</strong> on the lead vocal (from Lesson 8). Set up a tempo-synced delay (e.g., <strong>1/8</strong> or <strong>dotted 1/8</strong>) on an aux return if not already present.',
      '<strong>Draw FX throw</strong> — Choose one end-of-line vocal phrase and draw a "throw": increase the delay send sharply right on the target word, then ramp back down within <strong>200–600 ms</strong> after the word ends. Verify the throw is audible but does not mask the next line.',
      '<strong>Automate feedback (optional)</strong> — On the delay return, automate <strong>feedback</strong>: for the throw moment, increase feedback slightly (e.g., from <strong>20%</strong> to <strong>35–45%</strong>) then return it. Confirm repeats don\'t build into clutter.',
      '<strong>Create pan automation</strong> — Create a subtle pan automation on a supporting element (e.g., a synth ear-candy or guitar double): move between <strong>L20</strong> and <strong>L35</strong> (or symmetric on the right) over a full phrase (≥ <strong>1–2 bars</strong>). Avoid fast pan movement on lead elements.',
      '<strong>Automate plugin parameter</strong> — Automate a plugin parameter (choose one): either a bus saturator drive for chorus (+small amount) or a reverb send reduction in dense chorus (-small amount). Level-match after automation if the plugin changes perceived loudness.',
      '<strong>A/B testing</strong> — Perform A/B testing: bypass all automation lanes (global automation bypass if available) and match overall listening level. Compare "pre-automation" vs "post-automation" focusing on vocal clarity, section transitions, and groove stability.',
      '<strong>Mono check</strong> — Mono check: fold down to mono and replay the automation-heavy sections (throws and pan movement). Confirm lead vocal remains stable and no key elements disappear or hollow out.',
      '<strong>Export comparisons</strong> — Export two short bounces (30–60 seconds): one with automation active, one with automation bypassed. Re-import and level-match for a final objective comparison.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What Automation Is (and Why Mixes Feel "Professional" Because of It)',
        content: `Automation is time-based control of mix parameters—your mix becomes a performance that evolves with the song rather than a static snapshot. A static balance (Lesson 1) can sound acceptable, but most productions need moment-to-moment decisions: vocals dip behind a dense chord, a chorus needs a lift, a delay throw highlights a lyric, a breakdown needs space. Compression can improve consistency (Lessons 5–6), but it reacts to signal level; it cannot "know" the arrangement. Automation is how you translate arrangement intent into mix reality.

**The Goal of Automation:**
Good automation is not constant movement. The goal is often <em>stability</em> and <em>focus</em>: keep lead elements present, reduce distraction, and enhance transitions. Automation also protects headroom (Lesson 2): instead of pushing the master limiter, you can automate the right elements so the chorus feels bigger without adding uncontrolled peaks.

**Think of automation as a set of small, intentional corrections that accumulate into a mix that feels effortless.**`
      },
      {
        title: 'What You Can Automate: Volume, Pan, Mutes, Sends, Plugin Parameters',
        content: `The essential automation targets are:

**Volume (track or bus):**
Vocal rides, section lifts, tightening busy moments.

**Pan:**
Subtle movement for ear candy, widening doubles, keeping interest without breaking mono compatibility (Lesson 9).

**Mute:**
Clean dropouts, removing noise between phrases, arrangement punctuation.

**Send levels (reverb/delay):**
"FX throws" (Lesson 8), depth changes between verse/chorus, tightening reverb in dense sections.

**Plugin parameters:**
Compressor threshold for chorus control, EQ gain for tonal shifts, saturation drive for energy, delay feedback for builds.

**Track vs Bus Automation:**
Automation can be written on tracks or buses (Lesson 10). Track automation gives micro control (one vocal phrase); bus automation gives macro control (lift all vocals +0.8 dB in chorus). The tradeoff is precision vs speed.

**In most workflows:**
- Automate <strong>lead vocal track</strong> for fine rides
- Automate the <strong>Vocal Bus</strong> for section-level energy
- Automate <strong>FX return sends</strong> for throws and depth`
      },
      {
        title: 'Automation Modes: Read, Write, Touch, Latch (Practical Differences)',
        content: `Automation modes determine how the DAW behaves when playback runs:

**Read:**
Plays existing automation only. Safe mode for general mixing and A/B testing.

**Write:**
Overwrites automation continuously during playback. High risk—use only when you intentionally want to replace a whole lane.

**Touch:**
Writes automation only while you touch/move the control; when released, it returns to the previously written automation. Great for refining rides safely.

**Latch:**
Starts writing when you touch/move a control and continues writing after release until you stop playback. Useful for committing a section change (e.g., chorus lift) but can accidentally overwrite later sections.

| Mode | Writes When | After Release | Risk Level |
|------|-------------|---------------|------------|
| Read | Never | N/A | None |
| Write | Always during playback | Keeps writing | High |
| Touch | While control is touched | Returns to previous | Low |
| Latch | After first touch | Keeps writing until stop | Medium |

**Workflow Rule-of-Thumb:**
Keep most channels in <strong>Read</strong>, switch only the channel you are working on to <strong>Touch</strong> for rides, and reserve <strong>Write</strong> for intentional full-lane passes. After writing automation, return to Read before continuing. This prevents the common failure mode: you hit play and unknowingly rewrite your carefully edited curves.`
      },
      {
        title: 'Automation for Arrangement: Verse/Chorus Energy, Vocal Rides, FX Throws',
        content: `Automation is most effective when mapped to arrangement landmarks: verse, pre-chorus, chorus, bridge, outro. Typical moves (values are starting references, not rules):

**Vocal Rides:**
Small moves like <strong>±1 dB</strong> can be enough to keep intelligibility consistent without sounding "automated." Target words that disappear behind guitars/keys.

**Section Lifts:**
Instead of turning everything up, lift the <strong>Music Bus</strong> or <strong>Vocal Bus</strong> by <strong>+0.5 to +1.0 dB</strong> in choruses, or slightly reduce competing elements in verses.

**FX Throws:**
Automate delay send up for a single word/phrase (often the last word of a line) then back down to maintain clarity. Pair with high/low-pass filtering on the return (Lesson 8) so repeats don't clutter low mids.

**Curve Shape Matters:**
Sudden vertical jumps can click or feel unnatural. Use:
- Short ramps (20–100 ms) for musical changes
- Longer S-curves (100–500 ms) for natural fades
- For throws: immediate send increase at the word plus a quick ramp down right after

Verify by listening in context and level-matching the bypass comparison.`
      },
      {
        title: 'Automating Tracks vs Automating Buses (Building on Lesson 10)',
        content: `Your Lesson 10 bus architecture (Drums/Music/Vocals → Mix Bus → Master) lets you automate at two "zoom levels":

**Track Automation (Micro Control):**
Solves local problems: a snare fill that jumps out, a consonant that's sharp, a synth note that masks the vocal.

**Bus Automation (Macro Control):**
Shapes macro energy: choruses feel bigger, bridges feel intimate, outros open up with more reverb.

**Practical Approach—Micro Then Macro:**
1. First, do vocal track rides for intelligibility
2. Then do bus rides for section energy

This avoids the trap of pushing the Vocal Bus up because one phrase is quiet—then every other phrase becomes too loud.

**Bus Automation + Compression Interaction:**
Bus automation interacts with compression: if your Vocal Bus compressor is doing light glue (Lesson 10), a +1 dB bus ride may create slightly more gain reduction. That can be fine, but confirm it doesn't change tone or cause pumping.

**Keep Checking Headroom:**
After automation passes, replay the loudest chorus and confirm your master peak target (commonly ≤ -6 dBFS peak during mixing) is still respected.`
      },
      {
        title: 'Best Practices: When to Automate vs When to Use Compression/Processing',
        content: `Automation and processing solve different problems:
- **Compression** reduces dynamic range based on level
- **Automation** changes level intentionally based on musical meaning

**When to Use What:**
If a vocal is inconsistent phrase-to-phrase, automation (or clip gain) is often cleaner than forcing a compressor to work harder. If a vocal has micro-dynamics within words (peaks) that poke out, compression can help, and automation can refine the remaining moments.

**A Typical Processing Chain:**
1. <strong>Clip gain/region gain</strong> for rough leveling (Lesson 2 concept)
2. <strong>Compression</strong> for control (Lesson 5)
3. <strong>Automation</strong> for musical shaping

**Always Validate with Level-Matched A/B:**
If your automated version is simply louder overall, it will sound better by default; match perceived loudness and re-evaluate.

**Keep Mono Checks in Mind (Lesson 9):**
Pan automation and stereo FX changes can cause momentary mono collapses or phase artifacts.

**Build a Repeatable Test Habit:**
After a major automation pass:
1. Quick mono fold-down check
2. Master peak/headroom check
3. Then commit exports`
      }
    ]
  },

  learningObjectives: [
    "Identify and apply the main automation targets (volume, pan, mute, sends, plugin parameters) to support arrangement and clarity over time",
    "Use automation modes (Read, Write, Touch, Latch) safely, choosing the right mode for editing vs performance-style moves",
    "Create clean automation curves (ramps, S-curves, hold points) for vocal rides, section energy changes, and FX throws without causing level jumps or clipping",
    "Decide when to automate versus when to use processing (compression/EQ), using A/B comparisons and headroom checks to confirm the better solution",
    "Apply automation at track vs bus level based on your Lesson 10 architecture, maintaining gain staging and master headroom targets"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Automation Basics. Your mixes are improving!",
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
