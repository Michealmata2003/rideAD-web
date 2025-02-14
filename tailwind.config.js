/** @type {import('tailwindcss').Config} */
export default {
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
        DeepOrange:'#FF8031',
        DeepBlue:'#0587D0',
        LightOrange:'#FF803166',
        LightBlue:'#D0E0FF',
        Fade:' #FAFAFA',
        sideBar:'#A64102',
        black:'#000000',
        white:'#ffffff',

      },
     
    },
  },
  plugins: [],
};
