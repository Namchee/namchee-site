// only for site's theme

const systemTheme = () => {
  return process.isClient &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default {
  state: {
    darkMode: (process.isClient && localStorage.getItem('theme')) ||
      systemTheme(),
  },

  getters: {
    theme: state => state.darkMode ? 'dark' : 'light',
  },

  mutations: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      // store theme preference in local storage
      if (process.isClient && process.env.NODE_ENV === 'production') {
        localStorage.setItem('theme', state.darkMode);
      }
    },
  },
};
