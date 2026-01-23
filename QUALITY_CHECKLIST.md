# Music Producer Lab - Quality Assurance Checklist

**Roles**: Developer (Claude) + Product Owner (User)

This checklist must be applied to **EVERY PAGE** before considering it complete.

---

## 1. IMAGES & EMOJI VALIDATION ✅

### Rules:
- ❌ **NO EMOJI ALLOWED** - Always use custom images instead
- ✅ Check `/images/` folder for available assets
- ❓ If no suitable image exists → **ASK USER** to create one
- 🔍 If existing images don't fit the section context → **ASK USER** for better asset

### Action Items:
- [ ] Scan page for emoji usage
- [ ] Replace all emoji with images from `/images/`
- [ ] Verify image appropriateness for context
- [ ] Request missing images from user if needed

---

## 2. VISUAL CONSISTENCY (Buttons & Icons) 🎨

### Rules:
- ❌ **NO SVG ICONS** - Always use PNG/image assets
- ✅ All buttons must have **uniform styling** (same border-radius, padding, colors)
- ✅ If discrepancies exist → Standardize to ONE style
- ❓ When choosing between styles → **ASK USER** which they prefer
- 🔍 If too much image repetition → **ASK USER** for more asset variations

### Action Items:
- [ ] Check for SVG usage → Replace with PNG images
- [ ] Compare all buttons on page (primary, secondary, outline)
- [ ] Verify button consistency across sections
- [ ] Document any style conflicts → Ask user for preference
- [ ] Note repeated images → Request variants if needed

---

## 3. CONTENT QUALITY & VALUE 💎

### Rules:
- 🎯 **The Standard**: "Does this page justify the subscription cost?"
- 📝 Content must be:
  - Sufficiently detailed
  - Clear and beginner-friendly
  - Actionable and educational
- ❓ **If I have ANY doubts** → Content can be improved
- 🔄 **Improvement Process**:
  1. I (Developer) make improvements first
  2. Then **ASK USER** to review and enhance the copy

### Action Items:
- [ ] Read page content thoroughly
- [ ] Ask: "Would a beginner understand this?"
- [ ] Ask: "Does this provide real value?"
- [ ] Ask: "Is this worth paying for?"
- [ ] If NO to any → Improve content, then request user review

---

## 4. EXERCISE COHERENCE & FUNCTIONALITY 🎮

### Rules:
- ✅ Exercises must **match the page topic/theme**
- ✅ Sequencer/Piano Roll/Tool must **function correctly**
- ✅ Must include:
  - ✅ Pass/Fail validation
  - ✅ Helpful hints/tips
  - ✅ Clear instructions
- 🔗 **ALL technical terms** must link to `glossary.html#term-id`

### Action Items:
- [ ] Verify exercise relevance to lesson topic
- [ ] Test sequencer/piano roll/interactive tool
- [ ] Confirm pass/fail logic works
- [ ] Check hint/tip presence
- [ ] Scan for technical terms (DAW, BPM, bars, beats, loops, velocity, etc.)
- [ ] Link ALL terms to glossary with proper anchors

### Common Terms to Link:
- DAW → `glossary.html#daw`
- BPM / Tempo → `glossary.html#bpm` / `glossary.html#tempo`
- Bar / Measure → `glossary.html#bar`
- Beat → `glossary.html#beat`
- Loop → `glossary.html#loop`
- Kick / Snare / Hi-Hat → `glossary.html#kick-drum` / `glossary.html#snare-drum` / `glossary.html#hi-hat`
- Velocity → `glossary.html#velocity`
- MIDI → `glossary.html#midi`
- Swing → `glossary.html#swing`
- 4/4 Time → `glossary.html#4-4-time`

---

## 5. GLOSSARY MAINTENANCE 📚

### Rules:
- 🔄 Glossary must stay **up-to-date** with all new terms
- ✅ Every time I add new technical terms to ANY page → Add to glossary
- 🔍 After testing each page → Check if glossary needs updates
- ❓ If term is missing or definition could be clearer → **ASK USER** or improve myself

### Action Items:
- [ ] List all technical terms used on current page
- [ ] Check if each term exists in `glossary.html`
- [ ] Verify definitions are clear and beginner-friendly
- [ ] Add missing terms or improve existing definitions
- [ ] Ensure proper anchor IDs for all entries

---

## 6. UI CLARITY & PURPOSE 🎯

### Rules:
- ✅ **Every UI element must serve a clear purpose**
- ❌ **No redundant or duplicate information**
- ✅ Visual elements should add value, not clutter
- ✅ Icons and legends should clarify, not confuse
- 🔍 **The Test**: "If I remove this element, does the user lose information or understanding?"
  - If NO → Element is redundant, remove it
  - If YES → Element is valuable, keep it

### Action Items:
- [ ] Review all visual elements (icons, legends, labels, helper text)
- [ ] Ask: "Is this element necessary or redundant?"
- [ ] Ask: "Does this clarify or confuse?"
- [ ] Ask: "Is the same information shown elsewhere more clearly?"
- [ ] Remove redundant elements (duplicate legends, unnecessary icons, repeated text)
- [ ] Keep only elements that add unique value

### Examples of Redundancy to Avoid:
- ❌ Legend explaining what colored cells show when colors already make it obvious
- ❌ Icon + text repeating the same information shown in a grid above
- ❌ Helper text that duplicates instructions already present
- ❌ Labels that state the obvious (e.g., "Grid" label on an obvious grid)

### Examples of Good UI Elements:
- ✅ Legends that decode non-obvious symbols or colors
- ✅ Icons that add visual hierarchy or category identification
- ✅ Helper text that provides context not visible elsewhere
- ✅ Labels that clarify ambiguous UI sections

---

## 7. ASK USER WHEN IN DOUBT ❓

### Rules:
- 👨‍💻 **Developer Role (Claude)**: Implement, improve, suggest
- 👨‍💼 **Product Owner Role (User)**: Final decisions, asset creation, copy approval
- ❓ **When to ask**:
  - Image doesn't fit context
  - Button style conflict (which to keep?)
  - Content quality concerns
  - Missing features or functionality
  - Glossary term definitions unclear
  - Any uncertainty about design/UX choices

### Action Items:
- [ ] Document all questions/concerns
- [ ] Present clear options to user (A vs B)
- [ ] Wait for user decision before proceeding
- [ ] Implement user's choice consistently across site

---

## VALIDATION WORKFLOW 🔄

For each page:

1. **Run through checklist items 1-7**
2. **Document findings** (issues, questions, improvements made)
3. **Make improvements** where I have authority (no user approval needed)
4. **Ask user** for decisions on:
   - Missing assets
   - Design conflicts
   - Content enhancements
   - Feature additions
5. **Implement user decisions**
6. **Commit changes** with clear message
7. **Mark page as validated** ✅

---

## PRIORITY ORDER 🎯

When applying this checklist to existing pages, prioritize:

1. **Critical pages** (landing, labs overview, lesson-drums-0)
2. **High-traffic pages** (popular lessons, tools)
3. **Remaining lessons** (systematically, one by one)
4. **Utility pages** (about, contact, download)

---

## NOTES 📝

- This checklist is **mandatory** for all new pages
- Existing pages should be **gradually validated** using this checklist
- If a page passes all 7 checks → Consider it **production-ready** ✅
- Update this document if new quality standards emerge (Section 6 was added 2026-01-23 based on user feedback about UI clarity)
