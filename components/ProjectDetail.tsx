import { projects } from '../data/projects'
import { notFound } from 'next/navigation'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <section className="py-20 bg-panel px-6">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-accent mb-2">{project.title}</h1>
        <div className="text-muted mb-6 italic">{project.category}</div>

        {/* Overview */}
        <h3 className="text-fg font-semibold mb-2">Overview</h3>
        <p className="text-muted mb-6">{project.description}</p>

        {/* Stack */}
        <h3 className="text-fg font-semibold mb-2">Stack Used</h3>
        <ul className="list-disc list-inside text-muted mb-6">
          {project.stack.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent-dark"
          >
            {project.liveLabel}
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  )
}