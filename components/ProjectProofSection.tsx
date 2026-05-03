const projects = [
  {
    title: "Financial Tracker App",
    category: "Full-stack / Dashboard",
    desc: "A finance-focused app project built around clear data flow, practical dashboard views, API integration planning, and a user interface designed to make financial information easier to understand.",
  },
  {
    title: "Soggy Doggy Grooming",
    category: "Small Business Website",
    desc: "A small business website project focused on friendly branding, clear service information, customer booking flow, and an affordable path to getting a professional web presence online.",
  },
  {
    title: "DriveOps-IQ / ShopOps-IQ",
    category: "Workflow Platform",
    desc: "A workflow platform concept for field-service and repair operations, covering job queues, user roles, status tracking, required documents, invoice logic, and better operational visibility.",
  },
  {
    title: "FUZE Boxx Brand & Market Research",
    category: "Business Strategy / Web Direction",
    desc: "A business strategy and web-positioning project for a specialized automotive service brand, including service packaging, market research, pricing logic, and customer-facing messaging.",
  },
];

export default function ProjectProofSection() {
  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Real project work that shows practical capability
          </h2>
          <p className="text-lg leading-7 text-muted">
            These projects show how Syfernetics approaches practical problems: understanding the workflow first,
            then building websites, tools, dashboards, and digital systems that make the work easier to manage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-teal"
            >
              <span className="mb-3 inline-block rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {p.category}
              </span>
              <h3 className="mb-2 text-lg font-bold text-fg">{p.title}</h3>
              <p className="text-sm leading-6 text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
