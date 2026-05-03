const subcards = [
  {
    title: "Built for customer action",
    desc: "Every page is structured so a visitor knows what you do, where you serve, and how to contact you without hunting for answers.",
  },
  {
    title: "Built for local search",
    desc: "Pages are set up with the right service area wording, page titles, and descriptions so search engines can understand where you operate.",
  },
  {
    title: "Best fit",
    desc: "Syfernetics works best with service businesses: contractors, groomers, repair shops, churches, health providers, and similar operations.",
  },
];

export default function WebsiteDesignSection() {
  return (
    <section id="website-design" className="px-6 py-20 md:py-28 bg-panel/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Small business website design that explains what you do fast
          </h2>
          <p className="text-lg leading-7 text-muted">
            A good small business website should answer the customer&apos;s first questions quickly: what you do,
            where you serve, why they should trust you, and how they can contact you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {subcards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-white/10 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-teal"
            >
              <h3 className="mb-2 font-bold text-accent">{c.title}</h3>
              <p className="text-sm leading-6 text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
