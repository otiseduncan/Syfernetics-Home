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
      email: formData.get("email"),
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
          Let’s talk through the problem.
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-muted">
          Need a website, dashboard, workflow tool, automation, or
          security-minded technology cleanup? Send a message and I’ll follow up.
        </p>

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