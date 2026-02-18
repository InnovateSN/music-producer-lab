import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-19-progress",
  lessonNumber: 19,
  lessonCategory: "Mixing",
  depthLevel: 10,
  
  nextLessonUrl: "lesson-mixing-20.html",
  prevLessonUrl: "lesson-mixing-18.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-mixing-19", categoryLabel: "Mixing" }),
    title: "Stem Mixing &",
    titleHighlight: "Bus Processing",
    subtitle: "Organize complex mixes with <strong>stem groups, bus compression, and group processing</strong> for cohesive, professional sound. Master signal flow, routing, and how to glue elements together like the pros."
  },
  
  sequencer: {
    tempo: 125,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 125
  },
  
  exercise: {
    title: "Build Stem Groups Architecture",
    description: "Create a <strong>multi-layered pattern representing different stem groups</strong>: drums, bass, melodic elements, and effects. Understand how professional mixers organize complex sessions into manageable buses for group processing.",
    tip: "Each instrument color represents a different stem bus. Drums bus (red), Bass bus (purple), Melodic bus (blue), FX bus (yellow). In real mixes, each bus gets compression, EQ, and glue processing.",
    steps: [
      { text: "<strong>Set tempo to 125 BPM</strong> for a punchy, energetic feel." },
      { text: "<strong>Program drums bus</strong> (kick + snare pattern) on steps 1, 5, 9, 13 with velocity 110-120." },
      { text: "<strong>Add bass bus</strong> on steps 3, 7, 11, 15 with velocity 90-100." },
      { text: "<strong>Layer melodic bus</strong> (chords/melody) on steps 1, 3, 5, 7, 9, 11, 13, 15 with velocity 80-90." },
      { text: "<strong>Add FX bus</strong> (hi-hats/cymbals) on all 16 steps with velocity 50-60." },
      { text: "<strong>Listen</strong> to how different buses create an organized, layered mix architecture." }
    ]
  },
  
  instruments: [
    {
      id: "drums-bus",
      label: "Drums Bus",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.001, decay: 0.15, sustain: 0, release: 0.05 },
      filter: { type: "lowpass", frequency: 150, Q: 2.0 }
    },
    {
      id: "bass-bus",
      label: "Bass Bus",
      color: "linear-gradient(135deg, #6c5ce7, #5f27cd)",
      targetSteps: [2, 6, 10, 14],
      oscillator: { type: "sawtooth", detune: 0 },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.15 },
      filter: { type: "lowpass", frequency: 400, Q: 1.5 }
    },
    {
      id: "melodic-bus",
      label: "Melodic Bus",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      oscillator: { type: "triangle", detune: 7 },
      envelope: { attack: 0.05, decay: 0.3, sustain: 0.5, release: 0.4 },
      filter: { type: "lowpass", frequency: 2400, Q: 1.0 }
    },
    {
      id: "fx-bus",
      label: "FX Bus",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.02 },
      filter: { type: "highpass", frequency: 8000, Q: 1.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Understanding Stem Mixing & Signal Flow',
        content: `**What Are Stems?**
**Stems** are grouped submixes of related tracks sent to a single bus for processing:
- **Drums Stem:** All drum tracks (kick, snare, hi-hats, toms, cymbals, percussion)
- **Bass Stem:** All bass elements (sub bass, bass guitar, bass synth)
- **Melodic Stem:** Chords, pads, arpeggios, lead synths
- **Vocal Stem:** Lead vocals, backing vocals, harmonies, ad-libs
- **FX Stem:** Reverb returns, delay throws, risers, impacts

**Why Use Stem Mixing?**
- **Organization:** Manage 100+ tracks as 10-15 stem buses
- **Efficiency:** Process groups instead of individual tracks
- **Cohesion:** Glue elements together with bus compression
- **Flexibility:** Automate entire groups at once
- **Collaboration:** Send stems to mastering engineer or remix artists

**Signal Flow:**
Individual Tracks → Stem Buses → Mix Bus → Master Fader

Example:
- **Kick track** → **Drums Bus** → **Mix Bus** → **Master**
- **Snare track** → **Drums Bus** → **Mix Bus** → **Master**
- **Hi-hat track** → **Drums Bus** → **Mix Bus** → **Master**

**Standard Stem Groups:**

**1. Drums:**
- Kick (sub-group)
- Snare + claps
- Hi-hats + cymbals
- Toms
- Percussion
- Room mics

**2. Bass:**
- Sub bass
- Mid bass
- Bass guitar
- Bass synths

**3. Melodic:**
- Chords / pads
- Lead synth / guitar
- Arpeggios
- Plucks
- Strings / brass

**4. Vocals:**
- Lead vocal
- Doubles
- Harmonies / backing vocals
- Ad-libs / shouts

**5. FX / Ambience:**
- Reverb returns
- Delay returns
- Risers / sweeps
- Impacts / hits
- Atmospheric FX

**6. Mix Bus:**
All stems → Mix Bus (final processing before master)

**7. Master Fader:**
Final output (no processing here—leave headroom for mastering)`
      },
      {
        title: 'Bus Compression & Glue',
        content: `**What Is Bus Compression?**
Compression applied to a **group of tracks** (a bus) to glue them together and control their collective dynamics.

**Goals:**
- **Cohesion:** Make individual elements feel like one instrument
- **Control:** Tame peaks across the group
- **Character:** Add analog warmth and color
- **Energy:** Increase sustain and perceived loudness

**Bus Compression Settings (General):**
- **Ratio:** 2:1 to 4:1 (gentle to moderate)
- **Attack:** 10-30ms (let transients through)
- **Release:** Auto or 100-300ms (natural recovery)
- **Threshold:** Light gain reduction (2-4dB)
- **Makeup Gain:** Compensate for lost level
- **Knee:** Soft knee for smooth compression

**Drum Bus Compression:**
**Purpose:** Glue drums together, add punch and sustain

**Settings:**
- **Compressor Type:** VCA (SSL Bus Comp, API 2500) or FET (1176)
- **Ratio:** 4:1
- **Attack:** 10-30ms (slower = more punch, faster = more control)
- **Release:** 100-300ms (or auto)
- **Threshold:** 2-4dB gain reduction
- **Knee:** Soft
- **Output:** Makeup gain to match bypass level

**Pro Tip:** Use **parallel drum bus compression** for even more power without squashing transients.

**Bass Bus Compression:**
**Purpose:** Even out bass dynamics, add sustain

**Settings:**
- **Compressor Type:** Opto (LA-2A) or VCA
- **Ratio:** 3:1 to 6:1
- **Attack:** 20-50ms (let sub transient through)
- **Release:** 100-200ms
- **Threshold:** 3-6dB gain reduction
- **Result:** Consistent, powerful bass that doesn't poke out

**Melodic Bus Compression:**
**Purpose:** Glue synths/guitars/keys together, control dynamics

**Settings:**
- **Compressor Type:** VCA or Tube (Fairchild, Manley Vari-Mu)
- **Ratio:** 2:1 to 3:1
- **Attack:** 20-40ms
- **Release:** 200-500ms (slower, maintain atmosphere)
- **Threshold:** 2-3dB gain reduction
- **Result:** Smooth, cohesive melodic layer

**Vocal Bus Compression:**
**Purpose:** Consistent vocal level, add presence

**Settings:**
- **Compressor Type:** Opto (LA-2A) or Tube
- **Ratio:** 3:1 to 4:1
- **Attack:** 10-20ms
- **Release:** Auto or 150-300ms
- **Threshold:** 3-5dB gain reduction
- **Result:** Vocal sits consistently in the mix

**Mix Bus Compression (Final Glue):**
**Purpose:** Glue the entire mix together, add cohesion and "finished" sound

**Settings:**
- **Compressor Type:** VCA (SSL Bus Comp) or Tube (Fairchild, Manley)
- **Ratio:** 2:1 to 3:1 (very gentle)
- **Attack:** 30ms (slow, preserve transients)
- **Release:** Auto or 300-500ms
- **Threshold:** 1-3dB gain reduction MAX
- **Knee:** Soft
- **Result:** Cohesive, "glued" mix without losing dynamics

**⚠️ Critical Rule:**
Mix bus compression should be **subtle**. If you hear obvious pumping or loss of transients, you're compressing too much.

**When to Add Mix Bus Compression:**
- **Option 1:** Add it early in the mix process and mix into it (helps you hear the final sound)
- **Option 2:** Add it at the end as final glue
- **Pro preference:** Most pros add it early and mix into it`
      },
      {
        title: 'Bus EQ & Processing Chains',
        content: `**Bus EQ Philosophy:**
Use EQ on buses to **shape the overall tone** of a group, not to fix individual problems (do that on individual tracks).

**Drum Bus EQ:**
**Purpose:** Shape overall drum tone, add weight or brightness

**Common Moves:**
- **High-pass:** 30-40 Hz (remove sub rumble)
- **Low boost:** +1 to +3dB at 60-100 Hz (add weight and power)
- **Mid cut:** -1 to -2dB at 200-400 Hz (reduce boxiness)
- **Presence boost:** +1 to +3dB at 3-5 kHz (add crack and attack)
- **Air boost:** +1 to +2dB at 10-12 kHz (add sparkle to cymbals)

**Bass Bus EQ:**
**Purpose:** Tighten low-end, add clarity

**Common Moves:**
- **Sub focus:** Slight boost at 40-60 Hz (sub weight)
- **Mud cut:** -2 to -4dB at 200-300 Hz (clarity)
- **Presence:** +1 to +2dB at 800 Hz - 1.5 kHz (mid-range punch)
- **High-pass:** Everything above 5 kHz (bass doesn't need highs)

**Melodic Bus EQ:**
**Purpose:** Carve space for vocals, create air

**Common Moves:**
- **High-pass:** 80-150 Hz (leave room for bass and kick)
- **Notch cut:** -2 to -3dB at vocal presence range (2-4 kHz) to make space
- **Air boost:** +1 to +3dB at 8-12 kHz (sparkle and width)

**Vocal Bus EQ:**
**Purpose:** Enhance presence, reduce harshness

**Common Moves:**
- **High-pass:** 80-120 Hz (remove low-end rumble)
- **Warmth:** +1 to +2dB at 200-400 Hz (if vocals are thin)
- **Presence:** +2 to +4dB at 3-5 kHz (intelligibility, cut through mix)
- **Air:** +2 to +4dB at 10-12 kHz (modern, expensive sound)
- **De-harsh:** -1 to -3dB at 2-3 kHz or 6-8 kHz (if needed)

**Mix Bus EQ:**
**Purpose:** Final tone shaping, add polish

**Common Moves:**
- **High-pass:** 20-30 Hz (remove inaudible sub rumble that eats headroom)
- **Low-end tightness:** Gentle shelf or cut at 40-60 Hz (-0.5 to -1dB)
- **Warmth:** +0.5 to +1dB at 200-400 Hz (if mix feels thin)
- **Presence:** +0.5 to +1.5dB at 3-5 kHz (if mix feels dull)
- **Air:** +1 to +2dB shelving above 10 kHz (sparkle and openness)

**⚠️ Critical Rule:**
Mix bus EQ should be **subtle** (±1-2dB max). Large EQ moves on the mix bus indicate problems in individual tracks or buses.

**Complete Bus Processing Chain Order:**
1. **High-pass filter** (clean up low end)
2. **Corrective EQ** (problem frequencies)
3. **Compression** (dynamics control and glue)
4. **Creative EQ** (tone shaping, air, presence)
5. **Saturation** (harmonic richness, optional)
6. **Stereo imaging** (widening, optional)
7. **Send to reverb/delay** (if using aux sends)

**Example: Professional Drum Bus Chain**
1. High-pass at 40 Hz
2. EQ: -2dB at 300 Hz (reduce boxiness)
3. VCA compression: 4:1, 30ms attack, auto release, 3dB GR
4. EQ: +2dB at 4 kHz (add crack), +1dB at 12 kHz (air)
5. Saturation: Subtle tape or analog color
6. **Result:** Powerful, cohesive, punchy drums`
      },
      {
        title: 'Advanced Stem Organization & Workflow',
        content: `**Color Coding & Naming:**
Organize your DAW session for speed and clarity:

**Color Scheme:**
- **Red:** Drums
- **Orange:** Percussion
- **Purple:** Bass
- **Blue:** Synths / melodic elements
- **Green:** Vocals
- **Yellow:** FX / ambience
- **Gray:** Buses and groups

**Naming Convention:**
Use consistent prefixes:
- **DRM-** Kick, Snare, Hi-Hat, etc.
- **PERC-** Shaker, Tambourine, Claps
- **BASS-** Sub, Mid, Synth Bass
- **SYN-** Lead, Pad, Pluck, Arp
- **VOX-** Lead, Double, Harmony, Ad-Lib
- **FX-** Riser, Impact, Sweep, Atmosphere
- **BUS-** Drums, Bass, Melodic, Vocal, FX
- **RTN-** Reverb Return, Delay Return

**Example Session Layout:**
```
[BUS-DRUMS]
  ├─ DRM-Kick
  ├─ DRM-Snare
  ├─ DRM-Hi-Hat Closed
  ├─ DRM-Hi-Hat Open
  └─ DRM-Ride
[BUS-BASS]
  ├─ BASS-Sub
  ├─ BASS-Mid
[BUS-MELODIC]
  ├─ SYN-Lead
  ├─ SYN-Pad
  ├─ SYN-Pluck
[BUS-VOCAL]
  ├─ VOX-Lead
  ├─ VOX-Double
  ├─ VOX-Harmony
[BUS-FX]
  ├─ RTN-Reverb
  ├─ RTN-Delay
[BUS-MIX]
  └─ All stems → Mix Bus
[MASTER]
```

**Gain Staging on Buses:**
Critical for clean mixes:
1. **Individual tracks:** Peak at -18dB to -12dB
2. **Stem buses:** Peak at -6dB to -3dB before processing
3. **Mix bus:** Peak at -6dB before mastering
4. **Master fader:** Leave at 0dB (unity gain)

**If a bus is clipping:**
- Turn down individual tracks feeding the bus (NOT the bus fader)
- This maintains proper gain structure

**Stem Export for Mastering:**
Many mastering engineers request stems for maximum flexibility:

**How to Export Stems:**
1. **Mute all buses except one** (e.g., Drums Bus)
2. **Export** from start to end of song
3. **Repeat** for each bus: Bass, Melodic, Vocal, FX
4. **Name files clearly:** "Song-Title_Drums.wav," "Song-Title_Bass.wav"
5. **Specs:** 24-bit WAV, same sample rate as project, -6dB headroom

**What to Include in Stems:**
- All bus processing (EQ, compression, saturation)
- No limiter on individual stems
- No mix bus processing (mastering engineer will apply)

**Alternative: Send Individual Tracks:**
For full flexibility, export every individual track (not stems):
- More control for mastering/remix
- Larger file size
- More work for recipient

**Sub-Buses (Buses Within Buses):**
For complex mixes, create hierarchies:

**Example: Drum Sub-Buses**
```
[BUS-DRUMS] (Master drum bus with glue compression)
  ├─ [SUB-KICK] (Kick compression)
  │   ├─ DRM-Kick Top
  │   └─ DRM-Kick Sub
  ├─ [SUB-SNARE] (Snare layering + processing)
  │   ├─ DRM-Snare Top
  │   ├─ DRM-Snare Bottom
  │   └─ DRM-Clap
  └─ [SUB-HATS-CYMBALS] (High-end drum elements)
      ├─ DRM-Hi-Hat Closed
      ├─ DRM-Hi-Hat Open
      └─ DRM-Ride
```

**Benefits:**
- Process kick elements together before sending to drum bus
- Compress snare layers as one before drum bus compression
- Separate control over different drum frequency ranges

**Automation on Buses:**
Automate bus levels for dynamic mixing:
- **Verse:** Melodic bus -2dB (intimate)
- **Chorus:** Melodic bus 0dB (full energy)
- **Breakdown:** Drums bus -6dB (stripped back)
- **Drop:** All buses to full level (maximum impact)

**This is more efficient than automating 20 individual tracks.**`
      }
    ]
  },
  
  learningObjectives: [
    "Understand stem mixing: grouping related tracks into buses for organized, efficient mixing",
    "Apply bus compression for glue: drum bus, bass bus, melodic bus, vocal bus, mix bus techniques",
    "Use bus EQ to shape overall tone: high-pass filtering, tone shaping, and carving frequency space",
    "Organize sessions with color coding, naming conventions, and hierarchical bus structures",
    "Export stems for mastering: proper specs (24-bit WAV), headroom (-6dB), and file organization"
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
