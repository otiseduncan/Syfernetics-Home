export type TopNavItem = {
  label: string
  href: string
}

export type ServiceSlug =
  | 'website-design'
  | 'website-refresh'
  | 'workflow-automation'
  | 'business-email-setup'
  | 'networking-wifi'
  | 'it-help'
  | 'security-basics'
  | 'google-business-profile'
  | 'care-plans'

export type ServicePath = `/services/${ServiceSlug}`

export type ServiceDetail = {
  slug: ServiceSlug
  href: ServicePath
  navLabel: string
  title: string
  h1: string
  seoTitle: string
  metaDescription: string
  shortDescription: string
  angle: string
  whoItHelps: string
  includes: string[]
  commonProblems: string[]
  startingPrice: string
  relatedServiceSlugs: ServiceSlug[]
  contactLabel?: string
}

export type ServicePage = {
  id: ServiceSlug
  href: ServicePath
  navLabel: string
  title: string
  shortDescription: string
  intro: string
  whoItHelps: string
  includes: string[]
  startingPoint?: string
  contactLabel?: string
}

export type ContactServiceOption = {
  label: string
  value: string
}

export type PricingPackage = {
  name: string
  price: string
  description: string
  includes: string[]
  href: string
  featured?: boolean
}

export const topLevelPages: TopNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const standardServiceProcess = [
  'Review the need',
  'Recommend the right fix',
  'Build or configure the solution',
  'Test and clean up',
  'Support next steps',
]

export const standardServiceAreaCopy =
  'Syfernetics serves small businesses across Central Georgia, including Milledgeville, Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, and Madison.'

