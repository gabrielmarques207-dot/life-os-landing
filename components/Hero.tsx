"use client";

import { motion } from "framer-motion";
import { Target, FolderKanban, Repeat, Check } from "lucide-react";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { BrowserFrame } from "./ui/BrowserFrame";
import { hero, site } from "@/lib/content";

const miniStats = [
  { icon: Target, label: "Objetivos", value: 64 },
  { icon: FolderKanban, label: "Projetos", value: 40 },
  { icon: Repeat, label: "Hábitos", value: 80 },
];

const miniTasks = [
  { label: "Montar mídia kit do canal", tag: "Alta", tone: "bg-terracotta/10 text-terracotta-dark" },
  { label: "Assistir módulo 3 do curso", tag: "Média", tone: "bg-mustard/20 text-terracotta-dark" },
  { label: "Configurar dashboards", tag: "Feito", tone: "bg-ink/5 text-ink-muted", done: true },
];

export function Hero() {
  return (
    <header className="overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>{hero.eyebrow}</Badge>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-display">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </h1>

          <p className="mt-5 max-w-md text-body-lg text-ink-muted">{hero.subheadline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={site.checkoutUrl} variant="primary" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button href="#como-funciona" variant="ghost" size="lg">
              {hero.ctaSecondary} ↓
            </Button>
          </div>

          <p className="mt-4 text-small text-ink-muted">{hero.microcopy}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -1.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <BrowserFrame title="Life OS">
            <div className="p-5">
              <p className="text-h3 text-ink">Painel de Hoje</p>
              <p className="mb-4 text-small text-ink-muted">Objetivos ativos · Tarefas em andamento</p>

              <div className="mb-4 grid grid-cols-3 gap-3">
                {miniStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-background-alt p-3">
                    <stat.icon size={18} strokeWidth={1.75} className="mb-2 text-terracotta" />
                    <p className="text-small font-semibold text-ink">{stat.label}</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-terracotta"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {miniTasks.map((task) => (
                  <div
                    key={task.label}
                    className="flex items-center justify-between rounded-lg bg-background-alt px-3 py-2.5"
                  >
                    <span className="flex items-center gap-2 text-small text-ink">
                      {task.done && <Check size={14} className="text-terracotta" />}
                      {task.label}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${task.tone}`}>
                      {task.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </header>
  );
}
