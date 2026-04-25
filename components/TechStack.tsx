import SectionIntro from './SectionIntro'

export default function TechStack() {
  const groups = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    },
    {
      title: 'Backend & Data',
      skills: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'REST APIs', 'Authentication'],
    },
    {
      title: 'Workflow Builds',
      skills: ['Dashboards', 'Forms', 'CRUD Apps', 'Role-Based Access', 'Reporting', 'Mobile-First UX'],
    },
    {
      title: 'IT & Security Foundations',
      skills: ['Linux', 'Networking', 'Homelab', 'Troubleshooting', 'Security Concepts', 'Automation Mindset'],
    },
  ]

  return (
    <section className="bg-bg2 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Technical Skills"
          title="A practical stack for building useful systems"
        >
          Modern web tools combined with real operational experience and a security-conscious mindset.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft">
              <h3 className="mb-4 text-lg font-bold text-fg">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
