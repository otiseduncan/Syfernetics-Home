import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Syfernetics | Website, Workflow & IT Help in Central Georgia',
  description:
    'Contact Syfernetics for website design, workflow automation, business email setup, networking support, Google Business Profile help, and practical small business IT help in Central Georgia.',
  openGraph: {
    title: 'Contact Syfernetics | Website, Workflow & IT Help in Central Georgia',
    description:
      'Contact Syfernetics for website design, workflow automation, business email setup, networking support, Google Business Profile help, and practical small business IT help in Central Georgia.',
    type: 'website',
    url: 'https://www.syfernetics.com/contact',
    siteName: 'Syfernetics',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Syfernetics | Website, Workflow & IT Help in Central Georgia',
    description:
      'Contact Syfernetics for website design, workflow automation, business email setup, networking support, Google Business Profile help, and practical small business IT help in Central Georgia.',
  },
  alternates: {
    canonical: 'https://www.syfernetics.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
