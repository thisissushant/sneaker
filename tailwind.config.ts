import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  themes: [
    {
      lightTheme: {
        primary: "#4d00ff",

        secondary: "#00a000",

        accent: "#00ff00",

        neutral: "#15060a",

        "base-100": "#defff3",

        info: "#00d2f0",

        success: "#70d438",

        warning: "#ff8928",

        error: "#ff94a1",
        body: {
          "background-color": "#e3e6e6",
        },
      },
    },
  ],
  plugins: [require("daisyui")],
};
export default config;
