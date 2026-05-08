import type { Metadata } from 'next'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import { servicePages } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Syfernetics Services | Website, Workflow, Email, Networking, and IT Help',
  description:
    'Explore Syfernetics service sections for website design, website refresh, workflow automation, business email setup, IT help, networking and Wi-Fi, security basics, Google Business Profile help, and care plans.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Syfernetics Services | Website, Workflow, Email, Networking, and IT Help',
    description:
      'Explore Syfernetics service sections for website design, website refresh, workflow automation, business email setup, IT help, networking and Wi-Fi, security basics, Google Business Profile help, and care plans.',
    type: 'website',
    url: 'https://www.syfernetics.com/services',
  },
}

export default function ServicesPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Services"
        title="Practical services for small businesses in Central Georgia"
        description="All service offerings are consolidated here on one page to keep navigation and indexing clean, clear, and focused on current public pages."
        headingAs="h1"
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicePages.map((service) => (
            <CardShell key={service.id} className="flex h-full flex-col p-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal-300 transition-colors group-hover:text-teal-100">
                Service Area
              </p>
              <h2 id={service.id} className="mb-3 text-2xl font-bold text-white">
                {service.title}
              </h2>
              <p className="leading-7 text-slate-300">{service.shortDescription}</p>
              <p className="mt-4 text-sm text-slate-300">{service.intro}</p>
              <p className="mt-4 text-sm font-semibold text-slate-200">
                Best fit: {service.whoItHelps}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.startingPoint && (
                <p className="mt-5 text-sm font-semibold text-teal-300">{service.startingPoint}</p>
              )}
            </CardShell>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">How service projects start</h2>
            <p className="leading-8 text-slate-300">
              Each service starts with a practical review to define the real problem, scope the right
              next step, and give you a clear recommendation before committing to a larger build.
            </p>
          </CardShell>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {servicePages.slice(0, 3).map((service) => (
              <CardShell key={service.id} className="p-4">
                <p className="text-sm font-semibold text-teal-300">{service.navLabel}</p>
                <p className="mt-2 text-sm text-slate-300">
                  {service.startingPoint ?? 'Quoted by scope'}
                </p>
              </CardShell>
            ))}
          </div>
        </div>
      </SectionShell>
    </PageShell>
  )
}
