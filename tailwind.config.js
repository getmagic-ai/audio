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
      "blog-body": ['Tilt Neon', "cursive"],
      "blog-title": ['Tilt Neon', 'cursive'],
    },
    extend: {
      colors: {
        "blue-cus": "#111827",
      },
    },
  },
  plugins: [require("daisyui")],
};
