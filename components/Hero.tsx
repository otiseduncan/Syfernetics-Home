import GlowButton from "./GlowButton";
import LiveSystemsPanel from "./LiveSystemsPanel";

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

        <LiveSystemsPanel />
      </div>
    </section>
  );
}
