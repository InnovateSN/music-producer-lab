# Content Source Alignment Standard

## Goal
Ensure all informational and lesson content in Music Producer Lab is aligned to three authoritative source families:

1. **AES (Audio Engineering Society)** — engineering standards, professional terminology, listening practice.
2. **Ableton Live Documentation** — practical DAW workflow, production process, and implementation language.
3. **Wikipedia** — historical and theoretical context for genres, techniques, and foundational concepts.

## Scope
This standard applies to:
- Lesson config files under `public/configs/lesson-*.config.js`
- Explanatory lesson content rendered in static lesson pages
- Informational docs and educational copy for production techniques

## Implementation in codebase
Each lesson config now includes a `sourceReferences` metadata field that records the canonical reference set used by the lesson:
- `https://www.aes.org/`
- `https://www.ableton.com/en/manual/`
- `https://www.wikipedia.org/`

This metadata provides a consistent baseline and makes source alignment auditable across all lessons.

## Editorial guidance
When updating or authoring lessons:
- Use AES terminology for engineering concepts (gain staging, dynamics, loudness, monitoring).
- Use Ableton documentation for practical DAW workflow descriptions and step-by-step production operations.
- Use Wikipedia for neutral historical context and concept summaries (genre origins, timeline context, foundational definitions).
- Keep language beginner-friendly and avoid unverifiable claims.

## Verification checklist
Before merge:
1. `sourceReferences` exists in each touched lesson config.
2. Lesson theory text is technically consistent with engineering standards and DAW workflow reality.
3. Historical/context claims are neutral and non-speculative.
4. Build and tests still pass.
