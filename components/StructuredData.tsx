export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.syfernetics.com/#business',
    name: 'Syfernetics',
    url: 'https://www.syfernetics.com/',
    telephone: '+1-478-343-5252',
    email: 'otis.duncan@syfernetics.com',
    description:
      'Syfernetics helps Central Georgia small businesses with website design, website refreshes, workflow automation, business email setup, networking support, and practical IT help.',
    priceRange: '$$',
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
