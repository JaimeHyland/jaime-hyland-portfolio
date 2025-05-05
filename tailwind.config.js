/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // optional, if you have components here
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",      // optional, if you use /pages
    "./src/**/*.{js,ts,jsx,tsx,mdx}",            // broad fallback
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
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
