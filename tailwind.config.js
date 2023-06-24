/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-dark": "#0a192f",
        navy: "#112240",
        "navy-light": "#233554",
        "navy-slate-dark": "#8892b0",
        "navy-slate": "#a8b2d1",
        "navy-slate-light": "#ccd6f6",
        "navy-white": "#e6f1ff",
        "navy-accent": "#64ffda",
      },
    },
  },

  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["night", "synthwave", "corporate"],
    darkTheme: "night",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
