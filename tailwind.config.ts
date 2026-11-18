import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: {
          DEFAULT: "#163F38",
          deep: "#0F2D28",
          light: "#1F544B",
          muted: "#2A5C53",
          tint: "#ECF2EE",
        },
        ink: {
          DEFAULT: "#1A2725",
          muted: "#52605D",
          subtle: "#7A8784",
        },
        bronze: {
          DEFAULT: "#B38A56",
          light: "#C9A679",
          dark: "#967040",
          tint: "#F7F1E6",
        },
        ivory: {
          DEFAULT: "#F6F2E9",
          light: "#FAF8F4",
          surface: "#FFFFFF",
          warm: "#EFECE4",
          border: "#E6E1D5",
          darkborder: "#D5CEC0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        subtle:
          "0 1px 2px rgba(26, 39, 37, 0.03), 0 4px 16px -2px rgba(26, 39, 37, 0.04)",
        elevated:
          "0 2px 4px rgba(26, 39, 37, 0.03), 0 12px 32px -4px rgba(22, 63, 56, 0.07)",
        floating:
          "0 4px 12px rgba(26, 39, 37, 0.05), 0 24px 48px -8px rgba(22, 63, 56, 0.12)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
