module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      railway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ff0000",
      },
      lineHeight: {
        extra: "2.5",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
