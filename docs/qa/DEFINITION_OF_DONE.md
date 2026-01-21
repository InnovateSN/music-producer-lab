# Definition of Done

**Version**: 1.0
**Last Updated**: 2026-01-21

## Overview

This document defines what "done" means for Music Producer Lab. A feature or PR is not complete until all items in this checklist are satisfied.

## Purpose

- Ensure consistent quality across all PRs
- Prevent technical debt
- Maintain security and performance standards
- Provide clear acceptance criteria
- Enable confident releases

## Definition of Done Checklist

### 1. Specification & Planning

- [ ] Feature has written specification in `/docs/specs/`
- [ ] Acceptance criteria defined and documented
- [ ] Test plan created with manual test steps
- [ ] Technical design reviewed (if architectural change)
- [ ] Dependencies identified and documented
- [ ] Security considerations addressed
- [ ] Performance implications considered

### 2. Implementation

#### Code Quality

- [ ] Code follows existing patterns and conventions
- [ ] Code is readable and maintainable
- [ ] Complex logic has explanatory comments
- [ ] Magic numbers replaced with named constants
- [ ] No commented-out code (use git history instead)
- [ ] No debug `console.log()` statements (use debug.js)
- [ ] No TODO comments (create issues instead)

#### Functionality

- [ ] Feature works as specified
- [ ] All acceptance criteria met
- [ ] Edge cases handled gracefully
- [ ] Error cases handled with user-friendly messages
- [ ] No regressions to existing features

#### Security

- [ ] No XSS vulnerabilities (sanitize user input)
- [ ] No SQL injection (if backend work)
- [ ] No command injection
- [ ] No exposure of sensitive data (API keys, tokens)
- [ ] CORS properly configured (if API work)
- [ ] Authentication/authorization checked (if protected features)
- [ ] OWASP Top 10 considerations addressed

#### Performance

- [ ] No performance regressions
- [ ] Large operations are async/non-blocking
- [ ] Images optimized (if added)
- [ ] CSS/JS files reasonably sized (<50KB per file)
- [ ] No memory leaks (test with DevTools profiler)
- [ ] Animations run at 60fps

#### Accessibility

- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] ARIA labels added where needed
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader compatible
- [ ] No keyboard traps (can navigate away from all elements)
- [ ] Touch targets at least 44x44px (mobile)

### 3. Testing

#### Manual Testing

- [ ] Tested on Chrome (latest stable)
- [ ] Tested on Firefox (latest stable)
- [ ] Tested on Safari (latest stable)
- [ ] Tested on iOS Safari (if audio/touch features)
- [ ] Tested at mobile viewport (375px width)
- [ ] Tested at desktop viewport (1920px width)
- [ ] Tested with slow network (throttle in DevTools)
- [ ] Tested in private/incognito mode
- [ ] Tested with localStorage cleared (fresh state)
- [ ] No console errors or warnings
- [ ] No 404 errors for assets

#### Test Matrix

- [ ] All applicable tests from TEST_MATRIX.md completed
- [ ] Test results documented (Pass/Fail for each browser)
- [ ] Bugs found during testing fixed or documented

#### Regression Testing

- [ ] At least 3 existing features verified (no regressions)
- [ ] Smoke test passed (if near release)

### 4. Documentation

#### Code Documentation

- [ ] JSDoc comments for public functions
- [ ] README updated (if architecture change)
- [ ] Inline comments for complex logic
- [ ] API documentation updated (if API changes)

#### User Documentation

- [ ] User-facing documentation updated (if needed)
- [ ] Help text added for new features (if needed)
- [ ] Changelog entry added (if user-facing change)

#### Technical Documentation

- [ ] Spec updated if implementation differs
- [ ] Architecture docs updated (if structure changes)
- [ ] Migration guide written (if breaking change)

### 5. Code Review

- [ ] Self-review completed before requesting review
- [ ] PR description includes:
  - Summary of changes
  - Link to spec
  - Manual test steps
  - Screenshots/video (if UI changes)
  - Acceptance criteria checklist
