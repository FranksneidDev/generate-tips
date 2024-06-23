import type { Config } from "tailwindcss";
import {inspect} from "util";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          'light-cyan': 'hsl(193, 38%, 86%)', //Color textos
          'neon-green': 'hsl(150, 100%, 66%)', //Color del boton y numero de consejo
        },
        neutral: {
          'grayish-blue': 'hsl(217, 19%, 38%)', //Color Tarjeta
          'dark-grayish-blue': 'hsl(217, 19%, 24%)',//Color lineas tarjeta
          'dark-blue': 'hsl(218, 23%, 16%)', //Background-fondo
        },
      }
    },
  },
  plugins: [],
};
export default config;
