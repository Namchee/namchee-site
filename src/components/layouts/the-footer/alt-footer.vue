<script>
import { LINKS } from '~/common';

export default {
  setup() {
    const contacts = [
      {
        name: 'mail.',
        href: 'mailto:cristophernamchee12@gmail.com',
        class: 'mail',
      },
      {
        name: 'tw.',
        href: 'https://twitter.com/lakban_hitam',
        class: 'twitter',
      },
      {
        name: 'in.',
        href: 'https://www.linkedin.com/in/cristopher-namchee',
        class: 'linked-in',
      },
      {
        name: 'gh.',
        href: 'https://www.github.com/namchee',
        class: 'github',
      },
    ];

    return {
      contacts,
      links: LINKS,
    };
  },
};
</script>

<template>
  <!-- start: footer -->
  <footer class="border-t-2 border-copy-primary
    mx-4
    md:mx-12
    lg:mx-auto
    footer">
    <!-- start: footer content -->
    <div class="flex flex-col
      px-2 py-10
      md:py-12
      md:flex-row md:justify-between md:items-stretch
      lg:py-16">

      <!-- start: left section -->
      <div class="flex flex-col justify-between mb-8 md:mb-0">
        <!-- start: email me section -->
        <div class="mb-0 md:mb-12">
          <p class="text-sm md:text-base text-copy-secondary mb-2">
            Got a project in mind? Or maybe a chat?
          </p>

          <a
            href="mailto:cristophernamchee12@gmail.com?subject=[DEV] Let's Talk"
            target="_blank"
            rel="noreferrer"
            class="font-head font-medium leading-tight direct__contact">
            Let's Talk &nearrow;
          </a>
        </div>
        <!-- end: email me section -->

        <!-- start: disclaimer section -->
        <p class="max-w-2xs
          text-copy-secondary
          hidden
          md:block
          lg:text-lg
          lg:max-w-none">
          Designed and implemented with love in 2020 by Namchee
        </p>
        <!-- end: disclaimer section -->
      </div>
      <!-- end: left section -->

      <!-- start: quick links and social section -->
      <div class="flex flex-col justify-between">
        <!-- start: quick links -->
        <div class="mb-4">
          <p class="text-sm md:text-base text-copy-secondary mb-2">
            On This Site
          </p>

          <ul class="flex items-center">
            <li
              v-for="link in links"
              :key="link.href"
              class="text-lg md:text-xl list__item">
              <nuxt-link
                :to="link.href"
                :class="link.class"
                class="list__link">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- end: quick links -->

        <!-- start: social media section -->
        <div class="mb-8 md:mb-0">
          <p class="text-sm md:text-base text-copy-secondary mb-2">
            Connect
          </p>

          <ul class="flex items-center font-head font-semibold contacts">
            <li
              v-for="contact in contacts"
              :key="contact.href"
              class="list__item">
              <a
                :href="contact.href"
                :class="contact.class"
                target="_blank"
                rel="noreferrer">
                {{ contact.name }}
              </a>
            </li>
          </ul>
        </div>
        <!-- end: social media section -->
      </div>
      <!-- end: quick links and social section -->

      <!-- start: mobile disclaimer -->
      <p class="text-center text-copy-secondary block md:hidden">
        Designed and implemented with love in 2020 by Namchee
      </p>
      <!-- end: mobile disclaimer -->
    </div>
    <!-- end: footer content -->

  </footer>
  <!-- end: footer -->
</template>

<style lang="postcss" scoped>
.contacts {
  font-size: 1.25rem;

  & a {
    transition: color 250ms ease-out;

    &:hover, &:active {
      &.mail {
        color: #C71610;
      }

      &.twitter {
        color: #1DA1F2;
      }

      &.linked-in {
        color: #0E76A8;
      }

      &.github {
        color: #F6F8FA;
      }
    }
  }
}

.list__item {
  @apply mx-4;

  &:first-child {
    @apply mr-4 ml-0;
  }

  &:last-child {
    @apply mr-0 ml-4;
  }
}

.list__link {
  @apply relative;

  &::after {
    position: absolute;
    content: '';
    background-color: var(--copy-primary);
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    transform: scaleY(0);
  }

  &.active--exact {
    &::after {
      transform: scaleY(1);
    }
  }
}

.direct__contact {
  position: relative;
  font-size: 2.5rem;

  &::after, &::before {
    position: absolute;
    display: block;
    bottom: 0;
    content: '';
    width: 100%;
    height: 100%;
    transform: scaleY(0.05);
    transform-origin: bottom center;
    transition: transform 350ms cubic-bezier(0.25, 1, 0.5, 1);
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
  .direct__contact {
    font-size: 3rem;
  }

  .contacts {
    font-size: 1.5rem;
  }
}

@screen lg {
  .footer {
    width: clamp(56rem, 85vw, 1280px);
  }

  .direct__contact {
    font-size: clamp(3rem, 5vw, 4rem);
  }

  .contacts {
    font-size: clamp(1.25rem, 1.5vw, 1.625rem);
  }

  .list__item {
    @apply mx-6;

    &:first-child {
      @apply mr-6 ml-0;
    }

    &:last-child {
      @apply mr-0 ml-6;
    }
  }
}
</style>
