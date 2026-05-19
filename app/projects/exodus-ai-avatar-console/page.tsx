import type { Metadata } from 'next'
import Image from 'next/image'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

const pageUrl = 'https://www.syfernetics.com/projects/exodus-ai-avatar-console'
const displayImagePath = '/images/projects/exodus-ai-avatar-console.png'
const socialImageUrl = `https://www.syfernetics.com${displayImagePath}`

export const metadata: Metadata = {
  title: 'Exodus AI Avatar Console | Local AI Interface & Workflow System',
  description:
    'Explore the Exodus AI Avatar Console, a Syfernetics project combining local AI, avatar interface design, knowledge management, runtime checks, and workflow automation planning into a practical business-ready system.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Exodus AI Avatar Console | Local AI Interface & Workflow System',
    description:
      'Explore the Exodus AI Avatar Console, a Syfernetics project combining local AI, avatar interface design, knowledge management, runtime checks, and workflow automation planning into a practical business-ready system.',
    url: pageUrl,
    type: 'website',
    images: [{ url: socialImageUrl }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exodus AI Avatar Console | Local AI Interface & Workflow System',
    description:
      'Explore the Exodus AI Avatar Console, a Syfernetics project combining local AI, avatar interface design, knowledge management, runtime checks, and workflow automation planning into a practical business-ready system.',
    images: [socialImageUrl],
  },
}

const featureCards = [
  'Avatar-led interface',
  'Local-first AI workflow',
  'Voice and visual response planning',
  'Knowledge and prompt management',
  'Runtime health checks',
  'Safer tool/permission model',
  'Workflow automation foundation',
  'Business-friendly UX',
]

const relatedServices = [
  { label: 'Website Design', href: '/services/website-design' },
  { label: 'Workflow Automation', href: '/services/workflow-automation' },
  { label: 'IT Help', href: '/services/it-help' },
  { label: 'Security Basics', href: '/services/security-basics' },
  { label: 'Care Plans', href: '/services/care-plans' },
]

export default function ExodusAiAvatarConsolePage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Projects"
        title="Exodus AI Avatar Console"
        description="A local-first AI assistant interface combining chat, voice planning, avatar presentation, knowledge management, runtime checks, and workflow tooling into one practical business-ready console."
        headingAs="h1"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Project focus</h2>
            <p className="mb-6 leading-8 text-slate-300">
              Exodus is an internal Syfernetics project demonstrating local-first AI interface design,
              workflow automation thinking, voice/avatar interaction planning, prompt and knowledge
              management, runtime checks, and safer tool-access architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/services">View Services</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a Project
              </ButtonLink>
            </div>
          </CardShell>

          <CardShell className="p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-2">
              <Image
                src={displayImagePath}
                alt="Exodus AI Avatar Console interface preview"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </CardShell>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Project summary</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-teal-300">Project Type:</span> Local AI / Web App /
                Workflow System
              </li>
              <li>
                <span className="font-semibold text-teal-300">Role:</span> UI/UX, frontend, backend
                architecture planning, prompt system design, workflow strategy
              </li>
              <li>
                <span className="font-semibold text-teal-300">Areas:</span> local AI, avatar interface,
                knowledge management, runtime checks, automation planning
              </li>
              <li>
                <span className="font-semibold text-teal-300">Status:</span> Active internal Syfernetics
                project
              </li>
            </ul>
          </CardShell>

          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Problem</h2>
            <p className="leading-8 text-slate-300">
              Most AI tools are useful but disconnected from real workflows. They may answer questions,
              but they often do not provide one practical interface for voice planning, visual state,
              knowledge organization, system status, permission boundaries, and tool access.
            </p>
          </CardShell>
        </div>

        <CardShell className="mt-6 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Solution</h2>
          <p className="leading-8 text-slate-300">
            Exodus explores a practical local-first AI console where an assistant can operate through a
            focused interface with chat, avatar states, structured knowledge, prompt management, runtime
            checks, and safer future tool access.
          </p>
        </CardShell>

        <CardShell className="mt-6 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Key features</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-teal-300/20 bg-teal-400/10 px-4 py-3 text-sm font-medium text-teal-100"
              >
                {feature}
              </div>
            ))}
          </div>
        </CardShell>

        <CardShell className="mt-6 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Business value</h2>
          <p className="leading-8 text-slate-300">
            This project demonstrates Syfernetics capability in modern web app interfaces, workflow
            automation planning, custom business dashboards, AI-assisted internal tools, local and
            private technology systems, and practical UX for technical systems.
          </p>
        </CardShell>

        <CardShell className="mt-6 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <ButtonLink key={service.href} href={service.href} variant="secondary">
                {service.label}
              </ButtonLink>
            ))}
          </div>
        </CardShell>

        <CardShell className="mt-6 border-teal-300/25 bg-teal-400/10 p-6">
          <h2 className="mb-3 text-2xl font-bold text-white">Want a smarter system for your business?</h2>
          <p className="mb-4 leading-8 text-slate-300">
            Syfernetics builds practical websites, automations, and technology systems for small
            businesses that need tools they can actually use.
          </p>
          <ButtonLink href="/contact">Contact Syfernetics</ButtonLink>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
