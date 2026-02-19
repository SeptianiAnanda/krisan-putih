"use client";

import { useState } from "react";

const GOAL_OPTIONS = [
  "Company Profile / Corporate Website",
  "E-Commerce / Online Store",
  "Portfolio / Project Showcase",
  "Online Learning or Education Platform",
  "Landing Page for Advertising Campaigns",
  "Professional Blog or Personal Branding",
  "Other (Please specify)",
];

interface QuoteModalProps {
  packageName: string;
  open: boolean;
  onClose: () => void;
}

export default function QuoteModal({ packageName, open, onClose }: QuoteModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    goal: [] as string[],
    goalOther: "",
    referenceWebsites: "",
    budgetRange: "",
    mustHaveFeatures: "",
    additionalNotes: "",
  });

  const handleGoalChange = (option: string, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      goal: checked ? [...prev.goal, option] : prev.goal.filter((g) => g !== option),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package: packageName,
          ...form,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      setForm({
        fullname: "",
        email: "",
        company: "",
        goal: [],
        goalOther: "",
        referenceWebsites: "",
        budgetRange: "",
        mustHaveFeatures: "",
        additionalNotes: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-secondary">{packageName} Quotation</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-text hover:text-secondary rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6">
          {sent ? (
            <div className="text-center py-8">
              <p className="text-primary font-semibold mb-2">Thank you!</p>
              <p className="text-text text-sm">We&apos;ll prepare a tailored quotation and get back to you soon.</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-text text-sm mb-6">
                Kindly fill out the form below, and our team will prepare a tailored quotation for your project.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Full name *</label>
                  <input
                    type="text"
                    required
                    value={form.fullname}
                    onChange={(e) => setForm((p) => ({ ...p, fullname: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    What is the primary goal of your website?
                  </label>
                  <div className="space-y-2">
                    {GOAL_OPTIONS.map((option) => (
                      <label key={option} className="flex items-center gap-2 text-sm text-text cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.goal.includes(option)}
                          onChange={(e) => handleGoalChange(option, e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {form.goal.includes("Other (Please specify)") && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      value={form.goalOther}
                      onChange={(e) => setForm((p) => ({ ...p, goalOther: e.target.value }))}
                      className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg text-sm"
                    />
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Are there any websites that closely match your expectations?
                  </label>
                  <input
                    type="text"
                    value={form.referenceWebsites}
                    onChange={(e) => setForm((p) => ({ ...p, referenceWebsites: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    What is your budget range for this project?
                  </label>
                  <input
                    type="text"
                    value={form.budgetRange}
                    onChange={(e) => setForm((p) => ({ ...p, budgetRange: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Are there any must-have features or functionalities you require?
                  </label>
                  <input
                    type="text"
                    value={form.mustHaveFeatures}
                    onChange={(e) => setForm((p) => ({ ...p, mustHaveFeatures: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Additional Notes</label>
                  <textarea
                    rows={4}
                    value={form.additionalNotes}
                    onChange={(e) => setForm((p) => ({ ...p, additionalNotes: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {submitting ? "Sending…" : "Get a Quote"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
