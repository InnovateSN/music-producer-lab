/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 2 - Transitions & Energy Flow
 * 
 * This lesson teaches transition techniques: risers, falls, filter sweeps,
 * drum fills, and strategic silence.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-2-progress",
  lessonNumber: 2,
  lessonCategory: "Arrangement",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-3.html",
  prevLessonUrl: "lesson-arrangement-1.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Arrangement" }),
    title: "Transitions & Energy:",
    titleHighlight: "The Glue Between Sections",
    subtitle: "Learn how to connect sections seamlessly using <strong>risers</strong>, <strong>falls</strong>, <strong>filter sweeps</strong>, <strong>drum fills</strong>, and <strong>strategic silence</strong>. Great transitions are what separate amateur tracks from professional productions."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Add Transitions to an Arrangement",
    description: "Place appropriate transitions between sections in a pre-built arrangement. Match the transition type to the energy change between sections.",
    tip: "Think about energy flow. Verse→Buildup needs energy building (riser/filter). Drop→Breakdown needs energy releasing (fall).",
    steps: [
      { text: "<strong>Select a transition tool</strong> from the palette (Riser, Fall, Filter, Fill, or Silence)." },
      { text: "<strong>Click the (+) slots</strong> between sections to place your transition." },
      { text: "<strong>Match transitions to context</strong> — risers before energy increases, falls after peaks." },
      { text: "<strong>Fill all 3 transition slots</strong> to complete the exercise." }
    ]
  },
  
  // ====================
  // TRANSITION TECHNIQUES
  // ====================
  transitionTechniques: [
    {
      type: "riser",
      name: "Risers (Uplifters)",
      icon: "📈",
      color: "green",
      description: "Sweeps upward in pitch or intensity. Creates tension and anticipation before drops/choruses.",
      uses: ["Before drops", "Before choruses", "Building tension"],
      energyEffect: "building"
    },
    {
      type: "fall",
      name: "Falls (Downlifters)",
      icon: "📉",
      color: "purple",
      description: "Sweeps downward to release built-up energy. Used after drops to settle into new sections.",
      uses: ["After drops", "Into breakdowns", "Energy release"],
      energyEffect: "releasing"
    },
    {
      type: "filter",
      name: "Filter Sweeps",
      icon: "🎛️",
      color: "amber",
      description: "Gradually opens/closes a low-pass filter. Opening brightens (builds); closing creates underwater effect (reduces).",
      uses: ["Buildups", "Intros/Outros", "Smooth transitions"],
      energyEffect: "variable"
    },
    {
      type: "fill",
      name: "Drum Fills",
      icon: "🥁",
      color: "pink",
      description: "Rhythmic break in the drum pattern—snare rolls, tom fills, kick patterns that signal section changes.",
      uses: ["End of sections", "Before choruses", "Every 8-16 bars"],
      energyEffect: "signaling"
    },
    {
      type: "silence",
      name: "Silence / Gaps",
      icon: '<img src="images/speakeroff.png" alt="🔇" style="width: 1.5em;">',
      color: "gray",
      description: "Brief silence before impact. Even 1/4 beat of silence before a drop makes it hit 10x harder.",
      uses: ["Before big drops", "Dramatic effect", "Reset listener"],
      energyEffect: "impact"
    }
  ],
  
  // ====================
  // EXERCISE SECTIONS
  // ====================
  exerciseSections: [
    { type: "verse", bars: 16, energy: 50 },
    { type: "buildup", bars: 8, energy: 70 },
    { type: "chorus", bars: 16, energy: 100 },
    { type: "breakdown", bars: 8, energy: 40 }
  ],
  
  // ====================
  // SUGGESTED SOLUTION
  // ====================
  suggestedSolution: ["fill", "riser", "fall"],
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    requiredSlots: 3,
    validChoices: {
      0: ["fill", "filter", "riser"], // Verse → Buildup
      1: ["riser", "filter", "silence"], // Buildup → Chorus
      2: ["fall", "filter", "silence"] // Chorus → Breakdown
    }
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Add transitions to all 3 slots to complete this exercise.",
    success: "Excellent! Your transitions make musical sense! You've completed this lesson.",
    error: "Add some transitions first! Select a tool and click the (+) slots.",
    alreadyCompleted: "You've already completed this exercise. Feel free to experiment more!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "transitions",
    sandbox: false,
    showEnergyPreview: true
  },
  
  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Transitions Make or Break Your Track",
        content: `
**The Problem with Hard Cuts:**
Imagine watching a movie where every scene change is a jarring jump—no fade, no camera movement, just BAM, new scene. That's what arrangements sound like without proper transitions. Even if your individual sections are brilliant, hard cuts between them sound amateur and disrupt the listening experience.

**Transitions are Emotional Bridges:**
Great transitions do more than connect sections—they guide the listener's emotional journey. They create anticipation before big moments, provide relief after intense sections, and maintain momentum throughout the song. Professional producers spend significant time crafting transitions because they know: the journey between sections is just as important as the sections themselves.

**The Energy Direction Principle:**
Every transition should match the energy direction between sections. Moving from low to high energy? Use a riser or filter opening. Moving from high to low? Use a fall or filter closing. Transitions that fight against natural energy flow feel wrong, even if listeners can't articulate why.

**The 5 Essential Transition Techniques:**
Every professional track uses combinations of these five core techniques. Master them, and you'll never have an awkward section change again.

**Real-World Context:**
Listen to any professional EDM track and count the transitions. In a typical 3-minute track, you'll find 10-15 transition moments using various techniques. In pop/rock, drum fills and filter sweeps are everywhere—often subtle, but always present. The absence of transitions is one of the clearest markers of amateur production.
        `
      },
      {
        title: "The 5 Transition Techniques Explained",
        content: `
**1. Risers (Uplifters) - The Tension Builders:**
Risers sweep upward in pitch, intensity, or both, creating mounting tension. They're essentially audio manifestations of anticipation. The brain interprets rising pitch as increasing importance, making risers perfect before drops, choruses, or any high-energy section.

*How to Create:*
- Use white noise or synth pads with automation on pitch/filter frequency
- Gradually increase volume over 4-8 bars
- Common in EDM: the classic "noise riser" before every drop
- Add reverb for size and impact

*When to Use:* Before drops, before choruses, during buildups, any moment requiring tension


**2. Falls (Downlifters) - The Release:**
Falls sweep downward, releasing built-up energy and signaling relaxation. They're the exhale after the riser's inhale. Falls tell the listener "the peak is over, we're settling into something new."

*How to Create:*
- Reverse of a riser: decreasing pitch/filter frequency
- Works perfectly after drops to transition into breakdowns
- Often shorter than risers (1-2 bars vs 4-8)
- Combine with reverb tails for smoothness

*When to Use:* After drops, into breakdowns, after choruses, any energy decrease


**3. Filter Sweeps - The Frequency Shapers:**
Filter sweeps gradually open or close a low-pass filter, changing the brightness and perceived energy of elements. Opening a filter (low to high frequency) builds energy by adding brightness. Closing a filter (high to low) reduces energy by making sounds muffled and distant.

*How to Create:*
- Apply a low-pass filter to drums, bass, or full mix
- Automate cutoff frequency over 2-8 bars
- Opening = building energy, closing = reducing energy
- The "underwater to surface" effect

*When to Use:* Intros (opening), outros (closing), buildups, transitions between any sections, creating the "radio turning on/off" effect


**4. Drum Fills - The Section Signals:**
Drum fills are short rhythmic breaks that signal "something's about to change." They're the drummer's announcement that a new section is coming. Even in electronic music with programmed drums, fills serve this critical signaling function.

*How to Create:*
- Replace the last 1-2 bars of a section with variation
- Common patterns: snare rolls, tom cascades, kick patterns
- Keep them short—fills that are too long lose impact
- Use crescendos (increasing volume) for extra emphasis

*When to Use:* End of verses before choruses, every 8-16 bars for variation, before any significant section change, to prevent monotony


**5. Silence / Gaps - The Impact Multipliers:**
Brief moments of silence before big moments make them hit exponentially harder. Even 1/4 to 1/2 second of silence before a drop can make it feel 10x more impactful. Silence creates a micro-reset in the listener's brain, making the subsequent sound feel fresh and massive.

*How to Create:*
- Mute all elements for 1/4 to 1 beat before the drop/chorus
- Often combined with the tail end of a riser
- Don't overdo it—too much silence breaks the flow
- The "breath before the scream" effect

*When to Use:* Immediately before massive drops, before final choruses, for dramatic effect, to create "wait for it..." moments
        `
      },
      {
        title: "Choosing and Combining Transitions",
        content: `
**The Energy Direction Matrix:**

**Verse → Buildup (Low to Medium Energy):**
- Use drum fills to signal the change
- Add filter sweeps (opening) for subtle energy increase
- Light risers if the buildup is intense

**Buildup → Chorus/Drop (Medium to High Energy):**
- Risers are essential—create maximum tension
- Often combine riser + silence (final 1/4 beat)
- Filter fully opening at the peak moment

**Chorus/Drop → Breakdown (High to Low Energy):**
- Falls immediately after the peak
- Filter sweeps (closing) for the underwater effect
- Reverb tails to smooth the transition

**Breakdown → Buildup (Low to Medium Energy):**
- Filter sweeps (opening) to reintroduce brightness
- Light risers in the final bars
- Drum fills to signal incoming energy


**Combining Multiple Techniques:**
Professional producers layer transitions for maximum impact:
- Riser + Filter Opening + Drum Fill = Triple threat before drop
- Fall + Filter Closing = Smooth post-drop transition
- Silence + Riser = Maximum tension before payoff

**Timing Matters:**
- Short transitions (1-2 bars): Quick changes, maintains energy
- Medium transitions (4 bars): Standard, gives time for anticipation
- Long transitions (8+ bars): Buildups, extended tension


**Common Mistakes:**
- **Every transition the same**: Becomes predictable and boring
- **Too many layers**: Risers + falls + fills + everything = messy
- **Wrong energy direction**: Rising transition into a breakdown = confusion
- **No transitions**: Sounds like a DJ poorly mixing two tracks
- **Too obvious**: Subtlety often works better than constant WHOOSH sounds


**Pro Tip - Reference Listening:**
Pull up three professional tracks in your genre. Listen specifically for transitions—ignore everything else. You'll hear:
- Transitions every 4-8 bars minimum
- Combinations of techniques used together
- Subtle use of filter sweeps you might have missed
- Strategic silence before big moments

Learn by listening, then apply these techniques intentionally in your own work. Transitions aren't optional flourishes—they're structural necessities that separate amateur productions from professional releases.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the 5 essential transition techniques: Risers, Falls, Filter Sweeps, Drum Fills, Silence",
    "Know when to use each technique based on energy direction",
    "Apply transitions at appropriate points in an arrangement",
    "Create smooth, professional-sounding section changes",
    "Understand the timing of transitions (1-2, 4, 8, 16 bars)"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
