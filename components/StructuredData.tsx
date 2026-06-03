export default function StructuredData() {
  const areaServed = [
    'Milledgeville GA',
    'Eatonton GA',
    'Macon GA',
    'Gray GA',
    'Warner Robins GA',
    'Perry GA',
    'Lake Oconee GA',
    'Greensboro GA',
    'Madison GA',
    'Central Georgia',
  ]

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.syfernetics.com/#organization',
        name: 'Syfernetics',
        url: 'https://www.syfernetics.com/',
        telephone: '+1-478-343-5252',
        email: 'otis.duncan@syfernetics.com',
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://www.syfernetics.com/#business',
        name: 'Syfernetics',
        url: 'https://www.syfernetics.com/',
        telephone: '+1-478-343-5252',
        email: 'otis.duncan@syfernetics.com',
        description:
          'Syfernetics provides website design, workflow automation, business email setup, networking help, and practical IT support for Central Georgia small businesses.',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Milledgeville',
          addressRegion: 'GA',
          addressCountry: 'US',
        },
        areaServed,
        knowsAbout: ['Website Design', 'Website Refresh', 'Workflow Automation', 'Business Email Setup', 'Networking and Wi-Fi Support', 'IT Help', 'Security Basics', 'Google Business Profile Help', 'Website Care Plans'],
        hasOfferCatalog: {
          '@id': 'https://www.syfernetics.com/#offer-catalog',
        },
        parentOrganization: {
          '@id': 'https://www.syfernetics.com/#organization',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.syfernetics.com/#website',
        name: 'Syfernetics',
        url: 'https://www.syfernetics.com/',
        publisher: {
          '@id': 'https://www.syfernetics.com/#organization',
        },
      },
      {
        '@type': 'OfferCatalog',
        '@id': 'https://www.syfernetics.com/#offer-catalog',
        name: 'Syfernetics Services',
        url: 'https://www.syfernetics.com/services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Design',
              url: 'https://www.syfernetics.com/services/website-design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Refresh',
              url: 'https://www.syfernetics.com/services/website-refresh',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Workflow Automation',
              url: 'https://www.syfernetics.com/services/workflow-automation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Email Setup',
              url: 'https://www.syfernetics.com/services/business-email-setup',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Networking and Wi-Fi Support',
              url: 'https://www.syfernetics.com/services/networking-wifi',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Help',
              url: 'https://www.syfernetics.com/services/it-help',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Security Basics',
              url: 'https://www.syfernetics.com/services/security-basics',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Business Profile Help',
              url: 'https://www.syfernetics.com/services/google-business-profile',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Care Plans',
              url: 'https://www.syfernetics.com/services/care-plans',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}