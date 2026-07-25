"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 whitespace-nowrap";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-terracotta text-white shadow-sm hover:bg-terracotta-dark",
  ghost:
    "border border-ink/15 text-ink hover:border-ink hover:bg-ink/[0.03]",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export function Button({
  href = "#",
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
