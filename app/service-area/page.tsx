import type { Metadata } from 'next'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

export const metadata: Metadata = {
  title: 'Central Georgia Website Design & IT Help | Syfernetics',
  description:
    'Website design, website refreshes, workflow automation, business email setup, Google profile help, and small business IT support across Central Georgia.',
  openGraph: {
    title: 'Central Georgia Website Design & IT Help | Syfernetics',
    description:
      'Syfernetics supports Central Georgia small businesses with websites, Google visibility, email setup, workflow automation, networking, and practical IT help.',
    type: 'website',
    url: 'https://www.syfernetics.com/service-area',
  },
}

const areas = ['Central Georgia', 'Macon GA', 'Warner Robins GA', 'Milledgeville GA', 'Eatonton GA', 'Gray GA', 'Perry GA', 'Lake Oconee GA', 'Greensboro GA', 'Madison GA']
const areaCards = [
  { title: 'Macon and Warner Robins', text: 'Website design, website refreshes, business email setup, and practical IT help for growing small businesses and service providers.' },
  { title: 'Milledgeville, Eatonton, and Lake Oconee', text: 'Support for local businesses that need clearer websites, better Google visibility, stronger contact flow, and practical technology cleanup.' },
  { title: 'Gray, Perry, Greensboro, and Madison', text: 'Remote support by fit plus local help when projects benefit from walkthroughs, setup support, or direct collaboration.' },
  { title: 'Central Georgia service businesses', text: 'Built for contractors, shops, offices, local service providers, and small teams that need simple systems and clearer customer paths.' },
]
const services = ['Website design and website refreshes', 'Google Business Profile cleanup and local visibility support', 'Business email setup and domain alignment', 'Workflow automation and intake forms', 'Networking, Wi-Fi, and small business IT help', 'Ongoing website care and practical support']

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <SectionShell eyebrow="Service Area" title="Technology Services for Small Businesses Across Central Georgia" description="Syfernetics supports small businesses across Central Georgia, including Macon, Warner Robins, Milledgeville, Eatonton, Gray, Perry, Lake Oconee, Greensboro, Madison, and nearby communities." headingAs="h1">
        <div className="flex flex-wrap gap-3">{areas.map((area) => <span key={area} className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-200 shadow-soft">{area}</span>)}</div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">{areaCards.map((area) => <CardShell key={area.title} className="p-6"><h2 className="mb-3 text-2xl font-bold text-white">{area.title}</h2><p className="leading-8 text-slate-300">{area.text}</p></CardShell>)}</div>
        <CardShell className="mt-6 p-6 md:p-7"><h2 className="mb-3 text-2xl font-bold text-white">Central Georgia services</h2><ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-2">{services.map((service) => <li key={service} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-300" /><span>{service}</span></li>)}</ul></CardShell>
        <CardShell className="mt-6 border-teal-300/25 bg-teal-400/10 p-6 md:p-7"><h2 className="mb-3 text-2xl font-bold text-white">Start with a free 20-minute review</h2><p className="leading-8 text-slate-300">Most projects start with a short conversation and a practical review of your current website, Google profile, workflow, email setup, or technology blocker. You get a clear recommendation before committing to larger work.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/contact">Request the Review</ButtonLink><ButtonLink href="/services" variant="secondary">View Services</ButtonLink></div></CardShell>
      </SectionShell>
    </PageShell>
  )
}
