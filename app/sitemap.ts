import type { MetadataRoute } from 'next'
import { sitemapRoutes } from '@/lib/siteConfig'

const localSeoRoutes = [
  '/website-design-central-georgia',
  '/website-design-macon-ga',
  '/website-design-warner-robins-ga',
  '/website-design-milledgeville-ga',
  '/small-business-it-help-central-georgia',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.syfernetics.com'
  const routes = [...sitemapRoutes, ...localSeoRoutes]

  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
