"use client";

import { useEffect, useState } from "react";
import { Brain } from "lucide-react";
import { Button } from "./ui/Button";
import { nav, offer } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terracotta text-white">
            <Brain size={18} strokeWidth={1.75} />
          </span>
          Life OS
        </a>

        <div className="hidden items-center gap-8 text-small font-medium text-ink-muted md:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-terracotta">
              {link.label}
            </a>
          ))}
        </div>

        <Button href="#preco" size="md" className="!px-5 !py-2.5 !text-sm">
          {offer.cta.split(" ").slice(0, 2).join(" ")}
        </Button>
      </div>
    </nav>
  );
}
