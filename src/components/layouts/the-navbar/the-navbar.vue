<script>
import { ref, onMounted, watchEffect } from '@vue/composition-api';
import ThemeSwitcherEvo from './theme-switcher-evo';
import ThemeSwitcher from './theme-switcher';
import Logo from '~/assets/images/logo.svg?inline';

export default {
  components: {
    Logo,
    ThemeSwitcher,
    ThemeSwitcherEvo,
  },

  setup(props, { root }) {
    const isOpen = ref(false);

    const isMobile = () => {
      // regex from http://detectmobilebrowsers.com/mobile
      return process.client ?
        /* eslint-disable-next-line */
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent) :
        false;
    };

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
          currentScroll.value > 256;

        lastScroll.value = currentScroll.value;

        tick.value = false;
      };

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

      window.addEventListener('scroll', handleScroll, { passive: true });
    });

    return {
      currentScroll,
      hideMenu,
      isOpen,
      isMobile,
      links,
    };
  },
};
</script>

<template>
  <div
    class="border-b border-line-light dark:border-line-dark
      bg-surface-light dark:bg-surface-dark bg-opacity-80
      fixed z-10
      w-full h-16
      lg:h-20
      header"
    :class='{
      "nav--open": isOpen,
      "nav--top": currentScroll === 0,
      "nav--hide": hideMenu,
    }'
  >
    <div class="flex justify-center items-center
      h-full
      mx-auto
      nav__container">
      <!-- start: banner logo -->
      <nuxt-link
        id="logo"
        to="/"
        class="z-10
          transform
          scale-75
          mdl:scale-90
          md:ml-8
          lg:scale-100 lg:ml-0
          header__logo"
        aria-label="Namchee">
        <logo alt="Namchee" role="banner" />
      </nuxt-link>
      <!-- end: banner logo -->

    <nav
      id="nav"
      class="flex flex-grow items-center justify-end h-full"
      role="navigation"
      aria-labelledby="logo"
      :aria-hidden="isMobile() && !isOpen"
      :aria-expanded="isMobile() ? isOpen : true"
    >
      <!-- start: navigation elements -->
      <div
        class="fixed
          flex flex-col justify-between
          h-screen w-screen
          top-0 left-0
          p-8
          pointer-events-none
          lg:relative
          lg:flex-row lg:justify-evenly lg:items-center
          lg:w-auto lg:h-auto
          lg:p-0
          lg:bg-transparent
          lg:pointer-events-auto
          nav__elem"
      >
        <!-- start: navigation links -->
        <ul class="flex flex-col items-start justify-start
          text-5xl
          my-auto
          px-4
          font-semibold
          md:text-6xl
          lg:flex-row lg:items-center lg:text-base
          lg:px-0
          nav__menu">
          <li
            class="nav__menu__item"
            v-for="link in links"
            :key="link.href"
            @click="isOpen = false"
          >
            <nuxt-link
              :to="link.href"
              class="relative
                lg:mx-8
                nav__menu__link"
            >
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
        <!-- end: navigation links -->
      </div>
      <!-- end: navigation elements -->

      <!-- start: theme switcher -->
      <theme-switcher-evo class="z-10
        md:mr-4
        lg:mr-0 lg:ml-4" />
      <!-- end: theme switcher -->

      <!-- start: mobile navigation burger -->
      <button
        class="flex flex-col justify-center items-center
          w-16 h-full
          md:mr-2
          lg:hidden
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
      <!-- end: mobile navigation burger -->
    </nav>
    </div>

  </div>
</template>

<style lang="postcss" scoped>
.header {
  backdrop-filter: blur(5px);
  transform: translateY(0);
  transition: transform 600ms cubic-bezier(0.45, 0, 0.55, 1),
    background-color 250ms cubic-bezier(0.61, 1, 0.88, 1),
    height 250ms ease-out;

  &.nav--top {
    @apply border-b-0 border-transparent;

    backdrop-filter: blur(0px);
  }

  &.nav--hide {
    transform: translateY(-101%);
  }

  &:focus-within {
    transform: translateY(0);
  }
}

.header__logo {
  & svg {
    animation: fill 1s ease-out forwards 1.6s;

    & path {
      @apply stroke-current;

      stroke-width: .65px;
      stroke-dasharray: 140;
      stroke-dashoffset: 140;
      animation: line 1.65s cubic-bezier(0.45, 0, 0.55, 1) forwards;
    }
  }
}

.nav__menu__link {
  @apply relative;

  &::after {
    @apply absolute left-0 w-full;

    background-color: var(--copy);
    content: "";
    bottom: -5px;
    height: 2px;
    transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
    transform: scaleX(0);
  }

  &:hover, &:focus, &:active, &.active--exact {
    &::after {
      transform: scaleX(1.05);
    }
  }
}

.nav__burger {
  & span {
    @apply z-10
      rounded-full
      origin-right
      bg-copy-light-primary dark:bg-copy-dark-primary
      border-copy-light-primary dark:border-copy-dark-primary;

    content: "";
    width: 1.65rem;
    border: 1.65px solid;
    transition: transform 250ms ease-out;

    &:first-child {
      transform: scaleX(.85);
    }

    &:nth-child(2) {
      transform: scaleX(.7);
    }

    &:nth-child(4), &:nth-child(5) {
      top: 2rem;
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

@media screen and (max-width: 1023px) {
  .nav__elem {
    @apply bg-primary-400 dark:bg-primary-600;

    clip-path: polygon(100% 0, 100% 0, 0% 100%, 0% 100%);
    transition: clip-path 750ms cubic-bezier(0.76, 0, 0.24, 1);
  }

  .nav__menu {
    counter-reset: link-list;
  }

  .nav__menu__item {
    @apply my-2 block relative;

    &::before {
      position: absolute;
      top: .85rem;
      left: -1.5rem;
      counter-increment: link-list;
      content: counter(link-list, decimal-leading-zero);
      font-size: 1rem;
    }
  }

  .nav__menu__link {
    &::after {
      @apply bottom-0 origin-left;

      height: 3px;
    }

    &:hover, &:focus, &:active, &.active--exact {
      &::after {
        transform: scaleX(1.1);
      }
    }
  }

  .nav__burger {
    @apply z-50;
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
      clip-path: polygon(0% 0, 200% 0, 100% 100%, -100% 100%);
      pointer-events: all;
    }

    & .nav__menu__item {
      &::after {
        @apply origin-left;
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

  .nav__menu__item {
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
  .nav__container {
    width: clamp(56rem, 85vw, 1280px);
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
    @apply fill-current;
  }
}
</style>
