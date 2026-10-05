import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        void: "#050609",
        panel: "#0b0f15",
        cyan: "#00f0ff",
        violet: "#8b5cf6",
        pink: "#ff2bd6",
      },
      boxShadow: {
        neon: "0 0 50px rgba(0,240,255,.12)",
        pink: "0 0 50px rgba(255,43,214,.10)",
      },
    },
  },
  plugins: [],
};

export default config;
