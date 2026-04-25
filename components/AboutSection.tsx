export default function AboutSection() {
  return (
    <section className="bg-bg px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="rounded-2xl border border-white/10 bg-card/70 p-7 shadow-soft">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Why Syfernetics
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-fg md:text-4xl">
            Built from real operations experience.
          </h2>
          <p className="leading-8 text-muted">
            Syfernetics is focused on practical software: websites, dashboards, and workflow tools that make work easier to track, manage, and understand.
          </p>
        </div>

        <div className="space-y-5 text-muted">
          <p className="leading-8">
            My background gives me a strong advantage in building useful tools because I understand how real teams operate under pressure, how documentation gets missed, and how poor workflow design creates confusion.
          </p>
          <p className="leading-8">
            That experience drives my technical work: clean interfaces, clear status tracking, role-aware workflows, reliable data handling, and software that solves practical problems instead of only looking impressive.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Business-first thinking', 'Hands-on technical growth', 'Security-minded development'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-card/70 p-4 text-sm font-semibold text-fg shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
