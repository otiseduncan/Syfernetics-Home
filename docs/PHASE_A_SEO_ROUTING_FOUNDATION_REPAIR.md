# PHASE A - SEO Routing Foundation Repair

Date: 2026-05-19

## Backup Folder Path

- `C:\Users\otisd\Projects\Syfernetics-Home\_phaseA_seo_routing_foundation_backup_20260519_045320`

## Files Changed

- `next.config.js`
- `lib/siteConfig.ts`
- `scripts/validate-seo-routing-phase-a.ps1`
- `package.json`

## Redirect Audit Summary

### Redirects Preserved

- Canonical host redirect:
  - `http://syfernetics.com/*` -> `https://www.syfernetics.com/*`
  - `https://syfernetics.com/*` -> `https://www.syfernetics.com/*`
- Legacy one-to-one redirects still aligned to existing destination page:
  - `/projects/cyber-dashboard` -> `/projects`
  - `/projects/secure-remote-work` -> `/projects`
  - `/index.html` -> `/`
  - `/founders` and `/founders/` -> `/about`
  - `/privacy-policy` -> `/privacy`

### Redirects Removed

Removed service-detail-to-parent redirects that hid non-existent detail routes:
- `/services/website-design` -> `/services`
- `/services/website-refresh` -> `/services`
- `/services/workflow-automation` -> `/services`
- `/services/business-email` -> `/services`
- `/services/networking-wifi` -> `/services`
- `/services/networking` -> `/services`
- `/services/it-help` -> `/services`
- `/services/security-basics` -> `/services`
- `/services/google-business-profile` -> `/services`
- `/services/care-plans` -> `/services`

## Sitemap Final URL List

Sitemap is no longer homepage-only. Current canonical routes in sitemap:

- `https://www.syfernetics.com/`
- `https://www.syfernetics.com/about`
- `https://www.syfernetics.com/services`
- `https://www.syfernetics.com/pricing`
- `https://www.syfernetics.com/projects`
- `https://www.syfernetics.com/service-area`
- `https://www.syfernetics.com/faq`
- `https://www.syfernetics.com/contact`
- `https://www.syfernetics.com/privacy`
- `https://www.syfernetics.com/terms`

## Pages Intentionally Excluded From Sitemap

- `/blog` (handled as `410 Gone`)
- `/projects/cyber-dashboard` (redirected legacy URL)
- `/projects/secure-remote-work` (redirected legacy URL)
- Non-canonical root variants (`http://syfernetics.com`, `https://syfernetics.com`)
- `http` URLs and other redirected URLs
- `/index.html`
- Missing routes, including currently missing service detail pages and missing project detail page

## Service URL Status

### /services parent page

- `/services` remains a real live page.
- `/services` is in sitemap.
- `/services` is not redirected.
- `/services` remains canonical to `/services` and indexable.

### Individual Service URL Status

Current repository routing state:
- `app/services/[slug]/page.tsx` is missing.
- Therefore, these URLs are currently not live route files and should return `404` (not redirected):
  - `/services/website-design`
  - `/services/website-refresh`
  - `/services/workflow-automation`
  - `/services/business-email-setup`
  - `/services/networking-wifi`
  - `/services/it-help`
  - `/services/security-basics`
  - `/services/google-business-profile`
  - `/services/care-plans`

Older slug policy notes:
- `/services/business-email` should map to `/services/business-email-setup` only after the destination route exists.
- `/services/networking` should map to `/services/networking-wifi` only after the destination route exists.

## /blog Status

- `/blog` is not redirected.
- `app/blog/route.ts` exists and returns `410 Gone` for `GET` and `HEAD`.
- `/blog` is excluded from sitemap.

## Old Project URL Status

- `/projects/cyber-dashboard` remains redirected to `/projects` (also present in `vercel.json`).
- `/projects/secure-remote-work` remains redirected to `/projects` (also present in `vercel.json`).
- `/projects/exodus-ai-avatar-console` route file is missing and is currently a Phase B blocker.

## Canonical Status

- Preferred canonical domain remains `https://www.syfernetics.com`.
- Root metadata base is canonical domain.
- Active pages reviewed continue to self-canonical via route alternates (for existing pages).
- No active canonical/open graph metadata was found pointing to `http` or non-`www` root domain.

## Robots Status

- `app/robots.ts` points to canonical sitemap:
  - `https://www.syfernetics.com/sitemap.xml`
- Public crawling is not blocked for core pages.

## Dead URLs Confirmed as 404/410

- `410`: `/blog` (via route handler)
- Expected `404` (no route files, no redirect masking):
  - service detail URLs listed above
  - `/projects/exodus-ai-avatar-console` (missing route file)

## Validation Script

Added:
- `scripts/validate-seo-routing-phase-a.ps1`
- `npm` script: `validate:seo:phaseA`

Script checks:
- Sitemap is not homepage-only.
- Sitemap includes all existing live canonical route URLs.
- Sitemap excludes `/blog` (when not a live content page), old project URLs, and redirected/non-canonical paths.
- `/services` is not redirected and remains in sitemap.
- Service detail redirects are not present.
- Root canonical host redirect is configured.
- Internal references to retired URL patterns are flagged.
- Canonical/OpenGraph URL sanity checks for domain/protocol consistency.

## Validation Results

- `npm run validate:seo:phaseA`: PASS
  - Issues: `0`
  - Phase B blockers: `2`
- `npm run build`: PASS
- `npm run lint`: PASS

## Phase B Blockers Only

1. Missing individual service route file:
   - `app/services/[slug]/page.tsx`
   - Impact: canonical service detail URLs are not live yet.
2. Missing project detail route file:
   - `app/projects/exodus-ai-avatar-console/page.tsx`
   - Impact: `/projects/exodus-ai-avatar-console` is not live yet.
