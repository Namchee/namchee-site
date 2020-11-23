<script>
import { ref, onMounted, watchEffect, provide } from '@vue/composition-api';
import TheNavbar from '~/components/layouts/the-navbar';
import TheFooter from '~/components/layouts/the-footer';
import { THEME } from '~/common';

export default {
  components: {
    TheNavbar,
    TheFooter,
  },

  setup() {
    const darkMode = ref(true);

    provide(THEME, darkMode);

    watchEffect(() => {
      if (process.client) {
        if (darkMode.value) {
          document.querySelector('html').classList.add('dark');
        } else {
          document.querySelector('html').classList.remove('dark');
        }

        if (window.localStorage && process.env.NODE_ENV === 'production') {
          localStorage.setItem(THEME.description, darkMode.value);
        }
      }
    });

    onMounted(() => {
      const systemTheme = window.matchMedia ?
        window.matchMedia('(prefers-color-scheme: dark)').matches :
        true;

      darkMode.value = systemTheme;

      if (window.localStorage && localStorage.getItem('theme') !== null) {
        darkMode.value = localStorage.getItem(THEME.description) === 'true';
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
      class="flex flex-col flex-1
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
