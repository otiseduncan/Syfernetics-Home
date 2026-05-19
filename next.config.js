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
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/founders', destination: '/about', permanent: true },
      { source: '/founders/', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/services/website-design', destination: '/services', permanent: true },
      { source: '/services/website-refresh', destination: '/services', permanent: true },
      { source: '/services/workflow-automation', destination: '/services', permanent: true },
      { source: '/services/business-email', destination: '/services', permanent: true },
      { source: '/services/networking-wifi', destination: '/services', permanent: true },
      { source: '/services/networking', destination: '/services', permanent: true },
      { source: '/services/it-help', destination: '/services', permanent: true },
      { source: '/services/security-basics', destination: '/services', permanent: true },
      { source: '/services/google-business-profile', destination: '/services', permanent: true },
      { source: '/services/care-plans', destination: '/services', permanent: true },
      { source: '/blog/nextjs-tailwind-portfolio', destination: '/projects', permanent: true },
      { source: '/blog/penetration-testing-value', destination: '/services', permanent: true },
      { source: '/blog', destination: '/projects', permanent: true },
      { source: '/blog/:path*', destination: '/projects', permanent: true },
      { source: '/projects/cyber-dashboard', destination: '/projects', permanent: true },
      { source: '/projects/secure-remote-work', destination: '/projects', permanent: true },
    ]
  },
}

module.exports = nextConfig
