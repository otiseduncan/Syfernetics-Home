import Link from 'next/link'

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-lg transition">
      {/* Main clickable card */}
      <Link
        href={`/projects/${project.slug}`}
        className="block cursor-pointer"
      >
        <div>
          <div className="text-sm text-accent mb-1">{project.type}</div>
          <h3 className="text-xl font-bold text-fg mb-2">{project.title}</h3>
          <p className="text-muted text-sm mb-3">{project.summary}</p>

          <div className="flex flex-wrap gap-2 text-xs text-muted">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="bg-black/30 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* External links below card, not nested */}
      <div className="flex gap-4 text-sm mt-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}