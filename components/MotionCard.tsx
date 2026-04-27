"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export default function MotionCard({
  children,
  className = "",
  href,
}: MotionCardProps) {
  const isClickable = Boolean(href && href !== "#");

  function openLink() {
    if (!isClickable || !href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (!isClickable) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLink();
    }
  }

  return (
    <motion.article
      role={isClickable ? "link" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? "Open project repository" : undefined}
      onClick={openLink}
      onKeyDown={handleKeyDown}
      whileHover={{
        y: -10,
        scale: 1.025,
        boxShadow:
          "0 0 0 1px rgba(34, 211, 238, 0.45), 0 0 24px rgba(34, 211, 238, 0.24), 0 0 55px rgba(16, 185, 129, 0.14)",
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={{
        willChange: "transform, box-shadow",
      }}
      className={`group relative rounded-2xl border border-white/10 bg-card/70 shadow-soft backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/45 ${
        isClickable ? "cursor-pointer" : ""
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/8 via-transparent to-emerald-400/8" />
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-emerald-400/14 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-300 group-hover:ring-cyan-300/40" />

      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}