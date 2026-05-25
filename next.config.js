/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'syfernetics.com' }],
        destination: 'https://www.syfernetics.com/:path*',
        permanent: true,
      },
      { source: '/projects/exodus-ai-avatar-console', destination: '/projects/xoduz-ai-avatar-console', permanent: true },
      { source: '/projects/exodus-ai-avatar-console/', destination: '/projects/xoduz-ai-avatar-console', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/founders', destination: '/about', permanent: true },
      { source: '/founders/', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/services/business-email', destination: '/services/business-email-setup', permanent: true },
      { source: '/services/networking', destination: '/services/networking-wifi', permanent: true },
    ]
  },
}

module.exports = nextConfig
