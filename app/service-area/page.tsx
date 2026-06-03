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
        description="Syfernetics is based in Milledgeville and helps small businesses across Central Georgia with practical website work, business technology support, and clear starting steps."
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
            <h2 className="mb-3 text-2xl font-bold text-white">Website design in Milledgeville, GA</h2>
            <p className="leading-8 text-slate-300">
              Syfernetics helps local businesses build clear, mobile-friendly websites that make services easy to
              understand and make it easier for customers to contact you.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Website refreshes for Central Georgia businesses</h2>
            <p className="leading-8 text-slate-300">
              If your current site feels outdated or confusing, practical refresh work can improve clarity, strengthen
              customer paths, and improve everyday usability without starting from zero.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Business email and domain setup</h2>
            <p className="leading-8 text-slate-300">
              Get help setting up professional business email and domain alignment so your team communicates with more
              trust and fewer technical issues.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Networking and Wi-Fi help</h2>
            <p className="leading-8 text-slate-300">
              Practical troubleshooting is available for unstable Wi-Fi, weak coverage, and daily connectivity problems
              that slow down your business.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Google Business Profile help</h2>
            <p className="leading-8 text-slate-300">
              Improve local visibility with profile cleanup, service detail updates, and better consistency between your
              listing and website information.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Remote support by fit</h2>
            <p className="leading-8 text-slate-300">
              Many website, workflow, and support projects can be handled remotely when that format is efficient and
              fits the work. Local in-person support is available when a project benefits from it.
            </p>
          </CardShell>
        </div>

        <CardShell className="mt-6 p-6 md:p-7">
          <h2 className="mb-3 text-2xl font-bold text-white">How local projects start</h2>
          <p className="leading-8 text-slate-300">
            Most projects start with a short conversation and a practical review of your current website, systems, or
            bottlenecks. You get a clear recommendation and a realistic next step before committing to larger work.
          </p>
        </CardShell>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Local support when needed</h2>
            <p className="leading-8 text-slate-300">
              In-person work is available for projects that benefit from local walkthroughs, direct collaboration, or
              on-site setup in Central Georgia.
            </p>
          </CardShell>
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">One strong Central Georgia service-area page</h2>
            <p className="leading-8 text-slate-300">
              Syfernetics keeps service-area information in one clear page so customers can quickly understand coverage,
              support types, and next steps without thin duplicate city pages.
            </p>
          </CardShell>
        </div>
      </SectionShell>
    </PageShell>
  )
}
