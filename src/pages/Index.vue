<script>
import { ref, onMounted } from '@vue/composition-api';

export default {
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
    <div class="landing">

      <!-- start: landing hero -->
      <div class="text-xl py-12">
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
          Currently, I'm in love with Vue and NodeJS
        </p>
        <p
          class="hidden md:block text-lg mt-12 overflow-y-hidden slide-up">
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
      </div>
      <!-- end: landing hero -->

      <!-- start: contact list -->
      <div class="contact__list py-12">
        <h2
          v-intersect
          class="text-2xl md:text-4xl font-semibold title-accent">
          Say Hello. I dare you <span class="fist">👊</span>
        </h2>
      </div>
      <!-- end: contact list -->
    </div>
    <!-- end: landing page -->
  </layout>
</template>

<style lang="postcss" scoped>
.landing__title {
  line-height: 1.1em;
  font-weight: 400;
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

.fist {
  display: inline-block;
  animation: broFist 3s infinite;
  transform: perspective(10px) translateZ(0);
}

.landing__subtitle {
  font-size: 5vw;
}

.slide-up {
  @for $i from 2 to 3 {
    &:nth-child($(i)) {
      animation: slideUp 500ms cubic-bezier(0.5, 1, 0.89, 1) forwards;
      opacity: 0;
      transform: translateY(2rem);
      animation-delay: calc(800ms + (calc(150ms * $(i))));
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

  .slide-up {
    @for $i from 2 to 4 {
      &:nth-child($(i)) {
        animation: slideUp 500ms cubic-bezier(0.5, 1, 0.89, 1) forwards;
        opacity: 0;
        transform: translateY(2rem);
        animation-delay: calc(800ms + (calc(150ms * $(i))));
      }
    }
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
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes broFist {
  0% {
    transform: perspective(10px) translateZ(0);
  }

  10% {
    transform: perspective(10px) translateZ(-10px);
  }

  15% {
    transform: perspective(10px) translateZ(2px);
  }

  22.5% {
    transform: perspective(10px) translateZ(0);
  }
}
</style>
