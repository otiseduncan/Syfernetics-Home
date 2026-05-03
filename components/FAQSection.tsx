"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a brand-new website, or can you fix what I already have?",
    a: "Many businesses do not need to start over. If the current site has a decent foundation, Syfernetics can refresh the layout, clarify the words, fix mobile issues, and improve the customer contact path.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Websites are one part of the work. Syfernetics also helps with business email, domain setup, forms, request tracking, workflow automation, dashboards, and practical IT cleanup.",
  },
  {
    q: "Can you work with businesses outside Central Georgia?",
    a: "Yes. Many website, email, workflow, and automation projects can be handled remotely. Local service-area wording is focused on Central Georgia, but remote support is available by project fit.",
  },
  {
    q: "Do you offer cybersecurity services?",
    a: "Syfernetics focuses first on practical security-minded setup: MFA, safer account habits, password manager guidance, backups, email/domain records, and reducing common small-business digital risks. Advanced security work is quoted carefully based on scope.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
          Common questions before starting a small business tech project
        </h2>
        <p className="mb-10 text-lg leading-7 text-muted">
          Straight answers for small business owners who want practical help with websites, workflow, email setup,
          and everyday technology decisions.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-card/60 overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-fg transition hover:text-accent"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className={`ml-4 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {open === i && (
                <div className="border-t border-white/10 px-6 py-4 text-sm leading-7 text-muted">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
