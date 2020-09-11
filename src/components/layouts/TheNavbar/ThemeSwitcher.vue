<script>
import Dark from '~/assets/icons/dark.svg?inline';
import Light from '~/assets/icons/light.svg?inline';

import { inject, onMounted } from '@vue/composition-api';
import { THEME, TOGGLE_THEME } from '~/common/symbols';

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
    class="h-full w-16
      flex justify-center items-center
      lg:p-3
      lg:h-auto lg:w-auto
      lg:rounded-full lg:bg-transparent
      theme__switcher"
    @click="toggleTheme()"
  >
    <component :is="theme" class="theme__switcher__icon" />
  </button>
</template>

<style lang="postcss" scoped>
.theme__switcher__icon {
  width: 1.65rem;
  height: 1.65rem;
}

@screen lg {
  .theme__switcher {
    transition: background-color 250ms ease-out;

    &:hover, &:focus {
      background-color: rgba(255, 255, 255, .1); /* IE 11 Fallback */
      background-color: var(--icon-bg);
    }

    &:active {
      background-color: rgba(255, 255, 255, .15); /* IE 11 Fallback */
      background-color: var(--icon-bg-click);
    }
  }

  .theme__switcher__icon {
    @apply w-6 h-6;
  }

  @variants hover, focus {
    .theme__switcher {
      @apply outline-none;
    }
  }
}
</style>
