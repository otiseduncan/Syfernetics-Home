import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Project moved | Syfernetics',
  description:
    'This older Syfernetics project page has moved to the main projects page.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function Page() {
  permanentRedirect('/projects')
}