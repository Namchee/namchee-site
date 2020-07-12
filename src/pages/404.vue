<script>
import NotFound from './../assets/images/404.svg';

export default {
  metaInfo: {
    title: 'Not Found 😕',
  },

  components: {
    NotFound,
  },
};
</script>

<template>
  <layout>
    <div class="not__found">
      <not-found class="not__found__illustration" />

      <div class="text-center leading-relaxed">
        <h1 class="text-4xl md:text-5xl tracking-wide font-semibold mb-2">
          That's... 404
        </h1>

        <p>
          Whoa! It's seems that the page you requested doesn't exist!
        </p>

        <p class="mt-8">
          <g-link
            class="tracking-wide font-semibold text-2xl underline"
            to="/">
            Take Me Home
          </g-link>
        </p>
      </div>
    </div>
  </layout>
</template>

<style lang="postcss" scoped>
.not__found {
  @apply max-w-xl flex-grow flex flex-col justify-center mx-auto py-8;
}

.not__found__illustration {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

@screen lg {
  .not__found__illustration {
    width: 80%;
  }
}
</style>
