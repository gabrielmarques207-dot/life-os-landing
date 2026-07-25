import { Check, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { offer, site } from "@/lib/content";

export function Offer() {
  return (
    <section id="preco" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={offer.kicker} title={offer.title} align="center" className="mb-14" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-surface p-10 text-center shadow-card">
            <div className="flex items-end justify-center gap-1">
              <span className="text-3xl font-semibold text-ink">{offer.price.slice(0, 1)}</span>
              <span className="text-5xl font-semibold text-ink">{offer.price.slice(1)}</span>
            </div>
            <p className="mt-1 text-small text-ink-muted">{offer.priceNote}</p>

            <ul className="mt-8 flex flex-col gap-3 text-left">
              {offer.includes.map((line) => (
                <li key={line} className="flex items-start gap-3 text-body text-ink">
                  <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-terracotta" />
                  {line}
                </li>
              ))}
            </ul>

            <Button href={site.checkoutUrl} variant="primary" size="lg" className="mt-8 w-full">
              {offer.cta}
            </Button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-small text-ink-muted">
              <ShieldCheck size={14} />
              {offer.guarantee}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
