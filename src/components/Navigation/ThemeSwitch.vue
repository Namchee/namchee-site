<script>
import Dark from './../../assets/icons/dark.svg';
import Light from './../../assets/icons/light.svg';

import { inject, onMounted } from '@vue/composition-api';
import { THEME, TOGGLE_THEME } from '~/utils/symbols.js';

export default {
  components: {
    Dark,
    Light,
  },

  setup() {
    const theme = inject(THEME);
    const toggleTheme = inject(TOGGLE_THEME);

    onMounted(() => {
      // hide theme switch button if css variables are not supported
      // yes, curse you IE!
      const themeSwitcher = document.querySelector('.theme-switcher');

      if (!window.CSS || !CSS.supports('color', 'var(--fake-var)')) {
        themeSwitcher.classList.add('hidden');
      }
    });

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<template>
  <button
    title="Switch site theme"
    aria-label="Switch site theme"
    role="button"
    class="theme-switcher"
    @click="toggleTheme()"
  >
    <component :is="theme" class="w-8 h-8 lg:w-6 lg:h-6" />
  </button>
</template>

<style lang="postcss" scoped>
.theme-switcher {
  @apply p-2;

  border-radius: 9999px;
  transition: background-color 250ms ease-out;
  background-color: transparent;

  &:hover, &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, .1); /* IE 11 Fallback */
    background-color: var(--icon-bg);
  }

  &:active {
    background-color: rgba(255, 255, 255, .15); /* IE 11 Fallback */
    background-color: var(--icon-bg-click);
  }
}
</style>
