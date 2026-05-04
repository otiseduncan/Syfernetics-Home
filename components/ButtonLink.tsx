import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
}

export function getButtonClassName(variant: 'primary' | 'secondary' = 'primary') {
  const baseClasses =
    'inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70'

  const variantClasses =
    variant === 'primary'
      ? 'bg-teal-400 text-slate-950 hover:-translate-y-1 hover:bg-teal-300'
      : 'border border-white/15 bg-white/5 text-slate-100 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10'

  return `${baseClasses} ${variantClasses}`
}

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonLinkProps) {
  const buttonClassName = getButtonClassName(variant)

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClassName} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${buttonClassName} ${className}`}>
      {children}
    </Link>
  )
}