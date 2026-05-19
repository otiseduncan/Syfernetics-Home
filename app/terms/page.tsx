import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

export const metadata: Metadata = {
  title: 'Syfernetics Terms of Service',
  description:
    'Read the Syfernetics terms for service scope, estimates, communication, and project delivery expectations.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Syfernetics Terms of Service',
    description:
      'Read the Syfernetics terms for service scope, estimates, communication, and project delivery expectations.',
    type: 'website',
    url: 'https://www.syfernetics.com/terms',
  },
}

export default function TermsPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Legal"
        title="Terms of Service"
        description="This page outlines general service terms for Syfernetics projects and support work."
        headingAs="h1"
      >
        <div className="space-y-6 text-slate-300 leading-7">
          <p>
            Project scope, deliverables, and timelines are defined per engagement. Estimates are based on
            the information available at the time of quote.
          </p>
          <p>
            Syfernetics may update recommendations as project conditions change and will communicate any
            required scope or timeline adjustments clearly.
          </p>
          <p>
            For questions about current terms, contact
            {' '}<a href="mailto:otis.duncan@syfernetics.com" className="text-teal-300 hover:text-teal-100">otis.duncan@syfernetics.com</a>.
          </p>
        </div>
      </SectionShell>
    </PageShell>
  )
}
