# Sample Loops Library

This folder contains audio loops for educational reference in lessons.

## Folder Structure

```
samples/loops/
├── breaks/       - Classic breakbeats (Amen, Apache, Funky Drummer, etc.)
├── dnb/          - Drum & Bass loops and breaks
├── house/        - House/techno drum loops
├── trap/         - Trap/half-time loops
├── boom-bap/     - Hip-hop boom bap loops
└── README.md     - This file
```

## How to Use in Lessons

### 1. Add Loop to Lesson HTML

In the theory section of a lesson, add an audio player:

```html
<div class="exercise-box">
  <h3>Listen: The Amen Break</h3>
  <p class="section-body">
    Listen to the original Amen break at 136 BPM. This 6-second drum solo
    became the foundation of drum and bass.
  </p>

  <!-- Audio player -->
  <div style="margin: var(--space-md) 0;">
    <audio controls style="width: 100%; max-width: 400px;">
      <source src="samples/loops/breaks/amen-break-136bpm.wav" type="audio/wav">
      <source src="samples/loops/breaks/amen-break-136bpm.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <p class="section-body" style="font-size: 0.85rem; color: var(--text-muted);">
    <em>Original tempo: 136 BPM (sped up to 170+ BPM in DnB)</em>
  </p>
</div>
```

### 2. Supported Audio Formats

- **WAV** - Best quality, larger file size
- **MP3** - Good quality, smaller file size
- **OGG** - Alternative format for browser compatibility

Always provide at least 2 formats for browser compatibility.

## File Naming Convention

Use descriptive names with BPM:

```
amen-break-136bpm.wav
funky-drummer-101bpm.mp3
house-loop-128bpm.wav
trap-pattern-140bpm.wav
boom-bap-90bpm.wav
```

## Example: DnB Lesson Integration

For **Lesson 11 (DnB)**, add to the "Amen Break Legacy" section:

```html
<div class="exercise-box">
  <h3>The Amen Break Legacy</h3>

  <!-- Original break -->
  <div style="background: rgba(0,240,255,0.05); padding: var(--space-md); border-radius: 6px; margin: var(--space-md) 0;">
    <strong style="color: var(--accent-cyan);">🎧 Listen: Original Amen Break (136 BPM)</strong>
    <audio controls style="width: 100%; margin-top: var(--space-sm);">
      <source src="samples/loops/breaks/amen-break-136bpm.wav" type="audio/wav">
      <source src="samples/loops/breaks/amen-break-136bpm.mp3" type="audio/mpeg">
    </audio>
  </div>

  <!-- Time-stretched version -->
  <div style="background: rgba(138,43,226,0.05); padding: var(--space-md); border-radius: 6px; margin: var(--space-md) 0;">
    <strong style="color: #8a2be2;">🎧 Listen: Amen Break @ 174 BPM (DnB tempo)</strong>
    <audio controls style="width: 100%; margin-top: var(--space-sm);">
      <source src="samples/loops/dnb/amen-break-174bpm.wav" type="audio/wav">
      <source src="samples/loops/dnb/amen-break-174bpm.mp3" type="audio/mpeg">
    </audio>
  </div>

  <p class="section-body">
    Notice how the break transforms when sped up from 136 to 174 BPM!
  </p>
</div>
```

## Suggested Loops to Add

### Breaks
- `amen-break-136bpm.wav` - The Winstons - "Amen Brother"
- `funky-drummer-101bpm.wav` - James Brown
- `apache-break-118bpm.wav` - Incredible Bongo Band
- `think-break-120bpm.wav` - Lyn Collins

### DnB
- `amen-break-174bpm.wav` - Time-stretched Amen
- `two-step-174bpm.wav` - Classic DnB two-step

### House
- `house-loop-128bpm.wav` - Classic 4/4 house groove
- `techno-loop-130bpm.wav` - Minimal techno

### Trap
- `trap-pattern-140bpm.wav` - Half-time trap beat
- `rolling-hats-140bpm.wav` - Trap hi-hat rolls

### Boom Bap
- `boom-bap-90bpm.wav` - Classic MPC groove
- `dilla-feel-92bpm.wav` - J Dilla style swing

## Legal Notes

Only use:
- Royalty-free samples
- Creative Commons licensed audio
- Public domain recordings
- Self-created loops

Always credit the source in the lesson if required by the license.
