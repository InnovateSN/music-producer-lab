/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 3 - Compression Basics
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-3-progress",
  lessonNumber: 3,
  lessonCategory: "Mixing",
  
  nextLessonUrl: "lesson-mixing-4.html",
  prevLessonUrl: "lesson-mixing-2.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Mixing" }),
    title: "Compression Basics:",
    titleHighlight: "Control Your Dynamics",
    subtitle: "Learn threshold, ratio, attack, release, and makeup gain to control the dynamic range of your tracks. Master professional mixing techniques used in commercial productions."
  },
  
  exercise: {
    title: "Master Compression Basics",
    description: "Learn threshold, ratio, attack, release, and makeup gain to control the dynamic range of your tracks. This lesson covers essential mixing concepts that separate amateur from professional productions.",
    tip: "Always mix with reference tracks. A/B your mix against professional releases to calibrate your ears.",
    steps: [
      '<strong>Understand the concept</strong> — Study the theory and signal flow.',
      '<strong>Hear the difference</strong> — Compare processed vs unprocessed audio.',
      '<strong>Set appropriate parameters</strong> — Learn the optimal settings for this technique.',
      '<strong>Apply in context</strong> — Use the technique in a full mix scenario.',
      '<strong>Trust your ears</strong> — Let your ears guide your decisions, not just meters.',
      'Complete when you understand the practical application.'
    ]
  },
  
  theory: {
    sections: [
      {
        title: 'Understanding Compression Basics',
        content: `Compression Basics is a fundamental mixing technique that shapes the final sonic character of your productions.

**Core Principles:**
- How this technique affects the frequency spectrum
- When to apply it in the mixing workflow
- Common parameters and their interactions
- How to avoid common mistakes
- Professional standards and best practices

**Signal Flow:**
Understanding where this technique sits in your signal chain is crucial. Different placement yields different results.

**Frequency Considerations:**
Every mixing decision affects the frequency balance. Learn how Compression Basics interacts with the spectrum.

**Dynamic Considerations:**
Understand how this technique affects the dynamic range and transient response of your audio.

Professional mixers use Compression Basics to:
- Create separation between mix elements
- Control problematic frequencies or dynamics
- Add character and color to sounds
- Achieve translation across playback systems
- Match professional mixing standards`
      },
      {
        title: 'Professional Mixing Workflow',
        content: `Apply Compression Basics effectively in your professional workflow:

**Pre-Processing:**
- Set appropriate gain staging
- Remove DC offset and unwanted noise
- Ensure proper phase relationships

**Processing:**
1. Start with corrective moves (fix problems)
2. Then add creative moves (enhance character)
3. Use subtle settings (less is often more)
4. A/B frequently (compare processed vs unprocessed)
5. Check in mono (ensure compatibility)

**Post-Processing:**
- Verify the change improved the mix
- Check for unwanted artifacts or side effects
- Ensure the element still fits in context

**Common Mistakes:**
- Over-processing before establishing the core sound
- Using presets without understanding parameters
- Not considering the frequency spectrum balance
- Mixing in solo instead of in context
- Ignoring how changes affect other mix elements

**Professional Standards:**
Study reference tracks in your genre. Understand how professional mixers use Compression Basics to achieve commercial-quality results.

**Tools & Techniques:**
- Use spectrum analyzers to visualize changes
- Reference professional mixes constantly
- Take breaks to reset your ears
- Mix at moderate volumes
- Check your mix on multiple systems`
      }
    ]
  },
  
  learningObjectives: [
    "Master the fundamental concepts of Compression Basics",
    "Understand when and how to apply this technique",
    "Develop critical listening skills for mixing",
    "Apply professional mixing workflows",
    "Create mixes that translate across playback systems"
  ],
  
  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Compression Basics. Your mixes are improving!",
    error: "Review the mixing concepts and try again.",
    alreadyCompleted: "You've completed this mixing technique. Keep practicing!"
  }),
  
  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
