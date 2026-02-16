# Product Improvement Workflow

**Version**: 1.0
**Last Updated**: 2026-01-21
**Status**: Active

## Overview

This document defines the structured, documentation-first workflow for improving the Music Producer Lab platform. The workflow ensures quality, maintainability, and reviewability by working in small, incremental steps with clear specifications and testing criteria.

## Core Principles

### 1. Documentation First
- **Write specs before code**: Every feature must have a specification document before implementation begins
- **Spec location**: `/docs/specs/FEATURE_NAME.md`
- **Spec contents**: Problem statement, proposed solution, acceptance criteria, test plan

### 2. Small, Reviewable PRs
- **One PR = One coherent feature set**: Each pull request should implement a single, well-defined feature
- **Target size**: 200-500 lines of code changes (excluding generated files)
- **Avoid scope creep**: Stick to the spec; future improvements go in new PRs

### 3. Progressive Enhancement
- **Backward compatibility**: Don't break existing functionality unless explicitly specified
- **Graceful degradation**: Features should work without JavaScript where possible
- **Mobile-first**: Design for mobile, enhance for desktop

### 4. Safari/iOS First
- **Audio constraints**: iOS Safari requires user interaction before audio playback
- **Touch targets**: Minimum 44x44px for interactive elements
- **Viewport handling**: Test on real iOS devices or simulators

### 5. Lightweight & Fast
- **No heavy frameworks**: Vanilla JavaScript preferred; justify any dependencies
- **Minimal bundle size**: Optimize for performance; avoid bloat
- **Web standards**: Use modern web APIs (Web Audio, IndexedDB, etc.)

## Workflow Stages

### Stage 1: Planning & Specification

**Owner**: Product/Engineering
**Deliverables**:
- Specification document in `/docs/specs/`
- Acceptance criteria
- Test plan with manual test steps

**Activities**:
1. Identify problem or improvement opportunity
2. Research existing implementation (if any)
3. Draft specification document with:
   - **Problem Statement**: What needs solving?
   - **Current State**: How does it work today?
   - **Proposed Solution**: What will we build?
   - **Acceptance Criteria**: How do we know it's done?
   - **Test Plan**: How do we verify it works?
   - **Browser Matrix**: Chrome, Firefox, Safari Desktop, iOS Safari
4. Review spec with stakeholders
5. Update spec based on feedback

### Stage 2: Implementation

**Owner**: Engineering
**Deliverables**:
- Working code implementing the spec
- Updated documentation (if architecture changes)
- Self-review completed

**Activities**:
1. Create feature branch: `claude/feature-name-{sessionId}`
2. Implement according to spec
3. Follow existing code patterns:
   - CSS variables for theming (`--accent-cyan`, etc.)
   - localStorage keys prefixed with `mpl-`
   - ES6 modules with clear exports
   - Comments for complex logic
4. Keep changes focused on the spec
5. Run manual tests locally (at minimum)
6. Self-review before pushing

### Stage 3: Quality Assurance

**Owner**: QA/Engineering
**Deliverables**:
- Completed test matrix (see `/docs/qa/TEST_MATRIX.md`)
- Bug reports (if issues found)
- QA sign-off

**Activities**:
1. Execute manual test plan on:
   - Chrome (desktop, latest)
   - Firefox (desktop, latest)
   - Safari (desktop, latest)
   - iOS Safari (mobile, latest)
2. Verify acceptance criteria met
3. Check Definition of Done (see `/docs/qa/DEFINITION_OF_DONE.md`)
4. Report any issues found
5. Re-test after fixes

### Stage 4: Review & Merge

**Owner**: Code reviewer
**Deliverables**:
- Code review feedback
- Approval to merge
- Merged PR

**Activities**:
1. Review code for:
   - Adherence to spec
   - Code quality and readability
   - Security concerns (XSS, injection, etc.)
   - Performance implications
2. Test manually if needed
3. Request changes or approve
4. Merge when approved and tests pass

### Stage 5: Documentation & Communication

**Owner**: Engineering
**Deliverables**:
- Updated project status docs
- Release notes (if applicable)
- User-facing documentation (if needed)

**Activities**:
1. Update `/docs/PROJECT_STATUS_REPORT_*.md`
2. Add entry to changelog (if exists)
3. Update user docs (if feature is user-facing)
4. Communicate changes to team

## Feature Roadmap

The following features are planned in priority order:

### PR #1: Documentation Foundation (THIS PR)
**Status**: In Progress
**Deliverables**:
- `/docs/workflow/PRODUCT_IMPROVEMENT_WORKFLOW.md` (this doc)
- `/docs/specs/THEMES.md`
- `/docs/specs/AUDIO_ENGINE.md`
- `/docs/specs/PROGRESS_SAVING.md`
- `/docs/specs/ANALYTICS.md`
- `/docs/specs/CONTENT_UX.md`
- `/docs/specs/BACKEND_FUTURE.md`
- `/docs/qa/TEST_MATRIX.md`
- `/docs/qa/DEFINITION_OF_DONE.md`

### PR #2: Multi-Theme System (A)
**Status**: Not Started
**Spec**: `/docs/specs/THEMES.md`
**Deliverables**:
- Theme registry with extensible architecture
- UI picker component for theme selection
- Enhanced persistence (theme per page/context)
- CSS token system improvements
- At least 3 themes (Dark Cyberpunk, Light, one new theme)

