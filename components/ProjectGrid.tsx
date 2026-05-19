import ClickableCard from '@/components/ClickableCard'
import { projects } from '@/data/projects'
import Image from 'next/image'

type ProjectGridProps = {
  limit?: number
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const shownProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
      {shownProjects.map((project) => {
        const href = project.href || project.liveUrl || project.repoUrl || null
        const isExternal = Boolean(href?.startsWith('http'))
        const linkText = project.ctaLabel
          ? project.ctaLabel
          : project.liveUrl
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
            {project.imageSrc ? (
              <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-2">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? `${project.title} project visual`}
                    fill
                    className={project.imageFit === 'contain' ? 'object-contain p-1' : 'object-cover'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </div>
            ) : project.showVisualPlaceholder ? (
              <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-2">
                <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.16),rgba(2,6,23,0.95)_58%)] p-4 text-center">
                  <div className="max-w-xs rounded-lg border border-white/15 bg-slate-900/75 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                      Project Visual
                    </p>
                    <p className="mt-2 text-base font-bold text-white">Project visual coming soon</p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      Final project imagery will be added in a later media pass.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
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