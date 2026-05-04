import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg px-6 py-10 text-muted">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold text-fg">
            Syfer<span className="text-accent">netics</span>
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
            Websites • Workflow • Practical IT
          </p>
          <p className="text-sm leading-6">
            Websites, workflow automation, and practical IT help for Central Georgia small businesses.
            Based in Milledgeville, GA.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div>
            <p className="font-semibold text-fg mb-2 uppercase tracking-widest text-xs">Navigation</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/" className="transition hover:text-accent">Home</Link>
              <Link href="/about" className="transition hover:text-accent">About</Link>
              <Link href="/#services" className="transition hover:text-accent">Services</Link>
              <Link href="/#pricing" className="transition hover:text-accent">Pricing</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-fg mb-2 uppercase tracking-widest text-xs">More</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/projects" className="transition hover:text-accent">Projects</Link>
              <Link href="/blog" className="transition hover:text-accent">Blog</Link>
              <Link href="/contact" className="transition hover:text-accent">Contact</Link>
              <Link href="/#service-area" className="transition hover:text-accent">Service Area</Link>
              <Link href="/#faq" className="transition hover:text-accent">FAQ</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-fg mb-2 uppercase tracking-widest text-xs">Contact</p>
            <div className="flex flex-col gap-1.5">
              <a href="tel:4783435252" className="transition hover:text-accent">478-343-5252</a>
              <a href="mailto:otis.duncan@syfernetics.com" className="transition hover:text-accent">otis.duncan@syfernetics.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6">
        <p className="text-sm">© {new Date().getFullYear()} Syfernetics. All rights reserved. Based in Milledgeville, GA.</p>
      </div>
    </footer>
  )
}
