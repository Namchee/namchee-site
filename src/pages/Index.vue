<script>
import { ref, onMounted } from '@vue/composition-api';
import { ProjectCard } from '~/components/ProjectCard';

export default {
  components: {
    ProjectCard,
  },

  setup() {
    const text = [
      'play good old games',
      'explore web technologies',
      'laugh at good meme',
      'browse for funky new tech',
      'read various manga',
      'try out new programming tricks',
    ];

    const idx = ref(0);

    onMounted(() => {
      function scrollText() {
        idx.value = (idx.value + 1) % text.length;
      }

      if (window.innerWidth > 767) {
        setInterval(scrollText, 5000);
      }
    });

    return {
      text,
      idx,
    };
  },
};
</script>

<template>
  <layout>
    <!-- start: landing page -->
    <section class="landing">

      <!-- start: landing hero -->
      <section class="text-xl py-16">
        <h1 class="landing__title">
          <div>
            <span>Hello there.</span>
          </div>
          <br />
          <div>
            <span>I'm Namchee.</span>
          </div>
        </h1>

        <p class="mt-8 landing__subtitle tracking-wide slide-up">
          I do full-stack development with JavaScript based technologies
        </p>
        <p class="mt-4 md:mt-0 landing__subtitle tracking-wide slide-up">
          Currently, I'm simping for Vue and NodeJS
        </p>
        <p
          class="landing__scroller slide-up">
          Other than code, Namchee likes to
          <transition name="scroll">
            <template v-for="(item, i) in text">
              <span
                class="ml-1 absolute inline-block" :key="i" v-if="idx === i"
              >
                {{ item }}
              </span>
            </template>
          </transition>
        </p>
      </section>
      <!-- end: landing hero -->

      <!-- start: featured projects -->
      <section class="landing__projects py-12">
        <h2
          v-intersect.once
          class="text-3xl md:text-5xl tracking-wide title-accent mb-8"
        >
          Featured Projects
        </h2>

        <section class="landing__project__list">
          <article class="landing__project__item">
            COVID-19 LINE BOT
          </article>
          <article class="landing__project__item">
            Wombatik
          </article>
          <article class="landing__project__item">
            Absentor
          </article>
        </section>
      </section>
      <!-- end: featured projects -->

    </section>
    <!-- end: landing page -->

  </layout>
</template>

<style lang="postcss" scoped>
.landing__title {
  line-height: 1.1em;
  font-size: 13.5vw;

  & > div {
    position: relative;
    overflow: hidden;
    display: inline-block;

    & > span {
      opacity: 0;
      animation: fade 50ms 500ms forwards;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-101%);
      background-color: var(--text-copy-primary);
      animation: slideLeft 1200ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
    }

    &:last-child {
      & > span {
        animation-delay: 900ms;
      }

      &::after {
        animation: slideRight 1200ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        animation-delay: 300ms;
      }
    }
  }
}

.landing__subtitle {
  font-size: 5vw;
}

.landing__scroller {
  @apply hidden text-lg mt-12 overflow-y-hidden;
}

.landing__project__list {
  @apply grid grid-cols-1;
}

.landing__project__item {
  @apply px-8 py-12 border border-white;
}

.slide-up {
  @for $i from 2 to 3 {
    &:nth-child($(i)) {
      animation: slideUp 500ms cubic-bezier(0.5, 1, 0.89, 1) forwards;
      opacity: 0;
      transform: translateY(1em);
      animation-delay: calc(850ms + (calc(200ms * $(i))));
    }
  }
}

.scroll-enter {
  opacity: 0;
  transform: translateY(100%);
}

.scroll-enter-active, .scroll-leave-active {
  transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1),
    opacity 150ms cubic-bezier(0.61, 1, 0.88, 1);
}

.scroll-leave, .scroll-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.scroll-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@screen md {
  .landing__title {
    font-size: 10vw;

    & > div:not(:first-child) {
      left: 20vw;
    }
  }

  .landing__subtitle {
    font-size: 2.5vw;
  }

  .landing__scroller {
    @apply block;
  }

  .slide-up {
    @for $i from 2 to 4 {
      &:nth-child($(i)) {
        animation: slideUp 500ms cubic-bezier(0.5, 1, 0.89, 1) forwards;
        opacity: 0;
        transform: translateY(1em);
        animation-delay: calc(800ms + (calc(200ms * $(i))));
      }
    }
  }

  .landing__project__list {
    @apply grid-cols-2;
  }
}

@screen lg {
  .landing__title {
    font-size: 8vw;

    & > div:not(:first-child) {
      left: 25vw;
    }
  }

  .landing__subtitle {
    font-size: 2vw;
  }

  .landing__scroller {
    @apply text-xl;
  }

  .landing__project__list {
    @apply grid-cols-3;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(-101%);
  }

  50% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(101%);
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(101%);
  }

  50% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-101%);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(1em);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>
