<script>
export default {
  setup() {
    const links = [
      {
        name: 'cristophernamchee12@gmail.com',
        href: 'mailto:cristophernamchee12@gmail.com',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/lakban_hitam',
      },
      {
        name: 'GitHub',
        href: 'https://github.com/Namchee',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/cristopher-cristopher-8b88a81b1/',
      },
      {
        name: 'Steam',
        href: 'https://steamcommunity.com/id/namchee',
      },
    ];

    return {
      links,
    };
  },
};
</script>

<template>
  <layout>
    <!-- start: about page -->
    <div class="about">

      <!-- start: introduction section -->
      <div class="md:text-justify py-8 lg:py-12">
        <h1
          v-intersect.once
          class="about__title title-accent"
        >
          Call Me Namchee 😃
        </h1>
        <p class="mb-6 md:text-xl">
          Hey, Namchee here. My full name is Cristopher &mdash; without Namchee
          on it. But, I prefer to be called Namchee since I'm acquaintanced
          with too much 'Chris' &mdash; and its many variants &mdash;
          in my life. Right now, I'm pursuing my bachelor's degree in
          Informatics at
          <a href="http://informatika.unpar.ac.id/" class="text-link" ref="noreferrer">
            Parahyangan Catholic University
          </a>
        </p>
        <p class="mb-6 md:text-xl">
          The world of web has caught my interest since my high school days.
          Since then, I started to explore the world of web from C and Java
          background. Nowadays, I do most of my work using my current favorite
          language, JavaScript.
        </p>
        <p class="md:text-xl">
          Right now, I spent my time doing personal open source projects with
          various interesting topics and hanging around on developer's server
          on Discord. To this day, I'm still learning as much as I can
          about the world of web as one of my passion.
        </p>
      </div>
      <!-- end: introduction section -->

      <!-- start: tools and education section -->
      <div class="flex flex-col lg:flex-row py-8 lg:py-12">

        <!-- start: tools of trade section -->
        <div class="w-full lg:w-7/12 lg:mr-2">
          <h2
            v-intersect.once
            class="text-3xl md:text-5xl mb-6 font-semibold title-accent">
            Tools of Trade 🛠️
          </h2>
          <ul
            v-intersect.once
            class="about__skills md:text-xl">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>Visual Studio Code</li>
            <li>Webpack</li>
          </ul>
        </div>
        <!-- end: tools of trade section -->

        <!-- start: education section -->
        <div class="w-full mt-8 lg:mt-0 lg:w-5/12 lg:ml-2">
          <h2
            v-intersect.once
            class="text-3xl md:text-5xl mb-6 font-semibold title-accent"
          >
            Education 🎓
          </h2>

          <ul
            v-intersect.once
            class="about__education">
            <li class="tracking-wide">
              <span class="block uppercase text-sm">
                2017 &mdash; Present
              </span>
              <span class="md:text-xl">
                Parahyangan Catholic University
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- end: tools and education section -->

      <!-- start: contact list -->
      <div class="py-8 lg:py-12">
        <h2
          v-intersect.once
          class="text-3xl md:text-5xl font-semibold title-accent mb-6">
          Let's be pals <span class="fist">👊</span>
        </h2>

        <ul
          v-intersect.once
          class="about__contact">
          <li v-for="link in links" :key="link.href">
            <a
              target="_blank"
              :href="link.href"
              rel="noreferrer"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <!-- end: contact list -->

    </div>
    <!-- end: about page -->
  </layout>
</template>

<style lang="postcss" scoped>
.about {
  @apply flex-grow flex flex-col justify-center mx-auto max-w-5xl;
}

.about__title {
  @apply text-3xl font-semibold tracking-wide mb-8;
}

.about__contact {
  @apply font-normal grid grid-cols-1 gap-3 text-base;

  & > li {
    opacity: 0;
    transform: translateY(1em);
    transition: all 350ms cubic-bezier(0.33, 1, 0.68, 1);

    @for $i from 1 to 99 {
      &:nth-child($(i)) {
        transition-delay: calc($(i) * 50ms);
      }
    }
  }

  & > li > a {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--text-copy-primary);
      transition: transform 350ms cubic-bezier(0.25, 1, 0.5, 1);
      transform-origin: left;
      transform: scaleX(0);
    }

    &:hover, &:focus, &:active {
      &::after {
        transform: scaleX(1);
      }
    }
  }

  &.in-view {
    & > li {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.about__skills, .about__education {
  @apply grid grid-cols-2 gap-2;

  & > li {
    transition: all 350ms cubic-bezier(0.33, 1, 0.68, 1);
    opacity: 0;
    transform: translateY(1rem);

    @for $i from 1 to 99 {
      &:nth-child($(i)) {
        transition-delay: calc($(i) * 75ms);
      }
    }
  }

  &.in-view {
    & > li {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.about__education {
  @apply grid-cols-1;
}

.fist {
  display: inline-block;
  animation: broFist 3s infinite;
  transform: perspective(10px) translateZ(0);
}

@screen md {
  .about__skills, .about__contact {
    gap: .5rem 2rem;
  }

  .about__title {
    @apply text-6xl;
  }

  .about__contact {
    @apply text-xl grid-cols-2;

    gap: 1rem 5rem;
  }
}

@screen lg {
  .about__skills {
    @apply text-xl;
  }

  .about__contact {
    @apply text-2xl;
  }
}

@keyframes broFist {
  0% {
    transform: perspective(10px) translateZ(0);
  }

  10% {
    transform: perspective(10px) translateZ(-8px);
  }

  15% {
    transform: perspective(10px) translateZ(2px);
  }

  22.5% {
    transform: perspective(10px) translateZ(0);
  }
}
</style>
