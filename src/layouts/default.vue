<script>
import { ref, onMounted, computed, provide } from '@vue/composition-api';
import TheNavbar from '~/components/layouts/TheNavbar';
import TheFooter from '~/components/layouts/TheFooter';

import { THEME, TOGGLE_THEME } from '~/common/symbols';

export default {
  components: {
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
    bg-background-primary
    text-copy antialiased
    app"
    :class="`theme-${theme}`"
  >
    <the-navbar />
    <main class="flex flex-col flex-grow
      font-medium
      pt-18 px-6
      md:px-12
      lg:pt-20 lg:text-lg
      body">
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<style lang="postcss" scoped>
.app {
  transition: color 200ms ease-out,
    background-color 200ms ease-out,
    fill 200ms ease-out,
    stroke 200ms ease-out,
    border-color 200ms ease-out;
}

@screen lg {
  .body {
    padding-left: 7.5vw;
    padding-right: 7.5vw;
  }
}
</style>
