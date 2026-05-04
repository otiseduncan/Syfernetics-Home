import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

export const metadata = {
  title: 'About Syfernetics | Practical Technology Help in Milledgeville, GA',
  description:
    'Learn how Syfernetics helps small businesses solve practical technology problems with websites, workflows, business email, networking, and IT support.',
  openGraph: {
    title: 'About Syfernetics | Practical Technology Help in Milledgeville, GA',
    description:
      'Learn how Syfernetics helps small businesses solve practical technology problems with websites, workflows, business email, networking, and IT support.',
    type: 'website',
    url: 'https://www.syfernetics.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Syfernetics | Practical Technology Help in Milledgeville, GA',
    description:
      'Learn how Syfernetics helps small businesses solve practical technology problems with websites, workflows, business email, networking, and IT support.',
  },
}

export default function AboutPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="About Syfernetics"
        title="Practical technology support built from real-world problem solving."
        description={
          <>
            <p>
              Syfernetics is the professional technology brand of Otis Duncan, focused on websites,
              workflow automation, business email setup, networking support, and practical IT help for
              small businesses in Central Georgia.
            </p>
            <p className="mt-4">
              The approach is shaped by decades of hands-on troubleshooting, field operations,
              diagnostics, customer communication, and repair-process thinking. The goal is not to add
              complexity. The goal is to reduce confusion, improve visibility, and make the next step
              clear.
            </p>
          </>
        }
        headingAs="h1"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {['Small Business Websites', 'Workflow Automation', 'Networking & IT Help'].map((item) => (
            <CardShell key={item} className="p-5 font-semibold text-slate-100">
              {item}
            </CardShell>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CardShell className="p-7">
            <h2 className="mb-3 text-2xl font-bold text-white">The advantage</h2>
            <p className="leading-8 text-slate-300">
              This work is grounded in real service environments, real deadlines, and real communication
              gaps. That helps Syfernetics build solutions that fit the way small businesses actually
              work instead of forcing them into a generic agency process.
            </p>
          </CardShell>

          <CardShell className="p-7">
            <h2 className="mb-3 text-2xl font-bold text-white">From field work to better systems</h2>
            <p className="leading-8 text-slate-300">
              Clear websites, simple workflows, professional email, and better digital organization all
              support the same outcome: a business that looks credible, runs smoother, and is easier for
              customers to reach.
            </p>
          </CardShell>
        </div>

        <CardShell className="mt-6 border-teal-300/25 bg-teal-400/10 p-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            Ready to start?
          </p>
          <p className="mb-4 leading-8 text-slate-300">
            Most projects start with a short practical review of what you have and what you need. No
            long contracts. No tech jargon.
          </p>
          <ButtonLink href="/contact">Request a review</ButtonLink>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
