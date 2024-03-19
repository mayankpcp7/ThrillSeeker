/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        barlow: "Barlow",
      },
      colors: {
        extralightred: "#fa6458",
        lightred: "#fc3c60",
        yellow: "#ffbe4a",
        primaryblack: "#4d4d4d",
        grey: "#707070",
        lightwhite: "#b9bdbe",
        brown: "#4d396",
        secondaryblack: "#4d4c4a",
        tertiaryblack: "#4d4c4c",
        offwhite: "#c7c4c2",
      },
      fontSize: {
        "6xl": "64px",
        "2xl": "26px",
      },
      backgroundImage: {
        headerbg: "url(./assets/images/webp/HeaderBg.webp)",
        map: "url(./assets/images/webp/OurNewsletterBg.webp)",
        blogbg: "url(./assets/images/webp/PlaneBg.webp)",

      },
      boxShadow: {
        common: " 0px 0px 20px 0px #00000033",
        inputbox: "0px 0px 40px 0px #0000001F",
        tourists: "0px 0px 12px 0px #00000033",
        selectbox: " 0px 9.005355834960938px 45.02677536010742px 0px #0000001a",
      },
    },
  },
  plugins: [],
};
