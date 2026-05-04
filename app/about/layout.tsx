import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About Syfernetics | Practical Website and IT Help in Central Georgia',
  description:
    'Learn how Syfernetics helps Central Georgia small businesses with websites, workflow automation, business email, networking, and practical IT support.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Syfernetics | Practical Website and IT Help in Central Georgia',
    description:
      'Learn how Syfernetics helps Central Georgia small businesses with websites, workflow automation, business email, networking, and practical IT support.',
    url: 'https://www.syfernetics.com/about',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Syfernetics | Practical Website and IT Help in Central Georgia',
    description:
      'Learn how Syfernetics helps Central Georgia small businesses with websites, workflow automation, business email, networking, and practical IT support.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}