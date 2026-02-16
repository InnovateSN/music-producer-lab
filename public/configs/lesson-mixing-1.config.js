/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 1 - Introduction to Mixing
 *
 * Research sources: AES Pro Audio Reference, Ableton Live Manual, Audio Engineering literature
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-1-progress",
  lessonNumber: 1,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-2.html",
  prevLessonUrl: "lesson-sound-design-15.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Mixing" }),
    title: "Introduction to Mixing:",
    titleHighlight: "Understanding the Mixing Workflow",
    subtitle: "Define mixing in practical terms, map DAW signal flow, and build a session template ready for professional mixing work."
  },

  exercise: {
    title: "Build a First Mix Session Template",
    description: "Create a structured template (tracks → buses → master) and confirm that routing and metering behave as expected.",
    tip: "A common starting point is to build the static balance with faders and panning first, then reach for EQ and compression to solve specific problems you can name (masking, harshness, instability, lack of impact).",
    steps: [
      '<strong>Create a new project</strong> — Set a standard production format (48 kHz / 24-bit or 44.1 kHz / 24-bit). Save as "Mixing-1_Template".',
      '<strong>Import and organize stems</strong> — Label tracks clearly (Kick, Snare, OH, Bass, Music, Lead Vox). Colour-code by family.',
      '<strong>Create four group buses</strong> — Drums Bus, Bass Bus, Music Bus, Vocals Bus. Route each track to the correct bus (not directly to master).',
      '<strong>Verify routing</strong> — Solo each bus and confirm you only hear the correct track family.',
      '<strong>Create effect returns</strong> — Add Reverb Return and Delay Return (100% wet, faders low). Add sends from Lead Vox and Snare.',
      '<strong>Set up metering</strong> — Insert a loudness/true-peak meter on the master bus. Play the loudest section and observe.',
      '<strong>Add safety limiter</strong> — Insert limiter on master with ceiling at -1.0 dB to -0.3 dB. Aim for minimal gain reduction.',
      '<strong>Build static balance</strong> — Start with bus faders (Drums, Bass, Music, Vocals), then fine-tune individual tracks.',
      '<strong>Test export</strong> — Bounce 20-30 seconds, re-import, confirm clean playback with no unexpected distortion.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What is Mixing?',
        content: `Mixing is a decision process, not a single "make it loud" step. It's the stage where many individual elements (recorded audio, virtual instruments, samples, sound design layers) are shaped into a coherent stereo programme.

**Practically, mixing means making choices about:**
- **Level relationships** — What feels foreground vs background
- **Tone** — How bright, dark, tight, or warm each source is
- **Dynamics** — How stable or punchy the envelope feels over time
- **Space** — Depth and width in the stereo field

A useful way to think about mixing: you are building a stable "picture" that translates across systems, while keeping the musical intent intact.

**Workflow, not plugin chains:**
Avoid thinking of mixing as a single "plugin chain." Instead, treat it as a workflow: session organisation → static balance → problem solving → enhancement → movement (automation) → final checks.

Early decisions often have the largest impact. A clear static balance and sensible routing can reduce the need for heavy processing later.`
      },
      {
        title: 'DAW Signal Flow',
        content: `A modern mix session is built from tracks feeding groups/buses and then the master output.

**Practical signal-flow map:**
1. **Clip/Input gain** (pre-fader) — Set healthy levels before processing
2. **Inserts** — EQ, compression, saturation, etc.
3. **Fader + Pan** — Level and stereo position
4. **Sends to Returns** — Reverb, delay (parallel effects)
5. **Group Buses** — Drums, Bass, Music, Vocals submixes
6. **Master Bus** — Final output, metering, safety limiting

This structure helps you solve problems at the right level: fixing a resonant snare ring on the snare track is different from controlling overall drum punch on a Drum Bus.

**Sends/Returns are crucial for space effects:**
- Keep effects consistent across many tracks
- Automate them in a central place
- Blend dry vs wet in context
- Create distinct effect "layers" for specific moments

**Important DAW reality:** Modern DAWs run 32-bit floating-point engines with enormous internal headroom. Tracks can go "into the red" without clipping internally, but signals over 0 dB become problematic when leaving the DAW (physical outputs or file export).`
      },
      {
        title: 'The Four Core Mixing Tools',
        content: `**EQ — Frequency Shaping**
EQ shapes frequency balance. Use it for:
- **Corrective moves** — Reducing low-end rumble, harsh resonances, masking
- **Tonal moves** — Adding presence or weight

"Surgical" EQ is narrow and problem-focused. "Musical" EQ is broader and intention-focused.

**Compression — Dynamics Control**
Compression shapes dynamics and envelope (attack, sustain, release). Beyond reducing peaks:
- Stabilise a vocal
- Add density to a bass
- Change the groove by rebalancing transients vs sustain

**Important:** Because compression reacts to level, the order of EQ and compression changes results. An EQ boost before compression triggers more gain reduction; EQ after compression changes tone without altering detector behaviour.

**Reverb — Depth and Environment**
Reverb creates depth and a sense of environment. Small, controlled amounts support cohesion; more obvious settings work as arrangement moments (throws, transitions, special effects).

**Delay — Rhythmic Space**
Delay creates rhythmic space and perceived width without always pushing sources "back" like reverb can. Use for widening, rhythmic interest, and spatial effects.`
      },
      {
        title: 'Key Technical Concepts',
        content: `**0 dBFS (Digital Full Scale)**
The maximum peak level before digital clipping in a converter. When meters hit red and stay there, you risk audible distortion on export.

**Crest Factor**
Music typically has peaks substantially higher than its RMS level (often 12-20 dB difference). This is why headroom matters — punchy mixes need room for transients.

**Pan Law**
Most DAWs apply centre-pan attenuation (typically -3 dB) to maintain consistent perceived loudness while panning. This is why a centred sound doesn't suddenly jump in level.

**Bus vs Buss**
AES recommends "bus" (plural "buses") for audio routing. A bus is an electrical/connection concept for combining multiple signals.

**Where This Leads**
This lesson establishes workflow and template foundations. Lesson 2 (Gain Staging Fundamentals) turns this into repeatable practice: setting sensible levels at each stage so plugins, buses, and the master output behave predictably.`
      }
    ]
  },

  learningObjectives: [
    "Define mixing in practical terms (balance, tone, dynamics, space) and distinguish it from arrangement and mastering",
    "Map a modern DAW mixing signal flow (tracks, inserts, sends/returns, buses, master) and explain why routing choices matter",
    "Recognise the core mixing tools (EQ, compression, reverb, delay) and what problem each typically addresses",
    "Build a basic session template with grouped buses and time-based effect returns"
  ],

  messages: applyMessagePreset("default", {
    initial: "Learn the fundamentals of mixing workflow and build your first professional session template.",
    success: "Excellent! You understand mixing workflow and have a solid template. Ready for Gain Staging!",
    error: "Review the signal flow concepts and try the template exercise again.",
    alreadyCompleted: "You've mastered the mixing introduction. Keep refining your template!"
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
