/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b2b2b2",
        pinkColor: "#ff97cf",
        whiteColor: "#ffffff",
        secondary: {
          100: "#eae3dc",
          200: "#5d7e62",
          300: "#3d85c6",
        },
      },

      backgroundColor: {
        primary: "#0d0d0d",
      },
      padding: {
        pbuttom: 5.5,
        3: "7px",
        2: "5px",
        1: "2.5px",
      },
      borderWidth: {
        1: "0.01px",
      },
      margin: {
        41: "168px",
        85: "360px",
        86: "365px",
        88: "415px",
        0.5: "2px",
      },
      width: {
        100: "440px",
        150: "600px",
        200: " 900px",
        0.5: "1px",
      },
      height: {
        100: "430px",
        200: "528px",
        300: "625px",
        400: "630px",
      },
    },
  },
  plugins: [],
};
