export default function BlogPage() {
  const topics = [
    'Building practical workflow tools for small teams',
    'What a portfolio project should prove to employers',
    'Security-minded development basics for business apps',
  ]

  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Notes
        </p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Technical writing and project notes
        </h1>
        <p className="mb-10 text-lg leading-8 text-muted">
          This section is reserved for future writeups on web development, workflow design, dashboards, and security-minded software practices.
        </p>

        <div className="grid gap-4">
          {topics.map((topic) => (
            <div key={topic} className="rounded-2xl border border-white/10 bg-card/70 p-5 shadow-soft">
              <h2 className="text-xl font-bold text-fg">{topic}</h2>
              <p className="mt-2 text-muted">Coming soon.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
