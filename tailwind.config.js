/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#64ffda",
          "base-100": "#0a192f",
          "base-content": "#ccd6f6",
          "neutral-content": "#8892b0",
        },

        winter: {
          ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
          primary: "#fc4b77",
          "base-100": "#ffffff",
          "base-content": "#0a192f",
          "neutral-content": "#112240",
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
