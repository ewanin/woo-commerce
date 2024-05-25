/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        nunito_sans: ['var(--font-nunito_sans)'],
      },
      backgroundImage: {
        'hero-about': "url('/images/HeroAbout.svg')",
        'hero-testimonial': "url('/images/HeroTestimonials.svg')",
        'hero-people': "url('/images/HeroPeople.svg')",
      },
      colors: {
        primary: '#272D4E',
        'purple': '#7854F7',
      },
    },
  },
  plugins: [],
};
