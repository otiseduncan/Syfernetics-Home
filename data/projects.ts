export type Project = {
  slug: string
  title: string
  category: string
  description: string
  stack: string[]
  href?: string
  liveUrl?: string
  repoUrl?: string
  ctaLabel?: string
  liveLabel?: string
  repoLabel?: string
  imageSrc?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    slug: 'exodus-ai-avatar-console',
    title: 'Exodus AI Avatar Console',
    category: 'Local AI / Web App / Workflow System',
    description:
      'A local-first AI assistant interface with chat, voice, avatar presentation, knowledge management, and workflow tooling.',
    stack: ['Local AI', 'Web App', 'Workflow Automation', 'UI/UX'],
    href: '/projects/exodus-ai-avatar-console',
    ctaLabel: 'View case study →',
    imageSrc: '/videos/xoduz-intro-poster.jpg',
    imageAlt: 'Exodus AI avatar seated interface visual',
  },
  {
    slug: 'syfernetics-website-rebuild',
    title: 'Syfernetics Website Rebuild',
    category: 'Business Website / SEO',
    description:
      'A complete business-site rebuild focused on service clarity, local SEO structure, pricing visibility, contact flow, and customer-facing credibility for a practical technology brand.',
    stack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Local SEO',
      'Service Positioning',
    ],
    liveUrl: 'https://www.syfernetics.com/',
    repoUrl: 'https://github.com/otiseduncan/Syfernetics-Home',
    liveLabel: 'Open live site ↗',
    repoLabel: 'Open repo ↗',
  },
  {
    slug: 'soggy-doggy-grooming',
    title: 'Soggy Doggy Grooming',
    category: 'Small Business Website',
    description:
      'A small business website project focused on friendly branding, clear service information, customer booking flow, and an affordable path to getting a professional web presence online.',
    stack: ['Web Design', 'Responsive Layout', 'Forms', 'GitHub Pages'],
    liveUrl: 'https://otiseduncan.github.io/soggydoggy/',
    repoUrl: 'https://github.com/otiseduncan/soggydoggy',
    liveLabel: 'Open live site ↗',
    repoLabel: 'Open repo ↗',
  },
  {
    slug: 'fuze-boxx-website',
    title: 'FUZE Boxx Website',
    category: 'Mobile ADAS / Diagnostics Website',
    description:
      'A website project for FUZE Boxx focused on practical service communication, stronger visual credibility, and cleaner customer-facing structure.',
    stack: ['Web Design', 'Responsive Layout', 'Service Messaging', 'GitHub Pages'],
    liveUrl: 'https://otiseduncan.github.io/fuze-boxx-website/',
    repoUrl: 'https://github.com/otiseduncan/fuze-boxx-website',
    liveLabel: 'Open live site ↗',
    repoLabel: 'Open repo ↗',
  },
  {
    slug: 'katiebugs-country-kitchen',
    title: "Katie Bug's Country Kitchen",
    category: 'Restaurant / Product Website Mockup',
    description:
      'A restaurant-style small business website project focused on local branding, menu and service clarity, warm visual presentation, and a cleaner online presence for customers browsing before they visit.',
    stack: [
      'Web Design',
      'Responsive Layout',
      'Local Business Branding',
      'GitHub Pages',
    ],
    liveUrl: 'https://otiseduncan.github.io/katiebugs-country-kitchen/',
    repoUrl: 'https://github.com/otiseduncan/katiebugs-country-kitchen',
    liveLabel: 'Open live site ↗',
    repoLabel: 'Open repo ↗',
  },
  {
    slug: 'financial-tracker',
    title: 'Financial Tracker App',
    category: 'Dashboard / GitHub Repo',
    description:
      'A finance-focused app project built around clear data flow, practical dashboard views, API integration planning, and a user interface designed to make financial information easier to understand.',
    stack: ['React', 'Dashboard UI', 'Data Modeling', 'API Planning'],
    repoUrl: 'https://github.com/otiseduncan/Financial-Tracker',
    repoLabel: 'Open repo ↗',
  },
  {
    slug: 'fieldops-iq-mvp',
    title: 'FieldOps-IQ MVP',
    category: 'Workflow Platform / GitHub Repo',
    description:
      'A workflow MVP focused on field-service operations with role-aware status flow, request handling, and practical coordination visibility.',
    stack: [
      'Workflow Design',
      'Role-Based Views',
      'Job Tracking',
      'MVP Delivery',
    ],
    repoUrl: 'https://github.com/otiseduncan/fieldops-iq-mvp',
    repoLabel: 'Open repo ↗',
  },
]

