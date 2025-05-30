/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inriaSerif: ["var(--font-inria)"],
      },

      backgroundImage: {
        beams: "url('/images/beams-home@95.jpg')",
        formHero: "url('/images/form-banner.jpg')",
        footer: "url('/images/Hero-Section-Background-05.jpg')",
        heroBanner: "url('/images/hero-banner.jpg')",
        homeBanner: "url('/images/sym-hero-bg-trademark.png')",
        serviceTMBanner: "url('/services-tm.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
