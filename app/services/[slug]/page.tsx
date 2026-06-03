import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'
import {
  serviceDetails,
  serviceDetailsBySlug,
  standardServiceAreaCopy,
  standardServiceCta,
  standardServiceProcess,
  type ServiceSlug,
} from '@/lib/siteConfig'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

function getService(slug: string) {
  return serviceDetailsBySlug[slug as ServiceSlug]
}

const serviceAreaSchema = [
  'Milledgeville GA',
  'Eatonton GA',
  'Macon GA',
  'Gray GA',
  'Warner Robins GA',
  'Perry GA',
  'Lake Oconee GA',
  'Greensboro GA',
  'Madison GA',
  'Central Georgia',
]

function getStartingPriceValue(startingPrice: string) {
  const match = startingPrice.match(/\$([\d,]+(?:\.\d+)?)/)
  if (!match) {
    return undefined
  }

  return Number(match[1].replace(/,/g, ''))
}

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: {
      canonical: service.href,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      type: 'website',
      url: `https://www.syfernetics.com${service.href}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = service.relatedServiceSlugs
    .map((relatedSlug) => serviceDetailsBySlug[relatedSlug])
    .filter(Boolean)

  const startingPriceValue = getStartingPriceValue(service.startingPrice)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.navLabel,
    description: service.metaDescription,
    provider: {
      '@id': 'https://www.syfernetics.com/#business',
    },
    areaServed: serviceAreaSchema,
    url: `https://www.syfernetics.com${service.href}`,
    ...(startingPriceValue
      ? {
          offers: {
            '@type': 'Offer',
            price: String(startingPriceValue),
            priceCurrency: 'USD',
            url: `https://www.syfernetics.com${service.href}`,
          },
        }
      : {}),
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SectionShell
        eyebrow="Services"
        title={service.h1}
        description={service.angle}
        headingAs="h1"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Short service summary</h2>
            <p className="leading-8 text-slate-300">{service.shortDescription}</p>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Who this is for</h2>
            <p className="leading-8 text-slate-300">{service.whoItHelps}</p>
          </CardShell>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">What is included</h2>
            <ul className="space-y-2 text-slate-300">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Common problems this solves</h2>
            <ul className="space-y-2 text-slate-300">
              {service.commonProblems.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardShell>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Process</h2>
            <ol className="space-y-2 text-slate-300">
              {standardServiceProcess.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="font-semibold text-teal-300">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Starting price</h2>
            <p className="text-lg font-semibold text-teal-300">{service.startingPrice}</p>
          </CardShell>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Local service area</h2>
            <p className="leading-8 text-slate-300">{standardServiceAreaCopy}</p>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">Related services</h2>
            <ul className="space-y-3 text-sm">
              {relatedServices.map((relatedService) => (
                <li key={relatedService.slug}>
                  <Link
                    href={relatedService.href}
                    className="font-semibold text-teal-300 transition-colors hover:text-teal-100"
                  >
                    {relatedService.navLabel} →
                  </Link>
                </li>
              ))}
            </ul>
          </CardShell>
        </div>

        <CardShell className="mt-6 border-teal-300/25 bg-teal-400/10 p-7">
          <h2 className="mb-3 text-2xl font-bold text-white">{standardServiceCta.heading}</h2>
          <p className="mb-4 leading-8 text-slate-300">{standardServiceCta.text}</p>
          <ButtonLink href={standardServiceCta.href}>{standardServiceCta.label}</ButtonLink>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
