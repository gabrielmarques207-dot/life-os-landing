import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { modules } from "@/lib/content";

export function Modules() {
  return (
    <section id="modulos" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={modules.kicker} title={modules.title} />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.items.map((mod, i) => (
            <Reveal key={mod.name} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-background-alt p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-card">
                <mod.icon size={22} strokeWidth={1.75} className="mb-4 text-terracotta" />
                <h3 className="text-h3 text-ink">{mod.name}</h3>
                <p className="mt-2 text-small text-ink-muted">{mod.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
