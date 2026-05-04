import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import CardShell from '@/components/CardShell'

export const metadata: Metadata = {
  title: 'Terms | Syfernetics',
  description:
    'Terms for using the Syfernetics website and requesting practical website, workflow, and IT services.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Terms"
        title="Terms"
        description="Basic terms for using this website and requesting Syfernetics services."
        headingAs="h1"
      >
        <CardShell className="p-6">
          <p className="mb-6 text-sm text-slate-400">Last updated: May 4, 2026</p>

          <div className="space-y-6 leading-8 text-slate-300">
            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Website use</h2>
              <p>
                The Syfernetics website is provided for general business information. Website content may
                change as services, pricing, availability, and business needs change.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Service estimates</h2>
              <p>
                Listed prices are starting points unless a written agreement states otherwise. Final pricing
                depends on project scope, complexity, timeline, third-party tools, hosting, domains, email
                services, and other required work.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Third-party services</h2>
              <p>
                Some projects may involve third-party platforms such as hosting providers, domain registrars,
                email services, analytics tools, form tools, or business software. Those services are governed
                by their own terms, pricing, and availability.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">No guaranteed results</h2>
              <p>
                Syfernetics works to provide practical, professional technology support, but does not guarantee
                specific search rankings, sales outcomes, traffic levels, or business results.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Contact</h2>
              <p>
                For questions about these terms, contact Syfernetics at otis.duncan@syfernetics.com or 478-343-5252.
              </p>
            </section>
          </div>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}