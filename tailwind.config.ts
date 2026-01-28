import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Architectural custom colors
        surface: {
          warm: "hsl(var(--surface-warm))",
          sand: "hsl(var(--surface-sand))",
        },
        "text-secondary": "hsl(var(--text-secondary))",
        divider: "hsl(var(--divider))",
      },
      fontFamily: {
        serif: ["'DM Serif Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Architectural scale
        "display": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "headline": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "subhead": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "caption": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        "micro": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        "section": "clamp(5rem, 12vw, 10rem)",
        "block": "clamp(3rem, 6vw, 5rem)",
        "gutter": "clamp(1.5rem, 4vw, 3rem)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      },
      transitionTimingFunction: {
        "arch": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      transitionDuration: {
        "slow": "800ms",
        "slower": "1200ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
