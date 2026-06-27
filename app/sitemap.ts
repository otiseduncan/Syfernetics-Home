import type { MetadataRoute } from 'next'
import { localSeoPageSlugs } from '@/lib/localSeoPages'
import { sitemapRoutes } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.syfernetics.com'
  const routes = [...sitemapRoutes, ...localSeoPageSlugs, 'gbp-help-central-georgia'].map((route) =>
    route.startsWith('/') ? route : `/${route}`,
  )

  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
