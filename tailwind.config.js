/* eslint-disable max-len, quote-props */

module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: '"HK Grotesk", "Helvetica Neue", Roboto, Arial, sans-serif',
        body: '"Manrope Var", Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },

      letterSpacing: {
        manrope: 'calc(-.02333em + .36667px)',
      },

      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',

        'dark-grey': '#151516',
        'light-grey': '#ededf0',
        grey: '#b1b1b3',

        surface: 'var(--surface)',
        raised: 'var(--raised)',
        copy: 'var(--copy)',
        link: 'var(--link)',

        nav: 'var(--nav)',
        thinline: 'var(--border)',
      },

      spacing: {
        18: '4.5rem',
        28: '7rem',
      },

      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
    },
  },
  variants: {},
  plugins: [
    '@tailwindcss/ui',
  ],
};
