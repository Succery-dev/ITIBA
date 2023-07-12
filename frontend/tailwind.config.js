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
        textPrimary: "#fff",
        textSecondary: "#C7C7C7",
        textTertiary: "#979797",
        primary: "#C031FD",
        secondary: "#2F3CB2",
        backgroundColor: "#01142E",
        backgroundColorDark: "#000C1B",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
