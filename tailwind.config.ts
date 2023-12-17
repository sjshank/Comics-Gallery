import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "var(--font-dangrek)"],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
      },
      colors: {
        "marron-txt": "#9A031E",
      },
      width: {
        "30-rem": "30rem",
      },
    },
  },
  plugins: [],
};
export default config;
