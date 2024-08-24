/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "jetbrains-mono": "JetBrains Mono",
      },
      colors: {
        background: "#1C1C1C",
        secondary: "#222",
        foreground: "#FFFAFF",
        accent: "#007DFF",
        header: "#222",
      },
      screens: {
        mobile: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
        large: "1920px",
      },
    },
  },
  plugins: [],
};
