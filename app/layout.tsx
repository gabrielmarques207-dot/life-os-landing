import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Life OS — O sistema operacional pessoal dentro do Notion";
const description =
  "Life OS conecta objetivos, projetos, tarefas, hábitos e finanças num só sistema dentro do Notion. Pagamento único, sem mensalidade, com manual de 21 páginas incluído.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "template Notion",
    "sistema de produtividade",
    "organização pessoal",
    "Notion PT",
    "planejamento de vida",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Life OS",
  description,
  brand: { "@type": "Brand", name: site.creatorHandle },
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <head>
        {/* Blocking, minimal script: applies dark mode before first paint to avoid flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isDark) document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
