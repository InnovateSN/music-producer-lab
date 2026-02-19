/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 2 - Vocal Recording Techniques
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-2-progress",
  lessonNumber: 2,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-3.html",
  prevLessonUrl: "lesson-vocals-1.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Vocals" }),
    title: "Vocal Recording Techniques:",
    titleHighlight: "Mic Technique & Multiple Takes",
    subtitle: "Master proper microphone technique, gain staging, and capturing multiple takes for comping. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Vocal Recording Techniques",
    description: "Master proper microphone technique, gain staging, and capturing multiple takes for comping. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'The Proximity Effect and Microphone Distance',
        content: `
**What Is the Proximity Effect?**
Directional microphones (cardioid, hypercardioid) exhibit increased bass response as the sound source moves closer. This is the proximity effect. At 6 inches: neutral response. At 1–2 inches: bass boost of 6–12 dB at low frequencies (below 200 Hz). This creates the warm, intimate sound of radio voices and ASMR—but can also create boomy, indistinct vocals.

**Using the Proximity Effect Creatively**
- **Pop vocals:** 6–10 inches, slightly off-axis. Neutral tone, balanced.
- **Intimate/lo-fi:** 2–4 inches, cardioid. Exaggerated warmth and proximity.
- **Bright, airy:** 12–18 inches. Bass naturally rolls off, highs more prominent.
- **Dynamic range issues:** Singers who move in and out vary their proximity, causing tonal and level inconsistency. Use compression to tame.

**Pop Filters and Plosives**
Plosives (P, B, T) create low-frequency bursts that overload capsules and cause clipping. Solutions:
1. **Pop filter:** Fabric or metal mesh screen 2–3 inches in front of mic
2. **Off-axis positioning:** Aim mic at forehead/chin rather than directly at lips
3. **Foam windscreen:** Reduces plosives and breath noise, slight HF loss

**Mic Height and Angle**
- Aim capsule toward the top of the head or hairline (not mouth center) for less sibilance
- Slight downward angle reduces proximity effect
- Singer should look slightly up (opens throat, improves tone) rather than looking down at a low mic

**Headphone Monitoring**
Singers need to hear themselves during recording. Closed-back headphones (not open-back) are essential to prevent bleed into the mic. Level: loud enough to feel confident, quiet enough to hear pitch naturally. Pitch correction from headphone volume is common—singers sing flat when monitoring too loud.
        `
      },
      {
        title: 'Multiple Takes Strategy: Comping and Session Management',
        content: `
**Why Record Multiple Takes?**
A professional vocal is rarely a single take. Even elite singers comp (compile from multiple takes). The goal: capture the best phrasing, pitch, timing, emotion, and pronunciation from multiple attempts, then edit the best moments together.

**The Three-Take Minimum Rule**
Record at minimum 3 complete takes of each section before comping. More takes = more raw material. Once you have 6–8 takes, the law of diminishing returns sets in—focus instead on specific problem phrases.

**Punch-In Recording**
Fix specific problem lines without re-recording the full take:
1. Set pre-roll (4 bars before the problem section)
2. Arm the track, prepare the singer
3. Record just the problem phrase
4. Compare with original and choose the better version

**Folder Tracks and Comp Lanes**
Most DAWs offer comp lanes (Logic Pro), take lanes (Pro Tools), or comping tracks (Ableton/Reaper):
- Each take sits on its own lane
- Drag to select the best phrase per lane
- DAW assembles the composite automatically

**Performance Notes**
Use markers or a text document to note which takes have specific qualities:
- "Take 3 — Bridge best, chorus pitch off"
- "Take 5 — Emotionally best, verse timing late"
- "Take 7 — Best pitch accuracy throughout"
This avoids listening back blindly through every take.

**Warm-Up Strategy**
Never use the first recording as the keeper. The singer needs warm-up takes to:
- Settle into pitch and tone
- Relax performance anxiety
- Internalize the track tempo
First take is reference material only. Best takes usually arrive at takes 3–6.
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
    success: "Excellent! You've mastered Vocal Recording Techniques. Your vocal productions are pro-level!",
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
