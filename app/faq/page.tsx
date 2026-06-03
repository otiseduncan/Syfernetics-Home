import type { Metadata } from 'next'
import ButtonLink from '@/components/ButtonLink'
import CardShell from '@/components/CardShell'
import PageShell from '@/components/PageShell'
import SectionShell from '@/components/SectionShell'

export const metadata: Metadata = {
  title: 'Syfernetics FAQ | Websites, Workflow Automation & Small Business IT',
  description:
    'Answers to common questions about Syfernetics website design, workflow automation, business email setup, networking support, pricing, and small business IT help.',
  openGraph: {
    title: 'Syfernetics FAQ | Websites, Workflow Automation & Small Business IT',
    description:
      'Answers to common questions about Syfernetics website design, workflow automation, business email setup, networking support, pricing, and small business IT help.',
    type: 'website',
    url: 'https://www.syfernetics.com/faq',
  },
}

const faqItems = [
  {
    question: 'How much does a website usually cost?',
    answer:
      'Most projects start with a practical scope discussion first. Many small business websites begin around the pricing shown on this site, and final cost depends on pages, content readiness, and features needed.',
  },
  {
    question: 'Should I refresh my current website or build a new one?',
    answer:
      'If your current site structure is usable, a refresh is often the smartest path. If the foundation is too limited or outdated, a new build can save time and produce a cleaner long-term result.',
  },
  {
    question: 'Do you support businesses remotely?',
    answer:
      'Yes. Many website, workflow, and IT support projects can be handled remotely when it is a good fit for the work and your team.',
  },
  {
    question: 'What areas in Central Georgia do you serve?',
    answer:
      'Syfernetics is based in Milledgeville and serves small businesses across Central Georgia, including Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, and Madison.',
  },
  {
    question: 'Can you help with business email and domain setup?',
    answer:
      'Yes. Syfernetics helps with business email setup, domain alignment, and practical DNS-related issues so your business communication is more professional and reliable.',
  },
  {
    question: 'Do you offer Google Business Profile help?',
    answer:
      'Yes. Help is available for profile cleanup, service details, category alignment, and basic consistency improvements between your website and listing information.',
  },
  {
    question: 'Do you provide networking and Wi-Fi help for small businesses?',
    answer:
      'Yes. Networking and Wi-Fi support includes practical troubleshooting for coverage gaps, unstable connections, and day-to-day connectivity issues.',
  },
  {
    question: 'Do you offer website care plans?',
    answer:
      'Yes. Care plans are available for businesses that need ongoing updates, routine checks, and help with small improvements over time.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary by scope and responsiveness, but many small projects can move quickly once goals, content, and priorities are clear.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Projects start with a short conversation and a practical review so the next step is clear before committing to larger work.',
  },
  {
    question: 'Can you handle ongoing updates after launch?',
    answer:
      'Yes. Ongoing updates and support are available so your site and core systems stay current instead of falling behind.',
  },
  {
    question: 'What security basics do you help with?',
    answer:
      'Support can include practical account security improvements such as stronger access habits, MFA guidance, and basic risk-reduction steps for everyday business tools.',
  },
  {
    question: 'What is included in the free 20-minute review?',
    answer:
      'The review focuses on your website, workflow, or current technology setup. You get practical observations and clear next-step recommendations you can act on.',
  },
  {
    question: 'Do you only build websites?',
    answer:
      'No. Syfernetics also helps with workflow automation, business email setup, networking and Wi-Fi support, Google Business Profile help, and practical IT support.',
  },
  {
    question: 'Can you work with my existing tools and setup?',
    answer:
      'Yes. The goal is to improve what is already working and fix what is slowing you down, not force unnecessary replacements.',
  },
  {
    question: 'Will I get plain-language recommendations?',
    answer:
      'Yes. Recommendations are kept practical and straightforward so you can make decisions confidently without technical guesswork.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionShell
        eyebrow="FAQ"
        title="Common questions about practical business technology support"
        description="Straight answers about website projects, workflow tools, business email setup, networking support, and practical IT help."
        headingAs="h1"
      >
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {faqItems.map((item) => (
            <CardShell key={item.question} className="flex h-full flex-col p-6">
              <h2 className="mb-3 text-xl font-bold text-white">{item.question}</h2>
              <p className="leading-7 text-slate-300">{item.answer}</p>
            </CardShell>
          ))}
        </div>

        <div className="mt-6">
          <ButtonLink href="/contact">Contact Syfernetics</ButtonLink>
        </div>
      </SectionShell>
    </PageShell>
  )
}
