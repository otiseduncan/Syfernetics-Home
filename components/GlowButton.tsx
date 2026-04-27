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
        y: -7,
        scale: 1.04,
        boxShadow:
          "0 0 0 1px rgba(34, 211, 238, 0.65), 0 0 28px rgba(34, 211, 238, 0.45), 0 0 70px rgba(16, 185, 129, 0.24)",
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 18,
      }}
      className={`inline-flex rounded-lg ${className}`}
    >
      <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-300/30 via-emerald-300/30 to-cyan-300/30" />
          <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-44" />
        </span>

        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
