/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 7 - Mastering for Streaming Platforms
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mastering",
  lessonNumber: 7
});

export const lessonConfig = {
  lessonKey: "mpl-mastering-7-progress",
  lessonNumber: 7,
  lessonCategory: "Mastering",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },

  nextLessonUrl: "lesson-mastering-8.html",
  prevLessonUrl: "lesson-mastering-6.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Mastering" }),
    title: "Mastering for Streaming Platforms:",
    titleHighlight: "Spotify, Apple Music & YouTube",
    subtitle: "Optimize your masters for the streaming era—understanding platform-specific loudness normalization, codec artifacts, and delivery specifications"
  },

  exercise: {
    title: "Create a Streaming-Optimized Master",
    description: "Master a track specifically for streaming platforms, hitting the -14 LUFS target, ensuring codec compatibility, and preparing proper metadata for distribution.",
    tip: "Every major streaming platform normalizes loudness. Your goal isn't maximum loudness—it's optimal loudness with preserved dynamics. A master at -14 LUFS with punchy transients will outperform a crushed -8 LUFS master that gets turned down 6 dB and sounds lifeless.",
    steps: [
      '<strong>Set your loudness target</strong> — For streaming (Spotify, Apple Music, YouTube, etc.), target <strong>-14 LUFS integrated</strong>. This is the normalization reference for most platforms.',
      '<strong>Set true peak ceiling</strong> — Set your limiter ceiling to <strong>-1.0 dBTP</strong>. This prevents inter-sample peaks and leaves headroom for codec encoding.',
      '<strong>Apply limiting to target</strong> — Limit until you reach approximately -14 LUFS integrated. Aim for <strong>3-6 dB of gain reduction</strong> maximum. Listen for artifacts.',
      '<strong>Verify loudness range</strong> — Check your Loudness Range (LRA). Streaming-friendly masters typically have <strong>LRA of 5-10 LU</strong>. Too narrow = over-compressed. Too wide = might need more compression.',
      '<strong>Test for codec artifacts</strong> — Export a test bounce, then convert to 128 kbps MP3 or AAC. Listen for artifacts, especially in the high frequencies and transients. If artifacts are severe, reduce high-frequency content slightly.',
      '<strong>Check true peak after conversion</strong> — Codec conversion can introduce new peaks. If your -1 dBTP master clips after AAC conversion, reduce ceiling to <strong>-1.5 dBTP</strong> and re-export.',
      '<strong>Verify mono compatibility</strong> — Streaming on phone speakers is essentially mono. Sum to mono and verify your master still sounds balanced.',
      '<strong>Compare to platform references</strong> — Pull up a well-mastered track on Spotify/Apple Music. Level-match and A/B. Does your master fit with the platform\'s overall sound?',
      '<strong>Export at correct specs</strong> — Export as <strong>24-bit WAV at 44.1 kHz or 48 kHz</strong>. Most distributors accept both. 16-bit is acceptable but 24-bit is preferred.',
      '<strong>Name files correctly</strong> — Use clear naming: "ArtistName_TrackTitle_Master.wav". Avoid special characters. Include version if needed: "_v1", "_v2".',
      '<strong>Document loudness</strong> — Note your final integrated LUFS and true peak in a text file or spreadsheet. This is useful for album consistency and client records.',
      '<strong>Create alternate versions if needed</strong> — Some distributors request specific versions (instrumental, radio edit). Create these from the same mastering session for consistency.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'How Streaming Platforms Handle Your Master',
        content: `Understanding the streaming pipeline helps you optimize your master for the listener's actual experience.

**The Streaming Process:**
1. You upload a high-quality master (WAV, FLAC, or high-bitrate lossy)
2. Platform analyzes loudness (measures integrated LUFS)
3. Platform transcodes to various codecs (AAC, Ogg Vorbis, MP3)
4. Platform applies loudness normalization on playback
5. Listener hears normalized, transcoded version

**Loudness Normalization:**
Most platforms normalize to around -14 LUFS:
- Masters louder than -14 LUFS are turned DOWN
- Masters quieter than -14 LUFS may be turned up (varies by platform)
- Goal: consistent listening experience across all tracks

**Why This Matters for Mastering:**
If you master to -8 LUFS (very loud):
- Platform turns you down 6 dB
- You end up at -14 LUFS anyway
- But with crushed dynamics and limiting artifacts
- You lost dynamics for zero gain

If you master to -14 LUFS:
- Platform plays at unity (no change)
- Full dynamics and transients preserved
- Sounds better than over-limited alternatives

**Platform-Specific Details:**
| Platform | Target | Normalization | Notes |
|----------|--------|---------------|-------|
| Spotify | -14 LUFS | Always on (can be disabled) | Most popular platform |
| Apple Music | -16 LUFS | Sound Check (user can disable) | Slightly quieter target |
| YouTube | -14 LUFS | Always on | Video platform, consistent |
| Tidal | -14 LUFS | User controllable | Hi-res option available |
| Amazon Music | -14 LUFS | Standard normalization | Similar to Spotify |`
      },
      {
        title: 'Codec Considerations: MP3, AAC, and Ogg Vorbis',
        content: `Streaming platforms transcode your master to lossy codecs. Understanding codec behavior helps you master for better results after encoding.

**Common Streaming Codecs:**
- **AAC:** Used by Apple Music, YouTube, Spotify (some tiers)
- **Ogg Vorbis:** Used by Spotify (most tiers)
- **MP3:** Legacy format, still used by some platforms

**What Codecs Do to Your Audio:**
1. Remove "inaudible" frequencies (psychoacoustic model)
2. Reduce file size dramatically (10:1 or more)
3. Introduce artifacts, especially at lower bitrates
4. May create new peaks (inter-sample and encoding artifacts)

**Common Codec Artifacts:**
- **Pre-echo:** Ghost sounds before transients
- **High-frequency loss:** Cymbals, air become dull or "swishy"
- **Stereo imaging changes:** Wide content may narrow
- **Transient smearing:** Attack becomes less precise

**How to Master for Codec Robustness:**

**True Peak Headroom:**
- Leave -1.0 to -1.5 dBTP headroom
- Codec encoding can add 0.5-1 dB of peak
- Prevents clipping after encoding

**High-Frequency Care:**
- Extreme high-end boosting (above 14 kHz) may artifact badly
- Harsh, brittle highs become worse after encoding
- Smooth, natural highs encode better

**Dense Midrange:**
- Very dense midrange (lots of information 1-5 kHz) is hardest to encode
- If your mix is extremely dense, codec will struggle more
- Consider slightly more dynamic range in dense sections

**Testing Your Master:**
1. Export your master at final specs
2. Convert to 128 kbps MP3 or AAC (worst-case scenario)
3. A/B your master vs the lossy conversion
4. Listen for artifacts, especially highs and transients
5. If severe, adjust master and re-test`
      },
      {
        title: 'Platform-Specific Requirements',
        content: `Different platforms have slightly different requirements and behaviors. Here's what you need to know for the major platforms.

**Spotify:**
- Target: -14 LUFS integrated
- True peak: -1.0 dBTP recommended
- Format: 16-bit or 24-bit WAV/FLAC through distributor
- Normalization: Always on by default (user can disable "Loud" mode)
- Codec: Ogg Vorbis (various bitrates by subscription)

**Apple Music:**
- Target: -16 LUFS integrated (Sound Check target)
- True peak: -1.0 dBTP recommended
- Format: 24-bit preferred, supports Apple Digital Masters program
- Normalization: Sound Check (user can disable)
- Codec: AAC 256 kbps, or ALAC for lossless

**YouTube:**
- Target: -14 LUFS integrated
- True peak: -1.0 dBTP recommended
- Format: Accepts most video formats with audio
- Normalization: Always on
- Codec: AAC (various bitrates)

**Tidal:**
- Target: -14 LUFS integrated
- True peak: -1.0 dBTP recommended
- Format: Supports MQA, FLAC, and standard lossy
- Normalization: User controllable
- Codec: Various including lossless options

**Best Practice for All Platforms:**
| Specification | Recommendation |
|---------------|----------------|
| Integrated LUFS | -14 LUFS (±1) |
| True Peak | ≤ -1.0 dBTP |
| Bit Depth | 24-bit preferred |
| Sample Rate | 44.1 kHz or 48 kHz |
| Format | WAV or FLAC |
| Dynamic Range | DR8+ preserved |`
      },
      {
        title: 'The Apple Digital Masters Program',
        content: `Apple Digital Masters (formerly "Mastered for iTunes") is Apple's program for high-quality masters optimized for their encoding.

**What Apple Digital Masters Requires:**
- 24-bit source files (higher resolution = better encoding)
- True peak of -1.0 dBTP or lower
- No clipping or distortion
- Approved by Apple's quality control

**Benefits of Apple Digital Masters:**
- "Apple Digital Master" badge on releases
- Verified quality control
- Optimized AAC encoding
- Marketing differentiation

**Technical Requirements:**
- Bit depth: 24-bit minimum
- Sample rate: 44.1 kHz minimum (higher accepted)
- True peak: Must not exceed -1.0 dBTP
- No codec pre-conditioning (don't degrade before submission)

**How to Get ADM Certification:**
1. Master to ADM specifications
2. Use Apple's afclip tool to verify no clipping after AAC encoding
3. Submit through an ADM-approved distributor
4. Apple reviews and approves

**Should You Care About ADM?**
- If targeting Apple Music specifically, worth pursuing
- Requires no extra mastering work if you're already following best practices (-14 LUFS, -1 dBTP, 24-bit)
- Marketing value of the badge
- Not necessary for good-sounding masters—standard best practices already cover it`
      },
      {
        title: 'Loudness vs Quality: Finding the Balance',
        content: `The streaming era has ended the loudness war, but clients may still request "loud" masters. Here's how to navigate this.

**The Old Paradigm (Pre-Streaming):**
- Louder = competitive on radio, CD, shuffle playlists
- "Loudness war" pushed masters to -6 to -4 LUFS
- Dynamics destroyed, listener fatigue ignored
- No normalization—loud wins

**The New Paradigm (Streaming):**
- Loudness normalized—everyone's at -14 LUFS
- Louder masters get turned down
- Dynamics preserved = sounds better
- Quality wins, not loudness

**Client Education:**
When clients request "loud" masters:
1. Explain streaming normalization
2. A/B demonstrate: a -14 LUFS master vs -8 LUFS master after normalization
3. Show that the dynamic master sounds better
4. Offer both versions if they insist (streaming vs club/DJ)

**When Louder is Appropriate:**
- DJ/club use (no normalization, needs to match other tracks)
- CD release (no normalization)
- Client specifically understands and still wants it
- Specific genre expectations (some EDM intentionally dense)

**Creating Multiple Versions:**
Professional approach: create multiple masters from the same session:
- **Streaming master:** -14 LUFS, -1 dBTP, full dynamics
- **CD/DJ master:** -10 to -8 LUFS, more limiting
- **Apple Digital Master:** Same as streaming, verified specs

This serves all use cases without compromising any single version.`
      },
      {
        title: 'Delivery and Distribution Workflow',
        content: `Getting your streaming-optimized master to listeners requires proper delivery through distribution.

**Distribution Options:**
- **Aggregators:** DistroKid, TuneCore, CD Baby, LANDR
- **Direct deals:** Labels with direct platform relationships
- **Self-distribution:** Limited options, mostly for established artists

**File Delivery Specifications:**
| Specification | Recommended |
|---------------|-------------|
| Format | WAV or FLAC |
| Bit Depth | 24-bit |
| Sample Rate | 44.1 kHz or 48 kHz |
| Channels | Stereo (2-channel) |
| File naming | ArtistName_TrackTitle_Master.wav |

**Metadata Requirements:**
- Track title (correct spelling and formatting)
- Artist name(s)
- Album title
- Track number
- ISRC code (if available)
- Release date
- Genre tags
- Composer/songwriter credits

**Quality Control Before Delivery:**
✅ Loudness verified (-14 LUFS ±1)
✅ True peak verified (≤ -1.0 dBTP)
✅ No clipping or distortion
✅ Correct sample rate and bit depth
✅ Proper file naming
✅ Metadata prepared
✅ Listened through entire track for glitches

**The Final Checklist:**
Before submitting to distributor:
1. Play entire master start to finish—any glitches?
2. Check first and last 2 seconds—clean starts/ends?
3. Verify loudness and peak one more time
4. Confirm file format matches distributor requirements
5. Double-check metadata accuracy

**Album Consistency:**
For albums/EPs, ensure:
- Consistent loudness across all tracks (within 1-2 LUFS)
- Consistent tonal character
- Proper track spacing and fades
- Cohesive listening experience`
      }
    ]
  },

  learningObjectives: [
    "Understand streaming normalization: how platforms measure and adjust loudness to -14 LUFS",
    "Master for codec robustness: leave -1.0 dBTP headroom, avoid extreme high-frequency boosts",
    "Apply platform-specific requirements: Spotify, Apple Music, YouTube specifications",
    "Understand Apple Digital Masters program requirements and benefits",
    "Prepare proper delivery: 24-bit WAV, correct metadata, quality control checklist"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to optimize for streaming.",
    success: "Excellent! You can now create streaming-optimized masters for all major platforms.",
    error: "Review the streaming concepts and try again.",
    alreadyCompleted: "You've mastered Streaming Platform optimization. Ready for Lesson 8!"
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