- [ ] Code review requested
- [ ] All review comments addressed
- [ ] Approver verified changes work

### 6. Git & Version Control

- [ ] Commits have clear, descriptive messages
- [ ] Commit history is clean (no "fix typo" spam)
- [ ] Branch name follows convention: `claude/feature-name-{sessionId}`
- [ ] Branch is up to date with base branch
- [ ] No merge conflicts
- [ ] No secrets committed (API keys, passwords, etc.)

### 7. Deployment Readiness

- [ ] Feature can be enabled/disabled (if large change)
- [ ] No hard-coded environment-specific values
- [ ] Works on production environment (same as dev)
- [ ] Rollback plan exists (if high-risk change)
- [ ] Monitoring/logging in place (if backend work)
- [ ] Error handling for production scenarios

### 8. iOS Safari Specific (If Audio Features)

- [ ] Audio unlocks on first user interaction
- [ ] No audio context suspension issues
- [ ] Touch targets minimum 44x44px
- [ ] Scrolling works smoothly
- [ ] No viewport issues (fixed positioning)
- [ ] Sample loading works on cellular network

### 9. Analytics & Monitoring (If Applicable)

- [ ] Analytics events added (if feature is trackable)
- [ ] Error tracking integrated (if failure is possible)
- [ ] Performance metrics tracked (if performance-critical)
- [ ] Privacy considerations addressed (no PII tracked)

### 10. Cleanup

- [ ] Unused files removed
- [ ] Debug code removed
- [ ] Temporary test files removed
- [ ] Development-only code removed or gated
- [ ] Dependencies cleaned up (no unused imports)

---

## PR-Specific Checklists

### For Documentation PRs (like PR #1)

- [ ] All documentation files created
- [ ] Markdown formatting correct (no broken links)
- [ ] Examples are accurate and testable
- [ ] Acceptance criteria defined in each spec
- [ ] Test plans included in each spec
- [ ] Browser test matrices included
- [ ] Files organized in correct directories

### For Feature PRs

- [ ] Spec exists and is up to date
- [ ] All acceptance criteria met
- [ ] Test matrix completed
- [ ] Browser compatibility verified
- [ ] Performance acceptable
- [ ] Accessibility standards met
- [ ] Documentation updated

### For Bug Fix PRs

- [ ] Root cause identified and documented
- [ ] Fix verified to resolve bug
- [ ] Regression test added (manual or automated)
- [ ] No new bugs introduced
- [ ] Test matrix completed for affected area
- [ ] Bug report updated with resolution

### For Refactoring PRs

- [ ] Behavior unchanged (no functional changes)
- [ ] All existing tests still pass
- [ ] Performance same or better
- [ ] Code more readable/maintainable
- [ ] Technical debt reduced
- [ ] Documentation updated if needed

---

## Definition of "Ready" (Before Starting Work)

A task is "ready" to be worked on when:

- [ ] Spec written and reviewed
- [ ] Acceptance criteria defined
- [ ] Dependencies identified
- [ ] Design approved (if UI work)
- [ ] Questions answered
- [ ] Priority assigned
- [ ] Assigned to developer

---

## Quality Gates

### Required for Merge

✅ All items in "Definition of Done" checklist completed
✅ At least 1 code reviewer approval
✅ All CI checks passing (if automated tests exist)
✅ Test matrix completed with all Pass results
✅ No open blocking issues

### Optional for Merge (Nice to Have)

⚠️ Automated tests written
⚠️ Performance benchmarks run
⚠️ Accessibility audit passed
⚠️ Security scan passed

---

## Common Pitfalls to Avoid

### ❌ Don't Skip Manual Testing
Even if code looks good, always test in real browsers. Assumptions are dangerous.

### ❌ Don't Test Only in Chrome
Chrome is not representative of all browsers. Safari and iOS Safari are critical.

### ❌ Don't Ignore Console Errors
Even "harmless" warnings can indicate deeper issues. Fix all errors.

