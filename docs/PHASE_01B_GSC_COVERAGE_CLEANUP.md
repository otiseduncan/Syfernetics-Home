# PHASE 1B - Google Coverage Validation Cleanup

Date: 2026-05-19

## Uploaded GSC Issue Summary

Issue type: `Page with redirect`

URLs from export:
1. `http://syfernetics.com/` (Pending)
2. `https://syfernetics.com/` (Failed)
3. `https://www.syfernetics.com/blog` (Failed)

## Intentional Redirects Preserved

The following canonical-domain redirects are intentional and were preserved:
- `http://syfernetics.com/` -> `https://www.syfernetics.com/`
- `https://syfernetics.com/` -> `https://www.syfernetics.com/`

Implementation location:
- `next.config.js` host redirect rule for `syfernetics.com` to `https://www.syfernetics.com/:path*`

## What Happened To /blog

`/blog` is not an active content section in this phase.

Changes made:
- Removed all `/blog` redirect rules from `next.config.js`.
- Added a server-side route handler at `app/blog/route.ts` that returns `410 Gone` for `GET` and `HEAD`.
- Kept `/blog` out of sitemap.
- Verified there are no active internal links to `/blog` in app/component/data config files.

Notes:
- This is a real server response, not a client-side JavaScript workaround.
- `/blog/*` paths are not redirected by app config and are expected to return `404` unless explicitly handled.

## Sitemap Changes

Sitemap policy for this cleanup phase:
- Include only final canonical homepage URL.

Changes made:
- Updated `lib/siteConfig.ts` so `sitemapRoutes` contains only `/`.
- `app/sitemap.ts` continues to emit URLs from `sitemapRoutes`, so generated sitemap now includes only:
  - `https://www.syfernetics.com/`

Explicitly excluded from sitemap:
- `http://syfernetics.com/`
- `https://syfernetics.com/`
- `/blog`
- Retired/redirecting old URLs

## Canonical and Meta Review

Reviewed metadata, canonical tags, Open Graph, Twitter, robots, and JSON-LD across active routes.

Status:
- `metadataBase` points to `https://www.syfernetics.com`.
- Active pages use self-canonical path alternates (e.g. `/about`, `/services`, etc.) under the canonical domain.
- Open Graph URLs use `https://www.syfernetics.com/...`.
- `robots` sitemap entry points to `https://www.syfernetics.com/sitemap.xml`.
- No active canonical tag reviewed points to `http` or non-`www` URLs.

## Old URLs Found During Repo Audit

Found in active redirect config:
- `/projects/cyber-dashboard`
- `/projects/secure-remote-work`
- `/services/website-design`
- `/services/website-refresh`
- `/services/workflow-automation`
- `/services/business-email`
- `/services/networking-wifi`
- `/services/networking`
- `/services/it-help`
- `/services/security-basics`
- `/services/google-business-profile`
- `/services/care-plans`
- `/founders`
- `/founders/`
- `/privacy-policy`
- `/index.html`

Removed in this phase:
- `/blog`
- `/blog/:path*`
- `/blog/<retired-post>`
- `/blog/penetration-testing-value`

## 404/410/Removal Candidates

Current policy results:
- `/blog`: returns `410 Gone` via app route handler.
- `/blog/*`: expected `404` (no redirect rule).

Retired routes with true replacements (currently redirected):
- `/projects/cyber-dashboard` -> `/projects`
- `/projects/secure-remote-work` -> `/projects`

## Hosting-Level Rule Candidates

No additional hosting-level rule is required for `/blog` because it is now handled at the application level with `410`.

If deployment topology changes away from Next.js route handlers, replicate `/blog` `410` behavior at hosting edge/server config.

## Build/Test Results

- `npm run build`: PASS
  - Production build completed successfully.
  - Build output generated expected routes, including canonical pages such as `/`, `/services`, and `/projects`.
- `npm run lint`: PASS
  - No lint warnings or errors.
- `npm run test`: Not available
  - No `test` script is defined in `package.json`.

Additional path and config checks:
- `/blog` redirects removed from `next.config.js`.
- `app/blog/route.ts` returns server-side `410 Gone` for `GET` and `HEAD`.
- `sitemapRoutes` currently includes only `/`.
- Root canonical-domain host redirect (`syfernetics.com` -> `https://www.syfernetics.com/:path*`) remains in place.
