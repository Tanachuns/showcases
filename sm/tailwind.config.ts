import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fff",

          secondary: "#A6CE39",

          accent: "#FF9100",

          neutral: "#009444",

          "base-100": "#fcfcfc",

          info: "#008bd3",

          success: "#fff",

          warning: "#fde047",

          error: "#c65100",
        },
      },
    ],
  },
};
export default config;
