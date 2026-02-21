import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mixing",
  lessonNumber: 18
});

export const lessonConfig = {
  lessonKey: "mpl-mixing-18-progress",
  lessonNumber: 18,
  lessonCategory: "Mixing",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 9,
  
  nextLessonUrl: "lesson-mixing-19.html",
  prevLessonUrl: "lesson-mixing-17.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-mixing-18", categoryLabel: "Mixing" }),
    title: "Mixing for",
    titleHighlight: "Streaming Platforms",
    subtitle: "Optimize your mixes for <strong>Spotify, Apple Music, YouTube</strong> and other streaming services. Master loudness normalization (-14 LUFS), format-specific techniques, and how to make your music sound great on every platform."
  },
  
  sequencer: {
    tempo: 130,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 130
  },
  
  exercise: {
    title: "Balance for Streaming Loudness",
    description: "Create a <strong>balanced pattern with healthy dynamics</strong> that demonstrates streaming-ready mixing. Use velocity variations to simulate dynamic range that survives loudness normalization without sounding squashed.",
    tip: "Streaming platforms normalize to -14 LUFS. Over-compressed mixes get turned DOWN, losing impact. Dynamic mixes maintain punch and keep listener engaged.",
    steps: [
      { text: "<strong>Set tempo to 130 BPM</strong> for an upbeat, dance-friendly groove." },
      { text: "<strong>Program loud kick</strong> on steps 1, 5, 9, 13 with velocity 110-120 for impact." },
      { text: "<strong>Add varied snare</strong> on steps 5, 13 with velocity range 90-110 for dynamics." },
      { text: "<strong>Layer soft hi-hats</strong> on all 16 steps with velocity 50-70 for groove." },
      { text: "<strong>Add dynamic clap</strong> on steps 3, 7, 11, 15 with velocity 70-100 for variation." },
      { text: "<strong>Listen</strong> to natural dynamics that translate well to streaming normalization." }
    ]
  },
  
  instruments: [
    {
      id: "loud-kick",
      label: "Loud Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      oscillator: { type: "sine", detune: 0 },
      envelope: { attack: 0.001, decay: 0.15, sustain: 0, release: 0.05 },
      filter: { type: "lowpass", frequency: 120, Q: 2.0 }
    },
    {
      id: "dynamic-snare",
      label: "Dynamic Snare",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      targetSteps: [4, 12],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.12, sustain: 0, release: 0.05 },
      filter: { type: "highpass", frequency: 300, Q: 1.0 }
    },
    {
      id: "soft-hihat",
      label: "Soft Hi-Hat",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.02 },
      filter: { type: "highpass", frequency: 8000, Q: 1.0 }
    },
    {
      id: "dynamic-clap",
      label: "Dynamic Clap",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [2, 6, 10, 14],
      oscillator: { type: "noise", detune: 0 },
      envelope: { attack: 0.005, decay: 0.15, sustain: 0, release: 0.08 },
      filter: { type: "bandpass", frequency: 1500, Q: 2.0 }
    }
  },
  
  theory: {
    sections: [
      {
        title: 'Understanding Loudness Normalization',
        content: `**The Loudness Wars Are Over:**
Before streaming, engineers competed for the loudest CD. Heavy limiting and compression made tracks louder but lifeless. Streaming platforms ended this with **loudness normalization**.

**What Is Loudness Normalization?**
Streaming services automatically adjust playback volume so all tracks play at a consistent perceived loudness level, regardless of how loud the master was.

**Normalization Targets (as of 2026):**
- **Spotify:** -14 LUFS (Loudness Units Full Scale)
- **Apple Music:** -16 LUFS
- **YouTube:** -13 to -15 LUFS
- **Tidal:** -14 LUFS
- **Amazon Music:** -14 LUFS
- **Deezer:** -14 to -16 LUFS

**What This Means:**
- If your track is **louder** than -14 LUFS: Platform turns it DOWN
- If your track is **quieter** than -14 LUFS: Platform turns it UP (or leaves it)
- **Loudest ≠ Best anymore**

**The New Goal:**
Instead of maximum loudness, aim for **maximum IMPACT and DYNAMICS** within -14 LUFS range.

**LUFS Explained:**
**LUFS** = Loudness Units relative to Full Scale
- Measures **perceived loudness** (how loud it feels), not just peak level
- Takes into account human hearing (mid frequencies sound louder than lows/highs)
- More accurate than RMS or peak meters

**Integrated LUFS:**
Average loudness across the entire track (this is what streaming platforms measure)

**Recommended LUFS Targets:**
- **Pop/EDM:** -8 to -10 LUFS (dynamic, impactful)
- **Hip-Hop:** -8 to -12 LUFS (punchy, dynamic)
- **Rock/Metal:** -7 to -9 LUFS (powerful, aggressive)
- **Indie/Folk:** -10 to -14 LUFS (natural, dynamic)
- **Classical/Jazz:** -12 to -18 LUFS (huge dynamic range)

**Why Not Mix to Exactly -14 LUFS?**
Mix with dynamics (-8 to -10 LUFS), let mastering engineer bring it to final loudness. This preserves impact while meeting platform requirements.`
      },
      {
        title: 'Platform-Specific Optimization',
        content: `**Spotify:**
- **Normalization:** -14 LUFS
- **User control:** "Loud" mode (no normalization), "Normal" mode (-14 LUFS), "Quiet" mode (-23 LUFS)
- **Codec:** Ogg Vorbis (Free: 160 kbps, Premium: 320 kbps)
- **Strategy:** 
  - Aim for -9 to -11 LUFS integrated
  - Preserve dynamics (DR8-10 or higher)
  - True Peak: -1 dBTP (prevents inter-sample clipping)
  - Most users on "Normal" mode (gets normalized)

**Apple Music:**
- **Normalization:** -16 LUFS
- **User control:** "Sound Check" on/off
- **Codec:** AAC 256 kbps (very high quality)
- **Soundcheck:** If enabled, normalizes to -16 LUFS
- **Strategy:**
  - Aim for -10 to -12 LUFS integrated
  - Slightly more dynamic than Spotify
  - True Peak: -1 dBTP
  - AAC encoding is forgiving (better high-end preservation)

**YouTube:**
- **Normalization:** -13 to -15 LUFS (varies)
- **User control:** None (always normalized)
- **Codec:** Opus/AAC 128-256 kbps
- **Video matters:** Engaging thumbnail/video keeps people watching
- **Strategy:**
  - Aim for -11 to -13 LUFS integrated
  - Maximize impact in first 10 seconds (hook listeners)
  - Consider vocal clarity (viewers often on phone speakers/earbuds)
  - True Peak: -1 dBTP

**Tidal:**
- **Normalization:** -14 LUFS
- **User control:** Loudness normalization on/off
- **Codec:** HiFi: 1411 kbps FLAC, HiFi Plus: MQA
- **Audience:** Audiophiles with good gear
- **Strategy:**
  - Aim for -10 to -12 LUFS integrated
  - Focus on dynamics and detail (DR10+ ideal)
  - High-quality masters matter here
  - True Peak: -1 dBTP

**SoundCloud:**
- **Normalization:** None (yet)
- **Codec:** 128 kbps MP3 (free), 256 kbps AAC (Go+)
- **Strategy:**
  - Can push loudness slightly (but don't overdo it)
  - -8 to -10 LUFS integrated works well
  - True Peak: -0.5 dBTP (slight headroom for codec)

**True Peak Explained:**
Digital-to-analog conversion can create peaks **between samples** that exceed 0 dBFS, causing distortion. **True Peak limiting** prevents this.

**Set True Peak to -1 dBTP** (or -2 dBTP for safety) to avoid inter-sample clipping on all platforms.`
      },
      {
        title: 'Mixing for Dynamics & Impact',
        content: `**The Loudness Paradox:**
Louder ≠ Better on streaming. In fact, **over-limited mixes lose impact** when turned down.

**Why Dynamics Win:**
- **Contrast creates excitement:** Quiet-to-loud builds tension
- **Transients hit harder:** Uncompressed kick/snare have more punch
- **Less fatigue:** Dynamic mixes keep listeners engaged longer
- **Algorithms favor engagement:** Spotify/YouTube promote songs people finish listening to

**How to Mix for Impact (Not Loudness):**

**1. Preserve Transients:**
- Use compression with slower attack (10-30ms) to let drum transients through
- Limit total gain reduction to 3-6dB per compressor
- Use parallel compression for power without squashing

**2. Create Dynamic Contrast:**
- **Verse:** Sparser arrangement, lower levels, less compression
- **Pre-Chorus:** Build with layers, slight volume increase
- **Chorus:** Full arrangement, maximum energy, but NOT maximum limiting
- **Bridge:** Strip back, create tension
- **Final Chorus:** Peak energy (automation, not over-limiting)

**3. Use EQ for Clarity (Not Loudness):**
- Carve space for each element
- High-pass everything that doesn't need low end
- Boost presence/air (3-5 kHz, 10-12 kHz) for perceived loudness without actual loudness

**4. Strategic Saturation:**
- Add harmonic richness with subtle saturation
- Makes tracks feel fuller and louder without raising LUFS
- Use tape saturation, tube saturation, or analog emulation

**5. Arrangement for Impact:**
- Don't have everything playing all the time
- Leave space—silence is powerful
- Automate elements in/out for dynamic movement

**6. Reference Tracks:**
Use professional tracks in your genre as reference:
- Match their LUFS range (-8 to -12 LUFS typically)
- Compare dynamics (use a dynamic range meter)
- Notice their use of space and arrangement

**Dynamic Range (DR) Meter:**
Measures the difference between loudest and quietest parts:
- **DR4-6:** Very compressed (avoid unless intentional)
- **DR7-9:** Modern pop/EDM sweet spot
- **DR10-12:** Dynamic, impactful rock/indie
- **DR13+:** Highly dynamic classical/jazz

**Tools:**
- **Youlean Loudness Meter** (free LUFS meter)
- **iZotope Insight 2** (professional metering suite)
- **TT Dynamic Range Meter** (free DR meter)
- **Plugin Alliance ADPTR Streamliner** (optimizes for streaming platforms)
- **Waves WLM Plus** (loudness metering)`
      },
      {
        title: 'Format Considerations & Delivery',
        content: `**Master File Specifications:**

**For Streaming Distribution:**
- **Format:** WAV or FLAC (lossless)
- **Bit Depth:** 24-bit (16-bit acceptable, but 24-bit preferred)
- **Sample Rate:** 44.1 kHz or 48 kHz (higher rates okay, but downsampled by platforms)
- **True Peak:** -1 dBTP (prevents clipping during encoding)
- **Integrated LUFS:** -9 to -12 LUFS (mastering will adjust to platform)
- **Headroom:** Leave -6dB headroom for mastering (if sending to mastering engineer)

**Why Not 96 kHz / 192 kHz?**
- Most platforms downsample to 44.1 or 48 kHz
- Human hearing caps at ~20 kHz (Nyquist: 44.1 kHz covers this)
- Higher sample rates create larger files with no audible benefit on streaming
- **Exception:** Tidal MQA supports high-res (but rare)

**Codec Considerations:**

**Lossy Compression (MP3, AAC, Ogg Vorbis):**
- Reduces file size by removing "inaudible" frequencies
- Can introduce artifacts (especially <256 kbps)
- **High frequencies** most affected (cymbals, hi-hats, vocals)
- **Pre-echo** artifacts on transients (kick, snare)

**How to Mix for Lossy Codecs:**
1. **Don't over-brighten:** Excessive 8-12 kHz boost can sound harsh after MP3 encoding
2. **Don't brick-wall limit:** Over-limiting creates inter-sample distortion
3. **Test your mix:** Export to 128 kbps MP3 and listen on cheap earbuds
4. **Stereo width:** Extreme stereo enhancement can phase-cancel in lossy formats

**Exporting Best Practices:**

**For Streaming Release:**
1. Mix to -9 to -11 LUFS integrated, -1 dBTP true peak
2. Export 24-bit WAV or FLAC
3. Send to mastering engineer (or use AI mastering: LANDR, eMastered)
4. Mastering brings to -8 to -10 LUFS, applies final limiting to -1 dBTP
5. Distribute 24-bit WAV via DistroKid, TuneCore, CD Baby

**For YouTube Upload:**
- **Export:** 24-bit WAV, 48 kHz (YouTube's native rate)
- **LUFS:** -11 to -13 LUFS integrated
- **True Peak:** -1 dBTP

**For SoundCloud Upload:**
- **Export:** 24-bit WAV or high-quality MP3 (320 kbps)
- **LUFS:** -8 to -10 LUFS (slightly louder, no normalization)
- **Note:** Free accounts get downsampled to 128 kbps (consider this)

**For DJ Promos / Beatport:**
- **Export:** 24-bit WAV or AIFF
- **LUFS:** -7 to -9 LUFS (DJs want loud, punchy tracks)
- **True Peak:** -0.3 dBTP (maximum loudness without clipping)

**For Client Review / Streaming:**
- **Export:** 320 kbps MP3 or 256 kbps AAC
- **Add metadata:** Song title, artist, album, genre
- **Embed artwork** (3000x3000 px JPEG)

**Metadata & Artwork:**
- **ISRC code:** International Standard Recording Code (for royalty tracking)
- **Album art:** 3000x3000 px minimum (Spotify/Apple requirement)
- **Tags:** Artist, Title, Album, Year, Genre, BPM, Key (helps with playlist placement)

**Final Checklist Before Upload:**
✅ LUFS: -9 to -12 LUFS integrated
✅ True Peak: -1 dBTP
✅ No clipping (check meters throughout track)
✅ Mono compatibility tested
✅ Listened on multiple systems (headphones, car, phone speaker)
✅ Compared to professional references
✅ Metadata embedded (ISRC, tags, artwork)
✅ 24-bit WAV exported`
      }
    ]
  },
  
  learningObjectives: [
    "Understand loudness normalization: how Spotify, Apple Music, YouTube adjust playback to -14 LUFS",
    "Optimize mixes for streaming platforms with platform-specific LUFS targets and codec considerations",
    "Mix for dynamics and impact: preserve transients, create contrast, avoid over-compression",
    "Master format and delivery: 24-bit WAV, -1 dBTP true peak, proper sample rates for streaming",
    "Apply final checklist: LUFS metering, mono compatibility, reference comparison, metadata embedding"
  ],
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
