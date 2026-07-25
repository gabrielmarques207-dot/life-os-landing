import { motion } from "framer-motion";

const columns = [
  { name: "Não iniciada", items: ["Pesquisar passagens", "Criar planilha de orçamento"] },
  { name: "Em andamento", items: ["Montar mídia kit do canal", "Assistir módulo 3 do curso"] },
  { name: "Concluído", items: ["Configurar dashboards"] },
];

export function TasksPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 gap-4 md:grid-cols-3"
    >
      {columns.map((col) => (
        <div key={col.name} className="rounded-xl bg-background-alt p-3">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
            {col.name}
          </p>
          <div className="flex flex-col gap-2">
            {col.items.map((item) => (
              <div key={item} className="rounded-lg border border-border bg-surface px-3 py-2 text-small text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
