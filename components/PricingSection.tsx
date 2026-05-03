type Package = {
  name: string;
  price: string;
  desc: string;
  includes: string[];
  featured?: boolean;
};

const packages: Package[] = [
  {
    name: "Website Refresh",
    price: "Starting at $500",
    desc: "For businesses that already have a website but need it cleaned up, modernized, made mobile-friendly, or rewritten so customers understand what to do next.",
    includes: [
      "Homepage or key-page cleanup",
      "Mobile layout review",
      "Clear service wording",
      "Contact button and form review",
      "Search-friendly page title and description guidance",
    ],
  },
  {
    name: "Small Business Website",
    price: "Starting at $1,200",
    desc: "For local businesses that need a professional web presence with the right pages, clear service sections, and a clean path for customers to contact you.",
    includes: [
      "4–6 page website structure",
      "Home, About, Services, Contact",
      "Mobile-friendly design",
      "Local search setup basics",
      "Launch guidance and hosting support",
    ],
    featured: true,
  },
  {
    name: "Workflow Automation Lite",
    price: "Starting at $500",
    desc: "For shops, churches, contractors, groomers, repair businesses, and service teams that need intake forms, job tracking, or simple process visibility.",
    includes: [
      "Customer intake or request form",
      "Google Sheets or simple tracker",
      "Email notification flow",
      "Simple dashboard planning",
      "Workflow documentation",
    ],
  },
  {
    name: "Business Email Setup",
    price: "Starting at $250",
    desc: "For businesses that need a professional email address, domain connection, basic DNS records, and a cleaner digital foundation.",
    includes: [
      "Domain and DNS review",
      "Business email setup support",
      "SPF/DKIM/DMARC basics",
      "Branded email signature guidance",
      "Account security recommendations",
    ],
  },
  {
    name: "Website Care Plan",
    price: "Starting at $99/mo",
    desc: "For small businesses that need someone to help keep the website updated, checked, and adjusted without starting a new project every time.",
    includes: [
      "Minor content updates",
      "Contact form checks",
      "Basic page edits",
      "Monthly improvement notes",
      "Priority support window",
    ],
  },
  {
    name: "Custom Project",
    price: "Quoted after review",
    desc: "For custom dashboards, internal tools, advanced automation, security-focused work, API integrations, or larger business workflow projects.",
    includes: [
      "Discovery call",
      "Problem and workflow review",
      "Project scope outline",
      "Milestone-based pricing",
      "Clear deliverables before work begins",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20 md:py-28 bg-panel/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Simple pricing that gives small businesses a place to start
          </h2>
          <p className="text-lg leading-7 text-muted">
            These are starting points, not rigid boxes. Every project begins with a short review so the scope,
            price, and deliverables are clear before work starts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal ${
                pkg.featured
                  ? "border-accent/60 bg-accent/10 ring-1 ring-accent/30"
                  : "border-white/10 bg-card/60 hover:border-accent/40"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-6 rounded-full border border-accent/40 bg-accent/20 px-3 py-0.5 text-xs font-semibold text-accent">
                  Best Starter
                </span>
              )}
              <h3 className="mb-1 text-lg font-bold text-fg">{pkg.name}</h3>
              <p className="mb-3 text-accent font-semibold">{pkg.price}</p>
              <p className="mb-4 text-sm leading-6 text-muted">{pkg.desc}</p>
              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-accent shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:otis.duncan@syfernetics.com"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/60 bg-transparent px-6 py-3 font-semibold text-accent transition-all duration-200 hover:bg-accent/10"
          >
            Email Syfernetics to start a review
          </a>
        </div>
      </div>
    </section>
  );
}
