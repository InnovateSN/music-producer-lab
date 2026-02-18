# Music Producer Lab - Issue Tracker

**Last Updated**: February 17, 2026
**QA Testing Session**: In Progress (Session 3)

---

## Project Status (February 17, 2026)

| Area | Completamento | Note |
|------|--------------|-------|
| Infrastruttura Next.js + Auth + DB | 100% | Stabile, deployato su Vercel |
| Audio Engine (sequencer.js) | 95% | Problemi Safari e mobile aperti |
| Teacher Dashboard | 90% | Analytics dashboard mancante |
| Contenuto lezioni | 38% (66/174) | Issue #003 aperto |
| Test (Jest + Playwright) | 0% | Configurati ma nessun test scritto |
| Pagamenti (Stripe) | 0% | Non iniziato |
| Mobile/Touch UX | 30% | Sequencer non ottimizzato |

---

## TODO List (Prioritizzata)

### P0 — Bloccanti (da fare subito)

- [ ] **TODO-01**: `npm install` — node_modules mancanti, blocca sviluppo locale
- [ ] **TODO-02**: Rimuovere `prisma` e `@prisma/client` da `package.json` (legacy non usato, rompe build script con `prisma generate`)

### P1 — Alta priorita (Contenuto lezioni)

- [ ] **TODO-03**: Completare 8 lezioni Theory (0/8 complete) — template da 98-102 linee → target 250+ linee
- [ ] **TODO-04**: Completare 19 lezioni Mixing (1/20 complete) — 91 linee di template per quasi tutti
- [ ] **TODO-05**: Completare 15 lezioni Vocals (0/15 complete) — 91-138 linee di template
- [ ] **TODO-06**: Completare ~17 lezioni Sound Design (parziale) — alcune a 91 linee
- [ ] **TODO-07**: Completare ~15 lezioni Arrangement (parziale) — 164-221 linee, template-heavy
- [ ] **TODO-08**: Completare ~7 lezioni Mastering (parziale) — misto completo/template
- [ ] **#003**: 150+ lezioni sono bare template (in corso — vedi dettaglio sotto)

### P2 — Alta priorita (Monetizzazione)

- [ ] **TODO-09**: Implementare integrazione Stripe (checkout, webhooks, update tabella `invoices`)
  - Variabili env: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - Route da creare: `/api/checkout/`, `/api/webhooks/stripe/`
  - Ref architettura: `docs/BACKEND_FUTURE.md`
- [ ] **TODO-10**: Content gating Free vs Pro (dipende da TODO-09)
  - File coinvolti: `lesson-engine.js`, `curriculum.js`, config files
  - Definire quali lezioni sono Free e quali Pro

### P3 — Media priorita (Qualita tecnica)

- [ ] **TODO-11**: Scrivere test Jest — auth flow, API routes, lesson config validation, sequencer unit tests
- [ ] **TODO-12**: Scrivere test E2E Playwright — lesson playthrough, teacher dashboard, signup→login→lesson
- [ ] **TODO-13**: Ottimizzare Web Audio per Safari 17+ — AudioContext resume policy, prefix webkit
  - File critico: `/public/sequencer.js` (2037 linee, trattare con cura)
- [ ] **TODO-14**: Ottimizzare Mobile/Touch UX — touch event handlers, tap target size, test iOS/Android
  - File: `/public/sequencer.js`, `/public/styles.css`, lesson HTML

### P4 — Bassa priorita (Miglioramenti)

- [ ] **TODO-15**: Audit e cleanup glossary links — scan `href="glossary.html#"` senza anchor valido
- [ ] **TODO-16**: Analytics Dashboard per Teacher/Admin — tabella `analytics_events` pronta, manca la UI
  - File da creare: `/app/teacher/analytics/page.tsx`
- [ ] **TODO-17**: Social sharing per pattern sequencer — share link generation

### Metriche di successo

- [ ] `npm run build` passa senza errori (attualmente bloccato da node_modules mancanti)
- [ ] 174/174 lezioni con contenuto completo (QUALITY_CHECKLIST.md rispettata)
- [ ] Stripe checkout funzionante in staging
- [ ] Test coverage > 60% per API routes
- [ ] Lighthouse score mobile > 80 su campione lezioni
- [ ] Sequencer funzionante su Safari 17 + Chrome + Firefox

---

---

## Critical Issues (Blocking Core Functionality)
> Issues that prevent core features from working

*No critical issues found yet*

---

## High Priority (Significant UX Impact)
> Issues that significantly impact user experience

- [ ] **#003**: ~150+ lessons are bare templates without educational HTML content

---

