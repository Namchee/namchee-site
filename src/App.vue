<script>
import { ref, onMounted, computed, provide } from '@vue/composition-api';
import { Navigation } from '~/components/Navigation';
import { Footer } from '~/components/Footer';

import { THEME, TOGGLE_THEME } from '~/utils/symbols.js';

export default {
  components: {
    Navigation,
    Footer,
  },

  setup() {
    const darkMode = ref(true);
    const theme = computed(() => darkMode.value ? 'dark' : 'light');

    const toggleTheme = () => {
      darkMode.value = !darkMode.value;

      if (
        process.isClient &&
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
    class="app"
    :class="`theme-${theme}`"
  >
    <navigation />
    <main class="body">
      <transition name="fade-page" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<style lang="postcss" scoped>
.app {
  @apply flex flex-col bg-background-primary text-copy-primary antialiased;

  transition: color 300ms ease,
    background-color 300ms ease,
    fill 300ms ease,
    stroke 300ms ease,
    border-color 300ms ease;

  min-height: 100vh;
}

.body {
  @apply flex flex-col flex-grow font-medium pt-18 px-6;
}

@screen md {
  .body {
    @apply px-12;
  }
}

@screen lg {
  .body {
    @apply pt-20 text-lg;

    padding-left: 7.5vw;
    padding-right: 7.5vw;
  }
}

.fade-page-enter-active, .fade-page-leave-active {
  transition: opacity 350ms cubic-bezier(0.5, 1, 0.89, 1);
}

.fade-page-enter, .fade-page-leave-to {
  opacity: 0;
}
</style>
