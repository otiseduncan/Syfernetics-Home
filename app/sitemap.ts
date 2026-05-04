import { MetadataRoute } from 'next'
import { sitemapRoutes } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.syfernetics.com'

  return sitemapRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
