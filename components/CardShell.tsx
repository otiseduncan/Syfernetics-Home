import { ReactNode } from 'react'

type CardShellProps = {
  children: ReactNode
  className?: string
  as?: 'article' | 'div'
}

export default function CardShell({
  children,
  className = '',
  as: Component = 'article',
}: CardShellProps) {
  return (
    <Component className={`rounded-2xl border border-white/10 bg-card/70 shadow-soft backdrop-blur-xl ${className}`}>
      {children}
    </Component>
  )
}