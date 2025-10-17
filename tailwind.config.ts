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

        // Text
        "text-primary-red": "var(--text-primary-red)",
        "text-primary-black": "var(--text-primary-black)",
        "text-vibrant-grey": "var(--text-vibrant-grey)",
        "text-light-red": "var(--text-light-red)",

        // Status
        danger: "var(--color-danger)",
        warning: "var(--color-warning)",
        success: "var(--color-success)",

        // Backgrounds
        "bg-primary-white": "var(--bg-primary-white)",
        "bg-secondary-white": "var(--bg-secondary-white)",
        "bg-dark-white": "var(--bg-dark-white)",
        "bg-gray-white": "var(--bg-gray-white)",

        // Buttons
        "button-primary-bg": "var(--button-primary-bg)",
        "button-primary-text": "var(--button-primary-text)",
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
