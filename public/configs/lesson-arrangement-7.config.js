/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 7 - Hip-Hop & Urban Structures
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-7-progress",
  lessonNumber: 7,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: "lesson-arrangement-8.html",
  prevLessonUrl: "lesson-arrangement-6.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Arrangement" }),
    title: "Hip-Hop & Urban",
    titleHighlight: "Structures",
    subtitle: "Arrange <strong>hip-hop tracks</strong> with <strong>verses, hooks, and 808s</strong>. Master <strong>beat switches</strong> and <strong>interludes</strong>."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a Hip-Hop Track Structure",
    description: "Create a hip-hop arrangement using the <strong>Verse-Hook</strong> structure. Hip-hop differs from pop/EDM—verses are the star, hooks are short and punchy, and the beat creates the vibe. Learn to leave space for vocals while maintaining energy.",
    tip: "Verses should be stripped back (2-3 elements) to leave room for rap vocals. Hooks should be fuller (4-5 elements) for impact. Keep it at 16-bar verses and 8-bar hooks for classic hip-hop structure.",
    steps: [
      { text: "<strong>Start with an Intro</strong> (4-8 bars) - Establish the vibe quickly" },
      { text: "<strong>Add Verse 1</strong> (16 bars) - Minimal arrangement, vocals are the focus" },
      { text: "<strong>Add the Hook</strong> (8 bars) - Fuller sound, memorable melody" },
      { text: "<strong>Add Verse 2</strong> (16 bars) - Similar to Verse 1 with slight variation" },
      { text: "<strong>Repeat the Hook</strong> (8 bars) - Keep it consistent for catchiness" },
      { text: "<strong>Optional: Add a Bridge</strong> (8 bars) - Beat switch or breakdown" },
      { text: "<strong>Final Hook and Outro</strong> - End strong or fade on the hook" }
    ]
  },

  // ====================
  // SECTION DEFINITIONS
  // ====================
  sections: [
    { id: "intro", name: "Intro", bars: "4-8", energy: 40 },
    { id: "verse", name: "Verse", bars: "16", energy: 60 },
    { id: "hook", name: "Hook", bars: "8", energy: 85 },
    { id: "bridge", name: "Bridge", bars: "8", energy: 50 }
  ],
  
  messages: applyMessagePreset("arrangement", {
    initial: "Build a hip-hop arrangement with verse-hook structure!",
    success: "🎤 Fire arrangement! The verse-hook flow is perfect.",
    error: "Make sure verses have room for vocals and hooks are fuller."
  }),

  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    type: "structure_arrangement",
    minBars: 64,
    maxBars: 120,
    requiredSections: ["verse", "hook"],
    minVerses: 2,
    minHooks: 2,
    requireSpaceForVocals: true
  },

  mode: { type: "structure-builder", showTimeline: true },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Hip-Hop Arrangement Fundamentals",
        content: `
**Why Hip-Hop Structures Are Unique:**
Hip-hop arrangements prioritize the MC (rapper/vocalist) above everything else. Unlike pop where vocals and instrumentals share the spotlight, hip-hop beats exist to support the verses. The golden rule: leave space for vocals. Overstuffed arrangements bury the lyrics—and in hip-hop, lyrics are often the main attraction.

**The Verse-Hook Paradigm:**
Hip-hop doesn't use "chorus" in the traditional pop sense. Instead, it uses "hooks"—short, catchy, often sung sections that anchor the track between verses. Hooks are 4-8 bars (not 16 like pop choruses), punchy, and memorable. They provide breathing space between dense lyrical verses.

**The 808 Foundation:**
Hip-hop production is built on powerful low-end. The iconic Roland TR-808 drum machine defined the genre's signature bass sound—deep, resonant, pitch-able sub-bass that forms the harmonic and rhythmic foundation. Modern hip-hop producers use 808 samples or emulations to create this essential element.

**Beat Switches and Variation:**
Modern hip-hop (especially trap and drill) features "beat switches"—sudden changes in tempo, rhythm, or entire instrumental sections mid-track. This keeps listeners engaged and showcases production versatility. Think Travis Scott or Drake—their tracks often have 2-3 distinct beat sections within one song.

**The Minimal Arrangement Philosophy:**
Less is more in hip-hop. Professional beats often use 3-5 elements total: drums, 808 bass, melody (loop or sample), and maybe one atmospheric element. This minimalism serves the vocals—when the MC is rapping, the beat strips back. When there's a hook or break, the beat can get fuller.

**Real-World Examples:**
- "HUMBLE." by Kendrick Lamar: Minimal beat, massive 808, space for aggressive verses
- "Sicko Mode" by Travis Scott: Multiple beat switches creating distinct sections
- "God's Plan" by Drake: Simple verse-hook structure with emphasis on vocals
- "A Milli" by Lil Wayne: Relentless beat loop, verses carry the entire track
        `
      },
      {
        title: "Essential Hip-Hop Sections Explained",
        content: `
**Intro (4-8 bars):**
Purpose: Set the vibe and establish the beat before vocals enter

Characteristics:
- 4-8 bars of instrumental beat
- Showcases the main loop/sample
- Often features producer tag ("Murda on the beat so it's not nice!")
- Sets tempo and energy

*Best Practices:*
- Keep it short (4-8 bars max)—listeners want to hear the MC ASAP
- Establish the core beat loop instantly
- Feature the signature sound (sample, melody, or bass line)

*Common Mistake:* Long intros (16+ bars). Hip-hop audiences have short attention spans—get to the vocals fast.

**Verse (16-24 bars):**
Purpose: Deliver the main lyrical content and storytelling

Characteristics:
- Longest section (16-24 bars typically)
- Beat is often stripped back (minimal elements for vocal clarity)
- Lyrics are dense, rapid-fire, or conversational
- Energy comes from the MC's delivery, not the production

*Structure Within Verses:*
- 16-bar verses: 4x 4-bar phrases (most common)
- 24-bar verses: 3x 8-bar phrases (less common, used for extended storytelling)
- Each 4-bar phrase typically has a punch line or key line at the end

*Production for Verses:*
- Keep it minimal: drums + bass + maybe one melody element
- Remove or reduce hi-hats to prevent frequency masking of vocals
- Subtle variations every 8 bars (add a snare roll, change hi-hat pattern)
- The beat should loop consistently—verses aren't the place for complex production changes

*Common Mistake:* Overproducing verses. Too many elements compete with vocals and make the mix muddy.

**Hook/Chorus (4-8 bars):**
Purpose: Provide the memorable, catchy anchor between verses

Characteristics:
- Short and punchy (4-8 bars, not 16 like pop)
- Often sung rather than rapped (even in rap songs)
- More melodic than verses
- Fuller production (add elements that were removed for verses)
- Repeated 2-3 times throughout the track

*Types of Hooks:*
1. **Sung Hook**: Melodic, often auto-tuned (Post Malone, Drake style)
2. **Chanted Hook**: Repeated phrase, rhythmic (Migos, "Versace, Versace")
3. **Sampled Hook**: Vocal sample looped (Kanye West, "Stronger")
4. **Ad-Lib Hook**: Short repeated ad-libs over the beat ("yeah," "uh")

*Production for Hooks:*
- Add elements: strings, extra percussion, synth layers
- Increase energy slightly
- Make the 808 more present
- Add reverb or space effects for size

*Common Mistake:* Hooks that are too long (16 bars). Hip-hop hooks should be concise—get in, deliver the hook, get out.

**Interlude/Bridge (4-8 bars optional):**
Purpose: Provide variation and breathing room between repeated verse-hook cycles

Characteristics:
- Breaks up the pattern (appears after verse 2 typically)
- Can feature a beat switch, tempo change, or entirely different instrumental
- Might include spoken word, dialogue samples, or atmospheric sounds
- Resets listener attention before final verse/hook

*When to Use:*
- Tracks longer than 3 minutes benefit from interludes
- When you want to showcase production versatility
- To separate distinct sections in longer narrative tracks

**Beat Switch (Optional but Powerful):**
Purpose: Create dramatic contrast and showcase multiple production ideas in one track

Characteristics:
- Completely different beat, tempo, or vibe mid-track
- Often occurs after verse 2 or during the bridge
- Creates a "two songs in one" effect
- Popular in modern trap and experimental hip-hop

*Examples:*
- "Sicko Mode" by Travis Scott: 3 distinct beat sections
- "DNA." by Kendrick Lamar: Beat switch at 1:50 completely changes vibe
- "The Box" by Roddy Ricch: Beat switch after first chorus

*How to Execute:*
- Use a short transitional element (riser, drum roll, vocal sample)
- Or use abrupt cut (dramatic effect)
- New beat should contrast in tempo, rhythm, or mood

**Outro (4-8 bars):**
Purpose: Bring the track to a close

Characteristics:
- Returns to intro elements or fades out
- Often features repeated hook or ad-libs
- Gradually removes elements
- Can end abruptly (popular in modern hip-hop)

*Best Practices:*
- Mirror the intro for symmetry
- Fade outs work but abrupt endings are more common now
- Keep it brief (4-8 bars)
        `
      },
      {
        title: "Building Hip-Hop Arrangements in Your DAW",
        content: `
**The Classic Hip-Hop Structure:**

**Bars 1-8: Intro**
- Elements: Drums + 808 + melody loop
- Energy: 60%

**Bars 9-24: Verse 1 (16 bars)**
- Elements: Drums + 808 (strip melody or reduce significantly)
- Energy: 70% (energy comes from vocal delivery)

**Bars 25-32: Hook 1 (8 bars)**
- Elements: Drums + 808 + full melody + extra layers
- Energy: 85%

**Bars 33-48: Verse 2 (16 bars)**
- Elements: Same as Verse 1 (minimal for vocals)
- Energy: 75% (slightly higher than Verse 1)

**Bars 49-56: Hook 2 (8 bars)**
- Elements: Same as Hook 1 (consistency is key)
- Energy: 90%

**Bars 57-64: Bridge/Interlude (8 bars)**
- Elements: Beat switch OR stripped-down section
- Energy: 50-80% (varies by approach)

**Bars 65-80: Verse 3 (16 bars)**
- Elements: Minimal beat + variations from previous verses
- Energy: 80%

**Bars 81-88: Hook 3 (8 bars)**
- Elements: Full production + possible add-ons for finale
- Energy: 95%

**Bars 89-96: Outro (8 bars)**
- Elements: Repeat hook or return to intro beat
- Energy: Fade to 30%

**Total: 96 bars = ~2:40 at 140 BPM (typical trap tempo)**

**DAW Production Workflow:**

**Step 1: Create the Core Beat Loop**
Before arranging, build your 4-8 bar beat loop:
- Kick: Punchy, not too long (hip-hop kicks are short and tight)
- Snare: On beats 2 and 4 (classic placement)
- Hi-hats: 1/16 note patterns with velocity variation (trap style) or simpler 1/8 patterns
- 808 Bass: Root note bass line following your melody/sample

**Step 2: Build the Melody/Sample Layer**
Hip-hop melodies are typically:
- Looped samples (chopped and rearranged)
- Simple piano or synth melodies (2-4 note patterns)
- Vocal chops or stabs
- String or pad atmospheres

*Keep it simple*—complex melodies compete with vocals

**Step 3: Arrangement Strategy (Additive/Subtractive)**

**Verses = Subtractive:**
- Remove melody layers or reduce their volume by -6 to -12dB
- Remove or simplify hi-hats
- Keep kick + snare + 808 bass as foundation
- Goal: maximum clarity for vocals

**Hooks = Additive:**
- Bring melody layers to full volume
- Add extra percussion (shakers, claps, snaps)
- Increase 808 presence
- Add atmospheric elements (strings, pads, risers)
- Goal: create fullness and impact

**Step 4: The 808 Treatment**
808 bass is the most important element in hip-hop:
- **Pitch it**: 808s should follow your melody's root notes
- **Side-chain it**: Duck the 808 slightly when the kick hits (prevents muddy low-end)
- **Tune it**: A-440Hz standard tuning ensures 808 notes are in key
- **Length matters**: Short 808s (staccato) for trap, longer 808s (sustained) for boom-bap

Common 808 patterns:
- Root note on beat 1, octave jump on beat 3
- Sliding bass (pitch bend between notes)
- Rhythmic patterns matching kick (synchronized low-end)

**Step 5: Add Variation Every 8 Bars**
Hip-hop beats loop, but not identically:
- Bars 1-8: Core loop
- Bars 9-16: Add snare variation or hi-hat roll
- Bars 17-24: Change hi-hat pattern
- Bars 25-32: Add percussion element

Subtle changes prevent monotony while maintaining the core groove

**Step 6: Implement a Beat Switch (Advanced)**
If using a beat switch:
1. Mark the switch point (usually bar 49-64)
2. Create a completely different 8-bar loop (different tempo, different samples, different vibe)
3. Add transition element:
   - Quick riser or drum roll (1-2 bars before switch)
   - Or use abrupt cut (modern approach)
4. Return to original beat or continue with new beat for remainder

**Common Hip-Hop Arrangement Variations:**

**Trap Structure (Modern):**
- Shorter verses (12 bars instead of 16)
- Multiple hooks (repeat hook 2x in a row)
- Heavy 808 and hi-hat rolls
- Minimalist production

**Boom-Bap Structure (Classic 90s):**
- Longer verses (24 bars common)
- Sample-based hooks
- Live drum breaks
- Jazz/soul samples

**Drill Structure (UK/Chicago):**
- Dark, menacing beats
- Sliding 808s
- Sparse arrangements
- Verses dominate, hooks minimal

**Pro Tips:**

**The "Verse Space Rule":** During verses, your mix should have at least -6dB of headroom compared to hooks. This gives vocals room to breathe and prevents frequency masking.

**The "Hook Consistency Rule":** Don't change the hook between repetitions. Listeners need consistency to latch onto the hook. Variation goes in verses, not hooks.

**The "808 Slide Technique":** Modern trap uses pitch-sliding 808s (portamento/glide). Set your sampler to glide mode and create melodic bass patterns that slide between notes.

**The "Loop Economy Rule":** Hip-hop beats are fundamentally loop-based. Don't create 32 bars of unique content—create 4-8 bars of perfect content and arrange it strategically. The repetition is the point.

**Reference Listening:** Pull up tracks from your target subgenre (trap, boom-bap, drill, etc.) and analyze:
- How long are verses? (usually 16 bars)
- How long are hooks? (usually 4-8 bars)
- What gets added/removed between verses and hooks?
- Where do beat switches occur?
- How minimal is the production during verses?

Hip-hop arrangement is about restraint, space, and serving the vocals. Master these principles, and your beats will provide the perfect canvas for MCs to shine.
        `
      }
    ]
  },

  learningObjectives: [
    "Structure verse-hook patterns effectively",
    "Create beat switches for variety",
    "Use interludes and bridges strategically",
    "Build momentum through hip-hop tracks"
  ],

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
