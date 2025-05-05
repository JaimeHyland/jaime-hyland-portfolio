/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  safelist: [
    'text-2xl',
    'lg:text-4xl',
    'font-bold',
    'text-[#F0E3CA]',
    'text-[#FF8303]',
    'bg-[#1F1E1B]',
    'text-gray-600',
    'text-gray-700',
    'border',
    'rounded',
    'shadow',
    'hover:text-[#FF8303]',
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
