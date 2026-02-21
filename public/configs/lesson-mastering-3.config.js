/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 3 - Mastering EQ
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mastering",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mastering-2"],
    outcomes: ["Completare gli obiettivi pratici di mastering-3","Consolidare competenze beginner nel modulo mastering"]
  },
  lessonNumber: 3
});

export const lessonConfig = {
  lessonKey: "mpl-mastering-3-progress",
  lessonNumber: 3,
  lessonCategory: "Mastering",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },

  nextLessonUrl: "lesson-mastering-4.html",
  prevLessonUrl: "lesson-mastering-2.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Mastering" }),
    title: "Mastering EQ:",
    titleHighlight: "Linear Phase & Mid-Side Processing",
    subtitle: "Master the art of subtle tonal shaping using linear phase EQ for transparency and mid-side processing for surgical stereo control"
  },

  exercise: {
    title: "Apply Mastering EQ with Precision",
    description: "Use linear phase and mid-side EQ to shape your master's tonal balance while maintaining phase coherence and stereo integrity. Focus on subtle, broad adjustments that enhance without changing the mix's character.",
    tip: "In mastering, less is more. If you're reaching for more than ±3 dB on any band, the mix likely needs work. Start with broad shelves and gentle slopes. Surgical cuts are a last resort—they indicate mix problems, not mastering opportunities.",
    steps: [
      '<strong>Set up linear phase EQ</strong> — Insert a linear phase EQ on your master bus (FabFilter Pro-Q, iZotope Ozone EQ, or similar). Enable linear phase mode for all bands to prevent phase smearing.',
      '<strong>Listen before processing</strong> — Play through the entire track without touching the EQ. Note: Is it too dark? Too bright? Muddy low-mids? Harsh presence? Write down your observations.',
      '<strong>Compare to reference</strong> — A/B against your level-matched reference (Lesson 2). Identify specific frequency differences: "Reference has more air above 10 kHz" or "My mix is muddy around 200-300 Hz."',
      '<strong>Apply high-pass filter</strong> — Set a gentle HPF at <strong>20-30 Hz</strong> with a 12 dB/oct slope. This removes sub-sonic rumble that wastes headroom without affecting audible bass. Bypass and compare.',
      '<strong>Address low-end issues</strong> — If the low end is boomy or muddy, try a gentle cut of <strong>-1 to -2 dB</strong> at <strong>200-300 Hz</strong> with wide Q (0.5-1.0). If it needs more weight, try a <strong>+1 dB</strong> shelf boost below <strong>80-100 Hz</strong>.',
      '<strong>Shape the midrange</strong> — For more clarity, try a gentle cut of <strong>-0.5 to -1 dB</strong> at <strong>400-600 Hz</strong> (boxiness). For more presence, try <strong>+0.5 to +1 dB</strong> at <strong>2-4 kHz</strong>. Use wide Q values.',
      '<strong>Add air and brightness</strong> — If the high end needs lift, apply a high shelf boost of <strong>+1 to +2 dB</strong> starting at <strong>8-10 kHz</strong>. This adds "air" and modern sheen. Be subtle—harshness lives here too.',
      '<strong>Enable mid-side mode</strong> — Switch your EQ to mid-side mode (if available). Now you can EQ the center (mid) and sides independently.',
      '<strong>Tighten the sides low end</strong> — On the SIDE channel, apply a high-pass filter at <strong>100-150 Hz</strong>. This focuses the bass in the center for better mono compatibility and tighter low end.',
      '<strong>Add width in the highs</strong> — On the SIDE channel, try a gentle shelf boost of <strong>+0.5 to +1 dB</strong> above <strong>8-10 kHz</strong>. This adds stereo width and air without affecting the center image.',
      '<strong>Level-match and A/B</strong> — Bypass the entire EQ and level-match (EQ changes level). A/B compare: Does the EQ\'d version sound better, or just different? If just different, reconsider your moves.',
      '<strong>Check mono compatibility</strong> — Sum to mono and listen. Does the EQ\'d version still sound balanced? If you hear significant changes, your mid-side processing may be too aggressive.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Linear Phase EQ: What It Is and When to Use It',
        content: `Standard (minimum phase) EQ introduces phase shifts around the frequencies you boost or cut. In mixing, this is usually fine—sometimes even beneficial. In mastering, these phase shifts can affect the entire stereo image in subtle ways.

**How Standard EQ Works:**
Minimum phase EQ adjusts frequency response efficiently but introduces phase rotation. Higher boosts/cuts = more phase shift. This can cause:
- Pre-ringing on transients
- Subtle smearing of stereo image
- Tonal changes that compound across the full mix

**How Linear Phase EQ Works:**
Linear phase EQ uses look-ahead processing to adjust frequency response without phase shifts. The trade-off:
- No phase distortion
- Higher CPU usage
- Introduces pre-ringing (especially at low frequencies)
- Higher latency (not an issue for mastering)

**When to Use Linear Phase:**
- **Mastering:** Where phase coherence across the full stereo image matters
- **Mid-side processing:** Where phase differences between M and S could cause issues
- **Gentle, broad adjustments:** Linear phase excels here
- **Matching EQ:** When copying curves from references

**When NOT to Use Linear Phase:**
- **Surgical cuts:** Pre-ringing can be audible on narrow cuts
- **Low-frequency adjustments:** Pre-ringing is worst at low frequencies
- **Real-time applications:** Latency is prohibitive for live mixing

**Practical Approach:**
Use linear phase for broad tonal shaping (shelves, gentle cuts). Switch to minimum phase for surgical corrections if pre-ringing becomes audible. Many engineers use hybrid approaches—linear phase for some bands, minimum phase for others.`
      },
      {
        title: 'Mastering EQ Technique: Broad Strokes, Not Surgery',
        content: `Mastering EQ is fundamentally different from mixing EQ. You're working with a finished stereo mix—every adjustment affects everything.

**The Mastering EQ Mindset:**
- **Small moves:** ±0.5 to ±2 dB is typical. ±3 dB is significant.
- **Wide Q:** Low Q values (0.5-1.5) for broad, musical shaping
- **Shelves over bells:** High and low shelves sound more natural
- **Enhance, don't repair:** If you need surgical EQ, the mix needs work

**Common Mastering EQ Moves:**

**Low End:**
- HPF at 20-30 Hz (always—removes inaudible rumble)
- Low shelf +1 to +2 dB at 60-100 Hz (adds weight)
- Cut -1 to -2 dB at 200-350 Hz (reduces mud)

**Midrange:**
- Cut -0.5 to -1 dB at 400-600 Hz (reduces boxiness)
- Cut -0.5 to -1 dB at 800 Hz-1 kHz (reduces honk)
- Boost +0.5 to +1 dB at 2-4 kHz (adds presence)

**High End:**
- High shelf +1 to +2 dB at 8-12 kHz (adds air)
- Cut -0.5 to -1 dB at 3-5 kHz (reduces harshness)
- Gentle roll-off above 16-18 kHz (optional—natural)

**The "Problem Frequency" Trap:**
If you find yourself making a 6 dB cut at 3.2 kHz, you're not mastering—you're fixing a mix problem. The mix should be revised. Mastering EQ corrects tendencies, not flaws.

**Level Matching:**
EQ changes loudness. Always level-match before A/B comparison. Louder sounds better—don't be fooled.`
      },
      {
        title: 'Mid-Side EQ: Surgical Stereo Control',
        content: `Mid-side (M/S) EQ allows you to process the center (mid) and sides (stereo difference) independently. This is powerful but easy to abuse.

**Understanding Mid-Side:**
- **Mid = (L + R) / 2:** The mono/center content
- **Side = (L - R) / 2:** The stereo difference
- Decoded back: L = Mid + Side, R = Mid - Side

**Why M/S Matters in Mastering:**
Different elements live in different parts of the stereo field:
- **Center:** Kick, bass, snare, lead vocal, bass guitar
- **Sides:** Guitars, synths, backing vocals, stereo effects, width

M/S EQ lets you treat these differently—tightening bass in the center while adding air to the sides.

**Common M/S Mastering Moves:**

**Side High-Pass (Essential):**
- HPF on sides at 100-150 Hz
- Focuses bass in the center
- Improves mono compatibility
- Tightens overall low end

**Side Air Boost:**
- Shelf +0.5 to +1.5 dB above 8-10 kHz on sides
- Adds width and sparkle
- Doesn't affect centered vocal/lead

**Mid Presence:**
- Boost +0.5 to +1 dB at 2-4 kHz on mid
- Brings out lead vocal/snare
- Doesn't affect panned elements

**Mid Low-End Control:**
- Slight cut at 200-300 Hz on mid
- Cleans up center mud
- Leaves side elements untouched

**M/S Dangers:**
- Too much side boost = phase-heavy, weird in mono
- Too much mid cut = thin, hollow center
- Always check mono compatibility after M/S processing
- Subtle is key—±1 dB is significant in M/S`
      },
      {
        title: 'High-Pass Filtering in Mastering',
        content: `Every master should have a high-pass filter. The debate is only about where to set it.

**Why HPF in Mastering:**
- **Removes inaudible content:** Frequencies below 20-25 Hz are inaudible on most systems
- **Saves headroom:** Sub-sonic rumble wastes peak headroom
- **Improves translation:** Removes content that only affects large PA systems
- **Reduces limiter work:** Less sub content = less limiting needed for same loudness

**Where to Set the HPF:**
| Setting | Use Case |
|---------|----------|
| 20-25 Hz | Conservative—just removing sub-sonic noise |
| 30-35 Hz | Standard for most music |
| 40-50 Hz | Tightening bass-heavy genres |
| 60+ Hz | Too high for most masters—thins low end |

**Slope Considerations:**
- **6 dB/oct:** Very gentle, musical roll-off
- **12 dB/oct:** Standard, balanced
- **18-24 dB/oct:** Steeper, more precise but can ring
- **Linear phase:** Reduces phase shift but may pre-ring

**Genre-Specific Guidance:**
- **EDM/Hip-Hop:** 20-30 Hz (preserve sub weight)
- **Rock/Pop:** 30-40 Hz (controlled low end)
- **Acoustic/Jazz:** 25-35 Hz (natural bass)
- **Vinyl masters:** Higher HPF (vinyl can't reproduce extreme sub)

**The "Always HPF" Rule:**
Even if your mix seems clean below 30 Hz, apply a gentle HPF. It costs nothing and provides insurance against problems you can't hear on your monitors but will show up on large systems.`
      },
      {
        title: 'Matching EQ and Tonal Reference',
        content: `Some EQ plugins offer "matching" features that analyze a reference track and suggest EQ curves to match your mix to the reference. These are useful but require understanding.

**How EQ Matching Works:**
1. Plugin analyzes frequency spectrum of reference
2. Plugin analyzes your mix
3. Plugin generates curve to make your mix match the reference
4. You apply (or modify) the suggested curve

**When EQ Matching Helps:**
- Quick starting point for tonal balance
- Identifying frequency differences you might miss
- Learning what professional masters "look like"
- Sanity checking your manual EQ decisions

**When EQ Matching Fails:**
- Matching a different genre (rock reference for EDM)
- Over-limiting the reference (distorted spectrum)
- Blindly applying the full curve (usually too aggressive)
- Not level-matching the comparison

**Best Practice:**
1. Generate the matching curve
2. Reduce it to 30-50% of suggested intensity
3. Use it as a starting point, then fine-tune by ear
4. A/B against the original—does it actually sound better?

**Manual Matching Alternative:**
1. Open spectrum analyzer
2. Play level-matched reference, note spectral shape
3. Play your mix, note differences
4. Apply broad EQ to address the main differences
5. Don't try to match exactly—just address obvious gaps

**The Danger of Over-Matching:**
If you match your indie folk song to a hip-hop master, you'll add inappropriate sub bass and cut presence the folk song needs. Match within genre, and use your ears to judge what actually serves the song.`
      },
      {
        title: 'Practical EQ Workflow for Mastering',
        content: `A structured EQ workflow prevents over-processing and ensures your decisions serve the music.

**Step 1: Analyze (No Processing)**
- Listen through entire track 2-3 times
- Note tonal issues: too dark, too bright, muddy, harsh, thin
- Compare to level-matched reference
- Write down specific observations

**Step 2: Plan (Still No Processing)**
- Based on analysis, plan 2-4 moves maximum
- Example: "HPF at 30 Hz, -1 dB at 300 Hz for mud, +1.5 dB shelf at 10 kHz for air"
- Resist the urge to do more

**Step 3: Apply (Conservative)**
- Insert linear phase EQ
- Make planned moves
- Use wide Q values (0.5-1.5)
- Stay within ±2 dB for most moves

**Step 4: Level-Match and A/B**
- Bypass EQ
- Adjust output gain to match bypassed level
- A/B rapidly—does it sound better or just different?
- If just different, reconsider

**Step 5: Reference Check**
- A/B against level-matched reference
- Are you closer to the reference's tonal balance?
- Don't try to match exactly—just check for obvious problems

**Step 6: Mono Check**
- Sum to mono
- Any phase issues from M/S processing?
- Does the tonal balance still work?

**When to Stop:**
- You've made 3-4 moves
- A/B shows clear improvement
- Further moves are "just in case" rather than addressing real issues
- You're second-guessing previous decisions

**The Subtlety Test:**
If someone else can immediately hear that your master was EQ'd, you may have done too much. Great mastering EQ is often imperceptible in isolation—it just makes the mix sound "right."`
      }
    ]
  },

  learningObjectives: [
    "Understand linear phase EQ: benefits for mastering, pre-ringing trade-offs, and when to use minimum phase instead",
    "Apply broad, subtle EQ moves (±0.5 to ±2 dB) with wide Q values to enhance tonal balance without changing character",
    "Use mid-side EQ to tighten low end (side HPF), add width (side air boost), and control center presence independently",
    "Set appropriate high-pass filters (20-40 Hz) to remove sub-sonic content and preserve headroom",
    "Follow a structured EQ workflow: analyze, plan, apply conservatively, level-match A/B, reference check, mono verify"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to master EQ techniques.",
    success: "Excellent! You can now apply mastering EQ with precision and subtlety.",
    error: "Review the EQ concepts and try again.",
    alreadyCompleted: "You've mastered Mastering EQ. Ready for Lesson 4!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
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
