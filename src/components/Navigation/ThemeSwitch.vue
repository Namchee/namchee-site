<script>
import Dark from './../../assets/icons/dark.svg';
import Light from './../../assets/icons/light.svg';

import { useGetters, useMutations } from 'vuex-composition-helpers';

export default {
  components: {
    Dark,
    Light,
  },

  setup() {
    const { theme } = useGetters(['theme']);
    const { toggleTheme } = useMutations(['toggleTheme']);

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
    class="theme-switcher p-2"
    @click="toggleTheme()"
  >
    <component :is="theme" class="w-8 h-8 lg:w-6 lg:h-6" />
  </button>
</template>

<style lang="postcss" scoped>
.theme-switcher {
  border-radius: 9999px;
  transition: background-color 250ms ease-out;
  background-color: transparent;

  &:hover, &:focus {
    outline: none;
    background-color: var(--icon-bg);
  }

  &:active {
    background-color: var(--icon-bg-click);
  }
}
</style>