### PR #3: Audio Engine Improvements (B)
**Status**: Not Started
**Spec**: `/docs/specs/AUDIO_ENGINE.md`
**Deliverables**:
- iOS Safari audio unlock on first user interaction
- Multi-format sample loading strategy (WAV → MP3 → OGG fallback)
- Improved scheduling stability
- Normalization strategy stub (volume consistency)

### PR #4: Progress Saving & Export (C)
**Status**: Not Started
**Spec**: `/docs/specs/PROGRESS_SAVING.md`
**Deliverables**:
- LocalStorage → IndexedDB adapter for larger projects
- Export project as JSON
- Import project from JSON
- Migration from localStorage to IndexedDB

### PR #5: UX Polish (D)
**Status**: Not Started
**Spec**: `/docs/specs/CONTENT_UX.md`
**Deliverables**:
- Loading states for async operations
- Enhanced toast system (dismissible, persistent options)
- Error boundaries (graceful error handling)
- Keyboard accessibility improvements (focus indicators, shortcuts)

### PR #6: Analytics & Error Tracking (E)
**Status**: Not Started
**Spec**: `/docs/specs/ANALYTICS.md`
**Deliverables**:
- Minimal event tracking abstraction
- Privacy-first design (no PII)
- Error logging hook (for debugging production issues)
- Opt-out mechanism

### PR #7: Backend Architecture (F - Future)
**Status**: Not Started
**Spec**: `/docs/specs/BACKEND_FUTURE.md`
**Deliverables**:
- Interface definitions for backend services
- Adapter pattern for API calls
- Stub implementations (no real auth/payment yet)
- Architecture documentation

## Quality Standards

### Code Quality
- **Readability**: Code should be self-documenting; comments for "why" not "what"
- **Consistency**: Follow existing patterns (see `sequencer.js`, `lesson-engine.js`)
- **Security**: No XSS, SQL injection, or other OWASP Top 10 vulnerabilities
- **Performance**: Avoid unnecessary re-renders, debounce expensive operations

### Testing Standards
- **Manual testing required**: All PRs must be manually tested on target browsers
- **Test matrix completion**: See `/docs/qa/TEST_MATRIX.md`
- **Definition of Done**: See `/docs/qa/DEFINITION_OF_DONE.md`

### Documentation Standards
- **Specs are living documents**: Update specs if implementation differs
- **Code comments**: Explain complex logic, browser workarounds, magic numbers
- **Architecture docs**: Update if structure changes

## Anti-Patterns to Avoid

### ❌ Don't: Code before spec
**Problem**: Leads to scope creep, missed requirements, and difficult reviews
**Solution**: Always write the spec first

### ❌ Don't: Large, monolithic PRs
**Problem**: Hard to review, risky to merge, difficult to revert
**Solution**: Break into small, focused PRs

### ❌ Don't: Break existing functionality
**Problem**: Users lose features, bugs are introduced
**Solution**: Test existing features; maintain backward compatibility

### ❌ Don't: Skip manual testing
**Problem**: Bugs reach production, user experience degrades
**Solution**: Complete test matrix for every PR

### ❌ Don't: Add dependencies without justification
**Problem**: Bundle size bloat, maintenance burden
**Solution**: Justify every dependency; prefer vanilla JS

### ❌ Don't: Ignore Safari/iOS constraints
**Problem**: Audio doesn't work on iOS, touch targets too small
**Solution**: Test on Safari/iOS early and often

## Communication & Collaboration

### PR Template
Every PR should include:
```markdown
## Summary
Brief description of what this PR does.

## Spec
Link to `/docs/specs/FEATURE_NAME.md`

## Changes
- Bullet list of key changes

## Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] iOS Safari (mobile)

## Manual Test Steps
1. Step-by-step instructions to test this PR

## Screenshots/Videos
(If UI changes)

## Acceptance Criteria
- [ ] Criterion 1 from spec
- [ ] Criterion 2 from spec

## Definition of Done
- [ ] All items from `/docs/qa/DEFINITION_OF_DONE.md` checked
```

### Code Review Guidelines
**Reviewers should check**:
- Does it match the spec?
- Is the code readable and maintainable?
- Are there security concerns?
- Does it break existing functionality?
- Is testing adequate?

**Review turnaround**: Aim for 24-48 hours

### Issue Tracking
- **Bug reports**: Use GitHub Issues
- **Feature requests**: Create spec first, then issue
- **Questions**: Use Discussions or Slack

## Success Metrics

### Process Metrics
- **PR cycle time**: Spec → Merge (target: <5 days)
- **PR size**: Lines changed (target: <500 lines)
- **Test coverage**: Manual test completion rate (target: 100%)

### Quality Metrics
- **Bug escape rate**: Bugs found in production vs. QA (target: <10%)
- **Revert rate**: PRs requiring revert (target: <5%)
- **Tech debt**: Time spent on maintenance vs. new features (target: <30%)

### User Metrics
- **Feature adoption**: % users using new features (varies by feature)
- **Error rate**: JavaScript errors in production (target: <1% of sessions)
- **Performance**: Page load time, audio latency (maintain or improve)

## Appendix

### Related Documents
- `/docs/qa/TEST_MATRIX.md` - Browser testing checklist
- `/docs/qa/DEFINITION_OF_DONE.md` - Completion criteria
- `/docs/specs/*.md` - Feature specifications
- `/docs/PROJECT_STATUS_REPORT_*.md` - Project health reports

### References
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Changelog
- **2026-01-21**: Initial version 1.0 created (PR #1)
