import type { Metadata } from 'next'
import CardShell from '@/components/CardShell'
import ClickableCard from '@/components/ClickableCard'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import { pricingPackages } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Syfernetics Pricing | Website, Workflow & Small Business IT Packages',
  description:
    'View Syfernetics starting packages for website refreshes, small business websites, workflow automation, business email setup, networking support, and website care plans.',
  openGraph: {
    title: 'Syfernetics Pricing | Website, Workflow & Small Business IT Packages',
    description:
      'View Syfernetics starting packages for website refreshes, small business websites, workflow automation, business email setup, networking support, and website care plans.',
    type: 'website',
    url: 'https://www.syfernetics.com/pricing',
  },
}

export default function PricingPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Pricing"
        title="Clear starting packages for practical business technology work"
        description="These packages are practical starting points. Every project begins with a short review so the scope, deliverables, and next steps are clear before work starts."
        headingAs="h1"
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <ClickableCard
              key={pkg.name}
              href={pkg.href}
              className={`flex h-full flex-col p-6 ${pkg.featured ? 'border-teal-300/50 bg-teal-400/10 ring-1 ring-teal-300/30' : ''}`}
              ariaLabel={`Open ${pkg.name} package details`}
            >
              <h2 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-teal-100">
                {pkg.name}
              </h2>
              <p className="mb-3 font-semibold text-teal-300">{pkg.price}</p>
              <p className="mb-4 text-sm leading-7 text-slate-300">{pkg.description}</p>
              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
                View related service →
              </p>
            </ClickableCard>
          ))}
        </div>

        <CardShell className="mt-6 p-6">
          <h2 className="mb-3 text-2xl font-bold text-white">What the starting price means</h2>
          <p className="leading-8 text-slate-300">
            These packages define a practical starting point. If your scope is larger, more custom, or
            needs ongoing support, Syfernetics will outline the next step before work begins.
          </p>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
