import Link from 'next/link'

export const metadata = {
  title: 'Business email and domain setup | Syfernetics',
  description:
    'Syfernetics helps Central Georgia small businesses set up professional email, domain records, and account security basics for daily reliability.',
  openGraph: {
    title: 'Professional Business Email Setup | Syfernetics',
    description:
      'Get a professional business email address with your domain. Build customer trust and improve deliverability.',
    type: 'website',
    url: 'https://www.syfernetics.com/business-email-setup',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Email & Domain Setup | Syfernetics',
    description:
      'Professional email setup using your business domain for Central Georgia small businesses.',
  },
}

export default function BusinessEmailSetupPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Business email and domain setup
        </h1>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics helps small businesses set up professional email, connect
          domains, review DNS basics, and improve account security habits.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-fg">What this helps with</h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-muted">
          <li>Moving from personal email to business-branded addresses</li>
          <li>Configuring core domain records for reliability</li>
          <li>Reducing confusion around login and mailbox access</li>
          <li>Strengthening account protection with MFA and clean practices</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold text-fg">Best fit</h2>
        <p className="mb-10 leading-8 text-muted">
          Best for small teams setting up a domain and email stack for the first
          time or cleaning up inconsistent setup from prior providers.
        </p>

        <Link
          href="/contact"
          className="inline-flex rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent-dark"
        >
          Request Details
        </Link>
      </section>
    </main>
  )
}
