"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const services = [
  "Web Development",
  "Graphic Design",
  "Social Media Management",
  "SEO Management",
  "Ads Management",
  "Ebook Writing",
];

export default function ServicesListSection() {
  return (
    <SectionWrapper className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text text-lg mb-12 max-w-2xl"
        >
          We provide comprehensive digital solutions tailored to your business needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-900 hover:bg-primary/10 border border-gray-800 hover:border-primary/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="text-primary font-bold group-hover:text-white transition-colors">{i + 1}</span>
              </div>
              <span className="font-semibold text-secondary group-hover:text-primary transition-colors">{service}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-text/70 italic"
        >
          and many more.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
