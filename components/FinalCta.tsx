import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { finalCta, site } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="bg-surface py-24 text-center md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="text-h1 text-ink">{finalCta.title}</h2>
          <Button href={site.checkoutUrl} variant="primary" size="lg" className="mt-8">
            {finalCta.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
