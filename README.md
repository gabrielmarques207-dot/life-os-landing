# Life OS — Landing Page

Landing page do produto Life OS, construída em Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

- `app/` — layout raiz (fontes, SEO, JSON-LD) e a página principal.
- `components/` — uma seção da landing page por arquivo (Hero, Problem, Solution, HowItWorks, Demo, Modules, Benefits, Comparison, Personas, Faq, Offer, FinalCta, Footer, Nav).
- `components/ui/` — primitivos reutilizáveis (Button, Badge, SectionHeading, Reveal).
- `lib/content.ts` — toda a copy do site, centralizada (trocar textos aqui, não dentro dos componentes).

## Pendências antes de publicar

- **Link de compra**: centralizado em `lib/content.ts` no campo `site.checkoutUrl` (hoje aponta para `#preco`) — troque por ali pelo link real do checkout (Gumroad, Stripe Payment Link, etc.). Hero, Offer e FinalCta já leem esse único valor.
- **Domínio real**: trocar `site.url` em `lib/content.ts` pelo domínio de produção antes do deploy (usado no Open Graph, no JSON-LD, no sitemap e no robots.txt).
- **Analytics**: nenhum script foi incluído — depende de qual ferramenta você prefere (Vercel Analytics, Plausible, Fathom...), então deixei em aberto propositalmente em vez de decidir por você.

## Já resolvido

- ✅ Imagem Open Graph (`public/og-image.png`, 1200×630) já gerada e referenciada em `app/layout.tsx`.
- ✅ `app/sitemap.ts` e `app/robots.ts` gerados automaticamente pelo Next.js.
- ✅ `alternates.canonical` configurado nos metadados.

## Notas de design

- Paleta, tipografia e espaçamentos vivem em `tailwind.config.ts` e nas variáveis CSS em `app/globals.css` — dark mode incluso via classe `.dark`.
- Nenhum emoji é usado no código — todos os ícones são do pacote `lucide-react`, conforme o Design System aprovado.
- As animações de entrada (`components/ui/Reveal.tsx`) usam `viewport={{ once: true }}`: o conteúdo nunca fica preso invisível ao rolar a página para cima e para baixo. O Next.js renderiza o HTML completo no servidor independentemente da animação — motores de busca e clientes sem JavaScript recebem o conteúdo real.
