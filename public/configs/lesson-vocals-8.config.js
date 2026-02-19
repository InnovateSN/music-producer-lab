/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 8 - Harmony & Backing Vocals
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-8-progress",
  lessonNumber: 8,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-9.html",
  prevLessonUrl: "lesson-vocals-7.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Vocals" }),
    title: "Harmony & Backing Vocals:",
    titleHighlight: "Arrange & Produce Vocal Stacks",
    subtitle: "Arrange and produce harmony vocals, ad-libs, and background vocal stacks. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Harmony & Backing Vocals",
    description: "Arrange and produce harmony vocals, ad-libs, and background vocal stacks. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Vocal Stacking: Arrangement and Layering Technique',
        content: `
**What Are Vocal Stacks?**
A vocal stack is multiple vocal layers singing the same or complementary parts to create a choir-like, dense texture. Used in gospel, R&B, pop, and modern EDM to fill space in the arrangement and create emotional impact in key sections.

**Types of Vocal Layers**
- **Lead:** Single main voice, center, most prominent
- **Doubles:** Same line, slight pitch/timing variation (see Lesson 7)
- **Harmonies:** Same rhythm as the lead but different pitch (3rd above, 5th below, etc.)
- **Octave doubles:** Same line, one octave up or down
- **Ad-libs:** Improvised responses, fills, and embellishments (more rhythmically free)
- **Choir stack:** Many voices singing the same chord tones, layered thick

**Building a Harmony**
Most vocal harmonies use intervals from the chord progression:
- **+3rd:** Sings the note a diatonic 3rd above the lead. Bright, supportive, most common.
- **+5th:** A 5th above. Powerful, used in gospel and country.
- **-3rd:** A 3rd below the lead. Darker harmony.
- **-5th:** A 5th below. Very rich, used in R&B (think Destiny's Child).

**Arranging the Stack**
Think of vocal stacks like orchestration:
- **Verse:** Lead only or lead + one subtle harmony (intimacy)
- **Pre-chorus:** Add doubles. Energy begins building.
- **Chorus:** Full stack — lead + doubles + harmonies + octave double. Maximum density.
- **Post-chorus:** Reduce to lead + one layer. Or use only the choir on a hook hook.
- **Breakdown/Bridge:** Often solo lead or minimal stack for contrast.

**Diatonic Stacking**
Map out the chord tones for each note of the melody to find natural harmonies:
- In C major, if the melody hits E: harmonies could be G (3rd), C (5th below), B (7th)
- If the chord is Am7 and the melody hits A: C (minor 3rd), E (5th), G (7th)
Use the chord tones first; passing tones come next.
        `
      },
      {
        title: 'Mixing and Processing Vocal Stacks',
        content: `
**Bus Processing for Stacks**
Route all backing vocal tracks to a single bus (stems bus approach):
1. Individual tracks for fine-tuning per voice
2. Stack bus for shared processing (group EQ, compression, reverb)
3. Master vocal bus (lead + stack combined)

**EQ for Stack Clarity**
Stacks and backing vocals compete with the lead. EQ the stacks to make space:
- High-pass filter backing vocals at 200–400 Hz (remove low-mid warmth that overlaps with lead)
- Cut 3–5 kHz slightly (presence range, where leads need to cut through)
- This makes stacks sound "behind" the lead without losing them

**Compression for Stack Glue**
Apply glue compression on the vocal stack bus:
- Ratio: 2:1–4:1
- Attack: 30–80ms (let initial transients breathe through)
- Release: 150–300ms (slow enough to maintain cohesion)
- GR: 2–4 dB (light glue, not heavy squash)
- Character: Use an SSL-style bus compressor for "glue" feel

**Reverb for Stacks**
Backing stacks can use more reverb than the lead to push them "behind" in the 3D space:
- Lead: Short plate, 15% wet, 20ms pre-delay
- Stacks: Longer hall or plate, 25–35% wet, 35ms pre-delay
- The longer pre-delay on stacks makes them feel spatially farther from the listener

**Automation: Ride the Stack**
Even with perfect levels set, automation is needed:
- Bring stacks slightly forward in the hook (loudest moment of chorus)
- Pull stacks back during the lead's most expressive phrases (let emotion breathe)
- Use volume automation rather than fader rides for reproducibility

**Pan Distribution**
For a 4-voice harmony stack:
- Voice 1 (soprano): +60%
- Voice 2 (alto): +30%
- Voice 3 (tenor): -30%
- Voice 4 (baritone): -60%
This creates a natural choir spread. The center remains open for the lead vocal.
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
    success: "Excellent! You've mastered Harmony & Backing Vocals. Your vocal productions are pro-level!",
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
