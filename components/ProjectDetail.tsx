import { projects } from '../data/projects'
import { notFound } from 'next/navigation'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <section className="py-20 bg-panel px-6">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-accent mb-2">{project.title}</h1>
        <div className="text-muted mb-6 italic">{project.type}</div>

        {/* Overview */}
        <h3 className="text-fg font-semibold mb-2">Overview</h3>
        <p className="text-muted mb-6">{project.summary}</p>

        {/* Stack */}
        <h3 className="text-fg font-semibold mb-2">Stack Used</h3>
        <ul className="list-disc list-inside text-muted mb-6">
          {project.stack.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* Problem → Approach → Results */}
        <h3 className="text-fg font-semibold mb-2">Problem</h3>
        <p className="text-muted mb-6">{project.problem}</p>

        <h3 className="text-fg font-semibold mb-2">Approach</h3>
        <p className="text-muted mb-6">{project.approach}</p>

        <h3 className="text-fg font-semibold mb-2">Results</h3>
        <p className="text-muted mb-6">{project.results}</p>

        {/* Links */}
        {project.github && (
          <p className="mb-2">
            🔗{' '}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              View on GitHub
            </a>
          </p>
        )}
        {project.demo && (
          <p className="mb-2">
            ▶️{' '}
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Live Demo
            </a>
          </p>
        )}
      </div>
    </section>
  )
}