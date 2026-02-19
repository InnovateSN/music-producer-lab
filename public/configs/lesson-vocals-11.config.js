/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 11 - Advanced Vocal Mixing
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-11-progress",
  lessonNumber: 11,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-12.html",
  prevLessonUrl: "lesson-vocals-10.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Vocals" }),
    title: "Advanced Vocal Mixing:",
    titleHighlight: "Automation & Parallel Processing",
    subtitle: "Master automation, parallel processing, and advanced techniques for radio-ready vocals. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Advanced Vocal Mixing",
    description: "Master automation, parallel processing, and advanced techniques for radio-ready vocals. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Vocal Automation: Riding the Performance',
        content: `
**Why Automation Is Essential**
Even with compression, a vocal will have moments that are too loud or too quiet for the mix. Automation is the final step in taming dynamics—and the difference between an amateur mix and a professional one is often the level of automation detail applied to the lead vocal.

**Volume Automation (Vocal Ride)**
The primary automation technique. Listen to the vocal in the context of the full mix and manually draw or record fader movements:
- Boost: Quieter words, important consonants, line endings that trail off
- Cut: Over-compressed pumping peaks, sudden loud syllables, sibilant bursts

**Automation Resolution**
Different levels of detail serve different purposes:
- **Section-level:** +2 dB in the chorus overall. Broad strokes for song structure.
- **Phrase-level:** -1 dB on "because" (too loud in this line). Mid-detail.
- **Word-level:** Trim specific words that sit above the average. Fine detail.
- **Syllable-level:** Tame individual consonant blasts ("T," "K," "P" attacks). Surgical.

**Clip Gain vs. Volume Automation**
Two approaches for detailed rides:
- **Clip gain:** Adjust the audio clip's level before it hits any plugins. Affects what the compressor "sees" — use for corrective gain matching between comp sections.
- **Volume automation (fader):** Happens after all plugin processing. Use for post-processing ride and musical expression.

**Breath and Gap Automation**
Automate the volume of breaths and inter-phrase silence:
- Reduce breath volume by 6–12 dB (don't delete — sounds unnatural)
- During silences between phrases, automate volume to -∞ or -20 dB to eliminate room noise bleeding through

**MIDI vs. Written Automation**
- Write mode (live fader moves): Natural feel, fast to record
- Pencil/draw mode: Precise, repeatable, easier to correct
Mix both: write broad strokes in real-time, refine with draw mode.
        `
      },
      {
        title: 'Parallel Processing for Vocal Power and Character',
        content: `
**Parallel Compression on Vocals**
Standard insert compression can make vocals consistent but lifeless. Parallel compression blends the compressed signal with the uncompressed original:
- **Result:** Compressed body and sustain + uncompressed transient punch
- **Ratio:** 8:1–20:1 on the parallel chain (heavy)
- **GR:** 10–20 dB (aggressive — this is the saturated parallel signal)
- **Makeup gain:** +12–18 dB
- **Blend:** 20–40% of parallel into the dry signal

**NY Compression on Vocals**
Send the vocal bus to a dedicated compression bus:
1. Create "Vocal Parallel" bus
2. Apply UA 1176 (All-Buttons mode) or VCA-style limiter
3. Heavy limiting (-20 dB GR)
4. Route original vocal + parallel at 70:30 ratio
5. The blend adds density and excitement on peaks without squashing the overall performance

**Parallel Saturation**
Add harmonic richness without destroying dynamics:
1. Create "Vocal Saturation" bus
2. Apply tape or tube saturation (iZotope Vinyl, Waves J37, Softube Tube-Tech)
3. High-pass filter the saturation bus at 200 Hz (avoid muddy lows)
4. Blend 10–25% into the dry vocal
5. Result: Warm, full harmonic richness behind the natural vocal

**Parallel Reverb (Advanced)**
Beyond simple reverb sends, process the reverb return:
- Compress the reverb return (4:1, 20ms attack, 150ms release) to control bloom
- High-pass at 200 Hz, low-pass at 8 kHz to keep reverb focused in the midrange
- Automate reverb send level (more in verse, less in dense chorus)

**Parallel Processing Bus Layout**
Main vocal track → Insert processing (EQ, comp, de-ess)
                  → Send 1: Reverb bus (plate)
                  → Send 2: Delay bus (quarter-note)
                  → Send 3: Parallel compression bus
                  → Send 4: Parallel saturation bus
All buses → Vocal master bus → Mix bus
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
    success: "Excellent! You've mastered Advanced Vocal Mixing. Your vocal productions are pro-level!",
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
