import Link from 'next/link'
import SectionIntro from './SectionIntro'

export default function Features() {
  const features = [
    {
      eyebrow: 'Web',
      title: 'Full-Stack Web Development',
      desc: 'Responsive websites and web applications built with modern frameworks, clean UI, routing, forms, and real data workflows.',
    },
    {
      eyebrow: 'Ops',
      title: 'Workflow & Operations Tools',
      desc: 'Custom dashboards, job trackers, admin views, and internal tools designed to reduce confusion and improve visibility.',
    },
    {
      eyebrow: 'Secure',
      title: 'Security-Minded Implementation',
      desc: 'Authentication, role-based access, structured database design, and practical attention to reliability and safe data handling.',
    },
  ]

  return (
    <section className="bg-bg2 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="What I Build"
          title="Professional software with practical business impact"
        >
          The focus is simple: build clean tools that solve real problems, present information clearly, and help teams work smarter.
        </SectionIntro>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft transition-colors duration-200 hover:border-accent/15"
            >
              <div className="mb-5 inline-flex h-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-4 text-xs font-black uppercase tracking-wider text-accent">
                {feature.eyebrow}
              </div>
              <h3 className="mb-3 text-xl font-bold text-fg">
                {feature.title}
              </h3>
              <p className="mb-0 leading-7 text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
