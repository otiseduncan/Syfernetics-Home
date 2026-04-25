export default function ProjectDetailPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Project Detail
        </p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight">
          Detailed case study coming soon
        </h1>
        <p className="text-lg leading-8 text-muted">
          Full project case studies will include the problem, solution, stack, screenshots, workflow, and results.
        </p>
        <a
          href="/projects"
          className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent-dark"
        >
          Back to Projects
        </a>
      </div>
    </main>
  )
}
