"use client";

import { FormEvent, useState } from "react";
import CardShell from "@/components/CardShell";
import PageShell from "@/components/PageShell";
import SectionShell from "@/components/SectionShell";
import { contactServiceOptions } from "@/lib/siteConfig";
import { getButtonClassName } from "@/components/ButtonLink";

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
    <PageShell>
      <SectionShell
        eyebrow="Contact"
        title="Request a website, workflow, networking, or small business IT review."
        description="Tell me what you need help with and I'll review the request with a clear next step."
        headingAs="h1"
      >
        <CardShell className="mb-8 border-teal-300/25 bg-teal-400/10 px-6 py-4">
          <p className="text-sm font-semibold text-teal-200">
            Start with a practical review. You will get a clear next-step recommendation before
            committing to a larger project.
          </p>
        </CardShell>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <CardShell className="p-4 text-slate-300">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Call/Text
            </span>
            <a href="tel:4783435252" className="mt-2 block text-lg font-semibold text-slate-100 transition hover:text-teal-100">
              478-343-5252
            </a>
          </CardShell>
          <CardShell className="p-4 text-slate-300">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Email
            </span>
            <a
              href="mailto:otis.duncan@syfernetics.com"
              className="mt-2 block text-lg font-semibold text-slate-100 transition hover:text-teal-100"
            >
              otis.duncan@syfernetics.com
            </a>
          </CardShell>
        </div>

        <CardShell as="div" className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
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
                {contactServiceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
            className={`${getButtonClassName("primary")} mt-6 disabled:cursor-not-allowed disabled:opacity-60`}
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
        </CardShell>
      </SectionShell>
    </PageShell>
  );
}