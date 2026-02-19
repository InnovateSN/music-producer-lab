/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 10 - Genre-Specific Vocal Production
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-10-progress",
  lessonNumber: 10,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-11.html",
  prevLessonUrl: "lesson-vocals-9.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Vocals" }),
    title: "Genre-Specific Vocal Production:",
    titleHighlight: "Hip-Hop, Pop, R&B, Electronic",
    subtitle: "Learn vocal production approaches for different genres and styles. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Genre-Specific Vocal Production",
    description: "Learn vocal production approaches for different genres and styles. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Genre-Specific Vocal Production: Hip-Hop, Pop, R&B, Electronic',
        content: `
**Hip-Hop Vocal Production**

The goal in hip-hop is maximum intelligibility and presence. Vocals must compete with hard-hitting 808s and punchy drums.

- **Recording:** Dynamic mic (SM7B) or condenser close-miked. Minimal room.
- **Tuning:** Depends on sub-genre — melodic trap uses heavy tuning; conscious/boom-bap uses minimal.
- **EQ:** High-pass at 80 Hz, cut 400 Hz (mud), boost 1.5–3 kHz (presence, articulation).
- **Compression:** Fast attack (3–5ms), fast release (20–40ms). Hard compression for consistent punch. Ratio 6:1–8:1.
- **Reverb:** Minimal — short room reverb (0.3s) or none for a dry, upfront sound.
- **Width:** Lead vocal mono/center. Ad-libs can be panned slightly for space.
- **Reference:** Kendrick Lamar (precision, dynamics), Travis Scott (atmospheric effects), Drake (warm presence).

**Pop Vocal Production**

Pop aims for polished perfection — pristine, present, and commercially ready.

- **Recording:** LDC condenser in a treated room. Multiple takes for comping.
- **Tuning:** Auto-Tune standard. Retune speed 20–50ms.
- **EQ:** Cut 250 Hz (boxiness), boost 3 kHz (presence), boost 12 kHz (air).
- **Compression:** Two stages: 1) Opto-style (2:1 slow) for natural leveling, 2) VCA-style (6:1 fast) for consistency.
- **De-Esser:** Always. 7 kHz range.
- **Reverb:** Short plate (0.8–1.2s). 15–20% wet with pre-delay.
- **Reference:** The Weeknd, Ariana Grande, Taylor Swift.

**R&B / Neo-Soul Vocal Production**

R&B prioritizes warmth, smoothness, and harmonic richness.

- **Recording:** LDC condenser, cardioid. Room slightly wetter than pop (a little natural space is fine).
- **Tuning:** Melodyne for transparent correction. Preserve vibrato and ornamentation.
- **EQ:** Preserve 200 Hz warmth (don't over-cut). Subtle presence boost (2.5 kHz).
- **Compression:** Slower attack (15–25ms), moderate ratio (3:1–4:1). Opto-style for smooth character.
- **Parallel compression:** 30–40% blend for body and sustain.
- **Reverb:** Plate or hall, 20–30% wet. More reverb than pop — sense of space matters.
- **Reference:** Frank Ocean, SZA, Daniel Caesar.
        `
      },
      {
        title: 'Electronic Vocal Production: EDM, House, and Experimental',
        content: `
**EDM and House Vocal Production**

EDM vocals are often the hook that makes a track recognizable. They need to cut through loud, dense electronic arrangements.

- **Recording:** Clean condenser recording (dryness is important).
- **Tuning:** Heavy Auto-Tune is stylistic and expected. Hard-tune (retune speed 0) for robotic feel.
- **Processing Chain:** High-pass → EQ → Hard compression → Saturation → Master limiter.
- **Saturation:** More aggressive than pop (2–5%). Adds harmonic density to compete with dense synths.
- **Reverb:** Often more generous (20–35% wet) with a long pre-delay. Vocals float above the mix.
- **Width:** Heavily doubled and widened. Lead + two wide doubles is standard.
- **Effects chain:** Throw delays, filter sweeps, pitch automation for build-up sections.

**DJ Drop / Vocal Sample Technique**

Short vocal phrases ("Let the music play," "Move your body") looped and transformed:
1. Record short declarative phrases
2. Time-stretch to grid alignment
3. Apply heavy saturation and bit-crushing
4. Filter sweep (automated low-pass opening) for build effect
5. Pitch-shift for variation

**Experimental Vocal Texture**

Breaking convention to create unique sonic signatures:
- **Granular synthesis:** Stretch vocals into ambient pads using Ableton's Granulator II or Output Portal
- **Spectral freezing:** Freeze a vowel's spectral snapshot into a sustained tone
- **Convolution sampling:** Use the vocal recording as an impulse response — convolve other sounds through it
- **Reverse vocals:** Natural in isolation, as effects on transitions, or time-aligned (record backwards while singing backwards)

**Dry/Wet Contrast for Arrangement Impact**
Use vocal effect automation to differentiate sections:
- **Verse:** Dry, close vocal (mono, minimal effects)
- **Chorus:** Wet, wide, doubled vocal (full effects chain)
- **Breakdown:** Heavily processed, atmospheric, filtered
- **Build-up:** Glitched, stutter-edited, pitch-ramped
This wet/dry contrast is one of the most powerful arrangement tools in electronic music.
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
    success: "Excellent! You've mastered Genre-Specific Vocal Production. Your vocal productions are pro-level!",
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
