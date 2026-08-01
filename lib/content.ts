import type { LucideIcon } from "lucide-react";
import {
  Target,
  FolderKanban,
  CheckSquare,
  Calendar,
  Repeat,
  Wallet,
  BookOpen,
  Sparkles,
  CalendarClock,
} from "lucide-react";

export const site = {
  name: "Life OS",
  tagline: "O sistema operacional da sua vida",
  url: "https://life-os-landing-nine.vercel.app",
  price: "€29",
  creatorHandle: "De Minas para Portugal",
  location: "Porto, Portugal",
  // TODO: trocar pelo link real do checkout (Gumroad, Stripe Payment Link, etc.)
  // antes de publicar. É o único lugar que precisa mudar — Hero, Offer e
  // FinalCta leem todos daqui.
  checkoutUrl: "https://pay.hotmart.com/S106890698N?checkoutMode=10",
};

export const hero = {
  eyebrow: "Sistema operacional pessoal · Notion",
  headline: ["Reconstruir a vida do zero já é difícil.", "Organizá-la não devia ser."],
  subheadline:
    "Life OS conecta objetivos, projetos, tarefas, hábitos e finanças num só sistema dentro do Notion — sem planilha solta, sem app novo toda semana.",
  ctaPrimary: "Quero o meu Life OS",
  ctaSecondary: "Ver como funciona",
  microcopy: "Pagamento único · Acesso imediato · Funciona no Notion grátis",
};

export const problem = {
  kicker: "O problema não é falta de vontade",
  title: "Você já tentou se organizar assim antes",
  items: [
    "Um app pra tarefas, uma planilha pra dinheiro, um caderno pra metas — e nenhum conversa com o outro.",
    "Comprou um template bonito no Notion, usou uma semana, esqueceu que existia.",
    "Sabe que precisa se organizar \u201cpara valer\u201d — mas nunca sobra tempo pra montar um sistema do zero.",
  ],
};

export const solution = {
  kicker: "Uma mudança de categoria",
  title: "Não é mais um template. É a espinha dorsal da sua vida.",
  body: "Life OS não é uma coleção de páginas bonitas — é uma lógica simples que nunca muda: o que você quer (Objetivo) se desdobra no caminho até lá (Projeto), que se desdobra na ação de hoje (Tarefa). Tudo o resto do sistema existe para dar suporte a essa cadeia.",
  flow: [
    { icon: Target, label: "Objetivos", caption: "o que eu quero" },
    { icon: FolderKanban, label: "Projetos", caption: "como eu chego lá" },
    { icon: CheckSquare, label: "Tarefas", caption: "o que eu faço hoje" },
  ],
};

export const howItWorks = {
  kicker: "Do zero ao uso em poucos minutos",
  title: "Três passos. Nenhuma configuração.",
  steps: [
    {
      title: "Duplique",
      body: "Um clique e o workspace inteiro aparece na sua conta Notion.",
    },
    {
      title: "Abra a Home",
      body: "Todos os módulos, o painel do dia e os atalhos já estão no lugar.",
    },
    {
      title: "Siga o ritmo",
      body: "Diário, semanal, mensal, anual. O sistema te lembra o que fazer em cada um.",
    },
  ],
};

export const demo = {
  kicker: "Por dentro do sistema",
  title: "Não é só bonito. É funcional.",
  body: "Quadros, tabelas e progresso automático — já configurados, prontos pra usar no primeiro dia.",
  ctaSecondary: "Quero começar a usar",
  tabs: ["Tarefas", "Finanças", "Hábitos"] as const,
};

export type ModuleItem = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export const modules = {
  kicker: "Tudo em um lugar só",
  title: "Nove peças. Uma lógica só.",
  items: [
    { icon: Target, name: "Objetivos", description: "Uma meta por área da vida, com progresso que sobe sozinho." },
    { icon: FolderKanban, name: "Projetos", description: "A ponte entre a meta e a ação do dia a dia." },
    { icon: CheckSquare, name: "Tarefas", description: "O que fazer hoje, por prioridade e prazo." },
    { icon: Calendar, name: "Agenda", description: "Reuniões, compromissos e blocos de foco, num calendário só." },
    { icon: Repeat, name: "Hábitos", description: "Check-in diário com contador de consistência." },
    { icon: Wallet, name: "Finanças", description: "Receitas e despesas por categoria, sem virar planilha contábil." },
    { icon: BookOpen, name: "Recursos", description: "Livros, cursos e notas soltas, tudo num lugar." },
    { icon: Sparkles, name: "Assistente IA", description: "Prompts prontos pra colar em qualquer IA." },
    { icon: CalendarClock, name: "Planejamento", description: "Revisão semanal, mensal e anual — o hábito que sustenta tudo." },
  ] satisfies ModuleItem[],
};

