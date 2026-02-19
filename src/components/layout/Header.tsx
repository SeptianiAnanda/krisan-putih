"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    submenu: [
      { href: "/website-development", label: "Website Development" },
      { href: "/#services", label: "All Services" },
    ],
  },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="Krisan Putih - Home">
          <Image
            src="/logo.png"
            alt="Krisan Putih"
            width={320}
            height={80}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) =>
            "submenu" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="text-text hover:text-primary transition-colors text-sm font-medium flex items-center gap-1"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                        {(item.submenu ?? []).map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-text hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-text hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://wa.me/6287833060699"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-secondary"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((item) =>
                "submenu" in item ? (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="text-text font-medium text-sm">{item.label}</span>
                    {(item.submenu ?? []).map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-text hover:text-primary transition-colors pl-4 text-sm"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="https://wa.me/6287833060699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2 rounded-full text-center font-medium"
              >
                Get a Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
