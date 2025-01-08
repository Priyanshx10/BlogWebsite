import type { Config } from "tailwindcss";

const config: Config = {
  // Define the paths to all files using Tailwind CSS
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components folder
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App directory (Next.js 13+)
  ],

  theme: {
    extend: {
      // Extend the default font families
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Fallback to sans-serif
      },
    },
  },

  // Include Tailwind CSS plugins
  plugins: [
    require("@tailwindcss/typography"), // Typography plugin for rich text styling
    require("daisyui"), // DaisyUI component library
  ],

  // DaisyUI Configuration
  daisyui: {
    themes: [
      "light", // Default light theme
      "dark", // Default dark theme
      // Add custom themes here if needed
      // Example:
      // {
      //   myTheme: {
      //     primary: "#1E3A8A",
      //     secondary: "#F9A8D4",
      //     accent: "#6EE7B7",
      //     neutral: "#1F2937",
      //     "base-100": "#FFFFFF",
      //     info: "#3B82F6",
      //     success: "#10B981",
      //     warning: "#F59E0B",
      //     error: "#EF4444",
      //   },
      // },
    ],
  },
};

export default config;
