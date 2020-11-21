/* eslint-disable max-len */
module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        copy: '"Manrope Var", "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        head: '"Space Grotesk Var", "Space Grotesk", Arial, sans-serif',
      },

      spacing: {
        18: '4.5rem',
      },

      colors: {
        primary: {
          400: '#FB9700',
          600: '#D68100',
        },

        secondary: {
          400: '#2079FF',
          600: '#3284FF',
        },

        copy: {
          light: {
            primary: '#121212',
            secondary: '#717171',
          },

          dark: {
            primary: '#E0E0E0',
            secondary: '#919191',
          },
        },

        surface: {
          light: '#F2F2F2',
          dark: '#161616',
        },

        line: {
          light: '#D1D5DB',
          dark: '#313131',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
