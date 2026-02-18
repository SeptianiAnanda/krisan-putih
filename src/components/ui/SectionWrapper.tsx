"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={fadeInUp.transition}
    >
      {children}
    </motion.section>
  );
}
