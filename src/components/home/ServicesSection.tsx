"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const services = [
  {
    title: "Design & Creative",
    description:
      "Memproduksi gambar atau video yang komunikatif dan efektif untuk mendukung pemasaran digital.",
  },
  {
    title: "Advertising",
    description:
      "Mengelola kampanye dengan optimasi tools analitik untuk hasilkan performa terbaik.",
  },
  {
    title: "Development",
    description:
      "Membangun platform digital untuk media pemasaran dan penjualan.",
  },
  {
    title: "Strategy & Management",
    description:
      "Pengelolaan informasi dan sumber daya digital untuk strategi yang lebih kompetitif.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-4"
        >
          What We Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text text-lg mb-16 max-w-2xl"
        >
          We deliver tech-powered solutions that transform your digital presence and accelerate business growth.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-6 rounded-2xl border border-gray-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text/80 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
