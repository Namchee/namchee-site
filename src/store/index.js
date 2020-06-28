// only for site's theme

const systemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default {
  state: {
    darkMode: localStorage.getItem('theme') === null ?
      systemTheme() :
      localStorage.getItem('theme'),
  },

  getters: {
    theme: state => state.darkMode ? 'dark' : 'light',
  },

  mutations: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      // store theme preference in local storage
      if (process.env.NODE_ENV === 'production') {
        localStorage.setItem('theme', state.darkMode);
      }
    },
  },
};
