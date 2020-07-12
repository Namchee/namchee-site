<script>
import { useGetters } from 'vuex-composition-helpers/dist';
import { Navigation } from '~/components/Navigation';
import { Footer } from '~/components/Footer';

export default {
  components: {
    Navigation,
    Footer,
  },

  setup() {
    const { theme } = useGetters(['theme']);

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
      <router-view />
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
</style>
