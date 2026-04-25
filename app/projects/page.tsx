import { ProjectGrid } from '@/components/BuildSection'

export default function ProjectsPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Projects
        </p>
        <h1 className="text-balance mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Selected work and technical projects
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-8 text-muted">
          A collection of practical projects focused on web development, dashboards, workflow tools, and business-focused software solutions.
        </p>

        <ProjectGrid />
      </div>
    </main>
  )
}
