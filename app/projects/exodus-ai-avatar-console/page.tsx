import type { Metadata } from 'next'
import Image from 'next/image'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

const exodusFeatures = [
  'Avatar-led interface',
  'Local-first AI workflow',
  'Voice and visual response system',
  'Knowledge and prompt management',
  'Runtime health checks',
  'Safer tool and permission model',
  'Future-ready automation foundation',
  'Business workflow experimentation',
]

const metaDescription =
  'Explore the Exodus AI Avatar Console, a Syfernetics project combining local AI, voice interaction, avatar presentation, knowledge management, and workflow automation into a practical business-ready interface.'

export const metadata: Metadata = {
  title: 'Exodus AI Avatar Console | Local AI Interface & Workflow System',
  description: metaDescription,
  alternates: {
    canonical: '/projects/exodus-ai-avatar-console',
  },
  openGraph: {
    title: 'Exodus AI Avatar Console | Local AI Interface & Workflow System',
    description: metaDescription,
    type: 'article',
    url: 'https://www.syfernetics.com/projects/exodus-ai-avatar-console',
    images: [
      {
        url: 'https://www.syfernetics.com/videos/xoduz-intro-poster.jpg',
        alt: 'Exodus AI avatar seated interface visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exodus AI Avatar Console | Local AI Interface & Workflow System',
    description: metaDescription,
    images: ['https://www.syfernetics.com/videos/xoduz-intro-poster.jpg'],
  },
}

export default function ExodusAiAvatarConsolePage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Projects"
        title="Exodus AI Avatar Console"
        description="A local-first AI assistant interface combining chat, voice, avatar presentation, knowledge management, and workflow tooling into one practical business-ready console."
        headingAs="h1"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <CardShell className="overflow-hidden p-0">
            <div className="relative aspect-[16/10] w-full bg-slate-950/60">
              <Image
                src="/videos/xoduz-intro-poster.jpg"
                alt="Exodus AI avatar seated interface visual"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </CardShell>

          <CardShell className="p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">Project Summary</p>
            <div className="mt-5 space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-white">Project Type:</span> Local AI / Web App / Workflow System
              </p>
              <p>
                <span className="font-semibold text-white">Role:</span> UI/UX, frontend, backend, local runtime architecture, prompt system design
              </p>
              <p>
                <span className="font-semibold text-white">Stack/Areas:</span> React, local AI, voice pipeline, runtime checks, knowledge management, automation planning
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span> Active internal Syfernetics project
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services">View Services</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a Project
              </ButtonLink>
            </div>
          </CardShell>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Problem"
        title="Most AI tools do not connect cleanly to daily business workflows"
        description="Many AI products can answer questions, but they are often disconnected from the systems teams actually need to run operations."
      >
        <CardShell className="p-6">
          <p className="leading-8 text-slate-300">
            Small businesses need a unified interface that combines conversation, voice behavior, visual feedback, knowledge structure, runtime visibility, permission boundaries, and tool access planning. Without that, AI stays interesting but disconnected from execution.
          </p>
        </CardShell>
      </SectionShell>

      <SectionShell
        eyebrow="Solution"
        title="Exodus was built as a practical local-first AI console"
        description="The project explores a safer, more grounded architecture for usable business AI workflows."
      >
        <CardShell className="p-6">
          <ul className="space-y-3 text-slate-300">
            <li>Respond through a chat interface with clear context flow.</li>
            <li>Speak with synchronized voice behavior tied to assistant responses.</li>
            <li>Display avatar states such as idle, thinking, and speaking.</li>
            <li>Manage structured knowledge and reusable prompts.</li>
            <li>Support safer future tool access with permission gates.</li>
            <li>Monitor runtime health and service status visibility.</li>
          </ul>
        </CardShell>
      </SectionShell>

      <SectionShell
        eyebrow="Key Features"
        title="Capabilities designed for practical implementation"
        description="Feature areas focus on real workflow integration instead of standalone AI demos."
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
          {exodusFeatures.map((feature) => (
            <CardShell key={feature} className="flex items-center p-6">
              <p className="font-semibold leading-7 text-slate-200">{feature}</p>
            </CardShell>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Business Value"
        title="A proof of capability for practical business technology systems"
        description="Exodus is positioned as an internal Syfernetics project to demonstrate implementation depth, not as client work."
      >
        <CardShell className="p-6">
          <p className="leading-8 text-slate-300">
            This project demonstrates Syfernetics capability in modern web interfaces, custom business dashboards, workflow automation tools, AI-assisted internal tooling, local and private technology systems, and user-friendly technical product design that teams can actually adopt.
          </p>
        </CardShell>
      </SectionShell>

      <SectionShell
        eyebrow="Related Services"
        title="Services aligned with this build direction"
        description="Current public service routing is consolidated, so related paths point to the active services page."
      >
        <CardShell className="p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/services">Explore Services</ButtonLink>
          </div>
        </CardShell>
      </SectionShell>

      <SectionShell>
        <CardShell className="p-7 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">Final CTA</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Want a smarter system for your business?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Syfernetics builds practical websites, automations, and technology systems for small businesses that need tools they can actually use.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Contact Syfernetics</ButtonLink>
          </div>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}
