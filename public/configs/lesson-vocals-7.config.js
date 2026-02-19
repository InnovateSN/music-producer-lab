/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 7 - Vocal Doubling & Layering
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-7-progress",
  lessonNumber: 7,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-8.html",
  prevLessonUrl: "lesson-vocals-6.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Vocals" }),
    title: "Vocal Doubling & Layering:",
    titleHighlight: "Create Thick, Wide Vocals",
    subtitle: "Master doubling techniques, harmonies, and layering for professional vocal productions. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Vocal Doubling & Layering",
    description: "Master doubling techniques, harmonies, and layering for professional vocal productions. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Vocal Doubling: Creating Thickness and Width',
        content: `
**What Is Vocal Doubling?**
Doubling means recording the same line twice and layering both recordings. The slight natural differences in timing (1–20ms) and pitch (a few cents) between performances create a thickening effect—the brain perceives one wide, rich sound rather than two separate vocals.

**Natural Double vs. ADT**
- **Natural double:** Singer records the same line again. Best result: natural performance variation creates convincing thick sound. Requires strong pitch accuracy between takes.
- **ADT (Automatic Double Tracking):** Plugin or effect copies the signal and adds slight pitch variation and delay (10–40ms). Faster but sounds less organic. H-Doubler (Waves), SoundShifter, or the "doubler" preset in many chorus plugins.

**Stereo Placement**
- **Center:** Keep the main lead vocal in mono, dead center. Anchors the mix.
- **Hard pan doubles L/R:** Double 1 at -80%, Double 2 at +80% (or 100% each direction). Creates wide stereo field.
- **Mid-width doubles:** Pan slightly wider than center (-40%, +40%). Less extreme—useful when the mix is already very wide.

**Pitch and Timing Relationship**
- Doubles must be close enough in pitch to blend, but not so perfect they add no thickness.
- Target: within ±10–20 cents of the original. Within ±5 cents and they cancel each other slightly. Beyond ±25 cents they sound like a noticeable second voice.
- Timing: 1–30ms offset between layers. Less than 5ms = comb filtering (thin, hollow sound). More than 30ms = audible echo effect.

**Tight vs. Loose Doubles**
- **Tight doubles (pop, EDM):** Very similar timing and pitch. Almost mono. Adds density without spread.
- **Loose doubles (indie, rock):** More performance variation. Wider, more human sound.

**Triple-Tracking**
Record a third take for an even wider, denser sound:
- Take 1: Center (mono, main vocal)
- Take 2: Left (-70%)
- Take 3: Right (+70%)
Thicker than standard doubling. Used in rock, heavy metal, and big pop choruses.
        `
      },
      {
        title: 'Stereo Widening and Spatial Processing for Vocals',
        content: `
**Mono-First Rule**
Always check your doubled/widened vocals in mono before finalizing. Wide stereo sounds impressive in speakers but collapses in mono. Restaurants, clubs, phones, and many streaming environments sum to mono. If the vocal disappears or goes thin in mono, you have phase issues.

**Haas Effect**
Add a short delay (1–40ms) to only one side of a doubled vocal layer. This creates perceived width without pitch variation. The ear interprets short time differences as spatial positioning, not two separate sources.

**Mid-Side Processing**
Separate the Mid (mono center) from the Side (stereo width) signal:
- Boost the Side component's high frequencies to add air and width to doubles
- Cut the Side component's low frequencies to keep the bass mono and focused
- Process Mid and Side independently for surgical stereo control

**Widening Plugins**
- **Ozone Imager:** Stereoize, expand or narrow specific frequency ranges
- **Waves S1 Stereo Imager:** Classic width tool, mono-check button built in
- **Logic's Direction Mixer:** Built-in, simple width control per track

**Common Width Mistakes**
- Over-widening a single mono vocal track (creates phase issues, sounds fake in mono)
- Widening low frequencies (causes muddy, unfocused bass problems)
- Not mono-checking (sounds great in headphones, disappears in club sound system)

**Vocal Layer Mix Levels**
Balance formula for lead + doubles:
- Lead (center): 0 dB (reference level)
- Doubles (L+R): -6 to -12 dB below lead
- Harmonies: -8 to -16 dB below lead
- Backing stacks: -12 to -20 dB below lead

The lead must always be audibly dominant. Doubles support, they don't compete.
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
    success: "Excellent! You've mastered Vocal Doubling & Layering. Your vocal productions are pro-level!",
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
