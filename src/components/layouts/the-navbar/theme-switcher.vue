<script>
// This component is a modified version of CodyHouse's Radio Switch
// Kudos to them: https://codyhouse.co/ds/components/app/radio-switch--icon

import { ref, inject } from '@vue/composition-api';
import { THEME } from '~/common';
import Dark from '~/assets/icons/dark.svg?inline';
import Light from '~/assets/icons/light.svg?inline';

export default {
  components: {
    Dark,
    Light,
  },

  setup() {
    const theme = inject(THEME, ref(true));

    return {
      theme,
    };
  },
};
</script>

<template>
  <!-- start: theme switcher -->
  <ul class="theme-switcher" @keyup.enter="theme = !theme">
    <!-- start: light mode switch -->
    <li class="theme-switcher__item">
      <input
        class="theme-switcher__input sr-only"
        type="radio"
        name="theme"
        id="light-mode"
        :value="false"
        v-model="theme" />
      <label class="theme-switcher__label" for="light-mode">
        <light class="stroke-current" />
      </label>
    </li>
    <!-- end: light mode switch -->

    <!-- start: dark mode switch -->
    <li class="theme-switcher__item">
      <input
        class="theme-switcher__input sr-only"
        type="radio"
        name="theme"
        id="dark-mode"
        :value="true"
        v-model="theme" />
      <label class="theme-switcher__label" for="dark-mode">
        <dark class="stroke-current" />
      </label>
      <div aria-hidden="true" class="theme-switcher__marker">
      </div>
    </li>
    <!-- end: dark mode switch -->
  </ul>
  <!-- end: theme switcher -->
</template>

<style lang="postcss" scoped>
svg {
  width: 1.25rem;
  height: auto;
}

.theme-switcher {
  @apply bg-material-light dark:bg-material-dark;

  position: relative;
  display: inline-flex;
  padding: 3px 4px;
  border-radius: 25em;
  transition: background 250ms ease-out;

  &:focus-within, &:active {
    @apply ring-2
      ring-gray-500 dark:ring-gray-200
      ring-opacity-25 dark:ring-opacity-25;
  }

  & .theme-switcher__item {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 30px;
  }

  & .theme-switcher__label {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25em;
    cursor: pointer;
    font-size: 1rem;
    user-select: none;
    transition: all 200ms;

    & .theme-switcher__input:checked ~ svg {
      @apply text-copy-light-primary dark:text-copy-dark-primary;
    }

    & .theme-switcher__input:focus ~ svg {
      @apply bg-surface-light dark:bg-surface-dark;
    }

    &:not(*):focus-within, .theme-switcher__input:focus ~ svg {
      @apply bg-transparent;
    }
  }

  & .theme-switcher__marker {
    @apply bg-surface-light dark:bg-surface-dark shadow-sm;

    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    border-radius: 25em;
    height: 30px;
    width: 45px;
    transition: transform 250ms cubic-bezier(0.76, 0, 0.24, 1),
      background 200ms ease-out;
  }

  & .theme-switcher__input:checked ~ .theme-switcher__marker {
    transform: translateX(100%);
  }
}

@screen md {
  svg {
    width: 1.125rem;
  }

  .theme-switcher {
    & .theme-switcher__item {
      width: 40px;
      height: 25px;
    }

    & .theme-switcher__marker {
      width: 40px;
      height: 25px;
    }
  }
}
</style>
