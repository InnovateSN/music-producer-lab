# Harmony Module - Technical Requirements Document

**Author:** Claude
**Date:** 2025-01-02
**Status:** Planning Phase
**Module:** Harmony & Melody (20 lessons)

---

## 1. OVERVIEW

The Harmony & Melody module requires a **polyphonic piano-roll sequencer** to teach chord progressions and melody writing. The current drum sequencer is monophonic (single-note per instrument), so significant enhancements are needed.

---

## 2. CURRENT SYSTEM (Drum Sequencer)

### Architecture
- **File:** `sequencer.js`
- **Interface:** 16-step grid sequencer
- **Data Model:** Boolean array per instrument (on/off triggers)
- **Audio:** Sample-based playback (kick, snare, hihat, etc.)
- **Interaction:** Click to toggle steps
- **Export:** WAV (audio) + MIDI (basic)

### Strengths
- ✅ Works well for rhythmic patterns
- ✅ Visual and intuitive
- ✅ Proven in production (20+ drum lessons)
- ✅ Export functionality

### Limitations for Harmony
- ❌ **No pitch dimension** (only time)
- ❌ **Monophonic** (can't stack notes for chords)
- ❌ **No note duration control**
- ❌ **Sample-based only** (no synthesized tones)

---

## 3. REQUIRED FEATURES FOR HARMONY

### A. Polyphonic Piano Roll

**What:** 2D grid with **time (X-axis)** and **pitch (Y-axis)**

**Technical Specs:**
- **Pitch Range:** C3 to C6 (3 octaves = 36 notes)
- **Time Resolution:** 16 or 32 steps per bar
- **Note Representation:** MIDI note numbers (C4 = 60, E4 = 64, G4 = 67)
- **Data Structure:**
  ```javascript
  {
    notes: [
      { pitch: 60, start: 0, duration: 4 },  // C4 for 4 steps
      { pitch: 64, start: 0, duration: 4 },  // E4 (same start = chord)
      { pitch: 67, start: 0, duration: 4 }   // G4
    ]
  }
  ```

**UI Requirements:**
- Grid cells for each pitch × time combination
- Click/drag to add notes
- Click again to remove notes
- Visual distinction between chord tones and melody notes
- Highlight currently playing notes

---

### B. Chord Detection System

**What:** Real-time detection of chord names from note sets

**Algorithm:**
```javascript
function detectChord(notes) {
  // Input: [60, 64, 67] (MIDI note numbers)
  // Process:
  // 1. Convert to pitch classes (mod 12): [0, 4, 7]
  // 2. Find root (lowest note): C (0)
  // 3. Calculate intervals: [0, 4, 7] → Major triad
  // 4. Check for extensions: 7th, 9th, etc.
  // Output: "C Major" or "Cmaj" or "C"
}
```

**Chord Library:**
- **Beginner:** Major, Minor triads
- **Intermediate:** Maj7, Min7, Dom7, Sus4
- **Advanced:** Add9, Min11, Maj9, Sus2
- **Expert:** Maj13, Alt chords, Polychords

**UI Display:**
- Show detected chord name above piano roll
- Color-code by chord type (major = blue, minor = purple, etc.)
- "Confidence meter" (e.g., "80% sure this is Cmaj7")

---

### C. Scale Highlighting & Filtering

**What:** Visual guide for which notes are "safe" in current key

**Features:**
- **Scale Modes:**
  - C Major: C D E F G A B
  - A Minor: A B C D E F G
  - D Dorian: D E F G A B C
  - Chromatic: All notes allowed

- **Visual Treatment:**
  - In-scale notes: Full brightness
  - Out-of-scale notes: 30% opacity (grayed out)
  - Option to **hide** out-of-scale notes entirely (beginner mode)

- **UI Toggle:**
  - Dropdown: "Key: C Major" → "Key: G Major"
  - Checkbox: "Show only scale notes"

**Implementation:**
```javascript
const scales = {
  'C Major': [0, 2, 4, 5, 7, 9, 11],  // pitch classes
  'A Minor': [9, 11, 0, 2, 4, 5, 7],
  'D Dorian': [2, 4, 5, 7, 9, 11, 0]
};

function isNoteInScale(midiNote, scaleKey) {
  const pitchClass = midiNote % 12;
  return scales[scaleKey].includes(pitchClass);
}
```

---

### D. Voice Leading Visualization

**What:** Show how chord notes move between changes

**Visual:**
```
Bar 1: Cmaj     Bar 2: Gmaj
C ━━━━━━━━━━━━━ B  (C moves down to B)
E ━━━━━━━━━━━━━ D  (E moves down to D)
G ━━━━━━━━━━━━━ G  (G stays the same - common tone)
```

**Features:**
- Draw lines connecting notes between chords
- Color-code by interval movement:
  - Green: Common tone (stays same)
  - Yellow: Stepwise motion (1-2 semitones)
  - Red: Large leap (3+ semitones)

- Display "smoothness score":
  - Calculate average interval jump
  - "Smooth" = avg < 2 semitones
  - "Jumpy" = avg > 4 semitones

**UI:**
- Toggle: "Show voice leading"
- Works only when 2+ chords are present

---

### E. Audio Engine Enhancements

**Current:** Sample playback (drum sounds)
**Needed:** Polyphonic synthesized/sampled instruments

**Option 1: Multi-sampled Piano**
- Record piano samples for each MIDI note (C3-C6)
- Load 36 audio files
- Pros: Realistic sound
- Cons: Large file size (~5-10MB), loading time

**Option 2: Web Audio API Synthesis**
- Generate tones using `OscillatorNode`
- Simple sine/triangle waves for chords
- Pros: Instant, no file loading, small code
- Cons: Basic/synthetic sound quality

**Recommendation:** Start with **Option 2** (synthesis), upgrade to **Option 1** later

**Implementation (Web Audio API):**
```javascript
function playChord(notes, duration = 1.0) {
  const audioContext = new AudioContext();
  const now = audioContext.currentTime;

  notes.forEach(midiNote => {
    const frequency = 440 * Math.pow(2, (midiNote - 69) / 12);

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'triangle';  // warmer than sine
    oscillator.frequency.value = frequency;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
  });
}

// Example: Play C major chord
playChord([60, 64, 67], 2.0);  // C4, E4, G4 for 2 seconds
```

---

### F. Validation System

**Purpose:** Check if student built the correct chord/progression

**Lesson 1 Example:**
```javascript
// Required: C major triad on beat 1
const validation = {
  requiredNotes: [
    { time: 0, pitches: [60, 64, 67], simultaneous: true }
  ],
  allowExtraNotes: false,
  chordName: 'C Major'
};

function validateExercise(studentNotes, validation) {
  // Check if C-E-G are all present at time=0
  const notesAtTime0 = studentNotes.filter(n => n.start === 0);
  const pitches = notesAtTime0.map(n => n.pitch).sort();

  const expected = validation.requiredNotes[0].pitches.sort();
  const match = JSON.stringify(pitches) === JSON.stringify(expected);

  return {
    correct: match,
    message: match
      ? "✅ Perfect! You built a C major triad."
      : "❌ Not quite. Try C-E-G on beat 1."
  };
}
```

**Advanced Validation (Lesson 11 - Inversions):**
```javascript
// Allow any voicing, just check chord identity
const validation = {
  chordIdentity: 'C Major',  // accept C-E-G in any order/octave
  checkVoiceLeading: true,
  maxIntervalJump: 3  // semitones
};
```

---

## 4. UI COMPONENTS NEEDED

### A. Piano Roll Grid
- 36 rows (pitches) × 16 columns (time steps)
- Toggle note on/off with click
- Drag to create sustained notes (future enhancement)
- Piano keyboard labels on left side (C4, D4, E4, etc.)

### B. Chord Name Display
- Position: Above piano roll
- Shows: "C Major" or "Building..." or "Unknown"
- Updates in real-time as notes are added

### C. Scale Filter Dropdown
- Dropdown menu: C Major, A Minor, G Major, D Dorian, etc.
- Checkbox: "Only show scale notes"
- Position: Top-right of piano roll

### D. Playback Controls
- Play button (loop the bar)
- Stop button
- Tempo slider (80-140 BPM)
- Volume slider

### E. "Check Exercise" Button
- Validates student work
- Shows success/error message
- Unlocks "Next Lesson" button on success

---

## 5. DATA STRUCTURES

### Lesson Config Format
```javascript
export const lessonConfig = {
  lessonKey: "mpl-harmony-1-progress",
  lessonNumber: 1,
  lessonCategory: "Chord Fundamentals",

  sequencer: {
    tempo: 90,
    key: "C Major",
    scale: "Major",
    stepCount: 16,
    pitchRange: { low: 48, high: 72 }  // C3 to C6
  },

  exercise: {
    title: "Build a C Major Triad",
    requiredChord: {
      name: "C Major",
      notes: [60, 64, 67],  // C4, E4, G4
      time: 0,
      simultaneous: true
    }
  },

  validation: {
    type: "exact_chord",
    allowInversions: false,  // Lesson 1 = root position only
    allowExtraNotes: false
  }
};
```

### Student Progress Data
```javascript
{
  lessonKey: "mpl-harmony-1-progress",
  completed: true,
  studentNotes: [
    { pitch: 60, start: 0, duration: 16 },
    { pitch: 64, start: 0, duration: 16 },
    { pitch: 67, start: 0, duration: 16 }
  ],
  attempts: 2,
  timeSpent: 645  // seconds
}
```

---

## 6. PHASED IMPLEMENTATION PLAN

### Phase 1: Content Structure (NOW - Week 1)
- ✅ Create 20 lesson HTML files
- ✅ Create 20 config JS files
- ✅ Write all theory content
- ⬜ Add placeholder text: "Interactive sequencer coming soon"
- ⬜ Include static audio examples (optional)

### Phase 2: Basic Piano Roll (Week 2-3)
- ⬜ Build piano roll UI component
- ⬜ Implement click to add/remove notes
- ⬜ Add Web Audio API synthesis
- ⬜ Test with Lessons 1-3

### Phase 3: Chord Detection (Week 3-4)
- ⬜ Implement chord detection algorithm
- ⬜ Display detected chord name
- ⬜ Add validation system
- ⬜ Test with Lessons 4-7

### Phase 4: Advanced Features (Week 5-6)
- ⬜ Scale highlighting/filtering
- ⬜ Voice leading visualization
- ⬜ Multi-sampled piano sounds
- ⬜ MIDI export
- ⬜ Test with Lessons 8-14

### Phase 5: Expert Features (Week 7+)
- ⬜ Inversion detection
- ⬜ Reharmonization tools
- ⬜ Counter-melody separation
- ⬜ Test with Lessons 15-20

---

## 7. ALTERNATIVE: EXTERNAL TOOL INTEGRATION

If building a custom piano roll is too complex, consider integrating:

### Option A: Ableton Learning Music (Embed)
- URL: https://learningmusic.ableton.com/
- Pros: Professional, already built, free
- Cons: Can't customize for our lessons, requires iframe

### Option B: Tone.js + Custom UI
- Library: https://tonejs.github.io/
- Pros: Excellent audio engine, MIDI support
- Cons: Still need to build piano roll UI

### Option C: Third-Party Embed
- Soundtrap, BandLab, Soundation
- Pros: Full DAW in browser
- Cons: Overkill for simple chord exercises

**Recommendation:** Build custom piano roll using Tone.js for audio

---

## 8. MINIMUM VIABLE PRODUCT (MVP)

For **Phase 1** launch with limited interactivity:

**What Students CAN Do:**
- Read theory content
- See visual diagrams of chords
- Hear pre-rendered audio examples
- Follow "Try this in your DAW" instructions
- Track progress through lessons

**What's DEFERRED:**
- Interactive piano roll sequencer
- Real-time chord detection
- In-browser playback of student work
- Automated validation

**MVP Timeline:** 3-5 days (content creation only)
**Full Interactive:** 4-6 weeks (sequencer development)

---

## 9. TECHNICAL DEPENDENCIES

### Required Libraries (Future)
```json
{
  "tone": "^14.7.77",           // Audio synthesis
  "teoria": "^3.0.0",           // Music theory (chord detection)
  "vexflow": "^4.0.0"           // Music notation (optional)
}
```

### Browser Requirements
- Web Audio API (supported in all modern browsers)
- ES6 modules (already used in current system)
- Canvas or SVG for piano roll rendering

---

## 10. QUESTIONS FOR STAKEHOLDERS

1. **Priority:** Content-first (MVP) or wait for full interactive?
   - **Recommendation:** Content-first

2. **Audio Quality:** Synthesis or multi-sampled piano?
   - **Recommendation:** Start with synthesis, upgrade later

3. **Scope:** All 20 lessons at once or incremental (1-7, then 8-14, then 15-20)?
   - **Recommendation:** Incremental (test beginner lessons first)

4. **External Tools:** Allow "complete in your DAW" or require in-browser?
   - **Recommendation:** Allow DAW completion for now

---

## 11. SUCCESS METRICS

**Content Success (Phase 1):**
- 20 lesson pages published
- Theory content complete and accurate
- Clear learning objectives stated
- DAW application instructions provided

**Technical Success (Phase 2+):**
- Piano roll allows chord building
- Chord detection 95%+ accurate
- Validation system works correctly
- Students can complete lessons end-to-end

**User Success:**
- Students complete Lessons 1-7 (beginner)
- Forum feedback: "I understand chords now"
- DAW transfer: Students post their recreations
- Lesson completion rate: >60%

---

## 12. NEXT STEPS

**Immediate (This Week):**
1. Create `lesson-harmony-1.html` through `lesson-harmony-7.html`
2. Create `configs/lesson-harmony-1.config.js` through `lesson-harmony-7.config.js`
3. Add "Interactive sequencer coming soon - try in your DAW" placeholders
4. Write complete theory sections for each lesson
5. Commit and deploy content structure

**Short-term (Next 2 Weeks):**
1. Prototype basic piano roll UI
2. Implement simple chord playback with Web Audio API
3. Test with 3-5 beta users
4. Iterate based on feedback

**Long-term (Next 2 Months):**
1. Complete full interactive sequencer
2. Add advanced features (voice leading, scale filtering)
3. Integrate with progress tracking system
4. Launch Harmony module officially

---

**Document Status:** Living document - update as development progresses
**Last Updated:** 2025-01-02
**Next Review:** After Phase 1 completion
