import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD000",
          black: "#111111",
          dark: "#0d0d0d",
          mid: "#141414",
          card: "#1a1a1a",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a3a3a3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config