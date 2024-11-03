import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E7F8F6",
          100: "#CFF0ED",
          200: "#9EE1DA",
          300: "#6ED2C8",
          400: "#3DC3B5",
          500: "#0DB4A3",
          600: "#0A9082",
          700: "#086C62",
          800: "#054841",
          900: "#032421",
        },
        secondary: {
          50: "#FAFBE9",
          100: "#F4F7D3",
          200: "#E9EEA7",
          300: "#DFE67B",
          400: "#D4DD4F",
          500: "#C9D523",
          600: "#A1AA1C",
          700: "#798015",
          800: "#50550E",
          900: "#282B07",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
