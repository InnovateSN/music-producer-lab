/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 15 - Rhythmic Variation
 *
 * This lesson teaches how to keep rhythm interesting through variation.
 * Master groove changes, beat switches, and rhythmic development.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 15
});

export const lessonConfig = {
  lessonKey: "mpl-arrangement-15-progress",
  lessonNumber: 15,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-16.html",
  prevLessonUrl: "lesson-arrangement-14.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Arrangement" }),
    title: "Rhythmic Variation:",
    titleHighlight: "Groove Evolution",
    subtitle: "Keep rhythm <strong>interesting</strong> while maintaining the <strong>core groove</strong>. Master <strong>beat switches</strong>, <strong>fill patterns</strong>, and <strong>rhythmic development</strong> across sections."
  },

  exercise: {
    title: "Create Rhythmic Variation Across Sections",
    description: "Build an arrangement where the <strong>rhythm evolves</strong> while keeping recognizable patterns. Vary hi-hat patterns, add percussion, change kick patterns, but maintain the core groove identity.",
    tip: "Keep the core kick pattern the same (listeners lock onto this), but vary everything else: hi-hat rhythm, snare placement, percussion layers. Second chorus: switch from straight to swung hi-hats for freshness.",
    steps: [
      { text: "<strong>Establish core groove</strong> - Create your main kick/snare pattern" },
      { text: "<strong>Vary hi-hats</strong> - Change from 8ths to 16ths to triplets" },
      { text: "<strong>Add percussion layers</strong> - Shakers, claps, tambourine" },
      { text: "<strong>Change the feel</strong> - Straight to swung, or double-time feel" },
      { text: "<strong>Beat switch</strong> - Completely different pattern for bridge" },
      { text: "<strong>Return to core</strong> - Final chorus brings back original groove" }
    ]
  },

  variationTechniques: [
    { technique: "Hi-Hat Variation", description: "8ths → 16ths → Triplets → Shuffle", impact: "Subtle" },
    { technique: "Percussion Layering", description: "Add shakers, claps, tambourine progressively", impact: "Medium" },
    { technique: "Snare Movement", description: "Move snare hits by 16th notes for variation", impact: "Medium" },
    { technique: "Beat Switch", description: "Completely change drum pattern for bridge", impact: "High" },
    { technique: "Half-Time/Double-Time", description: "Change perceived tempo (same BPM)", impact: "High" },
    { technique: "Swing Amount", description: "Vary from straight (0%) to heavily swung (70%)", impact: "Medium" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create rhythmic variation while maintaining the core groove!",
    success: "🥁 Excellent groove evolution! Your rhythmic variations keep it fresh without losing the vibe.",
    error: "Keep the core groove recognizable while varying the details.",
    alreadyCompleted: "You've mastered rhythmic variation!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showRhythmGrid: true
  },

  learningObjectives: [
    "Vary rhythm while maintaining core groove identity",
    "Apply six rhythmic variation techniques",
    "Use beat switches effectively for contrast",
    "Layer percussion progressively across sections",
    "Understand half-time and double-time feels"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Rhythmic Variation Keeps Listeners Engaged",
        content: `
**The Groove Paradox:**

Listeners want **familiarity** (recognizable patterns) but also **freshness** (subtle changes). Rhythmic variation solves this paradox:
- Keep the **core groove** the same (listeners lock onto this)
- Vary **everything around it** (hi-hats, percussion, fills, swing)

**Result:** The track feels fresh and evolving while maintaining its identity.

---

**The Locked Foundation Principle:**

The most important rhythmic lesson: **Not everything should vary.**

**Core Elements (Keep Consistent):**
- **Kick drum pattern** — This is what dancers lock onto
- **Snare placement** — Defines the groove's backbone
- **Tempo** — Never changes mid-track (unless intentional tempo shift)

**Variable Elements (Change Freely):**
- **Hi-hat patterns** — 8ths → 16ths → Triplets → Shuffle
- **Percussion layers** — Shakers, claps, tambourine
- **Ghost notes** — Subtle snare/hi-hat hits between main beats
- **Swing amount** — Straight (0%) → Light swing (30%) → Heavy swing (70%)

**Why This Works:** The listener's brain recognizes the kick/snare groove (familiarity) while experiencing fresh hi-hat and percussion patterns (novelty).

---

**Rhythmic Hierarchy:**

Not all rhythmic elements are equally important. Understanding the hierarchy helps you know what to keep vs what to vary:

\`\`\`
MOST IMPORTANT (Lock This In):
  ↑ Kick drum pattern
  ↑ Snare placement
  ↑ Overall tempo/BPM

MEDIUM IMPORTANCE (Vary Subtly):
  ↑ Bass rhythm (follows kick usually)
  ↑ Main hi-hat pattern
  ↑ Primary percussion

LEAST IMPORTANT (Vary Freely):
  ↑ Secondary percussion (shakers, etc.)
  ↑ Ghost notes and fills
  ↑ Swing/shuffle amount
  ↑ Velocity variations
\`\`\`

**Producers often make this mistake:** They vary the kick pattern thinking it creates interest, but it actually **destroys groove identity**. Instead, keep the kick locked and vary the hi-hats—same groove, more interest.

---

**Real-World Examples:**

**"Uptown Funk" by Mark Ronson ft. Bruno Mars:**
- **Core groove:** Kick on 1 and 3, snare on 2 and 4 (never changes)
- **Variation:** Hi-hat patterns evolve constantly—verse is simple 8ths, chorus adds 16th-note flourishes, bridge has syncopated hi-hats
- *Impact:* The groove feels locked in (dancers can follow it) but never boring (constant rhythmic detail changes)

**"One More Time" by Daft Punk:**
- **Core groove:** Four-on-the-floor kick (every quarter note) + offbeat open hi-hat
- **Variation:** Layers percussion progressively—verse has minimal percussion, chorus adds claps and tambourine, breakdown strips back, final chorus adds cowbell and extra hi-hat layers
- *Impact:* The foundation never changes (perfect for dancing) but density increases to build energy

**"In Da Club" by 50 Cent:**
- **Core groove:** Iconic minimal beat—kick, snare, hi-hat on specific hits (loops identically)
- **Variation:** Producer occasionally adds tiny hi-hat rolls or ghost snares (barely noticeable but prevents monotony)
- *Impact:* One of the most repetitive beats in hip-hop, yet it works because subtle variations prevent listener fatigue

---

**The 80/20 Groove Rule:**

**80% Repetition:** Core kick/snare pattern stays identical across the track
**20% Variation:** Hi-hats, percussion, fills, and swing change per section

This creates the perfect balance:
- **Enough repetition** for groove recognition and head-nodding
- **Enough variation** to prevent boredom

Example Application:
- **Verse 1:** Simple 8th-note hi-hats
- **Chorus 1:** 16th-note hi-hats (double the density)
- **Verse 2:** Swung 8th-note hi-hats (same density, different feel)
- **Chorus 2:** 16th-note hi-hats + tambourine layer (added texture)
- **Bridge:** Triplet hi-hats (completely different feel)
- **Final Chorus:** 16th-note hi-hats + tambourine + shaker (maximum density)

**Notice:** The kick and snare never changed, yet the groove evolved dramatically.
        `
      },
      {
        title: "The Six Rhythmic Variation Techniques",
        content: `
**Technique 1: Hi-Hat Subdivision Changes**

**The most powerful yet subtle variation technique.** Change the rhythmic subdivision of your hi-hats between sections.

**Common Progressions:**

**Sparse → Dense (Building Energy):**
\`\`\`
Verse:      Quarter notes  (♩ ♩ ♩ ♩)         — Simplest
Pre-Chorus: 8th notes      (♫ ♫ ♫ ♫ ♫ ♫ ♫ ♫) — Medium
Chorus:     16th notes     (♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬) — Densest
\`\`\`

**Straight → Syncopated (Adding Groove):**
\`\`\`
Intro:  Straight 8ths    (on every 8th note)
Verse:  Offbeat 8ths     (between kick/snare)
Chorus: Syncopated 16ths (emphasize offbeats)
\`\`\`

**Straight → Swing → Shuffle (Changing Feel):**
\`\`\`
Verse 1: Straight       (0% swing)  — Rigid, precise
Verse 2: Light swing    (30% swing) — Slight groove
Chorus:  Heavy swing    (60% swing) — Funky, loose
Bridge:  Shuffle/triplet feel       — Jazz/blues vibe
\`\`\`

**Why It Works:** Changing hi-hat rhythm affects the **perceived energy and groove** without changing the core beat. It's the easiest way to make sections feel different.

**Pro Tip:** In verse 1, use simple 8th notes. In verse 2 (second time through the same melody), switch to 16ths. The listener recognizes the melody but feels refreshed by the new rhythm.

---

**Technique 2: Percussion Layering (Progressive Addition)**

**Add percussion elements progressively as the track builds.** Each section gets slightly more rhythmic detail.

**Example Progression:**

**Intro:**
- Just kick + snare

**Verse 1:**
- Kick + snare + simple hi-hats

**Pre-Chorus:**
- Kick + snare + hi-hats + shaker (adds constant 16th-note texture)

**Chorus:**
- Kick + snare + hi-hats + shaker + claps (emphasizes backbeat)

**Bridge:**
- Strip back to kick + snare only (creates contrast)

**Final Chorus:**
- Kick + snare + hi-hats + shaker + claps + tambourine + cowbell (maximum density)

**Why It Works:** Progressive layering creates an **arc of rhythmic density**, building energy gradually. Removing layers in the bridge makes the final chorus feel massive when everything returns.

**Common Percussion Layers:**
- **Shaker:** Constant 16th notes (texture and movement)
- **Claps:** On snare hits (emphasis and width)
- **Tambourine:** Offbeat 8ths (sparkle and energy)
- **Cowbell:** Downbeats or syncopated hits (character and presence)
- **Rim shots:** Accents and fills (punctuation)

**Pro Tip:** Never add all percussion at once. Reserve one layer for the final chorus to make it feel climactic.

---

**Technique 3: Snare Movement (Micro-Variations)**

**Keep the main snare hits on 2 and 4, but add ghost notes or move accents slightly.**

**Ghost Notes (Subtle Snare Hits):**
\`\`\`
Basic pattern:     |  Kick  | SNARE |  Kick  | SNARE |
With ghost notes:  |  Kick  |sNAREs |  Kick  |sNAREs |
                      ↑        ↑ ↑       ↑        ↑ ↑
               (lowercase 's' = quiet ghost snare)
\`\`\`

**Why It Works:** Ghost notes add **groove and swing** without disrupting the main backbeat (snare on 2 and 4). Funk and hip-hop use this heavily.

**Snare Position Shifting:**
\`\`\`
Standard:    | Kick | SNARE | Kick | SNARE |
              1  &   2   &   3  &   4   &

Shifted:     | Kick |   & SNARE | Kick | SNARE |
              1  &   2   &   3   &   4   &
                       ↑ (shifted 16th note early)
\`\`\`

**Effect:** Shifting snare placement by just a 16th note creates a completely different pocket and vibe. Try this in verse 2 to differentiate from verse 1.

---

**Technique 4: Beat Switch (Complete Pattern Change)**

**For maximum contrast, completely change the drum pattern in the bridge.**

**Original Groove (Verse/Chorus):**
\`\`\`
|K---K---|S---S---|K---K---|S---S---|
 1 & 2 & 3 & 4 &   (Standard backbeat)
\`\`\`

**Beat Switch (Bridge):**
\`\`\`
|K-K-----|--S-S---|K-K-----|S-------|
 1 & 2 & 3 & 4 &   (Syncopated, off-balance)
\`\`\`

**When to Use:**
- **Bridge:** Create maximum contrast before final chorus
- **Breakdown:** Strip to a completely different minimalist pattern
- **Outro:** Transition to a simpler or more complex groove

**Why It Works:** After hearing the same groove for 2 minutes, a complete switch **resets listener attention** and creates surprise. When the original groove returns in the final chorus, it feels familiar and powerful.

**Pro Tip:** The beat switch should be temporary. Return to the original groove for the final chorus so listeners get that satisfying "return home" feeling.

---

**Technique 5: Half-Time / Double-Time Feel**

**Change the perceived tempo without changing the actual BPM.**

**Original Groove (140 BPM):**
\`\`\`
|K---S---|K---S---|K---S---|K---S---|
 1   2   3   4     (Feels like 140 BPM)
\`\`\`

**Half-Time Feel (Still 140 BPM):**
\`\`\`
|K-------|---S----|-------|---S----|
 1   2   3   4     (Feels like 70 BPM — slower, heavier)
\`\`\`

**Double-Time Feel (Still 140 BPM):**
\`\`\`
|K-S-K-S-|K-S-K-S-|K-S-K-S-|K-S-K-S-|
 1 & 2 & 3 & 4 &   (Feels like 280 BPM — faster, more intense)
\`\`\`

**When to Use:**
- **Half-time:** Breakdowns, bridges (creates heavy, slow-motion vibe)
- **Double-time:** Buildups, final choruses (increases intensity)

**Example in Modern Music:**
- **Trap music:** Verses often use half-time kick patterns (slow, heavy 808s), then chorus switches to double-time hi-hat rolls
- **Drum and Bass:** Kicks/snares at half-time (70 BPM feel), hi-hats at actual tempo (140 BPM)

**Pro Tip:** Half-time in the bridge followed by return to full-time in the final chorus creates a massive energy release.

---

**Technique 6: Swing Amount Variation**

**Change how "rigid" vs "groovy" the rhythm feels by adjusting swing.**

**Swing Explained:**
- **0% Swing (Straight):** Notes fall exactly on grid — robotic, precise, modern
- **30% Swing (Light Swing):** Slight groove — contemporary pop/hip-hop
- **50% Swing (Medium Swing):** Noticeable groove — R&B, neo-soul
- **70% Swing (Heavy Swing):** Maximum groove — jazz, blues, funk

**Application:**
\`\`\`
Intro:  0% swing    (straight, robotic intro)
Verse:  30% swing   (subtle groove for vocals)
Chorus: 50% swing   (full groove, head-nodding vibe)
Bridge: 0% swing    (return to rigid feel for contrast)
Outro:  70% swing   (loose, jazz-like outro)
\`\`\`

**Why It Works:** Swing affects the **emotional feel** of the groove. Straight = modern/precise, swung = organic/human.

**Pro Tip:** Apply swing only to hi-hats and percussion, keep kick/snare straight. This creates "swing over a straight foundation"—best of both worlds.

---

**Combining Techniques for Maximum Impact:**

**Don't use just one technique—stack 2-3 per section for professional results.**

**Example: Verse 1 → Chorus 1 Transition:**

**Verse 1:**
- Hi-hats: Simple 8th notes, straight timing (Technique 1)
- Percussion: Kick + snare + hi-hats only (Technique 2)
- Feel: Straight, minimal (Technique 6)

**Chorus 1:**
- Hi-hats: 16th notes (Technique 1 — subdivision change)
- Percussion: + shaker + claps (Technique 2 — layering)
- Snare: Add ghost notes between main hits (Technique 3)
- Feel: 30% swing (Technique 6 — adding groove)

**Impact:** The chorus feels TWICE as energetic due to four simultaneous changes, yet the core kick/snare pattern never changed.

---

**Common Mistakes:**

**❌ Varying the Kick Pattern:**
Changing the kick destroys groove identity. Keep it locked.

**✓ Fix:** Keep kick pattern identical, vary hi-hats instead.

---

**❌ No Variation at All:**
Same exact drum pattern for 3 minutes = listener fatigue.

**✓ Fix:** Change hi-hat subdivision in verse 2, add percussion layer in chorus 2.

---

**❌ Too Much Variation:**
Every bar has a different pattern = no groove to lock onto.

**✓ Fix:** Use the 80/20 rule—80% identical groove, 20% subtle changes.

---

**❌ Forgetting the Return:**
Beat switch in bridge but never return to original groove.

**✓ Fix:** Always return to the main groove for final chorus—listeners want that familiar feeling back.
        `
      },
      {
        title: "Practical Rhythmic Variation Workflow",
        content: `
**Step-by-Step Groove Evolution Process:**

**Step 1: Lock in Your Core Groove**

Before varying anything, establish the foundational pattern that will remain consistent:

\`\`\`
Core Groove (Repeats Throughout Track):
  Kick:  |X---X---|--------|X---X---|--------|
  Snare: |--------|---X----|--------|---X----|
         1 & 2 & 3 & 4 &
\`\`\`

**This never changes.** Memorize it, loop it, love it. This is your anchor.

**Test:** Can you imagine a dancer or head-nodder locking onto this pattern? If yes, proceed. If no, refine the core groove until it's undeniable.

---

**Step 2: Create Variation Map (Section-by-Section Plan)**

Plan your rhythmic arc before producing:

\`\`\`
INTRO:
- Core groove only (kick + snare)
- No hi-hats yet

VERSE 1:
- Core groove + simple 8th-note hi-hats
- Straight timing (0% swing)

PRE-CHORUS:
- Core groove + 8th-note hi-hats
- + Shaker (16th notes, low volume)

CHORUS 1:
- Core groove + 16th-note hi-hats
- + Shaker + Claps on snare
- Add light swing (30%)

VERSE 2:
- Core groove + 16th-note hi-hats (different from V1)
- Add ghost snares

CHORUS 2:
- Core groove + 16th-note hi-hats
- + Shaker + Claps + Tambourine (one more layer than C1)

BRIDGE:
- Beat switch: Different kick/snare pattern
- Minimal percussion

FINAL CHORUS:
- Return to core groove
- 16th hi-hats + all percussion layers
- Increase swing to 50%
\`\`\`

**Notice the arc:** Intro (minimal) → gradual addition → peak in final chorus. This creates forward momentum.

---

**Step 3: Implement Hi-Hat Variations First**

Hi-hats are the **easiest and most effective** variation element.

**Verse 1 Hi-Hat Pattern:**
\`\`\`
|x-x-x-x-|x-x-x-x-| (8th notes, every offbeat)
 & & & &   & & & &
\`\`\`

**Chorus 1 Hi-Hat Pattern:**
\`\`\`
|xxxxxxxx|xxxxxxxx| (16th notes, constant)
 &e&a&e&a &e&a&e&a
\`\`\`

**Bridge Hi-Hat Pattern:**
\`\`\`
|x--x--x-|--x--x--| (Triplet feel, syncopated)
 1  &  a  2  &  a
\`\`\`

**Why Start Here:** Hi-hat changes are low-risk. If they don't work, the groove still functions. If they do work, you've added instant freshness.

---

**Step 4: Layer Percussion Progressively**

Add **one new percussion element per major section.**

**Verse → Pre-Chorus:**
Add shaker (constant 16th notes, panned slightly left)

**Pre-Chorus → Chorus:**
Add claps (on snare hits, panned slightly right for width)

**Chorus → Verse 2:**
Remove claps (create contrast)

**Verse 2 → Chorus 2:**
Re-add claps + add tambourine (peak density)

**Mixing Tip for Percussion Layers:**
- **Shaker:** -8dB volume (subtle texture)
- **Claps:** -6dB volume (supports snare)
- **Tambourine:** -10dB volume (sparkle, not dominant)

**Critical Rule:** No more than 3 percussion layers simultaneously, or it becomes cluttered.

---

**Step 5: Add Ghost Notes and Micro-Variations**

Once the main pattern is solid, add subtle ghost notes:

**Standard Snare (Verse 1):**
\`\`\`
|--------|---S----|--------|---S----|
 1   2   3   4
\`\`\`

**With Ghost Notes (Verse 2):**
\`\`\`
|--------|--sS-s--|--------|--sS----|
 1   2   3   4
       (lowercase 's' = ghost snare, -12dB quieter)
\`\`\`

**Effect:** Adds funk and groove without disrupting the main backbeat.

**Where to Add Ghost Notes:**
- Before main snare hit (anticipation)
- After main snare hit (rebound feel)
- On 16th-note subdivisions between kick and snare

**Velocity Tip:** Ghost notes should be 40-60% velocity of main snare. Too loud = destroys groove, too quiet = inaudible.

---

**Step 6: Apply Swing (Timing Variation)**

**Straight vs Swung:**

**Verse (Straight Timing):**
- All notes fall exactly on grid
- Feels modern, precise, robotic (good for electronic/pop)

**Chorus (30-50% Swing):**
- Every second hi-hat is delayed slightly
- Feels groovy, human, organic (good for hip-hop/R&B/funk)

**How to Apply in Your DAW:**
1. Select hi-hat and percussion MIDI notes
2. Apply swing (usually 30-50% setting)
3. Keep kick and snare straight (they anchor the groove)

**Result:** "Swing over a straight foundation"—the best of both worlds.

---

**Step 7: Test the Beat Switch (Bridge Contrast)**

**Original Groove:**
\`\`\`
|K---K---|S---S---|K---K---|S---S---|
\`\`\`

**Beat Switch (Bridge):**
\`\`\`
|K-K-----|---S----|K-K-----|S---S---|
 (Syncopated, off-balance pattern)
\`\`\`

**Or Half-Time Feel:**
\`\`\`
|K-------|---S----|--------|---S----|
 (Twice as slow, heavy and dramatic)
\`\`\`

**Return to Original (Final Chorus):**
\`\`\`
|K---K---|S---S---|K---K---|S---S---|
 (Familiar groove returns = satisfaction)
\`\`\`

**Why This Works:** The beat switch creates surprise and resets attention. Returning to the original groove feels like "coming home"—listeners get a dopamine hit from the familiar pattern.

**When Not to Beat Switch:** If your track is a club banger meant for DJs, avoid beat switches. DJs need consistent grooves for mixing. Save beat switches for artist tracks and albums.

---

**Step 8: A/B Test Your Variations**

Before finalizing, test different variations:

**Test 1: Does the variation enhance or distract?**
- Loop verse 1 → verse 2 transition
- Can you feel the difference?
- Does it sound intentional or random?

**Test 2: Can you still lock onto the core groove?**
- Close your eyes and try to clap along
- If the groove feels unstable, you've varied too much

**Test 3: Does the final chorus feel climactic?**
- Jump from intro straight to final chorus
- Should feel like a massive progression, not random change

**If any test fails:** Remove one layer or simplify one variation until it passes.

---

**Genre-Specific Rhythmic Variation Strategies:**

**Hip-Hop:**
- Core groove: Minimal kick/snare pattern (often just 2-4 hits per bar)
- Variation: Add tiny hi-hat rolls before snare hits
- Strategy: Keep it simple, add subtle triplet hi-hat flourishes

**EDM (House/Techno):**
- Core groove: Four-on-the-floor kick (never changes)
- Variation: Build hi-hat density (8ths → 16ths → 32nds before drop)
- Strategy: Relentless repetition with filter sweeps and percussion layers

**Pop:**
- Core groove: Standard backbeat (kick on 1/3, snare on 2/4)
- Variation: Different hi-hat patterns per section, add claps in chorus
- Strategy: Verse simple, chorus dense, bridge different

**Rock:**
- Core groove: Live drum pattern (human feel, slight timing variations)
- Variation: Drum fills every 4-8 bars, cymbal crashes on section changes
- Strategy: Emphasize dynamics (verse quiet, chorus loud) over pattern changes

**Lo-Fi Hip-Hop:**
- Core groove: Off-grid, swung, "dusty" drum loop
- Variation: Minimal—maybe slight filter changes or vinyl crackle
- Strategy: Hypnotic repetition, vibe over variation

---

**Common Production Mistakes (And Fixes):**

**❌ Mistake: "My beat sounds boring after 30 seconds"**

**✓ Fix:**
- You didn't vary hi-hats between sections
- Add shaker in chorus
- Change hi-hat subdivision (8ths → 16ths)

---

**❌ Mistake: "My groove doesn't feel locked in"**

**✓ Fix:**
- You're varying the kick pattern too much
- Lock kick and snare, vary only hi-hats/percussion
- Simplify the core groove

---

**❌ Mistake: "All my sections sound the same"**

**✓ Fix:**
- Create a variation map (see Step 2)
- Verse 1: minimal percussion
- Chorus 1: add 1-2 layers
- Verse 2: different hi-hat pattern
- Chorus 2: add 1 more layer

---

**❌ Mistake: "My beat switch feels random and jarring"**

**✓ Fix:**
- Only use beat switch in bridge (not randomly mid-verse)
- Return to original groove in final chorus
- Use beat switch as a purposeful contrast moment

---

**Final Checklist:**

Before moving on, verify:

- ✓ Core kick/snare pattern is consistent throughout
- ✓ Hi-hat patterns change between sections
- ✓ At least 2-3 percussion layers added progressively
- ✓ Ghost notes or micro-variations added somewhere
- ✓ Swing applied to hi-hats/percussion (if appropriate for genre)
- ✓ Bridge has rhythmic contrast (beat switch or half-time)
- ✓ Final chorus has maximum rhythmic density
- ✓ You can still clap along to the core groove (locked in)

**If all boxes checked:** You've mastered rhythmic variation. Your grooves will evolve while maintaining identity—the mark of professional production.

---

**What's Next:**

In Lesson 16, you'll learn **melodic development**—how to evolve a simple melodic motif across sections using theme-and-variation techniques. This pairs perfectly with rhythmic variation to create multi-dimensional musical growth.
        `
      }
    ]
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
