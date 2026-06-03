export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.syfernetics.com/#business',
    name: 'Syfernetics',
    url: 'https://www.syfernetics.com/',
    telephone: '+1-478-343-5252',
    email: 'otis.duncan@syfernetics.com',
    description:
      'Syfernetics provides website design, workflow automation, business email setup, networking help, and practical IT support for Central Georgia small businesses.',
    keywords: 'Website designer, IT support, technology services, Central Georgia',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milledgeville',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
    areaServed: [
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
    ],
    knowsAbout: ['Website Design', 'IT Support', 'Technology Services'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Syfernetics Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Small Business Website Design' },
        { '@type': 'Offer', name: 'Website Refresh' },
        { '@type': 'Offer', name: 'Workflow Automation' },
        { '@type': 'Offer', name: 'Business Email and Domain Setup' },
        { '@type': 'Offer', name: 'Networking and Wi-Fi Support' },
        { '@type': 'Offer', name: 'Practical Small Business IT Help' },
        { '@type': 'Offer', name: 'Security Basics' },
        { '@type': 'Offer', name: 'Google Business Profile Help' },
        { '@type': 'Offer', name: 'Website Care Plans' },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}