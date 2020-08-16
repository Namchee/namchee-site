<script>
import { ref, onMounted } from '@vue/composition-api';
import ArrowLink from './../assets/icons/arrow-link.svg';
import { ProjectCard } from '~/components/ProjectCard';

export default {
  components: {
    ProjectCard,
    ArrowLink,
  },

  metaInfo: {
    title: 'Welcome!',
    meta: [
      /* eslint-disable max-len */
      {
        name: 'description',
        content:
          'Namchee is an aspiring web developer based in Bandung, Indonesia',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Namchee',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content:
          'Namchee is an aspiring web developer based in Bandung, Indonesia',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Namchee',
      },
      {
        key: 'twitter:description',
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
    <section class="landing__hero text-xl py-16 md:py-20">
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
        class="mt-8 landing__subtitle tracking-wide slide-up"
      >I do full-stack development with JavaScript based technologies</p>
      <p
        class="mt-4 md:mt-0 landing__subtitle tracking-wide slide-up"
      >Currently, I'm simping for Vue and NodeJS</p>
      <p class="landing__scroller slide-up">
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
    <section class="landing__project">
      <div class="landing__project__title">
        <h2>
          Selected Works
        </h2>
      </div>

      <section class="landing__project__list">
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

        <div class="text-xl md:text-2xl text-center md:text-right py-8">
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
      background-color: #E0E0E0; /* IE 11 fallback */
      background-color: var(--text-copy);
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
  @apply flex flex-col justify-center;

  min-height: calc(100vh - 8rem);
}

.landing__subtitle {
  font-size: 5vw;
}

.landing__scroller {
  @apply hidden text-lg mt-12 overflow-y-hidden;
}

.landing__project {
  @apply flex flex-col py-12;
}

.landing__project__title {
  @apply text-4xl tracking-wide mb-8;
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
    background-color: #E0E0E0; /* IE 11 fallback */
    background-color: var(--text-copy);
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

  .landing__project__title {
    @apply text-5xl;
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

  .landing__scroller {
    @apply text-xl;
  }

  .landing__project {
    @apply flex-row py-16;
  }

  .landing__project__list {
    @apply pl-16 flex-grow;

    margin-top: 1.5vw;
  }

  .landing__project__title {
    @apply mb-0;

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
