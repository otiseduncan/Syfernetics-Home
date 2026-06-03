$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$issues = New-Object System.Collections.Generic.List[string]
$blockers = New-Object System.Collections.Generic.List[string]

function Add-Issue {
  param([string]$Message)
  $issues.Add($Message)
}

function Add-Blocker {
  param([string]$Message)
  $blockers.Add($Message)
}

$nextConfigPath = Join-Path $repoRoot 'next.config.js'
$siteConfigPath = Join-Path $repoRoot 'lib/siteConfig.ts'
$robotsPath = Join-Path $repoRoot 'app/robots.ts'
$blogRoutePath = Join-Path $repoRoot 'app/blog/route.ts'

$nextConfig = [System.IO.File]::ReadAllText($nextConfigPath)
$siteConfig = [System.IO.File]::ReadAllText($siteConfigPath)
$robotsConfig = [System.IO.File]::ReadAllText($robotsPath)

# Core redirect checks
if ($nextConfig -notmatch "has:\s*\[\{\s*type:\s*'host',\s*value:\s*'syfernetics\.com'\s*\}\]") {
  Add-Issue 'Missing canonical host redirect matcher for syfernetics.com in next.config.js.'
}
if ($nextConfig -notmatch "destination:\s*'https://www\.syfernetics\.com/:path\*'") {
  Add-Issue 'Missing canonical host redirect destination https://www.syfernetics.com/:path* in next.config.js.'
}
if ($nextConfig -match "source:\s*'/services'\s*,\s*destination") {
  Add-Issue '/services should not be redirected.'
}
if ($nextConfig -match "source:\s*'/services/(?!business-email'|networking')[^']+'\s*,\s*destination") {
  Add-Issue 'Service detail redirects are present in next.config.js and should be removed for Phase A.'
}
if ($nextConfig -match "source:\s*'/blog[^']*'\s*,\s*destination") {
  Add-Issue '/blog should not be redirected to unrelated pages in Phase A.'
}

