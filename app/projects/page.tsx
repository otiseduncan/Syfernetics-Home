import { ProjectGrid } from '@/components/BuildSection'

export default function ProjectsPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Projects
        </p>
        <h1 className="text-balance mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Project proof built around practical business problems
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-8 text-muted">
          Explore selected Syfernetics projects focused on small business websites, workflow tools, dashboards, brand direction, and practical technology solutions. Each project shows how the work starts with a real problem, then turns into a clearer website, a better workflow, or a more useful digital system.
        </p>

        <ProjectGrid />
      </div>
    </main>
  )
}
