import type { Metadata } from 'next'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

export const metadata: Metadata = {
  title: 'Syfernetics Service Area | Practical IT Help in Central Georgia',
  description:
    'Syfernetics serves small businesses in Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and Central Georgia.',
  openGraph: {
    title: 'Syfernetics Service Area | Practical IT Help in Central Georgia',
    description:
      'Syfernetics serves small businesses in Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and Central Georgia.',
    type: 'website',
    url: 'https://www.syfernetics.com/service-area',
  },
}

const areas = [
  'Milledgeville GA',
  'Eatonton GA',
  'Macon GA',
  'Gray GA',
  'Warner Robins GA',
  'Perry GA',
  'Lake Oconee GA',
  'Greensboro GA',
  'Madison GA',
  'Central Georgia',
]

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Service Area"
        title="Local and remote support across Central Georgia"
        description="Syfernetics is based in Milledgeville and helps small businesses across Central Georgia with websites, workflows, email setup, networking support, and practical IT help."
        headingAs="h1"
      >
        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-200 shadow-soft"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Local support</h2>
            <p className="leading-8 text-slate-300">
              In-person work is available where the project benefits from local walkthroughs, on-site
              setup, or direct collaboration.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Remote support</h2>
            <p className="leading-8 text-slate-300">
              Many website, workflow, business email, and practical IT projects can be handled remotely
              when that is the most efficient fit.
            </p>
          </CardShell>
        </div>
      </SectionShell>
    </PageShell>
  )
}
