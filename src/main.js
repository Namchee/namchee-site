// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import CompositionAPI from '@vue/composition-api';
import DefaultLayout from '~/layouts/Default.vue';
import Vuex from 'vuex';
import store from '~/store';
import '~/assets/styles/base.css';

export default function(Vue, { head, appOptions }) {
  Vue.use(Vuex);
  Vue.use(CompositionAPI);

  appOptions.store = new Vuex.Store(store);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
