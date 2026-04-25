import SectionIntro from './SectionIntro'

export const projectList = [
  {
    title: 'FieldOps IQ',
    category: 'Field Service Workflow App',
    description:
      'A technician and manager workflow MVP with authentication, role-based routing, required photo documentation, job status tracking, analytics, and invoice output.',
    stack: ['React', 'Supabase', 'Tailwind CSS', 'Realtime Data'],
  },
  {
    title: 'Financial Tracker',
    category: 'Finance Dashboard',
    description:
      'A dashboard-focused project for organizing account activity, transaction categories, spending visibility, and financial review workflows.',
    stack: ['React', 'Dashboard UI', 'Data Modeling', 'Automation Planning'],
  },
  {
    title: 'Soggy Doggy Grooming',
    category: 'Small Business Website',
    description:
      'A responsive small-business website with service information, booking flow, and a clean customer-facing design.',
    stack: ['Web Design', 'Forms', 'Responsive Layout', 'Client Website'],
  },
  {
    title: 'Syfernetics',
    category: 'Professional Portfolio / Brand Site',
    description:
      'A professional technology site designed to present services, projects, skills, and client/employer-ready positioning.',
    stack: ['Next.js', 'Tailwind CSS', 'Brand Design', 'Content Strategy'],
  },
]

export function ProjectGrid({ limit }: { limit?: number }) {
  const shown = limit ? projectList.slice(0, limit) : projectList

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {shown.map((project) => (
        <article
          key={project.title}
          className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft transition hover:border-accent/45 hover:shadow-teal"
        >
          <p className="mb-3 text-sm font-semibold text-accent">{project.category}</p>
          <h3 className="mb-3 text-2xl font-bold text-fg">{project.title}</h3>
          <p className="mb-5 leading-7 text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
              >
                {skill}
              </span>
            ))}
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
            These projects demonstrate front-end development, database-backed workflows, authentication, dashboards, and real-world problem solving.
          </SectionIntro>

          <a
            href="/projects"
            className="mb-12 inline-flex items-center justify-center rounded-lg border border-accent/50 px-5 py-3 font-semibold text-accent transition hover:bg-accent/10"
          >
            See All Projects
          </a>
        </div>

        <ProjectGrid limit={4} />
      </div>
    </section>
  )
}
