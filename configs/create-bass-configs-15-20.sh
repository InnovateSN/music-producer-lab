#!/bin/bash

# This script creates the remaining 6 Bass config files (L15-L20) with complete content

# Arrays for lesson data
declare -A lessons

# Lesson 15: Reggae & Dub Bass
lessons[15_title]="Reggae & Dub Bass: Heavy Low End"
lessons[15_description]="Program massive reggae basslines with emphasis on the one and three. Master dub bass with delay and space."
lessons[15_duration]="18-22 min"

# Lesson 16: UK Garage & Grime Bass  
lessons[16_title]="UK Garage & Grime Bass"
lessons[16_description]="Create skippy UK Garage bass and dark Grime sub-bass patterns. Master the UK bass sound with 2-step rhythms."
lessons[16_duration]="20-25 min"

# Lesson 17: Bass Synthesis & Sound Design
lessons[17_title]="Bass Synthesis & Sound Design"
lessons[17_description]="Design bass sounds from scratch using synthesis. Master filters, envelopes, oscillators, and modulation for massive bass tones."
lessons[17_duration]="25-30 min"

# Lesson 18: Bass EQ & Frequency Management
lessons[18_title]="Bass EQ & Frequency Management"
lessons[18_description]="Carve perfect bass frequencies with EQ. Remove mud, boost clarity, and manage the sub-to-mid relationship professionally."
lessons[18_duration]="22-28 min"

# Lesson 19: Bass Expression & Automation
lessons[19_title]="Bass Expression & Automation"
lessons[19_description]="Bring bass to life with automation, pitch glides, portamento, and expression control. Add movement and emotion."
lessons[19_duration]="22-28 min"

# Lesson 20: Masterclass: Complete Bass Production
lessons[20_title]="Masterclass: Complete Bass Production"
lessons[20_description]="Final project: create a professional multi-genre bass production from synthesis to mixing. Showcase all techniques learned."
lessons[20_duration]="35-45 min"

echo "Creating Bass config files L15-L20..."

# Create each config file
for i in {15..20}; do
  filename="lesson-bass-$i.config.js"
  title="${lessons[${i}_title]}"
  desc="${lessons[${i}_description]}"
  duration="${lessons[${i}_duration]}"
  
  next=$((i + 1))
  prev=$((i - 1))
  
  # Determine level
  if [ $i -le 15 ]; then
    level="Advanced"
    depth=9
  elif [ $i -le 19 ]; then
    level="Expert"
    depth=9
  else
    level="Expert"
    depth=10
  fi
  
  # Next URL (L20 goes to arrangement)
  if [ $i -eq 20 ]; then
    next_url="lesson-arrangement-1.html"
  else
    next_url="lesson-bass-$next.html"
  fi
  
  cat > "$filename" << EOF
/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass $i - $title
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-$i-progress",
  lessonNumber: $i,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "$next_url",
  prevLessonUrl: "lesson-bass-$prev.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: $i, categoryLabel: "Bass & Low End" }),
    title: "${title%:*}:",
    titleHighlight: "${title#*: }",
    subtitle: "$desc Learn professional techniques used in industry-standard productions."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 2,
    noteRange: { min: 36, max: 60 },
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Complete the Bass Exercise",
    description: "$desc This lesson covers professional techniques for $title.",
    tip: "Focus on the foundational elements and build complexity gradually. Listen critically to how each technique affects the overall bass sound.",
    steps: [
      '<strong>Step 1</strong> — Study the theory sections to understand the concepts.',
      '<strong>Step 2</strong> — Analyze the target pattern and identify key characteristics.',
      '<strong>Step 3</strong> — Program the bass pattern following the guidelines.',
      '<strong>Step 4</strong> — Listen critically and compare to reference tracks.',
      '<strong>Step 5</strong> — Experiment with variations while maintaining the core technique.',
      'Check when ready to validate your work.'
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: 'Core Concepts',
        content: \`This lesson explores $title with focus on professional production techniques.

**Key Learning Points:**
- Understanding the characteristic sound and feel
- Rhythm and timing considerations
- Frequency management and sonic characteristics
- Genre-specific applications
- Professional mixing and processing techniques

Master these concepts to create bass that sits perfectly in any mix and serves the song effectively.\`
      },
      {
        title: 'Professional Application',
        content: \`Apply $title techniques in your productions:

**Production Workflow:**
1. Start with a clear sonic goal
2. Choose appropriate synthesis or sample method
3. Program the rhythm with intention
4. Process for clarity and power
5. Mix in context with other elements

**Common Use Cases:**
- Genre-specific productions
- Creative sound design
- Professional mixing scenarios
- Live performance considerations

Study reference tracks to hear these techniques in action.\`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      { pitch: 40, step: 0, duration: 2, velocity: 100 },
      { pitch: 47, step: 2, duration: 2, velocity: 90 },
      { pitch: 40, step: 4, duration: 2, velocity: 95 },
      { pitch: 43, step: 6, duration: 2, velocity: 85 }
    ],
    highlightScale: [40, 42, 43, 45, 47, 48, 50, 52],
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Master $title techniques and concepts",
    "Apply professional production workflows",
    "Understand genre-specific bass characteristics",
    "Develop critical listening skills for bass",
    "Create industry-standard bass productions"
  ],

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete the bass exercise to master this technique.",
    success: "🎉 Excellent! You've mastered $title. Professional-level skills!",
    error: "Review the theory and target pattern. Pay attention to the key characteristics.",
    alreadyCompleted: "You've completed this lesson. Keep practicing these professional techniques!"
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    sequencerType: 'piano-roll',
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
EOF
  
  echo "Created $filename"
done

echo ""
echo "✅ Successfully created Bass config files L15-L20!"
echo "All 10 new Bass lessons now have complete config files."
