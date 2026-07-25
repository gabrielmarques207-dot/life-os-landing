import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { solution } from "@/lib/content";

export function Solution() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={solution.kicker} title={solution.title} align="center" className="mb-14" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 md:flex-row">
            {solution.flow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="flex w-44 flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-6 text-center shadow-card">
                  <step.icon size={24} strokeWidth={1.75} className="text-terracotta" />
                  <p className="text-h3 text-ink">{step.label}</p>
                  <p className="text-small text-ink-muted">{step.caption}</p>
                </div>
                {i < solution.flow.length - 1 && (
                  <ArrowRight
                    size={20}
                    strokeWidth={1.75}
                    className="hidden shrink-0 text-terracotta md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-body-lg text-ink-muted">
            {solution.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
