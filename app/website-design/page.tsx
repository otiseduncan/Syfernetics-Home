import Link from 'next/link'

export const metadata = {
  title: 'Small business website design in Central Georgia | Syfernetics',
  description:
    'Syfernetics builds clean, mobile-friendly websites for small businesses in Central Georgia with clear services, strong contact flow, and practical local positioning.',
  openGraph: {
    title: 'Small Business Website Design | Syfernetics',
    description:
      'Professional, mobile-friendly websites that help small businesses look credible and convert customers.',
    type: 'website',
    url: 'https://www.syfernetics.com/website-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Website Design | Syfernetics',
    description:
      'Professional websites for Central Georgia small businesses. Clear services, strong contact flow, practical positioning.',
  },
}

export default function WebsiteDesignPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Small business website design in Central Georgia
        </h1>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics builds clean, mobile-friendly websites for small businesses that
          need a professional online presence, clear service information, and an
          easier way for customers to make contact.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-fg">What this helps with</h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-muted">
          <li>Launching a first professional website for your business</li>
          <li>Clarifying services and customer next steps</li>
          <li>Improving mobile readability and local trust signals</li>
          <li>Creating cleaner contact and inquiry flow</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold text-fg">Best fit</h2>
        <p className="mb-10 leading-8 text-muted">
          Best for Central Georgia small businesses that need a practical,
          customer-facing site built around clear messaging, clean structure, and
          reliable next actions.
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
