/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 11 - Repetition vs Variation
 *
 * This lesson teaches the balance between repetition (for catchiness) and
 * variation (for interest). Master when to repeat and when to evolve.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 11
});

export const lessonConfig = {
  lessonKey: "mpl-arrangement-11-progress",
  lessonNumber: 11,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 3,

  nextLessonUrl: "lesson-arrangement-12.html",
  prevLessonUrl: "lesson-arrangement-10.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Arrangement" }),
    title: "Repetition vs Variation:",
    titleHighlight: "The Art of Balance",
    subtitle: "Master the <strong>repetition-variation balance</strong>. Learn when to <strong>repeat for catchiness</strong> and when to <strong>vary for interest</strong>. Too much repetition = boring. Too much variation = confusing."
  },

  exercise: {
    title: "Create an Arrangement Balancing Repetition and Variation",
    description: "Build an arrangement that uses <strong>strategic repetition</strong> to make ideas stick, plus <strong>subtle variation</strong> to maintain interest. The key is changing one element at a time while keeping others constant.",
    tip: "The 80/20 rule: Keep 80% the same (familiar), change 20% (fresh). Example: Second chorus keeps melody/chords the same, but adds a new synth layer. Third chorus adds harmonies. Final chorus modulates up a key.",
    steps: [
      { text: "<strong>Establish the core loop</strong> - Create your main 4-8 bar pattern" },
      { text: "<strong>Repeat exactly once</strong> - Build familiarity with exact repetition" },
      { text: "<strong>Add ONE new element</strong> - Keep 80% same, change 20%" },
      { text: "<strong>Repeat with variation</strong> - Alternate texture, melody, or harmony" },
      { text: "<strong>Build to climax</strong> - Final repetition adds all variations together" },
      { text: "<strong>Use the rule of three</strong> - Things happen in threes for satisfaction" }
    ]
  },

  variationTechniques: [
    { name: "Additive", description: "Add new layers each repetition", example: "Verse 1: Drums+Bass, Verse 2: +Pad, Verse 3: +Lead" },
    { name: "Subtractive", description: "Remove elements for contrast", example: "Chorus 2: Remove drums for 2 bars" },
    { name: "Textural", description: "Change sound/timbre, keep rhythm/melody", example: "Chorus 2: Switch synth to piano" },
    { name: "Rhythmic", description: "Vary rhythm pattern, keep melody", example: "Chorus 2: Drums switch from 4-on-floor to breakbeat" },
    { name: "Harmonic", description: "Change chords, keep melody", example: "Chorus 2: Modulate up a key" },
    { name: "Melodic", description: "Vary melody, keep harmony", example: "Verse 2: Add vocal ad-libs over same chords" }
  ],

  ruleOfThree: {
    description: "Musical ideas work best in groups of three",
    examples: [
      "Three choruses: Simple → Add harmonies → Modulate up",
      "Three verses: Sparse → Medium → Full",
      "Build pattern three times before the drop"
    ],
    reasoning: "First time: Learn it. Second time: Recognize it. Third time: Expect variation."
  },

  messages: applyMessagePreset("arrangement", {
    initial: "Create an arrangement that repeats core ideas while adding variations!",
    success: "🔁 Perfect balance! Your repetition creates familiarity while variations keep it interesting.",
    error: "Check your repetition/variation balance—aim for 80% same, 20% new each time.",
    alreadyCompleted: "You've mastered repetition and variation! Experiment with more complex evolution patterns."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    highlightRepetitions: true,
    showVariationIndicator: true
  },

  learningObjectives: [
    "Understand the repetition-variation balance in arrangements",
    "Apply the 80/20 rule for changes",
    "Use the rule of three for satisfying structure",
    "Implement six variation techniques effectively",
    "Create familiar yet evolving arrangements"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "The Psychology of Repetition vs Variation",
        content: `
**The Fundamental Tension:**
All music exists in the balance between two opposing forces:
- **Repetition** creates familiarity, catchiness, and comfort
- **Variation** creates interest, excitement, and surprise

Too much repetition = boring, monotonous, predictable
Too much variation = confusing, unmemorable, chaotic

The art of arrangement is finding the sweet spot between these extremes.

**Why Repetition Works:**
The human brain loves patterns. When we hear something repeated, our brain recognizes it, creating a sense of satisfaction and prediction. This is why hooks are catchy—they repeat enough that you learn them. Repetition creates:
- **Familiarity:** "I know this part!"
- **Anticipation:** "Here comes that drop again!"
- **Memorability:** "I can't get this melody out of my head"
- **Unity:** Repetition ties sections together, making a track feel cohesive

**Why Variation Is Essential:**
But pure repetition eventually becomes boring. The brain craves novelty after initial familiarity. Variation creates:
- **Interest:** "What's new this time?"
- **Development:** The track feels like it's going somewhere
- **Re-engagement:** Pulls listeners back when repetition starts to feel stale
- **Professional Polish:** Variation separates amateur "loop" tracks from sophisticated arrangements

**The Magic Formula: The 80/20 Rule**

When you repeat a section, keep **80% the same** and change **20%**. This maintains familiarity while adding freshness.

**Example—First Chorus:**
- Drums: 4-on-the-floor kick
- Bass: root-fifth pattern
- Vocals: main melody
- Pad: sustained chords
- Lead: melodic hook

**Example—Second Chorus (80% same, 20% new):**
- Drums: 4-on-the-floor kick ✓ (SAME)
- Bass: root-fifth pattern ✓ (SAME)
- Vocals: main melody ✓ (SAME)
- Pad: sustained chords ✓ (SAME)
- Lead: melodic hook + **NEW harmonies in background** ← 20% NEW

**Example—Third Chorus (80% same, 20% new again):**
- Drums: 4-on-the-floor kick ✓ (SAME)
- Bass: root-fifth pattern **modulates up one key** ← 20% NEW
- Vocals: main melody (in new key) ✓ (SAME structure)
- Pad: sustained chords (in new key) ✓ (SAME structure)
- Lead: melodic hook + harmonies ✓ (SAME as chorus 2)

Each repetition keeps most elements identical while introducing one strategic change.

---

**The Rule of Three:**

Musical ideas work best in groups of **three**. Why? Because:
- **First time:** You learn it (unfamiliar)
- **Second time:** You recognize it (familiar)
- **Third time:** You expect something different (surprise)

**Application in Arrangement:**

**Three Choruses:**
1. Simple, clean chorus (establish the hook)
2. Add backing vocals or new layer (familiar + enhanced)
3. Key modulation or breakdown (familiar + dramatic change)

**Three Verses:**
1. Sparse (drums + bass + vocals only)
2. Medium density (add pad or rhythm guitar)
3. Full (add all elements, pre-final chorus)

**Three Build-Ups:**
1. 4-bar build with riser
2. 4-bar build with riser + filter sweep (more intense)
3. 8-bar build with riser + filter + drum roll + silence before drop (maximum tension)

The third instance is where you break expectations, delivering the surprise that keeps listeners engaged.

---

**Real-World Examples:**

**"Levels" by Avicii:**
- Verse 1: Minimal (kick, claps, vocal)
- Verse 2: + Piano melody (80% same, 20% new)
- Verse 3: + Strings (80% same, 20% new)
Each verse adds ONE new element while keeping the foundation constant.

**"Someone Like You" by Adele:**
- Chorus 1: Vocals + piano only
- Chorus 2: + Drums (huge impact from one addition)
- Final Chorus: + Backing vocals + fuller drums (maximum emotion)

**"Uptown Funk" by Bruno Mars:**
- The "Don't believe me just watch" hook repeats constantly, but with different backing elements, rhythmic variations, and vocal ad-libs each time—keeping it fresh despite massive repetition.
        `
      },
      {
        title: "The Six Variation Techniques",
        content: `
**1. Additive Variation (Most Common):**
Keep everything the same, **add one new layer** each repetition.

**How to Apply:**
- Verse 1: Drums + bass only
- Verse 2: Drums + bass + pad (add one element)
- Verse 3: Drums + bass + pad + rhythm guitar (add another)

**Why It Works:** Creates natural build-up, increasing energy progressively without overwhelming the listener. The foundation stays familiar while the track evolves.

**Genre Examples:**
- **Pop:** Verse → Pre-chorus → Chorus (each section adds layers)
- **EDM:** Intro → Build → Drop (progressive addition to peak)
- **Hip-Hop:** Verse 1 (sparse) → Verse 2 (+ strings) → Verse 3 (+ choir)

---

**2. Subtractive Variation (High Impact):**
**Remove elements** to create dramatic contrast and space.

**How to Apply:**
- Chorus 1: Full arrangement (all 5 elements)
- Post-Chorus 1: **Remove drums for 2 bars** (sudden emptiness)
- Breakdown: **Only vocals + guitar** (strip to minimum)

**Why It Works:** Subtraction is more dramatic than addition. Removing a core element (like drums) creates shocking contrast that re-engages attention.

**Genre Examples:**
- **Pop:** Post-chorus breakdown (remove drums, keep vocals)
- **EDM:** Drop into breakdown (sudden bass/drum removal)
- **R&B:** Chorus into intimate bridge (strip to vocals + keys only)

---

**3. Textural Variation (Timbre Changes):**
Keep the **rhythm and melody the same**, change the **sound/timbre**.

**How to Apply:**
- Chorus 1: Bright synth lead
- Chorus 2: **Same melody, but played on piano** (warm, organic timbre)
- Chorus 3: **Back to synth but with distortion** (aggressive timbre)

**Why It Works:** The familiar melody stays recognizable, but the new sound makes it feel fresh. This is especially effective for choruses where you want the hook to stay memorable.

**Genre Examples:**
- **EDM:** Synth drop → Second drop with bass version of same melody
- **Pop:** Acoustic verse → Electric chorus (same chords, different instruments)
- **Rock:** Clean guitar verse → Distorted guitar chorus (same riff, different tone)

---

**4. Rhythmic Variation (Groove Changes):**
Keep the **melody and harmony the same**, change the **rhythmic feel**.

**How to Apply:**
- Verse 1: Steady 4-on-the-floor house beat
- Verse 2: **Switch to breakbeat** (same bass/melody, new groove)
- Verse 3: **Half-time feel** (drums half speed, same melody)

**Why It Works:** Rhythmic changes create massive energy shifts without changing the melodic/harmonic content. The "beat switch" is a classic hip-hop technique for this reason.

**Genre Examples:**
- **Hip-Hop:** Beat switch mid-song (Travis Scott, Kendrick Lamar)
- **DnB:** Full-time drums → Half-time breakdown → Back to full-time
- **Pop:** Verse in half-time → Chorus in double-time (tempo feel change)

---

**5. Harmonic Variation (Chord Changes):**
Keep the **melody the same**, change the **underlying chords**.

**How to Apply:**
- Chorus 1: C - Am - F - G (I - vi - IV - V)
- Chorus 2: **C - Em - Am - F** (I - iii - vi - IV) ← Different chords, same melody
- Final Chorus: **D - Bm - G - A** (modulate up to D major) ← Key change

**Why It Works:** The melody stays familiar (the listener can still sing along), but the harmonic context makes it feel like a new emotional space. Key modulation is the ultimate harmonic variation.

**Genre Examples:**
- **Pop:** Key change in final chorus (classic 90s/2000s pop move)
- **Gospel:** Modulate up a half-step for emotional climax
- **Jazz:** Same melody over different chord substitutions (reharmonization)

---

**6. Melodic Variation (Melody Changes):**
Keep the **harmony/chords the same**, vary the **melody**.

**How to Apply:**
- Verse 1: Simple, stepwise melody over Am - F - C - G
- Verse 2: **Add vocal runs and embellishments** over same chords
- Verse 3: **Completely new counter-melody** over same chords

**Why It Works:** The harmonic foundation (chord progression) provides familiarity and structure, while the new melody keeps each verse feeling unique.

**Genre Examples:**
- **R&B:** Verse 1 simple melody → Verse 2 with vocal runs and ad-libs
- **Jazz:** Theme → Variations → Improvisation (all over same chord changes)
- **Pop:** Verse melody → Pre-chorus melody → Different chorus melody (all tied by same chordal backbone)

---

**Combining Multiple Techniques:**

**Pro arrangers stack variations** for maximum impact:

**Final Chorus Example:**
- **Additive:** Add string section
- **Harmonic:** Modulate up a key
- **Rhythmic:** Drums add double-time hi-hats
- **Melodic:** Vocals add harmonies

**Result:** 80% familiar (same chorus structure, core melody), 20% dramatically new (key, layers, rhythm, harmonies all evolve together).
        `
      },
      {
        title: "When to Repeat, When to Vary—Practical Rules",
        content: `
**Strategic Repetition: When to Keep It the Same**

**1. The Hook/Chorus (Repeat Often):**
Your chorus should repeat with **minimal variation** (maybe 5-10% change maximum). Why? Because the chorus is the catchiest, most memorable part—you want listeners to learn it quickly.

**How Many Times?** Most pop songs: 3-4 chorus repetitions. EDM tracks: 2-3 drop repetitions. Hip-hop: 2-3 hook repetitions.

**Variation Strategy:** First two choruses nearly identical, third adds ONE new element (backing vocals, strings), final chorus modulates or adds harmonic variation.

---

**2. The Main Groove (Repeat Throughout):**
The foundation groove (drums + bass pattern) should stay **mostly consistent** throughout the track. This creates cohesion and keeps the genre identity clear.

**How Much Variation?** 10-20% max. You can add fills, switch to half-time briefly, or add percussion layers, but the core kick-snare pattern should be recognizable.

---

**3. The Intro Theme (Repeat → Develop):**
Establish your main musical idea in the intro, then develop it throughout. Listeners need to hear the core idea at least **2-3 times** before you start varying it significantly.

**Example:**
- Intro: Play melodic hook 2x (establish)
- Verse 1: Reference the hook (familiar)
- Chorus: Full hook returns (payoff)
- Verse 2: Varied version of hook (development)

---

**Strategic Variation: When to Change**

**1. Second Verse (ADD Variation):**
Never make Verse 2 identical to Verse 1. Add at least **one new element**—a pad, a counter-melody, background vocals, or rhythmic variation. Otherwise, it feels stale.

**Rule:** If Verse 1 is 50% density, Verse 2 should be 60-70% density.

---

**2. Bridge (MAJOR Variation):**
The bridge is your **variation section**. Change as much as you can while maintaining song identity:
- Different chord progression
- New rhythmic feel (half-time, double-time, tempo shift)
- Minimal instrumentation (breakdown)
- New melodic idea (not the chorus or verse melody)

**Purpose:** Reset listener attention after 2-3 repetitions of verse-chorus structure. The bridge makes the final chorus feel fresh.

---

**3. Final Chorus (CLIMAX Variation):**
The last chorus should be the **most varied** version—it's the emotional peak. Common changes:
- Key modulation (up a half-step or whole step)
- Additive variation (full orchestra, choir, synth layers)
- Harmonic variation (extended chords, suspensions)
- Extended length (add 4-8 extra bars)

**Purpose:** Deliver maximum emotional impact and create a memorable ending.

---

**4. Outro (SUBTRACTIVE Variation):**
The outro should **strip away elements** progressively, winding down the energy. Opposite of the intro's additive approach.

**Example:**
- Outro bar 1-4: Remove drums
- Outro bar 5-8: Remove bass
- Outro bar 9-12: Only melody remains
- Outro bar 13-16: Fade to silence

---

**Common Mistakes and How to Avoid Them:**

**❌ Mistake 1: Exact Loop for 3+ Minutes**
Playing the same 4-8 bar loop with ZERO variation for the entire track. Even electronic genres need variation.

**✓ Fix:** Apply the 80/20 rule. Change one element every 16-32 bars (add a hi-hat, remove bass for 2 bars, add a vocal chop).

---

**❌ Mistake 2: Too Much Variation Too Soon**
Changing everything in the second verse before the listener has learned the core idea.

**✓ Fix:** Let the core idea repeat at least 2-3 times before introducing major variation. Establish before you evolve.

---

**❌ Mistake 3: Inconsistent Chorus**
Making each chorus dramatically different (different melody, different chords, different structure). This destroys memorability.

**✓ Fix:** Choruses should be 90-95% identical. Save major variation for the final chorus only.

---

**❌ Mistake 4: No Build to Final Moment**
Not creating a climactic final chorus/drop—just repeating the same chorus a third time.

**✓ Fix:** The final chorus MUST be special. Add a key change, extra layers, extended length, or dramatic arrangement shift.

---

**❌ Mistake 5: Variation Without Purpose**
Changing things randomly without a clear reason—adding a random synth layer that doesn't fit, switching grooves mid-section awkwardly.

**✓ Fix:** Every variation should serve a purpose: building energy, creating contrast, emphasizing emotion, or developing the theme. Ask "why am I changing this?" before making the edit.

---

**Why This Matters:**

The repetition-variation balance is what separates demo loops from finished songs. Amateur producers make 8-bar loops and call it done. Professional arrangers take that loop and craft a journey—repeating enough for catchiness, varying enough for interest.

**The 80/20 rule is your guiding principle:** Keep 80% familiar, change 20% strategically. This applies to every level—verses, choruses, entire song structure.

**What's Next:**
In Lesson 12, you'll learn how to create **tension and release** cycles—building suspense and delivering satisfying resolution. This technique stacks perfectly with repetition/variation to create emotionally engaging arrangements.
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
