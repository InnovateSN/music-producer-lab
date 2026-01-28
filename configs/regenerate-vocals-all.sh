#!/bin/bash

declare -A lessons

lessons[1]="Vocal Recording Setup|Microphone Choice & Room Treatment|Choose the right microphone, optimize your recording space, and capture clean vocal takes.|20-25 min|Beginner|1"
lessons[2]="Vocal Recording Techniques|Mic Technique & Multiple Takes|Master proper microphone technique, gain staging, and capturing multiple takes for comping.|20-25 min|Beginner|2"
lessons[3]="Vocal Editing Fundamentals|Clean Up & Comp Your Recordings|Remove breaths, pops, and noise. Learn comping workflow and timing adjustments.|22-28 min|Beginner|2"
lessons[4]="Pitch Correction & Tuning|Auto-Tune, Melodyne & Natural Tuning|Use pitch correction tools for both natural and creative vocal effects.|25-30 min|Intermediate|4"
lessons[5]="Vocal Chain Essentials|Build Your Go-To Vocal Processing|Master the professional vocal chain: EQ, compression, de-essing, and saturation.|25-30 min|Intermediate|4"
lessons[6]="Vocal Effects & Processing|Reverb, Delay & Modulation|Add depth, space, and character with reverb, delay, chorus, and modulation effects.|22-28 min|Intermediate|5"
lessons[7]="Vocal Doubling & Layering|Create Thick, Wide Vocals|Master doubling techniques, harmonies, and layering for professional vocal productions.|25-30 min|Intermediate|5"
lessons[8]="Harmony & Backing Vocals|Arrange & Produce Vocal Stacks|Arrange and produce harmony vocals, ad-libs, and background vocal stacks.|28-35 min|Advanced|7"
lessons[9]="Creative Vocal Production|Chopping, Sampling & Vocoding|Explore vocal chopping, sampling, vocoding, and experimental vocal processing.|28-35 min|Advanced|7"
lessons[10]="Genre-Specific Vocal Production|Hip-Hop, Pop, R&B, Electronic|Learn vocal production approaches for different genres and styles.|30-35 min|Advanced|8"
lessons[11]="Advanced Vocal Mixing|Automation & Parallel Processing|Master automation, parallel processing, and advanced techniques for radio-ready vocals.|30-35 min|Expert|9"
lessons[12]="Masterclass: Complete Vocal Production|From Recording to Final Mix|Final project: record, edit, tune, and mix a complete vocal production from scratch.|50-60 min|Expert|10"

for i in {1..12}; do
  IFS='|' read -r title subtitle description duration level depth <<< "${lessons[$i]}"
  
  next=$((i + 1))
  prev=$((i - 1))
  
  if [ $i -eq 1 ]; then
    prev_url="lesson-mixing-15.html"
  else
    prev_url="lesson-vocals-$prev.html"
  fi
  
  if [ $i -eq 12 ]; then
    next_url="lesson-mastering-1.html"
  else
    next_url="lesson-vocals-$next.html"
  fi
  
  if [ $i -le 3 ]; then
    badge="Free"
  else
    badge="Premium"
  fi

  cat > "lesson-vocals-$i.config.js" << EOF
/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals $i - $title
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-$i-progress",
  lessonNumber: $i,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "$next_url",
  prevLessonUrl: "$prev_url",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: $i, categoryLabel: "Vocals" }),
    title: "$title:",
    titleHighlight: "$subtitle",
    subtitle: "$description Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master $title",
    description: "$description This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Understanding $title',
        content: \`$title is crucial for achieving professional vocal productions that compete with commercial releases.

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

Professional vocal producers understand that $title is both technical skill and artistic judgment.\`
      },
      {
        title: 'Professional Vocal Production Techniques',
        content: \`Apply $title in your productions with professional approaches:

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

Study vocal productions in your genre and understand what makes them work.\`
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
    success: "Excellent! You've mastered $title. Your vocal productions are pro-level!",
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
EOF
  
  echo "Created lesson-vocals-$i.config.js - $title"
done

echo ""
echo "✅ Successfully regenerated all 12 Vocals config files!"
