import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Syfernetics | Small Business Websites & Workflow Automation in Central Georgia',
  description:
    'Syfernetics helps Central Georgia small businesses with website design, website refreshes, workflow automation, business email setup, and practical IT support. Based in Milledgeville, GA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
