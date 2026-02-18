"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Get in Touch
          </h1>
          <p className="text-text text-lg">
            Ready to build a stronger digital presence? Let&apos;s discuss your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/6287833060699"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-8 rounded-2xl bg-primary text-white text-center hover:bg-primary/90 transition-colors group"
            >
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-white/90 text-sm">+62 87 833 0606 99</p>
              <p className="text-white/80 text-sm mt-4 group-hover:underline">Book a Free Call</p>
            </a>
            <a
              href="mailto:Contact@krisanputih.com"
              className="flex-1 p-8 rounded-2xl bg-secondary text-white text-center hover:bg-secondary/90 transition-colors group"
            >
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-300 text-sm">Contact@krisanputih.com</p>
              <p className="text-gray-400 text-sm mt-4 group-hover:underline">Send us a message</p>
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <h3 className="font-semibold text-secondary mb-4">Location</h3>
            <p className="text-text">Central Java, Indonesia</p>
            <p className="text-text/70 text-sm mt-2">We work with clients globally</p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <h3 className="font-semibold text-secondary mb-4">Hire via Platform</h3>
            <p className="text-text mb-4">You may also hire us securely via these platforms:</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.sribu.com/id/browse-freelancer?search=krisanputih"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Sribu
              </a>
              <a
                href="https://upwork.com/freelancers/~01305067a5a92bbf8f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Upwork
              </a>
            </div>
          </div>

          <p className="text-center text-text/70 text-sm">
            We typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