## Medium Priority (Minor UX Issues)
> Issues that affect usability but don't block functionality

- [x] **#001**: Missing glossary term "hi-hat-roll" - **FIXED**
- [x] **#004**: Emoji in config success messages (7+ configs affected) - **FIXED**

---

## Low Priority (Polish/Enhancement)
> Minor visual issues or potential enhancements

- [x] **#002**: Empty glossary link in lesson-drums-10.html - **NOT REPRODUCED**
- [x] **#005**: Invalid HTML - duplicate `</main>` tags in template-based lessons - **NOT REPRODUCED**

---

## Issue Details

### #001: Missing Glossary Term "hi-hat-roll"
- **Severity**: Medium
- **Pages Affected**: lesson-drums-10.html, possibly others
- **Description**: Lesson links to glossary.html#hi-hat-roll but this term doesn't exist in the glossary
- **Status**: **FIXED** (January 28, 2026)
- **Fix Applied**: Added "hi-hat-roll" definition to glossary.html between "hi-hat" and "high-pass-filter" entries
- **Date Found**: January 27, 2026

### #002: Empty Glossary Link
- **Severity**: Low
- **Pages Affected**: lesson-drums-10.html, possibly others
- **Description**: Found link to "glossary.html#" with no term specified
- **Status**: **NOT REPRODUCED** - Re-tested January 28, 2026. No empty glossary links found in lesson-drums-10.html. All glossary links have valid anchors.
- **Date Found**: January 27, 2026

### #003: Bare Template Lessons Missing Educational HTML Content
- **Severity**: High
- **Pages Affected**: Estimated 150+ of 174 lessons (all categories except some Drums lessons)
- **Description**: Most lesson HTML files are 58-98 line bare templates with no static educational content between the hero and exercise sections. Educational content exists only in config JS files. The Quality Checklist requires 250+ lines of educational HTML including: Key Concepts (4+ cards), Common Mistakes (3+), "Why This Matters" section, and glossary links.
- **Categories Tested (all FAILED)**:
  - Harmony (lesson-harmony-10.html) - 228 lines, has some content but missing required sections
  - Bass (lesson-bass-10.html) - 178 lines, bare template
  - Arrangement (lesson-arrangement-10.html) - 164 lines, bare template
  - Mixing (lesson-mixing-10.html) - 98 lines, bare template
  - Mastering (lesson-mastering-5.html) - 98 lines, bare template
  - Sound Design (lesson-sound-design-10.html) - 98 lines, bare template
  - Ear Training (lesson-ear-5.html) - 58 lines, minimal shell
  - Theory (lesson-theory-4.html) - 58 lines, minimal shell
  - Vocals (lesson-vocals-8.html) - 98 lines, bare template
- **Status**: Open
- **Date Found**: January 28, 2026
- **Fix Needed**: Add complete educational HTML content to each lesson file (Key Concepts, Common Mistakes, Why This Matters, glossary links). This is a major effort affecting 150+ files.

### #004: Emoji in Config Success Messages
- **Severity**: Medium
- **Pages Affected**: sequencer.js, playground-enhancements.js, lesson-bass-20.html
- **Description**: JS files and lesson HTML contained party popper emoji (U+1F389) in success messages. Quality Checklist rule: NO EMOJI ALLOWED.
- **Status**: **FIXED** (February 10, 2026)
- **Date Found**: January 28, 2026
- **Fix Applied**: Removed emoji from success messages in sequencer.js, playground-enhancements.js, and lesson-bass-20.html. Config files in public/configs/ were verified clean (no emoji found).

### #005: Invalid HTML - Duplicate `</main>` Tags
- **Severity**: Low
- **Pages Affected**: Multiple template-based lessons (mixing, mastering, sound-design, vocals patterns confirmed)
- **Description**: HTML files contain duplicate `</main>` closing tags, creating invalid HTML structure
- **Status**: **NOT REPRODUCED** - Re-tested February 10, 2026. No duplicate `</main>` tags found in any lesson HTML files.
- **Date Found**: January 28, 2026
- **Notes**: Issue may have been resolved during previous content updates.

---

## Issue Template

```markdown
### #XXX: [Issue Title]
- **Severity**: Critical/High/Medium/Low
- **Pages Affected**: [List of files]
- **Description**: [Detailed description]
- **Steps to Reproduce**:
  1. Step 1
  2. Step 2
  3. Step 3
- **Expected Behavior**: [What should happen]
- **Actual Behavior**: [What actually happens]
- **Status**: Open/In Progress/Fixed/Verified
- **Date Found**: [Date]
- **Notes**: [Additional context]
```
