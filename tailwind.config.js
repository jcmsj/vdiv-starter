/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
      themes: [
        "light",
        "night",
      ],
    },
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],
    plugins: [
      require("daisyui"),
    ],
  };
  