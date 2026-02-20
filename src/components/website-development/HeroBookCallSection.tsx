"use client";

import { useState } from "react";
import Link from "next/link";
import BookCallModal from "./BookCallModal";

export default function HeroBookCallSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            KRISAN PUTIH
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            Experienced Asian-based Web Development Partner for Your Business
          </h2>
          <p className="text-lg text-text mb-10">
            Build a credible, high-performing website without paying large agency fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Book a Free Call
            </button>
            <Link
              href="/portfolio"
              className="border-2 border-secondary/20 text-secondary px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      <BookCallModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
