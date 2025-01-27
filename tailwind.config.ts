import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slideBg: "#F0F0F0",
        buttonBg: "#CCCCCC",
      },
      screens: {
        "custom-sm": "620px",
        "custom-lg": "1160px",
      },
    },
  },
  plugins: [],
} satisfies Config;
