/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0E68E7",
        secondary: "#475467",
        boldSecoundary: "#000000"
        
      },
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
        Inter: ["Inter", "ans-serif"],
      },
      screens: {
        'l-mobile': '425px',
        'm-mobile': '375px',
        's-mobile': '320px',
      },
      // backgroundImage: {
      //   'herobgimg': "url('')",
      // }
      
    },
  },
  plugins: [],
};
