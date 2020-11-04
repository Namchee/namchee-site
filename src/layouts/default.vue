<script>
import { ref, onMounted, computed, provide } from '@vue/composition-api';
import TheNavbar from '~/components/layouts/the-navbar';
import TheFooter from '~/components/layouts/the-footer';
import AltFooter from '~/components/layouts/the-footer/alt-footer';
import AltNavbar from '~/components/layouts/the-navbar/alt-navbar';

import { THEME, TOGGLE_THEME } from '~/common';

export default {
  components: {
    AltNavbar,
    AltFooter,
    TheNavbar,
    TheFooter,
  },

  setup() {
    const darkMode = ref(true);
    const theme = computed(() => darkMode.value ? 'dark' : 'light');

    const toggleTheme = () => {
      darkMode.value = !darkMode.value;

      if (
        process.client &&
        window.localStorage &&
        process.env.NODE_ENV === 'production'
      ) {
        localStorage.setItem('theme', darkMode.value);
      }
    };

    provide(THEME, theme);
    provide(TOGGLE_THEME, toggleTheme);

    onMounted(() => {
      const systemTheme = window.matchMedia ?
        window.matchMedia('(prefers-color-scheme: dark)').matches :
        true;

      darkMode.value = systemTheme;

      if (window.localStorage && localStorage.getItem('theme') !== null) {
        darkMode.value = localStorage.getItem('theme') === 'true';
      }
    });

    return {
      theme,
    };
  },
};
</script>

<template>
  <div
    class="flex flex-col
    bg-surface
    text-copy-primary
    font-copy
    antialiased
    leading-relaxed
    font-medium
    site"
    :class="`theme-${theme}`"
  >
    <alt-navbar />
    <main
      class="flex flex-col flex-grow
        pt-16
        lg:pt-20 lg:text-lg
        body">
      <nuxt />
    </main>
    <alt-footer />
  </div>
</template>

<style lang="postcss" scoped>
.site {
  min-height: 100vh;
  transition: color 200ms ease-out,
    background-color 200ms ease-out,
    fill 200ms ease-out,
    stroke 200ms ease-out,
    border-color 200ms ease-out;
}
</style>
