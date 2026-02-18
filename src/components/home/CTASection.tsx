"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CTASection() {
  return (
    <SectionWrapper className="py-24 px-6 bg-secondary">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6287833060699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Book a Free Call
          </a>
          <a
            href="https://www.sribu.com/id/browse-freelancer?search=krisanputih"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white border-2 border-white/30 px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all"
          >
            Hire Securely via Sribu
          </a>
        </div>
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
