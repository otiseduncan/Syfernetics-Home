import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg px-6 py-10 text-muted">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-bold text-fg">Syfernetics</p>
          <p className="text-sm">
            Web development, workflow tools, dashboards, and security-minded solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/projects" className="transition hover:text-accent">Projects</Link>
          <Link href="/about" className="transition hover:text-accent">About</Link>
          <Link href="/contact" className="transition hover:text-accent">Contact</Link>
        </div>

        <p className="text-sm">© {new Date().getFullYear()} Syfernetics. All rights reserved.</p>
      </div>
    </footer>
  )
}
