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
      'Yes. Many projects can be handled remotely by fit. Local support is available across Central Georgia for projects that benefit from in-person support.',
  },
  {
    question: 'How do projects start?',
    answer:
      'Every project starts with a practical review and a clear next-step recommendation before committing to a larger scope.',
  },
]

export default function FAQPage() {
  return (
    <PageShell>
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
