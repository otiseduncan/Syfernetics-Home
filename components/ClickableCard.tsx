import Link from 'next/link'
import { ReactNode } from 'react'

type ClickableCardProps = {
  href?: string | null
  external?: boolean
  className?: string
  children: ReactNode
  ariaLabel?: string
}

export default function ClickableCard({
  href,
  external = false,
  className = '',
  children,
  ariaLabel,
}: ClickableCardProps) {
  const baseClasses =
    'group block h-full rounded-2xl border border-white/10 bg-card/70 shadow-soft backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-2xl hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70'

  if (!href) {
    return <article className={`${baseClasses} ${className}`}>{children}</article>
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  )
}
