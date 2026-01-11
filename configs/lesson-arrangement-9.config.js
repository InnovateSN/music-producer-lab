/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 9 - Layering Without Mud
 *
 * This lesson teaches how to layer multiple sounds without creating frequency
 * clashes, muddiness, or overcrowding. Master the art of sonic space.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-9-progress",
  lessonNumber: 9,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-10.html",
  prevLessonUrl: "lesson-arrangement-8.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Arrangement" }),
    title: "Layering Sounds:",
    titleHighlight: "Without Creating Mud",
    subtitle: "Learn to <strong>layer multiple instruments</strong> without frequency clashes. Master <strong>frequency spacing</strong>, <strong>stereo separation</strong>, and the golden rule: <strong>one element per frequency range</strong>."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a Layered Arrangement with Clear Frequency Separation",
    description: "Create an arrangement that layers multiple instruments while maintaining clarity. Each element should occupy its own <strong>frequency space</strong> and <strong>stereo position</strong>. The goal is fullness without muddiness.",
    tip: "The frequency spectrum is like a bookshelf: you can't fit two books in the same spot. Place bass in the lows, pads in the mids, leads in the highs. When elements overlap frequencies, separate them in stereo space (left/right) or time (rhythm).",
    steps: [
      { text: "<strong>Foundation layer</strong> - Place bass and kick in the low end (20-200Hz)" },
      { text: "<strong>Mid layer</strong> - Add pads or rhythm elements in mids (200Hz-2kHz)" },
      { text: "<strong>High layer</strong> - Add lead melody or hi-hats in highs (2kHz-8kHz)" },
      { text: "<strong>Air layer</strong> - Add presence or shimmer in ultra-highs (8kHz+)" },
      { text: "<strong>Check for conflicts</strong> - No more than 2 elements in the same frequency range" },
      { text: "<strong>Use stereo separation</strong> - Pan conflicting elements left/right" }
    ]
  },

  // ====================
  // FREQUENCY ZONES
  // ====================
  frequencyZones: [
    {
      name: "Sub Bass",
      range: "20-60Hz",
      icon: "🔊",
      color: "#e74c3c",
      allowedElements: 1,
      typical: ["808", "Sub bass", "Kick fundamental"],
      rule: "ONLY ONE element here—usually the kick or bass, never both at full power"
    },
    {
      name: "Bass",
      range: "60-250Hz",
      icon: "🎸",
      color: "#e67e22",
      allowedElements: 2,
      typical: ["Bass guitar", "Synth bass", "Kick body", "Tom drums"],
      rule: "Maximum 2 elements. If bass and kick both live here, use sidechain compression"
    },
    {
      name: "Low Mids",
      range: "250Hz-500Hz",
      icon: "🎹",
      color: "#f39c12",
      allowedElements: 2,
      typical: ["Guitar", "Piano", "Synth pads", "Snare body"],
      rule: "Watch for muddiness. This range makes or breaks your mix clarity"
    },
    {
      name: "Mids",
      range: "500Hz-2kHz",
      icon: "🎤",
      color: "#27ae60",
      allowedElements: 3,
      typical: ["Vocals", "Lead synth", "Guitar", "Snare", "Claps"],
      rule: "The most important range. Lead vocals/melody should dominate here"
    },
    {
      name: "High Mids",
      range: "2kHz-6kHz",
      icon: "✨",
      color: "#3498db",
      allowedElements: 2,
      typical: ["Vocal presence", "Synth leads", "Hi-hats", "Cymbals"],
      rule: "Adds clarity and definition. Too much = harshness"
    },
    {
      name: "Highs/Air",
      range: "6kHz-20kHz",
      icon: "💫",
      color: "#9b59b6",
      allowedElements: 2,
      typical: ["Cymbals", "Hi-hats", "Vocal air", "Synth shimmer"],
      rule: "Adds brightness and space. Use sparingly for that 'expensive' sound"
    }
  ],

  // ====================
  // LAYERING TECHNIQUES
  // ====================
  layeringTechniques: [
    {
      name: "Frequency Separation",
      description: "Place each layer in a different frequency range using EQ.",
      example: "Bass at 80Hz, pad at 500Hz, lead at 2kHz, hi-hats at 8kHz"
    },
    {
      name: "Stereo Separation",
      description: "If two elements share frequencies, pan one left and one right.",
      example: "Rhythm guitar left, piano right—both in mids but separated spatially"
    },
    {
      name: "Rhythmic Separation",
      description: "Layer elements that play at different times or have different rhythms.",
      example: "Bass on beats 1 and 3, synth stabs on 2 and 4"
    },
    {
      name: "Dynamic Separation",
      description: "Use volume automation so elements take turns being prominent.",
      example: "Lead melody loud during chorus, pad loud during verse"
    }
  ],

  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "layering",
    maxElementsPerFrequencyZone: {
      subBass: 1,
      bass: 2,
      lowMids: 2,
      mids: 3,
      highMids: 2,
      highs: 2
    },
    requireStereoSeparation: true,
    minFrequencyZonesUsed: 4
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Layer instruments across different frequency zones for a full, clear sound!",
    success: "🎚️ Excellent layering! Your arrangement is full but not muddy. This is professional frequency management.",
    error: "Check frequency conflicts—you may have too many elements in the same range.",
    alreadyCompleted: "You've mastered layering! Try creating even more complex layers while maintaining clarity."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showFrequencyAnalyzer: true,
    showStereoMeter: true
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "The Frequency Conflict Problem",
        content: `
**Why Layering Creates Mud:**
When you add more instruments to your arrangement, you're not just adding volume—you're adding frequency content. Every sound occupies space in the frequency spectrum (20Hz to 20kHz). When multiple sounds try to occupy the same frequency range at the same time, they compete for space, causing:

- **Muddiness**: Low-mid frequencies (200-500Hz) become congested, making your mix sound unclear
- **Harshness**: Too many elements in high-mids (2-6kHz) create ear fatigue
- **Loss of Definition**: Individual instruments become indistinguishable from each other
- **Masking**: Important elements (like vocals) get buried under less important ones

Beginner producers often think "more is better"—adding synth layer after synth layer, stacking sounds without considering frequency management. This creates the classic bedroom producer sound: a wall of sound where nothing stands out and everything sounds muddy.

**The Bookshelf Analogy:**
Think of the frequency spectrum like a bookshelf. You can fit many books on the shelf, but only if you organize them vertically (different shelves = different frequency ranges) and horizontally (different positions = different stereo placements). If you try to shove two books into the same spot, they won't fit—just like two instruments fighting for the same frequency space.

**The Professional Approach:**
Professional mixes sound clear, punchy, and full because every element has its own designated space. Bass elements sit in the lows (60-250Hz), pads and guitars in the mids (250Hz-2kHz), leads and vocals in the high-mids (2-6kHz), and air/shimmer in the highs (6kHz+). When elements do overlap, they're separated by stereo position (left vs right) or time (playing at different rhythmic moments).

**The One Element Rule:**
In each critical frequency zone, you should have ONE primary element that dominates. You can have secondary elements supporting, but they should be quieter or EQ'd to reduce conflict. For example:
- **Sub bass (20-60Hz)**: Kick drum OR 808 bass, never both at full power
- **Bass (60-250Hz)**: Bass guitar dominates, kick drum provides punch
- **Mids (500Hz-2kHz)**: Vocals dominate, guitars/pads support
- **High mids (2-6kHz)**: Lead melody or vocal presence
        `
      },
      {
        title: "The Six Frequency Zones",
        content: `
**1. Sub Bass (20-60Hz) - The Foundation:**
This is the lowest range humans can hear—felt more than heard. Only one element should dominate here:
- **Common occupants**: Kick drum fundamental, 808 bass, sub synth bass
- **Maximum elements**: 1 primary element
- **Common mistake**: Kick AND bass both at full power here creates woofer-flapping mud
- **Solution**: If both kick and bass need sub energy, use sidechain compression so the kick pushes the bass out of the way momentarily

**Real-world application**: In EDM and hip-hop, the kick and bass take turns. In the split-second when the kick hits, the bass ducks (via sidechain), creating that pumping effect. This gives both elements their moment in the sub bass zone.

**2. Bass (60-250Hz) - The Body:**
This is where bass instruments live and where kick drums have their "body" or "punch." This range provides warmth and power:
- **Common occupants**: Bass guitar, synth bass, kick drum body, tom drums
- **Maximum elements**: 2 elements (but one should dominate)
- **Common mistake**: Bass guitar + synth bass + kick all fighting here = muddy low end
- **Solution**: EQ one bass element to focus on sub (60-80Hz), the other on mid-bass (100-200Hz). Sidechain the bass to the kick.

**Real-world application**: In professional mixes, you'll notice bass guitars often have a notch cut at 80Hz to leave room for the kick's fundamental. The bass focuses on 100-200Hz for note definition.

**3. Low Mids (250-500Hz) - The Mud Zone:**
This is the most problematic frequency range in mixing. Too much here = muddy, boxy sound. Too little = thin, weak mix:
- **Common occupants**: Electric guitars, acoustic guitars, piano, synth pads, snare drum body
- **Maximum elements**: 2 elements
- **Common mistake**: Layering guitars + piano + pads without EQ cuts here
- **Solution**: Be aggressive with cutting this range on non-essential elements. Ask: "Does this pad NEED 300Hz energy, or can I cut it and preserve clarity?"

**Real-world application**: Professional engineers often apply a broad cut (2-4dB) around 300-400Hz on many tracks. It feels like you're making things thinner, but in context, the mix sounds clearer and more spacious.

**4. Mids (500Hz-2kHz) - The Presence Zone:**
This is the most important range for human hearing. Our ears are most sensitive here. This is where vocals, leads, and snares live:
- **Common occupants**: Vocals, lead synth, electric guitar, snare drum crack, claps
- **Maximum elements**: 3 elements (but vocals/lead should dominate)
- **Common mistake**: Lead synth and vocals both loud in this range = competing, unclear mix
- **Solution**: If you have both vocals and lead synth, make a choice: one dominates, the other supports. Often vocals dominate verses/choruses, lead synth dominates intros/outros.

**Real-world application**: In pop production, everything is EQ'd to make room for the vocal around 1-2kHz. That's the "clarity" and "presence" zone for vocals.

**5. High Mids (2-6kHz) - The Clarity Zone:**
This range adds definition, articulation, and "presence" to sounds. Too much = harsh, fatiguing. Too little = dull, distant:
- **Common occupants**: Vocal consonants, hi-hats, cymbals, synth leads, guitar presence
- **Maximum elements**: 2 elements
- **Common mistake**: Boosting this range on every element to make them "pop" = harsh, painful mix
- **Solution**: Use this range sparingly. Boost it on your most important element (vocal or lead), leave it neutral or cut on everything else.

**Real-world application**: The difference between a "bedroom mix" and a "radio-ready mix" is often restraint in this zone. Professionals know when NOT to boost here.

**6. Highs/Air (6-20kHz) - The Sparkle Zone:**
This is where "air," "shimmer," and "brightness" come from. This range makes mixes sound expensive and polished:
- **Common occupants**: Cymbals, hi-hats, vocal air, synth shimmer, reverb tails
- **Maximum elements**: 2 elements
- **Common mistake**: Not using this range at all (sounds dull), or boosting it on everything (sounds harsh)
- **Solution**: Add subtle 10-12kHz shelf boosts to your lead vocal, main synth, or masterbus for that "radio sheen"

**Real-world application**: That expensive sound you hear on major-label releases? A lot of it comes from careful, subtle use of 8-15kHz boosts on key elements plus reverb/delay tails that live in this zone.
        `
      },
      {
        title: "Layering Techniques for Clarity",
        content: `
**Technique 1: Frequency Separation (The Most Important)**
This is the foundation of professional layering. Use EQ to place each layer in a different frequency home:

**Practical example - Layered Synth:**
- Layer 1 (Bass synth): Focus 60-150Hz, cut everything above 200Hz
- Layer 2 (Mid pad): Focus 300-1kHz, cut below 200Hz and above 2kHz
- Layer 3 (Lead): Focus 1-4kHz, cut below 500Hz
- Layer 4 (Air layer): Focus 8kHz+, high-pass at 6kHz

**Result**: All four layers play together, creating a massive, full sound—but they're not fighting because each occupies its own frequency zone.

**How to apply in your DAW:**
- Load an EQ plugin on each layer
- Use a spectrum analyzer to see where each sound naturally lives
- Apply high-pass (cut lows) and low-pass (cut highs) filters to define each layer's zone
- Leave a 50-100Hz gap between layers (e.g., bass ends at 200Hz, mids start at 300Hz)

**Technique 2: Stereo Separation**
When two elements MUST share the same frequency range, separate them in stereo space:

**Practical example - Guitars + Piano:**
Both guitars and piano naturally occupy 200Hz-2kHz. Solution:
- Rhythm guitar: Pan 60% left
- Piano: Pan 60% right
- Both can coexist in the mid frequencies without masking each other

**Stereo layering rules:**
- Low frequencies (below 150Hz) should stay centered—bass wanders left/right sounds weird on club systems
- Mid-range elements can be panned 30-80% left/right
- High-frequency elements (hi-hats, shakers) can be panned 100% left/right for width

**Advanced tip**: Use different stereo widths for different frequency ranges on the same element. Bass frequencies centered, high frequencies wide.

**Technique 3: Rhythmic Separation**
Layer elements that play at different times or with different rhythms:

**Practical example - Bass and Synth Stabs:**
- Bass plays whole notes on beats 1 and 3
- Synth stabs play short hits on beats 2 and 4
- Both occupy 100-300Hz, but they never play simultaneously, so no conflict

**Advanced application**: In hip-hop and trap, producers often have the kick hit on 1 and 3, the 808 bass slides on the off-beats. They share the sub-bass zone but don't clash because they're rhythmically separated.

**Technique 4: Dynamic Separation (Automation)**
Use volume automation so elements take turns being prominent:

**Practical example - Verse vs Chorus:**
- Verse: Pad loud (-12dB), lead synth quiet (-20dB)
- Chorus: Pad quiet (-20dB), lead synth loud (-10dB)

Both elements exist throughout the song, but your automation makes one the focus while the other supports.

**Common Mistakes and Solutions:**

**Mistake 1: "More layers = bigger sound"**
Reality: More layers = more clutter. Professional tracks often have fewer layers than amateur ones, but each layer is perfectly placed in frequency and stereo space.
**Solution**: Start with 3-4 well-placed layers. Only add more if there's a clear gap in the frequency spectrum.

**Mistake 2: "Copy-paste EQ settings"**
Using the same EQ preset on every track seems efficient but causes conflicts.
**Solution**: EQ in context. Solo the element with the drums/bass, then EQ it to fit in the available frequency gaps.

**Mistake 3: "Everything wide in stereo"**
Making every element super-wide sounds cool in headphones but falls apart on club systems and phones.
**Solution**: Keep low frequencies mono, mids slightly wide, highs very wide. This ensures mono compatibility.

**Mistake 4: "Layering similar sounds"**
Stacking three saw-wave synths with similar frequency content just makes one louder, muddier saw wave.
**Solution**: Layer complementary sounds—one bass-heavy, one mid-heavy, one bright. They combine into a super-sound.

**Pro Workflow:**
1. Start with your most important element (vocal or lead melody)
2. Build the foundation around it (bass, drums)
3. Add supporting layers one at a time
4. After adding each layer, ask: "Did this make the mix CLEARER or MUDDIER?"
5. If muddier, use EQ to carve out frequency space
6. Use reference tracks—A/B your mix against professional releases

**The ultimate test**: If you can't clearly identify each individual instrument in your mix, you have frequency conflicts. Professional mixes sound full AND clear—every element is audible and distinct.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the six frequency zones and their purposes",
    "Apply the rule: one primary element per frequency range",
    "Use stereo separation to prevent frequency clashing",
    "Layer instruments for fullness without muddiness",
    "Identify and resolve frequency conflicts in arrangements"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
