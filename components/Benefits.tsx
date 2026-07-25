import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={benefits.kicker} title={benefits.title} align="center" className="mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {benefits.items.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <span className="mb-4 block text-h1 text-terracotta/25">0{i + 1}</span>
                <h3 className="text-h3 text-ink">{benefit.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
