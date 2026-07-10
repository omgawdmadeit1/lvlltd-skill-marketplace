import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1120",
        card: "#1E293B",
        teal: "#14B8A6",
      },
    },
  },
  plugins: [],
};
export default config;
