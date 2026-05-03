"use client";

import { FormEvent, useState } from "react";

export default function HomeContactForm() {
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
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-left backdrop-blur md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="home-contact-name"
            className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-teal-300"
          >
            Name
          </label>
          <input
            id="home-contact-name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="home-contact-email"
            className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-teal-300"
          >
            Email
          </label>
          <input
            id="home-contact-email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="home-contact-message"
          className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-teal-300"
        >
          Message
        </label>
        <textarea
          id="home-contact-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30"
          placeholder="Tell me what you need help with..."
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-xl bg-teal-300 px-5 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-slate-100 transition hover:bg-white/10"
        >
          Open full contact page
        </a>
      </div>

      {status === "sent" && (
        <p className="mt-4 text-sm font-semibold text-teal-200">
          Message sent successfully. Thank you.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm font-semibold text-red-300">{errorMessage}</p>
      )}
    </form>
  );
}