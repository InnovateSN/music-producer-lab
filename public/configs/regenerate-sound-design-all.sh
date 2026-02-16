#!/bin/bash

# Complete Sound Design lesson data
declare -A lessons

# Lesson 1: Subtractive Synthesis
lessons[1]="Subtractive Synthesis Basics|Master Oscillators, Filters & Envelopes|Learn the foundation of analog-style synthesis with oscillators, filters, and envelopes - the building blocks of most synthesizer sounds.|18-20 min|Beginner|1"

# Lesson 2: LFOs & Modulation
lessons[2]="LFOs & Modulation|Add Movement to Your Sounds|Add life and movement to static sounds using low-frequency oscillators (LFOs) and modulation routing.|15-18 min|Beginner|2"

# Lesson 3: FM Synthesis Fundamentals
lessons[3]="FM Synthesis Fundamentals|Create Complex Evolving Timbres|Explore frequency modulation to create complex, metallic, and bell-like tones that are impossible with subtractive synthesis.|18-22 min|Beginner|2"

# Lesson 4: Wavetable Synthesis
lessons[4]="Wavetable Synthesis|Modern Digital Textures|Navigate through wavetables to create modern, evolving digital sounds that dominate electronic music.|18-22 min|Beginner|3"

# Lesson 5: Sampling Fundamentals
lessons[5]="Sampling Fundamentals|Record, Edit & Process Samples|Master the art of recording, editing, and processing samples for use in your productions.|20-25 min|Intermediate|4"

# Lesson 6: Sound Layering Techniques
lessons[6]="Sound Layering Techniques|Combine Sounds for Rich Textures|Learn to layer multiple sounds to create rich, complex textures that fill the frequency spectrum.|18-22 min|Intermediate|4"

# Lesson 7: Sample Pack Creation
lessons[7]="Sample Pack Creation|Design Professional Sample Libraries|Create and organize professional sample packs for distribution or commercial sale.|25-30 min|Intermediate|5"

# Lesson 8: Granular Synthesis
lessons[8]="Granular Synthesis|Manipulate Tiny Sound Grains|Work with microscopic sound particles to create atmospheric textures and experimental effects.|22-28 min|Intermediate|5"

# Lesson 9: FX Sound Design
lessons[9]="FX Sound Design|Impacts, Risers, Sweeps & Transitions|Create essential FX sounds: impacts, risers, downlifters, sweeps, and transitions for electronic music.|20-25 min|Intermediate|6"

# Lesson 10: Multi-Sampled Instruments
lessons[10]="Multi-Sampled Instruments|Build Professional Sampler Instruments|Construct professional multi-sampled instruments with velocity layers and round-robin sampling.|30-35 min|Advanced|7"

# Lesson 11: Foley & Sound Effects
lessons[11]="Foley & Sound Effects|Realistic SFX for Film & Games|Record and design realistic sound effects for film, television, games, and visual media.|25-30 min|Advanced|7"

# Lesson 12: Audio for Video Games
lessons[12]="Audio for Video Games|Interactive Non-Linear Audio|Create interactive, adaptive audio that responds dynamically to player actions in games.|28-35 min|Advanced|8"

# Lesson 13: Cinematic Sound Design
lessons[13]="Cinematic Sound Design|Epic Sounds for Film & Trailers|Design dramatic, cinematic sounds for film scores, movie trailers, and visual storytelling.|28-35 min|Advanced|8"

# Lesson 14: Advanced Synthesis Techniques
lessons[14]="Advanced Synthesis Techniques|Combine Multiple Synthesis Methods|Master hybrid synthesis by combining subtractive, FM, wavetable, and granular methods.|30-35 min|Expert|9"

# Lesson 15: Masterclass Complete Sound Library
lessons[15]="Masterclass: Complete Sound Library|Build a Professional Sound Collection|Final project: create a complete, professional sound library from scratch across multiple synthesis techniques.|45-60 min|Expert|10"

for i in {1..15}; do
  IFS='|' read -r title subtitle description duration level depth <<< "${lessons[$i]}"
  
  next=$((i + 1))
  prev=$((i - 1))
  
  if [ $i -eq 1 ]; then
    prev_url="labs.html"
  else
    prev_url="lesson-sound-design-$prev.html"
  fi
  
  if [ $i -eq 15 ]; then
    next_url="lesson-mixing-1.html"
  else
    next_url="lesson-sound-design-$next.html"
  fi
  
  # Determine badge
  if [ $i -le 3 ]; then
    badge="Free"
  else
    badge="Premium"
  fi

  cat > "lesson-sound-design-$i.config.js" << EOF
/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Sound Design $i - $title
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-sound-design-$i-progress",
  lessonNumber: $i,
  lessonCategory: "Sound Design",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "$next_url",
  prevLessonUrl: "$prev_url",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: $i, categoryLabel: "Sound Design" }),
    title: "$title:",
    titleHighlight: "$subtitle",
    subtitle: "$description Master professional sound design techniques used in modern music production."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Explore $title",
    description: "$description This lesson covers the essential concepts and practical techniques you need to master this sound design method.",
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
        title: 'Understanding $title',
        content: \`$title is a fundamental sound design technique that shapes the sonic character of your productions.

**Key Concepts:**
- Core synthesis principles and signal flow
- Parameter relationships and interactions  
- Frequency spectrum considerations
- Timbral characteristics and sonic possibilities
- Common applications in music production

**Professional Applications:**
Modern producers use $title for:
- Creating signature sounds and textures
- Designing genre-specific timbres
- Building unique sonic identities
- Crafting sounds that cut through mixes
- Generating movement and evolution in arrangements

Understanding these concepts gives you complete control over your sound palette.\`
      },
      {
        title: 'Practical Sound Design Workflow',
        content: \`Professional sound designers follow systematic approaches to achieve desired results:

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

Study professional productions and reverse-engineer the sounds you admire.\`
      }
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Master the fundamental concepts of $title",
    "Understand signal flow and parameter relationships",
    "Apply sound design techniques to practical productions",
    "Develop critical listening skills for timbre and texture",
    "Create professional-quality sounds for your productions"
  ],
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete this lesson to master $title techniques.",
    success: "Excellent! You've mastered $title. Your sound design skills are growing!",
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
EOF
  
  echo "Created lesson-sound-design-$i.config.js - $title"
done

echo ""
echo "✅ Successfully regenerated all 15 Sound Design config files with COMPLETE content!"
