const badges = [
  "Website design",
  "Workflow automation",
  "Business email setup",
  "Small business IT help",
];

export default function Hero() {
  return (
    <section className="brand-shell relative overflow-hidden px-6 py-24 md:py-32" id="hero">
      <div className="soft-grid absolute inset-0 opacity-35" />
      <div className="absolute right-[-10rem] top-16 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute left-[-12rem] bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Websites • Workflow • Practical IT
        </p>

        <h1 className="text-balance mb-6 text-4xl font-extrabold leading-tight tracking-tight text-fg md:text-5xl lg:text-6xl">
          Websites, workflow automation, and practical IT help for Central Georgia small businesses.
        </h1>

        <p className="mb-8 mx-auto max-w-3xl text-lg leading-8 text-muted">
          Based in Milledgeville, Georgia, Syfernetics helps local service businesses look professional online,
          clean up broken digital processes, and build simple systems that save time. From website design and
          business email setup to forms, trackers, dashboards, and security-minded IT habits, the focus is
          practical technology that solves real business problems across Central Georgia and remote projects by fit.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center mb-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-all duration-200 hover:bg-accent-dark hover:shadow-teal"
          >
            View starting packages
          </a>
          <a
            href="tel:4783435252"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/60 bg-transparent px-6 py-3 font-semibold text-accent transition-all duration-200 hover:bg-accent/10"
          >
            Call/Text 478-343-5252
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
