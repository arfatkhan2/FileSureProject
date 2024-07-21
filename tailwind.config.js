/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray1: {
          "100": "#1d2939",
          "200": "#111",
        },
        darkgray: "#98a2b3",
        "gray-900": "#101828",
        whitesmoke: "#f2f4f7",
        "gray-500": "#667085",
        orange: {
          "100": "#ffba00",
          "200": "#ffb900",
        },
        darkgoldenrod: "#cc8500",
        "gray-200": "#e4e7ec",
        darkslategray: {
          "100": "#475467",
          "200": "#344154",
        },
        olivedrab: "#80a948",
        gainsboro: "#d8d8d8",
      },
      spacing: {},
      fontFamily: {
        "sf-caption-1-regular": "'SF Pro Text'",
        "sf-title-2-semibold": "'SF Pro Display'",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      smi: "13px",
      mid: "17px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      mini: "15px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "20xl": "39px",
      "12xl": "31px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
