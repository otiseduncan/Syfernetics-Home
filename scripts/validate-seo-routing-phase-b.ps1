$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$issues = New-Object System.Collections.Generic.List[string]

function Add-Issue {
  param([string]$Message)
  $issues.Add($Message)
}

$nextConfigPath = Join-Path $repoRoot 'next.config.js'
$siteConfigPath = Join-Path $repoRoot 'lib/siteConfig.ts'

$nextConfig = [System.IO.File]::ReadAllText($nextConfigPath)
$siteConfig = [System.IO.File]::ReadAllText($siteConfigPath)

$serviceSlugs = @(
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

$finalServiceUrls = $serviceSlugs | ForEach-Object { "/services/$_" }

$routeMatches = [regex]::Matches($siteConfig, "export const sitemapRoutes = \[(?<body>[\s\S]*?)\]")
if ($routeMatches.Count -eq 0) {
  Add-Issue 'Could not parse sitemapRoutes from lib/siteConfig.ts.'
  $sitemapRoutes = @()
} else {
  $body = $routeMatches[0].Groups['body'].Value
  $sitemapRoutes = [regex]::Matches($body, "'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
}

if ($sitemapRoutes -notcontains '/services') {
  Add-Issue '/services must remain in sitemapRoutes.'
}

foreach ($serviceUrl in $finalServiceUrls) {
  if ($sitemapRoutes -notcontains $serviceUrl) {
    Add-Issue "sitemapRoutes is missing service URL: $serviceUrl"
  }
}

$excludedFromSitemap = @('/blog', '/projects/cyber-dashboard', '/projects/secure-remote-work')
foreach ($excludedRoute in $excludedFromSitemap) {
  if ($sitemapRoutes -contains $excludedRoute) {
    Add-Issue "sitemapRoutes should not include: $excludedRoute"
  }
}

if ($nextConfig -match "source:\s*'/services'\s*,\s*destination") {
  Add-Issue '/services should not be redirected.'
}

foreach ($serviceUrl in $finalServiceUrls) {
  $escapedUrl = [regex]::Escape($serviceUrl)
  if ($nextConfig -match "source:\s*'$escapedUrl'\s*,\s*destination") {
    Add-Issue "Final service URL should not redirect: $serviceUrl"
  }
}

$legacyExpected = @{
  '/services/business-email' = '/services/business-email-setup'
  '/services/networking' = '/services/networking-wifi'
}

$legacyMatches = [regex]::Matches($nextConfig, "source:\s*'(/services/[^']+)'\s*,\s*destination:\s*'([^']+)'")
foreach ($match in $legacyMatches) {
  $source = $match.Groups[1].Value
  $destination = $match.Groups[2].Value

  if ($legacyExpected.ContainsKey($source)) {
    if ($legacyExpected[$source] -ne $destination) {
      Add-Issue "Legacy service redirect has unexpected destination: $source -> $destination"
    }
  } elseif ($source -ne '/services') {
    Add-Issue "Unexpected service redirect in next.config.js: $source -> $destination"
  }
}

$serviceDynamicPath = Join-Path $repoRoot 'app/services/[slug]/page.tsx'
if (-not (Test-Path -LiteralPath $serviceDynamicPath)) {
  Add-Issue 'Missing dynamic route file app/services/[slug]/page.tsx.'
}

Write-Host "`nPhase B SEO Routing Validation" -ForegroundColor Cyan
Write-Host "- Final service URLs expected: $($finalServiceUrls.Count)"
Write-Host "- sitemapRoutes entries: $($sitemapRoutes.Count)"
Write-Host "- Issues: $($issues.Count)"

if ($issues.Count -gt 0) {
  Write-Host "`nIssues:" -ForegroundColor Red
  foreach ($issue in $issues) {
    Write-Host "- $issue" -ForegroundColor Red
  }
  exit 1
}

Write-Host "`nValidation passed with no Phase B routing issues." -ForegroundColor Green
exit 0
