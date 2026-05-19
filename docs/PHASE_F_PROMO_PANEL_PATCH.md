# PHASE F Promo Panel Patch

Date: 2026-05-19

## Scope

Focused homepage visual/content patch only.

## Files Changed

- app/page.tsx
- docs/PHASE_F_PROMO_PANEL_PATCH.md

## Where The Panel Was Added

Replaced the homepage hero-side placeholder block in `app/page.tsx` that previously displayed:
- Project Visual
- Project visual coming soon
- Final project imagery will be added in a later media pass.

The replacement is in the same visual panel position (right-side hero card area) so layout footprint remains stable.

## Exact Promo Copy Used

Label:
- Special Offer

Headline:
- Free 20-Minute Website & Workflow Review

Supporting text:
- Get a quick review of your website, business workflow, or technology setup and receive practical recommendations for your next step.

Feature cards:
1. Website clarity
   - Find layout, message, and CTA gaps.
2. Workflow friction
   - Spot repetitive steps worth simplifying.
3. Practical next steps
   - Leave with focused recommendations.

CTA:
- Book an Inquiry

Small note:
- For Central Georgia small businesses

Optional bottom line:
- Practical websites, automation, and IT help built for businesses that need tools they can actually use.

## CTA Target

- /contact

## Validation Results

- npm run build: PASS
- npm run lint: PASS
- npm run validate:seo:phaseA: PASS
- npm run validate:seo:phaseB: PASS

## Local Route Checks

After clearing stale local build artifacts and restarting dev server, these local routes returned 200:
- /
- /projects
- /projects/exodus-ai-avatar-console
- /contact
- /sitemap.xml

Promo CTA behavior:
- "Book an Inquiry" from homepage promo panel navigates to /contact locally.

## SEO/Media Safety Confirmation

- No SEO routing files changed:
  - app/sitemap.ts unchanged
  - lib/siteConfig.ts unchanged
  - next.config.js unchanged
  - vercel.json unchanged
- No video was added.
- No photo/media assets were added.
- No old deleted media references were restored in active source files.
- Approved Exodus image remained intact and unchanged.

## Phase Lock Compliance

Confirmed:
- No blog/vlog work started
- No photos added
- No videos added
- No full-site redesign
- No service-page content changes
- No project-content changes outside the homepage promo panel replacement
- No Google Search Console docs modified

## Git / Push Status

- No Git push performed for this phase patch.

---

## Phase F Hotfix - Responsive Formatting

Issue found:
- The promo panel could clip because the outer promo card wrapper used rigid square sizing (`aspect-square`) combined with `overflow-hidden`, which constrained dynamic text/card content at some viewport sizes.

Fix applied in `app/page.tsx`:
- Removed rigid square/overflow constraint from the promo wrapper.
- Allowed natural height expansion for promo content.
- Increased and tuned inner spacing for cleaner border-safe text layout.
- Adjusted feature-card grid breakpoints:
   - mobile: 1 column
   - tablet: 2 columns
   - wide desktop: 3 columns
- Adjusted CTA row breakpoints:
   - mobile: stacked vertically
   - desktop: horizontal row
- Set CTA button to full width on mobile (`w-full`) and auto width on desktop.
- Kept all approved promo copy unchanged.

Validation results after hotfix:
- npm run build: PASS
- npm run lint: PASS
- npm run validate:seo:phaseA: PASS
- npm run validate:seo:phaseB: PASS

Hotfix compliance:
- No blog/vlog work added.
- No photos added.
- No videos added.
- No SEO routing changes made.
- No Git push performed.
