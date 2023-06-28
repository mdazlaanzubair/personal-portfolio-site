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
          primary: "#00e6b0",
          "base-100": "#0a192f",
          "base-content": "#f5f5f5",
          "neutral-content": "#d9d9d9",
        },

        winter: {
          ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
          primary: "#00e6b0",
          "base-100": "#f5f5f5",
          "base-content": "#0a192f",
          "neutral-content": "#122c54",
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
