import './globals.css'
import StructuredData from '@/components/StructuredData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.syfernetics.com'),
  title:
    'Syfernetics | Website Design & Small Business IT Support in Central Georgia',
  description:
    'Syfernetics helps Central Georgia small businesses with practical website design, website refreshes, workflow automation, business email, networking, and IT support.',
  alternates: {
    canonical: 'https://www.syfernetics.com/',
  },
  openGraph: {
    title: 'Syfernetics | Website Design & Small Business IT Support in Central Georgia',
    description:
      'Syfernetics helps Central Georgia small businesses with practical website design, website refreshes, workflow automation, business email, networking, and IT support.',
    url: 'https://www.syfernetics.com/',
    siteName: 'Syfernetics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics | Website Design & Small Business IT Support in Central Georgia',
    description:
      'Syfernetics helps Central Georgia small businesses with practical website design, website refreshes, workflow automation, business email, networking, and IT support.',
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg text-fg antialiased" suppressHydrationWarning>
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