export const benefits = {
  kicker: "O que muda de verdade",
  title: "Menos ferramentas. Mais clareza.",
  items: [
    {
      title: "Você para de decidir o que fazer primeiro",
      body: "O sistema já mostra, todo santo dia.",
    },
    {
      title: "Você para de perder progresso",
      body: "Tudo fica registrado num lugar que você volta a abrir.",
    },
    {
      title: "Você para de recomeçar do zero",
      body: "O sistema absorve as semanas em que você some.",
    },
  ],
};

export const comparison = {
  kicker: "Por que não é só mais um template",
  title: "A diferença não é visual. É estrutural.",
  rows: [
    { label: "Tudo conectado", apps: "Não", template: "Raramente", lifeOs: "Sim" },
    { label: "Progresso automático", apps: "Não", template: "Não", lifeOs: "Sim" },
    { label: "Manual de uso incluído", apps: "—", template: "Raramente", lifeOs: "Sim (21 páginas)" },
    { label: "Setup necessário", apps: "Alto", template: "Médio", lifeOs: "Nenhum" },
    { label: "Custo recorrente", apps: "Geralmente sim", template: "Às vezes", lifeOs: "Não" },
  ],
  columns: ["Apps separados", "Template genérico", "Life OS"],
};

export const personas = {
  kicker: "Talvez você se reconheça aqui",
  title: "Feito para quem está reconstruindo alguma coisa",
  items: [
    "Para quem imigrou e está recomeçando do zero — vida em duas moedas, dois fusos, dois mundos.",
    "Para quem cria conteúdo e mistura vida pessoal com trabalho — porque as duas coisas nunca são realmente separadas.",
    "Para quem já tentou 5 apps de produtividade — e ainda sente que nada gruda.",
    "Para quem só quer abrir um lugar só e saber o que fazer primeiro.",
  ],
};

export const faq = {
  kicker: "Antes de decidir",
  title: "Perguntas frequentes",
  items: [
    {
      q: "Preciso saber usar Notion pra usar o Life OS?",
      a: "Não. O manual em PDF ensina cada módulo do zero, com passo a passo de configuração.",
    },
    {
      q: "Funciona numa conta Notion gratuita?",
      a: "Sim. Todo o sistema roda dentro dos limites do plano gratuito.",
    },
    {
      q: "Como recebo o template depois de comprar?",
      a: "Um link de duplicação — um clique e o workspace aparece na sua conta.",
    },
    {
      q: "Posso usar no celular?",
      a: "Sim, é a mesma conta Notion — o app se adapta automaticamente.",
    },
    {
      q: "Recebo atualizações futuras?",
      a: "Sim, sem custo adicional.",
    },
    {
      q: "E se eu não gostar?",
      a: "Reembolso de 7 dias, por qualquer motivo. Sem perguntas, sem burocracia.",
    },
  ],
};

export const offer = {
  kicker: "Sem mensalidade, sem pegadinha",
  title: "Um pagamento. Seu para sempre.",
  price: "€29",
  priceNote: "pagamento único",
  includes: [
    "Workspace Life OS completo (9 databases conectadas)",
    "Design System + Manual em PDF (21 páginas)",
    "Conteúdo de exemplo pronto pra explorar",
    "Atualizações futuras inclusas",
    "Funciona em qualquer conta Notion, grátis ou paga",
  ],
  cta: "Quero o meu Life OS agora",
  guarantee: "Reembolso de 7 dias, por qualquer motivo",
};

export const finalCta = {
  title: "Você já está reconstruindo a sua vida. Deixa o sistema cuidar da organização.",
  cta: "Quero o meu Life OS — €29",
};

export const nav = {
  links: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Módulos", href: "#modulos" },
    { label: "Comparação", href: "#comparacao" },
    { label: "Preço", href: "#preco" },
    { label: "FAQ", href: "#faq" },
  ],
};
