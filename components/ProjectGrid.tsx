import ClickableCard from '@/components/ClickableCard'
import { projects } from '@/data/projects'

type ProjectGridProps = {
  limit?: number
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const shownProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
      {shownProjects.map((project) => {
        const href = project.liveUrl || project.repoUrl || null
        const isExternal = Boolean(href?.startsWith('http'))
        const linkText = project.liveUrl
          ? project.liveLabel ?? 'Open live site ↗'
          : project.repoLabel ?? 'Open repo ↗'

        return (
          <ClickableCard
            key={project.slug}
            href={href}
            external={isExternal}
            ariaLabel={`Open project: ${project.title}`}
            className="flex h-full flex-col p-6"
          >
            <p className="mb-3 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
              {project.category}
            </p>
            <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-teal-100">
              {project.title}
            </h3>
            <p className="mb-5 leading-7 text-slate-300">{project.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-300/20 bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-200 transition-colors group-hover:border-cyan-300/50 group-hover:text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-3 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
              {linkText}
            </div>
          </ClickableCard>
        )
      })}
    </div>
  )
}