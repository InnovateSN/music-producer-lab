/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 10 - Masterclass: Professional Mastering Project
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mastering",

  progression: {
    difficulty: "intermediate",
    prerequisites: ["mastering-9","mastering-8"],
    outcomes: ["Completare gli obiettivi pratici di mastering-10","Consolidare competenze intermediate nel modulo mastering"]
  },
  lessonNumber: 10
});

export const lessonConfig = {
  lessonKey: "mpl-mastering-10-progress",
  lessonNumber: 10,
  lessonCategory: "Mastering",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-mastering-9.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Mastering" }),
    title: "Masterclass: Professional Mastering Project:",
    titleHighlight: "Master a Complete Album or EP",
    subtitle: "Final project: master a complete album or EP with consistent sonic character across all tracks. Master professional mastering techniques for commercial release-ready audio."
  },
  
  exercise: {
    title: "Master Masterclass: Professional Mastering Project",
    description: "Final project: master a complete album or EP with consistent sonic character across all tracks. This lesson covers the professional mastering techniques used to prepare tracks for distribution.",
    tip: "Mastering is subtle work. Less is more. If you can't hear the difference, you might be doing it right.",
    steps: [
      '<strong>Study mastering theory</strong> — Understand the role of mastering in production.',
      '<strong>Analyze reference masters</strong> — Study professional masters in your genre.',
      '<strong>Apply mastering techniques</strong> — Practice the specific processing methods.',
      '<strong>Use proper metering</strong> — Monitor loudness, peaks, and spectrum throughout.',
      '<strong>A/B compare constantly</strong> — Toggle bypass to ensure improvements.',
      'Complete when you understand professional mastering workflow.'
    ]
  },
  
  theory: {
    sections: [
      {
        title: 'Understanding Masterclass: Professional Mastering Project',
        content: `Masterclass: Professional Mastering Project is the final step in audio production, preparing your mix for distribution and ensuring it translates across all playback systems.

**Core Mastering Concepts:**
- The difference between mixing and mastering
- When and why mastering is necessary
- Proper mastering signal flow and processing order
- Loudness standards and streaming normalization
- Format delivery specifications (WAV, MP3, DDP, etc.)

**Mastering Goals:**
1. **Tonal balance** — Ensure consistent frequency response
2. **Dynamics** — Control dynamic range appropriately
3. **Loudness** — Achieve competitive levels without distortion
4. **Stereo image** — Optimize stereo width and mono compatibility
5. **Consistency** — Create cohesion across an album or EP
6. **Technical compliance** — Meet distribution specifications

**Professional Mastering Workflow:**
The mastering engineer's job is to:
- Make the mix translate across all playback systems
- Achieve competitive loudness for the genre
- Fix minor mix issues (if possible)
- Prepare different versions (streaming, CD, vinyl, etc.)
- Provide the final deliverable files

Understanding Masterclass: Professional Mastering Project means knowing when to apply it and when to leave things alone.`
      },
      {
        title: 'Professional Mastering Techniques',
        content: `Apply Masterclass: Professional Mastering Project with professional standards and workflows:

**Pre-Mastering Checklist:**
- Mix is final and approved
- Proper headroom (-6 dB to -3 dB peaks)
- No clipping or distortion
- No processing on master bus
- All automation printed
- Files are high-resolution (24-bit minimum)

**Mastering Signal Chain:**
1. **Analysis** — Measure levels, spectrum, dynamics
2. **Linear phase EQ** — Tonal balance adjustments
3. **Multiband compression** — Control frequency-specific dynamics (if needed)
4. **Mastering compression** — Gentle glue compression
5. **Mid-side processing** — Stereo width optimization
6. **Limiting** — Final loudness maximization
7. **Dithering** — Bit-depth reduction for final format

**Critical Measurements:**
- **Integrated LUFS** — Target: -14 LUFS (streaming), -8 to -6 LUFS (club/radio)
- **True Peak** — Max: -1 dBTP (streaming), -0.3 dBTP (safety)
- **Dynamic Range** — Maintain at least 8-10 DR for musicality
- **Stereo Correlation** — Keep above +0.7, watch for phase issues

**Common Mastering Mistakes:**
- Over-limiting and destroying dynamics
- Too much processing (trying to "fix" the mix)
- Ignoring streaming normalization
- Not checking mono compatibility
- Mastering before mix is finalized
- Not referencing professional masters

**Platform-Specific Considerations:**
- **Spotify** — Normalizes to -14 LUFS, reduces louder tracks
- **Apple Music** — Normalizes to -16 LUFS with Sound Check
- **YouTube** — Normalizes to -13 LUFS
- **CD** — No normalization, target -8 to -6 LUFS
- **Vinyl** — Special considerations for low-end and stereo width

Always deliver masters at -14 LUFS integrated for streaming, and provide alternate masters for other formats if needed.`
      }
    ]
  },
  
  learningObjectives: [
    "Master professional mastering techniques and workflow",
    "Understand loudness standards and streaming normalization",
    "Apply proper metering and analysis tools",
    "Create masters that translate across all playback systems",
    "Prepare final deliverables for distribution"
  ],
  
  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to advance.",
    success: "Excellent! You've mastered Masterclass: Professional Mastering Project. Your masters are release-ready!",
    error: "Review the mastering concepts and try again.",
    alreadyCompleted: "You've completed this mastering technique. Keep practicing!"
  }),
  
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
