/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        textContent: "#a3a3a3",
        textBg: "#101010",
        background: "#101010",
        primaryColor: "#2dd4bf",
        secondaryColor: "#2dd4bfcc",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "#101010",
        bgDark2: "#171717",
        bgDark3: "#252525",
        bgDark3Hover: "rgb(55, 56, 62)",
        bgDarkTransparent: "rgb(31, 32, 35, 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
        bgDarkTransparentLighter: "rgb(48, 49, 54, 0.7)",
        mainBorder: "#262626",
        quoteIconColor: "#d1d1d1",
      },
      fontFamily: {
        "geist-mono": "Geist Mono, monospace",
        "onest-variable": "Onest Variable, sans-serif",
        "inter-variable": "Inter Variable, sans-serif",
      },
    },
  },
  plugins: [],
};
