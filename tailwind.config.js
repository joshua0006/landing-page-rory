/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#7C3AED",
        },
        blue: {
          500: "#3B82F6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
