module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        softblue: '#2672B2',
      },
      backgroundImage: {
        einstein: "url('/bgEinstein.png')",
      },
    },
  },
  plugins: [],
};
