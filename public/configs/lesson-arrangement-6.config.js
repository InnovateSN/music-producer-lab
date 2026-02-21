/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 6 - EDM & Electronic Structures
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-6-progress",
  lessonNumber: 6,
  lessonCategory: "Arrangement",

  progression: {
    difficulty: "beginner",
    prerequisites: ["arrangement-5"],
    outcomes: ["Completare gli obiettivi pratici di arrangement-6","Consolidare competenze beginner nel modulo arrangement"]
  },
  depthLevel: 4,
  
  nextLessonUrl: "lesson-arrangement-7.html",
  prevLessonUrl: "lesson-arrangement-5.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Arrangement" }),
    title: "EDM & Electronic",
    titleHighlight: "Structures",
    subtitle: "Master <strong>build-drop-breakdown cycles</strong>. Learn <strong>tension building</strong> and <strong>impact moments</strong>."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build an EDM Track Structure",
    description: "Create a classic EDM arrangement using the <strong>Build-Drop-Breakdown</strong> cycle. This structure is essential for house, techno, trance, and most electronic dance music. Learn to control energy flow and create maximum impact.",
    tip: "The drop should feel like a payoff after the buildup. Use all 4-5 arrangement elements in the drop for maximum energy, then strip back to 2-3 elements in the breakdown.",
    steps: [
      { text: "<strong>Start with an Intro</strong> (8-16 bars) - DJ-friendly, minimal elements" },
      { text: "<strong>Add a Buildup</strong> (8-16 bars) - Rising tension with risers and filter sweeps" },
      { text: "<strong>Create the Drop</strong> (16-32 bars) - Full energy with all elements" },
      { text: "<strong>Add a Breakdown</strong> (8-16 bars) - Strip back to create contrast" },
      { text: "<strong>Repeat the cycle</strong> - Second buildup and drop for a complete track" },
      { text: "<strong>End with an Outro</strong> (8 bars) - DJ-friendly minimal ending" }
    ]
  },

  // ====================
  // SECTION DEFINITIONS
  // ====================
  sections: [
    { id: "intro", name: "Intro", bars: "8-16", energy: 30, description: "DJ-friendly, minimal" },
    { id: "buildup", name: "Buildup", bars: "8-16", energy: 70, description: "Rising tension" },
    { id: "drop", name: "Drop", bars: "16-32", energy: 100, description: "Maximum energy" },
    { id: "breakdown", name: "Breakdown", bars: "8-16", energy: 40, description: "Stripped back" }
  ],
  
  buildupTechniques: [
    { id: "riser", name: "Risers", description: "White noise/synth sweeps" },
    { id: "snare-roll", name: "Snare Rolls", description: "Increasing density" },
    { id: "filter", name: "Filter Sweeps", description: "HP filter opening" },
    { id: "pitch", name: "Pitch Rising", description: "Elements rising in pitch" }
  ],
  
  messages: applyMessagePreset("arrangement", {
    initial: "Build an EDM structure with build-drop-breakdown!",
    success: "🎛️ Perfect EDM structure! The tension and release are perfectly balanced.",
    error: "Make sure you have clear buildup before the drop."
  }),

  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    type: "structure_arrangement",
    minBars: 64,
    maxBars: 128,
    requiredSections: ["intro", "buildup", "drop", "breakdown"],
    minDrops: 1,
    minBuildups: 1,
    requireEnergyPeak: true,
    peakEnergyMin: 90
  },

  mode: { type: "structure-builder", showTimeline: true, showEnergyGraph: true },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "The EDM Build-Drop-Breakdown Cycle",
        content: `
**Why EDM Structures Are Different:**
Unlike pop/rock which prioritizes storytelling through verses and choruses, EDM structures prioritize physical response and energy manipulation. The genre exists primarily for dance floors where music isn't background—it's the main event. EDM structures are designed to control crowd energy: build unbearable tension, release it explosively, provide rest, then repeat.

**The Physics of Tension and Release:**
The build-drop cycle works because of basic human psychology: tension creates anticipation, and the longer you can sustain it, the more powerful the release feels. Buildups literally increase physiological tension (rising heart rate, muscle tension), and drops provide cathartic release. This isn't metaphorical—you can measure it with biometrics.

**The Three Core Sections:**
1. **Buildup**: Create tension using risers, filter sweeps, increasing drum complexity, and rising pitch
2. **Drop**: Release tension with full-energy arrangement and signature hook
3. **Breakdown**: Provide recovery time with stripped-back elements before building again

**Why 8/16/32 Bar Phrases Matter:**
EDM tracks use strict 8/16/32-bar phrasing because DJs need predictable structures for beatmatching and mixing. When every track uses the same phrase lengths, DJs can seamlessly transition between songs. This isn't creative limitation—it's functional design for the medium (DJ performance).

**The Energy Graph Pattern:**
If you visualized EDM energy on a graph, you'd see a sawtooth wave:
- Intro: Low (30%)
- Buildup: Rising (30% → 70%)
- Drop: Peak (100%)
- Breakdown: Valley (40%)
- Buildup 2: Rising (40% → 80%)
- Drop 2: Peak (100%)
- Outro: Falling (30% → 0%)

This pattern keeps dancers engaged through constant energy variation. Flat energy = bored dancers = empty floor.

**Real-World Examples:**
- "Animals" by Martin Garrix: Classic 16-bar buildup → 32-bar drop → 16-bar breakdown cycle
- "Levels" by Avicii: Intro-Build-Drop-Breakdown-Build-Drop (no bridge, pure energy cycles)
- "Titanium" by David Guetta: Pop/EDM hybrid using vocals in breakdowns
- "Strobe" by deadmau5: Extended 10-minute progressive structure with multiple build/drop cycles
        `
      },
      {
        title: "The Four Essential EDM Sections Explained",
        content: `
**Intro (8-16 bars) - The DJ Entry Point:**
Purpose: Provide a beatmatched entry point for DJs to mix into

Characteristics:
- Minimal elements (usually just drums + bass or a single melodic loop)
- Consistent energy (no buildups yet)
- Establishes tempo and key instantly
- Often references the main drop hook in stripped form

*Best Practices:*
- Keep it DJ-friendly: 8-16 bars of consistent energy
- Start with kick drum on beat 1 (crucial for beatmatching)
- Avoid complex changes—DJs need stability for mixing
- Can be instrumental-only or feature minimal vocals

*Common Mistake:* Complex intros with multiple changes. DJs skip these—they want clean, mixable 8-16 bars.

**Buildup (8-16 bars) - The Tension Creator:**
Purpose: Create unbearable anticipation before the drop

Characteristics:
- Rising energy from 40% → 80%
- Layered tension elements: risers, snare rolls, filter sweeps
- Often features rising pitch on melodic elements
- Final 1-4 bars strip drums entirely (just the riser before the drop)
- Ends with brief silence (1/4 beat before drop for maximum impact)

*Essential Buildup Techniques:*
1. **White Noise Risers**: Sweeping upward from low to high frequencies
2. **Snare Rolls**: Increasing from 1/4 notes → 1/8 notes → 1/16 notes
3. **High-Pass Filter Sweeps**: Gradually opening filter to add brightness
4. **Pitch Rising**: Melodic elements rising 1-2 semitones
5. **Vocal Chops**: "Here we go" / "Drop it" (classic EDM move)
6. **Silence Before Drop**: Cut everything for 1/4-1/2 beat before impact

*Timing Variations:*
- 8 bars: Quick, aggressive buildups (big room house, trap)
- 12 bars: Standard buildup length (most EDM)
- 16 bars: Extended builds for progressive house/trance

*Common Mistake:* Buildups that don't actually build. Every bar should add something: more risers, faster snares, higher pitch. If energy plateaus, the drop won't hit.

**Drop (16-32 bars) - The Payoff:**
Purpose: Deliver maximum energy and the track's signature hook

Characteristics:
- 100% energy—fullest possible arrangement
- Features the main hook (synth lead, bass pattern, or vocal hook)
- Uses all 4-5 Bobby Owsinski elements simultaneously
- Maintains high energy consistently (no variation within the drop itself)
- Typically 16 bars for first drop, 32 bars for final drop

*Elements of a Great Drop:*
- **Signature Sound**: One unique, memorable sound (the hook)
- **Powerful Kick**: Massive, punchy, dominates the low-end
- **Rolling Bass**: Sub-bass or bass line driving the groove
- **Top-End Energy**: Hi-hats, shakers, white noise for brightness
- **Melodic Hook**: Simple, repetitive, catchy

*Drop Variations:*
- **First Drop (16 bars)**: Introduce the hook, keep it tight
- **Second Drop (32 bars)**: Extend it, add variations, go bigger
- **Final Drop**: Often includes key change or extra elements for climax

*Common Mistakes:*
- Drops that are too busy (15 competing synths = mud)
- Drops with no clear hook (listeners need a focal point)
- Weak kicks (kick should be the loudest, punchiest element)
- Drops that change too much (consistency within the drop creates impact)

**Breakdown (8-16 bars) - The Recovery Period:**
Purpose: Provide rest and contrast before building again

Characteristics:
- Low energy (30-50%)
- Stripped-back arrangement (2-3 elements max)
- Often features vocals, pads, or atmospheric elements
- Creates valley energy to make next drop feel even bigger
- Provides dancers literal physical recovery time

*Common Breakdown Elements:*
- Vocal hooks or verses (often without drums)
- Atmospheric pads or strings
- Light percussion (shakers, hi-hats only)
- Melodic elements from the drop, but quiet and sustained

*Best Practices:*
- Make breakdowns noticeably quieter than drops (30-50% energy)
- Strip drums entirely or use only light percussion
- Feature vocals or emotional melodic content
- Keep it 8-16 bars—long enough for contrast, short enough not to kill momentum

*When to Use:*
- After first drop (Drop 1 → Breakdown → Buildup 2 → Drop 2)
- In longer progressive tracks, multiple breakdowns create journey-like structures

*Common Mistake:* Breakdowns that are too similar to the drop energy. The point is contrast—if your breakdown feels like a quieter drop, it's not doing its job.
        `
      },
      {
        title: "Building EDM Structures in Your DAW",
        content: `
**The Classic EDM Structure Template:**

**Bars 1-16: Intro**
- Elements: Kick + bass (minimal, DJ-friendly)
- Energy: 30%

**Bars 17-32: Buildup 1**
- Elements: Add risers, snare rolls, filter sweeps over 16 bars
- Energy: 30% → 80%
- Final 2 bars: Strip drums, just riser + silence before drop

**Bars 33-48: Drop 1**
- Elements: Full arrangement (kick, bass, synth hook, hi-hats, all elements)
- Energy: 100%
- Length: 16 bars

**Bars 49-64: Breakdown 1**
- Elements: Vocals/pads + light percussion only
- Energy: 40%
- Length: 16 bars

**Bars 65-80: Buildup 2**
- Elements: Same as Buildup 1 but even more intense
- Energy: 40% → 90%

**Bars 81-112: Drop 2 (Extended)**
- Elements: Full arrangement + add extra layers for bigger feel
- Energy: 100%
- Length: 32 bars (double the first drop)

**Bars 113-128: Outro**
- Elements: Kick + bass (mirror of intro for DJ mixing out)
- Energy: 30% → 0%
- Length: 16 bars

**Total: 128 bars = ~4:00 at 128 BPM**

**DAW Workflow:**

**Step 1: Set BPM and Grid**
- EDM tempos: House (120-130), Trance (130-140), Dubstep (140-150), Trap (140-160)
- Enable snap-to-grid at 1-bar resolution
- Create markers for each section

**Step 2: Build the Drop First (Reverse Engineering)**
Most professional EDM producers build the drop first, then create everything else around it:
- Create a 16-bar loop with kick, bass, hook, and all elements
- This is your energy reference point—everything else derives from it

**Step 3: Create the Breakdown (Strip Elements)**
Duplicate the drop, then remove elements:
- Remove: Kick, bass, main synth hook
- Keep: Atmospheric pads, vocals, light percussion
- Add: Reverb tails, space, emotion

**Step 4: Create the Buildup (Tension Elements)**
8-16 bars before each drop:
- Bars 1-8: Add white noise riser (starting quiet, ending loud)
- Bars 5-8: Add snare roll (increasing from 1/4 notes to 1/16 notes)
- Bars 7-8: High-pass filter sweep (opening from 1kHz to full spectrum)
- Final bar: Strip everything except riser → silence for 1/4 beat → DROP

**Step 5: Create the Intro/Outro (DJ Tools)**
- Intro = Drop elements but minimal (just kick + bass loop)
- Outro = Same as intro (for mixing out)

**Step 6: Arrange on Timeline**
Drag sections into timeline following the template above. Color-code:
- Intro/Outro: Gray
- Buildup: Yellow
- Drop: Red
- Breakdown: Blue

**Step 7: Energy Flow Check**
Zoom out and look at waveforms:
- Buildups should show increasing density
- Drops should show maximum amplitude
- Breakdowns should show significant reduction
- Clear sawtooth pattern overall

**Advanced Variations:**

**Progressive House (Extended Journey):**
- Intro (16) → Build (16) → Drop (32) → Break (16) → Build (16) → Drop (32) → Outro (16)
- Total: 144 bars (~5:00)
- Emphasizes longer builds and extended drops

**Big Room / Festival EDM:**
- Shorter builds (8 bars), massive drops (32 bars)
- Emphasis on impact over complexity

**Trap / Bass Music:**
- Half-time feel (70-75 BPM but 140-150 BPM grid)
- Drops feature heavy bass and sparse drums
- Buildups use vocal chops and risers

**Pro Tips:**

**The "8-Bar Rule":** Every section should be divisible by 8. DJs need phrase markers every 8/16/32 bars for beatmatching.

**The "Silence Before Impact":** Cut everything (including risers) for 1/4 to 1/2 beat immediately before the drop. This micro-silence makes the drop hit 10x harder.

**The "Second Drop Extension":** First drop = 16 bars (introduce the hook), Second drop = 32 bars (let them dance to it). This is standard in almost all professional EDM.

**The "Breakdown Vocal Rule":** Breakdowns are where vocals shine. Even instrumental EDM often features vocal hooks or toplines in breakdowns for emotional peaks.

**Reference Mixing:** Pull up 3 professional EDM tracks in your genre. Analyze exactly how long each section is, where buildups start, when drops hit. You'll notice consistent patterns—use them as templates.

Master the build-drop-breakdown cycle, and you've mastered the core of EDM production. It's not about complexity—it's about tension and release, over and over, creating a physical and emotional journey on the dance floor.
        `
      }
    ]
  },

  learningObjectives: [
    "Create effective buildups with risers and snare rolls",
    "Design impactful drops with full arrangement",
    "Use breakdowns for contrast and rest",
    "Structure DJ-friendly tracks in 8/16/32 bar phrases"
  ],

  // ====================
  // REFERENCE SOURCES
  // ====================
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
