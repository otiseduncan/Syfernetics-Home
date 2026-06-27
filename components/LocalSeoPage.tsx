import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import type { LocalSeoPage as LocalSeoPageData } from '@/lib/localSeoPages'

type Props = {
  page: LocalSeoPageData
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function LocalSeoPage({ page }: Props) {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.description,
    provider: {
      '@id': 'https://www.syfernetics.com/#business',
    },
    areaServed: page.market,
    url: `https://www.syfernetics.com/${page.slug}`,
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <SectionShell eyebrow={page.eyebrow} title={page.h1} description={page.intro} headingAs="h1">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CardShell className="p-6 md:p-7">
            <h2 className="mb-3 text-2xl font-bold text-white">Built for this market</h2>
            <p className="leading-8 text-slate-300">{page.market}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a Free Review</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Starting Packages
              </ButtonLink>
            </div>
          </CardShell>

          <CardShell className="border-teal-300/25 bg-teal-400/10 p-6 md:p-7">
            <h2 className="mb-3 text-2xl font-bold text-white">Built to earn inquiries</h2>
            <p className="leading-8 text-slate-300">
              {page.cta} The goal is clear service wording, visible contact paths, useful local signals, and a next
              step that is easy for a small-business owner to understand.
            </p>
          </CardShell>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">What this can include</h2>
            <BulletList items={page.services} />
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Problems this solves</h2>
            <BulletList items={page.problems} />
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Why Syfernetics</h2>
            <BulletList items={page.proofPoints} />
          </CardShell>
        </div>

        <CardShell className="mt-6 p-6 md:p-7">
          <h2 className="mb-3 text-2xl font-bold text-white">Start with a practical review</h2>
          <p className="max-w-4xl leading-8 text-slate-300">
            The first step is a short review of what is already working, what is blocking customers from contacting you,
            and what practical change should happen first.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Send Inquiry</ButtonLink>
            <ButtonLink href="/service-area" variant="secondary">
              View Service Area
            </ButtonLink>
          </div>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
