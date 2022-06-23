const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may customize your own custom color here
      primary: '#00AB14',
      secondary: '#FB0046',
      darkblue: '#011154',
      gradient: 'linear-gradient(87.84deg, #00AB14 29.38%, #28D92F 108.44%)',
      ...colors
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/images/hero-background.png')",
        'formulir-background': "url('/assets/images/formulir-background.png')"
      }
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
