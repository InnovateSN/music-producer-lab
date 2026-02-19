/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 15 - Advanced Hi-Hat Techniques
 * 
 * Master open/closed hi-hat patterns, rolls, crescendos, and pedal hi-hat techniques
 * for dynamic, expressive grooves.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-15-progress",
  lessonNumber: 15,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 7,
  
  nextLessonUrl: "lesson-drums-16.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-15", categoryLabel: "Drums & Rhythm" }),
    title: "Advanced Hi-Hat",
    titleHighlight: "Techniques",
    subtitle: "Transform your hi-hats from static timekeepers into <strong>dynamic, expressive elements</strong>. Learn <strong>open/closed hat patterns</strong> that breathe, <strong>hi-hat rolls</strong> for buildups, <strong>crescendos</strong> that add tension, and <strong>pedal hi-hat</strong> techniques for foot-controlled accents. These techniques separate amateur beats from professional grooves—the difference between robotic and human feel."
  },
  
  sequencer: {
    tempo: 110,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 110
  },
  
  exercise: {
    title: "Build Open/Closed Hi-Hat Pattern",
    description: "Create a groove with <strong>closed hi-hats on 8th notes</strong> and <strong>open hi-hats on accents</strong>. The open hats ring longer, creating rhythmic emphasis and dynamic contrast. This technique is essential for house, techno, funk, and rock grooves.",
    tip: "Open hats should be louder (velocity 110-127) than closed hats (velocity 70-90) to cut through the mix. The contrast is what creates the groove!",
    steps: [
      { text: "<strong>Set tempo to 110 BPM</strong>." },
      { text: "<strong>Kick:</strong> Steps 1, 5, 9, 13 (four on the floor)." },
      { text: "<strong>Snare:</strong> Steps 5, 13 (backbeat)." },
      { text: "<strong>Closed Hi-Hat:</strong> All 16 steps (16th notes), velocity 75." },
      { text: "<strong>Open Hi-Hat:</strong> Steps 4, 12 (before snares), velocity 115." },
      { text: "<strong>Listen:</strong> The open hats create accents that drive the groove forward." }
    ]
  },
  
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Four on the floor kick pattern.",
      patternHint: { enabled: true, note: "Kick: 1, 5, 9, 13" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [4, 12],
      instructionText: "Backbeat on 2 and 4.",
      patternHint: { enabled: true, note: "Snare: 5, 13" }
    },
    {
      id: "hihat",
      label: "Closed HH",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      targetVelocities: { 0:75, 1:75, 2:75, 3:75, 4:75, 5:75, 6:75, 7:75, 8:75, 9:75, 10:75, 11:75, 12:75, 13:75, 14:75, 15:75 },
      instructionText: "16th note closed hi-hats, velocity 75.",
      patternHint: { enabled: true, note: "All 16 steps, vel 75" }
    },
    {
      id: "openhat",
      label: "Open HH",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [3, 11],
      targetVelocities: { 3: 115, 11: 115 },
      instructionText: "Open hi-hats on steps 4 and 12, velocity 115.",
      patternHint: { enabled: true, note: "Steps 4, 12, vel 115" }
    }
  ],
  
  theory: {
    sections: [
      {
        title: "Hi-Hat Techniques Explained",
        content: `
**Open vs. Closed Hi-Hats:**
- **Closed:** Short, tight sound (chick). Acts as timekeeper, usually quieter.
- **Open:** Ringing, sustained sound (tsss). Creates accents and emphasis.
- **Technique:** In real drumming, drummers use foot pressure on the pedal to control openness.

**Common Patterns:**
1. **House/Techno:** 16th note closed hats with open hats on off-beats
2. **Funk:** Syncopated open hats with tight closed hat groove
3. **Rock:** 8th note closed hats with open hat crashes on backbeats

**Hi-Hat Rolls:**
- Fast 32nd or 64th notes building in velocity
- Used in transitions, buildups, drops
- Creates tension before breakdowns

**Crescendo Technique:**
- Gradually increase velocity from 60 → 127 over 8-16 steps
- Creates building energy without changing the pattern
- Essential for electronic music buildups
        `
      }
    ]
  },
  
  learningObjectives: [
    "Program realistic open/closed hi-hat patterns with proper velocity",
    "Create hi-hat rolls and crescendos for transitions",
    "Use pedal hi-hat techniques for foot-controlled accents",
    "Understand when to use open vs closed hi-hats for maximum groove impact",
    "Apply advanced hi-hat techniques across genres (house, funk, rock)"
  ],
  
  validation: applyMessagePreset("drumSequencer", "correct-placement-and-velocity"),
  messagePresets: {
    success: "Perfect! Your hi-hat technique is professional-level. Open hats add the accents that make grooves breathe!",
    incorrect: "Not quite. Check your hi-hat velocities and placement. Open hats should be louder than closed hats."
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
