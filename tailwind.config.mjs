/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "500px",
      // => @media (min-width: 500px) { ... }

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
      maskImage: {
        "gradient-mask-transparent-30":
          "linear-gradient(to bottom, transparent, black 30%, transparent)",
        "gradient-mask-transparent-90":
          "linear-gradient(black 90%, transparent)",
      },
      backgroundImage: {
        quinto: "url('/quinto_escalon.webp')",
        stadium: "url('/estadio.webp')",
        dukiRubio: "url('/duki-rubio-cantando.webp')",
        antezana: "url('/antezana-background.webp')",
        antezanaBeforeGraffity: "url('/antezana-before-graffity.webp')",
        antezanaGraffity: "url('/antezana-graffity.webp')",
        alasDeDuki: "url('/fondo-alas.webp')",
      },
      backgroundPosition: {
        "custom-pos-x-300": "-300px", // Nombre de la clase y valor de background-position-x
        "custom-pos-x-1000": "-1000px", // Nombre de la clase y valor de background-position-x
        "custom-pos-y-100": "0, -100px", // Nombre de la clase y valor de background-position-x
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
    },
  },
  plugins: [],
};
