<script>
import ArrowLink from '~/assets/icons/arrow-link.svg?inline';

export default {
  head: {
    title: 'About Me - Namchee',
    meta: [
      /* eslint-disable max-len */
      {
        name: 'description',
        content:
          'Namchee is an aspiring web developer who loves JavaScript technologies. Namchee strives to make the web a better place',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'About Namchee',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Namchee is an aspiring web developer who loves JavaScript technologies. Namchee strives to make the web a better place',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'About Namchee',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Namchee is an aspiring web developer who loves JavaScript technologies. Namchee strives to make the web a better place',
      },
      /* eslint-enable max-len */
    ],
  },

  components: {
    ArrowLink,
  },

  setup() {
    const skills = [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'Java',
      'MySQL',
      'PostgreSQL',
      'Git',
      'Visual Studio Code',
      'Webpack',
      'Google',
      'StackOverflow',
    ];

    const education = [
      {
        yearStart: '2017',
        yearEnd: '',
        place: 'Parahyangan Catholic University',
      },
    ];

    const links = [
      {
        name: 'Email',
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
      skills,
      education,
      links,
    };
  },
};
</script>

<template>
  <!-- start: about page -->
  <section>
    <!-- start: introduction section -->
    <article class="py-6
      md:flex md:flex-row-reverse
      md:py-16">
      <h1 class="tracking-wide
        mb-6
        lg:tracking-wider
        about__title">
        <span>6C?</span>
      </h1>

      <div class="leading-relaxed
        lg:tracking-wide
        about__intro__text">
        <p class="mb-8">
          Hey,
          <span class="underline__reveal">Namchee</span> here.
          My full name is Cristopher.
          But, I prefer to be called Namchee since I'm
          acquaintanced with too much
          <span
            class="underline__reveal"
          >Chris</span> in my life.
        </p>
        <p class="mb-8">
          The world of web has caught my interest since my high school days.
          Since then, I do most of my work using my current favorite
          language,
          <span class="underline__reveal">JavaScript</span>.
        </p>
        <p>
          Right now, I spend my time doing personal open source projects
          with various topics and hanging around with fellow developers.
          To this day, I'm still learning as much as I can
          about the world of web as one of my passion.
        </p>
      </div>
    </article>
    <!-- end: introduction section -->

    <!-- start: tools and education section -->
    <section class="flex flex-col lg:flex-row py-8 lg:py-12">
      <!-- start: tools of trade section -->
      <section class="w-full lg:w-7/12 lg:mr-2">
        <h2 v-intersect.once class="inline-block
          mb-6
          md:mb-8
          lg:mb-10
          lg:tracking-wide
          about__subtitle title-accent">
          Tools of Trade
        </h2>

        <ul v-intersect.once class="grid grid-cols-2 gap-2
          md:text-xl
          about__skills">
          <li v-for="(skill, i) in skills" :key="i" class="overflow-hidden">
            <span>{{ skill }}</span>
          </li>
        </ul>
      </section>
      <!-- end: tools of trade section -->

      <!-- start: education section -->
      <section class="w-full mt-16 lg:mt-0 lg:w-5/12 lg:ml-2">
        <h2 v-intersect.once class="inline-block
          mb-6
          md:mb-8
          lg:mb-10
          lg:tracking-wide
          about__subtitle title-accent">
            Education
        </h2>

        <ul v-intersect.once class="grid grid-cols-1 gap-2
          about__education">
          <li v-for="(edu, i) in education" :key="i"
            class="overflow-hidden
              tracking-wide
              lg:mr-20">
            <span>
              <span class="block uppercase text-sm">
                {{ edu.yearStart }}
                &mdash;
                {{ edu.yearEnd || 'Present' }}
              </span>
              <span>{{ edu.place }}</span>
            </span>
          </li>
        </ul>
      </section>
      <!-- end: education section -->
    </section>
    <!-- end: tools and education section -->

    <!-- start: contact list -->
    <section class="py-8 lg:py-12">
      <h2 class="inline-block
        mb-6
        md:mb-8
        lg:mb-10
        lg:tracking-wide
        about__subtitle">
        Let's be pals
        <span class="fist">👊</span>
      </h2>

      <ul v-intersect.once class="font-normal
        grid grid-cols-1
        text-2xl
        md:grid-cols-2
        lg:flex lg:flex-row
        about__contact">
        <li v-for="link in links" :key="link.href" class="mb-2
          overflow-hidden
          lg:mr-6">
          <a target="_blank" :href="link.href" rel="noreferrer">
            {{ link.name }}
            <arrow-link class="inline-block" />
          </a>
        </li>
      </ul>
    </section>
    <!-- end: contact list -->
  </section>
  <!-- end: about page -->
</template>

<style lang="postcss" scoped>
.about__title {
  font-size: 13.5vw;
}

.about__subtitle {
  font-size: 10vw;
}

.underline__reveal {
  position: relative;
  display: inline-block;
  backface-visibility: hidden;
  z-index: 0;

  &::after,
  &::before {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform: scaleY(0.05);
    transform-origin: bottom;
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1);
  }

  &::before {
    @supports (mix-blend-mode: difference) {
      background-color: #E0E0E0; /* IE 11 Fallback */
      background-color: var(--text-copy);
      mix-blend-mode: difference;
    }

    z-index: 1;
    pointer-events: none;
  }

  &::after {
    background-color: #121212; /* IE 11 Fallback */
    background-color: var(--bg-background-primary);
    z-index: -1;
  }

  &:hover {
    @supports (mix-blend-mode: difference) {
      &::before,
      &::after {
        transform: scaleY(1);
      }
    }
  }
}

