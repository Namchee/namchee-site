<script>
// This component is a modified version of CodyHouse's Radio Switch
// Kudos to them: https://codyhouse.co/ds/components/app/radio-switch--icon

import { inject } from '@vue/composition-api';
import { THEME, TOGGLE_THEME } from '~/common';

export default {
  setup() {
    const theme = inject(THEME);
    const toggleTheme = inject(TOGGLE_THEME);

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<template>
  <!-- start: theme switcher -->
  <ul class="theme-switcher">
    <!-- start: light mode switch -->
    <li class="theme-switcher__item item__light">
      <input
        class="theme-switcher__input sr-only"
        type="radio"
        name="theme"
        id="light-mode"
        value="false"
        v-model="theme" />
    </li>
    <!-- end: light mode switch -->

    <!-- start: dark mode switch -->
    <li class="theme-switcher__item item__dark">
      <input
        class="theme-switcher__input sr-only"
        type="radio"
        name="theme"
        id="dark-mode"
        value="true"
        v-model="theme" />
    </li>
    <!-- end: dark mode switch -->
  </ul>
  <!-- end: theme switcher -->
</template>

<style lang="postcss" scoped>

</style>