# Extract sitemapRoutes
$routeMatches = [regex]::Matches($siteConfig, "export const sitemapRoutes = \[(?<body>[\s\S]*?)\]")
if ($routeMatches.Count -eq 0) {
  Add-Issue 'Could not parse sitemapRoutes from lib/siteConfig.ts.'
  $sitemapRoutes = @()
} else {
  $body = $routeMatches[0].Groups['body'].Value
  $sitemapRoutes = [regex]::Matches($body, "'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
}

if ($sitemapRoutes.Count -le 1) {
  Add-Issue 'sitemapRoutes is homepage-only or empty. It must contain all existing live canonical pages.'
}

$requiredTopLevelRoutes = @(
  '/',
  '/about',
  '/services',
  '/pricing',
  '/projects',
  '/service-area',
  '/faq',
  '/contact',
  '/privacy',
  '/terms'
)

$existingServiceRoutes = @()
$expectedServiceSlugs = @(
  'website-design',
  'website-refresh',
  'workflow-automation',
  'business-email-setup',
  'networking-wifi',
  'it-help',
  'security-basics',
  'google-business-profile',
  'care-plans'
)

$serviceDynamicPath = Join-Path $repoRoot 'app/services/[slug]/page.tsx'
if (Test-Path -LiteralPath $serviceDynamicPath) {
  foreach ($slug in $expectedServiceSlugs) {
    $existingServiceRoutes += "/services/$slug"
  }
} else {
  Add-Blocker 'Individual service route file app/services/[slug]/page.tsx is missing; service detail URLs are not live yet.'
}

$existingProjectRoutes = @()
$xoduzPath = Join-Path $repoRoot 'app/projects/xoduz-ai-avatar-console/page.tsx'
if (Test-Path -LiteralPath $xoduzPath) {
  $existingProjectRoutes += '/projects/xoduz-ai-avatar-console'
} else {
  Add-Blocker 'Project detail route app/projects/xoduz-ai-avatar-console/page.tsx is missing; /projects/xoduz-ai-avatar-console is not live yet.'
}

$expectedExistingRoutes = @($requiredTopLevelRoutes + $existingServiceRoutes + $existingProjectRoutes)

foreach ($route in $expectedExistingRoutes) {
  if ($sitemapRoutes -notcontains $route) {
    Add-Issue "sitemapRoutes is missing existing route $route"
  }
}

$mustNotAppear = @(
  '/blog',
  '/projects/cyber-dashboard',
  '/projects/secure-remote-work',
  '/projects/exodus-ai-avatar-console',
  '/index.html',
  'http://syfernetics.com',
  'https://syfernetics.com'
)

foreach ($bad in $mustNotAppear) {
  if ($sitemapRoutes -contains $bad) {
    Add-Issue "sitemapRoutes includes excluded URL or path: $bad"
  }
}

if ($sitemapRoutes -contains '/services') {
  Write-Host '[OK] /services is included in sitemapRoutes.' -ForegroundColor Green
} else {
  Add-Issue '/services must remain in sitemapRoutes.'
}

# Blog behavior checks
if (Test-Path $blogRoutePath) {
  $blogRoute = [System.IO.File]::ReadAllText($blogRoutePath)
  if ($blogRoute -notmatch 'status:\s*410') {
    Add-Issue 'app/blog/route.ts exists but does not clearly return 410 status.'
  }
} else {
  Add-Blocker 'app/blog/route.ts is missing. /blog should remain 404 or be implemented as 410.'
}

# Robots check
if ($robotsConfig -notmatch "sitemap:\s*'https://www\.syfernetics\.com/sitemap\.xml'") {
  Add-Issue 'robots sitemap is not set to https://www.syfernetics.com/sitemap.xml.'
}

# Internal links to retired URLs in content/config files (ignore redirect configs/docs/scripts/backups)
$scanRoots = @(
  (Join-Path $repoRoot 'app'),
  (Join-Path $repoRoot 'components'),
  (Join-Path $repoRoot 'data'),
  (Join-Path $repoRoot 'lib')
)
$patterns = @(
  '/projects/cyber-dashboard',
  '/projects/secure-remote-work',
  '/projects/exodus-ai-avatar-console',
  '/index.html',
  '/founders',
  '/privacy-policy',
  '/blog'
)

$filesToScan = @()
foreach ($root in $scanRoots) {
  if (Test-Path $root) {
    $filesToScan += Get-ChildItem -Path $root -Recurse -File -Include *.ts,*.tsx,*.js,*.jsx,*.json,*.md
  }
}

foreach ($file in $filesToScan) {
  $content = [System.IO.File]::ReadAllText($file.FullName)
  foreach ($pattern in $patterns) {
    if ($content -match [regex]::Escape($pattern)) {
      Add-Issue "Internal reference contains retired URL pattern '$pattern' in $($file.FullName.Replace($repoRoot + '\', ''))"
    }
  }
}

# Canonical/open graph URL sanity checks
$metadataFiles = Get-ChildItem -Path (Join-Path $repoRoot 'app') -Recurse -File -Include *.ts,*.tsx
foreach ($file in $metadataFiles) {
  $content = [System.IO.File]::ReadAllText($file.FullName)
  if ($content -match "canonical:\s*'https?://") {
    Add-Issue "Canonical should use route path form in metadata (not absolute URL) in $($file.FullName.Replace($repoRoot + '\', ''))"
  }
  if ($content -match "url:\s*'http://") {
    Add-Issue "OpenGraph url contains http in $($file.FullName.Replace($repoRoot + '\', ''))"
  }
  if ($content -match "url:\s*'https://syfernetics\.com") {
    Add-Issue "OpenGraph url contains non-www domain in $($file.FullName.Replace($repoRoot + '\', ''))"
  }
}

Write-Host "`nPhase A SEO Routing Validation" -ForegroundColor Cyan
Write-Host "- Expected existing routes: $($expectedExistingRoutes.Count)"
Write-Host "- sitemapRoutes entries: $($sitemapRoutes.Count)"
Write-Host "- Issues: $($issues.Count)"
Write-Host "- Blockers: $($blockers.Count)"

if ($issues.Count -gt 0) {
  Write-Host "`nIssues:" -ForegroundColor Red
  foreach ($issue in $issues) {
    Write-Host "- $issue" -ForegroundColor Red
  }
}

if ($blockers.Count -gt 0) {
  Write-Host "`nPhase B blockers (informational):" -ForegroundColor Yellow
  foreach ($blocker in $blockers) {
    Write-Host "- $blocker" -ForegroundColor Yellow
  }
}

if ($issues.Count -gt 0) {
  exit 1
}

Write-Host "`nValidation passed with no Phase A routing issues." -ForegroundColor Green
exit 0
