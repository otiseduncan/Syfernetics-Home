const checklist = [
  "Customer request forms",
  "Quote or appointment intake",
  "Google Sheets tracking",
  "Email notification workflows",
  "Simple dashboards for visibility",
  "Documentation so the business can keep using it",
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Turn scattered messages and manual tracking into a simple workflow.
          </h2>
          <p className="text-lg leading-7 text-muted">
            Many small businesses lose time because requests come through calls, texts, Facebook messages, paper
            notes, and memory. Syfernetics helps turn that chaos into forms, lists, notifications, and dashboards
            that are easier to manage.
          </p>
        </div>

        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold">
                ✓
              </span>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
