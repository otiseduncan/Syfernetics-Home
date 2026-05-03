const steps = [
  {
    num: "01",
    title: "Review",
    desc: "We look at the current website, workflow, email setup, or business problem.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "We define the practical outcome, pages, tools, scope, and price.",
  },
  {
    num: "03",
    title: "Build",
    desc: "The website, form, workflow, or setup is built and reviewed in stages.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "The work is deployed, documented, and supported with next-step guidance.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="px-6 py-20 md:py-28 bg-panel/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
          A simple process built for clarity
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <p className="mb-2 text-4xl font-extrabold text-accent/30">{s.num}</p>
              <h3 className="mb-2 text-lg font-bold text-fg">{s.title}</h3>
              <p className="text-sm leading-6 text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
