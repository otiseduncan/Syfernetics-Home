import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsPage() {
  console.log('Projects:', projects)

  return (
    <section className="py-20 bg-panel px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-12">Projects & Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {projects.map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </div>
    </section>
  )
}