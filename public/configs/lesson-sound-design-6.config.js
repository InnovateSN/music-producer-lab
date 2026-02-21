/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Sound Design 6 - Sound Layering Techniques
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Sound Design",
  lessonNumber: 6
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-sound-design-6-progress",
  lessonNumber: 6,
  lessonCategory: "Sound Design",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-sound-design-7.html",
  prevLessonUrl: "lesson-sound-design-5.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Sound Design" }),
    title: "Sound Layering Techniques:",
    titleHighlight: "Combine Sounds for Rich Textures",
    subtitle: "Learn to layer multiple sounds to create rich, complex textures that fill the frequency spectrum. Master professional sound design techniques used in modern music production."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Explore Sound Layering Techniques",
    description: "Learn to layer multiple sounds to create rich, complex textures that fill the frequency spectrum. This lesson covers the essential concepts and practical techniques you need to master this sound design method.",
    tip: "Listen critically to how each parameter affects the sound. Small changes can have dramatic results in sound design.",
    steps: [
      '<strong>Study the theory</strong> — Read through the sound design concepts and understand the signal flow.',
      '<strong>Analyze the examples</strong> — Listen to reference sounds and identify key characteristics.',
      '<strong>Experiment with parameters</strong> — Try different settings and hear how they change the sound.',
      '<strong>Create variations</strong> — Design multiple versions exploring different timbres.',
      '<strong>Save your presets</strong> — Document successful sounds for future use.',
      'Complete the lesson when ready to move forward.'
    ]
  },
  
  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: 'Understanding Sound Layering Techniques',
        content: `Sound Layering Techniques is a fundamental sound design technique that shapes the sonic character of your productions.

**Key Concepts:**
- Core synthesis principles and signal flow
- Parameter relationships and interactions  
- Frequency spectrum considerations
- Timbral characteristics and sonic possibilities
- Common applications in music production

**Professional Applications:**
Modern producers use Sound Layering Techniques for:
- Creating signature sounds and textures
- Designing genre-specific timbres
- Building unique sonic identities
- Crafting sounds that cut through mixes
- Generating movement and evolution in arrangements

Understanding these concepts gives you complete control over your sound palette.`
      },
      {
        title: 'Practical Sound Design Workflow',
        content: `Professional sound designers follow systematic approaches to achieve desired results:

**Design Process:**
1. **Define the goal** — Know what sound you're trying to create
2. **Choose the method** — Select appropriate synthesis technique
3. **Start simple** — Begin with basic waveforms and build complexity
4. **Shape with filters** — Sculpt the frequency content
5. **Add movement** — Use envelopes and modulation
6. **Layer if needed** — Combine multiple sounds for richness
7. **Process and polish** — Apply effects and finalize

**Critical Listening:**
- A/B compare with reference sounds
- Analyze frequency spectrum with analyzers
- Check mono compatibility
- Test in context with other mix elements

**Common Mistakes to Avoid:**
- Over-processing before establishing the core sound
- Too many modulation sources creating chaos
- Ignoring the frequency spectrum balance
- Not considering the sound's role in the arrangement

Study professional productions and reverse-engineer the sounds you admire.`
      }
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Master the fundamental concepts of Sound Layering Techniques",
    "Understand signal flow and parameter relationships",
    "Apply sound design techniques to practical productions",
    "Develop critical listening skills for timbre and texture",
    "Create professional-quality sounds for your productions"
  ],
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete this lesson to master Sound Layering Techniques techniques.",
    success: "Excellent! You've mastered Sound Layering Techniques. Your sound design skills are growing!",
    error: "Review the theory and try again.",
    alreadyCompleted: "You've completed this lesson. Keep practicing these techniques!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  },
  assessmentRubric: {
    ...lessonQualityPreset.assessmentRubric
  },
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
