export default function AboutPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          About Syfernetics
        </p>
        <h1 className="text-balance mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Practical software built from real-world problem solving.
        </h1>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            Syfernetics is the professional technology brand of Otis Duncan, focused on web development, workflow tools, dashboards, and security-minded software solutions.
          </p>
          <p>
            My background includes hands-on operations, diagnostics, technical troubleshooting, and field service environments. That experience gives me a practical view of software: it should reduce confusion, improve visibility, and make work easier to complete correctly.
          </p>
          <p>
            I build with modern tools including React, Next.js, Tailwind CSS, Supabase, PostgreSQL, and API-driven workflows. My focus is growing into full-stack development, security-minded engineering, and business-focused software solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {['Web Apps', 'Workflow Tools', 'Security-Minded Systems'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-card/70 p-5 font-semibold text-fg shadow-soft">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/25 bg-accent/10 p-7 shadow-teal">
          <h2 className="mb-3 text-2xl font-bold text-fg">The advantage</h2>
          <p className="leading-8 text-muted">
            I am not approaching development from theory only. I have worked around real deadlines, real service environments, communication gaps, documentation problems, and operational pressure. That helps me build tools that match the way people actually work.
          </p>
        </div>
      </div>
    </main>
  )
}
