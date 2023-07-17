/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },

  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#00e6b0",
          "base-100": "#0a192f",
          ".bg-dark": {
            "background-color": "#09162a",
          },
          "base-content": "#ffffff",
          "neutral-content": "#a6a6a6",
        },

        winter: {
          ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
          primary: "#40C4FF",
          ".bg-dark": {
            "background-color": "#fafafa",
          },
          "base-100": "#ffffff",
          "base-content": "#0a192f",
          "neutral-content": "#3b4759",
        },
      },
    ],
    darkTheme: "night",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
