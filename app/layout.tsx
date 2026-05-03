import './globals.css'

export const metadata = {
  title:
    'Syfernetics | Small Business Websites, Workflow Automation & IT Help in Central Georgia',
  description:
    'Syfernetics helps Central Georgia small businesses with website design, website refreshes, workflow automation, business email setup, networking support, and practical IT help. Based in Milledgeville, GA.',
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
        {children}
      </body>
    </html>
  )
}
