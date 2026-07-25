import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { personas } from "@/lib/content";

export function Personas() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={personas.kicker} title={personas.title} align="center" className="mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {personas.items.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-background-alt p-6">
                <p className="text-body-lg text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
