<script>
import { ref, watchEffect, onMounted } from '@vue/composition-api';
import { LINKS } from '~/common';
import Logo from '~/assets/images/logo.svg?inline';

export default {
  components: {
    Logo,
  },

  setup() {
    const isOpen = ref(false);

    const isMobile = () => {
      return process.client && window.innerWidth < 768;
    };

    onMounted(() => {
      watchEffect(() => {
        const open = isOpen.value;

        if (open) {
          document.body.style.height = '100vh';
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.height = 'auto';
          document.body.style.overflowY = 'unset';
        }
      });
    });

    return {
      isMobile,
      isOpen,
      links: LINKS,
    };
  },
};
</script>

<template>
  <!-- start: navigation -->
  <div
    class="fixed top-0 left-0
      z-10
      bg-surface
      px-4
      h-18
      w-full
      md:mx-auto
      md:px-12
      lg:static
      lg:h-20
      header">
    <!-- start: navigation elements -->
    <div
      class="flex justify-between items-center
        h-full
        z-10
        border-b-2 border-copy
        nav">
      <!-- start: logo -->
      <nuxt-link
        to="/"
        class="z-10"
        aria-label="Namchee">
        <logo id="logo" alt="Namchee" role="banner" class="logo" />
      </nuxt-link>
      <!-- end: logo -->

      <!-- start: navigation links -->
      <nav
        role="navigation"
        aria-labelledby="logo"
        :aria-hidden="isMobile() && !isOpen"
        :aria-expanded="isMobile() ? isOpen : true"
        class="h-full flex flex-col justify-center"
        :class="{ 'nav--open': isOpen }">
        <!-- start: navigation overlay -->
        <div class="fixed
          flex flex-col justify-center items-start
          text-5xl
          h-screen w-screen
          bg-ground
          top-0 left-0
          p-6
          pointer-events-none
          md:relative
          md:flex-row md:justify-evenly md:items-center
          md:w-auto md:h-auto
          md:text-base
          md:p-0
          md:bg-transparent
          md:pointer-events-auto
          nav__items">
          <ul
            class="flex flex-col
              md:flex-row
              md:font-semibold
              nav__menu">
            <li
              class="nav__item__wrapper"
              v-for="link in links"
              :key="link.href"
              @click="isOpen = false">
              <nuxt-link
                :to="link.href"
                class="relative flex justify-center items-center nav__link">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- end: navigation overlay -->

        <!-- start: navigation burger -->
        <button
          class="flex flex-col justify-center items-center
            w-16 h-full
            nav__burger"
          aria-label="Menu"
          aria-controls="nav"
          aria-haspopup="true"
          :aria-expanded="isOpen"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <!-- end: navigation burger -->
      </nav>
      <!-- end: navigation links -->
    </div>
    <!-- end: navigation elements -->
  </div>
  <!-- end: navigation -->
</template>

<style lang="postcss" scoped>
.logo {
  transform: scale(0.9);
  animation: fill 1s ease-out forwards 1.6s;

  & path {
    stroke: var(--copy-primary);
    stroke-width: .5px;
    stroke-dasharray: 140;
    stroke-dashoffset: 140;
    animation: line 1.65s cubic-bezier(0.45, 0, 0.55, 1) forwards;
  }
}

.nav__link {
  opacity: 0.5;
  transition: opacity 250ms ease-out;

  &:hover, &:focus, &.active--exact {
    opacity: 1;
  }
}

.nav--open {
  .nav__items {
    pointer-events: auto;
  }
}

.nav__burger {
  & span {
    @apply z-10 rounded-full origin-right;

    background-color: var(--copy-primary);
    content: "";
    width: 1.65rem;
    border: 1.65px solid var(--copy-primary);
    transition: transform 250ms ease-out;

    &:first-child {
      transform: scaleX(.85);
    }

    &:nth-child(2) {
      transform: scaleX(.7);
    }

    &:nth-child(4), &:nth-child(5) {
      top: 2.125rem;
      position: absolute;
      transform-origin: center;
      transition: transform 250ms ease-out 200ms;
    }

    &:nth-child(4) {
      transform: rotate(45deg) scaleX(0);
    }

    &:nth-child(5) {
      transform: rotate(-45deg) scaleX(0);
    }

    &:first-child, &:nth-child(2) {
      margin-bottom: 5px;
    }

    @for $i from 1 to 3 {
      &:nth-child($(i)) {
        transition-delay: calc($(i) * 125ms);
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .nav__items {
    z-index: -1;
    clip-path: polygon(100% 0, 100% 0, 0% 100%, 0% 100%);
    transition: clip-path 750ms cubic-bezier(0.76, 0, 0.24, 1);
  }

  .nav__menu {
    counter-reset: link-list;
  }

  .nav__item__wrapper {
    @apply my-2 ml-6;
  }

  .nav__link {
    @apply relative;

    &::before {
      position: absolute;
      top: .85rem;
      left: -1.5rem;
      counter-increment: link-list;
      content: counter(link-list, decimal-leading-zero);
      font-size: 1rem;
    }
  }

  .nav--open {
    & .nav__burger {
      & :nth-child(1), :nth-child(2), :nth-child(3) {
        transform: scaleX(0);
      }

      & :nth-child(4) {
        transform: rotate(45deg) scaleX(1);
      }

      & :nth-child(5) {
        transform: rotate(-45deg) scaleX(1);
      }
    }

    & .nav__items {
      clip-path: polygon(0% 0, 200% 0, 100% 100%, -100% 100%);
      pointer-events: all;
    }
  }
}

@screen md {
  .logo {
    transform: scale(1);
  }

  .nav {
    padding: 0 .5rem;

    & .nav__item__wrapper {
      margin: 0 1.75rem;
    }

    & .nav__burger {
      display: none;
    }
  }
}

@screen lg {
  .header {
    width: clamp(56rem, 85vw, 1280px);
    padding: 0;
  }

  .nav {
    & .nav__item__wrapper {
      margin: 0 2.5rem;
    }
  }
}

@keyframes line {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill {
  0% {
    fill: transparent;
  }

  100% {
    fill: var(--copy-primary);
  }
}
</style>
