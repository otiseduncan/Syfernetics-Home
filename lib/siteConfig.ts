export type TopNavItem = {
  label: string
  href: string
}

export type ServicePage = {
  slug: string
  href: string
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

export const servicePages: ServicePage[] = [
  {
    slug: 'website-design',
    href: '/services/website-design',
    navLabel: 'Website Design',
    title: 'Small Business Website Design',
    shortDescription:
      'New websites built for small businesses that need a clear, professional online presence.',
    intro:
      'Syfernetics builds clean, mobile-friendly websites that help customers quickly understand what you do and how to contact you.',
    whoItHelps:
      'Small service businesses that need a stronger first impression and a clearer customer path.',
    includes: [
      'Clear page structure for services and contact actions',
      'Mobile-friendly layout and readable content hierarchy',
      'Local SEO-friendly headings and page copy guidance',
      'Contact form and conversion path setup',
    ],
    startingPoint: 'Starting at $1,200',
    contactLabel: 'Website Design',
  },
  {
    slug: 'website-refresh',
    href: '/services/website-refresh',
    navLabel: 'Website Refresh',
    title: 'Website Refresh',
    shortDescription:
      'Modernize outdated websites with clearer messaging, better mobile behavior, and stronger calls-to-action.',
    intro:
      'If your current site is confusing, outdated, or hard to use on mobile, Syfernetics can refresh it without overcomplicating the process.',
    whoItHelps:
      'Businesses with an existing site that needs practical improvements instead of a full rebuild.',
    includes: [
      'Layout cleanup and readability improvements',
      'Service page wording and CTA improvements',
      'Mobile and contact flow fixes',
      'Search snippet title and description guidance',
    ],
    startingPoint: 'Starting at $500',
  },
  {
    slug: 'workflow-automation',
    href: '/services/workflow-automation',
    navLabel: 'Workflow Automation',
    title: 'Workflow Automation',
    shortDescription:
      'Forms, trackers, and practical automations that reduce manual work and missed handoffs.',
    intro:
      'Syfernetics helps turn scattered calls, texts, and handoffs into forms, trackers, and notification flows your team can actually use.',
    whoItHelps:
      'Teams managing repeated service requests, job handoffs, or intake work with inconsistent processes.',
    includes: [
      'Request forms and intake flow setup',
      'Simple tracker systems using practical tools',
      'Notifications and follow-up visibility',
      'Documentation for repeatable use',
    ],
    startingPoint: 'Starting at $500',
  },
  {
    slug: 'business-email',
    href: '/services/business-email',
    navLabel: 'Business Email',
    title: 'Business Email Setup',
    shortDescription:
      'Professional email and domain setup for credibility, deliverability, and daily reliability.',
    intro:
      'Get your domain and business email configured correctly so customers trust what they see and your messages land where they should.',
    whoItHelps:
      'Businesses still using personal email or struggling with domain/email configuration issues.',
    includes: [
      'Business email account setup',
      'Domain and DNS alignment',
      'SPF, DKIM, and DMARC basics',
      'Security-minded account setup guidance',
    ],
    startingPoint: 'Starting at $250',
    contactLabel: 'Business Email Setup',
  },
  {
    slug: 'networking',
    href: '/services/networking',
    navLabel: 'Networking & Wi-Fi',
    title: 'Networking and Wi-Fi Support',
    shortDescription:
      'Practical support for routers, Wi-Fi coverage, and connected devices in small business environments.',
    intro:
      'Syfernetics helps stabilize day-to-day connectivity so your team can stay productive and customers can be served without interruptions.',
    whoItHelps:
      'Small offices, shops, and service businesses with inconsistent connectivity or network confusion.',
    includes: [
      'Router and Wi-Fi setup review',
      'Coverage and connectivity troubleshooting',
      'Device and network organization guidance',
      'Practical recommendation summary',
    ],
    startingPoint: 'Starting at $175',
    contactLabel: 'Networking & Wi-Fi',
  },
  {
    slug: 'it-help',
    href: '/services/it-help',
    navLabel: 'Practical IT Help',
    title: 'Practical Small Business IT Help',
    shortDescription:
      'Hands-on IT support focused on real operations, clear next steps, and practical outcomes.',
    intro:
      'Syfernetics provides practical help with account setup, access issues, software confusion, and technology cleanup without jargon overload.',
    whoItHelps:
      'Owners and teams that need dependable troubleshooting and clear guidance for day-to-day technology issues.',
    includes: [
      'Account and access troubleshooting',
      'Small-business software and setup support',
      'Technology process cleanup and recommendations',
      'Clear follow-up guidance with next-step options',
    ],
    startingPoint: 'Starting at $125 remote',
  },
  {
    slug: 'security-basics',
    href: '/services/security-basics',
    navLabel: 'Security Basics',
    title: 'Security Basics',
    shortDescription:
      'Security-minded setup to reduce common small-business risks without overengineering.',
    intro:
      'Syfernetics focuses on practical security habits that small businesses can maintain consistently.',
    whoItHelps:
      'Businesses that need better account hygiene, safer routines, and backup awareness.',
    includes: [
      'MFA and account protection basics',
      'Password manager setup guidance',
      'Backup and recovery planning basics',
      'Safer daily technology habits',
    ],
    contactLabel: 'Security Basics',
  },
  {
    slug: 'google-business-profile',
    href: '/services/google-business-profile',
    navLabel: 'Google Business Profile',
    title: 'Google Business Profile Help',
    shortDescription:
      'Practical setup and optimization support for local visibility in Google search and maps.',
    intro:
      'Syfernetics helps small businesses improve local visibility by organizing Google Business Profile basics that support trust and discoverability.',
    whoItHelps:
      'Local businesses that want stronger search visibility and more consistent listing quality.',
    includes: [
      'Profile setup and category review',
      'Service and business description cleanup',
      'Basic posting/review workflow guidance',
      'Alignment with website contact and service data',
    ],
    contactLabel: 'Google Business Profile',
  },
  {
    slug: 'care-plans',
    href: '/services/care-plans',
    navLabel: 'Care Plans',
    title: 'Website Care Plans',
    shortDescription:
      'Ongoing website care for updates, checks, and practical monthly improvements.',
    intro:
      'Care plans keep your website dependable and current so small updates do not become large issues later.',
    whoItHelps:
      'Businesses that want ongoing support without launching a full project every time.',
    includes: [
      'Content and page updates',
      'Contact form checks and maintenance',
      'Small design or wording improvements',
      'Priority support for routine changes',
    ],
    startingPoint: 'Starting at $99/mo',
    contactLabel: 'Care Plans',
  },
]

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
    href: '/services/website-refresh',
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
    href: '/services/website-design',
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
    href: '/services/workflow-automation',
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
    href: '/services/business-email',
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
    href: '/services/networking',
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
    href: '/services/care-plans',
  },
]

export const sitemapRoutes = [
  '/',
  '/about',
  '/services',
  '/pricing',
  '/projects',
  '/service-area',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms',
  ...servicePages.map((service) => service.href),
]
