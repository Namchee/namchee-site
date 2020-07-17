// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import CompositionAPI from '@vue/composition-api';
import { intersect } from './utils/directives';
import '~/assets/styles/base.css';

export default function(Vue, { head }) {
  Vue.use(CompositionAPI);

  Vue.directive('intersect', intersect);

  // common open graph information
  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: 'https://namchee.netlify.app/og-banner.png',
  });

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: 'Namchee',
  });

  // twitter card
  head.meta.push({
    key: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image',
  });

  head.meta.push({
    key: 'twitter:site',
    name: 'twitter:site',
    content: '@lakban_hitam',
  });

  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: 'Namchee',
  });

  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: 'https://namchee.netlify.app/og-banner.png',
  });
}
