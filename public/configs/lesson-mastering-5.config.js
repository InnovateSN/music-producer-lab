/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 5 - Stereo Enhancement & Width
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mastering-5-progress",
  lessonNumber: 5,
  lessonCategory: "Mastering",

  nextLessonUrl: "lesson-mastering-6.html",
  prevLessonUrl: "lesson-mastering-4.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Mastering" }),
    title: "Stereo Enhancement & Width:",
    titleHighlight: "Widen Without Destroying Mono",
    subtitle: "Master the art of stereo imaging—adding width and dimension while maintaining rock-solid mono compatibility and a focused center image"
  },

  exercise: {
    title: "Enhance Stereo Width While Preserving Mono Compatibility",
    description: "Apply stereo enhancement techniques that add width and dimension to your master without sacrificing mono compatibility or creating phase problems.",
    tip: "The most common stereo mistake: adding width that disappears in mono. Before ANY stereo processing, listen in mono. After stereo processing, check mono again. If elements vanish or thin out, your widening is too aggressive. Width that works only in stereo is width that fails on 50% of playback systems.",
    steps: [
      '<strong>Check baseline mono compatibility</strong> — Before any stereo processing, sum your mix to mono (use a utility plugin). Listen: Does anything disappear? Does the balance change dramatically? Note any existing mono problems.',
      '<strong>Insert stereo imager</strong> — Add a stereo imaging plugin after compression (iZotope Ozone Imager, Waves S1, or similar). Set to neutral/bypass initially.',
      '<strong>Analyze the stereo image</strong> — Use your stereo meter (Lesson 2) to visualize the current stereo spread. Note: Is it narrow? Wide? Balanced?',
      '<strong>Apply subtle overall width</strong> — Increase stereo width by <strong>5-15%</strong> (or equivalent on your plugin). Listen for increased spaciousness. Immediately check mono—if anything disappears, reduce width.',
      '<strong>Try multiband stereo processing</strong> — If your plugin supports multiband, keep low frequencies (<strong>100-150 Hz</strong>) mono or narrow, while widening mids and highs. This focuses bass while adding width elsewhere.',
      '<strong>Apply mid-side balance adjustment</strong> — If your plugin has M/S controls, try boosting Sides by <strong>+0.5 to +1 dB</strong> for subtle width, or cutting Sides by <strong>-0.5 to -1 dB</strong> for more focus. Always check mono.',
      '<strong>Consider the Haas effect (carefully)</strong> — Some imagers use tiny delays for width (Haas effect). This can cause severe mono problems. If using, keep delay under <strong>10-15 ms</strong> and check mono thoroughly.',
      '<strong>Test on narrow sections</strong> — Play a verse or sparse section. Does widening make it feel empty or disconnected? Stereo enhancement often works better on dense sections than sparse ones.',
      '<strong>A/B stereo processing</strong> — Bypass the stereo imager. Compare: Does the widened version sound better, or just different? Is the center still focused? Is the low end still tight?',
      '<strong>Mono check after processing</strong> — Sum to mono again. Compare to your baseline mono check. If mono compatibility is worse, reduce stereo processing or reconsider your approach.',
      '<strong>Check on headphones</strong> — Stereo processing sounds different on speakers vs headphones. Verify your width works in both. Extreme width that sounds good on speakers can be fatiguing on headphones.',
      '<strong>Reference check</strong> — A/B against your reference track\'s stereo image. Is your master\'s width appropriate for the genre? Some genres are wider than others.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Stereo Width in Mastering',
        content: `Stereo width creates the sense of space, dimension, and "bigness" in a master. But width without control creates problems—mono collapse, phase issues, and unfocused mixes.

**What Creates Stereo Width:**
- **Panning:** Different elements placed at different positions (mix decision)
- **Stereo recordings:** Room mics, stereo instruments
- **Stereo effects:** Reverb, delay, chorus with stereo outputs
- **M/S processing:** Boosting the side signal relative to mid
- **Haas effect:** Small time delays between L and R

**The Width Continuum:**
| Width | Character | Mono Behavior |
|-------|-----------|---------------|
| Very Narrow | Focused, intimate, mono-like | Perfect mono compatibility |
| Normal | Balanced, natural | Good mono compatibility |
| Wide | Spacious, impressive | Some mono reduction |
| Very Wide | Extreme, immersive | Significant mono issues |

**Why Mono Compatibility Matters:**
- Phone speakers are essentially mono
- Club systems often sum to mono for subs
- Bluetooth speakers vary widely
- Radio broadcast can be mono
- Sound bars and TV speakers are often narrow/mono

**The Mastering Challenge:**
You can't change the mix's inherent width—panning and stereo choices are baked in. Mastering can:
- Subtly enhance existing width
- Focus an overly wide mix
- Tighten bass in the center
- Add air/sparkle to the sides

What mastering cannot do:
- Make a mono mix stereo
- Fix fundamental phase problems from the mix
- Create width that doesn't exist in the source`
      },
      {
        title: 'Stereo Imaging Tools and Techniques',
        content: `Several techniques can adjust stereo width in mastering. Each has strengths and potential problems.

**Mid-Side (M/S) Processing:**
The most common and generally safest approach:
- **Boost Sides:** +0.5 to +2 dB increases width
- **Cut Sides:** -0.5 to -2 dB focuses/narrows
- **Cut Mid:** Increases relative side level (sounds wider)
- **Boost Mid:** Increases center focus

**Advantages of M/S:**
- Relatively mono-compatible (no phase manipulation)
- Frequency-selective when combined with EQ
- Predictable, controllable results

**Stereo Enhancers/Imagers:**
Dedicated plugins that increase perceived width:
- Often combine M/S with other techniques
- May use subtle Haas effect or phase manipulation
- Results vary by plugin—some are mono-safe, others aren't

**The Haas Effect:**
Creating width by delaying one channel slightly:
- Delays of 10-30 ms create width
- Very effective but causes severe mono collapse
- Summing L+R creates comb filtering
- Use with extreme caution in mastering

**Phase Rotation:**
Some tools widen by manipulating phase relationships:
- Can sound impressive in stereo
- Often causes significant mono problems
- Generally avoid in mastering

**Safe Width Enhancement Priority:**
1. **M/S balance:** Safest, most controllable
2. **Multiband M/S:** Target specific frequencies
3. **Dedicated imagers (mono-safe):** Ozone Imager, etc.
4. **Haas/delay-based:** Use carefully, check mono
5. **Phase manipulation:** Avoid for mastering`
      },
      {
        title: 'Multiband Stereo Processing',
        content: `Different frequency ranges benefit from different stereo treatments. Multiband stereo processing lets you optimize width per frequency.

**The Frequency-Width Relationship:**

**Low Frequencies (Below 150 Hz):**
- Should be mono or near-mono
- Stereo bass causes phase issues
- Club systems, subs, and many speakers sum bass
- Wide bass = weak bass in mono

**Low-Mids (150-500 Hz):**
- Narrow to moderate width
- Keeps the mix's "body" focused
- Some width OK, but center should dominate

**Mids (500 Hz-2 kHz):**
- Moderate width appropriate
- This is where vocals, snare, main elements live
- Too wide = disconnected, hollow center

**High-Mids (2-8 kHz):**
- Can be wider
- Presence range—detail and clarity
- Width here adds "air" and dimension

**Highs (8 kHz+):**
- Widest potential
- Air, shimmer, sparkle
- Width here is least mono-problematic

**Practical Multiband Settings:**

| Band | Frequency | Width Setting | Reasoning |
|------|-----------|---------------|-----------|
| Low | 0-150 Hz | Mono/0% | Tight, focused bass |
| Low-mid | 150-500 Hz | Narrow/30% | Centered body |
| Mid | 500 Hz-2 kHz | Normal/50% | Balanced core |
| High-mid | 2-8 kHz | Wide/70% | Detailed width |
| High | 8 kHz+ | Wide/80-100% | Air and sparkle |

**The Bass Mono Rule:**
Always keep bass frequencies (below 100-150 Hz) mono or near-mono. This is non-negotiable for professional masters. Wide bass:
- Causes vinyl cutting problems
- Creates phase issues on club systems
- Reduces impact on most speakers
- Fails the mono check`
      },
      {
        title: 'The Mono Compatibility Test',
        content: `Mono compatibility is the ultimate test of your stereo processing. If your master falls apart in mono, your width is problematic.

**How to Check Mono:**
1. Insert a utility plugin at the end of your chain
2. Set to mono sum (L+R combined)
3. Listen through your entire track in mono
4. Note any problems

**What to Listen For:**

**Elements Disappearing:**
If instruments vanish or become very quiet in mono, they had significant out-of-phase content. This might be:
- From the mix (can't fix in mastering)
- From your stereo processing (reduce or change approach)

**Thinning Low End:**
If bass becomes weak in mono, there's phase cancellation in the low frequencies. Solutions:
- Ensure bass is mono (multiband stereo processing)
- Reduce overall width
- Check if the problem exists in the source mix

**Changed Balance:**
If the overall balance shifts dramatically (e.g., guitars much louder, vocals quieter), elements have different mono/stereo characteristics. Subtle shifts are normal; dramatic shifts indicate problems.

**Comb Filtering:**
If you hear a "hollow," "phasey," or "underwater" quality in mono, there's significant phase cancellation. This usually indicates:
- Haas effect widening
- Phase-based stereo enhancement
- Problems in the source mix

**The Acceptable Standard:**
A professional master should:
- Sound good in mono (obviously narrower, but balanced)
- Not lose significant elements
- Maintain tonal balance
- Not have obvious phase artifacts

Perfect mono compatibility isn't always possible (some stereo effects inherently reduce mono), but dramatic problems indicate issues that need fixing.`
      },
      {
        title: 'Stereo Enhancement Workflow',
        content: `A structured approach to stereo processing prevents over-widening and mono disasters.

**Step 1: Evaluate the Source**
Before any processing:
- Listen in stereo: How wide is it already?
- Listen in mono: Any existing problems?
- Compare to reference: Is width appropriate for genre?

**Step 2: Decide if Enhancement is Needed**
Questions to ask:
- Does the mix feel narrow compared to references?
- Is the mix already appropriately wide?
- Is the mix too wide (need to focus)?

If the mix is already appropriate, skip stereo processing.

**Step 3: Choose Your Tool**
Based on need:
- Subtle width: M/S balance (+0.5 to +1 dB sides)
- Frequency-specific: Multiband stereo
- Overall enhancement: Dedicated imager

**Step 4: Apply Conservatively**
- Start at 0 (neutral)
- Increase slowly (5-10% at a time)
- Listen for improvement vs artifacts
- Stop before it becomes obvious

**Step 5: Mono Check**
Every time you adjust stereo:
1. Sum to mono
2. Listen for problems
3. If problems appear, reduce processing
4. Re-check mono

**Step 6: A/B Test**
- Bypass all stereo processing
- Level-match if needed
- Compare: Better, or just different?
- If just different, reconsider

**Step 7: Multiple Playback Check**
- Speakers (your main monitors)
- Headphones
- Smaller speakers if available
- Phone speaker (mono-ish)

**The "Less is More" Principle:**
If you're unsure whether to add more width, don't. Subtle width enhancement that maintains mono compatibility is always better than impressive width that collapses in mono.`
      },
      {
        title: 'Common Stereo Problems and Solutions',
        content: `Troubleshooting stereo issues in mastering often reveals problems that originated in the mix.

**Problem: Mix Sounds Narrow**
Possible causes:
- Mix was actually mixed narrow
- Limited stereo elements in the mix
- Mono-heavy production choices

Solutions:
- Subtle M/S boost (sides +0.5 to +1 dB)
- Multiband width on high frequencies
- Accept that some mixes are meant to be narrow

What NOT to do:
- Extreme widening that causes mono collapse
- Haas effect on the entire mix

**Problem: Mix Sounds Too Wide**
Possible causes:
- Excessive stereo effects in mix
- Hard-panned elements without center anchor
- Over-widened synths or pads

Solutions:
- M/S cut (sides -0.5 to -1 dB)
- Boost mid channel slightly
- Multiband narrowing in problematic range

**Problem: Weak Mono Collapse**
Possible causes:
- Phase issues in the mix
- Stereo widening on bass
- Out-of-phase elements

Solutions:
- Mono bass frequencies (HPF on sides at 100-150 Hz)
- Reduce overall width
- If problem is in mix, request revision

**Problem: Hollow Center**
Possible causes:
- Over-boosted sides
- Scooped mids in the mix
- Phase cancellation in center

Solutions:
- Reduce side level
- Boost mid channel
- Mid-channel EQ presence boost

**Problem: Unbalanced Left/Right**
Possible causes:
- Mix issue (lopsided panning)
- Phase problems creating imbalance

Solutions:
- Check if it's in the source mix
- Use balance control sparingly (±0.5 dB max)
- Request mix revision if significant

**The Mastering Limitation:**
Many stereo problems originate in the mix and can't be fully fixed in mastering. If the mix has fundamental stereo issues, the best solution is often to request a revised mix rather than trying to fix it with mastering tools.`
      }
    ]
  },

  learningObjectives: [
    "Understand stereo width fundamentals: M/S processing, stereo imaging, and the Haas effect",
    "Apply multiband stereo processing: mono bass, narrow low-mids, wider highs for optimal width distribution",
    "Perform rigorous mono compatibility testing before and after stereo processing",
    "Use stereo enhancement conservatively: 5-15% overall, M/S adjustments of ±0.5 to ±1 dB",
    "Diagnose and address common stereo problems: narrow mixes, mono collapse, hollow center, unbalanced image"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to master stereo enhancement.",
    success: "Excellent! You can now enhance stereo width while maintaining professional mono compatibility.",
    error: "Review the stereo concepts and try again.",
    alreadyCompleted: "You've mastered Stereo Enhancement. Ready for Lesson 6!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
