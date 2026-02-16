/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 8 - Dynamics & Contrast
 *
 * This lesson teaches dynamic range management, the loud-quiet-loud technique,
 * and how to use contrast to create emotional impact.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-8-progress",
  lessonNumber: 8,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-9.html",
  prevLessonUrl: "lesson-arrangement-7.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Arrangement" }),
    title: "Dynamics & Contrast:",
    titleHighlight: "The Power of Quiet",
    subtitle: "Master the <strong>loud-quiet-loud</strong> technique. Learn how <strong>contrast creates impact</strong> and why <strong>silence is powerful</strong>. Professional arrangements breathe—they don't stay at one energy level."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create Dynamic Contrast in an Arrangement",
    description: "Build an arrangement that uses <strong>dynamic contrast</strong> to create emotional impact. The secret to making loud sections hit hard is to have quiet sections before them. Learn to manage energy flow strategically.",
    tip: "The biggest mistake beginners make is keeping everything at maximum energy. Professional tracks have dynamics—they get quieter to make the loud parts feel explosive. Think Pixies' \"loud-quiet-loud\" formula.",
    steps: [
      { text: "<strong>Start medium energy</strong> - Intro with 50-60% energy" },
      { text: "<strong>Drop to minimal</strong> - Verse/breakdown with only 2-3 elements (30-40% energy)" },
      { text: "<strong>Build gradually</strong> - Add elements progressively" },
      { text: "<strong>Explode to maximum</strong> - Chorus/drop hits at 100% energy" },
      { text: "<strong>Create at least 40% energy difference</strong> between quiet and loud sections" },
      { text: "Use <strong>strategic silence</strong> (1-2 beats) before impact moments" }
    ]
  },

  // ====================
  // DYNAMIC TECHNIQUES
  // ====================
  dynamicTechniques: [
    {
      name: "Element Subtraction",
      icon: '<img src="images/speakeroff.png" alt="🔇" style="width: 1.5em;">',
      description: "Remove instruments instead of adding them. Drop the drums, bass, or pads to create instant contrast.",
      examples: ["Verse after chorus", "Post-chorus breakdown", "Bridge section"],
      energyChange: "Drop 30-50%"
    },
    {
      name: "Frequency Filtering",
      icon: "🎛️",
      description: "Use low-pass or high-pass filters to reduce frequency range, creating a 'filtered' or 'underwater' effect.",
      examples: ["Intro buildup", "Transition effect", "Breakdown"],
      energyChange: "Drop 20-40%"
    },
    {
      name: "Strategic Silence",
      icon: "⏸️",
      description: "Brief moments of complete silence (1/4 to 1 beat) before big drops create massive impact.",
      examples: ["Before drops", "Before chorus", "Before final section"],
      energyChange: "Amplifies following section by 30%"
    },
    {
      name: "Density Variation",
      icon: "📊",
      description: "Change the number of active elements. Sparse = low energy, dense = high energy.",
      examples: ["Verse: 2-3 elements", "Chorus: 4-5 elements"],
      energyChange: "Variable (20-60%)"
    }
  ],

  // ====================
  // ENERGY LEVELS GUIDE
  // ====================
  energyLevelsGuide: {
    minimal: { range: "20-40%", elements: "1-2", examples: ["Intro", "Outro", "Breakdown"] },
    low: { range: "40-60%", elements: "2-3", examples: ["Verse", "Pre-chorus", "Bridge"] },
    medium: { range: "60-80%", elements: "3-4", examples: ["Pre-chorus", "Build-up"] },
    high: { range: "80-100%", elements: "4-5", examples: ["Chorus", "Drop", "Final chorus"] }
  },

  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "dynamic-range",
    minEnergyDifference: 40, // Must have 40% difference between quietest and loudest
    requireQuietSection: true,
    requiredSilence: 1, // Must use at least one strategic silence
    minSections: 4
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Create an arrangement with strong dynamic contrast (40%+ energy difference)!",
    success: "🎚️ Perfect dynamics! Your contrast creates real emotional impact. This is pro-level arrangement.",
    error: "Check your energy range. You need bigger differences between quiet and loud sections.",
    alreadyCompleted: "You've mastered dynamics! Try experimenting with even more extreme contrasts."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showEnergyGraph: true,
    showDynamicMeter: true,
    enableSilence: true
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "The Power of Dynamics and Contrast",
        content: `
**Why Contrast Matters More Than Loudness:**
Amateur producers try to make their tracks exciting by making everything loud. Professional producers create excitement through contrast—the interplay between loud and quiet, dense and sparse, complex and simple. The human brain responds to change, not constants. A track that stays at 100% energy for 3 minutes feels exhausting and monotonous. A track that moves between 30% and 100% feels dynamic and engaging.

**The Loud-Quiet-Loud Formula:**
This technique, popularized by alternative rock bands like Pixies and Nirvana, has become universal across all genres. The formula:
1. Start moderate or high energy (establish baseline)
2. Drop energy significantly (create contrast)
3. Return to high energy (the contrast makes it feel even more powerful)

The quiet section makes the loud section hit exponentially harder. The contrast is the magic—without the valley, there's no peak.

**The Perceptual Loudness Principle:**
A section at 80% energy feels loud or quiet depending on what came before it. After a 30% energy breakdown, 80% feels massive. After 100% energy, 80% feels underwhelming. This is perceptual relativity—our brains measure loudness relative to recent context, not absolutely.

**Energy Management = Listener Engagement:**
Professional tracks manage energy like a rollercoaster: climb, peak, drop, climb again, bigger peak. Flat energy = listener boredom. Constant 100% energy = listener fatigue. Dynamic variation = sustained attention and emotional investment.

**Real-World Examples:**
- "Smells Like Teen Spirit" by Nirvana: Classic loud-quiet-loud (verse quiet, chorus loud)
- "Scary Monsters and Nice Sprites" by Skrillex: Extreme quiet breakdown before massive drop
- "Rolling in the Deep" by Adele: Verses sparse, chorus full and powerful
- "Humble." by Kendrick Lamar: Minimal verses, fuller hooks

All these tracks use contrast to create impact. None of them stay at constant energy.
        `
      },
      {
        title: "Techniques for Creating Dynamic Contrast",
        content: `
**1. Element Subtraction (The Most Powerful Tool):**
Don't add elements to create intensity—remove elements to create valleys. This makes the full sections feel fuller by comparison.

*How to Apply:*
- Full chorus: Drums + Bass + Synths + Vocals + Strings (5 elements)
- Sparse verse: Drums + Bass + Vocals (3 elements)
- Minimal pre-chorus: Bass + Vocals only (2 elements)

The verse feels intimate because it's sparse. The chorus feels explosive because it's full. The contrast creates the impact.

*Common Mistake:* Adding MORE elements to verses, trying to make them interesting. This destroys contrast. Verses should be intentionally restrained so choruses can explode.

**2. Strategic Silence (Micro-Contrast):**
Brief moments of silence (1/4 to 1/2 beat) before big moments create massive impact. This is micro-contrast—tiny gaps that reset the listener's ear and make the subsequent sound feel fresh and powerful.

*How to Apply:*
- Before drops: Cut everything for 1/4-1/2 beat, then hit the drop
- Before final choruses: Use 1-beat silence before the climax
- Mid-phrase: Occasional gaps in drum patterns create rhythmic interest

*Famous Example:* The silence before the drop in EDM tracks. That micro-gap makes the drop hit 10x harder.

**3. Frequency Spectrum Contrast:**
Change which part of the frequency spectrum dominates:
- Verses: Emphasize mids (vocals, guitar, keys)
- Choruses: Add low-end power (bass, kick) and high-end sparkle (hi-hats, cymbals)
- Breakdowns: Reduce low-end entirely (ethereal, floating feeling)

Moving energy between frequency ranges creates contrast without changing overall loudness.

**4. Density Contrast:**
Vary how many notes/events happen per second:
- Dense sections: Fast hi-hats, arpeggiators, lots of rhythmic hits
- Sparse sections: Long sustained notes, slow chord changes, space

Density contrast works independently of loudness—a quiet section with dense hi-hats feels busy, a loud section with whole notes feels spacious.

**5. Mono vs Stereo Width Contrast:**
Narrow the stereo image for verses (mono or center-focused), widen it for choruses (full stereo field). This creates spatial contrast:
- Verse: Vocals and bass in center (narrow, intimate)
- Chorus: Wide stereo guitars, spread synths, expanded field (huge, immersive)

**6. Rhythmic Complexity Contrast:**
Alternate between simple and complex rhythms:
- Simple: Straight kick pattern, basic hi-hats
- Complex: Syncopated kicks, polyrhythmic percussion

The shift from simple to complex (or vice versa) creates rhythmic contrast that keeps ears engaged.

**7. Harmonic Contrast:**
Change harmonic complexity:
- Verses: Simple chord progressions (I-V-vi-IV)
- Choruses: Add suspended chords, extensions, or key changes
- Breakdowns: Move to relative minor or different key center

Harmonic shifts create emotional contrast—simple feels stable, complex feels tense or colorful.
        `
      },
      {
        title: "Building Dynamic Arrangements in Your DAW",
        content: `
**The Energy Map Template:**

Create a visual energy map for your track before arranging:

**Intro (Bars 1-8): 30% Energy**
- Elements: Kick + pad only
- Purpose: Set the vibe, ease listeners in

**Verse 1 (Bars 9-24): 50% Energy**
- Elements: Kick + bass + vocals
- Purpose: Sparse for vocals, intimate feel

**Pre-Chorus (Bars 25-28): 60% Energy**
- Elements: Add percussion, rising energy
- Purpose: Build toward chorus

**Chorus 1 (Bars 29-44): 90% Energy**
- Elements: ALL elements (kick, bass, synths, vocals, strings, percussion)
- Purpose: Peak #1, full arrangement

**Post-Chorus Silence (Bar 45): 0% Energy**
- Elements: NOTHING (1-bar gap)
- Purpose: Reset ears, create micro-contrast

**Verse 2 (Bars 46-61): 55% Energy**
- Elements: Kick + bass + vocals + light synth
- Purpose: Slightly fuller than Verse 1 for variation

**Chorus 2 (Bars 62-77): 95% Energy**
- Elements: Full arrangement + one additional element
- Purpose: Slightly bigger than Chorus 1

**Breakdown/Bridge (Bars 78-93): 25% Energy**
- Elements: Vocals + atmospheric pad only
- Purpose: Create maximum contrast before final chorus

**Final Chorus (Bars 94-117): 100% Energy**
- Elements: Everything + doubles + key change
- Purpose: Biggest moment of the track

**Outro (Bars 118-125): 40% → 0% Energy**
- Elements: Gradual removal leading to silence
- Purpose: Gentle landing after climax

**DAW Implementation Workflow:**

**Step 1: Build Your Full Arrangement First**
Create the fullest version of your track (chorus energy everywhere). This is your 100% energy reference point.

**Step 2: Identify Contrast Points**
Mark where you want valleys:
- Verses (remove 40-50% of elements)
- Breakdowns (remove 70-80% of elements)
- Pre-drops (remove 90-100% of elements for 1-2 bars)

**Step 3: Create Automation Lanes**
Set up automation for:
- **Master volume**: Subtle dips and swells (-2dB to +1dB)
- **Reverb send**: More reverb in sparse sections, less in dense sections
- **High-pass filter**: Cut lows in breakdowns, full spectrum in drops
- **Stereo width**: Narrow for verses, wide for choruses

**Step 4: Execute Element Subtraction**
Literally mute tracks during verses:
- Full chorus: 10 active tracks
- Verse: Mute 4-5 tracks (keep only essentials)
- Breakdown: Mute 7-8 tracks (near-silence)

**Step 5: Add Strategic Silence**
Use clip splitting or automation:
- Select the last 1/4 beat before a drop
- Delete that section entirely (create silence)
- Alternatively, automate master volume to -∞ for 1/4 beat

**Step 6: Energy Check (Visual Verification)**
Zoom out and look at your waveform:
- You should see clear valleys (verses, breakdowns)
- Clear peaks (choruses, drops)
- Gradual slopes (buildups)

If the waveform is a flat, consistent rectangle, you have no dynamic contrast.

**Advanced Techniques:**

**The "Double Contrast" Move:**
After a massive chorus, don't go to a medium-energy verse—go to near-silence. The extreme contrast makes the next buildup feel even more powerful. Example structure:
- Huge Chorus (100%) → Breakdown with just vocals (20%) → Buildup → Even Bigger Chorus (110%)

**The "False Peak" Technique:**
Create a peak that sounds like it should be the climax, then create an even bigger peak later:
- Chorus 1 (90%) → Verse → Chorus 2 (95%) → Breakdown (30%) → Final Chorus (110% with key change)

The final chorus surprises because listeners thought Chorus 2 was the peak.

**The "Sustained Quiet" Approach:**
Some tracks use extended quiet sections (30-60 seconds of sparse arrangement) to create enormous tension before final climaxes. Radiohead and Sigur Rós use this frequently.

**Common Mistakes to Avoid:**

**Mistake #1: "Everything Loud All the Time"**
This is the #1 amateur mistake. No contrast = no excitement = boring track.

**Mistake #2: "Timid Valleys"**
If your "quiet" sections are still at 70% energy, the contrast isn't strong enough. Go lower—20-40% energy for valleys.

**Mistake #3: "Constant Dynamics"**
Some producers over-automate, creating constant swells and dips. This is distracting. Dynamic changes should be section-based, not bar-by-bar.

**Mistake #4: "No Reference Mixing"**
Pull up 3 professional tracks in your genre. Look at their waveforms. Study where they place valleys and peaks. You'll see consistent patterns: big contrast = exciting tracks.

**Pro Tip - The "Subtraction Before Addition" Rule:**
Before adding a new synth, effect, or layer, try REMOVING something first. Often, the track sounds better with less. Dynamic contrast isn't about having more elements—it's about strategically revealing and hiding the elements you have.

Master dynamic contrast, and your tracks will feel professional, engaging, and emotionally powerful. Remember: the power isn't in how loud you can make things—it's in how effectively you can contrast loud with quiet.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the power of dynamic contrast in arrangements",
    "Apply the loud-quiet-loud formula for maximum impact",
    "Use element subtraction to create breathing room",
    "Implement strategic silence before drops and choruses",
    "Manage energy flow across an entire track"
  ],

  // ====================
  // REFERENCE
  // ====================
  reference: {
    technique: "Loud-Quiet-Loud",
    originators: ["Pixies", "Nirvana"],
    modernUse: ["EDM drops", "Pop chorus impact", "Hip-hop beat switches"]
  }
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
