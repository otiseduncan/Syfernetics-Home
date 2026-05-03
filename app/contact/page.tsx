"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceNeeded: formData.get("serviceNeeded"),
      currentWebsite: formData.get("currentWebsite"),
      preferredContactMethod: formData.get("preferredContactMethod"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Message failed.");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-bg px-6 py-24 text-fg">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-accent">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          Request a website, workflow, networking, or small business IT review.
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-muted">
          Tell me what you need help with - a website, website refresh, workflow
          automation, business email setup, networking issue, or practical IT
          cleanup. I&apos;ll review the request and follow up with a clear next step.
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <a
            href="tel:4783435252"
            className="rounded-xl border border-white/10 bg-card/70 p-4 text-muted transition hover:border-accent/50 hover:bg-card"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Call/Text
            </span>
            <span className="mt-2 block text-lg font-semibold text-fg">478-343-5252</span>
          </a>
          <a
            href="mailto:otis.duncan@syfernetics.com"
            className="rounded-xl border border-white/10 bg-card/70 p-4 text-muted transition hover:border-accent/50 hover:bg-card"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Email
            </span>
            <span className="mt-2 block text-lg font-semibold text-fg">
              otis.duncan@syfernetics.com
            </span>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="businessName"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Business name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="Your business (optional)"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="(Optional)"
              />
            </div>

            <div>
              <label
                htmlFor="serviceNeeded"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Service needed
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                required
                defaultValue=""
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Website design</option>
                <option>Website refresh</option>
                <option>Workflow automation</option>
                <option>Business email/domain setup</option>
                <option>Networking/Wi-Fi support</option>
                <option>Practical IT help</option>
                <option>Security basics</option>
                <option>Custom project</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="currentWebsite"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Current website
              </label>
              <input
                id="currentWebsite"
                name="currentWebsite"
                type="url"
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="https://... (optional)"
              />
            </div>

            <div>
              <label
                htmlFor="preferredContactMethod"
                className="mb-2 block text-sm font-semibold text-fg"
              >
                Preferred contact method
              </label>
              <select
                id="preferredContactMethod"
                name="preferredContactMethod"
                defaultValue=""
                className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              >
                <option value="">No preference</option>
                <option>Email</option>
                <option>Phone call</option>
                <option>Text message</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-fg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-950 placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              placeholder="Tell me what you need help with..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm font-semibold text-accent">
              Message sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm font-semibold text-red-400">
              {errorMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}