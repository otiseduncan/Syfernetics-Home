'use client'

import Link from 'next/link'
import { useState } from 'react'
import { servicePages, topLevelPages } from '@/lib/siteConfig'
import { getButtonClassName } from '@/components/ButtonLink'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-extrabold tracking-tight text-fg">Syfernetics</span>
          <span className="text-[10px] font-semibold tracking-widest text-muted uppercase">
            Websites • Workflow • Practical IT
          </span>
        </Link>

        <button
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-fg md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {topLevelPages.map((link) =>
            link.label === 'Services' ? (
              <div key="services-dropdown" className="group relative">
                <Link
                  href="/services"
                  className="text-sm font-semibold text-muted transition hover:text-accent"
                >
                  Services
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-xl border border-white/10 bg-card/95 p-3 opacity-0 shadow-soft backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {servicePages.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-accent"
                    >
                      {service.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted transition hover:text-accent"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className={`${getButtonClassName('secondary')} px-4 py-2 text-sm`}
          >
            Send Inquiry
          </Link>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-bg2 px-6 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {topLevelPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-card/60 px-4 py-3 text-sm font-semibold text-muted transition hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 rounded-lg border border-white/10 bg-card/40 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                Service Pages
              </p>
              <div className="grid gap-2">
                {servicePages.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="rounded-lg px-2 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {service.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
