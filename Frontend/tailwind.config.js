/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".stroke-text": {
      color: "black",
      textShadow:
        "-0.7px -0.7px 0 white, 0.7px -0.7px 0 white, -0.7px 0.7px 0 white, 0.7px 0.7px 0 white",
      letterSpacing: "0.20rem",
    },
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
    ".card-shadow-dark": {
      boxShadow:
        "inset 10px 10px 20px #192230, inset -10px -10px 20px #233046;",
    },
    ".card-shadow": {
      boxShadow: "-9px 9px 9px #c2c2c2",
    },
    ".text-shadow": {
      boxShadow: "-9px 9px 15px #a6a6a6, 9px -9px 15px #ffffff",
    },
    ".text-shadow-dark": {
      boxShadow: "9px -9px 15px #273141, -9px 9px 15px #3f5169",
    },
    ".btn-shadow": {
      background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
      boxShadow: "5px 5px 10px #d1d1d1,-5px -5px 10px #ffffff",
    },
    ".btn-shadow-hover": {
      background: "#ffffff",
      boxShadow: "inset 5px 5px 10px #d1d1d1,inset -5px -5px 10px #ffffff",
    },
    // ".scrollbar": {
    //   overflowY: "auto",
    //   scrollbarWidth: "thin",
    // },
    // ".scrollbar::-webkit-scrollbar": {
    //   height: "2px",
    //   width: "5px",
    // },
    // ".scrollbar::-webkit-scrollbar-thumb": {
    //   backgroundColor: "rgb(30 41 59)",
    //   borderRadius: "15px",
    // },
    // ".scrollbar::-webkit-scrollbar-track-piece": {
    //   backgroundColor: "black",
    // },
  });
});

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}", "./src/components/*/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: { min: "310px", max: "369px" },
      xs: { max: "389px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Raleway: "Raleway",
        Roboto: "Roboto",
        Benne: "Benne",
        DM: "DM",
        Inter: "Inter",
        Montserrat: "Montserrat",
        Kanit: "Kanit",
      },
      colors: {
        yellow: "#ffcf20",
        blue: "#5333ed",
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
