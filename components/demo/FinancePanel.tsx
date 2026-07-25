import { motion } from "framer-motion";

const rows = [
  { label: "Patrocínio — vídeo marca X", type: "Receita", value: "€450" },
  { label: "Aluguel", type: "Despesa", value: "€800" },
  { label: "Poupança viagem", type: "Despesa", value: "€150" },
];

export function FinancePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <table className="w-full text-small">
        <thead>
          <tr className="border-b border-border text-left text-ink-muted">
            <th className="pb-3 font-medium">Descrição</th>
            <th className="pb-3 font-medium">Tipo</th>
            <th className="pb-3 font-medium">Valor</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-none">
              <td className="py-3 text-ink">{row.label}</td>
              <td className="py-3">
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    row.type === "Receita"
                      ? "bg-terracotta/10 text-terracotta-dark"
                      : "bg-ink/5 text-ink-muted"
                  }`}
                >
                  {row.type}
                </span>
              </td>
              <td className="py-3 text-ink">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
