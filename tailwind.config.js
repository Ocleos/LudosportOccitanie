const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { max: '376px' },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#ee7503',
      },
      fontFamily: {
        'neo-bold': ['NeoSansProBold', ...defaultTheme.fontFamily.sans],
        neo: ['NeoSansProRegular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
