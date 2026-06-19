import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valorant: {
          red: "#FF4655",
          black: "#0F1923",
          dark: "#171E24",
          slate: "#1F2326",
          gray: "#7E7E7E",
          white: "#ECE8E1",
        },
      },
      fontFamily: {
        valorant: ["var(--font-valorant)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
    },
  },
  plugins: [],
};
export default config;