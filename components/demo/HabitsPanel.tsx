import { motion } from "framer-motion";
import { Check } from "lucide-react";

const habits = [
  { label: "Beber 2L de água", streak: "7 dias seguidos" },
  { label: "Meditar 10 minutos", streak: "3 dias seguidos" },
  { label: "Ler 20 páginas", streak: "5 dias seguidos" },
];

export function HabitsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3"
    >
      {habits.map((habit) => (
        <div key={habit.label} className="flex items-center justify-between rounded-lg bg-background-alt px-4 py-3">
          <span className="flex items-center gap-2 text-small text-ink">
            <Check size={14} className="text-terracotta" />
            {habit.label}
          </span>
          <span className="text-small text-ink-muted">{habit.streak}</span>
        </div>
      ))}
    </motion.div>
  );
}
