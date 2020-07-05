<script>
import { ref, onMounted } from '@vue/composition-api';
import Avatar from './../assets/images/avatar.svg';

export default {
  components: {
    Avatar,
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

      if (window.innerWidth > 1023) {
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
    <div class="landing">
      <div class="landing__avatar">
        <avatar />
      </div>
      <div class="landing__content md:text-xl">
        <h1 class="landing__title">
          Hello there <span class="wave">👋</span>
        </h1>
        <h1 class="landing__title">
          My name is <span class="underline-reveal">Namchee</span>
        </h1>
        <p class="mt-2">
          I do full-stack development with JavaScript based technologies
        </p>
        <p class="mt-1">
          Currently, I'm in love with Vue and NodeJS
        </p>
        <p
          class="hidden md:block text-lg mt-18 overflow-y-hidden">
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
/* wave animation taken from https://jarv.is/notes/css-waving-hand-emoji/
   with some modification
*/

.landing {
  @apply flex flex-col items-center justify-center flex-grow;
}

.wave {
  animation: wave 3.5s 3.5s infinite ease;
  transform-origin: 75% 75%;
  display: inline-block;
}

.landing__title {
  font-size: 2.5rem;
}

.landing__avatar {
  display: block;
  width: 75%;
  height: auto;
  margin-bottom: 2rem;

  & > svg {
    fill: currentColor;
  }
}

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
  .landing__avatar {
    width: 65%;
  }

  .underline-reveal {
    padding: 0 5px;
  }

  .landing__title {
    font-size: 4rem;
  }
}

@screen lg {
  .landing {
    @apply flex-row items-center;
  }

  .landing__avatar {
    margin: 0;
    width: 25vw;
    height: auto;

    order: 2;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }

  .landing__content {
    order: 1;
  }
}

@keyframes wave {
    0% { transform: rotate(  0.0deg) }
    5% { transform: translate(-3px, -3px)   }
   10% { transform: rotate(-12.5deg) translate(-3px, -3px) }
   15% { transform: rotate( 15.0deg) translate(-3px, -3px) }
   20% { transform: rotate(-17.5deg) translate(-3px, -3px) }
   25% { transform: rotate( 15.0deg) translate(-3px, -3px) }
   30% { transform: rotate(-13.5deg) translate(-3px, -3px) }
   40% { transform: rotate(  0.0deg) translate(0, 0) }
  100% { transform: rotate(  0.0deg) }
}
</style>
