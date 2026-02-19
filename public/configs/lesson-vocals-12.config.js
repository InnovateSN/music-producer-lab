/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 12 - Masterclass: Complete Vocal Production
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-12-progress",
  lessonNumber: 12,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-mastering-1.html",
  prevLessonUrl: "lesson-vocals-11.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Vocals" }),
    title: "Masterclass: Complete Vocal Production:",
    titleHighlight: "From Recording to Final Mix",
    subtitle: "Final project: record, edit, tune, and mix a complete vocal production from scratch. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Masterclass: Complete Vocal Production",
    description: "Final project: record, edit, tune, and mix a complete vocal production from scratch. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'From Recording to Final Mix: The Complete Vocal Production Workflow',
        content: `
**The Full Vocal Production Lifecycle**

A professional vocal production follows a consistent sequence. Skipping stages or working out of order creates problems that are harder to fix later.

**Stage 1: Pre-Production**
- Define vocal style and reference tracks with the artist
- Choose microphone and signal chain based on voice type
- Set recording levels and monitor blend
- Establish key and tempo

**Stage 2: Recording Session**
- Record 3–8 complete takes per section
- Punch-in on specific problem phrases
- Capture vocal-only takes (no backing track) for sampling flexibility
- Record ad-libs separately from composed melody

**Stage 3: Editing**
- Comp from best takes (phrase level first, word level as needed)
- Noise removal (iZotope RX or equivalent)
- Breath editing (reduce, don't delete)
- Timing correction (nudge clips to grid if needed)
- Phase alignment on doubles

**Stage 4: Pitch Correction**
- Apply Melodyne or Auto-Tune correction pass
- Check for over-correction artifacts (bypass and compare)
- Maintain vibrato and expression

**Stage 5: Processing**
- Apply full signal chain (EQ → Comp → De-ess → Saturation → Reverb → Delay)
- Set up parallel processing sends
- Automate vocal level (volume ride)

**Stage 6: Mixing**
- Balance lead vocal against the full mix
- EQ vocals in context (not soloed)
- Adjust reverb/delay wet levels in context
- Sidechain compress competing elements (guitars, synth pads) to duck slightly under vocals

**Stage 7: Final QC**
- Listen in mono (phone speaker or mono summed mix)
- Check on headphones and speakers
- Compare to reference track
- A/B before and after all processing
- Bounced stem test: solo the vocal stem, does it sound professional alone?
        `
      },
      {
        title: 'Vocal in the Mix: Sidechain, Ducking, and Frequency Space',
        content: `
**The Vocal Must Win**
In popular music, the vocal is almost always the most important element. Every mix decision should support the vocal's intelligibility and emotional impact.

**Creating Frequency Space for Vocals**
The vocal lives primarily in the 200 Hz–8 kHz range. Elements that compete in this range need to be managed:
- **Guitars:** Cut 1–3 kHz slightly on guitar bus (where vocals cut through). Use the "guitar hole" technique.
- **Synth pads:** High-pass at 300–500 Hz to remove mid warmth that clashes with vocal body.
- **Piano:** Cut 500–800 Hz on piano to reduce nasal quality that competes with vocal body.
- **Lead synths:** Automate volume automation to duck during vocal phrases.

**Sidechain Ducking**
Use a vocal sidechain signal to gently duck competing elements:
1. Take a duplicate of the vocal bus (or use a sidechain send from the vocal)
2. Route this as sidechain input to compressors on competing tracks (guitars, pads, piano)
3. Ratio: 2:1, attack 20ms, release 200ms, threshold: triggers only when vocal is loud
4. GR: 1–3 dB (subtle) — listener feels clarity without hearing pumping

**De-Masking**
Masking occurs when two sounds share the same frequencies at similar levels — one hides the other. Solutions:
- **Temporal masking:** Start the competing element slightly later than the vocal phrase
- **Frequency masking:** EQ a notch in competing elements at the vocal's most important frequency (typically 2–3 kHz)
- **Dynamic masking:** Automate or sidechain the competing element to drop slightly during vocal

**Low-End Management**
Vocals have fundamental pitch content in the 80–250 Hz range for most voices:
- High-pass at 80–100 Hz (remove sub rumble, plosive energy)
- Leave 100–200 Hz intact for warmth and body
- Don't over-cut lows on male vocals — can make them sound thin

**Vocal Bus Final Processing**
After all individual vocal tracks are balanced:
- Vocal master bus: light bus compression (2:1, 40ms attack, slow release, 2–3 dB GR)
- Surgical EQ correction for the combined stack
- Limiter ceiling (-1 dBTP) before stem export
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
    success: "Excellent! You've mastered Masterclass: Complete Vocal Production. Your vocal productions are pro-level!",
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