.about__contact {
  & > li > a {
    position: relative;
    display: inline-block;
    transform: translateY(200%) rotateZ(30deg);

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #E0E0E0;
      background-color: var(--text-copy);
      transition: transform 300ms cubic-bezier(0.25, 1, 0.5, 1);
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

  &.in-view {
    & > li {
      & > a {
        animation: skewReveal 0.6s cubic-bezier(0.61, 1, 0.88, 1) forwards;
      }

      @for $i from 1 to 99 {
        &:nth-child($(i)) > a {
          animation-delay: calc($(i) * 50ms);
        }
      }
    }
  }
}

.title-accent {
  display: inline-block;
  position: relative;
  z-index: 1;

  &::after {
    display: block;
    position: absolute;
    content: '';
    z-index: -1;
    height: 2px;
    width: 2rem;
    top: calc(50% + 2px);
    left: calc(100% + 1rem);
    background-color: #E0E0E0;
    background-color: var(--text-copy);
    transition: transform 750ms 100ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: left;
    transform: scaleX(0);
  }

  &.in-view {
    &::after {
      transform: scaleX(1);
    }
  }
}

.about__skills,
.about__education {
  & > li > span {
    display: inline-block;
    transform: translateY(101%);
    opacity: 0.2;
  }

  &.in-view {
    & > li {
      & > span {
        animation: yReveal 350ms cubic-bezier(0.61, 1, 0.88, 1) forwards;
      }

      @for $i from 1 to 99 {
        &:nth-child($(i)) > span {
          animation-delay: calc($(i) * 50ms);
        }
      }
    }
  }
}

.fist {
  display: inline-block;
  animation: broFist 3s infinite;
  transform: perspective(10px) translateZ(0);
}

@screen md {
  .about__title {
    position: relative;
    margin-bottom: 0;
    font-size: 12.5vw;
    writing-mode: vertical-lr;

    & > span {
      position: sticky;
      top: 6rem;
    }
  }

  .about__intro__text {
    font-size: 2.75vw;
    margin-right: 2vw;

    & > p {
      &:nth-child(2) {
        margin-left: 10vw;
      }

      &:last-child {
        margin-left: 3vw;
      }

      &:not(:last-child) {
        margin-bottom: 3rem;
      }
    }
  }

  .about__skills,
  .about__contact {
    gap: 0.5rem 2rem;
  }

  .about__subtitle {
    font-size: 7vw;
  }

  .title-accent::after {
    width: 2em;
  }
}

@screen lg {
  .about__skills,
  .about__education {
    font-size: 1.55vw;
  }

  .about__contact {
    font-size: 2vw;
  }

  .about__subtitle {
    font-size: 3.5vw;
  }

  .about__intro__text {
    font-size: 1.85vw;
    margin-right: 2.25vw;

    & > p {
      &:nth-child(2) {
        margin-left: 12.5vw;
      }

      &:last-child {
        margin-left: 2vw;
      }

      &:not(:last-child) {
        margin-bottom: 4rem;
      }
    }
  }

  .about__edu__timeline {
    font-size: 1vw;
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

@keyframes skewReveal {
  0% {
    transform: translateY(200%) rotateZ(30deg);
  }

  100% {
    transform: translateY(0%) rotateZ(0deg);
  }
}

@keyframes yReveal {
  0% {
    opacity: 0.2;
    transform: translateY(101%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
