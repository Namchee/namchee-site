<script>
import Twitter from '~/assets/icons/twitter.svg?inline';
import Github from '~/assets/icons/github.svg?inline';

export default {
  components: {
    Twitter,
    Github,
  },
};
</script>

<template>
  <footer class="w-full
    flex flex-col items-center
    py-6 px-6
    border-t border-navigation-border
    text-sm
    md:text-base md:flex-row md:justify-between md:px-12
    footer">

    <!-- start: disclaimer banner -->
    <div class="font-medium mb-4 md:mb-0">
      <p class="text-center md:text-left">
        Made in 2020 with ❤️ by Namchee
      </p>
      <p class="text-center md:text-left">
        Source codes are
        <a
          class="text-link"
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noreferrer"
        >
          MIT licensed
        </a>
      </p>
    </div>
    <!-- end: disclaimer banner -->

    <!-- start: quick contact links -->
    <div class="flex items-center">
      <a
        href="https://twitter.com/lakban_hitam"
        target="_blank"
        class="footer__icons mr-4"
        aria-label="Twitter"
        rel="noreferrer"
      >
        <twitter class="w-5 h-5 twitter" />
      </a>

      <a
        href="https://github.com/Namchee"
        target="_blank"
        class="footer__icons"
        aria-label="GitHub"
        rel="noreferrer"
      >
        <github class="w-5 h-5" />
      </a>
    </div>
    <!-- end: quick contact links -->

  </footer>
</template>

<style lang="postcss" scoped>
.footer__icons {
  @apply p-2 rounded-full bg-transparent;

  transition: background-color 250ms ease-out;

  & svg {
    fill: rgba(255, 255, 255, .4); /* IE 11 Fallback */
    fill: var(--logo);
    transition: fill 250ms ease-out;
  }

  &:hover, &:focus, &:active {
    & svg {
      fill: #E0E0E0; /* IE 11 Fallback */
      fill: var(--text-copy);

      &.twitter {
        fill: #1DA1F2;
      }
    }
  }

  &:hover, &:focus {
    background-color: rgba(255, 255, 255, .1); /* IE 11 Fallback */
    background-color: var(--icon-bg);
  }

  &:active {
    background-color: rgba(255, 255, 255, .15); /* IE 11 Fallback */
    background-color: var(--icon-bg-click);
  }
}

@variants focus, hover {
  .footer__icons {
    @apply outline-none;
  }
}

@screen lg {
  .footer {
    padding-left: 7.5vw;
    padding-right: 7.5vw;
  }
}
</style>
