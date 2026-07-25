import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={howItWorks.kicker} title={howItWorks.title} />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="text-h3 text-ink">{step.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
