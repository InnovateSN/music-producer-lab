/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 1 - From Loop to Song: Understanding Structure
 * 
 * Note: This lesson uses a custom arrangement builder instead of the standard
 * drum sequencer. The config provides metadata and navigation info.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 1
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-1-progress",
  lessonNumber: 1,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-2.html",
  prevLessonUrl: "lesson-drums-6.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Arrangement" }),
    title: "From Loop to Song:",
    titleHighlight: "Understanding Structure",
    subtitle: "You've created killer drum patterns and loops. Now it's time to turn them into <strong>complete songs</strong>. Learn how to organize your musical ideas into sections—like <strong>intro</strong>, <strong>verse</strong>, <strong>chorus</strong>, and <strong>bridge</strong>—to create a journey your listeners will love."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build Your First Arrangement",
    description: "Use the interactive arrangement builder to create a complete song structure. Click sections to add them to your timeline and watch the energy flow visualize your arrangement.",
    tip: "Try creating both a Pop structure (Verse-Chorus-Bridge) AND an EDM structure (Build-Drop-Breakdown). Notice how the energy graphs differ!",
    steps: [
      { text: "<strong>Start with an Intro</strong> — Click the Intro button to add it to your timeline." },
      { text: "<strong>Add a Verse → Chorus pattern</strong> — This is your first \"cycle\"." },
      { text: "<strong>Repeat with variation</strong> — Add another Verse → Chorus, maybe with a Bridge before the final Chorus." },
      { text: "<strong>End with an Outro</strong> — Bring the song to a close." },
      { text: "<strong>Aim for 64-96 bars</strong> (about 2:30-4:00 at 120 BPM)." }
    ]
  },
  
  // ====================
  // ARRANGEMENT SECTIONS
  // ====================
  arrangementSections: [
    { type: "intro", label: "Intro", bars: 8, energy: 25, color: "green" },
    { type: "verse", label: "Verse", bars: 16, energy: 50, color: "cyan" },
    { type: "chorus", label: "Chorus", bars: 16, energy: 90, color: "purple" },
    { type: "bridge", label: "Bridge", bars: 8, energy: 60, color: "pink" },
    { type: "buildup", label: "Buildup", bars: 8, energy: 70, color: "amber" },
    { type: "drop", label: "Drop", bars: 16, energy: 100, color: "red" },
    { type: "breakdown", label: "Breakdown", bars: 8, energy: 35, color: "blue" },
    { type: "outro", label: "Outro", bars: 8, energy: 20, color: "gray" }
  ],
  
  // ====================
  // TEMPLATE ARRANGEMENTS
  // ====================
  templates: {
    pop: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "verse", bars: 16, energy: 50 },
      { type: "chorus", bars: 16, energy: 90 },
      { type: "verse", bars: 16, energy: 55 },
      { type: "chorus", bars: 16, energy: 95 },
      { type: "bridge", bars: 8, energy: 60 },
      { type: "chorus", bars: 16, energy: 100 },
      { type: "outro", bars: 8, energy: 20 }
    ],
    edm: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "buildup", bars: 16, energy: 65 },
      { type: "drop", bars: 16, energy: 100 },
      { type: "breakdown", bars: 8, energy: 35 },
      { type: "buildup", bars: 8, energy: 75 },
      { type: "drop", bars: 16, energy: 100 },
      { type: "outro", bars: 8, energy: 20 }
    ]
  },
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    minBars: 64,
    maxBars: 120,
    requiredSections: ["intro", "outro"],
    requiredPeaks: 1, // Must have at least one chorus or drop
    peakTypes: ["chorus", "drop"]
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Build an arrangement with 64-96 bars to complete this exercise.",
    success: "Excellent! Your arrangement has great structure. You've completed this lesson!",
    error: "Not quite there yet. Make sure you have an intro, at least one chorus/drop, and an outro.",
    alreadyCompleted: "You've already completed this exercise. Feel free to experiment more!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "arrangement", // Different from drum lessons
    sandbox: false,
    showEnergyGraph: true,
    showStructureType: true,
    enableTemplates: true
  },
  
  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Song Structure Matters",
        content: `
**From Loop to Song:**
You've created amazing drum patterns and melodic loops, but a loop isn't a song. Loops are circular—they repeat endlessly without going anywhere. Songs are linear journeys with a beginning, middle, and end. They take listeners on an emotional ride, building anticipation, delivering payoffs, and creating memorable moments.

**The Problem with Loops:**
Even the best 8-bar loop gets boring after 30 seconds. Your brain craves variety, contrast, and narrative. Professional producers understand this: the magic isn't in making better loops—it's in knowing how to arrange them into compelling songs.

**Energy Flow is Everything:**
Great arrangements manage energy like a rollercoaster. They build tension, release it, create valleys of calm, and peaks of intensity. Listeners stay engaged because they're constantly anticipating what comes next. A flat, constant-energy track—no matter how good the sounds—will bore people within a minute.

**The Two Main Approaches:**

1. **Pop/Rock Structure (Verse-Chorus)**: Based on storytelling and vocal hooks. Think of it as a conversation: verses deliver the narrative (lower energy), choruses deliver the emotional punch (higher energy). This structure has dominated popular music for decades because it mirrors how humans communicate—setup, then payoff.

2. **EDM Structure (Build-Drop-Breakdown)**: Based on energy manipulation and physical response. Buildups create unbearable tension, drops release it explosively, and breakdowns give dancers a chance to breathe. This structure is optimized for the dancefloor, where energy = movement.

**Real-World Examples:**
- "Blinding Lights" by The Weeknd uses Intro → Verse → Chorus → Verse → Chorus → Bridge → Chorus (classic pop)
- "Levels" by Avicii uses Intro → Build → Drop → Breakdown → Build → Drop (classic EDM)
- Both are massive hits, but their structures serve completely different purposes and audiences.
        `
      },
      {
        title: "Understanding Song Sections",
        content: `
**The Essential Sections:**

**Intro (4-8 bars):**
Your first impression. The intro's job is to hook the listener immediately and establish the vibe. In pop music, intros often feature the signature instrumental riff or melody. In EDM, intros typically start minimal and gradually introduce elements. Keep it under 15 seconds—radio programmers and streaming algorithms favor quick hooks.

**Verse (8-16 bars):**
The storytelling section. Verses deliver information and set up the emotional context. They're typically lower in energy than choruses, with more space for vocals and fewer instrumental layers. Verses should feel like questions that the chorus answers.

**Chorus (8-16 bars):**
The emotional and energetic peak. This is your hook—the part people remember and sing along to. Choruses use the fullest arrangement with all elements playing. Melodically and lyrically, choruses are simpler and more repetitive than verses because they need to stick in memory instantly.

**Bridge (8 bars):**
The surprise element. Bridges provide contrast—a different chord progression, a new melodic idea, or a shift in perspective. They appear about 2/3 through the song, just when repetition is becoming predictable. A great bridge makes the final chorus hit even harder by creating contrast.

**Buildup (8-16 bars - EDM):**
Pure tension creation. Buildups use risers, filter sweeps, increasing drum complexity, and rising pitch to create unbearable anticipation. The last 4-8 bars often strip away drums entirely, leaving just a riser sound before the drop. Physical tension in buildups translates to physical release in drops.

**Drop (16 bars - EDM):**
The payoff. Drops are the moment of maximum energy and fullest arrangement. After a buildup's tension, drops deliver relief and excitement. The best drops have a clear hook—a signature synth line, vocal chop, or bass pattern that defines the track.

**Breakdown (8 bars - EDM):**
The recovery period. After a massive drop, breakdowns strip the arrangement back down to give listeners (and dancers) a rest. They often feature just pads, vocals, and light percussion. Breakdowns set up the next buildup by creating energy contrast.

**Outro (4-8 bars):**
The exit. Outros bring closure by gradually removing elements and reducing energy. They can fade out (gradually lowering volume) or end abruptly. Great outros leave a lasting impression—sometimes referencing the intro for symmetry.
        `
      },
      {
        title: "Applying Structure in Your DAW",
        content: `
**The Arrangement View:**
Every DAW has an "arrangement view" or "timeline view" where you build song structure. This is different from the "loop view" or "pattern view" where you create individual patterns. Learn to think in this view—it's where loops become songs.

**Use Markers and Color Coding:**
- Mark sections with colored regions: Verse (blue), Chorus (red), Bridge (purple), etc.
- This visual organization helps you see the big picture
- Most DAWs let you name and color regions—use this!

**The 4/8 Bar Rule:**
Song sections almost always come in multiples of 4 or 8 bars. This is because:
- Human ears perceive musical phrases in 4-bar chunks
- It creates a sense of completion and symmetry
- DJs can mix tracks that use this structure

**Practical Workflow:**
1. **Start with one loop** (8-16 bars) that represents your chorus or drop
2. **Create variations** by removing elements for verses/buildups
3. **Arrange them in time** following a structure template
4. **Add transitions** between sections (next lesson!)
5. **Check the energy flow** - does it build and release appropriately?

**Common Mistakes to Avoid:**
- **Too short**: Under 2 minutes feels incomplete (except for TikTok/Reels)
- **Too long**: Over 4 minutes without variation loses listener attention
- **Flat energy**: Every section at the same intensity = boring
- **Abrupt changes**: Sections that don't connect smoothly sound amateur
- **No variation**: Repeating the exact same chorus 3 times without any changes

**Pro Tip - The "Energy Check":**
Play your arrangement and ask: "If I were at a club/concert, would this keep me engaged?" The energy should constantly shift—building, releasing, surprising, and satisfying. If you find yourself getting bored during playback, your listeners definitely will too.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the concept of song sections (intro, verse, chorus, bridge, outro)",
    "Learn common song structures for Pop/Rock (ABABCB) and EDM (Build-Drop-Breakdown)",
    "Visualize energy flow across a song arrangement",
    "Create a complete arrangement with proper structure",
    "Understand the 5 elements of arrangement: Foundation, Pad, Rhythm, Lead, Fills"
  ],
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
