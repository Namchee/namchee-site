<script>
import { useGetters } from 'vuex-composition-helpers';
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <div
    class="app"
    :class="`theme-${theme}`"
  >
    <navigation />
    <section
      class="body"
    >
      <slot />
    </section>
    <Footer />
  </div>
</template>

<style lang="postcss" scoped>
.app {
  @apply bg-background-primary text-copy-primary antialiased flex flex-col;

  transition: color 300ms ease,
    background-color 300ms ease,
    fill 300ms ease,
    stroke 300ms ease,
    border-color 300ms ease;

  min-height: 100vh;
}

.body {
  @apply flex flex-col pt-18 font-medium flex-grow px-6;
}

@screen md {
  .body {
    @apply px-12;
  }
}

@screen lg {
  .body {
    @apply pt-20 px-20 text-lg;
  }
}
</style>
