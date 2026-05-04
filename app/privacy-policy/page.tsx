import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import CardShell from '@/components/CardShell'

export const metadata: Metadata = {
  title: 'Privacy Policy | Syfernetics',
  description:
    'Privacy Policy for Syfernetics, a Central Georgia small business technology service provider.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How Syfernetics handles basic website, contact, and project information."
        headingAs="h1"
      >
        <CardShell className="p-6">
          <p className="mb-6 text-sm text-slate-400">Last updated: May 4, 2026</p>

          <div className="space-y-6 leading-8 text-slate-300">
            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Information we collect</h2>
              <p>
                Syfernetics may collect information you submit through contact forms, email, phone calls,
                or project discussions. This may include your name, business name, email address, phone
                number, website address, service interest, and project details.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">How we use information</h2>
              <p>
                Information is used to respond to inquiries, review project needs, provide service estimates,
                deliver agreed services, maintain customer communication, and improve the website and service process.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Information sharing</h2>
              <p>
                Syfernetics does not sell personal information. Information may be shared only when needed
                to provide requested services, comply with legal obligations, protect the business, or use
                trusted service providers such as hosting, email, analytics, or form-processing tools.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Security</h2>
              <p>
                Syfernetics uses practical safeguards to protect submitted information, but no website,
                email system, or internet-connected service can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-white">Contact</h2>
              <p>
                For privacy questions, contact Syfernetics at otis.duncan@syfernetics.com or 478-343-5252.
              </p>
            </section>
          </div>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}