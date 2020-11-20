<script>
import ArrowUp from '~/assets/icons/arrow-up.svg?inline';
import { LINKS } from '~/common';

export default {
  components: {
    ArrowUp,
  },

  setup() {
    const contacts = [
      {
        name: 'GitHub',
        href: 'https://github.com/Namchee',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/lakban_hitam',
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/cristopher-namchee/',
      },
    ];

    const backToTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      contacts,
      backToTop,
      links: LINKS,
    };
  },
};
</script>

<template>
  <!-- start: footer -->
  <footer class="mx-4
    md:mx-12
    lg:mx-auto
    footer">
    <!-- start: upper section -->
    <div class="py-8 lg:py-12">
      <p class="text-sm
        font-head
        text-copy-secondary
        mb-2
        font-normal
        md:text-base
        md:mb-0">
        Having unicorns in your head?
      </p>

      <h2 class="text-xl
        leading-relaxed
        mb-12
        md:leading-relaxed
        md:text-4xl
        lg:mb-16
        lg:-ml-1
        lg:leading-normal
        cta__head">
        <p>
          Namchee transforms
          <span class="transform__emphasis">
            pipe dreams
          </span>
        </p>
        <p>
          into
          <span class="transform__emphasis">
            fantastic realities
          </span>
        </p>
      </h2>

      <div class="grid grid-cols-1 gap-6
        md:grid-cols-2 md:gap-x-12
        lg:grid-cols-3 lg:gap-12">
        <div>
          <p
            class="text-sm
              font-head
              text-copy-secondary
              font-normal
              mb-2
              md:text-base
              lg:mb-4">
            Contact
          </p>

          <a
            href="mailto:cristophernamchee12@gmail.com?subject=[DEV] Let's Talk"
            target="_blank"
            rel="noreferrer"
            class="text-base md:text-xl hoverable">
            cristophernamchee12@gmail.com
          </a>
        </div>

        <div class="md:col-start-1 lg:col-start-auto">
          <p class="text-sm
            font-head
            text-copy-secondary
            font-normal
            mb-2
            md:text-base
            lg:mb-4">
            Social
          </p>

          <ul class="flex
            space-x-8
            text-base
            md:text-lg
            lg:flex-col
            lg:space-x-0 lg:space-y-3">
            <li v-for="contact in contacts" :key="contact.name">
              <a
                :href="contact.href"
                target="_blank"
                rel="noreferrer"
                class="hoverable">
                {{ contact.name }} &nearr;
              </a>
            </li>
          </ul>
        </div>

        <!-- start: quick links -->
        <div>
          <p class="text-sm
            font-head
            text-copy-secondary
            font-normal
            mb-2
            md:text-base
            lg:mb-4">
            On This Site
          </p>

          <ul class="flex
            space-x-8
            md:text-lg
            lg:flex-col
            lg:space-x-0 lg:space-y-3">
            <li v-for="link in links" :key="link.name">
              <nuxt-link
                :to="link.href"
                class="nav__links">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- end: quick links -->

      </div>
    </div>
    <!-- end: upper section -->

    <!-- start: bottom section -->
    <div class="border-t border-line-light dark:border-line-dark
      py-4
      font-medium
      text-copy-secondary
      flex justify-between items-center
      lg:py-6">

      <!-- start: copyleft notice -->
      <p class="text-sm md:text-base">
        <span class="copyleft">&copy;</span> 2020 Namchee. All lefts reserved.
      </p>
      <!-- end: copyleft notice -->

      <!-- start: back to top button -->
      <button
        @click="backToTop"
        class="flex items-center uppercase font-semibold
          focus:outline-none
          btt__button secondary">
        <span class="mr-2">Back To Top</span>
        <arrow-up class="w-10 h-10 stroke-current text-copy-secondary" />
      </button>
      <!-- end: back to top button -->
    </div>
    <!-- end: bottom section -->
  </footer>
  <!-- end: footer -->
</template>

<style lang="postcss" scoped>
.hoverable {
  position: relative;

  &::after {
    @apply bg-copy-light dark:bg-copy-dark;

    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    transform-origin: right;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 250ms ease-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}

.btt__button {
  & span {
    display: none;
  }
}

.secondary {
  & span::after {
    background: #737373;
  }
}

.copyleft {
  @apply inline-block;

  transform: rotateY(180deg);
}

.nav__links {
  color: #737373;
  font-weight: 500;
  transition: color 300ms ease-out;

  &.active--exact {
    @apply text-copy-light dark:text-copy-dark font-semibold;
  }

  &:hover {
    @apply text-copy-light dark:text-copy-dark;
  }
}

.transform__emphasis {
  position: relative;

  &::after, &::before {
    position: absolute;
    display: block;
    left: 0;
    bottom: -.1rem;
    content: '';
    width: 100%;
    height: 100%;
    transform: scaleY(0.05);
    transform-origin: bottom center;
    transition: transform 250ms cubic-bezier(0.25, 1, 0.5, 1);
  }

  &::before {
    background-color: var(--copy-primary);
    mix-blend-mode: difference;
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    background-color: var(--surface);
    z-index: -1;
  }

  &:hover, &:active {
    &::before, &::after {
      transform: scaleY(1);
    }
  }
}

@screen md {
  .btt__button {
    & span {
      position: relative;
      display: inline-block;

      &::after {
        @apply bg-copy-secondary;

        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        transform-origin: right;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transition: transform 250ms ease-out;
      }
    }

    &:hover {
      & span::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}

@screen lg {
  .footer {
    width: clamp(56rem, 85vw, 1280px);
  }

  .cta__head {
    font-size: clamp(3rem, 5vw, 5rem);
  }
}
</style>
