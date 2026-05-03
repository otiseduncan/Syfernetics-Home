const areas = [
  "Milledgeville",
  "Eatonton",
  "Macon",
  "Gray",
  "Warner Robins",
  "Perry",
  "Lake Oconee",
  "Greensboro",
  "Madison",
  "Central Georgia",
  "Based in Milledgeville, GA",
  "Remote Support",
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
          Serving Central Georgia small businesses with local and remote support
        </h2>
        <p className="mb-8 text-lg leading-8 text-muted">
          Syfernetics is based in Milledgeville, Georgia and serves small businesses across Central Georgia,
          including Eatonton, Macon, Gray, Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and surrounding
          communities. Remote support is available when the project can be handled effectively online.
        </p>
        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
