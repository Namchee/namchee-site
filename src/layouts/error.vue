<script>
import NotFound from '~/assets/images/404.svg?inline';

export default {
  head: {
    title: 'Not Found 😕',
  },

  components: {
    NotFound,
  },
};
</script>

<template>
  <div class="max-w-xl flex-grow flex flex-col justify-center mx-auto py-8">
    <not-found class="w-fill h-auto my-0 mx-auto lg:w-4/5" />

    <div class="text-center leading-relaxed">
      <h1 class="text-4xl md:text-5xl tracking-wide font-semibold mb-2">
        That's... 404
      </h1>

      <p>Whoa! It's seems that the page you requested doesn't exist!</p>

      <p class="mt-8">
        <nuxt-link
          class="tracking-wide font-semibold text-2xl underline"
          to="/">
          Take Me Home
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>
