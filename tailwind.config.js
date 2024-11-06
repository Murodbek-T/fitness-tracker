/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          10: "#7711DD",
        },
        pink: {
          10: "#FFB0BC",
        },
        yellow: {
          10: "#FFBD12",
        },
        red: {
          10: "#FA6648",
        },
        cyan: {
          10: "#1BDBC4",
        },
      },
    },
  },
  plugins: [],
};
