import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        "background-alt": "rgb(var(--color-background-alt) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-muted": "rgb(var(--color-ink-muted) / <alpha-value>)",
        terracotta: {
          DEFAULT: "rgb(var(--color-terracotta) / <alpha-value>)",
          dark: "rgb(var(--color-terracotta-dark) / <alpha-value>)",
        },
        mustard: "rgb(var(--color-mustard) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        display: [
          "56px",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h1: ["40px", { lineHeight: "1.1", fontWeight: "600" }],
        h2: ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["18px", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.5" }],
      },
      maxWidth: {
        "6xl": "72rem",
      },
      boxShadow: {
        card: "0 12px 24px -12px rgb(33 24 18 / 0.12)",
        "card-dark": "0 12px 24px -12px rgb(0 0 0 / 0.4)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
