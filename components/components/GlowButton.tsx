"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
}: GlowButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-dark"
      : "border border-accent/60 bg-transparent text-accent hover:bg-accent/10";

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.025,
        boxShadow:
          "0 0 0 1px rgba(34, 211, 238, 0.4), 0 0 20px rgba(34, 211, 238, 0.24), 0 0 45px rgba(16, 185, 129, 0.14)",
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`inline-flex rounded-lg ${className}`}
    >
      <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-300/18 via-emerald-300/18 to-cyan-300/18" />
          <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-44" />
        </span>

        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}