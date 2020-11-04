/* eslint-disable max-len */

module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.html',
      './src/**/*.jsx',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        copy: '"Manrope Var", "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        head: '"Space Grotesk Var", "Space Grotesk", Arial, sans-serif',
      },

      maxWidth: {
        '2xs': '16rem',
      },

      spacing: {
        18: '4.5rem',
        container: '1280px',
      },

      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',

        copy: {
          primary: 'var(--copy-primary)',
          secondary: 'var(--copy-secondary)',
        },

        link: 'var(--link)',

        surface: 'var(--surface)',
        ground: 'var(--ground)',

        line: 'var(--line)',
      },

      opacity: {
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
