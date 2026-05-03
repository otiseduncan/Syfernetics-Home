"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
};

export default function RevealSection({
  id,
  className,
  children,
  delay = 0,
}: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0.9, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay: Math.min(delay, 0.06) }}
    >
      {children}
    </motion.section>
  );
}