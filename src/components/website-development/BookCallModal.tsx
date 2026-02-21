"use client";

import { useState } from "react";

interface BookCallModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookCallModal({ open, onClose }: BookCallModalProps) {
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

  const handleClose = () => {
    onClose();
    setError("");
    setTimeout(() => setSent(false), 300);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-call-modal-title"
    >
      <div
        className="bg-gray-900 rounded-2xl shadow-xl max-w-md w-full p-8 relative border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
          aria-label="Close"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>
        <h2 id="book-call-modal-title" className="text-xl font-bold text-secondary mb-1">
          Let&apos;s discuss about Your Web Project!
        </h2>
        <p className="text-text text-sm mb-6">We typically respond within 24 hours.</p>
        {sent ? (
          <p className="text-text font-medium py-4">Thank you! We&apos;ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={form.fullname}
              onChange={(e) => setForm((p) => ({ ...p, fullname: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Email / Phone number"
              value={form.emailOrPhone}
              onChange={(e) => setForm((p) => ({ ...p, emailOrPhone: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {error && (
              <p className="text-red-600 text-sm" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 disabled:opacity-70 transition-opacity"
            >
              {submitting ? "Sending…" : "Book a Free Call"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
