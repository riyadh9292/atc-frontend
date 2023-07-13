module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        graphite: "#1B2430",
        arabica: "#0A642B",
        golden: "#D2AF26",
        // fanta: "#F38222",
        fanta: "#0A642B",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
        handlee: ["handlee", "sans-serif"],
      },
      backgroundImage: {
        section:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/image/forex__image.jpg')",
        parallax:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image/bg__image.jpg')",
        contact: "url('/image/contact__bg.jpg'),",
      },
    },
  },
  plugins: [],
};
