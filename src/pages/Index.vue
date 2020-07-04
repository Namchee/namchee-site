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

      if (window.innerWidth > 639) {
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
    <div class="flex items-center flex-grow py-8">
      <div class="intro md:text-xl">
        <h1 class="text-4xl md:text-6xl header reveal">
          Hello there 👋
        </h1>
        <h1 class="text-4xl md:text-6xl header reveal">
          My name is <span class="underline-reveal">Namchee</span>
        </h1>
        <p class="mt-2 md:mt-0 reveal">
          I do full-stack development with JavaScript based technologies
        </p>
        <p class="reveal">
          Currently, I'm in love with Vue and NodeJS
        </p>
        <p
          class="hidden md:block text-lg mt-20 overflow-y-hidden">
          Namchee likes to
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
    </div>
  </layout>
</template>

<style lang="postcss" scoped>
.underline-reveal {
  display: inline-block;
  z-index: 1;
  position: relative;

  &::after {
    z-index: -1;
    pointer-events: none;
    position: absolute;
    content: "";
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(.05);
    transform-origin: bottom;
    transition: transform 250ms cubic-bezier(0.33, 1, 0.68, 1);
    background-color: var(--primary-trans);
  }

  &:hover {
    &::after {
      transform: scaleY(1);
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
  .underline-reveal {
    padding: 0 5px;
  }
}
</style>
