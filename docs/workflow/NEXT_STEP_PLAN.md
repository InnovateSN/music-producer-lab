# Next Step Plan (MVP-First)

This plan turns the recent deployment fixes into a focused execution path.

## 1) Freeze MVP scope (single source of truth)
- Confirm that the product stays on the current Next.js stack.
- Keep phase-2 ideas (chatbot/community/advanced automation) in backlog until core flow is stable.
- Publish one canonical scope list in the README + this file.

## 2) Launch-critical checks before every merge
- Run `npm run build` locally.
- Verify pricing copy is consistent in all public pages.
- Confirm required environment variables are configured for Vercel Preview and Production.

## 3) Product baseline to complete this week
- Finalize a single public pricing model and remove contradictory trial messaging.
- Add a clear "How to start" path (Home -> Pricing -> Contact/Sign up).
- Fill priority lesson templates that are still placeholders.

## 4) Privacy and branding hygiene
- Avoid exposing personal phone numbers in repo content unless explicitly intended.
- Keep owner references generic in technical docs.
- Put all contact details in dedicated public channels only.

## 5) Done criteria for the next sprint
A sprint is complete when:
1. Build passes locally and in Vercel Preview.
2. Navigation and pricing are coherent.
3. At least one full learner journey (discover -> evaluate -> start) works end-to-end.
4. No personal contact details appear in technical/internal docs.
