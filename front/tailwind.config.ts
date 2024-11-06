import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dddddd",
        secondary: "#f9f3f3",
        tertiary: "#f7d9d9",
        quaternary: "#d1605e",
      },
    },
  },
  plugins: [],
};
export default config;