export const standardServiceCta = {
  heading: 'Need help with this?',
  text:
    'Syfernetics helps small businesses build practical technology systems that are clean, useful, and easier to manage.',
  href: '/contact',
  label: 'Contact Syfernetics',
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'website-design',
    href: '/services/website-design',
    navLabel: 'Website Design',
    title: 'Website design',
    h1: 'Website Design for Small Businesses in Central Georgia',
    seoTitle: 'Website Design for Small Businesses in Central Georgia | Syfernetics',
    metaDescription:
      'Syfernetics builds clean, mobile-friendly websites for small businesses in Central Georgia with clear page structure, readable content, and contact-focused design.',
    shortDescription:
      'New websites for small businesses that need a professional online presence without unnecessary complexity.',
    angle:
      'New websites for small businesses that need a professional online presence without unnecessary complexity.',
    whoItHelps:
      'Small businesses that need a clear, professional website customers can trust and navigate quickly.',
    includes: [
      'Mobile-friendly website design',
      'Clear page structure',
      'Contact-focused calls to action',
      'Basic SEO setup',
      'Service and business information organization',
      'Launch support',
    ],
    commonProblems: [
      'No clear online presence for new customers',
      'Confusing page structure that hides key services',
      'Low mobile readability and weak contact flow',
      'Website copy that does not support local search intent',
    ],
    startingPrice: 'Starting at $1,200',
    relatedServiceSlugs: ['website-refresh', 'google-business-profile', 'care-plans'],
    contactLabel: 'Website Design',
  },
  {
    slug: 'website-refresh',
    href: '/services/website-refresh',
    navLabel: 'Website Refresh',
    title: 'Website refresh',
    h1: 'Website Refresh Services for Small Businesses in Central Georgia',
    seoTitle: 'Website Refresh Services in Central Georgia | Syfernetics',
    metaDescription:
      'Modernize an outdated small business website with cleaner messaging, better mobile behavior, local SEO improvements, and stronger calls to action.',
    shortDescription:
      'Improve an existing site without starting completely over.',
    angle: 'Improve an existing site without starting completely over.',
    whoItHelps:
      'Businesses with an existing website that needs practical upgrades for clarity, usability, and conversion.',
    includes: [
      'Visual cleanup',
      'Content organization',
      'Mobile layout improvements',
      'Call-to-action improvements',
      'Basic SEO cleanup',
      'Homepage and service section polish',
    ],
    commonProblems: [
      'Outdated visuals that reduce trust',
      'Service messaging that is hard to scan',
      'Weak mobile behavior and layout breaks',
      'CTAs that do not guide users to contact',
    ],
    startingPrice: 'Starting at $500',
    relatedServiceSlugs: ['website-design', 'google-business-profile', 'care-plans'],
  },
  {
    slug: 'workflow-automation',
    href: '/services/workflow-automation',
    navLabel: 'Workflow Automation',
    title: 'Workflow automation',
    h1: 'Workflow Automation for Small Businesses',
    seoTitle: 'Workflow Automation for Small Businesses | Syfernetics',
    metaDescription:
      'Syfernetics helps small businesses reduce manual work with practical forms, trackers, notifications, handoff flows, and simple automation systems.',
    shortDescription:
      'Reduce repetitive manual work with practical business tools and automations.',
    angle: 'Reduce repetitive manual work with practical business tools and automations.',
    whoItHelps:
      'Teams that lose time to repeated manual tasks, inconsistent handoffs, and scattered status tracking.',
    includes: [
      'Intake forms',
      'Trackers and spreadsheets',
      'Notifications',
      'Task handoff flows',
      'Simple dashboards',
      'Process cleanup',
    ],
    commonProblems: [
      'Manual intake and follow-up causing delays',
      'No shared visibility into task status',
      'Dropped handoffs between team members',
      'Repeated admin tasks consuming productive time',
    ],
    startingPrice: 'Starting at $500',
    relatedServiceSlugs: ['business-email-setup', 'it-help', 'care-plans'],
  },
  {
    slug: 'business-email-setup',
    href: '/services/business-email-setup',
    navLabel: 'Business Email Setup',
    title: 'Business email setup',
    h1: 'Business Email Setup for Small Businesses',
    seoTitle: 'Business Email Setup for Small Businesses | Syfernetics',
    metaDescription:
      'Get professional business email and domain setup help, including DNS alignment, SPF, DKIM, DMARC, and secure account configuration.',
    shortDescription:
      'Professional email setup that makes your business look legitimate and improves deliverability.',
    angle:
      'Professional email setup that makes your business look legitimate and improves deliverability.',
    whoItHelps:
      'Businesses moving off personal email or fixing domain and deliverability issues in existing setups.',
    includes: [
      'Domain email setup',
      'DNS record review',
      'SPF, DKIM, and DMARC guidance',
      'Mailbox/account configuration',
      'Basic security setup',
      'Troubleshooting support',
    ],
    commonProblems: [
      'Business using personal email addresses',
      'Messages landing in spam or being rejected',
      'DNS records misaligned after setup changes',
      'Unclear ownership of domain and mailbox settings',
    ],
    startingPrice: 'Starting at $250',
    relatedServiceSlugs: ['website-design', 'security-basics', 'it-help'],
    contactLabel: 'Business Email Setup',
  },
  {
    slug: 'networking-wifi',
    href: '/services/networking-wifi',
    navLabel: 'Networking / Wi-Fi',
    title: 'Networking / Wi-Fi',
    h1: 'Networking and Wi-Fi Help for Small Businesses',
    seoTitle: 'Networking and Wi-Fi Help for Small Businesses | Syfernetics',
    metaDescription:
      'Practical router, Wi-Fi, coverage, and connectivity support for small businesses that need reliable day-to-day network performance.',
    shortDescription:
      'Fix unreliable Wi-Fi, coverage gaps, and basic small-business connectivity issues.',
    angle:
      'Fix unreliable Wi-Fi, coverage gaps, and basic small-business connectivity issues.',
    whoItHelps:
      'Small businesses dealing with unstable Wi-Fi, poor coverage, and routine connectivity interruptions.',
    includes: [
      'Router and Wi-Fi review',
      'Coverage troubleshooting',
      'Small office connectivity help',
      'Device connection support',
      'Basic network cleanup',
      'Practical recommendations',
    ],
    commonProblems: [
      'Dead zones and weak signal in key work areas',
      'Frequent disconnects disrupting customer service',
      'Devices dropping or failing to join networks',
      'Unclear router and access point configuration',
    ],
    startingPrice: 'Starting at $175',
    relatedServiceSlugs: ['it-help', 'security-basics', 'care-plans'],
    contactLabel: 'Networking / Wi-Fi',
  },
  {
    slug: 'it-help',
    href: '/services/it-help',
    navLabel: 'IT Help',
    title: 'IT help',
    h1: 'Small Business IT Help in Central Georgia',
    seoTitle: 'Small Business IT Help in Central Georgia | Syfernetics',
    metaDescription:
      'Syfernetics provides practical IT help for account access, software issues, device setup, troubleshooting, and small business technology support.',
    shortDescription:
      'Practical troubleshooting for small businesses that need help without a full internal IT department.',
    angle:
      'Practical troubleshooting for small businesses that need help without a full internal IT department.',
    whoItHelps:
      'Owners and teams who need straightforward troubleshooting and clear next steps when technology slows work down.',
    includes: [
      'Remote troubleshooting',
      'Device setup help',
      'Account access support',
      'Software issue review',
      'Basic cleanup and recommendations',
      'Next-step guidance',
    ],
    commonProblems: [
      'Recurring login, account, or access issues',
      'Software setup problems interrupting operations',
      'New devices not configured for business use',
      'No clear priority list for technology fixes',
    ],
    startingPrice: 'Starting at $125 remote',
    relatedServiceSlugs: ['networking-wifi', 'security-basics', 'business-email-setup'],
  },
  {
    slug: 'security-basics',
    href: '/services/security-basics',
    navLabel: 'Security Basics',
    title: 'Security basics',
    h1: 'Security Basics for Small Businesses',
    seoTitle: 'Security Basics for Small Businesses | Syfernetics',
    metaDescription:
      'Reduce common small-business technology risks with password cleanup, MFA setup, backup guidance, safer habits, and basic account protection.',
    shortDescription:
      'Basic, practical security improvements for everyday small-business risks.',
    angle: 'Basic, practical security improvements for everyday small-business risks.',
    whoItHelps:
      'Businesses that want better baseline protection without enterprise-level complexity.',
    includes: [
      'Password and account review',
      'MFA setup guidance',
      'Backup recommendations',
      'Safer access practices',
      'Common risk cleanup',
      'Basic security checklist',
    ],
    commonProblems: [
      'Weak password practices across shared accounts',
      'No MFA on critical tools and business logins',
      'No clear backup expectations for recovery',
      'Risky daily habits increasing avoidable exposure',
    ],
    startingPrice: 'Contact for estimate',
    relatedServiceSlugs: ['business-email-setup', 'it-help', 'care-plans'],
    contactLabel: 'Security Basics',
  },
  {
    slug: 'google-business-profile',
    href: '/services/google-business-profile',
    navLabel: 'Google Business Profile Help',
    title: 'Google Business Profile help',
    h1: 'Google Business Profile Help in Central Georgia',
    seoTitle: 'Google Business Profile Help in Central Georgia | Syfernetics',
    metaDescription:
      'Improve local visibility with Google Business Profile setup, cleanup, category review, service updates, and contact information alignment.',
    shortDescription:
      'Help local businesses appear cleaner and more consistent in Google Search and Maps.',
    angle:
      'Help local businesses appear cleaner and more consistent in Google Search and Maps.',
    whoItHelps:
      'Local businesses that need clearer profile information and better consistency across search and maps.',
    includes: [
      'Profile setup or cleanup',
      'Category and service review',
      'Contact information alignment',
      'Website link review',
      'Service area review',
      'Basic local visibility guidance',
    ],
    commonProblems: [
      'Inconsistent business details reducing trust',
      'Missing or outdated category and service data',
      'Website and listing information out of sync',
      'Low local visibility from profile gaps',
    ],
    startingPrice: 'Contact for estimate',
    relatedServiceSlugs: ['website-design', 'website-refresh', 'care-plans'],
    contactLabel: 'Google Business Profile Help',
  },
  {
    slug: 'care-plans',
    href: '/services/care-plans',
    navLabel: 'Care Plans',
    title: 'Care plans',
    h1: 'Website Care Plans for Small Businesses',
    seoTitle: 'Website Care Plans for Small Businesses | Syfernetics',
    metaDescription:
      'Keep your small business website current with ongoing updates, checks, basic maintenance, and priority support for routine changes.',
    shortDescription:
      'Ongoing support for businesses that need routine help keeping their website and core tech updated.',
    angle:
      'Ongoing support for businesses that need routine help keeping their website and core tech updated.',
    whoItHelps:
      'Businesses that need ongoing support instead of restarting from scratch for every small request.',
    includes: [
      'Routine website updates',
      'Basic site checks',
      'Priority support for small changes',
      'Content updates',
      'Maintenance guidance',
      'Ongoing improvement planning',
    ],
    commonProblems: [
      'Updates piling up between larger projects',
      'Small issues becoming bigger over time',
      'No consistent maintenance rhythm or owner',
      'Routine requests delayed by unclear support flow',
    ],
    startingPrice: 'Starting at $99/mo',
    relatedServiceSlugs: ['website-design', 'website-refresh', 'google-business-profile'],
    contactLabel: 'Care Plans',
  },
]