### ❌ Don't Commit Commented Code
Use git history instead. Commented code creates confusion.

### ❌ Don't Add Features Not in Spec
Stick to the spec. Additional features go in new PRs.

### ❌ Don't Skip Accessibility
Accessibility is not optional. It's a core requirement.

### ❌ Don't Merge with TODOs
TODOs indicate incomplete work. Create issues for future work instead.

### ❌ Don't Forget iOS Safari
iOS Safari is the #1 blocker for audio features. Test early and often.

---

## Enforcement

### Who Checks?

**Developer** (self-check):
- Implementation checklist
- Manual testing
- Self-review

**Code Reviewer**:
- Code quality
- Test coverage
- Documentation
- Adherence to spec

**QA/Testing** (if available):
- Full test matrix
- Regression testing
- Edge cases

**Product Owner** (if applicable):
- Acceptance criteria met
- User experience acceptable
- Spec requirements fulfilled

### When to Check?

- **Before requesting review**: Self-check all items
- **During review**: Reviewer verifies checklist
- **Before merge**: Final verification
- **After merge**: Spot check in production

---

## Examples

### Example 1: Feature PR (Multi-Theme System)

**Definition of Done**:
- ✅ Spec: `/docs/specs/THEMES.md` created
- ✅ Implementation: Theme registry, picker UI, persistence
- ✅ Testing: Chrome, Firefox, Safari, iOS Safari
- ✅ Test Matrix: All tests passed
- ✅ Accessibility: Keyboard navigation works
- ✅ Performance: No regressions (<5KB added)
- ✅ Documentation: README updated with theme system
- ✅ Code Review: Approved by 1 reviewer
- ✅ Regression: Existing themes still work

**Result**: Ready to merge ✅

### Example 2: Bug Fix PR (Audio Not Playing)

**Definition of Done**:
- ✅ Root Cause: AudioContext not resumed on iOS
- ✅ Fix: Added explicit `resume()` call in user gesture
- ✅ Testing: Verified on iOS Safari 17.1
- ✅ Test Matrix: Audio features tested on all browsers
- ✅ Regression Test: Audio still works on desktop browsers
- ✅ Documentation: Added comment explaining iOS requirement
- ✅ Code Review: Approved

**Result**: Ready to merge ✅

### Example 3: Refactoring PR (Extract Sample Loading)

**Definition of Done**:
- ✅ Spec: Refactoring plan documented
- ✅ Implementation: Sample loading logic extracted to module
- ✅ Testing: All existing audio tests pass
- ✅ Behavior: No functional changes
- ✅ Performance: Same or better
- ✅ Documentation: Updated architecture docs
- ✅ Code Review: Approved

**Result**: Ready to merge ✅

---

## Exceptions

### When Can Requirements Be Waived?

**Rare exceptions may be made for**:
- Urgent hotfixes (security, data loss)
- Documentation-only changes
- Trivial changes (typo fixes)

**Process for exceptions**:
1. Document reason for exception
2. Get approval from project lead
3. Create follow-up issue to complete skipped items
4. Prioritize follow-up issue

**Items that can NEVER be skipped**:
- Security checks
- iOS Safari testing (for audio features)
- Code review
- Manual testing on at least 2 browsers

---

## Continuous Improvement

This document should be reviewed and updated:
- Every 6 months
- When new requirements emerge
- When tooling changes (e.g., adding automated tests)
- When patterns change

**Last Review**: 2026-01-21
**Next Review**: 2026-07-21

---

## Resources

- [PRODUCT_IMPROVEMENT_WORKFLOW.md](/docs/workflow/PRODUCT_IMPROVEMENT_WORKFLOW.md) - Overall workflow
- [TEST_MATRIX.md](/docs/qa/TEST_MATRIX.md) - Browser testing requirements
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Security guidelines
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility guidelines

---

**Remember**: "Done" means production-ready. If you wouldn't feel confident releasing it to users, it's not done.
