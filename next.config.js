/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Old blog routes
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      // Old project detail slugs that were indexed
      { source: '/projects/cyber-dashboard', destination: '/projects', permanent: true },
      { source: '/projects/secure-remote-work', destination: '/projects', permanent: true },
      // Old top-level service alias pages → canonical service detail pages
      { source: '/website-design', destination: '/services/website-design', permanent: true },
      { source: '/website-refresh', destination: '/services/website-refresh', permanent: true },
      { source: '/workflow-automation', destination: '/services/workflow-automation', permanent: true },
      { source: '/business-email-setup', destination: '/services/business-email', permanent: true },
      { source: '/networking-support', destination: '/services/networking', permanent: true },
      { source: '/small-business-it-help', destination: '/services/it-help', permanent: true },
    ]
  },
}

module.exports = nextConfig
