import Link from 'next/link'

export default function Testimonials() {
  const audiences = [
    {
      title: 'Small Businesses',
      desc: 'Professional websites, service pages, contact flows, and simple tools that help a business look credible online.',
    },
    {
      title: 'Operations Teams',
      desc: 'Dashboards, job trackers, forms, and reporting tools that help teams see what is happening without chasing information.',
    },
    {
      title: 'Employers & Technical Teams',
      desc: 'A developer with real-world troubleshooting experience, workflow thinking, and a growing full-stack/security skill set.',
    },
  ]

  return (
    <section className="bg-bg2 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Who I Help
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
            Built for clients, employers, and real working teams
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft">
              <h3 className="mb-3 text-xl font-bold text-fg">{item.title}</h3>
              <p className="leading-7 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/25 bg-accent/10 p-8 text-center shadow-teal">
          <h3 className="mb-3 text-2xl font-bold text-fg">
            Need a website, dashboard, or workflow tool?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted">
            I’m focused on building practical, clean, and reliable digital solutions that help people work smarter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent-dark"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
