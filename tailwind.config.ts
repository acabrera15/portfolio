
const flowbite = require("flowbite-react/tailwind");

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports =
{
  theme: {
    extend: {
      colors: {
        primary: "#1A1325", // Deep Purple
        secondary: "#3E1F47", // Dark Eggplant
        tertiary: "#6B3FA0", // Rich Amethyst
        textPrimary: "#D9BFFF", // Soft Lavender
        textSecondary: "#B094C6", // Muted Lilac
        contrast: "#A020F0", // Vivid Purple
        error: "#E63946", // Dark Red
      },
      fontFamily: {
        mono: ["Fira Code", "JetBrains Mono", "Source Code Pro", "monospace"],
      },
      boxShadow: {
        subtle: "0 4px 10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],

  plugins: [flowbite.plugin(),],
};
