/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 12 - Tension and Release
 *
 * This lesson teaches how to build and release musical tension.
 * Master suspense, anticipation, and satisfying resolution.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 12
});

export const lessonConfig = {
  lessonKey: "mpl-arrangement-12-progress",
  lessonNumber: 12,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 3,

  nextLessonUrl: "lesson-arrangement-13.html",
  prevLessonUrl: "lesson-arrangement-11.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Arrangement" }),
    title: "Tension and Release:",
    titleHighlight: "Musical Suspense",
    subtitle: "Master <strong>building tension</strong> and <strong>releasing it</strong>. Learn how to create <strong>anticipation</strong>, <strong>suspense</strong>, and <strong>satisfying resolution</strong>. This is the heartbeat of emotional arrangement."
  },

  exercise: {
    title: "Build Tension and Release Cycles",
    description: "Create an arrangement with clear <strong>tension-building sections</strong> that resolve into <strong>release moments</strong>. Tension comes from buildup, suspense, and unfulfilled expectations. Release comes from drops, resolution, and payoff.",
    tip: "Tension is like inhaling—it can't last forever. You MUST release. Build for 8-16 bars, then release. The longer the tension, the bigger the release needs to be. Use risers, filter sweeps, and drum fills to build tension.",
    steps: [
      { text: "<strong>Establish stability</strong> - Start with a stable, grounded section" },
      { text: "<strong>Introduce tension</strong> - Add risers, increase tempo feel, or unresolved chords" },
      { text: "<strong>Build progressively</strong> - Layer more tension techniques" },
      { text: "<strong>Peak tension moment</strong> - The moment before release (often silence)" },
      { text: "<strong>Release explosively</strong> - Drop/chorus with full energy and resolution" },
      { text: "<strong>Stabilize again</strong> - Return to grounded state, ready for next cycle" }
    ]
  },

  tensionTechniques: [
    { name: "Risers", icon: "📈", description: "Sound that rises in pitch/volume", tension: "High", examples: ["White noise sweep", "Synth riser"] },
    { name: "Drum Fills", icon: "🥁", description: "Rhythmic pattern building to section change", tension: "Medium", examples: ["Snare rolls", "Tom fills"] },
    { name: "Filter Sweep", icon: "🎛️", description: "High-pass filter opening gradually", tension: "Medium", examples: ["Opening filter", "Building brightness"] },
    { name: "Harmonic Tension", icon: "🎹", description: "Unresolved chords or suspended notes", tension: "High", examples: ["V chord waiting for I", "Sus4 chord"] },
    { name: "Silence/Gap", icon: "⏸️", description: "Brief pause before drop", tension: "Maximum", examples: ["1-beat silence", "Half-bar gap"] },
    { name: "Density Increase", icon: "📊", description: "Adding more elements progressively", tension: "Medium", examples: ["Layering sounds", "Faster rhythms"] }
  ],

  releaseTechniques: [
    { name: "The Drop", description: "Full-energy section after buildup", impact: "Maximum" },
    { name: "Harmonic Resolution", description: "Chord progression resolves (V → I)", impact: "High" },
    { name: "Rhythmic Resolution", description: "Return to steady groove after fills", impact: "Medium" },
    { name: "Breakdown", description: "Strip back to minimal after fullness", impact: "High" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create tension-release cycles with builds and drops!",
    success: "🎢 Masterful tension and release! Your arrangement creates emotional peaks and valleys.",
    error: "Make sure you have clear tension-building sections followed by satisfying releases.",
    alreadyCompleted: "You've mastered tension and release! Try creating multiple cycles with varying intensities."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showEnergyGraph: true,
    showTensionMeter: true
  },

  learningObjectives: [
    "Understand tension and release as the foundation of emotional arrangement",
    "Apply six tension-building techniques effectively",
    "Create satisfying release moments after tension",
    "Build multiple tension-release cycles in one track",
    "Use silence as the ultimate tension tool"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Tension and Release Is the Heartbeat of Music",
        content: `
**The Fundamental Principle of Emotional Arrangement:**
All music—across every genre and culture—operates on **tension and release**. Tension is anticipation, suspense, the musical "inhale." Release is resolution, satisfaction, the musical "exhale." Without this cycle, music feels flat and emotionless.

Think of tension and release like a story:
- **Tension = Rising action, conflict, suspense**
- **Release = Climax, resolution, payoff**

No story would work if it was all climax or all setup. The same is true for music—you need both to create an emotional journey.

**Why It Works Physiologically:**
Tension creates physiological responses:
- Increased heart rate
- Anticipation (dopamine buildup in the brain)
- Physical leaning forward, attention sharpening

Release delivers satisfaction:
- Dopamine release (pleasure response)
- Physical relaxation
- Emotional catharsis

This isn't subjective preference—it's how our brains are wired to process narrative and music.

---

**Real-World Examples:**

**"Levels" by Avicii:**
- **Tension:** 16-bar buildup with rising filter sweep and increasing drum rolls
- **Release:** The drop with full bass and vocal hook
- *Impact:* One of the most iconic EDM drops ever—the tension makes the release euphoric

**"Bohemian Rhapsody" by Queen:**
- **Tension:** The operatic section building chaos and complexity
- **Release:** The final rock section resolving back to the main theme
- *Impact:* The journey from tension to release creates the song's dramatic arc

**"In the Air Tonight" by Phil Collins:**
- **Tension:** 3+ minutes of sparse, atmospheric verse with no drums
- **Release:** The iconic drum fill and full arrangement drop at 3:40
- *Impact:* One of the most satisfying releases in pop history because of the extended tension

**"Scary Monsters and Nice Sprites" by Skrillex:**
- **Tension:** Vocal loop with rising pitch and increasing intensity
- **Release:** The "dubstep drop" with wobble bass
- *Impact:* Defined a genre by perfecting tension-release timing

---

**The Tension-Release Cycle Duration:**

**Short Cycles (4-8 bars):**
- Build tension for 4 bars, release for 4 bars, repeat
- Used in: Pop, house, most dance music
- *Effect:* Constant forward momentum, energetic feel

**Medium Cycles (8-16 bars):**
- Build tension for 8-16 bars, release for 8-16 bars
- Used in: Rock, R&B, hip-hop
- *Effect:* Balanced pacing, allows development

**Long Cycles (16-32+ bars):**
- Extended tension building across multiple sections
- Used in: Progressive house, trance, post-rock
- *Effect:* Massive cathartic release when payoff finally arrives

**Rule:** The longer you build tension, the more satisfying (and necessary) the release must be.

---

**The Danger of Constant Tension:**
You cannot sustain tension indefinitely. If you build for too long without release, the listener becomes fatigued, not excited. It's like holding your breath—eventually you MUST exhale.

**Amateur Mistake:** 2-minute buildup with no drop (tension without payoff = frustration)

---

**The Danger of Constant Release:**
But you also can't have constant "drops" or high-energy moments. Without tension, release loses meaning. If the entire song is at maximum energy, there's no dynamic range, no emotional arc.

**Amateur Mistake:** Every section at 100% intensity (no contrast = listener fatigue)

---

**The Professional Approach:**
Pro arrangements use **multiple tension-release cycles** of varying intensity throughout the track:

**Example Song Structure:**
- Intro: Low tension (establish foundation)
- Verse 1: Light tension build (anticipation)
- Pre-chorus: Medium tension (rising action)
- Chorus 1: **Release** (payoff)
- Verse 2: Light tension again (reset)
- Pre-chorus 2: Higher tension (more intense)
- Chorus 2: **Bigger release** (bigger payoff)
- Bridge: **Maximum tension** (extended build, riser, silence)
- Final Chorus: **Ultimate release** (biggest payoff)

Each cycle increases in intensity, creating an overall arc of rising stakes and satisfaction.
        `
      },
      {
        title: "The Six Tension-Building Techniques",
        content: `
**1. Risers (The Classic Buildup):**

**What It Is:** A sound that rises in pitch, volume, or both, creating mounting anticipation.

**How to Create:**
- White noise sweep: High-pass filtered noise with rising cutoff frequency
- Synth riser: Pitch automation rising 1-2 octaves over 4-16 bars
- Volume automation: Gradually increasing gain over time

**When to Use:**
- Before drops (EDM staple)
- Before choruses (pop/rock)
- Any moment requiring anticipation

**Tension Level:** High (one of the most obvious tension tools)

**Pro Tip:** Combine with other techniques (riser + filter sweep + drum fill) for maximum impact.

---

**2. Drum Fills (The Rhythmic Signal):**

**What It Is:** A break in the regular drum pattern—usually a roll, cascade, or pattern that signals "something's about to change."

**How to Create:**
- Snare roll: 16th or 32nd note snare hits building to section change
- Tom fills: Descending tom pattern (high → mid → low tom)
- Kick patterns: Rapid kick hits increasing in frequency

**When to Use:**
- Last 1-2 bars before section change
- End of verses before choruses
- Signaling transitions without being too obvious

**Tension Level:** Medium (less aggressive than risers, but highly effective)

**Pro Tip:** Use crescendos (increasing volume) on drum fills for extra intensity.

---

**3. Filter Sweeps (The Brightness Buildup):**

**What It Is:** Gradually opening a low-pass filter, brightening the sound from dark/muffled to bright/full.

**How to Create:**
- Apply low-pass filter to drums, bass, or full mix
- Automate cutoff frequency: Start at 200-500Hz, open to 20kHz
- Duration: 4-16 bars

**When to Use:**
- Intros (filter opening = "turning on")
- Buildups (brightness = energy)
- Transitions between sections

**Tension Level:** Medium-High (very effective for sustained builds)

**Pro Tip:** Combine with resonance boost for a more pronounced sweep effect.

---

**4. Harmonic Tension (The Unresolved Chord):**

**What It Is:** Using chords that create harmonic instability, demanding resolution.

**How to Create:**
- **V chord:** The 5th chord of the key (e.g., G in key of C) creates strong pull to I
- **Sus4 chord:** Suspend the 3rd, replace with 4th (creates unresolved sound)
- **Diminished/Augmented chords:** Inherently unstable, demand resolution
- **Non-functional progressions:** Chords that don't follow expected patterns

**When to Use:**
- Pre-chorus (building harmonic tension before chorus)
- Bridge (creating instability before final resolution)
- Buildups (harmonic + rhythmic tension combined)

**Tension Level:** High (especially for listeners with harmonic awareness)

**Classical Example:**
\`\`\`
Tension:  | Am | F | G | — |  (G chord = V, wants to resolve)
Release:  | C  |   |   |   |  (C chord = I, home, resolution)
\`\`\`

---

**5. Silence/Gap (The Ultimate Tension Tool):**

**What It Is:** Brief moments of complete silence (or near-silence) immediately before a big moment.

**How to Create:**
- Mute all elements for 1/4 to 1 beat before the drop/chorus
- Often placed at the end of a riser or buildup
- Duration: Usually 1/8 beat to 1 full beat

**When to Use:**
- Immediately before massive drops
- Before final choruses
- Creating "wait for it..." moments

**Tension Level:** Maximum (silence is the most intense tension tool)

**Why It Works:** The absence of sound creates a micro-reset in the listener's brain. When sound returns, it feels exponentially more impactful. Even 1/4 second of silence can make a drop hit 10x harder.

**Pro Tip:** Don't overuse—silence loses impact if used too frequently (save for 2-3 key moments per track).

---

**6. Density Increase (The Layering Approach):**

**What It Is:** Progressively adding more elements and rhythmic activity, increasing perceived energy.

**How to Create:**
- Start with 1-2 elements (verse)
- Add 1 element every 4-8 bars (pre-chorus)
- Reach maximum density at release point (chorus/drop)
- Combine with faster rhythms (quarter notes → eighths → sixteenths)

**When to Use:**
- Extended buildups (16-32 bars)
- Progressive house/trance builds
- Creating gradual energy increase

**Tension Level:** Medium (subtle but effective over time)

**Example:**
\`\`\`
Bars 1-8:   Kick only
Bars 9-16:  Kick + Snare
Bars 17-24: Kick + Snare + Hi-hats
Bars 25-32: Kick + Snare + Hi-hats + Percussion + Riser
Bar 33:     DROP (all elements + bass)
\`\`\`

---

**Combining Techniques for Maximum Tension:**

**Light Tension (Subtle Build):**
- Drum fill only (2 bars)

**Medium Tension (Standard Build):**
- Riser (8 bars) + Drum fill (last 2 bars)

**High Tension (Big Build):**
- Filter sweep (8 bars) + Riser (8 bars) + Drum roll (last 4 bars) + Silence (final beat)

**Maximum Tension (Genre-Defining Drop):**
- Density increase (16 bars) + Filter sweep (8 bars) + Harmonic tension (4 bars) + Riser (4 bars) + Drum roll + Silence (1 beat) → **RELEASE**

The more techniques you layer, the more intense the build—but also the more essential the release becomes.
        `
      },
      {
        title: "Creating Satisfying Releases—Making the Payoff Count",
        content: `
**What Makes a Good Release:**

A satisfying release must match or exceed the intensity of the tension. If you build for 16 bars with risers, filters, and silence, the release can't be a quiet breakdown—it needs to be an explosive drop.

**The Four Types of Release:**

---

**1. The Drop (Maximum Energy Release):**

**What It Is:** Full-energy section with bass, drums, and lead melody—the most common EDM/pop release.

**How to Create:**
- All elements enter simultaneously (bass, kick, snare, lead)
- Maximum frequency spectrum (sub-bass to high-hats)
- Often the most dense section of the track
- Rhythmically locked (4-on-the-floor, groove-heavy)

**When to Use:** After major buildups, as chorus payoff, peak energy moments

**Impact Level:** Maximum

**Example:** Any EDM drop—Martin Garrix "Animals", Zedd "Clarity", deadmau5 "Strobe"

---

**2. Harmonic Resolution (Emotional Release):**

**What It Is:** The V chord resolves to the I chord, creating harmonic satisfaction.

**How to Create:**
\`\`\`
Tension:  | G (V chord) | — | — | — |  (Dominant, unstable)
Release:  | C (I chord) | — | — | — |  (Tonic, home, stable)
\`\`\`

Also works with:
- **Sus4 → Major:** Csus4 → C (4th resolves to 3rd)
- **vii° → I:** Bdim → C (diminished resolves to tonic)

**When to Use:** Final choruses, endings, emotional peaks in ballads

**Impact Level:** High (especially for harmonic listeners)

**Example:** Most classical pieces, gospel music, jazz ballads

---

**3. Rhythmic Resolution (Groove Release):**

**What It Is:** Return to steady, predictable groove after drum fills or rhythmic chaos.

**How to Create:**
- Build with drum rolls, fills, and rhythmic complexity
- Drop into solid 4-on-the-floor or consistent groove
- The stability of the rhythm = release

**When to Use:** After drum-heavy buildups, returning to verse after chorus

**Impact Level:** Medium (subtle but effective for rhythmic tension)

**Example:** Rock songs—drum fill into first beat of chorus, funk grooves locking in after fills

---

**4. The Breakdown (Subtractive Release):**

**What It Is:** Strip away elements to create space and intimacy—opposite of the drop.

**How to Create:**
- Remove drums, bass, or most elements
- Often leave vocals + keys or guitar only
- Low density, low energy

**When to Use:** After intense chorus, mid-song reset, bridge section

**Impact Level:** High (in reverse—release through subtraction, not addition)

**Example:** EDM breakdown after first drop, pop post-chorus intimacy

---

**Timing the Release:**

**The Psychological Sweet Spot:**
- **Too Soon:** If you release before building adequate tension, the payoff feels underwhelming
- **Too Late:** If you build tension too long, the listener becomes fatigued and disengaged
- **Just Right:** Release at the peak of anticipation—when the tension feels almost unbearable but hasn't crossed into frustration

**General Guidelines:**
- **4-8 bar build → 8-16 bar release** (standard pop/EDM)
- **16-bar build → 16-32 bar release** (progressive house, trance)
- **32+ bar build → Extended release** (post-rock, cinematic builds)

**The "Silence Before the Storm" Rule:**
A brief moment of silence (1/4 to 1 beat) immediately before the release makes the drop feel exponentially more impactful. This is why nearly every EDM track uses silence before the drop—it's neurologically effective.

---

**Multiple Release Cycles in One Track:**

Pro arrangements don't just have one tension-release cycle—they have 3-5+ cycles of varying intensity:

**Example Song Structure:**

1. **Intro → Verse 1 (Light Cycle):**
   - Tension: Sparse intro building slightly
   - Release: Verse 1 with groove

2. **Pre-Chorus → Chorus 1 (Medium Cycle):**
   - Tension: Pre-chorus with rising energy
   - Release: Chorus 1 (first big payoff)

3. **Verse 2 → Chorus 2 (Medium-High Cycle):**
   - Tension: Verse 2 builds more than Verse 1
   - Release: Chorus 2 (bigger than Chorus 1)

4. **Bridge (Maximum Tension):**
   - Tension: Extended build, riser, filter sweep, silence
   - Release: Final Chorus (ultimate payoff)

Each cycle increases in intensity, creating an overall arc.

---

**Common Release Mistakes:**

**❌ Weak Drop After Big Build:**
Building tension for 16 bars with risers, filters, silence... then dropping into a quiet verse. The release doesn't match the tension—listeners feel cheated.

**✓ Fix:** Match or exceed tension intensity. Big build = big drop.

---

**❌ No Release at All:**
Building tension with risers and drum fills, then... continuing to build without payoff. This creates frustration, not engagement.

**✓ Fix:** Always deliver a release. Tension demands resolution.

---

**❌ Releasing Too Early:**
Dropping at 4 bars when the listener expects 8 bars—feels rushed and anticlimactic.

**✓ Fix:** Let the tension build to its natural peak before releasing.

---

**Why This Matters:**

Tension and release is THE fundamental principle of emotional arrangement. Every genre, every culture, every musical tradition uses this concept—it's universal because it mirrors human breathing, storytelling, and physiological response.

**Without tension:** Your music feels flat, monotonous, boring
**Without release:** Your music feels frustrating, exhausting, unresolved
**With both, balanced:** Your music creates an emotional journey that keeps listeners engaged from start to finish

**What's Next:**
In Lesson 13, you'll learn how to use **section density** (sparse to full) to create contrast and impact. This technique pairs perfectly with tension-release cycles—sparse sections build tension, full sections provide release.
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
