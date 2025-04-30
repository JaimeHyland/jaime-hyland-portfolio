/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inconsolata: ["Inconsolata", "Inconsolata"],
        Lato: ["Lato", "Lato"],
      },
    },
  },
  plugins: [],
};
