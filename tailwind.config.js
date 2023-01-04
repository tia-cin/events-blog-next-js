/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
      },
      height: {
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
      },
    },
  },
  plugins: [],
};
