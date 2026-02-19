/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 13 - Section Density & Contrast
 *
 * This lesson teaches how to vary density between sections.
 * Master sparse verses, full choruses, and strategic emptiness.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-13-progress",
  lessonNumber: 13,
  lessonCategory: "Arrangement",
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-14.html",
  prevLessonUrl: "lesson-arrangement-12.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Arrangement" }),
    title: "Section Density:",
    titleHighlight: "Sparse to Full",
    subtitle: "Master <strong>density contrast</strong> between sections. Learn why <strong>verses should be sparse</strong>, <strong>choruses should be full</strong>, and <strong>emptiness creates impact</strong>."
  },

  exercise: {
    title: "Create Density Variation Across Sections",
    description: "Build an arrangement where sections have clearly different <strong>densities</strong>. Density = number of active instruments + rhythmic activity. Sparse sections make full sections hit harder.",
    tip: "Verse density: 2-3 elements. Pre-chorus: 3-4 elements. Chorus: 4-5 elements. Bridge/breakdown: 1-2 elements. The contrast IS the impact.",
    steps: [
      { text: "<strong>Intro: Low density</strong> - Start with 1-2 elements (30-40% full)" },
      { text: "<strong>Verse: Low-medium density</strong> - 2-3 elements (40-50% full)" },
      { text: "<strong>Pre-chorus: Medium density</strong> - 3-4 elements (60-70% full)" },
      { text: "<strong>Chorus: High density</strong> - 4-5 elements (90-100% full)" },
      { text: "<strong>Breakdown: Minimal density</strong> - 1-2 elements (20-30% full)" },
      { text: "<strong>Final chorus: Maximum density</strong> - All elements + extra layer (100%)" }
    ]
  },

  densityLevels: [
    {
      level: "Minimal",
      elementCount: "1-2",
      percentage: "20-30%",
      sections: ["Intro", "Outro", "Breakdown", "Bridge"],
      purpose: "Create space, intimacy, or contrast",
      examples: ["Just vocals + guitar", "Only drums + bass"]
    },
    {
      level: "Sparse",
      elementCount: "2-3",
      percentage: "40-50%",
      sections: ["Verse", "Post-chorus"],
      purpose: "Leave room for vocals, create anticipation",
      examples: ["Drums + bass + pad", "Rhythm guitar + vocals + light drums"]
    },
    {
      level: "Medium",
      elementCount: "3-4",
      percentage: "60-70%",
      sections: ["Pre-chorus", "Build-up"],
      purpose: "Build energy, transition to fuller sections",
      examples: ["Drums + bass + pad + rhythm", "Full rhythm section + keys"]
    },
    {
      level: "Full",
      elementCount: "4-5",
      percentage: "80-100%",
      sections: ["Chorus", "Drop"],
      purpose: "Maximum impact, energy peak, memorable hook",
      examples: ["All 5 elements present", "Full band + strings + backing vocals"]
    }
  ],

  contrastStrategies: [
    { strategy: "Element Addition", description: "Add 1-2 new instruments per section increase" },
    { strategy: "Rhythmic Density", description: "Increase note frequency (quarter → eighths → sixteenths)" },
    { strategy: "Frequency Fill", description: "Add elements in previously empty frequency ranges" },
    { strategy: "Stereo Width", description: "Narrow in verse, wide in chorus" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create clear density contrast between sections!",
    success: "🎚️ Perfect density control! Your sparse sections make the full sections explode with impact.",
    error: "Check section densities—you need bigger contrast between verses and choruses.",
    alreadyCompleted: "You've mastered density! Try creating even more dramatic contrasts."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showDensityMeter: true,
    showElementCount: true
  },

  learningObjectives: [
    "Understand density as the number of active elements",
    "Apply appropriate density levels to different sections",
    "Create impact through density contrast",
    "Use sparse arrangements effectively for intimacy",
    "Build from minimal to maximum density across a track"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Density Contrast Creates Impact",
        content: `
**The Fundamental Problem with Constant Density:**
Many amateur tracks sound flat and exhausting because every section has the same density—all elements playing all the time at maximum level. This creates listener fatigue and destroys impact. Professional arrangements use **density contrast** to create dynamics, emotion, and memorable moments.

**What Is Density?**
Density = **Number of active elements** + **Rhythmic activity**

**High Density:**
- 5 elements playing simultaneously (drums, bass, pad, lead, vocals)
- High rhythmic activity (16th note hi-hats, busy bassline)
- Full frequency spectrum occupied
- **Result:** Sounds "full," powerful, energetic

**Low Density:**
- 1-2 elements only (just vocals + guitar, or drums + bass)
- Low rhythmic activity (quarter note kick, simple pattern)
- Sparse frequency spectrum (lots of empty space)
- **Result:** Sounds intimate, focused, spacious

**The Contrast Principle:**
The impact of a full chorus comes from the contrast with a sparse verse. If the verse is already at maximum density, the chorus has nowhere to go—no room to create impact.

**The Math of Contrast:**
- Verse at 50% density → Chorus at 100% density = **50% increase** = HIGH IMPACT
- Verse at 90% density → Chorus at 100% density = **10% increase** = LOW IMPACT

**It's not about how full the chorus is—it's about how much fuller it is than the verse.**

---

**Real-World Examples:**

**"Someone Like You" by Adele:**
- **Verse:** Vocals + piano only (20-30% density)
- **Chorus 1:** Same—vocals + piano (30% density)
- **Chorus 2:** + DRUMS (sudden jump to 70% density)
- *Impact:* The drum entrance in Chorus 2 is one of the most powerful moments in modern pop because of the extreme density contrast

**"Levels" by Avicii:**
- **Intro:** Single piano melody (10% density)
- **Verse:** Piano + kick + claps (30% density)
- **Build:** + Strings + riser (60% density)
- **Drop:** Full bass, drums, melody, vocals (100% density)
- *Impact:* The progressive density increase makes the drop feel massive

**"Smells Like Teen Spirit" by Nirvana:**
- **Verse:** Quiet, clean guitar + light drums (40% density)
- **Chorus:** Distorted guitar + full drums + bass + screaming vocals (100% density)
- *Impact:* The quiet-loud contrast defined grunge and made the chorus explosive

**"Scary Monsters and Nice Sprites" by Skrillex:**
- **Buildup:** Vocal loop only (20% density)
- **Drop:** Wobble bass + drums + mid-range stabs (100% density, immediate switch)
- *Impact:* The sudden density switch created the dubstep formula

---

**The Four Density Levels:**

**1. Minimal (20-30% density):**
- **Elements:** 1-2 only
- **Example:** Solo piano, vocals + acoustic guitar, just drums + bass
- **Sections:** Intro, outro, breakdown, intimate bridge
- **Purpose:** Create space, intimacy, contrast, spotlight vocals
- **Emotional Impact:** Vulnerable, focused, personal

**2. Sparse (40-50% density):**
- **Elements:** 2-3
- **Example:** Drums + bass + pad, rhythm section + vocals
- **Sections:** Verse, post-chorus
- **Purpose:** Leave room for vocals to shine, create anticipation
- **Emotional Impact:** Controlled, groove-focused, building

**3. Medium (60-70% density):**
- **Elements:** 3-4
- **Example:** Drums + bass + pad + rhythm guitar, full rhythm section + keys
- **Sections:** Pre-chorus, build-up
- **Purpose:** Transition energy, build toward full section
- **Emotional Impact:** Rising, transitional, momentum

**4. Full (80-100% density):**
- **Elements:** 4-5+ (maximum for your arrangement)
- **Example:** All elements present—drums, bass, pad, rhythm, lead, vocals, strings
- **Sections:** Chorus, drop, climax
- **Purpose:** Maximum impact, energy peak, memorable hook
- **Emotional Impact:** Powerful, climactic, euphoric, overwhelming (in a good way)

---

**The Strategic Density Map (Example Pop Song):**

\`\`\`
SECTION          DENSITY    ELEMENTS
Intro            30%        Piano melody only
Verse 1          40%        Piano + light drums + vocals
Pre-Chorus       60%        + Bass + pad (building)
Chorus 1         90%        + Lead synth + backing vocals (BIG)
Post-Chorus      50%        Remove vocals, keep instrumental (breath)
Verse 2          50%        Same as V1 but + pad (slightly fuller)
Pre-Chorus 2     70%        Slightly more intense than PC1
Chorus 2         100%       ALL elements (bigger than C1)
Bridge           20%        Vocals + guitar ONLY (breakdown)
Final Chorus     100%       Full arrangement + extra layers
Outro            30%        Strip back to piano + vocals, fade
\`\`\`

**Notice:** Each section has a clear density target. The track builds from minimal → maximum → minimal again, creating an arc.

---

**Why Sparse Sections Are Powerful:**

Amateur producers think "more is always better" and fill every moment with sound. But:
- **Sparse = Focus:** Fewer elements means each one gets full attention
- **Sparse = Intimacy:** Low density feels personal and emotional
- **Sparse = Contrast:** You can't appreciate fullness without experiencing emptiness

**The "Less Is More" Principle:**
Sometimes removing an element creates more impact than adding one. A post-chorus that removes drums feels like a release, a breath. A bridge with just vocals and piano after two full choruses feels refreshing.

**The Adele Effect:**
"Someone Like You" is just vocals and piano for most of the song (20-30% density). When the drums enter in Chorus 2, it feels like the floodgates opened—not because the drums are loud, but because the contrast is extreme.
        `
      },
      {
        title: "Density Control Techniques",
        content: `
**How to Increase Density (Building Energy):**

**1. Element Addition (Most Common):**
Add one new instrument or layer each section increase.

**Example:**
- **Intro:** Pad only
- **Verse 1:** Pad + drums
- **Pre-Chorus:** Pad + drums + bass
- **Chorus:** Pad + drums + bass + lead + vocals

**Why It Works:** Progressive layering feels natural and creates momentum.

---

**2. Rhythmic Density Increase:**
Keep the same instruments, but increase rhythmic activity.

**Example (Same Elements, Different Rhythms):**
- **Verse:** Quarter note kick only
- **Pre-Chorus:** Kick + eighth note hi-hats
- **Chorus:** Kick + sixteenth note hi-hats + snare on 2 & 4

**Why It Works:** Faster rhythms = more perceived "fullness" even with same element count.

---

**3. Frequency Fill (Vertical Stacking):**
Add elements in previously empty frequency ranges.

**Example:**
- **Verse:** Bass (low) + vocals (mid)—highs are EMPTY
- **Chorus:** Bass (low) + vocals (mid) + hi-hats/strings (high)—FULL SPECTRUM

**Why It Works:** Filling the frequency spectrum makes the section sound "complete."

---

**4. Stereo Width Increase:**
Make sparse sections narrow (mono/center), full sections wide (stereo).

**Example:**
- **Verse:** All elements panned center or narrow (mono feel)
- **Chorus:** Elements spread across stereo field (wide feel)

**Why It Works:** Wide stereo feels "bigger" even if element count is the same.

---

**How to Decrease Density (Creating Space/Contrast):**

**1. Subtractive Arrangement:**
Remove key elements to create sudden contrast.

**Example:**
- **Chorus:** Full band (5 elements, 100% density)
- **Post-Chorus:** Remove drums + vocals, keep instrumental (2-3 elements, 40% density)

**Why It Works:** Sudden removal shocks the listener, creates breath, resets energy for next section.

**Real Example:** Many EDM tracks drop into a "breakdown" after the first drop, removing bass and drums entirely.

---

**2. Rhythmic Simplification:**
Keep the same elements, reduce rhythmic activity.

**Example:**
- **Chorus:** Sixteenth note hi-hats, busy drums
- **Verse 2:** Quarter note kick only, remove all rhythmic complexity

**Why It Works:** Slower = sparser feel, even with same elements present.

---

**3. Frequency Removal:**
Remove elements in specific frequency ranges.

**Example:**
- **Chorus:** Full spectrum (sub-bass, mid, highs)
- **Bridge:** Remove sub-bass and highs, keep mids only

**Why It Works:** Narrowing the frequency spectrum makes the section feel "smaller" and more intimate.

---

**4. Dynamic Reduction (Volume-Based):**
Keep all elements playing, but reduce volume significantly.

**Example:**
- **Chorus:** All elements at -3dB to 0dB (loud, present)
- **Breakdown:** All elements at -12dB to -18dB (quiet, distant)

**Why It Works:** Volume reduction = perceived sparseness even if nothing is actually muted.

---

**Density Contrast Strategies by Genre:**

**Pop:**
- Verse: 40-50% (sparse, vocals shine)
- Pre-Chorus: 60-70% (building)
- Chorus: 90-100% (full, catchy)
- Bridge: 20-30% (breakdown, intimacy)

**EDM/House:**
- Intro: 20-30% (single element)
- Build: 40-70% (progressive layering)
- Drop: 100% (maximum density)
- Breakdown: 30-40% (reset)

**Rock:**
- Verse: 50% (verse riff + light drums)
- Chorus: 100% (distortion + full drums)
- Bridge: 30% (clean guitar breakdown)

**Hip-Hop:**
- Verse 1: 30-40% (drums + bass, minimal)
- Verse 2: 50-60% (+ strings/keys)
- Chorus: 70-80% (full beat + vocals + backing)

**R&B:**
- Verse: 30-40% (intimate, space for vocals)
- Chorus: 60-70% (full but not overwhelming)
- Bridge: 20% (vocals + piano only)

---

**Common Density Mistakes:**

**❌ Every Section at Maximum Density:**
If the verse, pre-chorus, chorus, and bridge all have 5 elements playing constantly, there's no contrast—the track feels exhausting and flat.

**✓ Fix:** Force yourself to remove 1-2 elements from verses. Reserve full density for choruses only.

---

**❌ No Sparse Moments:**
Going from 80% density to 100% density isn't enough contrast. You need at least one moment of 20-30% density for real impact.

**✓ Fix:** Add a breakdown, bridge, or post-chorus with only 1-2 elements.

---

**❌ Random Density Changes:**
Jumping from 30% to 100% to 40% to 90% randomly without purpose—creates confusion, not dynamics.

**✓ Fix:** Plan density progression: Intro (low) → Build (medium) → Chorus (high) → Breakdown (low) → Build (medium) → Final Chorus (maximum).

---

**❌ Sparse Chorus:**
Making the chorus the quietest, most minimal section. Choruses should (usually) be the fullest section—it's the payoff.

**✓ Fix:** Chorus should be 80-100% density. If you want an intimate chorus, that's fine, but make verses even sparser for contrast.
        `
      },
      {
        title: "Section-by-Section Density Strategy",
        content: `
**Intro: 20-40% Density (Minimal/Sparse)**

**Purpose:** Establish mood without overwhelming, invite listener into the track

**Element Count:** 1-2 elements

**Examples:**
- Solo piano/guitar melody
- Ambient pad + single drum hit
- Bassline only
- Vocal sample + atmospheric texture

**Why Sparse:** You want headroom to build. Starting at maximum leaves nowhere to go.

---

**Verse: 40-50% Density (Sparse/Light)**

**Purpose:** Spotlight the vocals/lyrics, create foundation, leave room for chorus contrast

**Element Count:** 2-3 elements

**Examples:**
- Drums + bass + vocals
- Piano + light drums + vocals
- Guitar + minimal percussion + vocals

**Why Sparse:** The verse is storytelling—too much density distracts from lyrics. The sparseness makes the chorus feel full by contrast.

**Key Rule:** Verses should be the **second-most-sparse section** after intros/breakdowns.

---

**Pre-Chorus: 60-70% Density (Medium)**

**Purpose:** Build energy from verse toward chorus, create anticipation

**Element Count:** 3-4 elements

**Examples:**
- Verse elements + pad/strings
- Verse elements + riser/buildup sound
- Verse elements + increased rhythmic activity

**Why Medium:** You're transitioning from sparse (verse) to full (chorus). The pre-chorus is the bridge between them.

**Key Rule:** Pre-chorus density should be **between verse and chorus**—not as sparse as verse, not as full as chorus.

---

**Chorus: 80-100% Density (Full/Maximum)**

**Purpose:** Deliver maximum impact, create memorability, payoff for verse/pre-chorus buildup

**Element Count:** 4-5+ elements (all available elements)

**Examples:**
- Drums (full kit) + bass + pad + lead + vocals + backing vocals
- Full band (guitar, bass, drums, keys, vocals, strings)
- EDM drop (kick, bass, lead, vocals, FX, percussion)

**Why Full:** The chorus is the climax, the hook, the moment listeners remember. Holding back here wastes the buildup.

**Key Rule:** The chorus should be the **fullest section** of your track. Everything builds toward this.

---

**Post-Chorus: 30-50% Density (Subtractive Breath)**

**Purpose:** Give listeners a "breath" after intense chorus, transition back to verse

**Element Count:** 2-3 elements (often instrumental—remove vocals)

**Examples:**
- Instrumental version of chorus (no vocals)
- Just bass + drums (remove melodic elements)
- Pad + light percussion only

**Why Sparse:** After maximum density, removing elements creates relief and makes the next section feel fresh.

**Key Rule:** Post-choruses are **optional** but highly effective for EDM, pop, and dance genres.

---

**Bridge: 20-40% Density (Minimal/Breakdown)**

**Purpose:** Create dramatic contrast, reset listener attention, make final chorus feel massive

**Element Count:** 1-2 elements

**Examples:**
- Vocals + piano only
- Acoustic guitar + vocals
- Just pad + distant vocal sample

**Why Minimal:** The bridge is your reset button. After 2-3 full choruses, listeners need emptiness to appreciate the final chorus climax.

**Key Rule:** The bridge should be the **sparsest section** besides the intro—often sparser than verses even.

---

**Final Chorus: 100%+ Density (Maximum + Extra)**

**Purpose:** Deliver ultimate climax, exceed all previous choruses, create memorable ending

**Element Count:** All elements + extra layers/variations

**Examples:**
- All chorus elements + strings/orchestra
- All chorus elements + key modulation
- All chorus elements + extended length (extra 4-8 bars)

**Why Maximum+:** This is the last impression. It must be bigger, fuller, and more intense than any previous section.

**Key Rule:** The final chorus should be **fuller than all previous choruses**. Add at least one new element or variation.

---

**Outro: 20-40% Density (Minimal/Fade)**

**Purpose:** Wind down energy, create resolution, graceful ending

**Element Count:** 1-2 elements

**Examples:**
- Return to intro elements (solo piano, single melody)
- Fade out of drums/bass, leave vocals + keys only
- Just ambient pad + vocal hums

**Why Sparse:** Ending at maximum density feels abrupt. Gradual density reduction = smooth, satisfying conclusion.

**Key Rule:** Outros should **mirror intro sparseness**—bookending the track with similar density.

---

**The Density Arc (Visual Representation):**

\`\`\`
DENSITY
100% |                     ╱‾‾╲         ╱‾‾‾‾╲
 90% |                   ╱    ╲       ╱      ╲
 80% |                  ╱      ╲     ╱        ╲
 70% |               ╱‾╲        ╲   ╱          ╲
 60% |             ╱    ╲        ╲ ╱            ╲
 50% |          ╱‾╲      ╲        ╲              ╲
 40% |        ╱    ╲      ╲        ╲              ╲
 30% |    ╱‾╲        ╲      ╲        ╲              ╲╲
 20% | ╱‾    ╲        ╲      ╲                       ‾╲
 10% |╱                ╲                                ╲
  0% |---------------------------------------------------
      Intro V1 PC  C1 V2 PC  C2 Bridge Final-C Outro
\`\`\`

**Notice:**
- Starts low (intro)
- Builds to first peak (chorus 1)
- Dips slightly (verse 2)
- Builds to second peak (chorus 2)
- Drops dramatically (bridge)
- Climaxes at highest point (final chorus)
- Winds down (outro)

This is the arc of a well-arranged track.

---

**Why This Matters:**

Density is one of the most powerful arrangement tools, yet it's often overlooked. You don't need more elements or better sounds—you need **strategic density contrast**. The difference between amateur "loop" tracks and professional arrangements is intentional density variation across sections.

**Key Takeaway:** It's not about how full your chorus is—it's about how much fuller it is than your verse.

**What's Next:**
In Lesson 14, you'll learn **frequency-based arrangement**—thinking vertically (low, mid, high frequency content) instead of just horizontally (elements over time). This pairs perfectly with density control to create maximum clarity and impact.
        `
      }
    ]
  },

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
