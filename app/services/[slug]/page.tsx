import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import { servicePages } from '@/lib/siteConfig'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) return { title: 'Service | Syfernetics' }

  return {
    title: `${service.navLabel} | Syfernetics Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.navLabel} | Syfernetics Services`,
      description: service.shortDescription,
      type: 'website',
      url: `https://www.syfernetics.com${service.href}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.navLabel} | Syfernetics Services`,
      description: service.shortDescription,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <PageShell>
      <SectionShell
        eyebrow="Services"
        title={service.title}
        description={service.intro}
        headingAs="h1"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Who this helps</h2>
            <p className="leading-8 text-slate-300">{service.whoItHelps}</p>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">What is included</h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </CardShell>
        </div>

        <CardShell className="mt-6 border-teal-300/25 bg-teal-400/10 p-6">
          <h2 className="mb-3 text-2xl font-bold text-white">Starting point</h2>
          <p className="mb-6 leading-8 text-slate-300">
            {service.startingPoint ?? 'Quoted after a practical review based on your scope and business needs.'}
          </p>
          <ButtonLink href="/contact">Contact Syfernetics</ButtonLink>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
