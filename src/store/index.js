// only for site's theme

const themeList = ['dark', 'system', 'light'];

export default {
  state: {
    themeIdx: localStorage.getItem('theme') === null ?
      1 :
      Number(localStorage.getItem('theme')),
  },

  getters: {
    theme: state => themeList[state.themeIdx],
  },

  mutations: {
    toggleTheme: (state) => {
      state.themeIdx = (state.themeIdx + 1) % themeList.length;

      if (process.env.NODE_ENV === 'production') {
        localStorage.setItem('theme', state.themeIdx);
      }
    },
  },
};