export const serviceDetailsBySlug: Record<ServiceSlug, ServiceDetail> =
  Object.fromEntries(serviceDetails.map((service) => [service.slug, service])) as Record<
    ServiceSlug,
    ServiceDetail
  >

export const servicePages: ServicePage[] = serviceDetails.map((service) => ({
  id: service.slug,
  href: service.href,
  navLabel: service.navLabel,
  title: service.title,
  shortDescription: service.shortDescription,
  intro: service.angle,
  whoItHelps: service.whoItHelps,
  includes: service.includes,
  startingPoint: service.startingPrice,
  contactLabel: service.contactLabel,
}))

export const homepageServiceCards = servicePages.map((service) => ({
  label: service.navLabel,
  title: service.title,
  description: service.shortDescription,
  href: service.href,
}))

export const contactServiceOptions: ContactServiceOption[] = [
  ...servicePages.map((service) => ({
    label: service.contactLabel ?? service.navLabel,
    value: service.contactLabel ?? service.navLabel,
  })),
  { label: 'Custom project', value: 'Custom project' },
]

export const pricingPackages: PricingPackage[] = [
  {
    name: 'Website Refresh',
    price: 'Starting at $500',
    description:
      'For businesses with an existing site that needs cleaner layout, clearer messaging, and stronger customer flow.',
    includes: [
      'Homepage or key-page cleanup',
      'Mobile layout review',
      'Service wording refinement',
      'CTA and contact path improvements',
    ],
    href: '/services',
  },
  {
    name: 'Small Business Website',
    price: 'Starting at $1,200',
    description:
      'For local businesses that need a professional site with clear pages and practical conversion flow.',
    includes: [
      'Core business website structure',
      'Mobile-first responsiveness',
      'Service and trust-page guidance',
      'Launch and handoff support',
    ],
    href: '/services',
    featured: true,
  },
  {
    name: 'Workflow Automation Lite',
    price: 'Starting at $500',
    description:
      'For teams that need intake forms, tracking flow, and practical process visibility.',
    includes: [
      'Request or intake form',
      'Simple tracking workflow',
      'Notifications setup',
      'Documentation and next-step plan',
    ],
    href: '/services',
  },
  {
    name: 'Business Email Setup',
    price: 'Starting at $250',
    description:
      'For businesses moving to a professional email foundation with reliable domain alignment.',
    includes: [
      'Business email setup support',
      'DNS and domain alignment',
      'SPF/DKIM/DMARC basics',
      'Security-minded account setup',
    ],
    href: '/services',
  },
  {
    name: 'Network & Wi-Fi Checkup',
    price: 'Starting at $175',
    description:
      'For practical connectivity support in offices and service-business environments.',
    includes: [
      'Router and Wi-Fi review',
      'Device connectivity check',
      'Network organization guidance',
      'Practical recommendation summary',
    ],
    href: '/services',
  },
  {
    name: 'Website Care Plan',
    price: 'Starting at $99/mo',
    description:
      'For ongoing website maintenance, updates, and small practical improvements.',
    includes: [
      'Routine content updates',
      'Contact form checks',
      'Small edits and cleanups',
      'Priority support window',
    ],
    href: '/services',
  },
]

export const sitemapRoutes = [
  '/',
  '/about',
  '/services',
  '/services/website-design',
  '/services/website-refresh',
  '/services/workflow-automation',
  '/services/business-email-setup',
  '/services/networking-wifi',
  '/services/it-help',
  '/services/security-basics',
  '/services/google-business-profile',
  '/services/care-plans',
  '/pricing',
  '/projects',
  '/projects/exodus-ai-avatar-console',
  '/service-area',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
]
