'use client'

import Link from 'next/link'
import { useState } from 'react'
import { topLevelPages } from '@/lib/siteConfig'
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
          {topLevelPages.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
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
          </div>
        </div>
      )}
    </header>
  )
}
