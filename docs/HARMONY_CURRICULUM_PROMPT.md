# ChatGPT Prompt: Create Harmony & Melody Curriculum for Music Producer Lab

## Context

You are designing a comprehensive **Harmony & Melody curriculum** for Music Producer Lab, an interactive music production learning platform. This curriculum should follow the same pedagogical structure as our existing Drum & Rhythm module.

## Existing Curriculum Structure

Our platform uses this progression framework:

- **Levels 1-3: Beginner** (Fundamentals)
- **Levels 4-6: Intermediate** (Genre Application)
- **Levels 7-8: Advanced** (Professional Techniques)
- **Levels 9-10: Expert** (Industry-Ready Skills)

Each lesson includes:
- **Interactive sequencer** (students place notes, hear results immediately)
- **Theory explanations** (just-in-time learning, not upfront)
- **Hands-on exercises** (students must complete patterns to progress)
- **Clear learning objectives** (what skill they'll gain)

## Target Module: Harmony & Melody

Create a curriculum covering:

1. **Chord Progressions** (basic triads → extended chords → modal harmony)
2. **Melody Writing** (scale degrees → motifs → phrasing)
3. **Harmonic Rhythm** (chord timing, voice leading)
4. **Genre-Specific Applications** (house, pop, hip-hop, cinematic)

## Your Task

Generate a **complete lesson plan** with 18-22 lessons following this structure:

---

### LESSON TEMPLATE

For each lesson, provide:

#### 1. **Lesson Metadata**
```
Lesson Number: [X]
Title: [Short, action-oriented title]
Slug: lesson-harmony-[X]
Description: [One sentence explaining what student will build/learn]
Duration: [X-X min]
Level: [Beginner/Intermediate/Advanced/Expert]
Depth Level: [1-10]
Badge: [Free/Premium]
```

#### 2. **Learning Objectives**
- Primary skill (e.g., "Build a I-V-vi-IV progression")
- Secondary skill (e.g., "Understand chord function in major key")
- Transferable concept (e.g., "Works in any DAW, any genre")

#### 3. **Exercise Description**
What the student will actually **do** in the interactive sequencer:
- Specific notes to place (e.g., "Place C-E-G on beat 1")
- Chord voicings to create
- Melody patterns to program
- Listening checkpoints ("Does it resolve smoothly?")

#### 4. **Theory Section** (Just-in-Time)
Brief explanations that appear **while** the student works:
- What is a triad? (when they first place one)
- What is the fifth scale degree? (when they use it)
- Why does this progression feel resolved? (after completion)

#### 5. **Sequencer Configuration**
- Tempo: [BPM]
- Key: [e.g., C Major]
- Scale: [Major/Minor/Dorian/etc.]
- Step count: [16/32 steps]
- Required notes/chords: [specific targets]

#### 6. **Progression Path**
How this lesson builds on previous lessons and prepares for next ones.

---

## Specific Requirements

### Beginner Lessons (1-7, Levels 1-3)
Focus on:
- Understanding intervals (root, third, fifth)
- Major vs minor triads
- Basic progressions (I-IV-V, I-V-vi-IV)
- Simple melody over chord tones
- Diatonic scales (major, natural minor)
- Root position chords

**Example Beginner Lesson:**
- Lesson 1: "Build Your First Chord: Major Triad"
  - Student places C-E-G simultaneously
  - Hears a major chord
  - Understands root-third-fifth intervals
  - No theory overload, just "this sounds happy"

### Intermediate Lessons (8-14, Levels 4-6)
Focus on:
- Seventh chords (maj7, min7, dom7)
- Chord inversions
- Voice leading basics
- Modal interchange
- Genre-specific progressions (house, pop, hip-hop)
- Melodic motifs and repetition
- Tension and resolution

**Example Intermediate Lesson:**
- Lesson 10: "House Music Chord Loop: Minor to Major Movement"
  - Build Am7 → Fmaj7 → Cmaj7 → G7 progression
  - Understand ii-IV-I-V in C major
  - Add simple melody using chord tones
  - Learn typical house harmonic rhythm (2-4 bars per chord)

### Advanced Lessons (15-18, Levels 7-8)
Focus on:
- Extended chords (9th, 11th, 13th)
- Modal harmony (Dorian, Mixolydian, Phrygian)
- Borrowed chords and chromatic movement
- Complex voice leading
- Melody harmonization
- Counter-melodies

**Example Advanced Lesson:**
- Lesson 16: "Neo-Soul Progression: Add9 and Sus Chords"
  - Build Cmaj9 → Am11 → Dm9 → G7sus4 → G7
  - Voice lead smoothly between chords
  - Add R&B-style melody with syncopation
  - Understand extended harmony color

### Expert Lessons (19-22, Levels 9-10) [OPTIONAL]
Focus on:
- Reharmonization techniques
- Jazz voicings
- Polytonality
- Film scoring harmony
- Negative harmony concepts

---

## Pedagogical Guidelines

### DO:
✅ Start simple (single chord → progression → melody)
✅ Use familiar songs as reference ("This is the 'Let It Be' progression")
✅ Build incrementally (each lesson adds ONE new concept)
✅ Focus on **doing** over **knowing** ("Place these notes" vs "A triad is...")
✅ Give immediate audio feedback checkpoints
✅ Use genre context (house, pop, cinematic)
✅ Teach by ear first, theory second

### DON'T:
❌ Frontload music theory (no 20-minute explanations before practice)
❌ Use complex terminology without context (don't say "diatonic" until they've heard it)
❌ Make lessons too long (max 20 minutes)
❌ Assume classical training
❌ Skip the "why does this matter?" (always connect to real music)

---

## Output Format

Please provide:

1. **Complete Lesson List** (18-22 lessons)
   - Each with metadata, learning objectives, exercise description

2. **Category Overview**
   ```
   Category: Harmony & Melody
   Description: [2-3 sentence overview of the entire module]
   Total Lessons: [X]
   ```

3. **Suggested Sequencer Features**
   - What UI elements would help teach harmony?
   - Should we show chord names as students build them?
   - Should melody notes highlight which chord tone they are?
   - Any visualization ideas for intervals or voice leading?

4. **Sample Lesson Config** (detailed config for Lesson 1 and Lesson 10)
   Following this structure:
   ```javascript
   {
     lessonKey: "mpl-harmony-1-progress",
     lessonNumber: 1,
     lessonCategory: "Chord Fundamentals",
     hero: {
       eyebrow: "Harmony · Lesson 1",
       title: "Build Your First Chord:",
       titleHighlight: "Major Triad",
       subtitle: "..."
     },
     exercise: {
       title: "...",
       description: "...",
       steps: ["...", "..."]
     },
     // etc.
   }
   ```

---

## Important Notes

- **Key Signature Progression**: Start in C Major (no sharps/flats), gradually introduce other keys
- **Tempo Variation**: Slower for chord building (80-100 BPM), faster for melody (110-130 BPM)
- **Genre Coverage**: Make sure to include house, pop, hip-hop, R&B, cinematic at intermediate+ levels
- **Practical Output**: Every lesson should result in a **usable musical phrase** (not just theory exercises)
- **DAW Transfer**: Always explain how this applies to real production ("In Ableton, you'd open a MIDI clip and...")

---

## Example of Good Lesson Progression (First 3 Lessons)

**Lesson 1: Build Your First Chord - Major Triad**
- Place C-E-G on beat 1
- Understand root-third-fifth
- Hear "happy" sound
- Duration: 8-10 min

**Lesson 2: Major vs Minor - Feeling the Difference**
- Build C major (C-E-G) and C minor (C-Eb-G)
- Change one note, change the emotion
- Understand major/minor third interval
- Duration: 8-10 min

**Lesson 3: Your First Progression - I to V**
- Build C major → G major
- Understand tonic and dominant
- Feel tension and release
- Duration: 10-12 min

(Continue this incremental build...)

---

## Your Output

Please generate the full curriculum now, following the structure above.

Make it:
- **Comprehensive** (covers beginner to advanced)
- **Practical** (every lesson = something they can hear/use)
- **Progressive** (each lesson builds on the last)
- **Genre-aware** (not just classical theory)
- **Hands-on** (emphasis on doing, not reading)

Go! 🎹
