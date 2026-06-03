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
    question: 'How much does a small business website cost?',
    answer:
      'Small business website projects usually start with the scope of the site, the number of pages, the amount of copy cleanup needed, and whether the business also needs domain, email, or local SEO help. Syfernetics lists starting packages so owners have a real place to begin before a custom scope is recommended.',
  },
  {
    question: 'Do I need a brand-new website?',
    answer:
      'Not always. Many businesses can improve an existing site with a practical refresh focused on cleaner structure, better mobile readability, stronger calls to action, and clearer service wording.',
  },
  {
    question: 'When is a website refresh better than a new site?',
    answer:
      'A refresh is usually the better fit when the current site already works but looks outdated, hides important services, has weak contact flow, or needs better local search wording. A new site is better when the current structure is too limited or difficult to maintain.',
  },
  {
    question: 'Do you only build websites?',
    answer:
      'No. Syfernetics also helps with workflow automation, business email setup, networking and Wi-Fi support, Google Business Profile help, security basics, website care plans, and practical IT support.',
  },
  {
    question: 'Can projects be handled remotely?',
    answer:
      'Yes. Many website, workflow, email, Google Business Profile, and practical IT support projects can be handled remotely when that is the best fit. Local support is available across Central Georgia for work that benefits from in-person help.',
  },
  {
    question: 'What areas does Syfernetics serve?',
    answer:
      'Syfernetics is based in Milledgeville, Georgia and serves Central Georgia businesses, including Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and remote clients when the project fits.',
  },
  {
    question: 'Can you help with business email and domain setup?',
    answer:
      'Yes. Syfernetics can help small businesses set up professional email, review domain settings, align DNS records, and improve basic deliverability with SPF, DKIM, and DMARC guidance.',
  },
  {
    question: 'Can you help with Google Business Profile setup?',
    answer:
      'Yes. Syfernetics can help review or clean up Google Business Profile information, including categories, service areas, services, contact details, website links, and basic local visibility gaps.',
  },
  {
    question: 'Do you help with networking and Wi-Fi problems?',
    answer:
      'Yes. Syfernetics helps with practical router, Wi-Fi, coverage, device connection, and small-office connectivity issues. The goal is to identify the real cause and give the business a clear next step.',
  },
  {
    question: 'What is included in a website care plan?',
    answer:
      'Care plans are for businesses that need ongoing help with routine website updates, contact form checks, small edits, basic maintenance, and practical improvement planning after launch.',
  },
  {
    question: 'How long does a website project usually take?',
    answer:
      'Timeline depends on scope, content readiness, approvals, and any domain or email work needed. A smaller refresh can move faster than a full website build, and every project starts with a practical review before the schedule is set.',
  },
  {
    question: 'How do projects start?',
    answer:
      'Every project starts with a practical review and a clear next-step recommendation before committing to a larger scope. The review helps define the real problem, the best starting point, and the work that matters first.',
  },
  {
    question: 'Can you help with ongoing updates after launch?',
    answer:
      'Yes. Syfernetics can help with ongoing updates through care plans or scoped follow-up work, depending on how often the business needs changes and support.',
  },
  {
    question: 'What are security basics for small businesses?',
    answer:
      'Security basics include practical improvements like password cleanup, multi-factor authentication guidance, safer account practices, backup recommendations, and reducing common day-to-day technology risks.',
  },
  {
    question: 'What is included in the free 20-minute review?',
    answer:
      'The free review is a short, practical look at your website, workflow, business email, local visibility, or technology issue. The goal is to identify obvious gaps and recommend the next best step.',
  },
  {
    question: 'Can Syfernetics work with a site I already have?',
    answer:
      'Yes. Syfernetics can review an existing website, improve structure and wording, adjust customer paths, clean up key pages, or recommend whether a deeper rebuild makes more sense.',
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
        description="Straight answers about website projects, workflow tools, business email setup, networking support, local visibility, pricing, and practical IT help."
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
