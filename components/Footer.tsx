import Link from 'next/link'
import { topLevelPages } from '@/lib/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg px-6 py-10 text-muted">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold text-fg">Syfernetics</p>
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
            <p className="font-semibold text-fg mb-2 uppercase tracking-widest text-xs">Top Pages</p>
            <div className="flex flex-col gap-1.5">
              {topLevelPages.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-accent">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-fg mb-2 uppercase tracking-widest text-xs">Contact</p>
            <div className="flex flex-col gap-1.5">
              <a href="tel:4783435252" className="transition hover:text-accent">478-343-5252</a>
              <a href="mailto:otis.duncan@syfernetics.com" className="transition hover:text-accent">otis.duncan@syfernetics.com</a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-fg mb-2 uppercase tracking-widest text-xs">Legal</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/privacy" className="transition hover:text-accent">Privacy</Link>
              <Link href="/terms" className="transition hover:text-accent">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6">
        <p className="text-sm">© 2026 Syfernetics. Practical technology solutions for small businesses in Central Georgia.</p>
      </div>
    </footer>
  )
}