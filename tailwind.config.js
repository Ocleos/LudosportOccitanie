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
        primary: {
          light: '#ff940d',
          DEFAULT: '#ee7503',
          dark: '#c95a05',
        },
      },
      fontFamily: {
        'neo-bold': ['NeoSansProBold', ...defaultTheme.fontFamily.sans],
        neo: ['NeoSansProRegular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
