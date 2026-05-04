import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Syfernetics Projects | Websites, Workflow Tools, and Practical IT',
  description:
    'See Syfernetics project examples including small business websites, workflow tools, dashboards, and practical technology solutions.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Syfernetics Projects | Websites, Workflow Tools, and Practical IT',
    description:
      'See Syfernetics project examples including small business websites, workflow tools, dashboards, and practical technology solutions.',
    url: 'https://www.syfernetics.com/projects',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Projects | Websites, Workflow Tools, and Practical IT',
    description:
      'See Syfernetics project examples including small business websites, workflow tools, dashboards, and practical technology solutions.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}