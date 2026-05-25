import type { Metadata } from 'next'
import Image from 'next/image'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

const pageUrl = 'https://www.syfernetics.com/projects/xoduz-ai-avatar-console'
const displayImagePath = '/images/projects/xoduz-ai-avatar-console.png'
const previewArtPath = '/images/projects/xoduz-build-preview.svg'
const socialImageUrl = `https://www.syfernetics.com${displayImagePath}`

export const metadata: Metadata = {
  title: 'Xoduz AI Avatar Console | Local AI Interface & Workflow System',
  description:
    'An active Syfernetics proof-of-capability project showing a local-first AI assistant console with avatar presentation, voice workflow planning, memory organization, runtime checks, and practical business automation architecture.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Xoduz AI Avatar Console | Local AI Interface & Workflow System',
    description:
      'An active Syfernetics proof-of-capability project showing a local-first AI assistant console with avatar presentation, voice workflow planning, memory organization, runtime checks, and practical business automation architecture.',
    url: pageUrl,
    type: 'website',
    images: [{ url: socialImageUrl }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xoduz AI Avatar Console | Local AI Interface & Workflow System',
    description:
      'An active Syfernetics proof-of-capability project showing a local-first AI assistant console with avatar presentation, voice workflow planning, memory organization, runtime checks, and practical business automation architecture.',
    images: [socialImageUrl],
  },
}

type BuildPreviewMedia = {
  title: string
  description: string
  src: string
  poster: string
  status: 'ready' | 'coming-soon'
}

const buildHighlights = [
  'Local-first assistant console',
  'Avatar-led interface with speaking and idle presentation',
  'Voice and response-timing work',
  'Memory and knowledge workflow planning',
  'Runtime health and status checks',
  'Permission-aware tool/workflow architecture',
  'Business-friendly UI direction',
]

const buildPreviewMedia: BuildPreviewMedia[] = [
  {
    title: 'Xoduz build preview',
    description:
      'Recent build previews show Xoduz moving from concept into a working local assistant console, including avatar presentation, voice-response timing, workflow planning, and memory-system architecture.',
    src: '/videos/xoduz-speaking-1448x1086.mp4',
    poster: previewArtPath,
    status: 'ready',
  },
]

const relatedServices = [
  { label: 'Website Design', href: '/services/website-design' },
  { label: 'Workflow Automation', href: '/services/workflow-automation' },
  { label: 'IT Help', href: '/services/it-help' },
  { label: 'Security Basics', href: '/services/security-basics' },
  { label: 'Care Plans', href: '/services/care-plans' },
]

export default function XoduzAiAvatarConsolePage() {
  return (
    <PageShell>
      <SectionShell
        eyebrow="Projects"
        title="Xoduz AI Avatar Console"
        description="Xoduz is an active Syfernetics proof-of-capability project: a local-first AI assistant console that combines chat, voice/avatar presentation, memory and knowledge organization, runtime checks, and workflow automation planning into one practical interface."
        headingAs="h1"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CardShell className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Project focus</h2>
            <p className="mb-6 leading-8 text-slate-300">
              Xoduz demonstrates how Syfernetics approaches practical AI systems: custom interface
              design, private/local-first workflows, avatar-led presentation, voice and timing
              behavior, memory organization, runtime health checks, and permission-conscious tool use.
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
                alt="Xoduz AI Avatar Console interface preview"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </CardShell>
        </div>

        <SectionShell
          eyebrow="Current Build Highlights"
          title="Current Build Highlights"
          description="The current prototype work is centered on a practical assistant console, not a concept mockup."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {buildHighlights.map((highlight) => (
              <CardShell key={highlight} className="p-5">
                <p className="text-base font-semibold leading-7 text-white">{highlight}</p>
              </CardShell>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Video Proof / Build Preview"
          title="Video Proof / Build Preview"
          description="Recent build previews show Xoduz moving from concept into a working local assistant console, including avatar presentation, voice-response timing, workflow planning, and memory-system architecture."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {buildPreviewMedia.map((media) => (
              <CardShell key={media.title} className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                      {media.status === 'ready' ? 'Video Ready' : 'Preview Coming Soon'}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{media.title}</h3>
                  </div>
                </div>

                {media.src ? (
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-2">
                    <video
                      controls
                      playsInline
                      poster={media.poster}
                      className="aspect-video w-full rounded-lg bg-black object-cover"
                    >
                      <source src={media.src} />
                    </video>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-2">
                    <div className="grid gap-4 rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),rgba(2,6,23,0.96)_58%)] p-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
                        <Image
                          src={media.poster}
                          alt="Xoduz build preview artwork"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                          Build preview video coming soon.
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{media.description}</p>
                        <p className="mt-4 text-sm font-semibold text-teal-200">
                          Local media support is ready for future proof clips.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardShell>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Why this matters for businesses"
          title="Why this matters for businesses"
          description="This project is not just an AI demo. It demonstrates how Syfernetics approaches modern business systems: practical interfaces, clear workflows, private/local-first architecture when appropriate, and tools designed around how people actually work."
        >
          <CardShell className="p-6">
            <p className="leading-8 text-slate-300">
              The point of Xoduz is to prove that a business-facing AI interface can feel clear,
              controlled, and useful. It shows how visual presentation, memory structure, status checks,
              and workflow planning can be combined into one system that supports real work instead of
              adding extra complexity.
            </p>
          </CardShell>
        </SectionShell>

        <CardShell className="mt-6 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Business value</h2>
          <p className="leading-8 text-slate-300">
            Xoduz demonstrates Syfernetics capability in custom web app interfaces, AI-assisted workflow
            design, business dashboards, local/private technology systems, prompt and knowledge
            organization, and user-friendly interfaces for complex technical systems.
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