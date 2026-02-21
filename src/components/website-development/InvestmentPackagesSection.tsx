"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

interface Pkg {
  name: string;
  tag: string;
  price: string;
  features: string[];
  description: string;
  cta: string;
  popular?: boolean;
  badge?: string;
}

export default function InvestmentPackagesSection({ packages }: { packages: Pkg[] }) {
  const [modalPackage, setModalPackage] = useState<string | null>(null);

  return (
    <>
      <section className="px-6 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">
            Investment & Packages
          </h2>
          <p className="text-text text-center mb-12">
            All packages can be adjusted based on your specific requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-gray-900 rounded-2xl border-2 p-8 ${
                  pkg.popular ? "border-primary shadow-lg" : "border-gray-800"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-secondary mt-2">{pkg.name}</h3>
                <p className="text-text text-sm mt-2 mb-4">{pkg.tag}</p>
                <p className="text-2xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-text text-sm flex items-center gap-2">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-text text-sm mb-6">{pkg.description}</p>
                <button
                  type="button"
                  onClick={() => setModalPackage(pkg.name)}
                  className="block w-full text-center bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <QuoteModal
        packageName={modalPackage || ""}
        open={!!modalPackage}
        onClose={() => setModalPackage(null)}
      />
    </>
  );
}
