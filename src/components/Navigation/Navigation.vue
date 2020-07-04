<script>
import { ref, onMounted, watch } from '@vue/composition-api';
import ThemeSwitch from './ThemeSwitch';
import Logo from './../../assets/images/logo.svg';

export default {
  components: {
    Logo,
    ThemeSwitch,
  },

  setup(props, { root }) {
    const isOpen = ref(false);

    // hide navbar on scroll
    const lastScroll = ref(0);
    const hideMenu = ref(false);
    const currentScroll = ref(0);
    const tick = ref(false);

    const links = [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Projects',
        href: '/projects',
      },
      {
        name: 'About',
        href: '/about',
      },
    ];

    onMounted(() => {
      const handleScroll = () => {
        currentScroll.value = window.pageYOffset;
        tickScrollbar();
      };

      const tickScrollbar = () => {
        if (!tick.value) {
          requestAnimationFrame(updateScrollbar);
        }

        tick.value = true;
      };

      const updateScrollbar = () => {
        hideMenu.value = currentScroll.value > lastScroll.value &&
          currentScroll.value > 100;

        lastScroll.value = currentScroll.value;

        tick.value = false;
      };

      watch(isOpen, (isOpen) => {
        if (isOpen) {
          document.body.style.height = '100vh';
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.height = '';
          document.body.style.overflowY = '';
        }
      });

      window.addEventListener('scroll', handleScroll, { passive: true });
    });

    return {
      currentScroll,
      hideMenu,
      isOpen,
      links,
    };
  },
};
</script>

<template>
  <header
    class="header"
    :class='{
      "nav--open": isOpen,
      "nav--top": currentScroll === 0,
      "nav--hide": hideMenu,
    }'
  >
    <!-- start: logo -->
    <a
      id="logo"
      href="/"
      class="header__logo transform scale-90 scale-100 ml-6 md:ml-12 lg:ml-0"
    >
      <logo />
    </a>
    <!-- end: logo -->

    <nav
      id="nav"
      class="nav h-full"
      role="navigation"
      aria-labelledby="logo"
      :aria-hidden="!isOpen"
      :aria-expanded="isOpen"
    >
      <!-- start: navigation elements -->
      <div
        class="nav__elem"
      >
        <!-- start: navigation links -->
        <ul class="nav__menu flex items-center font-semibold">
          <li
            class="nav__menu-item"
            v-for="link in links"
            :key="link.href"
          >
            <a
              :href="link.href"
              class="nav__menu-link lg:mx-8"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <!-- end: navigation links -->

        <!-- start: site options -->
        <div class="nav__site-options lg:ml-4 z-10">
          <theme-switch />
        </div>
        <!-- end: site options -->
      </div>
      <!-- end: navigation elements -->

      <!-- start: mobile navigation burger -->
      <button
        class="nav__burger h-full md:mr-2"
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
      <!-- end: mobile navigation burger -->
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply flex
    justify-between
    items-center
    bg-navigation-bg
    border-b
    border-navigation-border
    fixed
    w-full
    h-18
    z-10;

  backdrop-filter: blur(5px);
  transform: translateY(0);
  transition: transform 500ms cubic-bezier(0.37, 0, 0.63, 1),
    background-color 500ms cubic-bezier(0.61, 1, 0.88, 1);

  box-sizing: border-box;

  &.nav--top {
    backdrop-filter: blur(0px);
    border-bottom: none;
    background-color: transparent;
  }

  &.nav--hide {
    transform: translateY(-105%);
  }

  &:focus-within {
    transform: translateY(0);
  }
}

.header__logo {
  z-index: 999;

  & svg {
    animation: fill 1s ease-out forwards 1.6s;

    & path {
      stroke: var(--text-copy-primary);
      stroke-width: .65px;
      stroke-dasharray: 140;
      stroke-dashoffset: 140;
      animation: line 1.65s cubic-bezier(0.45, 0, 0.55, 1) forwards;
    }
  }
}

