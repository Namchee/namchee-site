// only for site's theme

const systemTheme = () => {
  return window.matchMedia ?
    window.matchMedia('(prefers-color-scheme: dark)').matches :
    true;
};

export default {
  state: {
    darkMode: window.localStorage ?
      localStorage.getItem('theme') || systemTheme() :
      systemTheme(),
  },

  getters: {
    theme: state => state.darkMode ? 'dark' : 'light',
  },

  mutations: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      // store theme preference in local storage
      if (process.env.NODE_ENV === 'production' && window.localStorage) {
        localStorage.setItem('theme', state.darkMode);
      }
    },
  },
};
