<script>
import { ref, onMounted } from '@vue/composition-api';
import ArrowLink from '~/assets/icons/arrow-link.svg?inline';
import { ProjectCard } from '~/components/ui/project-card';

export default {
  components: {
    ProjectCard,
    ArrowLink,
  },

  head: {
    title: 'Welcome! - Namchee',
    meta: [
      /* eslint-disable max-len */
      {
        name: 'description',
        content:
          'Namchee is an aspiring web developer based in Bandung, Indonesia',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Namchee',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Namchee is an aspiring web developer based in Bandung, Indonesia',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Namchee',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Namchee is an aspiring web developer based in Bandung, Indonesia',
      },
      /* eslint-enable max-len */
    ],
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
  <!-- start: landing page -->
  <section class="landing">
    <!-- start: landing hero -->
    <section class="flex flex-col justify-center
      text-xl
      py-16
      md:py-20
      landing__hero">
      <h1 class="landing__title">
        <div>
          <span>Hello there.</span>
        </div>
        <br />
        <div>
          <span>I'm Namchee.</span>
        </div>
      </h1>

      <p
        class="mt-8 landing__subtitle slide-up"
      >I do full-stack development with JavaScript based technologies</p>
      <p
        class="mt-4 md:mt-0 landing__subtitle slide-up"
      >Currently, I'm simping for Vue and NodeJS</p>
      <p class="hidden
        text-lg
        mt-12
        overflow-y-hidden
        md:block
        lg:text-xl
        slide-up">
        Other than code, Namchee likes to
        <transition name="scroll">
          <template v-for="(item, i) in text">
            <span
              class="ml-1 absolute inline-block"
              :key="i" v-if="idx === i"
            >
              {{ item }}
            </span>
          </template>
        </transition>
      </p>
    </section>
    <!-- end: landing hero -->

    <!-- start: featured projects -->
    <section class="flex flex-col
      py-12
      lg:flex-row
      lg:py-16">
      <div class="
        text-4xl
        mb-8
        lg:text-5xl
        lg:mb-0
        landing__project__title">
        <h2>
          Selected Works
        </h2>
      </div>

      <section class="lg:pl-16 lg:flex-grow landing__project__list">
        <!-- start: covid-19 project -->
        <project-card>
          <template v-slot:timeline>2020</template>

          <template v-slot:technologies>NodeJS</template>

          <template v-slot:title>COVID-19 LINE Bot</template>

          <template v-slot:description>
            <p>
              A simple chatbot for LINE that provides
              accurate data and educational information
              related with COVID-19 pandemic in Indonesia.
            </p>
          </template>

          <template v-slot:link>
            <a
              rel="noreferrer"
              class="project__link"
              href="https://github.com/Namchee/COVID-19-LINE-Bot">
              GitHub
              <arrow-link class="inline-block" />
            </a>
          </template>
        </project-card>
        <!-- end: covid-19 project -->

        <!-- start: wombatik project -->
        <project-card>
          <template v-slot:timeline>2019</template>

          <template v-slot:technologies>Java</template>

          <template v-slot:title>Wombatik</template>

          <template v-slot:description>
            <p class="mb-4">
              Digital watermarking app that provides data integrity
              and copyright protection on an image.
            </p>

            <p>
              Specifically made for preserving
              batik heritage.
            </p>
          </template>

          <template v-slot:link>
            <a class="project__link" href="https://github.com/Namchee/wombatik" rel="noreferrer">
              GitHub
              <arrow-link class="inline-block" />
            </a>
          </template>
        </project-card>
        <!-- end: wombatik project -->

        <!-- start: absentor project -->
        <project-card>
          <template v-slot:timeline>2020</template>

          <template v-slot:technologies>Python</template>

          <template v-slot:title>
            <div class="flex items-center">
              Absentor
            </div>
          </template>

          <template v-slot:description>
            <p class="mb-4">
              Experimental Discord bot that provides
              automatic recording of attendance and attendance history
              management on Google Sheet.
            </p>

            <p>
              Developed with friends as a part of team project.
            </p>
          </template>

          <template v-slot:link>
            <a class="project__link" href="https://github.com/Namchee/absentor" rel="noreferrer">
              GitHub
              <arrow-link class="inline-block" />
            </a>
          </template>
        </project-card>
        <!-- end: absentor project -->

        <div class="text-xl text-center md:text-2xl md:text-right py-8">
          <a
            class="project__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Namchee"
          >View More on GitHub -></a>
        </div>
      </section>
    </section>
    <!-- end: featured projects -->
  </section>
  <!-- end: landing page -->
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
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-101%);
      background-color: #EDEDF0; /* IE 11 fallback */
      background-color: var(--copy-primary);
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

.landing__hero {
  min-height: calc(100vh - 8rem);
}

.landing__subtitle {
  font-size: 5vw;
}

.project__link {
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #EDEDF0; /* IE 11 fallback */
    background-color: var(--copy-primary);
    transition: transform 350ms cubic-bezier(0.25, 1, 0.5, 1);
    transform-origin: right;
    transform: scaleX(0);
  }

  &:hover,
  &:focus,
  &:active {
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}

.project__card:not(:first-child)::before {
  opacity: 0;
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

.scroll-enter-active,
.scroll-leave-active {
  transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1),
    opacity 150ms cubic-bezier(0.61, 1, 0.88, 1);
}

.scroll-leave,
.scroll-enter-to {
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
        transform: translateY(1em);
        animation-delay: calc(800ms + (calc(200ms * $(i))));
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

  .landing__hero {
    min-height: calc(100vh - 10rem);
  }

  .landing__subtitle {
    font-size: 2vw;
  }

  .landing__project__list {
    margin-top: 1.5vw;
  }

  .landing__project__title {
    & h2 {
      font-size: 4vw;
      text-align: right;
    }
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

@keyframes yReveal {
  from {
    transform: translateY(2em);
  }

  to {
    transform: translateY(0);
  }
}
</style>
