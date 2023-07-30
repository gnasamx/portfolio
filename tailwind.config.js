const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      black: "rgb(var(--black) / <alpha-value>)",
      transparent: "transparent",
      gray: {
        50: "rgb(var(--gray-050) / <alpha-value>)",
        100: "rgb(var(--gray-100) / <alpha-value>)",
        200: "rgb(var(--gray-200) / <alpha-value>)",
        300: "rgb(var(--gray-300) / <alpha-value>)",
        400: "rgb(var(--gray-400) / <alpha-value>)",
        500: "rgb(var(--gray-500) / <alpha-value>)",
        600: "rgb(var(--gray-600) / <alpha-value>)",
        700: "rgb(var(--gray-700) / <alpha-value>)",
        800: "rgb(var(--gray-800) / <alpha-value>)",
        900: "rgb(var(--gray-900) / <alpha-value>)",
      },
      blue: {
        50: "rgb(var(--blue-050) / <alpha-value>)",
        100: "rgb(var(--blue-100) / <alpha-value>)",
        200: "rgb(var(--blue-200) / <alpha-value>)",
        300: "rgb(var(--blue-300) / <alpha-value>)",
        400: "rgb(var(--blue-400) / <alpha-value>)",
        500: "rgb(var(--blue-500) / <alpha-value>)",
        600: "rgb(var(--blue-600) / <alpha-value>)",
        700: "rgb(var(--blue-700) / <alpha-value>)",
        800: "rgb(var(--blue-800) / <alpha-value>)",
        900: "rgb(var(--blue-900) / <alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      fontSize: {
        xs: ["10px", { letterSpacing: ".01em" }],
        sm: ["12px", { letterSpacing: "0" }],
        base: ["14px", { letterSpacing: "-.08px" }],
        lg: ["16px", { letterSpacing: "-.18px" }],
        xl: ["18px", { letterSpacing: "-.014em" }],
        "2xl": ["22px"],
        "3xl": ["24px", { letterSpacing: "-.46px" }],
        "4xl": ["28px", { letterSpacing: "-.21em" }],
      },
      textColor: {
        primary: "rgb(var(--text-primary))",
        blue: "rgb(var(--text-blue))",
        selection: "rgb(var(--text-selection))",
      },
      backgroundColor: {
        primary: "rgb(var(--bg-primary))",
        selection: "rgb(var(--bg-selection))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
