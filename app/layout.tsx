import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Syfernetics | Practical Web Apps, Workflow Tools, and Technical Solutions',
  description:
    'Syfernetics builds responsive websites, dashboards, workflow applications, and security-minded software solutions for businesses, employers, and technical teams.',
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
