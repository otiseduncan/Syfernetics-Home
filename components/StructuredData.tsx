export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Syfernetics',
    url: 'https://syfernetics.com/',
    telephone: '+1-478-343-5252',
    email: 'otis.duncan@syfernetics.com',
    description:
      'Websites, workflow automation, networking, and practical IT help for Central Georgia small businesses.',
    areaServed: [
      'Milledgeville GA',
      'Eatonton GA',
      'Macon GA',
      'Gray GA',
      'Warner Robins GA',
      'Perry GA',
      'Lake Oconee',
      'Greensboro GA',
      'Madison GA',
      'Central Georgia',
    ],
    serviceType: [
      'Small business website design',
      'Website refresh',
      'Workflow automation',
      'Business email setup',
      'Small office networking support',
      'Practical IT help',
      'Basic security guidance',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
