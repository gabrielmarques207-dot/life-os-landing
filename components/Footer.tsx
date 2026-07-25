import { Brain } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-small text-ink-muted md:flex-row">
        <a href="#" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-terracotta text-white">
            <Brain size={15} strokeWidth={1.75} />
          </span>
          {site.name}
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-terracotta">
              {link.label}
            </a>
          ))}
        </div>

        <p>
          Feito em {site.location} · {site.creatorHandle}
        </p>
      </div>
    </footer>
  );
}
