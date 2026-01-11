/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 1 - 4 on the floor
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson1-progress",
  lessonNumber: 1,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-2.html",
  prevLessonUrl: "lesson-drums-0.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Drum pattern" }),
    title: "4 on the Floor:",
    titleHighlight: "Your First Full Beat",
    subtitle: "Build the most important rhythm pattern in electronic music. You'll create a repeating rhythm that feels stable, danceable, and easy to recognize. This single pattern is the foundation behind house, techno, and most modern dance music. Once you understand this, everything else in drum programming becomes much less mysterious."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120 // Students must set tempo to 120 BPM
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build the 4-on-the-Floor Kick Pattern",
    description: "<strong>\"4 on the floor\"</strong> means a kick drum on every beat of the bar. Since there are four beats in a bar (in 4/4 time), you place four kicks equally spaced. This creates a steady pulse that dancers can lock onto. It might sound \"too simple,\" and that's exactly the point - this simplicity is power. It leaves space for everything else you'll add later: hi-hats, claps, bass, chords, and melodies.",
    tip: "Count \"one-two-three-four\" out loud while the loop plays. The kick should hit exactly when you say each number!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider below the sequencer. This is the standard house music tempo." },
      { text: "<strong>Click on steps 1, 5, 9, and 13</strong> in the Kick row to place your kicks." },
      { text: "These positions correspond to the <strong>four main beats</strong> of the bar (quarter notes)." },
      { text: "Press <strong>Play</strong> to hear your pattern loop. Does it feel even and steady?" },
      { text: "Listen: Does the loop flow smoothly from end back to start without stumbling?" },
      { text: "When satisfied, click <strong>Check Exercise</strong> to verify your pattern and tempo." }
    ]
  },
  
  // ====================
  // INSTRUMENTS CONFIG
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Exercise — Kick: Create the \"4 on the floor\" pattern by placing one kick on each of the four beats. In the 16-step grid, the four beats are steps 1, 5, 9, and 13. When you count \"one-two-three-four,\" these are where the kicks land. This is the heartbeat of the track.",
      patternHint: {
        label: "Kick"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Kick on every beat: steps 1, 5, 9, and 13"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Complete the kick exercise to unlock the next lesson.",
    success: "🎉 Correct! Great job! You can now proceed to the next lesson.",
    error: "Not quite right. Make sure you have kicks on steps 1, 5, 9, and 13!"
  }),
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    type: "drum_pattern",
    requiredInstruments: [
      {
        id: "kick",
        targetSteps: [0, 4, 8, 12], // Steps 1, 5, 9, 13
        tolerance: 0, // Exact match required
        minHitsRequired: 4
      }
    ],
    requiredTempo: 120,
    tempoTolerance: 0 // Must be exactly 120 BPM
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "What is \"4 on the Floor\"? - History, Psychology, and Power",
        content: `
**Definition and Origins:**
"4 on the floor" is the most fundamental drum pattern in electronic dance music. It's a rhythmic pattern where the kick drum (bass drum) hits on every quarter note beat in a 4/4 time signature—beats 1, 2, 3, and 4. The term comes from the kick drum literally hitting "on the floor"—the downbeats that anchor the rhythm.

This pattern emerged from disco music in the 1970s, where drummers like Earl Young (MFSB, "Love Is The Message") pioneered the steady four-on-the-floor kick to keep dancers moving. Before disco, most popular music used rock/funk patterns with kicks on beats 1 and 3. Disco revolutionized dance music by making every beat equally important, creating relentless forward momentum.

**Why It Works - The Psychology of Steady Pulse:**

**1. Physical Entrainment:**
When humans hear a steady pulse at 120-130 beats per minute (the sweet spot for 4-on-the-floor), our bodies naturally synchronize to it. This is called "rhythmic entrainment"—a biological response where your heartbeat, breathing, and movement align with external rhythms. Four-on-the-floor creates a metronomic pulse that's impossible not to move to.

**2. Predictability and Safety:**
The pattern is completely predictable—once you hear the first few kicks, your brain knows exactly when the next one will hit. This predictability creates a sense of safety and comfort on the dancefloor. Dancers can lose themselves in the music because they trust the rhythm won't suddenly change.

**3. Space for Other Elements:**
By occupying only the downbeats (quarter notes), the kick leaves space between beats for other elements: hi-hats on the offbeats (8th notes), snares on 2 and 4, percussion fills, and synth stabs. This rhythmic space is crucial—a kick pattern that's too busy doesn't leave room for other elements to shine.

**4. Universal Cross-Genre Appeal:**
Four-on-the-floor transcends cultural and musical boundaries. It works in:
- **House Music** (120-130 BPM): The foundation of the genre
- **Techno** (125-135 BPM): Driving and hypnotic
- **Disco** (110-125 BPM): Funky and grooving
- **Trance** (130-140 BPM): Uplifting and energetic
- **Pop/EDM** (120-128 BPM): Accessible and danceable
- **Eurodance** (130-150 BPM): High-energy and anthemic

**Musical Context - Understanding 4/4 Time:**
The pattern exists within 4/4 time signature, the most common time signature in Western music. "4/4" means:
- **Top 4**: Four beats per measure (bar)
- **Bottom 4**: Each beat is a quarter note

When you count "1-2-3-4, 1-2-3-4," you're counting quarter notes. In 4-on-the-floor, the kick drum hits on each count: 1 (kick), 2 (kick), 3 (kick), 4 (kick).

**The Sequencer Grid Explained:**
In a 16-step sequencer (like the one in this lesson), each measure is divided into 16 equal divisions called "16th notes" or "steps." Here's the breakdown:
- **Steps 1, 5, 9, 13** = Quarter notes (the main beats) = Where the kick hits
- **Steps 3, 7, 11, 15** = Offbeats (where hi-hats often go)
- **Steps 5 and 13** = Beats 2 and 4 (where snares/claps usually go)

Understanding this grid is essential because it's the foundation of electronic music production. Every element you add—hi-hats, snares, bass, synths—will be placed relative to this 16-step grid.

**Historical Deep Dive:**

**Disco Era (1970s):**
The pattern originated in Philadelphia with producers like Tom Moulton and Gamble & Huff. Songs like "I'll Be Around" by The Spinners (1972) and "Love Is The Message" by MFSB (1973) established the template. Disco DJs loved the pattern because tracks with steady kicks were easier to beatmatch and kept dancefloors packed.

By the late 70s, it was ubiquitous: Donna Summer's "I Feel Love" (1977, produced by Giorgio Moroder) made it electronic, using a synthesized kick instead of live drums. This track is considered the birth of modern electronic dance music.

**House Music Era (1980s-90s):**
When disco "died" in the early 80s, the pattern found new life in Chicago house music. Producers like Frankie Knuckles, Larry Heard, and Marshall Jefferson used drum machines (Roland TR-808, TR-909, TR-707) to create 4-on-the-floor patterns. Classic tracks:
- Frankie Knuckles - "Your Love" (1987)
- Marshall Jefferson - "Move Your Body" (1986)
- Larry Heard (Mr. Fingers) - "Can You Feel It" (1986)

These tracks defined the house music sound: steady 4-on-the-floor kick, hi-hats on 16ths, snare/clap on 2 and 4.

**Modern EDM (2000s-Present):**
The pattern evolved but remained foundational:
- **Daft Punk** - "One More Time" (2000): French house with heavy kicks
- **deadmau5** - "Strobe" (2009): Progressive house with subtle kicks
- **Calvin Harris** - "Feel So Close" (2011): Pop/EDM crossover
- **Swedish House Mafia** - "Don't You Worry Child" (2012): Festival anthem

**Why This Pattern Endures:**
Despite being 50+ years old, 4-on-the-floor remains dominant because:
1. It works physiologically—human bodies respond to steady pulses
2. It's DJ-friendly—tracks with steady kicks are easy to mix
3. It's timeless—the pattern doesn't sound dated
4. It's versatile—works from 110 BPM disco to 140 BPM trance

**The Physics of Low-End Pulse:**
Kick drums live in the 40-100Hz range—frequencies humans feel physically, not just hear. When a club soundsystem plays a 4-on-the-floor kick at high volume, you feel it in your chest and stomach. This physical sensation is addictive and is why the pattern dominates dancefloors worldwide.

**Next Steps in Your Learning:**
Mastering 4-on-the-floor is step one. From here, you'll learn:
- Adding hi-hats for rhythmic texture (Lesson 2)
- Adding snares/claps for backbeat (Lesson 3)
- Creating fills and variations (Lessons 4-5)
- Combining patterns for full drum arrangements (Lesson 6)
        `
      },
      {
        title: "How to Create 4-on-the-Floor in Any DAW - Detailed Guide",
        content: `
This pattern is universal across all DAWs and production workflows. Here's how to create it in different environments:

**Method 1: Step Sequencer (Easiest for Beginners)**

Most DAWs have a built-in step sequencer or drum machine:

**Ableton Live:**
1. Create a MIDI track
2. Load "Drum Rack" from Instruments
3. Drag a kick sample into the first pad (C1)
4. Click the "Fold" button to show only loaded pads
5. Draw MIDI notes on beats 1, 2, 3, 4 (or use the step sequencer by clicking the small sequencer icon)
6. Set to 4 bars, loop enabled
7. Press play - you should hear kicks on every beat

**FL Studio:**
1. Open the "Channel Rack" (F6)
2. Add a kick sample (right-click empty channel → "Replace" → choose kick)
3. In the step sequencer grid, activate steps 1, 5, 9, 13 (these are the quarter note beats)
4. The grid shows 16 steps = 1 bar
5. Set tempo to 120-128 BPM
6. Press play on the transport

**Logic Pro X:**
1. Create a "Software Instrument" track
2. Load "Drum Kit Designer" or "Drum Machine Designer"
3. Open the Piano Roll editor (Command + E)
4. Set grid to "1/4 note" (quarter notes)
5. Draw in kick notes on beats 1, 2, 3, 4 using the pencil tool
6. Set the loop region to 1-2 bars
7. Press play

**Method 2: Piano Roll (More Visual Control)**

If you prefer seeing notes on a timeline:

**Step 1: Create MIDI Track**
- Add a new MIDI/Instrument track
- Load a drum sampler or drum plugin

**Step 2: Set Grid to Quarter Notes**
- In the piano roll editor, set grid to "1/4" or "Quarter Notes"
- This snaps notes to the main beats

**Step 3: Draw Kick Notes**
- Find the kick drum note (usually C1 or C2 depending on the plugin)
- Draw four notes per bar, aligned to the grid
- Each note should be exactly one quarter note apart

**Step 4: Set Velocity and Length**
- Set all kicks to the same velocity (around 100-127 for impact)
- Set note length to 1/16 or 1/8 (short notes for punchy kicks)

**Method 3: Live Recording with MIDI Keyboard**

If you have a MIDI keyboard:

**Step 1: Set Metronome**
- Enable metronome/click track
- Set tempo to 120 BPM
- Set time signature to 4/4

**Step 2: Arm Track for Recording**
- Arm your drum track for recording
- Enable loop recording (1-4 bars)

**Step 3: Play Along**
- Press record
- Hit the same key (kick drum) on beats 1, 2, 3, 4
- Listen to the metronome to stay in time
- Record until you get a clean take

**Step 4: Quantize**
- Select all recorded notes
- Apply quantization to "1/4 notes"
- This corrects any timing imperfections

**Method 4: Audio Loops (Less Flexible)**

You can also use pre-made audio loops:

**Step 1: Find a Loop**
- Browse your DAW's loop library or use sites like Splice, Loopmasters
- Search for "4-on-the-floor kick" or "house kick loop"

**Step 2: Import to Timeline**
- Drag the audio loop onto an audio track
- Set the loop region to match the loop length

**Pros:** Quick and easy
**Cons:** Less control over timing, velocity, and sound

**Essential Parameters to Adjust:**

**Tempo (BPM):**
- **House/Deep House**: 120-125 BPM
- **Tech House**: 125-128 BPM
- **Techno**: 128-135 BPM
- **Trance/Hardstyle**: 135-150 BPM
- **Disco/Nu-Disco**: 110-120 BPM

**Velocity (How Hard the Kick Hits):**
- **Low Velocity (60-80)**: Subtle, background kick
- **Medium Velocity (80-100)**: Standard, balanced
- **High Velocity (100-127)**: Aggressive, punchy, loud
- Most tracks use 100-120 for the main kick

**Note Length:**
- **Very Short (1/32)**: Tight, punchy, minimal sustain
- **Short (1/16)**: Standard for electronic music
- **Medium (1/8)**: Allows kick to breathe, more disco-like
- **Long (1/4 or longer)**: Sustained, boomy (rarely used)

**Volume/Gain:**
- Kick should be one of the loudest elements in your mix
- Aim for -6dB to -12dB on your kick track meter
- Leave headroom for other elements and mastering

**Common DAW-Specific Tips:**

**Ableton Live:**
- Use "Simpler" or "Sampler" for more control over kick samples
- Enable "Warping" and set to "Beats" mode for tempo-synced kicks
- Use the "Groove Pool" to add subtle swing (we'll cover this in Lesson 5)

**FL Studio:**
- Use the "Channel Settings" to adjust kick pitch, panning, and volume
- Enable "Cut Itself" in sampler settings so kicks don't overlap
- Use the "Layer" feature to stack multiple kick samples for a fatter sound

**Logic Pro X:**
- Use "Ultrabeat" for detailed drum programming with built-in effects
- Apply "Compressor" to the kick channel for extra punch
- Use "Drummer" track as reference, then replace with your own kicks

**Choosing the Right Kick Sample:**

**Characteristics of a Good 4-on-the-Floor Kick:**
- **Clean transient (attack)**: Sharp initial hit for clarity
- **Controlled low-end**: Plenty of sub-bass (40-60Hz) without being boomy
- **Short decay**: Kick should finish before the next one hits
- **Genre-appropriate tone**: Deep and warm (house), hard and punchy (techno), bright and clicky (trance)

**Where to Find Kick Samples:**
- Your DAW's built-in library
- Splice, Loopmasters, Sample Magic (commercial)
- Free: 99Sounds, ModeAudio, Bedroom Producers Blog
- Iconic drum machines: Roland TR-808, TR-909, TR-707

**Processing Tips (We'll Cover in Detail Later):**
- **EQ**: Boost around 60-80Hz for sub-bass punch
- **Compression**: Light compression (2-4dB reduction) for consistency
- **Sidechain**: Duck the bass when kick hits (essential technique)
- **Saturation**: Adds harmonics for warmth and presence

**Practice Exercise:**

Create three different 4-on-the-floor patterns:
1. **House (122 BPM)**: Deep kick, medium velocity
2. **Techno (130 BPM)**: Hard kick, high velocity
3. **Disco (115 BPM)**: Warm kick, medium-long note length

Listen to how changing tempo and kick character completely changes the vibe, even though the pattern is identical.
        `
      },
      {
        title: "Genre Applications and Variations",
        content: `
While the core pattern stays the same (kick on every beat), different genres interpret it with unique flavor:

**House Music - The Classic Application:**
- Tempo: 120-125 BPM
- Kick: Deep, warm, sub-heavy (50-80Hz fundamental)
- Character: Round, smooth, not too aggressive
- Reference tracks: Frankie Knuckles - "Your Love," Larry Heard - "Can You Feel It"
- Production note: Often paired with offbeat hi-hats (8th notes) and snare/clap on beats 2 and 4

**Deep House - Subtle and Groovy:**
- Tempo: 120-125 BPM
- Kick: Very deep, almost felt rather than heard
- Character: Soft attack, long decay, heavy sub-bass
- Reference tracks: Kerri Chandler, Moodymann, Larry Heard
- Production note: Kick is often mixed quieter than in other genres, emphasis on groove over impact

**Tech House - Punchy and Driving:**
- Tempo: 125-128 BPM
- Kick: Punchy, forward, with a distinct "click" transient
- Character: Tight, controlled low-end, prominent in the mix
- Reference tracks: Green Velvet, Patrick Topping, Fisher - "Losing It"
- Production note: Kick is heavily sidechained to bass and pads for the "pumping" effect

**Techno - Hard and Relentless:**
- Tempo: 128-135 BPM
- Kick: Hard, fast attack, short decay
- Character: Industrial, aggressive, dominant in the mix
- Reference tracks: Charlotte de Witte, Amelie Lens, Adam Beyer
- Production note: Minimal use of other elements—kick is the star

**Trance - Uplifting and Energetic:**
- Tempo: 135-140 BPM
- Kick: Bright, clicky attack with moderate sub-bass
- Character: Energetic, forward-pushing
- Reference tracks: Armin van Buuren, Above & Beyond, Ferry Corsten
- Production note: Often uses a "hardstyle kick" variant with pitch envelope (kick pitch drops quickly after hit)

**Disco/Nu-Disco - Funky and Organic:**
- Tempo: 110-120 BPM
- Kick: Warm, natural-sounding (often sampled from live drums)
- Character: Organic, with room ambience and natural decay
- Reference tracks: Chic, Daft Punk - "Get Lucky," Purple Disco Machine
- Production note: Often has slight swing (not perfectly quantized) for human feel

**Pop/EDM - Radio-Friendly and Anthemic:**
- Tempo: 120-128 BPM
- Kick: Balanced—punchy but not overwhelming
- Character: Polished, clean, fits alongside vocals
- Reference tracks: Calvin Harris, The Chainsmokers, Avicii
- Production note: Kick is important but shares space with vocals and melodic elements

**Subtle Variations Within the Pattern:**

Even though the basic pattern is "kick on every beat," professionals add subtle variations:

**1. Velocity Variations:**
Instead of all kicks at the same velocity, try:
- Beat 1: Velocity 110 (strong)
- Beat 2: Velocity 100 (slightly softer)
- Beat 3: Velocity 110 (strong)
- Beat 4: Velocity 100 (slightly softer)

This creates a subtle "1-2-3-4" pulse emphasis without changing the pattern.

**2. Layering Different Kick Samples:**
Professional producers often layer two kicks:
- **Sub kick**: Provides 40-60Hz weight (tuned to the track's key)
- **Top kick**: Provides 80-100Hz punch and transient click

Both play the same 4-on-the-floor pattern but serve different frequency roles.

**3. Swing/Groove (Advanced):**
In genres like deep house and disco, the kicks aren't perfectly on the grid—they're slightly behind or ahead by 1-5ms. This creates "human feel" or "groove." DAWs have groove/swing templates (we'll cover this in Lesson 5).

**4. Pitch Variations:**
In trance and hardstyle, kicks often have a pitch envelope: the kick starts at a higher pitch (e.g., 150Hz) and quickly drops to its fundamental (e.g., 60Hz) over 50-100ms. This creates the signature "boing" sound of hardstyle kicks.

**When NOT to Use 4-on-the-Floor:**

While it's foundational, some genres avoid it:
- **Hip-Hop/Trap**: Uses kick on beats 1 and 3, with 808 bass on offbeats
- **Drum and Bass**: Uses kicks in syncopated patterns (we'll cover in advanced lessons)
- **Dubstep**: Half-time feel with kick on beat 1, snare on beat 3
- **Rock/Pop**: Often uses kick on beats 1 and 3 only

Learning 4-on-the-floor first gives you the foundation to understand these more complex patterns later.
        `
      },
      {
        title: "Common Mistakes and Pro Tips",
        content: `
**Common Beginner Mistakes:**

**Mistake 1: Kick Too Quiet**
**Problem**: Beginners often mix kicks too quietly, afraid of them overpowering other elements.
**Reality**: In dance music, the kick should be the loudest element (or tied with vocals in pop/EDM).
**Solution**: Set your kick level to -6dB to -10dB on the meter. Everything else should be mixed relative to the kick, not the other way around.

**Mistake 2: Wrong BPM for the Genre**
**Problem**: Making a house track at 140 BPM or a trance track at 110 BPM—tempo changes the entire vibe.
**Solution**: Learn the BPM ranges for each genre and stay within them. Use a reference track to confirm tempo.

**Mistake 3: Kicks Not Perfectly On-Grid**
**Problem**: If you record kicks live or import audio loops without warping, they may drift off-beat.
**Solution**: Always quantize MIDI kicks to 1/4 notes. For audio loops, use your DAW's warp/stretch features to sync to tempo.

**Mistake 4: Overlapping Kicks**
**Problem**: If kick note length is too long, kicks overlap, creating a muddy low-end.
**Solution**: Set kick note length to 1/16 or 1/8 maximum. Enable "choke groups" or "cut itself" in your sampler so new kicks mute previous ones.

**Mistake 5: Ignoring Frequency Content**
**Problem**: Using a kick with too much 200-500Hz (low-mid mud) or not enough sub-bass (40-60Hz).
**Solution**: Use a spectrum analyzer to check your kick's frequency content. EQ out unwanted frequencies.

**Mistake 6: All Kicks at Max Velocity**
**Problem**: Every kick at velocity 127 sounds robotic and harsh.
**Solution**: Use velocity 100-120 for most kicks. Subtle velocity variations (±5-10) add human feel.

**Mistake 7: Choosing the Wrong Kick Sample**
**Problem**: Using a hardstyle kick in a deep house track—samples have genre-specific character.
**Solution**: Match your kick sample to your genre. Listen to reference tracks and analyze their kick sound.

**Pro Tips from Professional Producers:**

**Pro Tip 1 - Tune Your Kick to the Track's Key:**
Kicks have a fundamental frequency (usually 40-80Hz). If your track is in the key of A (110Hz root), tune your kick to A (55Hz or 110Hz). This creates harmonic alignment and makes the kick feel more integrated with the bass and melody.

**How to do it:**
- Use a spectrum analyzer to find your kick's fundamental frequency
- Use a pitch-shifter or sampler tuning to adjust it to match your track's key root note
- This is especially important in bass-heavy genres like house and techno

**Pro Tip 2 - Sidechain Compression is Essential:**
Once you add bass, synths, and pads, you'll need to sidechain them to the kick. This ducks (lowers) other elements momentarily when the kick hits, ensuring the kick always cuts through.

**How to do it:**
- Route your kick to a sidechain input on a compressor plugin
- Apply the compressor to bass, pads, or full mix
- Set attack 5-10ms, release 100-200ms, ratio 4:1, threshold until you see 3-6dB reduction

We'll cover this in detail in mixing lessons, but start thinking about it now.

**Pro Tip 3 - Layer Kicks for Fullness:**
Professional tracks often use 2-3 kick samples layered:
- **Sub layer**: Pure sine wave or 808 kick (40-60Hz)
- **Body layer**: Standard house/techno kick (60-100Hz)
- **Click layer**: High-passed kick with just transient (2-8kHz)

Each layer serves a different frequency role, creating a massive, full-spectrum kick.

**Pro Tip 4 - Use Reference Tracks:**
Pull up a professional track in your genre and A/B it with your kick pattern. Ask:
- Is my kick louder, quieter, or the same level?
- Does my kick have as much sub-bass?
- Is my kick as punchy/transient-heavy?

Adjust your kick to match the reference.

**Pro Tip 5 - Leave Headroom:**
Even though kicks should be loud, don't let them clip (hit 0dB). Leave 3-6dB of headroom on your master bus for mastering. If your kicks are peaking at -3dB on the master, you're in a good place.

**Pro Tip 6 - Check in Mono:**
Switch your DAW to mono playback and listen to your kick. If the kick loses impact or disappears in mono, you have phase issues. Kicks should always be mono-compatible (centered, no stereo width).

**Pro Tip 7 - The "Kick First" Approach:**
Professional producers often start with the kick and build the entire track around it. Get your kick sounding perfect (tone, level, impact) before adding other elements. This ensures the foundation is solid.

**Exercise for Practice:**

1. Create a 4-on-the-floor pattern at 122 BPM
2. Export just the kick pattern (4 bars, looped)
3. Import a professional house track
4. A/B your kick with the reference kick
5. Adjust your kick (EQ, compression, volume) to match the reference
6. Repeat until your kick sounds professional

This "reference matching" exercise is how professionals develop their ears. Do this with 5-10 different tracks, and you'll understand what makes a great kick.

**What's Next:**

Once you master the 4-on-the-floor kick, you'll learn:
- **Lesson 2**: Adding hi-hats on offbeats (8th notes)
- **Lesson 3**: Adding snare/clap on beats 2 and 4 (backbeat)
- **Lesson 4**: Creating drum fills and variations
- **Lesson 5**: Applying swing and groove for human feel
- **Lesson 6**: Building complete drum arrangements

Mastering the kick is step one. Every element you add after this will be built around this solid foundation.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand what \"4 on the floor\" means and why it's foundational to electronic music",
    "Place kick drums on the four main beats (steps 1, 5, 9, 13) in a 16-step sequencer",
    "Set and maintain proper tempo (120 BPM) for house music",
    "Recognize the relationship between quarter notes and a 16-step grid",
    "Apply the 4-on-the-floor pattern in any DAW using a quarter note grid"
  ],

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: 'drums'
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
