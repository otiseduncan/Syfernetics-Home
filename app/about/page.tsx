export default function AboutPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          About Syfernetics
        </p>
        <h1 className="text-balance mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Practical technology support built from real-world problem solving.
        </h1>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            Syfernetics is the professional technology brand of Otis Duncan, focused on websites, workflow automation, business email setup, networking support, and practical IT help for small businesses in Central Georgia.
          </p>
          <p>
            My background includes decades of hands-on troubleshooting, field operations, diagnostics, customer communication, documentation pressure, and repair-process thinking. That experience shapes how I approach technology: it should reduce confusion, improve visibility, and make work easier to complete correctly.
          </p>
          <p>
            Today, Syfernetics applies that problem-solving background to small business websites, workflow tools, dashboards, domain and email setup, networking support, and security-minded digital habits.
          </p>
          <p>
            Based in Milledgeville, GA and serving Central Georgia with local and remote support.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {['Small Business Websites', 'Workflow Automation', 'Networking & IT Help'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-card/70 p-5 font-semibold text-fg shadow-soft">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/25 bg-accent/10 p-7 shadow-teal">
          <h2 className="mb-3 text-2xl font-bold text-fg">The advantage</h2>
          <p className="leading-8 text-muted">
            I am not approaching technology from theory only. I have worked around real deadlines, real service environments, communication gaps, documentation problems, and operational pressure. That helps Syfernetics build practical solutions that match the way small businesses actually work.
          </p>
        </div>
      </div>
    </main>
  )
}
