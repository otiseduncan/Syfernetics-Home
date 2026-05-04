import Link from 'next/link'

export const metadata = {
  title: 'Website cleanup and redesign for small businesses | Syfernetics',
  description:
    'Syfernetics helps Central Georgia small businesses clean up outdated websites with better layout, service clarity, mobile experience, and contact flow.',
  openGraph: {
    title: 'Website Cleanup & Redesign | Syfernetics',
    description:
      'Fix outdated layouts, unclear messaging, and broken contact flows. Modernize your website without starting from scratch.',
    type: 'website',
    url: 'https://www.syfernetics.com/website-refresh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Refresh & Redesign | Syfernetics',
    description:
      'Website cleanup for Central Georgia small businesses. Better layout, clarity, mobile experience.',
  },
}

export default function WebsiteRefreshPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Website cleanup and redesign for small businesses
        </h1>
        <p className="mb-8 text-lg leading-8 text-muted">
          Outdated or confusing websites can cost trust. Syfernetics helps small
          businesses clean up layout, wording, mobile experience, service sections,
          and contact flow.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-fg">What this helps with</h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-muted">
          <li>Refreshing old pages that no longer match your services</li>
          <li>Improving readability and navigation for customers</li>
          <li>Fixing confusing sections and weak calls to action</li>
          <li>Modernizing your business presentation without overbuilding</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold text-fg">Best fit</h2>
        <p className="mb-10 leading-8 text-muted">
          Best for businesses with an existing site that feels dated, hard to use,
          or disconnected from current offerings and customer expectations.
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
