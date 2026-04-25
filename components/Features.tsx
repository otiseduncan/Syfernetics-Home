import SectionIntro from './SectionIntro'

export default function Features() {
  const features = [
    {
      icon: '</>',
      title: 'Full-Stack Web Development',
      desc: 'Modern, responsive websites and web applications built with clean architecture, performance, and maintainability in mind.',
    },
    {
      icon: '▦',
      title: 'Workflow & Operations Tools',
      desc: 'Custom dashboards and workflow apps that streamline processes, improve visibility, and drive operational efficiency.',
    },
    {
      icon: '▣',
      title: 'Security-Minded Implementation',
      desc: 'Security-conscious development practices, secure integrations, and infrastructure choices that protect your data and users.',
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
            <article
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft transition hover:border-accent/45 hover:shadow-teal"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-lg font-black text-accent">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-fg">{feature.title}</h3>
              <p className="mb-5 leading-7 text-muted">{feature.desc}</p>
              <span className="text-sm font-semibold text-accent">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
