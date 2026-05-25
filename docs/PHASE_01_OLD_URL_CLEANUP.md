# PHASE 01 - Old URL Cleanup

Date: 2026-05-18
Scope: Remove stale URL exposure from active code paths, align sitemap/canonicals with clean structure, and preserve safe redirects for retired routes.

## Canonical Structure Target

- /
- /about
- /services
- /pricing
- /projects
- /service-area
- /faq
- /contact
- /privacy
- /terms

## Redirect and Removal Map

| Old URL | Where It Was Referenced | Action Taken | Final Replacement URL | Redirect/Removal Type |
|---|---|---|---|---|
| /projects/cyber-dashboard | next.config.js, vercel.json | Kept as explicit permanent redirect to consolidated projects listing | /projects | App-level redirect (Next.js) and hosting-level redirect (Vercel config) |
| /projects/secure-remote-work | next.config.js, vercel.json | Kept as explicit permanent redirect to consolidated projects listing | /projects | App-level redirect (Next.js) and hosting-level redirect (Vercel config) |
| /services/workflow-automation | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/google-business-profile | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/website-design | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/website-refresh | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/business-email | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/networking-wifi | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/networking | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/it-help | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/security-basics | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /services/care-plans | next.config.js | Kept as explicit permanent redirect to consolidated services listing | /services | App-level redirect (Next.js) |
| /blog | next.config.js | Kept as explicit permanent redirect to current projects listing | /projects | App-level redirect (Next.js) |
| /blog/:path* | next.config.js | Kept as explicit permanent redirect to current projects listing | /projects | App-level redirect (Next.js) |
| /blog/<retired-post> | next.config.js | Kept as explicit permanent redirect to current projects listing | /projects | App-level redirect (Next.js) |
| /blog/penetration-testing-value | next.config.js | Kept as explicit permanent redirect to current services listing | /services | App-level redirect (Next.js) |
| /founders, /founders/ | next.config.js | Kept as explicit permanent redirect to current about page | /about | App-level redirect (Next.js) |
| /index.html | next.config.js and retired preview artifact | Kept canonical redirect in app config; removed retired preview artifact that contained saved /index.html source reference | / | App-level redirect plus stale artifact removal |
| /privacy-policy | New cleanup redirect in next.config.js; old folder path no longer present | Added explicit permanent redirect to clean legal route and moved canonical legal URL to /privacy | /privacy | App-level redirect (Next.js) |

## Files Updated in This Phase

- next.config.js
- lib/siteConfig.ts
- components/Footer.tsx
- app/privacy/page.tsx
- app/terms/page.tsx

## Retired Artifacts Removed

- Xoduz Preview.html
- Xoduz Preview_files/
- _route-cleanup-backup-20260508-054455/
- app/privacy-policy/ (empty legacy folder)

## Sitemap and Canonical Notes

- Sitemap source list now includes only current canonical routes and includes legal routes /privacy and /terms.
- Active page metadata should self-canonical to final public paths.
- Retired routes are not present in sitemap and are only handled by redirects.

## Hosting/App Redirect Guidance

- Next.js app-level redirects are implemented in next.config.js.
- Additional hosting-level redirects for the two retired project-detail URLs remain in vercel.json for compatibility.
- If deployment target changes away from Next.js redirects, port these mappings to hosting edge/server redirect rules.
