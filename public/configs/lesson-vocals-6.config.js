/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 6 - Vocal Effects & Processing
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-6-progress",
  lessonNumber: 6,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-7.html",
  prevLessonUrl: "lesson-vocals-5.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Vocals" }),
    title: "Vocal Effects & Processing:",
    titleHighlight: "Reverb, Delay & Modulation",
    subtitle: "Add depth, space, and character with reverb, delay, chorus, and modulation effects. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Vocal Effects & Processing",
    description: "Add depth, space, and character with reverb, delay, chorus, and modulation effects. This lesson covers the essential vocal production techniques used in professional recordings.",
    tip: "Vocals are usually the focal point of a track. Spend extra time getting them right - they make or break the production.",
    steps: [
      '<strong>Study vocal production theory</strong> — Understand the concepts and workflow.',
      '<strong>Analyze reference vocals</strong> — Listen to professional vocal productions in your genre.',
      '<strong>Apply the techniques</strong> — Practice the specific vocal processing methods.',
      '<strong>Critical listening</strong> — Compare your results to professional standards.',
      '<strong>Iterate and refine</strong> — Make adjustments based on what you hear.',
      'Complete when you understand the practical application.'
    ]
  },
  
  theory: {
    sections: [
      {
        title: 'Reverb Types and Their Application to Vocals',
        content: `
**Room Reverb**
Simulates a small-to-medium acoustic space. Short decay (0.2–0.8s), early reflections prominent. Creates the sense that the singer is in a physical room without being obviously "wet." Used in: pop, hip-hop (subtle room glue), rock, and virtually any genre where natural placement is desired without a large space.

**Plate Reverb**
Originally a large sheet of metal vibrated by a transducer. Bright, smooth, no distinct room character. Excellent on vocals—clarity without harshness. Iconic on pop and soul recordings (Phil Spector's Wall of Sound). Decay: 0.8–2.5s. Still the most-used vocal reverb type in pop production.

**Hall Reverb**
Simulates large concert hall. Long decay (2–5s), distinct build-up phase. Used for: ballads, opera, cinematic vocals, gospel. Can overwhelm dense mixes—use sparingly or reserve for key dramatic moments (bridge, final chorus).

**Spring Reverb**
Hardware springs create characteristic "boing" artifact. Distinctly retro, lo-fi character. Common in surf rock, rockabilly, dub reggae. Not transparent—it's a sonic flavor.

**Convolution Reverb**
Uses impulse responses (recordings of real spaces). Captures the exact acoustic signature of a physical room: Abbey Road Studio 2, the Sistine Chapel, a stairwell. Most realistic option. Less CPU-friendly than algorithmic reverb.

**Vocal Reverb Setup Best Practice**
Always use reverb as a send effect (aux/bus), not as an insert:
1. Create a reverb bus with reverb set to 100% wet
2. High-pass filter the reverb return at 200–300 Hz (remove muddy low-end reverb)
3. Compress the reverb return (4:1, medium settings) to control bloom
4. Add pre-delay to the reverb (15–30ms) — separates vocal from reverb tail, prevents muddiness
5. Automate the send level: more in quiet sections, less in dense chorus
        `
      },
      {
        title: 'Delay, Modulation, and Creative Vocal Effects',
        content: `
**Delay Types for Vocals**
- **Slap Delay (50–150ms):** Single repeat that doubles the vocal subtly. Creates depth and dimension without obvious reverb wash. Standard in country, rock, and vintage soul.
- **Quarter-Note Delay (tempo-synced):** Rhythmically reinforces the performance. Works in pop and electronic. Tempo = 60,000 ÷ BPM ms.
- **Eighth-Note Delay:** Faster rhythmic reinforcement. Creates excitement in EDM, house, and upbeat pop.
- **Ping-Pong Delay:** Alternates between left and right channels. Wide stereo effect for lead vocals or ad-libs.
- **Filtered Delay:** High-pass filtered repeats sit behind the dry vocal in high-frequency content, never clutter.

**Throw Delays (Automation)**
A throw delay is a delay that applies only to specific words or phrases, often at ends of lines:
1. Automate the delay send to be silent most of the time
2. Briefly open the send on the last word of a phrase ("love", "tonight", "forever")
3. The word echoes into the next section naturally

**Modulation Effects**
- **Chorus:** Duplicates the signal with slight pitch/time variation. Creates perceived width and thickness. Use subtly on leads (slow rate 0.3–0.8 Hz, small depth).
- **Flanger:** More intense version of chorus. Jet-plane effect at extreme settings. Creative use: add to backing vocal stacks.
- **Vibrato:** Periodic pitch modulation. Can be used creatively (old cassette vibe) or subtly on long notes.
- **Tremolo:** Volume modulation. Creates wavering, vintage effect. Use on specific phrases, not the whole vocal.

**Creative Processing: Signature Effects**
- **Vocoder:** Synthesizer voiced by the singer's pitch. Daft Punk's "Get Lucky," Imogen Heap.
- **Formant shifting:** Change vowel character without changing pitch. Make voice larger (bass) or smaller (chipmunk).
- **Telephone/radio filter:** High-pass at 300 Hz, low-pass at 3.5 kHz. Bandpass + distortion. Used for verses in contrast with clean choruses.
- **Pitch shifting harmonies:** Real-time pitch shift (+3, +7, +12 semitones) for instant harmony.
        `
      }
    ]
  },
  
  learningObjectives: [
    "Master professional vocal production techniques",
    "Understand the complete vocal workflow from recording to mixing",
    "Apply genre-specific vocal processing approaches",
    "Develop critical listening skills for vocal production",
    "Create commercial-quality vocal recordings"
  ],
  
  messages: applyMessagePreset("default", {
    initial: "Complete this vocal production lesson to advance.",
    success: "Excellent! You've mastered Vocal Effects & Processing. Your vocal productions are pro-level!",
    error: "Review the vocal production concepts and try again.",
    alreadyCompleted: "You've completed this vocal technique. Keep refining your skills!"
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
