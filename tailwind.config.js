/* eslint-disable max-len */

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': 'Manrope Var, Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',

        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
        },

        navigation: {
          bg: 'var(--navigation-bg)',
          border: 'var(--navigation-border)',
        },

        copy: {
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-secondary)',
        },
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
