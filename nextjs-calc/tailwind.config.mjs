/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
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
        'deep-blue': '#032B44',
        'electric-blue': '#03A9F4',
        'neon-green': '#33CC33',
        'dark-gray': '#0a0a0a',
        'light-gray': '#ededed',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
