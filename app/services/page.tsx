import type { Metadata } from 'next'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import ClickableCard from '@/components/ClickableCard'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

const hubServices = [
  {
    title: 'Website Design',
    href: '/services/website-design',
    price: 'Starting at $1,200',
    description:
      'Clean, mobile-friendly websites built to explain what you do and make it easy for customers to contact you.',
  },
  {
    title: 'Website Refresh',
    href: '/services/website-refresh',
    price: 'Starting at $500',
    description:
      'Improve an outdated site with clearer messaging, better mobile behavior, and stronger calls to action.',
  },
  {
    title: 'Workflow Automation',
    href: '/services/workflow-automation',
    price: 'Starting at $500',
    description:
      'Reduce manual work with practical forms, trackers, notifications, handoff flows, and simple systems.',
  },
  {
    title: 'Business Email Setup',
    href: '/services/business-email-setup',
    price: 'Starting at $250',
    description:
      'Set up professional email, domain records, and basic deliverability pieces like SPF, DKIM, and DMARC.',
  },
  {
    title: 'Networking / Wi-Fi',
    href: '/services/networking-wifi',
    price: 'Starting at $175',
    description:
      'Practical help with router setup, coverage issues, small-office connectivity, and day-to-day reliability.',
  },
  {
    title: 'IT Help',
    href: '/services/it-help',
    price: 'Starting at $125 remote',
    description:
      'Troubleshooting for account access, device setup, software issues, and small-business tech support.',
  },
  {
    title: 'Security Basics',
    href: '/services/security-basics',
    price: 'Contact for estimate',
    description:
      'Reduce common risks with password cleanup, MFA guidance, backup planning, and safer account habits.',
  },
  {
    title: 'Google Business Profile Help',
    href: '/services/google-business-profile',
    price: 'Contact for estimate',
    description:
      'Clean up your profile, service categories, contact info, and local visibility basics for Google Search and Maps.',
  },
  {
    title: 'Care Plans',
    href: '/services/care-plans',
    price: 'Starting at $99/mo',
    description:
      'Ongoing website updates, basic checks, priority support, and routine improvement help.',
  },
]

export const metadata: Metadata = {
  title: 'Syfernetics Services | Website, Workflow, Email, Networking, and IT Help',
  description:
    'Explore Syfernetics service sections for website design, website refresh, workflow automation, business email setup, IT help, networking and Wi-Fi, security basics, Google Business Profile help, and care plans.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Syfernetics Services | Website, Workflow, Email, Networking, and IT Help',
    description:
      'Explore Syfernetics service sections for website design, website refresh, workflow automation, business email setup, IT help, networking and Wi-Fi, security basics, Google Business Profile help, and care plans.',
    type: 'website',
    url: 'https://www.syfernetics.com/services',
  },
}

export default function ServicesPage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Services"
        title="Syfernetics provides practical websites, automation, and IT help for small businesses."
        description="Choose the service that best fits your current business need, then start with a practical review and a clear next-step recommendation."
        headingAs="h1"
      >
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <CardShell className="p-6 md:p-7">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Build the right next step, not extra complexity.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              The Syfernetics service pages below are designed to stay focused: short overview, practical starting
              point, and a direct path to get help.
            </p>
          </CardShell>

          <CardShell className="p-6 md:p-7">
            <h2 className="text-2xl font-bold text-white">Not sure where to start?</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Start with the free 20-minute website and workflow review. We&apos;ll look at the problem, then point you
              toward the right service.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Book an Inquiry</ButtonLink>
            </div>
          </CardShell>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hubServices.map((service) => (
            <ClickableCard
              key={service.href}
              href={service.href}
              ariaLabel={`Open ${service.title} service details`}
              className="flex h-full flex-col p-6"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-teal-300 transition-colors group-hover:text-teal-100">
                Service
              </p>
              <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-teal-100">
                {service.title}
              </h2>
              <p className="leading-7 text-slate-300">{service.description}</p>
              <p className="mt-4 text-sm font-semibold text-teal-300">{service.price}</p>
              <p className="mt-auto pt-5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
                View service →
              </p>
            </ClickableCard>
          ))}
        </div>

        <CardShell className="mt-8 p-6 md:p-7">
          <h2 className="text-2xl font-bold text-white">Serving Central Georgia small businesses</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Syfernetics supports Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee,
            Greensboro, Madison, and nearby communities.
          </p>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
