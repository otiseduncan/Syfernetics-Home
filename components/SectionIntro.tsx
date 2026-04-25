type SectionIntroProps = {
  eyebrow: string
  title: string
  children?: React.ReactNode
}

export default function SectionIntro({ eyebrow, title, children }: SectionIntroProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-lg leading-8 text-muted">{children}</div>}
    </div>
  )
}
