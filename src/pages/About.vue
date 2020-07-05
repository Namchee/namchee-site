<script>
import Mail from './../assets/icons/mail.svg';
import Twitter from './../assets/icons/twitter.svg';
import Github from './../assets/icons/github.svg';
import Steam from './../assets/icons/steam.svg';
import Linkedin from './../assets/icons/linkedin.svg';

export default {
  components: {
    Mail,
    Twitter,
    Github,
    Steam,
    Linkedin,
  },
};
</script>

<template>
  <layout>
    <!-- start: about page -->
    <div class="about">

      <!-- start: introduction section -->
      <div class="md:text-justify">
        <h1 class="text-5xl font-semibold tracking-wide mb-8">
          About Me
        </h1>
        <p class="mb-6">
          Hey there! My name is Namchee. My full name is Cristopher,
          but I prefer to be called Namchee since I'm acquaintanced
          with too much 'Chris' &mdash; and its many variants &mdash;
          in my life.
        </p>
        <p class="mb-6">
          I was born in Jakarta, but moved out to Bandung 8 years ago.
          Right now, I'm pursuing my bachelor's degree in Informatics at
          <a href="http://informatika.unpar.ac.id/" class="text-link" ref="noreferrer">
            Parahyangan Catholic University
          </a>
        </p>
        <p class="mb-6">
          The world of web has caught my interest since my high school days.
          Since then, I started to explore the world of web from C and Java
          background. Nowadays, I do most of my work using my current favorite
          language, JavaScript.
        </p>
        <p>
          Right now, I spent my time doing personal open source projects with
          various interesting topics and hanging around on developer's server
          on Discord. To this day, I'm still learning as much as I can
          about the world of web as one of my passion.
        </p>
      </div>
      <!-- end: introduction section -->

      <!-- start: skills section -->
      <div class="mt-8">
        <h2 class="text-4xl mb-6 font-semibold">
          Skills and Tools
        </h2>
        <ul class="about__skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6)</li>
          <li>TypeScript</li>
          <li>NodeJS</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>Git</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>
      <!-- end: skills section -->

      <!-- start: contact section -->
      <div class="mt-8">
        <h2 class="text-4xl mb-6 font-semibold">
          Get In Touch
        </h2>
        <div
          class="about__contacts text-base"
        >
          <a
            class="flex items-center brand-logo"
            target="_blank"
            href="mailto:cristophernamchee12@gmail.com"
          >
            <mail class="w-4 h-4 md:w-5 md:h-5" />
            <span class="ml-3">cristophernamchee12@gmail.com</span>
          </a>

          <a
            class="flex items-center brand-logo"
            href="https://twitter.com/lakban_hitam"
            target="_blank"
            rel="noreferrer"
          >
            <twitter class="w-4 h-4 md:w-5 md:h-5 twitter" />
            <span class="ml-3">@lakban_hitam</span>
          </a>

          <a
            class="flex items-center brand-logo"
            href="https://github.com/Namchee"
            target="_blank"
            rel="noreferrer"
          >
            <github class="w-4 h-4 md:w-5 md:h-5" />
            <span class="ml-3">Namchee</span>
          </a>

          <a
            class="flex items-center brand-logo"
            href="https://www.linkedin.com/in/cristopher-cristopher-8b88a81b1/"
            target="_blank"
            rel="noreferrer"
          >
            <linkedin class="w-4 h-4 md:w-5 md:h-5 linkedin" />
            <span class="ml-3">Cristopher</span>
          </a>

          <a
            class="flex items-center brand-logo"
            href="https://steamcommunity.com/id/namchee"
            target="_blank"
            rel="noreferrer"
          >
            <steam class="w-4 h-4 md:w-5 md:h-5 steam" />
            <span class="ml-3">namchee</span>
          </a>
        </div>
      </div>
    </div>
    <!-- end: about page -->
  </layout>
</template>

<style lang="postcss" scoped>
.about {
  @apply flex-grow flex flex-col justify-center mx-auto max-w-5xl py-12;
}

.about__avatar {
  @apply overflow-hidden;

  transform: scale(.8);
  background-color: var(--about-bg);
  border-radius: 32% 73% 70% 30% / 32% 30% 70% 70%;
  animation: morph 18s infinite ease alternate;

  & .stroke path {
    fill: #212121;
  }
}

.about__contacts {
  @apply text-sm;
  column-count: 1;

  & > * {
    @apply my-2;

    &:first-child {
      @apply mt-0;
    }

    &:last-child {
      @apply mb-0;
    }
  }
}

.about__skills {
  column-count: 1;

  & > * {
    @apply my-2;

    &:first-child {
      @apply mt-0;
    }

    &:last-child {
      @apply mb-0;
    }
  }
}

.brand-logo {
  & svg {
    fill: var(--logo);
    transition: fill 250ms ease-out;
  }

  &:hover, &:focus {
    & svg {
      fill: var(--text-copy-primary);

      &.twitter {
        fill: #1DA1F2;
      }

      &.steam {
        fill: #2a475e;
      }

      &.linkedin {
        fill: #2867B2;
      }
    }
  }
}

@screen md {
  .about__avatar {
    transform: scale(1);
  }

  .about__contacts {
    @apply text-base;

    column-count: 2;
    column-gap: 4rem;

    & > * {
      @apply my-3;
    }
  }

  .about__skills {
    column-count: 3;
    column-gap: 4rem;

    & > * {
      @apply my-2;
    }
  }
}

@screen lg {
  .about__contacts {
    column-count: 3;
    column-gap: 5rem;

    & > * {
      @apply my-4;
    }
  }
}

@keyframes morph {
  0% {
    border-radius: 32% 73% 70% 30% / 32% 30% 70% 70%;
  }
  20% {
    border-radius: 41% 59% 63% 37% / 33% 36% 64% 67%;
  }
  40% {
    border-radius: 48% 52% 56% 44% / 40% 42% 58% 60%;
  }
  60% {
    border-radius: 59% 41% 42% 58% / 42% 57% 43% 58%;
  }
  80% {
    border-radius: 61% 39% 36% 64% / 67% 71% 29% 33%;
  }
  100% {
    border-radius: 71% 29% 45% 55% / 61% 81% 19% 39%;
  }
}
</style>
