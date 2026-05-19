import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

export const metadata: Metadata = {
  title: 'Syfernetics Privacy Policy',
  description:
    'Read the Syfernetics privacy policy for information about website usage, contact-form submissions, and communication preferences.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Syfernetics Privacy Policy',
    description:
      'Read the Syfernetics privacy policy for information about website usage, contact-form submissions, and communication preferences.',
    type: 'website',
    url: 'https://www.syfernetics.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains how Syfernetics handles website and inquiry information."
        headingAs="h1"
      >
        <div className="space-y-6 text-slate-300 leading-7">
          <p>
            Syfernetics collects basic website analytics and inquiry details that visitors submit through
            contact forms, email, or phone outreach.
          </p>
          <p>
            Information you provide is used to respond to inquiries, provide requested services, and improve
            communication quality. Syfernetics does not sell customer information.
          </p>
          <p>
            If you need your submitted inquiry information updated or removed, contact
            {' '}<a href="mailto:otis.duncan@syfernetics.com" className="text-teal-300 hover:text-teal-100">otis.duncan@syfernetics.com</a>.
          </p>
        </div>
      </SectionShell>
    </PageShell>
  )
}
