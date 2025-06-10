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
      backgroundImage: {
        quinto: "url('/quinto_escalon.webp')",
        stadium: "url('/estadio.webp')",
        dukiRubio: "url('/duki-rubio-cantando.webp')",
        dukiVelez: "url('/duki-velez.webp')",
        antezana: "url('/antezana-background.webp')",
        antezanaBeforeGraffity: "url('/antezana-before-graffity.webp')",
        antezanaGraffity: "url('/antezana-graffity.webp')",
        alasDeDuki: "url('/fondo-alas.webp')",
        smoke: "url('/smoke.webp')",
        dukiCantandoBW: "url('/duki-cantando-bw.webp')",
        grietaDelInvocador: "url('/lol-bg.webp')",
        ameri: "url('/ameri-background.webp')",
        rockstar: "url('/rockstar-escenario.webp')",
      },
      keyframes: {
        "flip-horizontal": {
          "0%, 100%": {transform: "scaleX(1)"},
          "50%": {transform: "scaleX(-1)"},
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 100%": {opacity: "1"},
          "20%, 21.999%, 63%, 63.999%": {opacity: "0.95"},
        },
        glitchX: {
          "0%": {transform: "translateX(0)"},
          "25%": {transform: "translateX(2px)"},
          "50%": {transform: "translateX(-2px)"},
          "75%": {transform: "translateX(1px)"},
          "100%": {transform: "translateX(0)"},
        },
        glitchAnim: {
          "0%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(-2px,-2px)",
          },
          "50%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(2px,2px)",
          },
          "100%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(-2px,2px)",
          },
        },
        glitchAnim2: {
          "0%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(2px,-2px)",
          },
          "50%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(-2px,2px)",
          },
          "100%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(2px,2px)",
          },
        },
        glitchAnim3: {
          "0%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(2px,2px)",
          },
          "50%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(-2px,-2px)",
          },
          "100%": {
            clip: "rect(random(100)px,9999px,random(100)px,0)",
            transform: "translate(2px,-2px)",
          },
        },
        scanlines: {
          "0%": {transform: "translateY(0)"},
          "100%": {transform: "translateY(100%)"},
        },
        noise: {
          "0%, 100%": {opacity: "0.3"},
          "50%": {opacity: "0.1"},
        },
      },
      animation: {
        "flip-horizontal": "flip-horizontal 2s infinite",
        flicker: "flicker 3s linear infinite",
        glitchX: "glitchX 0.2s infinite linear alternate-reverse",
        glitchAnim: "glitchAnim 2s infinite linear alternate-reverse",
        glitchAnim2: "glitchAnim2 4s infinite linear alternate-reverse",
        glitchAnim3: "glitchAnim3 5s infinite linear alternate-reverse",
        scanlines: "scanlines 8s linear infinite",
        noise: "noise 0.2s infinite",
      },
      backgroundPosition: {
        "custom-pos-x-300": "-300px", // Nombre de la clase y valor de background-position-x

        "custom-pos-x-1000": "-700px", // Nombre de la clase y valor de background-position-x

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
        glitchRed: "#ff0000",
        glitchGreen: "#00ff00",
        glitchCyan: "#00ffff",
        argentina: "#0D5EAF",
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      addUtilities({
        ".gradient-mask-transparent-30": {
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 30%, transparent)",
        },
        ".gradient-mask-transparent-linear-90": {
          maskImage: "linear-gradient(black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(black 90%, transparent)",
        },
      });
    },
    function ({addComponents}) {
      addComponents({
        ".glitch-container": {
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "-100%",
            width: "300%",
            height: "100%",
            animation: "scanlines 4s linear infinite",
          },
        },
        ".scanlines": {
          background:
            "repeating-linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 0.5px, transparent 1px)",
          pointerEvents: "none",
        },
        ".noise": {
          background:
            'url("data:image/png;base64,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")',
          opacity: "0.02",
          animation: "noise 0.2s infinite",
        },
      });
    },
  ],
};
