<script>
import Github from './../../assets/icons/github.svg';
import Twitter from './../../assets/icons/twitter.svg';

export default {
  components: {
    Github,
    Twitter,
  },
};
</script>

<template>
  <footer class="footer text-sm md:text-base">
    <div class="font-medium mb-4 md:mb-0">
      <p class="text-center md:text-left">Made with ❤️ by Namchee</p>
      <p class="text-center md:text-left">
        Powered by
        <a class="text-link" href="https://gridsome.org/" rel="noreferrer">
          Gridsome
        </a>
        and
        <a class="text-link" href="https://postcss.org/" rel="noreferrer">
          PostCSS
        </a>
      </p>
    </div>
    <div class="flex items-center">
      <a
        href="https://twitter.com/lakban_hitam"
        rel="noreferrer"
        class="brand-logo p-2 ml-0 md:mx-3"
      >
        <twitter class="w-5 h-5 twitter" />
      </a>
      <a
        href="https://github.com/Namchee"
        rel=”noreferrer”
        class="brand-logo p-2 ml-3"
      >
        <github class="w-5 h-5 github" />
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

.brand-logo {
  border-radius: 9999px;
  transition: background-color 250ms ease-out;
  background-color: transparent;

  & svg {
    fill: var(--logo);
    transition: fill 250ms ease-out;
  }

  &:hover, &:focus {
    outline: none;
    background-color: var(--icon-bg);

    & svg.twitter {
      fill: #1DA1F2;
    }

    & svg.github {
      fill: var(--text-copy-primary);
    }
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
    @apply px-20;
  }
}
</style>
