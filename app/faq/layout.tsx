import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Syfernetics FAQ | Website, Workflow, and IT Support Questions',
  description:
    'Answers to common questions about Syfernetics website design, workflow automation, business email, networking, care plans, and practical IT help.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Syfernetics FAQ | Website, Workflow, and IT Support Questions',
    description:
      'Answers to common questions about Syfernetics website design, workflow automation, business email, networking, care plans, and practical IT help.',
    url: 'https://www.syfernetics.com/faq',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics FAQ | Website, Workflow, and IT Support Questions',
    description:
      'Answers to common questions about Syfernetics website design, workflow automation, business email, networking, care plans, and practical IT help.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}