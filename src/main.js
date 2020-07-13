// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import CompositionAPI from '@vue/composition-api';
import Vuex from 'vuex';
import store from '~/store';
import { intersect } from './utils/directives';
import '~/assets/styles/base.css';

export default function(Vue, { head, appOptions }) {
  Vue.use(Vuex);
  Vue.use(CompositionAPI);

  Vue.directive('intersect', intersect);

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: 'https://namchee.netlify.app/assets/images/og-banner.png',
  });

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: 'Namchee',
  });

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: 'Hey! This is Namchee\'s personal site!',
  });

  appOptions.store = new Vuex.Store(store);
}
