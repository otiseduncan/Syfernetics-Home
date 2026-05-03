import Link from 'next/link'

export const metadata = {
  title: 'Small office networking and Wi-Fi support | Syfernetics',
  description:
    'Syfernetics provides practical small-office networking and Wi-Fi support in Central Georgia including setup cleanup, coverage checks, and troubleshooting.',
}

export default function NetworkingSupportPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Small office networking and Wi-Fi support
        </h1>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics provides practical support for small-office routers, Wi-Fi
          coverage, device connectivity, basic network organization, and network
          troubleshooting.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-fg">What this helps with</h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-muted">
          <li>Unstable Wi-Fi and frequent disconnect complaints</li>
          <li>Slow or inconsistent connectivity in key work areas</li>
          <li>Network setup confusion after equipment changes</li>
          <li>Basic organization of devices and support visibility</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold text-fg">Best fit</h2>
        <p className="mb-10 leading-8 text-muted">
          Best for small offices and service teams that need reliable day-to-day
          connectivity without enterprise-level complexity.
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
