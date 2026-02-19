/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 1 - Vocal Recording Setup
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-1-progress",
  lessonNumber: 1,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-2.html",
  prevLessonUrl: "lesson-mixing-15.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Vocals" }),
    title: "Vocal Recording Setup:",
    titleHighlight: "Microphone Choice & Room Treatment",
    subtitle: "Choose the right microphone, optimize your recording space, and capture clean vocal takes. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Vocal Recording Setup",
    description: "Choose the right microphone, optimize your recording space, and capture clean vocal takes. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Microphone Types: Condenser, Dynamic, and Ribbon',
        content: `
**Large-Diaphragm Condenser (LDC)**
The industry standard for studio vocals. LDCs capture a wide frequency range with high sensitivity—they pick up detail, air (12–16 kHz shimmer), and subtle nuances in performance. Require 48V phantom power. Ideal for: pop, R&B, country, singer-songwriter, and any style where polish is the goal.

**Small-Diaphragm Condenser (SDC)**
Brighter, faster transient response, often more accurate. Less common for vocals but excellent for capturing acoustic guitar and overheads simultaneously when a singer-songwriter records live. Less proximity effect than LDC.

**Dynamic Microphone**
Robust, handles high SPL without distortion, naturally rejects room noise. Shure SM7B is the modern go-to for podcasts, rap, and rock vocals. Does NOT require phantom power. Ideal when: room is untreated, singer is loud, or you want a drier, more immediate sound.

**Ribbon Microphone**
Figure-8 polar pattern, very smooth high-frequency response, natural-sounding on harsh voices. Fragile—never apply phantom power to passive ribbons. Used for: jazz, blues, vintage pop. Rejection from sides makes it great for room ambience control.

**Polar Patterns**
- **Cardioid** — Front pickup, rejects rear. Best for solo vocals in untreated rooms.
- **Hypercardioid/Supercardioid** — Tighter front pickup, slight rear lobe. More bleed rejection at cost of positioning precision.
- **Figure-8** — Front + rear, perfect side rejection. Used for Blumlein stereo and duet face-to-face recording.
- **Omnidirectional** — Even pickup all around. No proximity effect. Used for room ambience or when you want natural space.
        `
      },
      {
        title: 'Room Treatment: From DIY to Professional',
        content: `
**Why Room Acoustics Matter**
A microphone captures everything in the room—reflections, flutter echo, HVAC hum, and standing waves. These artifacts are baked into the recording and are nearly impossible to remove cleanly in post. Treatment is prevention.

**The Problem with Untreated Rooms**
- **Parallel walls** create flutter echo (rapid slap between surfaces)
- **Room modes** cause certain bass frequencies to build up or cancel
- **Early reflections** reach the mic 10–50ms after the direct sound, creating comb filtering
- **Reverberant tail** adds a boxy, amateur quality to the recording

**DIY Treatment Options (Low Budget)**
- **Wardrobe/closet:** Hang clothes densely around the singer. Fabric absorbs mid-high frequencies.
- **Moving blankets:** Hang on stands behind the singer and behind the mic stand.
- **Reflection filter:** Portable curved acoustic panel that mounts on the mic stand. Reduces rear reflections at the mic position.
- **Corner bass traps:** Stacked bass trap panels in corners to reduce low-frequency buildup.

**Professional Treatment**
- **Broadband absorbers** (4-inch rockwool): Cover 25–30% of wall surface area at primary reflection points.
- **Diffusers:** Scatter reflections rather than absorb them. Used to add life without flutter echo.
- **Cloud panel:** Ceiling-mounted absorber directly above the recording position.

**Quick Test**
Clap sharply near the recording position and listen. A clean, dead "thock" = well treated. A ringy, metallic "tshhhh" = needs treatment. A long roomy decay = very untreated room.

**Signal Chain Order**
Instrument → Microphone → Preamp (or interface preamp) → Analog-to-Digital Converter → DAW
Keep cable runs short. Use balanced XLR cables. Ground the interface properly to avoid hum.
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
    success: "Excellent! You've mastered Vocal Recording Setup. Your vocal productions are pro-level!",
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
