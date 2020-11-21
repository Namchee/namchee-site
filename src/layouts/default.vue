<script>
import { ref, onMounted, watchEffect, provide } from '@vue/composition-api';
import TheNavbar from '~/components/layouts/the-navbar';
import TheFooter from '~/components/layouts/the-footer';
import { THEME, TOGGLE_THEME } from '~/common';

export default {
  components: {
    TheNavbar,
    TheFooter,
  },

  setup() {
    const darkMode = ref(true);

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

    provide(THEME, darkMode);
    provide(TOGGLE_THEME, toggleTheme);

    watchEffect(() => {
      if (process.client) {
        if (darkMode.value) {
          document.querySelector('html').classList.add('dark');
        } else {
          document.querySelector('html').classList.remove('dark');
        }
      }
    });

    onMounted(() => {
      const systemTheme = window.matchMedia ?
        window.matchMedia('(prefers-color-scheme: dark)').matches :
        true;

      console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

      darkMode.value = systemTheme;

      if (window.localStorage && localStorage.getItem('theme') !== null) {
        darkMode.value = localStorage.getItem('theme') === 'true';
      }
    });
  },
};
</script>

<template>
  <div
    class="flex flex-col
    bg-surface-light dark:bg-surface-dark
    text-copy-light-primary dark:text-copy-dark-primary
    font-copy
    antialiased
    leading-relaxed
    font-medium
    site"
  >
    <the-navbar />
    <main
      class="flex flex-col flex-grow
        pt-16
        lg:pt-20 lg:text-lg
        body">
      <nuxt />
    </main>
    <the-footer />
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
