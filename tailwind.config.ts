import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "hsl(var(--primary))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        oleo: ["var(--font-oleo)"],
        workSans: ["var(--font-work_sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
