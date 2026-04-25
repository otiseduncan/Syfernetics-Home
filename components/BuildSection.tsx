import Link from 'next/link'
import SectionIntro from './SectionIntro'
import { projects } from '@/data/projects'

export function ProjectGrid({ limit }: { limit?: number }) {
  const shown = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {shown.map((project) => (
        <article
          key={project.title}
          className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft transition-colors duration-200 hover:border-accent/20"
        >
          <p className="mb-3 text-sm font-semibold text-accent">
            {project.category}
          </p>

          <h3 className="mb-3 text-2xl font-bold text-fg">
            {project.title}
          </h3>

          <p className="mb-5 leading-7 text-muted">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-dark"
              >
                {project.liveLabel || 'Live Site'}
              </a>
            ) : null}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {project.repoLabel || 'GitHub Repo'}
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function BuildSection() {
  return (
    <section className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Selected Work"
            title="Projects that show practical capability"
          >
            These projects demonstrate front-end development, database-backed
            workflows, authentication, dashboards, deployment, and real-world
            problem solving.
          </SectionIntro>

          <Link
            href="/projects"
            className="mb-12 inline-flex items-center justify-center rounded-lg border border-accent/50 px-5 py-3 font-semibold text-accent transition hover:bg-accent/10"
          >
            See All Projects
          </Link>
        </div>

        <ProjectGrid limit={4} />
      </div>
    </section>
  )
}