<script>
export default {};
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
      <p class="text-center md:text-left">
        Powered by
        <a
          class="text-link"
          href="https://gridsome.org/"
          target="_blank"
          rel="noreferrer"
        >
          Gridsome
        </a>
        and
        <a
          class="text-link"
          href="https://postcss.org/"
          target="_blank"
          rel="noreferrer"
        >
          PostCSS
        </a>
      </p>
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

@screen md {
  .footer {
    @apply flex-row justify-between px-12;
  }
}

@screen lg {
  .footer {
    @apply px-24;
  }
}
</style>
