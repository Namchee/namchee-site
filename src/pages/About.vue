<script>
import Person from './../assets/images/person.svg';
import Mail from './../assets/icons/mail.svg';
import Twitter from './../assets/icons/twitter.svg';
import Github from './../assets/icons/github.svg';
import Steam from './../assets/icons/steam.svg';

export default {
  components: {
    Person,
    Mail,
    Twitter,
    Github,
    Steam,
  },
};
</script>

<template>
  <layout>
    <!-- start: about page -->
    <div class="py-8 md:px-8 lg:px-16">

      <!-- start: introduction section -->
      <div class="flex flex-col lg:flex-row items-center">
        <div class="mb-8 lg:mb-0">
          <div class="person overflow-hidden">
            <person />
          </div>
        </div>
        <div class="flex-grow lg:pl-32 md:text-justify">
          <h1 class="text-5xl font-semibold tracking-wide mb-4">
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
            As for my skills, I'm pretty decent with HTML5, CSS3, and
            JavaScript. I came from C / C++ and Java background, but I prefer
            JavaScript for most of my work. I do most of my work using Visual
            Studio Code and Git.
          </p>
          <p>
            Right now, I spent my time doing personal open source projects with
            various interesting topics and hanging around on developer's server
            on Discord. To this day, I'm still learning as much as I can
            about the world of web as one of my passion.
          </p>
        </div>
      </div>
      <!-- end: introduction section -->

      <!-- start: contact section -->
      <div class="mt-10">
        <h3 class="text-4xl mb-4 font-semibold">
          Get In Touch
        </h3>
        <div
          class="contact-list"
        >
          <a
            class="flex items-center brand-logo"
            target="_blank"
            href="mailto:cristophernamchee12@gmail.com"
          >
            <mail class="w-5 h-5" />
            <span class="ml-3">cristophernamchee12@gmail.com</span>
          </a>
          <a
            class="flex items-center brand-logo"
            href="https://twitter.com/lakban_hitam"
            target="_blank"
            rel="noreferrer"
          >
            <twitter class="w-5 h-5 twitter" />
            <span class="ml-3">@lakban_hitam</span>
          </a>
          <a
            class="flex items-center brand-logo"
            href="https://github.com/Namchee"
            target="_blank"
            rel="noreferrer"
          >
            <github class="w-5 h-5" />
            <span class="ml-3">Namchee</span>
          </a>
          <a
            class="flex items-center brand-logo"
            href="https://steamcommunity.com/id/namchee"
            target="_blank"
            rel="noreferrer"
          >
            <steam class="w-5 h-5 steam" />
            <span class="ml-3">namchee</span>
          </a>
        </div>
      </div>
    </div>
    <!-- end: about page -->
  </layout>
</template>

<style lang="postcss" scoped>
.person {
  background-color: var(--about-bg);
  border-radius: 32% 73% 70% 30% / 32% 30% 70% 70%;
  animation: morph 20s infinite ease alternate;

  & .person path {
    fill: #212121;
  }
}

.contact-list {
  @apply grid grid-cols-1 grid-rows-3 gap-2 grid-flow-col text-base;
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
    }
  }
}

@screen md {
  .contact-list {
    @apply grid-cols-3;
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
