import './globals.css'
import StructuredData from '@/components/StructuredData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.syfernetics.com'),
  title:
    'Syfernetics | Small Business Websites, Workflow Automation & IT Help in Central Georgia',
  description:
    'Syfernetics helps Central Georgia small businesses with website design, website refreshes, workflow automation, business email setup, networking support, and practical IT help.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Syfernetics | Small Business Websites, Workflow Automation & IT Help in Central Georgia',
    description:
      'Websites, workflow automation, networking support, business email setup, and practical IT help for Central Georgia small businesses.',
    url: 'https://www.syfernetics.com/',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics | Small Business Websites & Practical IT Help',
    description:
      'Practical websites, workflow automation, networking, and IT help for Central Georgia small businesses.',
  },
  verification: {
    google: 'fbeb0a8d990156bc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased">
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
