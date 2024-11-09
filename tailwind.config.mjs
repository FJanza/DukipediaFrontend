/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        stadium: "url('/estadio.png')",
      },
    },
    colors: {
      ameri: {
        10: "#FDE3E3",
        20: "#FAC3C3",
        30: "#F69F9E",
        40: "#F17A78",
        50: "#EB5553",
        60: "#E63330",
        70: "#D92424",
        80: "#C51E1E",
        90: "#B11A1A",
        100: "#D71112",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1280px) { ... }

      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        quinto: "url('/quinto_escalon.png')",
      },
    },
  },
  plugins: [],
};
