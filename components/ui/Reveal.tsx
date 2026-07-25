"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/**
 * Discreet fade+slide-up used to introduce sections as they enter the
 * viewport. `viewport.once` is always true: elements never re-hide after
 * their first appearance, so there is no risk of content getting stuck
 * invisible if the user scrolls back up. Next.js renders the full markup
 * on the server regardless of this animation, so search engines and
 * no-JS clients still get the real content.
 *
 * People with `prefers-reduced-motion` enabled get the content instantly,
 * with no movement — Framer Motion's own reduced-motion hook is used
 * here rather than relying only on the global CSS override, since CSS
 * `transition-duration` does not reliably affect Motion's animations.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const Component = motion[as];
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
