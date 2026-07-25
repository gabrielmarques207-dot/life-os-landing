import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={problem.kicker} title={problem.title} />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problem.items.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-background-alt p-6">
                <p className="text-body text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
