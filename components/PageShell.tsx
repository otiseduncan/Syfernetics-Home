import { ElementType, ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
  as?: ElementType
  className?: string
}

export default function PageShell({
  children,
  as: Component = 'main',
  className = '',
}: PageShellProps) {
  return (
    <Component className={`brand-shell px-6 py-16 text-fg md:py-20 ${className}`}>
      {children}
    </Component>
  )
}