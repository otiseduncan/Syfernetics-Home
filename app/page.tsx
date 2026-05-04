import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import ClickableCard from '@/components/ClickableCard'
import PageShell from '@/components/PageShell'
import ProjectGrid from '@/components/ProjectGrid'
import SectionShell from '@/components/SectionShell'
import { homepageServiceCards, pricingPackages } from '@/lib/siteConfig'

const processSteps = [
  {
    step: '01',
    title: 'Review',
    description:
      'We look at the current website, workflow, email setup, network issue, or business problem and define the real blocker first.',
  },
  {
    step: '02',
    title: 'Scope',
    description:
      'You get a practical recommendation with a clear starting point, so the work stays understandable and right-sized.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Syfernetics implements the pages, setup, tracking flow, or support fixes needed to make the process easier to run.',
  },
  {
    step: '04',
    title: 'Support',
    description:
      'You get clean follow-through, documentation, and next-step guidance instead of being left with a half-explained handoff.',
  },
]

const faqItems = [
  {
    question: 'Do I need a brand-new website?',
    answer:
      'Not always. Many businesses can improve an existing site with a practical refresh focused on structure, clarity, and contact flow.',
  },
  {
    question: 'Do you only build websites?',
    answer:
      'No. Syfernetics also helps with workflow automation, business email setup, networking and Wi-Fi support, Google Business Profile help, and practical IT support.',
  },
  {
    question: 'Can projects be handled remotely?',
    answer:
      'Yes. Many projects can be handled remotely by fit. Local support is available across Central Georgia for work that benefits from in-person support.',
  },
  {
    question: 'How do projects start?',
    answer:
      'Every project starts with a practical review and a clear next-step recommendation before committing to a larger scope.',
  },
]

const serviceAreas = [
  'Milledgeville',
  'Eatonton',
  'Macon',
  'Gray',
  'Warner Robins',
  'Perry',
  'Lake Oconee',
  'Greensboro',
  'Madison',
  'Central Georgia',
  'Remote Support by Fit',
]

export default function HomePage() {
  return (
    <PageShell className="pt-8 md:pt-10">
      <section className="py-10 md:py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              Based in Milledgeville, GA • Serving Central Georgia
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Websites, workflow automation, networking, and practical IT help for small businesses.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Syfernetics helps local service businesses look professional online, clean up broken digital processes,
              and build simple systems that save time. The focus stays on practical tools, clear customer paths,
              and dependable follow-through.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/services">Explore Services</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Send Inquiry
              </ButtonLink>
            </div>
          </div>

          <CardShell className="p-6 md:p-7">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              Built for small business clarity
            </p>
            <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
              One shared system for web presence, workflow, and day-to-day technology support.
            </h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>Clear website structure, service messaging, and contact flow.</p>
              <p>Practical forms, trackers, and notifications that reduce dropped handoffs.</p>
              <p>Business email, DNS, networking, and IT support without jargon overload.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              {['Website Design', 'Workflow Automation', 'Business Email', 'Networking & Wi-Fi', 'Practical IT Help'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </CardShell>
        </div>
      </section>

      <SectionShell
        eyebrow="Services"
        title="Practical digital services for small business owners"
        description="The same service-card system used across the site starts here: clear offer names, clear destinations, and crawlable links to each service page."
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageServiceCards.map((service) => (
            <ClickableCard
              key={service.href}
              href={service.href}
              ariaLabel={`Open ${service.label} service page`}
              className="flex h-full flex-col p-6"
            >
              <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-teal-300 transition-colors group-hover:text-teal-100">
                {service.label}
              </p>
              <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-teal-100">
                {service.title}
              </h2>
              <p className="leading-7 text-slate-300">{service.description}</p>
              <p className="mt-auto pt-5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
                View service details →
              </p>
            </ClickableCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Starting Packages"
        title="Simple pricing that gives small businesses a place to start"
        description="Packages stay aligned with the same service routes used in navigation, pricing, and the sitemap."
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <ClickableCard
              key={pkg.name}
              href={pkg.href}
              ariaLabel={`Open ${pkg.name} package details`}
              className={`flex h-full flex-col p-6 ${pkg.featured ? 'border-teal-300/50 bg-teal-400/10' : ''}`}
            >
              <h2 className="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-teal-100">
                {pkg.name}
              </h2>
              <p className="mb-4 font-semibold text-teal-300">{pkg.price}</p>
              <p className="mb-5 leading-7 text-slate-300">{pkg.description}</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-100">
                View related service →
              </p>
            </ClickableCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Projects"
        title="Project proof built around practical business problems"
        description="Project cards now use the same shared ClickableCard behavior as the rest of the site and open real live or repo links in new tabs."
      >
        <ProjectGrid limit={6} />
      </SectionShell>

      <SectionShell
        eyebrow="Process"
        title="A simple process built for clarity"
        description="Small business owners do not need a complicated technical process. They need clear steps, clear scope, and clear deliverables."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <CardShell key={item.step} className="p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">{item.step}</p>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </CardShell>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Service Area"
        title="Serving Central Georgia small businesses with local and remote support"
        description="Syfernetics is based in Milledgeville and supports small businesses across Central Georgia, plus remote projects that fit the work well."
      >
        <div className="flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
            >
              {area}
            </span>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="FAQ"
        title="Common questions about practical business technology support"
        description="The same answers on the dedicated FAQ page are previewed here in the shared card shell."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {faqItems.map((item) => (
            <CardShell key={item.question} className="p-6">
              <h2 className="mb-3 text-xl font-bold text-white">{item.question}</h2>
              <p className="leading-7 text-slate-300">{item.answer}</p>
            </CardShell>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <CardShell className="p-7 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">Ready to start?</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Start with a practical review and a clear next-step recommendation.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Whether the issue is your website, workflow, business email, networking, or day-to-day technology cleanup,
            the goal is the same: solve the real problem and make the next step clear.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Send Inquiry</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              View Projects
            </ButtonLink>
          </div>
        </CardShell>
      </SectionShell>
    </PageShell>
  )
}