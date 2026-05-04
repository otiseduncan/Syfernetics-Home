import Link from 'next/link'

export const metadata = {
  title: 'Practical IT help for small businesses | Syfernetics',
  description:
    'Syfernetics provides practical IT support for Central Georgia small businesses including account setup, software issues, backups, MFA, and digital cleanup.',
  openGraph: {
    title: 'Practical IT Help for Small Businesses | Syfernetics',
    description:
      'Security-minded IT support without the tech jargon. Account setup, troubleshooting, and digital cleanup.',
    type: 'website',
    url: 'https://www.syfernetics.com/small-business-it-help',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical IT Help | Syfernetics',
    description:
      'No-nonsense IT support for Central Georgia small businesses. Security basics, troubleshooting, and setup.',
  },
}

export default function SmallBusinessITHelpPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Practical IT help for small businesses
        </h1>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics helps small businesses with account setup, software issues,
          email access, connectivity questions, backups, MFA, and digital cleanup.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-fg">What this helps with</h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-muted">
          <li>Resolving recurring account and access issues</li>
          <li>Cleaning up confusing software and device setup</li>
          <li>Improving day-to-day reliability for core business tools</li>
          <li>Building safer digital habits for staff and owners</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold text-fg">Best fit</h2>
        <p className="mb-10 leading-8 text-muted">
          Best for owners and teams that need straightforward support, clear
          next steps, and practical improvements over technical jargon.
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
