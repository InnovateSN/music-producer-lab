/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 3 - Arrange a Complete Track (Capstone)
 * 
 * This is the capstone lesson where students create a full 3-4 minute
 * arrangement using everything learned in the module.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-3-progress",
  lessonNumber: 3,
  lessonCategory: "Arrangement",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-arrangement-2.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Arrangement" }),
    title: "Arrange a Complete Track:",
    titleHighlight: "Your First Full Song",
    subtitle: "This is it—put <strong>everything together</strong>. Build a complete 3-4 minute track from scratch, using sections from Lesson 1 and transitions from Lesson 2. Create a <strong>professional arrangement</strong> ready to fill with your own sounds."
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build Your Complete Track",
    description: "Create a full arrangement with 80-120 bars, at least 2 peak sections, proper intro/outro, and transitions between every section change.",
    tip: "Start with a template structure you know works, then customize it. Learn the rules first, then break them intentionally.",
    steps: [
      { text: "<strong>Choose your genre</strong> — Pop/Rock or EDM (changes recommended sections)." },
      { text: "<strong>Add sections</strong> — Click buttons to add sections to your timeline." },
      { text: "<strong>Add transitions</strong> — Select a transition tool, then click after sections to place it." },
      { text: "<strong>Check the checklist</strong> — Make sure all requirements are met." },
      { text: "<strong>Validate your arrangement</strong> — Click \"Complete Track\" when ready!" }
    ]
  },
  
  // ====================
  // GENRE PRESETS
  // ====================
  genres: {
    pop: {
      name: "Pop/Rock",
      icon: "🎤",
      sections: [
        { type: "intro", bars: 8, energy: 25 },
        { type: "verse", bars: 16, energy: 50 },
        { type: "prechorus", bars: 8, energy: 65 },
        { type: "chorus", bars: 16, energy: 90 },
        { type: "bridge", bars: 8, energy: 55 },
        { type: "outro", bars: 8, energy: 20 }
      ]
    },
    edm: {
      name: "EDM",
      icon: "🎧",
      sections: [
        { type: "intro", bars: 8, energy: 25 },
        { type: "buildup", bars: 8, energy: 70 },
        { type: "drop", bars: 16, energy: 100 },
        { type: "breakdown", bars: 8, energy: 40 },
        { type: "outro", bars: 8, energy: 20 }
      ]
    }
  },
  
  // ====================
  // TEMPLATES
  // ====================
  templates: {
    pop: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "fill", isTransition: true },
      { type: "verse", bars: 16, energy: 50 },
      { type: "fill", isTransition: true },
      { type: "prechorus", bars: 8, energy: 65 },
      { type: "riser", isTransition: true },
      { type: "chorus", bars: 16, energy: 90 },
      { type: "fall", isTransition: true },
      { type: "verse", bars: 16, energy: 55 },
      { type: "fill", isTransition: true },
      { type: "chorus", bars: 16, energy: 95 },
      { type: "filter", isTransition: true },
      { type: "bridge", bars: 8, energy: 60 },
      { type: "riser", isTransition: true },
      { type: "chorus", bars: 16, energy: 100 },
      { type: "fall", isTransition: true },
      { type: "outro", bars: 8, energy: 20 }
    ],
    edm: [
      { type: "intro", bars: 8, energy: 25 },
      { type: "filter", isTransition: true },
      { type: "buildup", bars: 16, energy: 70 },
      { type: "riser", isTransition: true },
      { type: "drop", bars: 16, energy: 100 },
      { type: "fall", isTransition: true },
      { type: "breakdown", bars: 8, energy: 40 },
      { type: "filter", isTransition: true },
      { type: "buildup", bars: 8, energy: 75 },
      { type: "riser", isTransition: true },
      { type: "drop", bars: 16, energy: 100 },
      { type: "fall", isTransition: true },
      { type: "outro", bars: 8, energy: 20 }
    ]
  },
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    minBars: 80,
    maxBars: 120,
    minPeaks: 2,
    peakTypes: ["chorus", "drop"],
    requireIntro: true,
    requireOutro: true,
    minTransitions: 2,
    requireEnergyVariety: true,
    energyVarietyThreshold: 30 // Difference between max and min energy
  },
  
  // ====================
  // CHECKLIST ITEMS
  // ====================
  checklist: [
    { key: "intro", label: "Has Intro" },
    { key: "outro", label: "Has Outro" },
    { key: "peaks", label: "2+ Peak Sections" },
    { key: "length", label: "80-120 Bars" },
    { key: "transitions", label: "Has Transitions" },
    { key: "energy", label: "Energy Variety" }
  ],
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Build your arrangement to meet all checklist requirements.",
    success: "Amazing! You've created a complete, professional arrangement!",
    error: "Almost there! Check the requirements that aren't checked yet.",
    alreadyCompleted: "You've completed this module! Feel free to experiment more."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "fullTrack",
    sandbox: false,
    showChecklist: true,
    showEnergyGraph: true,
    enableUndo: true,
    enableTemplates: true,
    enableGenreSwitch: true
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Creating Your First Complete Track",
        content: `
**The Milestone Moment:**
This is where everything clicks. You've learned song structure (Lesson 1) and transitions (Lesson 2). Now you'll apply both skills simultaneously to create a full, professional arrangement. This isn't just an exercise—it's your first complete track template that you can fill with your own sounds and release.

**Why This Matters:**
Most beginner producers never finish tracks. They create amazing loops, collect presets, watch tutorials, but never reach the finish line. Why? Because they don't understand arrangement structure. They can make a great 8-bar loop but don't know how to turn it into a 3-minute song. This lesson solves that problem once and for all.

**The Capstone Approach:**
This is a "capstone" lesson—it combines everything you've learned in this module into one complete deliverable. Think of it as your final exam, except instead of a grade, you get a finished track template that proves you can structure songs professionally.

**What You're Building:**
A complete 80-120 bar arrangement (roughly 3-4 minutes at 120 BPM) with proper structure, transitions, energy flow, and professional pacing. Once you finish this exercise, you'll have a blueprint you can reuse for every future track. Change the sounds, adjust the tempo, modify the sections slightly—but the structural foundation will work every time.

**The Two Paths (Pop vs EDM):**
We provide two genre templates because they approach energy and structure differently:

**Pop/Rock Structure** prioritizes storytelling and vocal hooks. The energy builds gradually, with verses providing narrative context and choruses delivering emotional peaks. This structure has dominated popular music for 60+ years because it mirrors human communication patterns—setup, then payoff, then variation, then bigger payoff.

**EDM Structure** prioritizes physical response and energy manipulation. Buildups create unbearable tension, drops release it explosively, and breakdowns provide recovery time before the next cycle. This structure is optimized for dance floors where energy directly translates to movement.

Both structures work. Your choice depends on your goals: vocal-focused track with lyrics? Choose pop. Instrumental club banger? Choose EDM. Want to blend both? That's advanced, but absolutely possible once you master each individually.
        `
      },
      {
        title: "The Professional Arrangement Checklist",
        content: `
Every professional track, regardless of genre, includes these six essential elements:

**1. Has a Clear Intro (4-8 bars):**
The intro's job is simple: hook the listener in under 15 seconds. In the streaming era, you have seconds to grab attention before people skip. Professional intros establish the vibe immediately—often featuring the signature hook or a stripped-down version of the chorus. Keep it short, keep it catchy, establish the tempo and key instantly.

**2. Has a Definitive Outro (4-8 bars):**
Outros provide closure and leave a lasting impression. The best outros reference the intro (creating symmetry) or introduce a final memorable hook. Don't just fade out randomly—plan your ending as carefully as your beginning. DJs appreciate clean outros because they make mixing easier.

**3. Contains 2+ Peak Sections (Choruses or Drops):**
Peaks are your "money moments"—the parts people remember and return to. One peak makes a track feel incomplete. Two peaks create satisfaction. Three peaks can work but risks overstaying your welcome. Space peaks appropriately: in pop, chorus 1 around 0:45, chorus 2 around 1:45, final chorus around 2:30. In EDM, drop 1 around 1:00, drop 2 around 2:15.

**4. Length: 80-120 Bars (2:30-4:00 at 120 BPM):**
This isn't arbitrary—it's based on attention span research and industry standards:
- Under 2:30: Feels incomplete, radio won't play it, streaming algorithms penalize it
- 2:30-3:30: Sweet spot for most genres, especially pop/EDM
- 3:30-4:00: Great for tracks with strong variation, allows for development
- Over 4:00: Better be prog-house, trance, or exceptionally engaging

Longer doesn't mean better. Make every bar count.

**5. Uses Transitions Between Section Changes:**
Every section change needs a transition—risers before drops, fills before choruses, filter sweeps between verses. Transitions are non-negotiable. Even subtle ones (just a drum fill) make the difference between amateur and professional. Listen to any professional track: you'll find transitions every 4-8 bars minimum.

**6. Maintains Energy Variety (30+ Energy Range):**
Energy variety = listener engagement. If every section sits at 70-80% energy, the track feels flat and boring. Professional arrangements create contrast: quiet moments make loud moments feel massive. Aim for at least a 30-point energy difference between your lowest and highest sections. Low-energy breakdowns make high-energy drops feel explosive.
        `
      },
      {
        title: "Applying This in Your DAW - The Practical Workflow",
        content: `
**Step 1: Create Your Sections as Audio/MIDI Blocks**
Before arranging, create the building blocks:
- 8-bar verse loop
- 16-bar chorus loop
- 8-bar breakdown loop
- 8-bar buildup (increasing intensity)

Color-code these in your DAW (Verse = blue, Chorus = red, etc.) for visual clarity.

**Step 2: Use Markers/Locators for Section Planning**
Before placing a single sound, mark out your structure:
- Bar 1-8: Intro
- Bar 9-24: Verse 1
- Bar 25-40: Chorus 1
- etc.

This gives you a roadmap. Pro producers plan structure before arranging sounds—it prevents writer's block and ensures proper pacing.

**Step 3: Duplicate and Vary Your Sections**
Don't create entirely new material for Verse 2—duplicate Verse 1 and make small changes:
- Add a new melodic layer
- Change drum pattern slightly
- Adjust filter frequencies
- Add background vocals or effects

This creates variety while maintaining cohesion. The listener recognizes it's still "the verse" but hears progression.

**Step 4: Add Transitions at Every Section Boundary**
Never let two sections slam together without a transition:
- Verse → Chorus: Drum fill + riser (2 bars)
- Chorus → Breakdown: Fall + filter close (1-2 bars)
- Breakdown → Buildup: Filter opening + light riser (4 bars)
- Buildup → Drop: Heavy riser + silence (8 bars + 1 beat gap)

**Step 5: Check Energy Flow Visually**
Zoom out in your DAW and look at the waveform. You should see:
- Quieter intro and outro
- Energy peaks at choruses/drops
- Valleys at breakdowns
- Gradual buildups (increasing waveform density)

If the waveform looks flat throughout, your arrangement lacks dynamic range.

**Common Mistakes to Avoid:**
- **Starting with sounds, not structure**: Build the arrangement skeleton first, add sounds later
- **Copy-pasting choruses identically**: Each repeat should add something new
- **Ignoring the 2:30 mark**: If nothing exciting happens by 2:30, listeners will skip
- **Over-arranging**: Sometimes fewer, well-placed sections beat cluttered arrangements
- **No reference track**: Pull up a professional track in your genre and compare structure length, section timing, and energy flow

**Pro Tip - The Template Method:**
Once you complete this exercise, save your arrangement as a template. Next track? Load the template, delete the sounds, keep the structure, replace with new material. Professional producers reuse proven structures constantly—there's no prize for reinventing song structure from scratch every time. Master one structure, then create variations.

The goal isn't to make the most unique arrangement ever—it's to make an arrangement that works, that you can finish, and that listeners enjoy from start to finish. Uniqueness comes from your sounds and melodies, not from experimental 17-section song structures.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Create a complete 3-4 minute song arrangement from scratch",
    "Apply song structure principles (intro, verse, chorus, bridge, outro)",
    "Use appropriate transitions between all section changes",
    "Maintain proper energy flow with peaks and valleys",
    "Work within professional timing constraints (4/8 bar phrases, 80-120 total bars)"
  ],
  
  // ====================
  // MODULE COMPLETION
  // ====================
  moduleCompletion: {
    moduleName: "Arrangement & Songwriting",
    nextModules: [
      { slug: "sound-design", title: "Sound Design" },
      { slug: "mixing", title: "Mixing" }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
