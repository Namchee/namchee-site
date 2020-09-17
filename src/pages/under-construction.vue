<script>
import { onMounted } from '@vue/composition-api';

export default {
  layout: 'blank',

  head: {
    title: 'Under Construction',
  },

  setup() {
    onMounted(() => {
      require('@lottiefiles/lottie-player');
    });

    const adventure = () => {
      // surprise bruh
      window.open('https://youtu.be/dQw4w9WgXcQ');
    };

    return {
      adventure,
    };
  },
};
</script>

<template>
  <section class="screen
    bg-dark-grey
    flex flex-col items-center justify-center
    font-medium
    text-gray-300
    lg:flex-row">
      <div class="mb-2 md:mb-8 lg:mb-0 lg:mr-16">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_1I5L6G.json"
          autoplay
          loop
          more="normal"
          class="lottie__player"
        />
      </div>

      <article class="disclaimer px-6 py-8 md:p-0">
        <h1 class="font-semibold
          font-heading
          head
          mb-8
          leading-tight
          tracking-normal
          text-center
          text-primary
          lg:text-left
          lg:mb-12">
          Site Under Construction
        </h1>

        <div class="body text-left">
          <p class="mb-8">
            Expecting my portfolio site here? Well guess what Einstein,
            this site is currently under construction!
          </p>

          <p class="mb-8">
            It means that you can't access the site for the time being.
            Please grow some patience on your backyard, it's free.
          </p>

          <a
            class="underline text-base font-normal"
            href="#"
            rel="noreferrer"
            @click="adventure()">
            Feeling adventurous yet?
          </a>
        </div>
      </article>
  </section>
</template>

<style lang="postcss" scoped>
.screen {
  min-width: 100vw;
  min-height: 100vh;
}

.lottie__player {
  width: 320px;
  height: auto;
}

.disclaimer {
  max-width: 36rem;
}

.head {
  font-size: 3rem;
}

.body {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

@screen md {
  .lottie__player {
    width: 480px;
  }
}

@screen lg {
  .lottie__player {
    width: 35vw;
  }

  .disclaimer {
    max-width: clamp(30vw, 36rem, 36rem);
  }

  .head {
    font-size: 3.5vw;
  }

  .body {
    font-size: clamp(1.25vw, 1.25rem, 1.25rem);
    line-height: clamp(2.125vw, 2rem, 2rem);
  }
}
</style>
