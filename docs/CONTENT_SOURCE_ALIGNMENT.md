# Content Source Alignment

## Purpose
Music Producer Lab lesson theory and informational text must align with three canonical source families:

1. **AES (Audio Engineering Society)** – audio engineering standards and terminology.
2. **Ableton Live Documentation** – practical DAW workflow and production procedures.
3. **Wikipedia** – neutral historical context and foundational definitions.

## Implementation approach
To avoid duplicating large `sourceReferences` blocks across 170+ lesson files, canonical sources are centralized in:

- `public/configs/source-references.js`

At runtime, `lesson-engine.js` merges lesson-specific references (if any) with canonical references and exposes them in each lesson's theory section.

## Authoring rules
When updating lessons:
- Use AES-style terminology for engineering concepts (loudness, dynamics, monitoring, gain staging).
- Use Ableton manual patterns for DAW process descriptions.
- Use Wikipedia for historical framing and broad concept summaries.
- Keep claims verifiable and beginner-friendly.

## Review checklist
Before merge:
1. Lesson build works and theory renders.
2. Theory content remains technically coherent.
3. Canonical references are visible in lesson theory output.
