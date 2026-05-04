import { ElementType, ReactNode } from 'react'

type SectionShellProps = {
  children: ReactNode
  eyebrow?: string
  title?: string
  description?: ReactNode
  as?: ElementType
  headingAs?: ElementType
  sectionClassName?: string
  containerClassName?: string
  contentClassName?: string
}

export default function SectionShell({
  children,
  eyebrow,
  title,
  description,
  as: Section = 'section',
  headingAs: Heading = 'h2',
  sectionClassName = '',
  containerClassName = '',
  contentClassName = '',
}: SectionShellProps) {
  return (
    <Section className={`py-10 md:py-12 ${sectionClassName}`}>
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl md:mb-12">
            {eyebrow && (
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-teal-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <Heading className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">
                {title}
              </Heading>
            )}
            {description && <div className="mt-5 text-lg leading-8 text-slate-300">{description}</div>}
          </div>
        )}

        <div className={contentClassName}>{children}</div>
      </div>
    </Section>
  )
}