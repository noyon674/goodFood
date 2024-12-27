import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Playwrite CO Guides', 'serif']
    },
    container:{
      center: true
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'heroBackground': "url('/img/hero.jpg')",
        'serviceBG': "url('/img/service.jpg')",
        'aboutBG': "url('/img/about.jpg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
