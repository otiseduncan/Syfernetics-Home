import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Syfernetics Pricing | Website and IT Support Starting Points',
  description:
    'Review starting prices for Syfernetics website refreshes, small business websites, workflow automation, business email setup, networking, and care plans.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Syfernetics Pricing | Website and IT Support Starting Points',
    description:
      'Review starting prices for Syfernetics website refreshes, small business websites, workflow automation, business email setup, networking, and care plans.',
    url: 'https://www.syfernetics.com/pricing',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Pricing | Website and IT Support Starting Points',
    description:
      'Review starting prices for Syfernetics website refreshes, small business websites, workflow automation, business email setup, networking, and care plans.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}