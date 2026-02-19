/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 3 - Vocal Editing Fundamentals
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-3-progress",
  lessonNumber: 3,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-4.html",
  prevLessonUrl: "lesson-vocals-2.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Vocals" }),
    title: "Vocal Editing Fundamentals:",
    titleHighlight: "Clean Up & Comp Your Recordings",
    subtitle: "Remove breaths, pops, and noise. Learn comping workflow and timing adjustments. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Vocal Editing Fundamentals",
    description: "Remove breaths, pops, and noise. Learn comping workflow and timing adjustments. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'The Art of Comping: Building the Perfect Vocal',
        content: `
**What Is Comping?**
Comping (short for compositing) is the process of assembling multiple vocal takes into one seamless final performance. You listen to each take, identify the best phrase, word, or note, then splice them together. The result should sound like one continuous, natural performance—but optimized for pitch, timing, and emotion.

**Phrase-Level vs. Word-Level Comping**
- **Phrase comping:** Select the best complete musical phrase (e.g., "I need your love tonight") per take. Fastest, maintains natural phrasing and breathing.
- **Word-level comping:** Select individual words from different takes. More control but risks unnatural transitions if not carefully crossfaded.
- **Syllable comping:** Used sparingly for problem consonants or specific pitch issues. Always crossfade.

**Crossfades: The Key to Invisible Edits**
Every comp edit needs a crossfade to avoid clicks, pops, and unnatural transitions:
- **Duration:** 5–30ms for word edits, 50–200ms for phrase transitions
- **Shape:** Equal-power (constant power) crossfade for most vocal edits
- **Zero-crossing:** Ideally start/end crossfades at zero-crossing points in the waveform

**Common Comping Mistakes**
- Cutting in the middle of a breath (sounds artificial)
- Not matching room tone between takes (subtle difference in background noise)
- Over-comping (changing so many words the performance loses emotional continuity)
- Not listening to the comp in context of the full track (solo listening misleads)

**Workflow: A Proven System**
1. Listen to all takes end-to-end without stopping
2. Rate each take by section (A=great, B=usable, C=backup)
3. Start with the best complete take as your base
4. Replace only sections that are clearly inferior to alternatives
5. Render/bounce the comp to a single audio file before further editing
        `
      },
      {
        title: 'Noise Reduction, Breath Editing, and Cleanup',
        content: `
**Breath Editing**
Breaths are part of a natural performance—removing all of them sounds robotic. The standard approach:
- **Keep:** Breaths before phrases that add to emotional delivery
- **Reduce:** Very loud or distracting breaths (volume-automate down by 6–12 dB rather than deleting)
- **Remove:** Only accidental breath blasts or mic handling noise

**Noise Reduction Tools**
- **iZotope RX:** Industry standard. Spectral repair, dialogue isolation, de-hum, de-click
- **Accusonus ERA:** Simpler de-noiser for quick cleanup
- **Steinberg SpectraLayers:** Spectral editor built into Cubase

**iZotope RX Workflow:**
1. Select 1–2 seconds of room tone (silence between phrases)
2. "Learn" the noise profile (RX → Noise Reduction → Learn)
3. Apply at 30–50% reduction (less is more—heavy reduction creates artifacts)
4. Check: solo on a vocal phrase and listen for water-gurgling artifacts (artifact of over-correction)

**De-Clicking**
Mouse clicks, mouth clicks, saliva sounds: use RX De-click or manual spectral repair. Saliva clicks appear as sharp, short transients in the mid-high frequencies. In RX spectral view: they show as bright vertical lines you can paint out precisely.

**Room Tone Matching**
When comping takes recorded on different days or with different room setups, the background noise "floor" may differ subtly. Fade between noise floors at edit points using short (20–50ms) fades on the noise, or use iZotope RX Ambience Match to normalize room tone across takes.

**Timing Cleanup**
After comping, audio segments may sit slightly ahead or behind the beat:
1. Enable snapping to grid (8th or 16th notes)
2. Slide individual comp segments ±10–30ms to align with beat
3. Use warp tools (Ableton), Flex Time (Logic), or Elastic Audio (Pro Tools) for fine-grained timing adjustment without cutting
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
    success: "Excellent! You've mastered Vocal Editing Fundamentals. Your vocal productions are pro-level!",
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
