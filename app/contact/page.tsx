export default function ContactPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h1 className="text-balance mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Let’s talk about your website, dashboard, or workflow tool.
          </h1>
          <p className="text-lg leading-8 text-muted">
            Use this form to start a conversation about a project, collaboration, freelance work, or employment opportunity.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft">
            <h2 className="mb-3 text-xl font-bold text-fg">Good fit for:</h2>
            <ul className="space-y-3 text-muted">
              <li>• Website rebuilds and small business sites</li>
              <li>• Internal dashboards and workflow tools</li>
              <li>• Portfolio, freelance, and technical opportunities</li>
            </ul>
          </div>
        </div>

        <form
          action="/api/contact"
          method="POST"
          className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft"
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-muted">Name</span>
              <input
                name="name"
                required
                className="rounded-lg border border-white/10 bg-bg2 px-4 py-3 text-fg outline-none transition focus:border-accent"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-muted">Email</span>
              <input
                type="email"
                name="email"
                required
                className="rounded-lg border border-white/10 bg-bg2 px-4 py-3 text-fg outline-none transition focus:border-accent"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-muted">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                className="rounded-lg border border-white/10 bg-bg2 px-4 py-3 text-fg outline-none transition focus:border-accent"
                placeholder="Tell me what you are trying to build or improve."
              />
            </label>

            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent-dark"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
