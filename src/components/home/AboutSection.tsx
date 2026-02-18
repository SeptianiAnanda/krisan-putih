"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const highlights = [
  {
    title: "Strategy Planning",
    description:
      "We analyze your business goals and craft digital solutions aligned with long-term growth.",
  },
  {
    title: "Digital Transformation",
    description:
      "We help modernize your business presence with scalable and future-ready web solutions.",
  },
  {
    title: "Analyzing and Evaluating",
    description:
      "We continuously evaluate performance to ensure your digital platform drives measurable impact.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About Us
            </h2>
            <p className="text-text text-lg leading-relaxed mb-6">
              Krisan Putih is a digital web development agency committed to helping businesses grow through strategic planning, digital transformation, and measurable results.
            </p>
            <p className="text-text leading-relaxed mb-8">
              Led by <span className="font-semibold text-secondary">Septiani Ananda</span>, Digital Marketing Specialist and 7+ years experience Website Developer, we combine creative thinking with technical expertise to deliver websites that are not only visually appealing, but also built to perform.
            </p>
            <div className="space-y-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1 h-full min-h-[40px] bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{h.title}</h4>
                    <p className="text-text/80 text-sm">{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-12 h-full min-h-[400px] flex flex-col justify-center"
          >
            <p className="text-2xl font-semibold text-secondary mb-4">
              &ldquo;We combine creative thinking with technical expertise to deliver websites that are not only visually appealing, but also built to perform.&rdquo;
            </p>
            <p className="text-primary font-medium">— Septiani Ananda, Founder</p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
