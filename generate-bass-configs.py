#!/usr/bin/env python3
"""
Generate remaining 9 bass lesson configs (lesson-bass-2 through lesson-bass-10)
"""

lessons = [
    {
        "num": 2,
        "title": "Bass & Kick Relationship",
        "titleHighlight": "Locking the Low End",
        "subtitle": "Understand how bass and kick work together in the low end. Program bass notes that complement, not compete with, your kick pattern. When bass and kick are aligned, they create a powerful, unified foundation.",
        "exercise_title": "Lock Bass with Kick Pattern",
        "exercise_desc": "In this exercise, you'll place bass notes that align with your kick drum pattern. This creates a unified low end where bass and kick feel like one cohesive element rather than two competing sounds.",
        "tip": "Play with the pattern and notice how bass notes that land WITH the kick feel stronger than bass notes that land BETWEEN kicks.",
        "steps": [
            "Place a <strong>C3 note on step 1</strong> (aligns with kick).",
            "Add another <strong>C3 on step 9</strong> (beat 3, also aligns with kick).",
            "Press <strong>Play</strong> and listen to how bass and kick unify on beats 1 and 3.",
            "Click <strong>Check Exercise</strong> when ready."
        ],
        "target_notes": [
            {"pitch": 48, "step": 0, "duration": 1},
            {"pitch": 48, "step": 8, "duration": 1}
        ],
        "theory": [
            {
                "title": "Why Bass and Kick Must Work Together",
                "content": "Bass and kick both occupy low frequencies (40-200 Hz). If they clash, you get:\n\n- **Muddiness**: Both sounds blur together, losing clarity\n- **Phase cancellation**: Waveforms interfere, reducing punch\n- **Weak low end**: Instead of combining power, they subtract from each other\n\nWhen properly aligned (same timing, complementary pitches), they create a unified \"thump\" that's powerful and clear."
            },
            {
                "title": "The Lock Technique",
                "content": "\"Locking\" means placing bass notes at the same time as kick hits:\n\n**Benefits:**\n- Bass and kick reinforce each other (additive)\n- Clearer attack (kick transient + bass body)\n- Less frequency masking\n- Easier to mix (one unified low-end event)\n\n**Rule of thumb:** Start with bass locked to kick, then add movement between kicks once the foundation is solid."
            }
        ],
        "prev": "lesson-bass-1.html",
        "next": "lesson-bass-3.html"
    },
    {
        "num": 3,
        "title": "Simple Bassline:",
        "titleHighlight": "Stepwise Motion",
        "subtitle": "Create your first moving bassline. Use stepwise motion (neighboring notes) to build smooth, musical bass patterns that connect different chords and create forward momentum.",
        "exercise_title": "Build a Stepwise Bassline",
        "exercise_desc": "Stepwise motion means moving to neighboring notes (C → D → E) rather than jumping large intervals. This creates smooth, singable basslines that feel natural and musical.",
        "tip": "Stepwise basslines are easier to follow and remember. They sound 'vocal' because they move like a singer would.",
        "steps": [
            "Place <strong>C3 on step 1</strong> (root note).",
            "Add <strong>D3 on step 5</strong> (one step up).",
            "Add <strong>E3 on step 9</strong> (another step up).",
            "Add <strong>F3 on step 13</strong> (final step up).",
            "Listen to the smooth ascending motion, then click <strong>Check Exercise</strong>."
        ],
        "target_notes": [
            {"pitch": 48, "step": 0, "duration": 1},  # C3
            {"pitch": 50, "step": 4, "duration": 1},  # D3
            {"pitch": 52, "step": 8, "duration": 1},  # E3
            {"pitch": 53, "step": 12, "duration": 1}  # F3
        ],
        "theory": [
            {
                "title": "Stepwise vs Skip Motion",
                "content": "**Stepwise motion**: Moving to adjacent scale degrees (C→D, D→E)\n- Smooth, easy to follow\n- Vocal, singable quality\n- Creates gentle momentum\n\n**Skip motion**: Jumping intervals (C→E, C→G)\n- More dramatic\n- Can sound jumpy or disconnected\n- Requires careful use\n\nMost great basslines use primarily stepwise motion with occasional skips for emphasis."
            }
        ],
        "prev": "lesson-bass-2.html",
        "next": "lesson-bass-4.html"
    },
    {
        "num": 4,
        "title": "House Bass:",
        "titleHighlight": "Repetitive Grooves",
        "subtitle": "Program the classic house bass pattern: repetitive root notes with rhythmic variation. Master the hypnotic, driving bassline that defines house, techno, and electronic dance music.",
        "exercise_title": "Create a House Bass Groove",
        "exercise_desc": "House bass is about repetition and groove, not melody. You repeat the same note but create interest through rhythm and emphasis. This hypnotic quality is what makes people dance.",
        "tip": "In house music, less is more. One note repeated with the right rhythm is more powerful than a complex melody.",
        "steps": [
            "Place <strong>C3 on steps 1, 5, 9, 13</strong> (on every beat).",
            "Add <strong>C3 on the 'and' of beat 2 (step 7)</strong> for syncopation.",
            "Add <strong>C3 on the 'and' of beat 4 (step 15)</strong>.",
            "Play and feel the driving, hypnotic groove."
        ],
        "target_notes": [
            {"pitch": 48, "step": 0, "duration": 1},
            {"pitch": 48, "step": 4, "duration": 1},
            {"pitch": 48, "step": 6, "duration": 1},  # Syncopation
            {"pitch": 48, "step": 8, "duration": 1},
            {"pitch": 48, "step": 12, "duration": 1},
            {"pitch": 48, "step": 14, "duration": 1}   # Syncopation
        ],
        "theory": [
            {
                "title": "The House Bass Philosophy",
                "content": "House music bass is minimalist by design:\n\n- **Repetition = Hypnosis**: Same note looping creates trance-like state\n- **Rhythm over melody**: Pattern and timing matter more than pitch\n- **Locked with kick**: Bass and kick are one unified element\n- **Space for other elements**: Simple bass leaves room for chords, vocals, effects\n\nThis isn't lazy—it's intentional restraint that serves the dance floor."
            }
        ],
        "prev": "lesson-bass-3.html",
        "next": "lesson-bass-5.html"
    },
    {
        "num": 5,
        "title": "808 Bass Basics",
        "titleHighlight": "",
        "subtitle": "Create 808-style bass: sustained low notes with pitch decay. The foundation of trap, hip-hop, and modern bass music. Master the iconic bass sound that dominates contemporary production.",
        "exercise_title": "Program an 808 Bass Pattern",
        "exercise_desc": "808 bass is about long, sustained notes that sit below the kick. Unlike house bass (short, punchy), 808s ring out and occupy space. They're the sub-bass foundation of hip-hop and trap.",
        "tip": "808s should sustain longer than your kick. Let them ring out to fill the space between hits.",
        "steps": [
            "Place a long <strong>C2 note on step 1</strong> (very low, duration 4 steps).",
            "Add <strong>C2 on step 13</strong> for variation (duration 4 steps).",
            "Play and feel the heavy, sustained low end.",
            "Check exercise when ready."
        ],
        "target_notes": [
            {"pitch": 36, "step": 0, "duration": 4},  # C2, long
            {"pitch": 36, "step": 12, "duration": 4}
        ],
        "theory": [
            {
                "title": "What Makes 808 Bass Special",
                "content": "The Roland TR-808 drum machine (1980) had a unique bass drum that producers started using as a bass instrument:\n\n**Characteristics:**\n- Very low pitch (often C1-C2)\n- Long sustain (1-4 beats)\n- Pitch envelope (slight decay)\n- Sub-bass heavy (felt more than heard)\n\n**Modern use:** Hip-hop, trap, future bass, dubstep all use 808-style sustained sub-bass as a foundational element."
            }
        ],
        "prev": "lesson-bass-4.html",
        "next": "lesson-bass-6.html"
    },
    {
        "num": 6,
        "title": "Walking Basslines",
        "titleHighlight": "",
        "subtitle": "Build smooth, walking basslines that move through chord changes. Use passing tones to connect chords musically and create elegant, flowing bass movement.",
        "exercise_title": "Create a Walking Bass Line",
        "exercise_desc": "Walking bass creates smooth connection between chords by using scale tones and chromatic passing notes. It's the foundation of jazz, blues, and many pop styles.",
        "tip": "Think of walking bass as a smooth path between destinations (chord roots). You're creating a journey, not teleporting.",
        "steps": [
            "Start with <strong>C3 on step 1</strong> (root of C chord).",
            "Add <strong>D3 on step 5</strong> (passing tone).",
            "Add <strong>E3 on step 9</strong> (passing tone).",
            "Add <strong>G3 on step 13</strong> (arrival at G chord root).",
            "Listen to the smooth walk from C to G."
        ],
        "target_notes": [
            {"pitch": 48, "step": 0, "duration": 1},
            {"pitch": 50, "step": 4, "duration": 1},
            {"pitch": 52, "step": 8, "duration": 1},
            {"pitch": 55, "step": 12, "duration": 1}
        ],
        "theory": [
            {
                "title": "Walking Bass Principles",
                "content": "**Goal:** Smooth connection between chord roots\n\n**Techniques:**\n1. Stepwise motion (C→D→E)\n2. Arpeggios (C→E→G from C chord)\n3. Chromatic passing (C→C#→D)\n4. Approach tones (leading tone before target)\n\n**Common pattern:** Root → Scale tone → Passing tone → Next root"
            }
        ],
        "prev": "lesson-bass-5.html",
        "next": "lesson-bass-7.html"
    },
    {
        "num": 7,
        "title": "Sidechain Compression Basics",
        "titleHighlight": "",
        "subtitle": "Learn why bass 'ducks' when the kick hits. Program patterns designed for sidechain compression to avoid mud and create the pumping effect that defines modern electronic music.",
        "exercise_title": "Bass Pattern for Sidechain",
        "exercise_desc": "Sidechain compression automatically reduces bass volume when kick hits, preventing frequency masking. You'll create a pattern that works perfectly with this technique.",
        "tip": "Even without actual sidechain compression, programming bass to leave space for kick creates a cleaner mix.",
        "steps": [
            "Place bass notes on the <strong>'and' of each beat (steps 2, 6, 10, 14)</strong>.",
            "Leave beats 1, 5, 9, 13 empty for kick.",
            "Play and hear how bass and kick don't clash.",
            "This creates the 'pumping' rhythm even without compression."
        ],
        "target_notes": [
            {"pitch": 48, "step": 1, "duration": 1},
            {"pitch": 48, "step": 5, "duration": 1},
            {"pitch": 48, "step": 9, "duration": 1},
            {"pitch": 48, "step": 13, "duration": 1}
        ],
        "theory": [
            {
                "title": "What Is Sidechain Compression?",
                "content": "Sidechain compression uses the kick drum to trigger volume reduction in the bass:\n\n**Without sidechain:** Kick + Bass play together → Mud, phase issues\n**With sidechain:** Kick hits → Bass ducks → Kick cuts through clearly\n\nThis creates the 'pumping' effect in EDM, house, techno. The bass seems to 'breathe' with the kick pattern."
            },
            {
                "title": "Programming for Sidechain",
                "content": "Even if you don't have compression, you can program bass to work like it's sidechained:\n\n- Place bass notes BETWEEN kick hits\n- Use shorter note durations\n- Leave the downbeats (1, 5, 9, 13) for kick\n\nThis arrangement technique achieves similar results through timing alone."
            }
        ],
        "prev": "lesson-bass-6.html",
        "next": "lesson-bass-8.html"
    },
    {
        "num": 8,
        "title": "Sub Bass Layering",
        "titleHighlight": "",
        "subtitle": "Layer sub bass (pure sine wave) with mid bass for clarity and weight. Master the two-layer bass technique used in professional EDM, dubstep, and bass music production.",
        "exercise_title": "Create a Layered Bass",
        "exercise_desc": "Professional bass sounds often use two layers: a pure sub (felt) and a mid bass (heard). This separation creates weight without mud.",
        "tip": "Sub bass (C1-C2) is felt in your chest. Mid bass (C2-C4) is heard with clarity. Together they're powerful.",
        "steps": [
            "Place <strong>C2 on step 1</strong> (low sub bass, duration 4).",
            "Add <strong>C3 on step 1</strong> (mid bass, same timing, duration 2).",
            "The C2 provides weight, C3 provides definition.",
            "Play and feel the layered bass punch."
        ],
        "target_notes": [
            {"pitch": 36, "step": 0, "duration": 4},  # C2 sub
            {"pitch": 48, "step": 0, "duration": 2}   # C3 mid
        ],
        "theory": [
            {
                "title": "Why Layer Bass?",
                "content": "**Problem:** Single bass note can be muddy (too low) or thin (too high)\n\n**Solution:** Two layers:\n1. **Sub bass (C1-C2):** Pure sine wave, felt not heard, provides weight\n2. **Mid bass (C2-C4):** Richer waveform (saw/square), heard clearly, provides character\n\n**Result:** Powerful low end (sub) + clear definition (mid) = Professional bass"
            },
            {
                "title": "Production Technique",
                "content": "In a DAW, you'd use:\n- **Sub:** Sine wave synth, no effects, C1-C2 range\n- **Mid:** Sawtooth/square synth, distortion/filter, C2-C4 range\n\nBoth play same notes, different octaves. Sub provides club-system rumble, mid provides home-speaker clarity."
            }
        ],
        "prev": "lesson-bass-7.html",
        "next": "lesson-bass-9.html"
    },
    {
        "num": 9,
        "title": "Bass Fills & Transitions",
        "titleHighlight": "",
        "subtitle": "Add movement between song sections. Create fill patterns that build tension and guide listeners through changes from verse to chorus, breakdown to drop.",
        "exercise_title": "Create a Bass Fill",
        "exercise_desc": "Bass fills are short melodic runs that signal 'something is about to change.' They create anticipation before a new section.",
        "tip": "Fills work best in the last bar before a section change. They build tension and release into the new section.",
        "steps": [
            "Create ascending pattern: <strong>C3 → D3 → E3 → F3 → G3</strong> (steps 8, 10, 12, 14, 16).",
            "This rapid climb signals a transition.",
            "Play and hear how it creates anticipation.",
            "Check exercise when ready."
        ],
        "target_notes": [
            {"pitch": 48, "step": 7, "duration": 1},
            {"pitch": 50, "step": 9, "duration": 1},
            {"pitch": 52, "step": 11, "duration": 1},
            {"pitch": 53, "step": 13, "duration": 1},
            {"pitch": 55, "step": 15, "duration": 1}
        ],
        "theory": [
            {
                "title": "What Are Bass Fills?",
                "content": "Fills are rhythmic/melodic variations that:\n- Signal section changes\n- Build tension\n- Add variety to repetitive patterns\n- Guide listener attention\n\n**Common fill types:**\n- Ascending runs (builds up)\n- Descending runs (drops down)\n- Chromatic walks (half-step movement)\n- Rhythmic variations (syncopation)"
            },
            {
                "title": "When to Use Fills",
                "content": "**Best placement:**\n- Last bar before chorus\n- End of 8 or 16-bar phrase\n- Before a drop/breakdown\n- Transitioning between sections\n\n**Duration:** Usually 1-2 bars maximum. Too long = loses impact."
            }
        ],
        "prev": "lesson-bass-8.html",
        "next": "lesson-bass-10.html"
    },
    {
        "num": 10,
        "title": "Genre Bass:",
        "titleHighlight": "Techno vs Hip-Hop",
        "subtitle": "Compare and contrast techno (driving, hypnotic) vs hip-hop (rhythmic, syncopated) bass approaches. Apply genre-specific techniques to match the style and energy of your track.",
        "exercise_title": "Create Two Genre Bass Patterns",
        "exercise_desc": "You'll program both a techno bass (repetitive, on-beat) and a hip-hop bass (syncopated, rhythmic) to understand how genre shapes bass programming.",
        "tip": "Techno bass locks to the grid. Hip-hop bass plays around the grid. Same notes, different feel.",
        "steps": [
            "<strong>Techno pattern:</strong> C3 on every beat (1, 5, 9, 13).",
            "<strong>Hip-hop pattern:</strong> C3 on beats 1 and 3, plus syncopated hits on steps 7 and 15.",
            "Compare how each pattern creates different energy.",
            "Check exercise to validate your understanding."
        ],
        "target_notes": [
            # This lesson might have two different patterns to try
            {"pitch": 48, "step": 0, "duration": 1},
            {"pitch": 48, "step": 4, "duration": 1},
            {"pitch": 48, "step": 6, "duration": 1},
            {"pitch": 48, "step": 8, "duration": 1},
            {"pitch": 48, "step": 12, "duration": 1},
            {"pitch": 48, "step": 14, "duration": 1}
        ],
        "theory": [
            {
                "title": "Techno Bass Characteristics",
                "content": "**Techno bass:**\n- Repetitive (same note, same rhythm)\n- On-beat (hits with kick on 1, 5, 9, 13)\n- Driving, hypnotic, mechanical\n- Creates forward momentum\n- Minimal variation (intentional)\n\n**Goal:** Become part of the rhythm machine, not a melodic voice"
            },
            {
                "title": "Hip-Hop Bass Characteristics",
                "content": "**Hip-hop bass:**\n- Syncopated (offbeat hits)\n- Rhythmic patterns (varies each bar)\n- Grooves with drums, doesn't just lock\n- Often uses 808-style sustained notes\n- More melodic freedom\n\n**Goal:** Create a rhythmic conversation with drums, support the flow"
            }
        ],
        "prev": "lesson-bass-9.html",
        "next": None
    }
]

