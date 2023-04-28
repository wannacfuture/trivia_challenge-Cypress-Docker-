/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        fromtop: "fromtop 0.5s ease-out ",
        fade: "fade 2s ease-in 1s backwards",
        fromleft: "fromleft 0.3s ease-in 0.4s backwards ",
        fromright: "fromright 0.3s ease-in 0.6s backwards ",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fromtop: {
          "0%": { top: -1200, opacity: 0 },
          "100%": { top: 0 },
        },
        fromleft: {
          "0%": { left: -1500, opacity: 0 },
          "100%": { left: 0 },
        },
        fromright: {
          "0%": { left: -1500, opacity: 0 },
          "100%": { left: 0 },
        },
      },
    },
  },
  plugins: [],
};
