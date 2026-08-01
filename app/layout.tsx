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

const title = "Life OS | Organize sua vida no Notion";

const description =
  "O sistema definitivo para organizar objetivos, tarefas, hábitos, projetos e finanças dentro do Notion. Template completo com manual em PDF, bônus exclusivos e atualizações gratuitas.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title,

  description,

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  keywords: [
    "Life OS",
    "Template Notion",
    "Notion",
    "Produtividade",
    "Organização",
    "Gestão pessoal",
    "Planejamento",
    "Hábitos",
    "Finanças",
    "Second Brain",
    "Sistema de produtividade",
    "Notion Portugal",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title,
    description,
    url: site.url,
    siteName: "Life OS",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Life OS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Life OS",
  description,
  brand: {
    "@type": "Brand",
    name: "Life OS",
  },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <head>
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
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