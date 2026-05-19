# PHASE E - Google Search Console Submission Checklist

Date: 2026-05-19
Scope: Post-Phase D hotfix live deployment recheck and GSC submission prep

## 1) Sitemap Submission

Submit this sitemap in Google Search Console:
- https://www.syfernetics.com/sitemap.xml

Expected result:
- Sitemap accepted
- Discovered URLs match current live routes only

## 2) Priority URLs to Inspect and Request Indexing

Inspect each URL in GSC URL Inspection and request indexing when eligible:
- https://www.syfernetics.com/
- https://www.syfernetics.com/services
- https://www.syfernetics.com/services/website-design
- https://www.syfernetics.com/services/website-refresh
- https://www.syfernetics.com/services/workflow-automation
- https://www.syfernetics.com/services/business-email-setup
- https://www.syfernetics.com/services/networking-wifi
- https://www.syfernetics.com/services/it-help
- https://www.syfernetics.com/services/security-basics
- https://www.syfernetics.com/services/google-business-profile
- https://www.syfernetics.com/services/care-plans
- https://www.syfernetics.com/projects
- https://www.syfernetics.com/projects/exodus-ai-avatar-console
- https://www.syfernetics.com/contact

## 3) Old URLs to Validate as Removed/Not Found

Validate each old URL in GSC URL Inspection to confirm removed status:
- https://www.syfernetics.com/blog
- https://www.syfernetics.com/projects/cyber-dashboard
- https://www.syfernetics.com/projects/secure-remote-work

Expected live behavior baseline:
- /blog -> 410
- /projects/cyber-dashboard -> 404
- /projects/secure-remote-work -> 404

## 4) Coverage Monitoring Notes

Monitor these reports for 1-2 weeks after submission:
- Indexing > Pages (Coverage)
- Sitemaps
- URL Inspection samples

Watch for:
- Priority URLs moving to Indexed
- Old URLs showing Not Found/Removed and not reappearing as valid indexed pages
- No soft-404 flags on live service or project pages
- No Alternate page with proper canonical unexpectedly affecting priority URLs

## 5) Canonical and Crawl Consistency Checks

Confirm ongoing consistency:
- Canonical host remains https://www.syfernetics.com
- robots.txt remains crawl-allow with sitemap reference
- sitemap.xml keeps only https://www.syfernetics.com URLs (no http/non-www entries)
- /blog and retired project URLs remain excluded from sitemap

## 6) Phase Lock Confirmation

This Phase E checklist does not start any new content phase:
- No blog/vlog launch
- No photos added
- No videos added
- No redesign
- No service content changes
- No project content changes
- No new pages created
