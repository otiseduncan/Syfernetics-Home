import type { Metadata } from 'next'
import ButtonLink from '@/components/ButtonLink'
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

const localServices = [
  {
    title: 'Website design in Milledgeville, GA',
    description:
      'Syfernetics builds clear, mobile-friendly websites for Milledgeville businesses that need a professional home online, simple service pages, and an easier path for customers to make contact.',
  },
  {
    title: 'Website refreshes for Central Georgia businesses',
    description:
      'Older websites can often be improved with cleaner messaging, better mobile layout, stronger calls to action, and local search wording without rebuilding everything from scratch.',
  },
  {
    title: 'Business email and domain setup',
    description:
      'Professional email, domain alignment, DNS review, SPF, DKIM, and DMARC guidance help small businesses look more legitimate and reduce avoidable email problems.',
  },
  {
    title: 'Networking and Wi-Fi help',
    description:
      'Practical router, Wi-Fi, coverage, and device-connection support helps local offices, service businesses, and small teams reduce day-to-day connectivity problems.',
  },
  {
    title: 'Google Business Profile help',
    description:
      'Google Business Profile cleanup can improve how a local business appears in Search and Maps by reviewing categories, services, service areas, contact details, and website links.',
  },
  {
    title: 'Remote support by fit',
    description:
      'Many website, workflow, business email, and practical IT tasks can be handled remotely when the project does not require an on-site walkthrough.',
  },
]

const projectSteps = [
  'Start with a quick review of the website, workflow, email setup, network issue, or local visibility gap.',
  'Identify the real blocker and recommend the most practical first step.',
  'Define a clear scope so the project stays understandable and right-sized.',
  'Build, configure, clean up, or document the solution with a focus on practical use.',
]

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Service Area"
        title="Local and remote support across Central Georgia"
        description="Syfernetics is based in Milledgeville and helps small businesses across Central Georgia with websites, workflows, email setup, networking support, local visibility, and practical IT help."
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

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {localServices.map((service) => (
            <CardShell key={service.title} className="p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">{service.title}</h2>
              <p className="leading-8 text-slate-300">{service.description}</p>
            </CardShell>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Local support</h2>
            <p className="leading-8 text-slate-300">
              In-person work is available where the project benefits from local walkthroughs, on-site setup,
              device review, Wi-Fi troubleshooting, or direct collaboration with the business owner.
            </p>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">How local projects start</h2>
            <ol className="space-y-3 text-sm leading-6 text-slate-300">
              {projectSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-semibold text-teal-300">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CardShell>
        </div>

        <CardShell className="mt-6 border-teal-300/25 bg-teal-400/10 p-7">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Need practical technology help in Central Georgia?
          </h2>
          <p className="mb-4 max-w-3xl leading-8 text-slate-300">
            Start with a simple review of the problem, then decide whether the right next step is a website update,
            local visibility cleanup, business email support, networking help, or a practical workflow fix.
          </p>
          <ButtonLink href="/contact">Contact Syfernetics</ButtonLink>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
