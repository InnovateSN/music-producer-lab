# Architecture Decision Record: Content Delivery Strategy

## Status
Accepted (interim)

## Context
The codebase currently mixes:
- Next.js App Router pages and API routes under `app/`
- A large static HTML lesson surface under `public/`

This hybrid approach accelerated early content publishing but increases maintenance overhead:
- duplicated navigation/layout logic,
- inconsistent rendering and SEO paths,
- repetitive manual content updates across many HTML files.

## Decision
Short term (current release): keep the hybrid architecture to avoid breaking existing lesson URLs and workflows.

Medium term (recommended next sprint): migrate to **Option A: Full Next.js**.

## Rationale
Option A provides:
- shared layouts/components and reduced duplication,
- improved SEO/SSR support,
- safer typed routing/content rendering,
- easier long-term maintenance and testing.

## Consequences
- Existing public HTML content remains operational now.
- Migration planning is required for parity and redirects.
- New lesson work should prioritize reusable Next.js rendering patterns where feasible.

## Follow-up Actions
1. Define lesson content source format (MDX/JSON/CMS).
2. Build `app/lessons/[module]/[lesson]/page.tsx` migration path with redirects.
3. Migrate static lesson pages incrementally with QA checkpoints.
