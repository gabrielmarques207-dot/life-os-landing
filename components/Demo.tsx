"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { BrowserFrame } from "./ui/BrowserFrame";
import { TasksPanel } from "./demo/TasksPanel";
import { FinancePanel } from "./demo/FinancePanel";
import { HabitsPanel } from "./demo/HabitsPanel";
import { demo } from "@/lib/content";

type Tab = (typeof demo.tabs)[number];

const panels: Record<Tab, React.ComponentType> = {
  Tarefas: TasksPanel,
  Finanças: FinancePanel,
  Hábitos: HabitsPanel,
};

export function Demo() {
  const [active, setActive] = useState<Tab>(demo.tabs[0]);
  const ActivePanel = panels[active];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker={demo.kicker} title={demo.title} align="center" className="mb-4" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto max-w-xl text-center text-body-lg text-ink-muted">{demo.body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Módulos em demonstração"
            className="mx-auto mt-10 flex w-fit items-center gap-1 rounded-xl bg-background-alt p-1"
          >
            {demo.tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className="relative rounded-lg px-5 py-2 text-small font-semibold text-ink transition-colors"
              >
                {active === tab && (
                  <motion.span
                    layoutId="demo-tab-pill"
                    className="absolute inset-0 rounded-lg bg-surface shadow-sm"
                    transition={{ type: "tween", duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <BrowserFrame title={active} className="mx-auto mt-10 max-w-3xl">
            <div className="min-h-[280px] p-6" role="tabpanel">
              <AnimatePresence mode="wait">
                <ActivePanel key={active} />
              </AnimatePresence>
            </div>
          </BrowserFrame>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="#preco" variant="primary" size="md">
            {demo.ctaSecondary}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