.nav {
  @apply flex items-center;
}

.nav__elem {
  @apply flex;
}

.nav__menu-link {
  @apply relative;

  &::after {
    background-color: var(--text-copy-primary);
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
    transform: scaleX(0);
  }

  &:hover, &:focus {
    &::after {
      transform: scaleX(1.1);
    }
  }
}

.nav__burger {
  @apply flex flex-col justify-center items-center w-16;

  & span {
    position: ;
    z-index: 999;
    border-radius: 9999px;
    content: "";
    width: 1.65rem;
    border: 1.5px solid var(--text-copy-primary);
    transform-origin: right;
    transition: transform 300ms ease;

    &:first-child {
      transform: scaleX(.85);
    }

    &:nth-child(2) {
      transform: scaleX(.7);
    }

    &:nth-child(4) {
      top: 2.3rem;
      position: absolute;
      transform: rotate(45deg) scaleX(0);
    }

    &:nth-child(5) {
      top: 2.3rem;
      position: absolute;
      transform: rotate(-45deg) scaleX(0);
    }

    &:nth-child(4), &:nth-child(5) {
      transform-origin: center;
      transition: transform 300ms ease 200ms;
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

@media screen and (max-width: 1023px) {
  .header {
    @apply w-screen;
  }

  .nav__elem {
    @apply fixed
      flex
      flex-col
      justify-between
      h-screen
      w-screen
      top-0
      left-0
      p-8;

    z-index: 998;
    background-color: var(--primary);
    pointer-events: none;

    clip-path: polygon(90% 0, 90% 0, 10% 100%, 10% 100%);
    transition: clip-path 750ms cubic-bezier(0.65, 0, 0.35, 1);
  }

  .nav__menu {
    @apply flex-col items-start justify-start text-5xl my-auto px-4;

    counter-reset: link-list;
  }

  .nav__site-options {
    opacity: 0;
    transition: opacity 600ms ease-out;
  }

  .nav__menu-item {
    @apply my-2;
    left: 1rem;
    display: block;
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 500ms cubic-bezier(0.33, 1, 0.68, 1),
      transform 500ms cubic-bezier(0.33, 1, 0.68, 1);

    &::before {
      position: absolute;
      top: .85rem;
      left: -1.5rem;
      counter-increment: link-list;
      content: counter(link-list, decimal-leading-zero);
      font-size: 1rem;
    }

    &::after {
      bottom: 5px;
      height: 3px;
      transform-origin: left;
    }

    &:hover {
      &::after {
        transform: scaleX(1.25);
      }
    }
  }

  @for $i from 1 to 4 {
    .nav__menu-item:nth-child($(i)) {
      transition-delay: calc($(i) * 75ms);
    }
  }

  .nav__burger {
    z-index: 999;
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

    & .nav__elem {
      clip-path: polygon(-10% 0, 190% 0, 110% 100%, -110% 100%);
      pointer-events: all;
    }

    & .nav__site-options {
      opacity: 1;
    }

    & .nav__menu-item {
      opacity: 1;
      transform: translateY(0);

      &::after {
        transform-origin: left;
      }

      &:hover, &:focus, &.is-active {
        &::after {
          transform: scaleX(1.15);
        }
      }
    }
  }
}

@media screen and (min-width: 640px) and (max-width: 1023px) {
  .nav__menu {
    @apply text-6xl px-6;
  }

  .nav__menu-item {
    @apply my-2;
    left: 1rem;

    &::before {
      position: absolute;
      top: 1.25rem;
      left: -1.65rem;
      counter-increment: link-list;
      content: counter(link-list, decimal-leading-zero);
      font-size: 1.15rem;
    }
  }
}

@screen lg {
  .header {
    @apply h-20 px-24;
  }

  .nav__elem {
    @apply flex flex-row justify-evenly items-center h-full bg-transparent;
  }

  .nav__burger {
    @apply hidden;
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
    fill: var(--text-copy-primary);
  }
}
</style>
