# Music Producer Lab - Issue Tracker

**Last Updated**: January 27, 2026
**QA Testing Session**: In Progress

---

## Critical Issues (Blocking Core Functionality)
> Issues that prevent core features from working

*No critical issues found yet*

---

## High Priority (Significant UX Impact)
> Issues that significantly impact user experience

*No high priority issues found yet*

---

## Medium Priority (Minor UX Issues)
> Issues that affect usability but don't block functionality

- [ ] **#001**: Missing glossary term "hi-hat-roll"

---

## Low Priority (Polish/Enhancement)
> Minor visual issues or potential enhancements

- [ ] **#002**: Empty glossary link in lesson-drums-10.html

---

## Issue Details

### #001: Missing Glossary Term "hi-hat-roll"
- **Severity**: Medium
- **Pages Affected**: lesson-drums-10.html, possibly others
- **Description**: Lesson links to glossary.html#hi-hat-roll but this term doesn't exist in the glossary
- **Steps to Reproduce**:
  1. Open lesson-drums-10.html
  2. Find link to "hi-hat-roll" glossary term
  3. Click the link
  4. Page navigates to glossary.html but term doesn't exist
- **Expected Behavior**: Link should navigate to glossary entry for "hi-hat-roll"
- **Actual Behavior**: Link goes to glossary.html but term definition is missing
- **Status**: Open
- **Date Found**: January 27, 2026
- **Fix Needed**: Either add "hi-hat-roll" term to glossary.html OR change link to use existing term like "hi-hat"

### #002: Empty Glossary Link
- **Severity**: Low
- **Pages Affected**: lesson-drums-10.html, possibly others
- **Description**: Found link to "glossary.html#" with no term specified
- **Steps to Reproduce**:
  1. Open lesson-drums-10.html
  2. Search for href="glossary.html#"
  3. Click the link
  4. Page navigates to glossary but doesn't scroll to any specific term
- **Expected Behavior**: Link should include term anchor (#term-name) to scroll to specific definition
- **Actual Behavior**: Link goes to top of glossary page
- **Status**: Open
- **Date Found**: January 27, 2026
- **Fix Needed**: Add proper term anchor to the link or remove link if term is not needed

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
