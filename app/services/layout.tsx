import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Syfernetics Services | Websites, Workflow Automation, and Practical IT',
  description:
    'Explore Syfernetics services for small business website design, website refreshes, workflow automation, business email, networking, security basics, and care plans.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Syfernetics Services | Websites, Workflow Automation, and Practical IT',
    description:
      'Explore Syfernetics services for small business website design, website refreshes, workflow automation, business email, networking, security basics, and care plans.',
    url: 'https://www.syfernetics.com/services',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Services | Websites, Workflow Automation, and Practical IT',
    description:
      'Explore Syfernetics services for small business website design, website refreshes, workflow automation, business email, networking, security basics, and care plans.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}