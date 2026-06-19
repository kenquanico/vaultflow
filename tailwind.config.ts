import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          pink: "hsl(var(--accent-pink))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        vault: {
          black: "hsl(var(--vault-black))",
          ink: "hsl(var(--vault-ink))",
          plum: "hsl(var(--vault-plum))",
          violet: "hsl(var(--vault-violet))",
          purple: "hsl(var(--vault-purple))",
          magenta: "hsl(var(--vault-magenta))",
          lavender: "hsl(var(--vault-lavender))",
          smoke: "hsl(var(--vault-smoke))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5.75rem", { lineHeight: "0.96", letterSpacing: "0", fontWeight: "500" }],
        "display-lg": ["4.25rem", { lineHeight: "1", letterSpacing: "0", fontWeight: "600" }],
        "heading-xl": ["3.25rem", { lineHeight: "1.06", letterSpacing: "0", fontWeight: "600" }],
        "heading-lg": ["2.5rem", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "600" }],
        "heading-md": ["1.75rem", { lineHeight: "1.18", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65", letterSpacing: "0" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", letterSpacing: "0" }],
        "caption": ["0.75rem", { lineHeight: "1.45", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        section: "var(--section-spacing)",
      },
      boxShadow: {
        "card-glow": "0 0 0 1px hsl(var(--border)), 0 0 40px hsl(var(--primary-glow) / 0.2)",
        "hero-glow": "0 0 100px hsl(var(--primary) / 0.42), 0 0 220px hsl(var(--accent-pink) / 0.22)",
        "inner-line": "inset 0 1px 0 hsl(var(--foreground) / 0.12)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 50% -12%, hsl(var(--accent-pink) / 0.78) 0%, hsl(var(--primary) / 0.46) 22%, hsl(var(--vault-plum)) 49%, hsl(var(--background)) 78%)",
        "card-radial": "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.18), transparent 42%)",
        "text-gradient": "linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--vault-lavender)) 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.03)" },
        },
        "pulse-grid": {
          "0%, 100%": { opacity: "0.18" },
          "50%": { opacity: "0.34" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "pulse-grid": "pulse-grid 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
