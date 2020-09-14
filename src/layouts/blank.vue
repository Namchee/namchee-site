<script>
import { ref, computed, onMounted, provide } from '@vue/composition-api';
import { THEME } from '~/common/symbols';

export default {
  setup() {
    const darkMode = ref(true);
    const theme = computed(() => darkMode.value ? 'dark' : 'light');

    provide(THEME, theme);

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
  <nuxt />
</template>

<style scoped></style>
