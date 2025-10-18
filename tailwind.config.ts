import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "tertiary": "var(--color-tertiary)",

        // Text
        "primary-red": "var(--text-primary-red)",
        "primary-black": "var(--text-primary-black)",
        "vibrant-grey": "var(--text-vibrant-grey)",
        "light-red": "var(--text-light-red)",

        // Status
        danger: "var(--color-danger)",
        warning: "var(--color-warning)",
        success: "var(--color-success)",

        // Backgrounds
        "primary-white": "var(--bg-primary-white)",
        "secondary-white": "var(--bg-secondary-white)",
        "dark-white": "var(--bg-dark-white)",
        "gray-white": "var(--bg-gray-white)",
        "tertiary-white": "var(--bg-tertiary-white)",
        "primary-red-bg": "var(--bg-primary-red)",


        // Buttons
        "button-primary-bg": "var(--button-primary-bg)",
        "button-primary-text": "var(--button-primary-text)",

        //Border 
        "border-light": "var(--border-light)",
        "border-button": "var(--button-border)",
      },

      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
