import GlowButton from "./GlowButton";

export default function Hero() {
  return (
    <section className="brand-shell relative overflow-hidden px-6 py-24 md:py-32">
      <div className="soft-grid absolute inset-0 opacity-35" />
      <div className="absolute right-[-10rem] top-16 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute left-[-12rem] bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Software. Systems. Solutions.
          </p>

          <h1 className="text-balance mb-6 text-4xl font-extrabold leading-tight tracking-tight text-fg md:text-6xl">
            Practical software and web solutions built for real business
            problems.
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-muted">
            I build fast, reliable websites, custom dashboards, workflow
            applications, and security-minded systems that help organizations
            work smarter and scale with confidence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <GlowButton href="/projects">
              View Projects
              <span aria-hidden="true">→</span>
            </GlowButton>

            <GlowButton href="/contact" variant="outline">
              Contact Me
              <span aria-hidden="true">✉</span>
            </GlowButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-card/70 p-5 shadow-soft backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-accent/80" />

              <span className="ml-auto text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Live Systems
              </span>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-muted">
                    Workflow Visibility
                  </p>
                  <p className="text-sm font-bold text-accent">+38%</p>
                </div>

                <div className="flex h-24 items-end gap-2">
                  {[38, 52, 44, 68, 58, 82, 74, 92].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-accent-dark to-accent"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
                  <p className="mb-3 text-sm font-semibold text-muted">
                    Active Projects
                  </p>
                  <p className="text-4xl font-extrabold text-fg">04</p>
                  <p className="mt-2 text-xs text-muted">
                    Portfolio-ready builds
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
                  <p className="mb-3 text-sm font-semibold text-muted">
                    Core Focus
                  </p>

                  <div className="space-y-2 text-sm text-muted">
                    <p>
                      <span className="text-accent">●</span> Web Apps
                    </p>
                    <p>
                      <span className="text-accent">●</span> Dashboards
                    </p>
                    <p>
                      <span className="text-accent">●</span> Workflow Tools
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
                <p className="mb-4 text-sm font-semibold text-muted">
                  Build Quality
                </p>

                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent">
                    Reliable
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent">
                    Scalable
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent">
                    Practical
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 bottom-8 hidden w-28 rounded-2xl border border-white/10 bg-card p-3 shadow-soft md:block">
            <div className="mb-2 h-2 w-10 rounded-full bg-accent" />

            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/20" />
              <div className="h-2 rounded-full bg-white/20" />
              <div className="h-2 w-2/3 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}