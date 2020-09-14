/* eslint-disable max-len, quote-props */

module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      'sans': 'Manrope Var, Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    extend: {
      letterSpacing: {
        manrope: 'calc(-.02333em + .36667px)',
      },

      colors: {
        accent: 'var(--accent)',
        'accent-trans': 'var(--accent-trans)',
        'dark': '#151516',

        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
        },

        navigation: {
          bg: 'var(--navigation-bg)',
          border: 'var(--navigation-border)',
        },

        copy: 'var(--text-copy)',
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
