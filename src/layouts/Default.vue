<script>
import { useGetters } from 'vuex-composition-helpers';
import { computed } from '@vue/composition-api';
import Navigation from '~/components/Navigation';

export default {
  components: {
    Navigation,
  },

  setup() {
    const { theme } = useGetters(['theme']);

    const systemTheme = computed(() => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark' :
        'light';
    });

    return {
      theme,
      systemTheme,
    };
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <div
    class="app bg-background-primary text-copy-primary text-justify antialiased"
    :class="`theme-${theme === 'system' ? systemTheme : theme}`"
  >
    <navigation />
    <section class="px-8 md:px-16 lg:px-20 lg:text-lg font-medium">
      <slot />
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.app {
  transition: color 300ms ease,
    background-color 300ms ease,
    fill 300ms ease,
    stroke 300ms ease,
    border-color 300ms ease;
}
</style>
