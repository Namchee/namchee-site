<script>
import { ZIllustration, ZRect } from 'vue-zdog';
import Blob from './../assets/images/blob.svg';

export default {
  components: {
    Blob,
    ZIllustration,
    ZRect,
  },
};
</script>


<template>
  <layout>
    <div class="landing flex justify-between items-center py-8">
      <div class="font-normal tracking-wide">
        <h1 class="text-5xl font-light my-8">
          Hello, my name is Namchee.
        </h1>
        <p>
          I do full stack development with NodeJS and VueJS
        </p>
        <p>

        </p>
      </div>
      <div class="relative">
        <ZIllustration>
          <ZRect :width="100" :height="100" color="red" />
        </ZIllustration>
        <blob class="blob absolute top-0" />
      </div>
    </div>
  </layout>
</template>

<style lang="postcss" scoped>
.blob {
  width: 100%;
  height: 100%;
  fill: var(--primary);
  fill-opacity: .75;
}

@screen lg {
  .landing {
    height: calc(100vh - 5rem);
  }
}
</style>
