import Link from 'next/link'

export const metadata = {
  title: 'Workflow automation for small businesses | Syfernetics',
  description:
    'Syfernetics helps Central Georgia small businesses simplify manual handoffs and improve workflow visibility across requests, tracking, and daily operations.',
    openGraph: {
      title: 'Workflow Automation for Small Businesses | Syfernetics',
      description:
        'Stop chasing scattered messages. Automate intake, tracking, and notifications for your service business.',
      type: 'website',
      url: 'https://www.syfernetics.com/workflow-automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Workflow Automation | Syfernetics',
      description:
        'Reduce manual tracking and scattered messages with practical workflow automation for small businesses.',
    },
  }

export default function WorkflowAutomationPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Workflow automation for small businesses
        </h1>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics helps small businesses turn scattered messages, forms,
          spreadsheets, quote requests, and manual tracking into clearer workflows.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-fg">What this helps with</h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-muted">
          <li>Reducing dropped handoffs between team members</li>
          <li>Making status and ownership easier to track</li>
          <li>Standardizing intake, follow-up, and closeout steps</li>
          <li>Improving visibility without adding heavy software overhead</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold text-fg">Best fit</h2>
        <p className="mb-10 leading-8 text-muted">
          Best for teams that are currently coordinating work through fragmented
          notes, texts, and ad hoc spreadsheets and need a cleaner process.
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
