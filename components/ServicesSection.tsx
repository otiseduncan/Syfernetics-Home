const services = [
  {
    title: "Small business website design",
    icon: "🌐",
    desc: "New websites built for small businesses that need a clear, professional web presence that converts visitors to customers.",
  },
  {
    title: "Website cleanup and redesign",
    icon: "✏️",
    desc: "Fix outdated layouts, unclear messaging, mobile issues, and broken contact paths on an existing website.",
  },
  {
    title: "Forms, trackers, and simple automations",
    icon: "⚙️",
    desc: "Replace scattered messages and manual tracking with organized intake forms, spreadsheets, and notification flows.",
  },
  {
    title: "Business email, domains, and DNS",
    icon: "📧",
    desc: "Set up a professional business email address, connect your domain, and configure the DNS records that keep email reliable.",
  },
  {
    title: "Website care and small updates",
    icon: "🔧",
    desc: "Ongoing support for content updates, contact form checks, basic edits, and monthly improvement notes.",
  },
  {
    title: "Practical IT help for small business",
    icon: "🛡️",
    desc: "Security-minded setup including MFA, password manager guidance, backups, and reducing common small-business digital risks.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Practical digital services for small business owners
          </h2>
          <p className="text-lg leading-7 text-muted">
            Syfernetics is designed for service businesses that need clear help without confusing tech language.
            The goal is to make the business easier to find, easier to contact, and easier to operate.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-white/10 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-teal"
            >
              <div className="mb-3 text-2xl">{s.icon}</div>
              <h3 className="mb-2 font-bold text-fg">{s.title}</h3>
              <p className="text-sm leading-6 text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
