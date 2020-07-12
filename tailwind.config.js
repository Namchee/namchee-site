/* eslint-disable max-len, quote-props */

module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  theme: {
    fontFamily: {
      'sans': 'Manrope Var, Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-trans': 'var(--accent-trans)',

        background: {
          primary: 'var(--bg-background-primary)',
        },

        navigation: {
          bg: 'var(--navigation-bg)',
          border: 'var(--navigation-border)',
        },

        copy: {
          primary: 'var(--text-copy-primary)',
        },

        link: 'var(--link)',
      },

      spacing: {
        18: '4.5rem',
        28: '7rem',
      },
    },
  },
  variants: {},
  plugins: [
    '@tailwindcss/ui',
  ],
};
