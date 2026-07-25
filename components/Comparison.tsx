import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { comparison } from "@/lib/content";

export function Comparison() {
  return (
    <section id="comparacao" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={comparison.kicker} title={comparison.title} align="center" className="mb-14" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-background-alt">
            <table className="w-full border-collapse text-small">
              <thead>
                <tr>
                  <th className="p-4 text-left font-medium text-ink-muted"></th>
                  {comparison.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`p-4 text-left font-semibold ${
                        i === comparison.columns.length - 1
                          ? "bg-terracotta/10 text-terracotta-dark"
                          : "text-ink-muted"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="p-4 font-medium text-ink">{row.label}</td>
                    <td className="p-4 text-ink-muted">{row.apps}</td>
                    <td className="p-4 text-ink-muted">{row.template}</td>
                    <td className="bg-terracotta/5 p-4 font-semibold text-terracotta-dark">
                      {row.lifeOs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
