import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Syfernetics Blog | Practical Tech Notes for Small Businesses',
  description:
    'Plain-English technology notes for small businesses covering websites, workflow automation, business email, networking, security basics, and local visibility.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Syfernetics Blog | Practical Tech Notes for Small Businesses',
    description:
      'Plain-English technology notes for small businesses covering websites, workflow automation, business email, networking, security basics, and local visibility.',
    url: 'https://www.syfernetics.com/blog',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Blog | Practical Tech Notes for Small Businesses',
    description:
      'Plain-English technology notes for small businesses covering websites, workflow automation, business email, networking, security basics, and local visibility.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}