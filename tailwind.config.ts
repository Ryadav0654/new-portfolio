import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite', // Adjust the duration (10s for slow spin)
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) { 
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",  
          "&::-webkit-scrollbar": {
            display: "none",         
        },
      }})
    })
  ],
} satisfies Config;
