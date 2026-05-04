import type { Metadata } from 'next'
import CardShell from '@/components/CardShell'
import ClickableCard from '@/components/ClickableCard'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import { homepageServiceCards, servicePages } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Syfernetics Services | Websites, Workflow Automation & Practical IT Help',
  description:
    'Explore Syfernetics services for small business websites, website refreshes, workflow automation, business email, networking support, Google Business Profile help, and practical IT support.',
  openGraph: {
    title: 'Syfernetics Services | Websites, Workflow Automation & Practical IT Help',
    description:
      'Explore Syfernetics services for small business websites, website refreshes, workflow automation, business email, networking support, Google Business Profile help, and practical IT support.',
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
        description="Syfernetics helps small businesses with website design, website refreshes, workflow automation, business email setup, networking and Wi-Fi support, practical IT help, security-minded setup, Google Business Profile help, and website care plans."
        headingAs="h1"
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageServiceCards.map((service) => (
            <ClickableCard
              key={service.href}
              href={service.href}
              className="flex h-full flex-col p-6"
              ariaLabel={`Open ${service.label} service page`}
            >
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal-300 transition-colors group-hover:text-teal-100">
                {service.label}
              </p>
              <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-teal-100">
                {service.title}
              </h2>
              <p className="leading-7 text-slate-300">{service.description}</p>
              <p className="mt-auto pt-5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
                View service details →
              </p>
            </ClickableCard>
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
              <CardShell key={service.slug} className="p-4">
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
