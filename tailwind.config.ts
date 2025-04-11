import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#009aff",
        secondary: "#425583",
        input: "#E1E0E0",
        gradient: {
          start: "#F9D0D05C",
          mid: "#FFE7E71A",
          end: "#FFDDDD8F",
        },
        btn: {
          start: "#FF9292",
          mid: "#FF9292",
          end: "#FB6D6D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
