export const LABS = [
  {
    slug: "arrangement",
    title: "Arrangement Lab · Tension & release roadmap",
    access: "free",
    lessonUrl: "lesson-arrangement.html",
    duration: "15–20 min",
    level: "Foundation",
    hero: {
      eyebrow: "Module · Arrangement",
      headline: "Turn 8-bar loops into a song-ready arc.",
      subhead:
        "Lay out a 16-bar skeleton with intro, build, drop, and turnaround so your ideas feel like songs instead of endless loops.",
      pill: "Structure practice",
      focus: "Energy curve",
      takeaway: "Bars, transitions, contour"
    },
    highlights: [
      "Map out the macro energy curve before adding details.",
      "Place anchor moments (intro hit, build lift, drop impact, turnaround).",
      "Use drums, risers, and muting to signal section changes."
    ],
    steps: [
      {
        title: "Sketch the energy curve",
        body:
          "Draw a simple arc: low-energy intro → medium build → highest drop → brief dip (turnaround) → reset.",
        bullets: [
          "Work in 16 bars at 120 BPM; each section = 4 bars.",
          "Label markers: Intro (1–4), Build (5–8), Drop (9–12), Turnaround (13–16).",
          "Decide what should enter/exit per section (drums, bass, lead, FX)."
        ]
      },
      {
        title: "Place arrangement anchors",
        body:
          "Commit to clear signposts so listeners know where they are in the song.",
        bullets: [
          "Intro: start with drums muted or filtered; add a single hook element.",
          "Build: introduce full drums, add a riser or snare build on bars 7–8.",
          "Drop: unmute bass + lead; remove filters; emphasize kick/snare punch.",
          "Turnaround: pull hats/bass for 2 beats, add a short fill, then loop." ]
      },
      {
        title: "Automate movement",
        body:
          "Tiny automation lines glue the sections together and keep the loop breathing.",
        bullets: [
          "Filter: open the low-pass across bars 5–8, snap open on bar 9.",
          "Reverb: automate send up on the turnaround fill so the drop feels dry and close.",
          "Mute: drop the kick on beat 4 of bar 8 for a micro-break before the drop." ]
      }
    ],
    outcomes: [
      "You can read and plan an energy curve for any 16–32 bar section.",
      "You have a reusable template to turn loops into structured drafts.",
      "You know which instruments and automations to pull for contrast." ],
    nextSlug: "mixing"
  },
  {
    slug: "mixing",
    title: "Mixing Lab · Balance, space, clarity",
    access: "premium",
    lessonUrl: "lesson-mixing.html",
    duration: "20–25 min",
    level: "Core",
    hero: {
      eyebrow: "Module · Mixing",
      headline: "Balance your draft so the hook always cuts through.",
      subhead:
        "Set gain staging, carve EQ pockets, and place each element with width and depth so your arrangement translates anywhere.",
      pill: "Critical listening",
      focus: "Balance",
      takeaway: "Gain staging → EQ → compression"
    },
    highlights: [
      "Trim inputs to sit around -12 to -6 dBFS pre-fader.",
      "Prioritize the vocal/lead against drums; mix into light bus glue.",
      "Use subtractive EQ before adding saturation or widening." ],
    steps: [
      {
        title: "Gain stage the mix bus",
        body:
          "Stabilize headroom before any processing so compressors behave predictably.",
        bullets: [
          "Pull all faders down; set kick at -10 dBFS peak as anchor.",
          "Raise snare until backbeat hits similar perceived loudness to kick.",
          "Bring bass until it supports kick without masking (use high-pass sidechain if needed)." ]
      },
      {
        title: "EQ for lanes",
        body:
          "Carve pockets so each element owns a lane instead of stacking in the same band.",
        bullets: [
          "High-pass non-bass elements; keep low end mono below ~120 Hz.",
          "Notch 2–5 kHz in drums to make space for vocal/lead presence.",
          "Sweep 200–400 Hz to remove mud from pads or guitars before boosting air." ]
      },
      {
        title: "Space & glue",
        body:
          "Place sounds front-to-back and side-to-side without washing them out.",
        bullets: [
          "Pan supporting parts symmetrically; keep kick, snare, bass centered.",
          "Use a short room reverb for cohesion and a plate for the lead; EQ the returns.",
          "Light bus comp (1–2 dB GR, slow attack, medium release) to bind the mix." ]
      }
    ],
    outcomes: [
      "A balanced fader starting point you can revisit on every track.",
      "A three-step checklist to fix clarity before chasing plugins.",
      "Confidence that the hook stays intelligible at any playback level." ],
    prevSlug: "arrangement",
    nextSlug: "sound-design"
  },
  {
    slug: "sound-design",
    title: "Sound Design Lab · Character over presets",
    access: "premium",
    lessonUrl: "lesson-sound-design.html",
    duration: "18–22 min",
    level: "Creative",
    hero: {
      eyebrow: "Module · Sound design",
      headline: "Shape a signature lead and bass without getting lost.",
      subhead:
        "Layer oscillators, filters, and movement so your lead and bass carry emotion and sit with the drums you mixed.",
      pill: "Tone crafting",
      focus: "Movement",
      takeaway: "Oscillators → filters → modulation"
    },
    highlights: [
      "Build a lead with complementary waveforms (saw + sine for body).",
      "Use envelope vs. LFO modulation to separate attack shape from movement.",
      "Print one-shot resamples to keep CPU low and commit to decisions." ],
    steps: [
      {
        title: "Design the lead",
        body:
          "Start from init, add a saw for brightness and a sine one octave down for weight.",
        bullets: [
          "Filter around 12 kHz with slight resonance; envelope for 40–80 ms attack.",
          "Add subtle vibrato (LFO to pitch, 0.1–0.2 semitone, rate synced to 1/8).",
          "Use a plate reverb with pre-delay so the transient stays clear." ]
      },
      {
        title: "Anchor the bass",
        body:
          "Keep low end mono, controlled, and supportive of the kick timing.",
        bullets: [
          "Sine or triangle main oscillator; low-pass ~80–120 Hz to remove buzz.",
          "Short pitch envelope for click; optional parallel distortion for harmonics.",
          "Sidechain to kick or use volume ducking envelope for consistent pump." ]
      },
      {
        title: "Commit and texture",
        body:
          "Print stems and add movement without losing the core tone.",
        bullets: [
          "Resample the lead riff; add chorus with low mix for stereo width.",
          "Automate noise/air layer in builds; mute for drops to reveal punch.",
          "Bounce a one-shot of the bass for fills and slides." ]
      }
    ],
    outcomes: [
      "You can sculpt leads/bass that translate from headphones to clubs.",
      "You know when to modulate vs. automate for emotion and clarity.",
      "You have resampled assets ready for arrangement tweaks." ],
    prevSlug: "mixing",
    nextSlug: "vocals"
  },
  {
    slug: "vocals",
    title: "Vocal Processing Lab · Intelligibility and vibe",
    access: "premium",
    lessonUrl: "lesson-vocals.html",
    duration: "16–20 min",
    level: "Core",
    hero: {
      eyebrow: "Module · Vocal processing",
      headline: "Make the vocal sit on top without harshness.",
      subhead:
        "Clean, compress, de-ess, and place the vocal in the same space as your mix while keeping emotion intact.",
      pill: "Lead focus",
      focus: "Presence",
      takeaway: "Clean → control → vibe"
    },
    highlights: [
      "Stage processing: clean-up EQ before compression, then tone shaping.",
      "Serial compression (fast then slow) for controlled dynamics.",
      "Send automation for throws instead of over-washing the main take." ],
    steps: [
      {
        title: "Prep and clean",
        body:
          "Remove distractions before tone work so every plugin serves clarity.",
        bullets: [
          "Clip-gain breaths down; crossfade edits to avoid clicks.",
          "High-pass around 80–120 Hz; notch room resonances with narrow cuts.",
          "De-ess ~5–8 kHz with gentle reduction; avoid lisping." ]
      },
      {
        title: "Control dynamics",
        body:
          "Use two compressors lightly instead of one heavy-handed stage.",
        bullets: [
          "Fast FET: 2–3 dB GR catching peaks (attack 3–10 ms, fast release).",
          "Opto/VCA: 1–2 dB GR with slower attack to keep phrasing natural.",
          "Ride fader or use vocal rider for syllable consistency before sends." ]
      },
      {
        title: "Place in the mix",
        body:
          "Keep the vocal forward with depth cues that don’t mask consonants.",
        bullets: [
          "Short slap delay (80–120 ms) panned opposite ad-lib; low-pass the return.",
          "Plate reverb with pre-delay; duck with sidechain comp from the dry vocal.",
          "Automate delay/reverb throws on section transitions, mute in verses for intimacy." ]
      }
    ],
    outcomes: [
      "A repeatable vocal chain that survives different microphones and rooms.",
      "Confidence balancing intelligibility with creative effects.",
      "Automation habits that support arrangement peaks instead of fighting them." ],
    prevSlug: "sound-design",
    nextSlug: "mastering"
  },
  {
    slug: "mastering",
    title: "Mastering Lab · Translate and release",
    access: "premium",
    lessonUrl: "lesson-mastering.html",
    duration: "14–18 min",
    level: "Finish",
    hero: {
      eyebrow: "Module · Mastering",
      headline: "Final polish without destroying dynamics.",
      subhead:
        "Prep your mix, control headroom, and apply gentle processing so the track holds up on streaming and in the club.",
      pill: "Release prep",
      focus: "Translation",
      takeaway: "Prep → tone → loudness"
    },
    highlights: [
      "Leave -6 dBFS peak/-10 to -8 LUFS pre-master headroom.",
      "Broad EQ moves before saturation; avoid chasing volume too early.",
      "Meter LUFS-I, true peak, and mono compatibility before exporting." ],
    steps: [
      {
        title: "Prep the mixdown",
        body:
          "Export with minimal mix bus processing so mastering tools can work cleanly.",
        bullets: [
          "Disable brickwall limiters; keep gentle bus comp if it’s part of the vibe.",
          "Check that kick/bass aren’t clipping; fix clicks/pops before exporting.",
          "Print at 24-bit WAV, same sample rate as session." ]
      },
      {
        title: "Tone and control",
        body:
          "Apply small, musical moves that enhance what’s already good.",
        bullets: [
          "Shelf up/down 1–2 dB if the mix is dark/bright; avoid narrow boosts.",
          "Multi-band only if a band consistently jumps (e.g., 200–400 Hz mud).",
          "Add 1–2% tape or tube saturation for density, monitoring gain staging." ]
      },
      {
        title: "Loudness and QC",
        body:
          "Hit target levels without pumping and confirm translation.",
        bullets: [
          "Limiter: aim for -9 to -7.5 LUFS-I, true peak under -1 dBTP.",
          "Check mono fold-down for bass/lead balance; fix phasey widening if needed.",
          "Print reference versions (streaming, club) and label them clearly." ]
      }
    ],
    outcomes: [
      "You can prep and deliver a master that clears platform specs.",
      "You know when to stop tweaking and trust the mix/balance.",
      "You have a QC checklist before sharing with collaborators or clients." ],
    prevSlug: "vocals"
  }
];