# Generate config files
for lesson in lessons:
    filename = f"configs/lesson-bass-{lesson['num']}.config.js"

    with open(filename, 'w') as f:
        f.write(f"""/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass {lesson['num']} - {lesson['title']}
 */

import {{ applyMessagePreset, buildHeroEyebrow }} from "./config-presets.js";

export const lessonConfig = {{
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-{lesson['num']}-progress",
  lessonNumber: {lesson['num']},
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "{lesson.get('next') or 'null'}",
  prevLessonUrl: "{lesson.get('prev') or 'null'}",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {{
    eyebrow: buildHeroEyebrow({{ lessonNumber: {lesson['num']}, categoryLabel: "Bass & Low End" }}),
    title: "{lesson['title']}",
    titleHighlight: "{lesson['titleHighlight']}",
    subtitle: "{lesson['subtitle']}"
  }},

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {{
    tempo: 120,
    stepCount: 16,
    bars: 1,
    noteRange: {{ min: 36, max: 60 }}, // C2 to C4 (bass range)
  }},

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {{
    title: "{lesson['exercise_title']}",
    description: "{lesson['exercise_desc']}",
    tip: "{lesson['tip']}",
    steps: {lesson['steps']}
  }},

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {{
    sections: {lesson['theory']}
  }},

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {{
    targetNotes: {lesson['target_notes']},
    highlightScale: [48, 50, 52, 53, 55, 57, 59, 60], // C major scale in bass range
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  }},

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {{
    initial: "Complete the bass pattern exercise.",
    success: "🎉 Excellent! You've mastered this bass technique.",
    error: "Not quite. Check the target pattern and try again."
  }}),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {{
    sandbox: false,
    sequencerType: 'piano-roll',
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  }}
}};

if (typeof window !== 'undefined') {{
  window.LESSON_CONFIG = lessonConfig;
}}
""")

    print(f"✅ Created {filename}")

print(f"\n✅ Generated {len(lessons)} bass lesson configs!")
