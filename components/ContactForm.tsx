"use client";

import { useState } from "react";

// Public by design: Web3Forms keys live in the client bundle and can only ever
// deliver to the address they were registered against. Kept in an env var so it
// stays out of the repo and can be rotated without a commit.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const FALLBACK_EMAIL = "websitesbyfarhan@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  // text-base is deliberate: iOS zooms the page when focusing an input under 16px.
  "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#90e0ef] focus-visible:border-[#90e0ef] transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ACCESS_KEY) {
      setStatus("error");
      setError("The form is not configured yet.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New enquiry from the Bleumont site",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Could not reach the server.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6" aria-live="polite">
        <p className="text-2xl font-semibold text-gray-900">Thanks — message sent.</p>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          We&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-base font-medium text-gray-500 underline hover:text-gray-800 transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      {/* Honeypot — Web3Forms drops any submission where this is checked. */}
      <label className="hidden">
        Do not fill this out
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your business and what you're trying to solve."
            className={`${inputClasses} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-[#c8ee44] px-6 py-3 text-base font-medium text-gray-900 hover:bg-[#bde33b] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "error" && (
          <p className="mt-4 text-base text-red-600">
            {error} You can also email us directly at{" "}
            <a href={`mailto:${FALLBACK_EMAIL}`} className="underline font-medium">
              {FALLBACK_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
