module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        pinkish: "rgb(224, 36, 94)",
        primary: "rgb(29, 161, 242)",
        "primary-hover": "rgb(26, 145, 218)",
        dark: "rgb(21, 32, 43)",
        "dark-lighter": "rgb(25, 39, 52)",
        "dark-hover": "rgb(22, 45, 64)",
      },
      opacity: {
        0: 0,
        15: "0.15",
        25: "0.25",
        50: "0.50",
        75: "0.75",
        100: "100",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        default: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        xl: "1rem",
      },
    },
  },
  variants: {},
  plugins: ["tailwindcss", "postcss-preset-env"],
};
