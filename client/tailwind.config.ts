import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": "#005268",
        "bg-orange-yellow": "#E66730",
        "bg-sky-blue": "#3DB9D1",
        "bg-gray-white": "#F8F7F9",
        "bg-icon-color": "#8A8A8A",
      },
    },
  },
  plugins: [],
};
export default config;
