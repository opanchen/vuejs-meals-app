/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      xsOnly: { max: "479.98px" },
      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
    },
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2rem",
          xl: "2rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
