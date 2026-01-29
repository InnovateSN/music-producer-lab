#!/bin/bash

# Complete Mixing lesson data
declare -A lessons

lessons[1]="Gain Staging & Levels|Master Proper Signal Structure|Set healthy headroom and balance before diving into processing. Learn proper gain structure for professional mixes.|18-22 min|Beginner|1"
lessons[2]="EQ Fundamentals|Carve Space in Your Mix|Master frequency ranges, filtering, and how to use equalization to create clarity and separation.|20-25 min|Beginner|2"
lessons[3]="Compression Basics|Control Your Dynamics|Learn threshold, ratio, attack, release, and makeup gain to control the dynamic range of your tracks.|20-25 min|Beginner|2"
lessons[4]="Reverb & Space|Create Depth and Dimension|Use reverb to place elements in 3D space. Master room types, pre-delay, and reverb techniques.|18-22 min|Beginner|3"
lessons[5]="Delay & Time-Based Effects|Add Rhythmic Enhancement|Master delay, echo, chorus, and flanger for rhythmic interest and spatial enhancement.|18-22 min|Intermediate|4"
lessons[6]="Panning & Stereo Width|Build an Immersive Mix|Create wide, immersive mixes with strategic panning and stereo imaging techniques.|18-22 min|Intermediate|4"
lessons[7]="Sidechain & Ducking|Create Space with Compression|Use sidechain compression to create space, pumping effects, and rhythmic movement in your mixes.|20-25 min|Intermediate|5"
lessons[8]="Automation in Mixing|Bring Your Mix to Life|Use volume, pan, and effect automation throughout the arrangement to create movement and interest.|20-25 min|Intermediate|5"
lessons[9]="Parallel Processing|Blend Wet and Dry Signals|Master parallel compression, reverb, and distortion for depth and character while maintaining clarity.|22-28 min|Intermediate|6"
lessons[10]="Mixing Drums|Professional Drum Processing|Learn drum bus processing, kick-bass relationship, and how to create punch and clarity in your drums.|25-30 min|Advanced|7"
lessons[11]="Mixing Bass & Low End|Control Your Low Frequencies|Master sub bass management, kick-bass separation, and low-end clarity techniques.|25-30 min|Advanced|7"
lessons[12]="Mixing Vocals & Leads|Make Vocals Sit Perfectly|Process vocals with de-essing, dynamic EQ, and spatial effects for professional vocal production.|28-35 min|Advanced|8"
lessons[13]="Genre-Specific Mixing|Different Approaches for Different Styles|Learn mixing approaches for EDM, hip-hop, rock, pop, and electronic music genres.|28-35 min|Advanced|8"
lessons[14]="Reference Tracks & Critical Listening|Develop Your Ears|Master A/B comparison, frequency analysis, and mixing to professional standards.|25-30 min|Expert|9"
lessons[15]="Masterclass: Complete Mix Project|Mix from Stems to Final|Final project: mix a complete multi-track project from raw stems to polished stereo mix.|50-60 min|Expert|10"

for i in {1..15}; do
  IFS='|' read -r title subtitle description duration level depth <<< "${lessons[$i]}"
  
  next=$((i + 1))
  prev=$((i - 1))
  
  if [ $i -eq 1 ]; then
    prev_url="lesson-sound-design-15.html"
  else
    prev_url="lesson-mixing-$prev.html"
  fi
  
  if [ $i -eq 15 ]; then
    next_url="lesson-vocals-1.html"
  else
    next_url="lesson-mixing-$next.html"
  fi
  
  if [ $i -le 3 ]; then
    badge="Free"
  else
    badge="Premium"
  fi

  cat > "lesson-mixing-$i.config.js" << EOF
/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing $i - $title
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-$i-progress",
  lessonNumber: $i,
  lessonCategory: "Mixing",
  
  nextLessonUrl: "$next_url",
  prevLessonUrl: "$prev_url",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: $i, categoryLabel: "Mixing" }),
    title: "$title:",
    titleHighlight: "$subtitle",
    subtitle: "$description Master professional mixing techniques used in commercial productions."
  },
  
  exercise: {
    title: "Master $title",
    description: "$description This lesson covers essential mixing concepts that separate amateur from professional productions.",
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
        title: 'Understanding $title',
        content: \`$title is a fundamental mixing technique that shapes the final sonic character of your productions.

**Core Principles:**
- How this technique affects the frequency spectrum
- When to apply it in the mixing workflow
- Common parameters and their interactions
- How to avoid common mistakes
- Professional standards and best practices

**Signal Flow:**
Understanding where this technique sits in your signal chain is crucial. Different placement yields different results.

**Frequency Considerations:**
Every mixing decision affects the frequency balance. Learn how $title interacts with the spectrum.

**Dynamic Considerations:**
Understand how this technique affects the dynamic range and transient response of your audio.

Professional mixers use $title to:
- Create separation between mix elements
- Control problematic frequencies or dynamics
- Add character and color to sounds
- Achieve translation across playback systems
- Match professional mixing standards\`
      },
      {
        title: 'Professional Mixing Workflow',
        content: \`Apply $title effectively in your professional workflow:

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
Study reference tracks in your genre. Understand how professional mixers use $title to achieve commercial-quality results.

**Tools & Techniques:**
- Use spectrum analyzers to visualize changes
- Reference professional mixes constantly
- Take breaks to reset your ears
- Mix at moderate volumes
- Check your mix on multiple systems\`
      }
    ]
  },
  
  learningObjectives: [
    "Master the fundamental concepts of $title",
    "Understand when and how to apply this technique",
    "Develop critical listening skills for mixing",
    "Apply professional mixing workflows",
    "Create mixes that translate across playback systems"
  ],
  
  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered $title. Your mixes are improving!",
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
EOF
  
  echo "Created lesson-mixing-$i.config.js - $title"
done

echo ""
echo "✅ Successfully regenerated all 15 Mixing config files!"
