"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold tracking-wide uppercase text-sm mb-4"
        >
          Welcome
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight"
        >
          KRISAN PUTIH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-text mb-2"
        >
          Professional Web Development for Your Business
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-text/80 mb-12 max-w-2xl mx-auto"
        >
          We help businesses build scalable, high-performance websites, without the cost of large agencies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/6287833060699"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Get Started
          </a>
          <Link
            href="/#services"
            className="text-secondary font-medium px-8 py-4 rounded-full border-2 border-secondary/20 hover:border-primary hover:text-primary transition-all"
          >
            Our Services
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">0+</p>
            <p className="text-text text-sm mt-1">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">0</p>
            <p className="text-text text-sm mt-1">Client Satisfaction Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
