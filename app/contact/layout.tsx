import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contact Syfernetics | Website, Workflow, and IT Help',
  description:
    'Contact Syfernetics for small business website design, website refreshes, workflow automation, business email setup, networking, and practical IT help.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Syfernetics | Website, Workflow, and IT Help',
    description:
      'Contact Syfernetics for small business website design, website refreshes, workflow automation, business email setup, networking, and practical IT help.',
    url: 'https://www.syfernetics.com/contact',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Syfernetics | Website, Workflow, and IT Help',
    description:
      'Contact Syfernetics for small business website design, website refreshes, workflow automation, business email setup, networking, and practical IT help.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}