<script>
import Twitter from './../../assets/icons/twitter.svg';
import Github from './../../assets/icons/github.svg';

export default {
  components: {
    Twitter,
    Github,
  },
};
</script>

<template>
  <footer class="footer text-sm md:text-base">
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
          rel="noreferrer">
          MIT licensed
        </a>
      </p>
    </div>
    <div class="flex items-center">
      <a
        href="https://twitter.com/lakban_hitam"
        target="_blank"
        class="p-2 mr-4 footer__icons"
        rel="noreferrer"
      >
        <twitter class="w-5 h-5 twitter" />
      </a>

      <a
        href="https://github.com/Namchee"
        target="_blank"
        class="p-2 footer__icons"
        rel="noreferrer"
      >
        <github class="w-5 h-5" />
      </a>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  @apply
    w-full
    flex
    flex-col
    items-center
    py-6
    px-6
    border-t
    border-navigation-border;
}

.footer__icons {
  border-radius: 9999px;
  transition: background-color 250ms ease-out;
  background-color: transparent;

  & svg {
    fill: var(--logo);
    transition: fill 250ms ease-out;
  }

  &:hover, &:focus, &:active {
    & svg {
      fill: var(--text-copy-primary);

      &.twitter {
        fill: #1DA1F2;
      }
    }
  }

  &:hover, &:focus {
    outline: none;
    background-color: var(--icon-bg);
  }

  &:active {
    background-color: var(--icon-bg-click);
  }
}

@screen md {
  .footer {
    @apply flex-row justify-between px-12;
  }
}

@screen lg {
  .footer {
    padding-left: 7.5vw;
    padding-right: 7.5vw;
  }
}
</style>
