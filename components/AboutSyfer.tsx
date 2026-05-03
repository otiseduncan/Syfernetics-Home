const highlights = [
  "30 years of real-world technical problem solving",
  "Modern software and IT project experience",
  "Plain-language support for small business owners",
];

export default function AboutSyfer() {
  return (
    <section id="about" className="px-6 py-20 md:py-28 bg-panel/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
          Built by a field problem-solver, not a buzzword agency.
        </h2>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics is built from years of hands-on troubleshooting, customer-facing communication, workflow
          pressure, documentation problems, and real business operations. The technology is the tool. The goal is
          solving the problem.
        </p>
        <ul className="space-y-4">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold">
                ✓
              </span>
              <span className="text-muted">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
