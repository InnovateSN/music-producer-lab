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
        title: 'Understanding Vocal Recording Setup',
        content: `Vocal Recording Setup is crucial for achieving professional vocal productions that compete with commercial releases.

**Core Concepts:**
- Vocal recording and production fundamentals
- Technical requirements and equipment considerations
- Signal flow and processing chain order
- Common issues and how to solve them
- Genre-specific approaches and standards

**Professional Workflow:**
1. **Preparation** — Set up properly before recording
2. **Capture** — Record high-quality source material
3. **Edit** — Clean up and comp the best takes
4. **Process** — Apply corrective and creative processing
5. **Mix** — Blend vocals perfectly with the track
6. **Finalize** — Ensure vocals translate across systems

**Critical Factors:**
- **Source quality** — Good recording = easier mixing
- **Performance** — Technical skill matters more than processing
- **Context** — Vocals must serve the song
- **Reference** — Always compare to professional standards

Professional vocal producers understand that Vocal Recording Setup is both technical skill and artistic judgment.`
      },
      {
        title: 'Professional Vocal Production Techniques',
        content: `Apply Vocal Recording Setup in your productions with professional approaches:

**Recording Best Practices:**
- Proper mic placement and distance
- Optimal gain staging and headroom
- Multiple takes for comping
- Consistent recording environment
- Reference monitoring and acoustics

**Processing Workflow:**
1. **Clean up** — Remove unwanted sounds and noise
2. **Tune** — Correct pitch issues (subtle or creative)
3. **Time align** — Fix timing and rhythm issues
4. **EQ** — Remove muddiness, add presence
5. **Compress** — Control dynamics and consistency
6. **De-ess** — Tame harsh sibilance
7. **FX** — Add reverb, delay, modulation

**Common Vocal Issues:**
- **Muddiness** — High-pass filter at 80-100 Hz
- **Harshness** — De-ess or cut 6-8 kHz
- **Lack of presence** — Boost 3-5 kHz subtly
- **Inconsistent levels** — Compression and automation
- **Poor timing** — Edit before processing
- **Pitch issues** — Tune before heavy processing

**Genre Considerations:**
Different genres require different vocal approaches:
- **Pop** — Polished, present, tuned, compressed
- **Hip-Hop** — Dry, upfront, minimal reverb
- **R&B** — Smooth, warm, layered harmonies
- **Rock** — Raw energy, less processing
- **Electronic** — Creative effects, vocoders, pitch shifts

Study vocal productions in your genre and understand what makes them work.`
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
