"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useState } from "react";

export default function CTASection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ fullname: "", emailOrPhone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      setForm({ fullname: "", emailOrPhone: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper className="py-24 px-6 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build a Stronger Digital Presence?
        </h2>
        <p className="text-gray-300 mb-10">
          Book a free call and let&apos;s discuss how we can help your business grow.
        </p>
        {sent ? (
          <p className="text-white font-medium py-4">
            Thank you! We&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <input
                type="text"
                placeholder="Full Name"
                value={form.fullname}
                onChange={(e) => setForm((p) => ({ ...p, fullname: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Email / Phone number"
                value={form.emailOrPhone}
                onChange={(e) => setForm((p) => ({ ...p, emailOrPhone: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            {error && (
              <p className="text-red-300 text-sm mt-4 text-center" role="alert">
                {error}
              </p>
            )}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                {submitting ? "Sending…" : "Book a Free Call"}
              </button>
            </div>
          </form>
        )}
        <p className="mt-6 text-gray-400 text-sm">
          You may also hire us via{" "}
          <a href="https://www.sribu.com/id/browse-freelancer?search=krisanputih" className="text-primary hover:underline">Sribu</a>
          {" "}or{" "}
          <a href="https://upwork.com/freelancers/~01305067a5a92bbf8f" className="text-primary hover:underline">Upwork</a>.
        </p>
        <p className="mt-4 text-gray-500 text-sm">We typically respond within 24 hours.</p>
      </motion.div>
    </SectionWrapper>
  );
}
