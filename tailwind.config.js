/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".-my-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".my-rotate-y-0": {
      transform: "rotateY(0)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "perspective(1000px)",
    },
    ".btn-shadow": {
      background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
      boxShadow: "5px 5px 10px #d1d1d1,-5px -5px 10px #ffffff",
    },
    ".btn-shadow-hover": {
      background: "#ffffff",
      boxShadow: "inset 5px 5px 10px #d1d1d1,inset -5px -5px 10px #ffffff",
    },
  });
});

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}", "./src/components/*/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Raleway: "Raleway",
        Roboto: "Roboto",
        Benne: "Benne",
        DM: "DM",
        Inter: "Inter",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      backfaceHidden: { "backface-visibility": "hidden" },
    },
  },
  plugins: [require("tailwindcss-transform")(["responsive"]), Myclass],
};
//
