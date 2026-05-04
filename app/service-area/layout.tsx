import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Syfernetics Service Area | Central Georgia Website and IT Help',
  description:
    'Syfernetics serves small businesses in Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and Central Georgia.',
  alternates: {
    canonical: '/service-area',
  },
  openGraph: {
    title: 'Syfernetics Service Area | Central Georgia Website and IT Help',
    description:
      'Syfernetics serves small businesses in Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and Central Georgia.',
    url: 'https://www.syfernetics.com/service-area',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Service Area | Central Georgia Website and IT Help',
    description:
      'Syfernetics serves small businesses in Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and Central Georgia.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}