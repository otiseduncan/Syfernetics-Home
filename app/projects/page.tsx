import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import ProjectGrid from '@/components/ProjectGrid'
import SectionShell from '@/components/SectionShell'

export const metadata = {
  title: 'Syfernetics Projects | Websites, Workflow Tools & Practical IT Demos',
  description:
    'View Syfernetics projects showing website design, workflow automation, dashboards, local SEO structure, and practical business technology solutions.',
  openGraph: {
    title: 'Syfernetics Projects | Websites, Workflow Tools & Practical IT Demos',
    description:
      'View Syfernetics projects showing website design, workflow automation, dashboards, local SEO structure, and practical business technology solutions.',
    type: 'website',
    url: 'https://www.syfernetics.com/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Projects | Websites, Workflow Tools & Practical IT Demos',
    description:
      'View Syfernetics projects showing website design, workflow automation, dashboards, local SEO structure, and practical business technology solutions.',
  },
}


export default function ProjectsPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Projects"
        title="Syfernetics project proof built around practical business problems"
        description="Explore selected Syfernetics projects focused on small business websites, workflow tools, dashboards, brand direction, and practical technology solutions."
        headingAs="h1"
      >
        <ProjectGrid />

        <CardShell className="mt-6 p-6">
          <h2 className="mb-3 text-2xl font-bold text-white">What these projects show</h2>
          <p className="leading-8 text-slate-300">
            Each Syfernetics project starts with a practical business problem and ends with a clearer website, a
            stronger workflow, or a more useful digital system. The focus is solving the right problem,
            not adding complexity for its own sake.
          </p>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
