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
        deepBurgundy: "#872D37",
        lightBurgundy: "#F1B0AA",
        cream: "#EDDFD6",
        burntOrange: "#D08B61",
        brown: "#906D4D",
        beige: "#BB9483",
        olive: "#84896b",
        mossGreen: "#697756",
        lavender: "#8691A5",
      },
    },
  },
  plugins: [],
};

export default config;
