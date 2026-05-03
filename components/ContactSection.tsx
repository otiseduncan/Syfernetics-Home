export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28 bg-panel/30">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
          Request a website, workflow, or small business IT review.
        </h2>
        <p className="mb-10 text-lg leading-8 text-muted">
          The first conversation is practical: what is broken, what is confusing, what is costing time, what needs
          to look more professional, and what would make the business easier to run.
        </p>

        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:4783435252"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 px-6 py-4 text-fg transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-teal"
          >
            <span className="text-accent text-xl">📞</span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Call / Text</p>
              <p className="font-bold">478-343-5252</p>
            </div>
          </a>

          <a
            href="mailto:otis.duncan@syfernetics.com"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 px-6 py-4 text-fg transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-teal"
          >
            <span className="text-accent text-xl">✉️</span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Email</p>
              <p className="font-bold">otis.duncan@syfernetics.com</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:otis.duncan@syfernetics.com"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-all duration-200 hover:bg-accent-dark hover:shadow-teal"
          >
            Email Syfernetics
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/60 bg-transparent px-6 py-3 font-semibold text-accent transition-all duration-200 hover:bg-accent/10"
          >
            View starting packages
          </a>
        </div>
      </div>
    </section>
  );
}
