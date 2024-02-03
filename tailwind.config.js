/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252A33",
        lighter: "#384049",
        darker: "#1F232A",
        accent: "#4F5460",
        lightGray: "#CCCCCC",
        orange: "#FF5722",
        blue: "#3498DB",
        green: "#27AE60",
        darkest: "#121212",
      },
    },
  },
  plugins: [],
};
