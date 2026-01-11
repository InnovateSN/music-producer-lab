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
        title: "The Six Frequency Zones Explained in Detail",
        content: `
Understanding frequency zones is like understanding neighborhoods in a city. Each zone has its own character, residents, and rules. Let's explore each zone in professional detail.

**1. Sub Bass (20-60Hz) - The Foundation You Feel:**

**What Lives Here:**
This is the lowest range humans can perceive—more felt than heard. It's the rumble in your chest at a concert, the vibration in the car when bass hits. Only one element should dominate this zone because it's narrow and powerful. Common residents:
- Kick drum fundamental frequency (the "thump" you feel)
- 808 bass in hip-hop and trap
- Sub bass synths in EDM and dubstep
- Lowest bass guitar notes (if playing very low)

**Why It's Critical:**
This range provides weight and physical impact. Without it, your track feels weightless and small. Too much, and it becomes boomy, woofy, and uncontrollable—especially on club systems and headphones. Phone speakers can't even reproduce this range, which is why phone mixes sound thin.

**The One Element Rule:**
NEVER have two elements at full power in this zone simultaneously. Why? The wavelengths are so long (20Hz = 56 feet long) that multiple sources create phase cancellation, where waves cancel each other out, resulting in LESS bass, not more. It's physics.

**Common Mistake - The Kick/Bass Conflict:**
Beginner producers layer a kick with a fundamental at 50Hz and an 808 bass also at 50Hz, both at full volume. Result? Muddy, woofy, undefined low end. The kick and bass fight for the same space, and both lose clarity.

**Professional Solution - Sidechain Compression:**
Route the kick to a compressor on the bass track. When the kick hits, the compressor automatically ducks (lowers) the bass for 50-200ms. This gives the kick its moment of impact, then the bass swells back. This is the "pumping" effect you hear in EDM—it's not just a creative choice, it's a frequency management necessity.

**DAW Application:**
- Load a spectrum analyzer on your master bus
- Play your kick and bass together
- Look at 20-60Hz—do you see two competing peaks? That's your problem
- Apply sidechain compression: set attack 5-10ms, release 100-200ms, ratio 4:1, threshold until you see 3-6dB of gain reduction on each kick hit
- Alternative: Use EQ to separate them—kick focused at 60Hz, bass at 45Hz

**Pro Tip:**
In professional mixes, the sub bass is almost always mono (centered). Low frequencies don't localize well in human hearing, and stereo bass causes phase problems on mono playback systems (clubs, phones, smart speakers). Keep everything below 120Hz mono.


**2. Bass (60-250Hz) - The Body and Warmth:**

**What Lives Here:**
This is the "meat" of your low end—where bass instruments have their character and kicks have their punch. This zone provides warmth, weight, and groove:
- Bass guitar fundamental notes (most notes live here)
- Synth bass body and character
- Kick drum "punch" or "body" (the part you hear, not just feel)
- Tom drums
- Low male vocals (occasional presence)
- Cello and low strings

**Why It's Critical:**
60-250Hz is where the note definition of bass instruments happens. A bass note at 100Hz is the note you actually hear and identify. Too much energy here makes your mix boomy and overwhelming. Too little makes it thin and weak. This zone also provides warmth—that cozy, full feeling in tracks.

**Maximum Two Elements:**
You can have two elements here, but one must be primary. Typically: kick provides short transient punches, bass provides sustained notes. They work together by occupying different rhythmic spaces or different parts of the 60-250Hz range.

**Common Mistake - Stacking Bass Sounds:**
Layering three bass synths all playing the same notes in the same octave, all occupying 80-150Hz. Result? One very loud, undefined bass sound. More layers ≠ bigger bass. Proper frequency separation = bigger bass.

**Professional Solution - Frequency Division:**
- Bass layer 1 (sub): Focus 50-80Hz, cut everything above 100Hz (provides weight)
- Bass layer 2 (body): Focus 100-200Hz, cut below 80Hz and above 300Hz (provides note definition)
- Bass layer 3 (grit): Focus 300Hz-1kHz, cut below 200Hz (provides character and presence)

Now you have three layers, but they're not fighting—they're complementing. Together they create a massive, defined bass sound.

**Sidechain the Bass to the Kick:**
Even if your kick focuses on 60Hz and your bass on 150Hz, they still overlap enough to need sidechain. The kick should always win in the low end. Set sidechain compression with a fast attack (5-10ms) so the kick punches through, and medium release (100-150ms) so the bass comes back smoothly.

**DAW Application:**
- Use a parametric EQ with a wide bell curve
- Find the fundamental note of your bass (usually 80-120Hz depending on the key)
- Boost 2-3dB to emphasize that note
- Find the kick's body (usually 60-80Hz)
- On the bass track, cut 2-3dB at the kick's frequency to make room
- Result: Kick and bass coexist peacefully, each with their own space

**Pro Tip - The 80Hz Rule:**
Many professional engineers use a technique: high-pass everything except kick and bass at 80-100Hz. Guitars, pads, vocals, drums (except kick/toms)—everything gets a high-pass filter. This clears out low-end rumble and makes room for the elements that truly need that space.


**3. Low Mids (250-500Hz) - The Mud Zone (Handle With Care):**

**What Lives Here:**
This is the most challenging frequency range in all of mixing. It's where muddiness lives, where boxiness hides, and where amateur mixes fall apart. Yet, it's also where warmth and body come from for many instruments:
- Acoustic and electric guitars (body resonance)
- Piano (lower notes and resonance)
- Synth pads (warmth)
- Snare drum body (the "thud" before the crack)
- Male vocals (chest resonance)
- Strings and orchestral instruments

**Why It's Problematic:**
The human ear is less sensitive to 250-500Hz than to mids (1-2kHz), so our brains don't clearly separate sounds in this range. Everything blurs together. Add too much? Muddy, boxy, muffled mix. Cut too much? Thin, weak, lifeless mix. It's a balancing act.

**The Professional Approach - Surgical EQ:**
Maximum two elements should have significant energy here, and even those should be EQ'd thoughtfully. This is where you make or break your mix clarity.

**Common Mistake - Layering Without Cutting:**
Stacking rhythm guitar + piano + synth pad + bass all with full energy at 300Hz. Result? A thick, congested, muddy soup where no individual element is distinguishable. Listeners feel fatigued because their ears are working hard to separate sounds that aren't properly separated.

**Professional Solution - Aggressive Cutting:**
Identify your most important element in this range (often a guitar or pad), let that one have 250-500Hz energy. Everything else? Cut aggressively:
- Piano: Cut 3-4dB at 300Hz with a medium-width bell
- Synth pad: High-pass at 300Hz or cut 3-5dB at 250-400Hz
- Bass: Low-pass around 250Hz so it doesn't creep into low-mids
- Vocals: Slight cut (2dB) at 300Hz to reduce muddiness

**The "Subtractive EQ" Mindset:**
Professional mixers think: "What can I remove?" rather than "What can I add?" In the low-mids, removal is key. Every element you high-pass or cut in this range makes your mix clearer. It feels counterintuitive—you're "thinning" elements—but in context, the mix sounds bigger and more spacious.

**DAW Application:**
- Solo your drum bus with each element one at a time
- Listen for boxiness or muddiness—that's 250-500Hz
- Sweep a narrow EQ boost through 250-500Hz to find the exact problem frequency
- Once found, cut 3-5dB at that frequency
- Bypass the EQ to A/B—you'll hear the element sounds "thinner" solo'd, but clearer in the mix

**Pro Tip - The 300Hz Cut:**
Many professional mixers have a template EQ that applies a broad 2-3dB cut around 300Hz on nearly every track except kick and bass. Try this: make a template EQ with -3dB at 300Hz (Q of 1.5), apply it to guitars, pads, vocals, and listen. Your mixes will immediately sound clearer.


**4. Mids (500Hz-2kHz) - The Presence Zone (Most Important):**

**What Lives Here:**
This is the most important frequency range in all of music production. Why? Human ears evolved to be most sensitive to 1-3kHz because that's where human speech clarity lives (we needed to hear predators and communicate). Everything in this range is LOUD to our perception:
- Vocals (fundamental frequencies and clarity)
- Lead synth melodies
- Electric guitar (presence and character)
- Snare drum crack (the "snap")
- Acoustic guitar (body and presence)
- Piano (melody notes)
- Claps and snaps

**Why It's Critical:**
This range determines what your mix is "about." The listener's attention is drawn to whatever dominates 500Hz-2kHz. If your vocal is buried here, it will sound quiet even if it's loud in volume. If your lead synth shouts here, it will dominate even at lower volume. Master this zone, and you master listener attention.

**The Three Element Rule:**
You can have up to three elements with energy in this range, BUT one must be the clear dominant element. Usually: vocals or lead melody dominate, supporting elements (guitars, pads) support quietly.

**Common Mistake - Everything Competing for Attention:**
Lead vocal + lead synth + rhythm guitar + snare all fighting for 1kHz. Result? No element stands out, everything feels flat and undefined. The listener doesn't know where to focus attention, so they tune out.

**Professional Solution - Hierarchy and Ducking:**
Decide what matters most in each section. Verse? Vocal dominates. Let the vocal have 1-2kHz energy at -6dB. Everything else? Cut 2-3dB at the vocal's presence frequency. Instrumental section? Now the lead synth gets the 1-2kHz spotlight.

**The Vocal Tunnel Technique:**
- Identify the vocal's presence peak (usually 1-2kHz)
- On every other track (guitars, pads, synths), cut 3-4dB at that exact frequency with a bell EQ
- This creates a "tunnel" of frequency space where only the vocal lives
- Result: Vocal sits perfectly in the mix without needing to be loud

**DAW Application:**
- Solo your vocal and use a spectrum analyzer
- Play the chorus—where is the vocal's energy peak? (Usually 1-1.5kHz for male, 2-3kHz for female)
- Mark that frequency
- On every other midrange instrument, apply a 3dB cut at that frequency (Q of 2-3)
- Unsolo everything—the vocal now cuts through clearly

**Pro Tip - Less Is More:**
Beginners boost 1-2kHz on everything to make it "present." Professionals cut 1-2kHz on everything except the lead element. The result? The lead element sounds way more present, and the mix is less fatiguing. Presence is relative, not absolute.


**5. High Mids (2-6kHz) - The Clarity and Definition Zone:**

**What Lives Here:**
This range adds definition, articulation, and clarity. It's where consonants in vocals live (S, T, K sounds), where guitar pick attack lives, where hi-hats and cymbals start:
- Vocal consonants and intelligibility
- Snare drum crack and snap
- Hi-hats (lower presence)
- Cymbals (attack and initial presence)
- Synth leads (brightness and cut)
- Guitar (pick attack and string definition)

**Why It's Critical:**
2-6kHz is the "intelligibility" zone. Boost here, and elements become clear and defined. Cut here, and elements become dull and distant. But here's the catch: too much energy in this range is physically fatiguing. Our ears are very sensitive to 3-4kHz, and prolonged exposure causes listener fatigue.

**Maximum Two Elements:**
Only two elements should have significant energy here, and even then, use restraint. This is the zone where "less is more" applies most.

**Common Mistake - Boosting Everything for Clarity:**
Boosting 3-4kHz on vocals, lead synth, snare, hi-hats, and guitars to make them all "pop." Result? Harsh, abrasive, fatiguing mix. After 30 seconds, listeners feel ear strain. After 2 minutes, they skip your track.

**Professional Solution - Strategic Boosting:**
Choose ONE element to boost in this range—usually the vocal or lead melody. Everything else? Leave neutral or cut slightly. The element you boost will sound incredibly clear and defined because it's the only thing occupying that space.

**The De-Esser Technique:**
Vocals often have too much 5-8kHz energy on sibilant sounds (S, T, SH). Instead of cutting the entire range (makes vocals dull), use a de-esser—a compressor that only activates on 5-8kHz when it gets too loud. This tames harshness while preserving clarity.

**DAW Application:**
- Identify your lead element (vocal or lead synth)
- Use a high-shelf or bell boost of 2-3dB at 3-4kHz (start conservatively)
- A/B the boost—does it add clarity or harshness?
- If harsh, lower to 1-2dB or move the frequency up to 5-6kHz
- On all other elements, apply a 1-2dB cut at 3-4kHz to prevent buildup

**Pro Tip - The Bedroom Mix vs Radio Mix:**
Bedroom producers boost 3-4kHz on everything, thinking it adds clarity. Radio-ready mixes have strategic presence—one or two elements "pop," everything else supports. Listen to a professional pop mix: the vocal is bright and clear, but the guitars, pads, and bass are deliberately dulled in this range to support the vocal.


**6. Highs/Air (6-20kHz) - The Sparkle and Polish Zone:**

**What Lives Here:**
This is where the "expensive" sound comes from—the air, shimmer, sparkle, and openness that separates professional from amateur mixes:
- Cymbals and hi-hats (full brightness)
- Vocal "air" and breath sounds
- Synth shimmer and high-frequency harmonics
- Acoustic guitar string brightness
- Reverb tails and spatial effects
- Shakers and tambourines

**Why It's Critical:**
The highs (especially 10-15kHz) make mixes sound polished, open, and expensive. Without this range, mixes sound dark, dull, and closed-in. But here's the paradox: many playback systems (phones, laptops, cheap earbuds) don't accurately reproduce above 12kHz. You're adding detail most listeners won't fully hear—but they'll feel the difference.

**Maximum Two Elements:**
Only one or two elements should have significant air/shimmer. Too much, and your mix becomes hissy and harsh.

**Common Mistake - Not Using This Range:**
Many bedroom producers mix on cheap speakers or headphones that don't reproduce 10-15kHz well. Result? They don't add air to their mix, and it sounds dull and amateurish compared to professional releases. Or the opposite: they over-boost, and the mix sounds hissy and harsh.

**Professional Solution - The Radio Sheen:**
Apply a gentle high-shelf boost (1-2dB at 10-12kHz) on your master bus or key elements (vocal, lead synth). This adds a subtle "sheen" without making it obvious. The mix sounds brighter, more polished, more "produced."

**The Air EQ Technique:**
- On your lead vocal, add a high-shelf boost starting at 10kHz, +2dB
- On your master bus, add a high-shelf boost starting at 12kHz, +1dB
- Listen on multiple systems—does it sound brighter without being harsh?
- If it sounds hissy, lower the boost to +0.5-1dB

**DAW Application:**
- Use a spectrum analyzer on a professional reference track in your genre
- Look at 8-15kHz—how much energy is there?
- Compare to your mix—is yours darker or brighter?
- Adjust your high-shelf EQ to match the reference track's general brightness

**Pro Tip - Saturation for Air:**
Instead of EQ boosting highs, use subtle saturation/harmonic exciter plugins. These generate high-frequency harmonics naturally, adding air without the harshness of EQ boosts. Professionals use Soundtoys Decapitator, FabFilter Saturn, or Slate Virtual Mix Rack for this.

**The Phone Speaker Test:**
Phone speakers can't reproduce below 200Hz or above 12kHz. Mix on your studio monitors, then check on your phone. If your mix sounds empty on your phone, you've relied too much on sub-bass and ultra-highs. Professional mixes sound good even on phone speakers because the core energy is in 200Hz-6kHz.
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
