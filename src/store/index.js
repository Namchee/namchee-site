// only for site's theme

const systemTheme = () => {
  return process.isClient && window.matchMedia ?
    window.matchMedia('(prefers-color-scheme: dark)').matches :
    true;
};

export default {
  state: {
    darkMode: process.isClient &&
      window.localStorage &&
      localStorage.getItem('theme') !== null ?
      localStorage.getItem('theme') === 'true' :
      systemTheme(),
  },

  getters: {
    theme: state => state.darkMode ? 'dark' : 'light',
  },

  mutations: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      // store theme preference in local storage if it's production build
      if (
        process.isClient &&
        window.localStorage &&
        process.env.NODE_ENV === 'production'
      ) {
        localStorage.setItem('theme', state.darkMode);
      }
    },
  },
};
