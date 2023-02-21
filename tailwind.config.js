/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "blog-title": ['Oswald', "sans-serif"],
      "blog-body": ['Lato', "sans-serif"],
    },
    extend: {
      colors: {
        "blue-cus": "#111827",
      },
    },
  },
  plugins: [require("daisyui")],
};
