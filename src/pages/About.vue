<script>
export default {
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
  <layout>
    <!-- start: about page -->
    <section class="about">

      <!-- start: introduction section -->
      <article class="about__intro">
        <h1 class="about__title">
          <span>
            6C?
          </span>
        </h1>

        <div class="about__intro__text">
          <p>
            Hey, <span class="underline__reveal">Namchee</span> here.
            My full name is Cristopher.
            But, I prefer to be called Namchee since I'm
            acquaintanced with too much
            <span class="underline__reveal">Chris</span> in my life.
          </p>
          <p>
            The world of web has caught my interest since my high school days.
            Since then, I do most of my work using my current favorite
            language, <span class="underline__reveal">JavaScript</span>.
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
        <article class="w-full lg:w-7/12 lg:mr-2">
          <h2
            v-intersect.once
            class="about__subtitle title-accent">
            Tools of Trade
          </h2>
          <ul
            v-intersect.once
            class="about__skills md:text-xl">
            <li v-for="(skill, i) in skills" :key="i">
              <span>{{ skill }}</span>
            </li>
          </ul>
        </article>
        <!-- end: tools of trade section -->

        <!-- start: education section -->
        <article class="w-full mt-16 lg:mt-0 lg:w-5/12 lg:ml-2">
          <h2
            v-intersect.once
            class="about__subtitle title-accent"
          >
            Education
          </h2>

          <ul
            v-intersect.once
            class="about__education">
            <li v-for="(edu, i) in education" :key="i" class="tracking-wide">
              <span>
                <span class="block uppercase text-sm lg:text-base">
                  {{ edu.yearStart }}
                  &mdash;
                  {{ edu.yearEnd || 'Present' }}
                </span>
                <span>
                  {{ edu.place }}
                </span>
              </span>
            </li>
          </ul>
        </article>
        <!-- end: education section -->

      </section>
      <!-- end: tools and education section -->

      <!-- start: contact list -->
      <article class="py-8 lg:py-12">
        <h2 class="about__subtitle">
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
              {{ link.name }} ->
            </a>
          </li>
        </ul>
      </article>
      <!-- end: contact list -->

    </section>
    <!-- end: about page -->
  </layout>
</template>

<style lang="postcss" scoped>
.about__intro {
  @apply py-6;
}

.about__title {
  @apply tracking-wider mb-6;

  font-size: 13.5vw;
}

.about__intro__text {
  @apply leading-relaxed tracking-wide;

  & > p:not(:last-child) {
    @apply mb-8;
  }
}

.about__subtitle {
  @apply tracking-wider inline-block mb-6;

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
    transform: scaleY(.05);
    transform-origin: bottom;
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1);
  }

  &::before {
    @supports (mix-blend-mode: difference) {
      background-color: var(--text-copy-primary);
      mix-blend-mode: difference;
    }

    z-index: 1;
    pointer-events: none;
  }

  &::after {
    background-color: var(--bg-background-primary);
    z-index: -1;
  }

  &:hover {
    @supports (mix-blend-mode: difference) {
      &::before, &::after {
        transform: scaleY(1);
      }
    }
  }
}

.about__contact {
  @apply font-normal text-base grid grid-cols-1 text-2xl;

  & > li {
    @apply mb-2 overflow-hidden;
  }

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
      & > a {
        animation: skewReveal .6s cubic-bezier(0.61, 1, 0.88, 1) forwards;
      }

      @for $i from 1 to 99 {
        &:nth-child($(i)) > a {
          animation-delay: calc($(i) * 75ms);
        }
      }
    }
  }
}

.about__skills, .about__education {
  @apply grid grid-cols-2 gap-2;

  & > li {
    @apply overflow-hidden;

    & > span {
      display: inline-block;
      transform: translateY(101%);
      opacity: .2;
    }
  }

  &.in-view {
    & > li {
      & > span {
        animation: yReveal 400ms cubic-bezier(0.61, 1, 0.88, 1) forwards;
      }

      @for $i from 1 to 99 {
        &:nth-child($(i)) > span {
          animation-delay: calc(25ms + calc($(i) * 50ms));
        }
      }
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
  .about__intro {
    @apply flex flex-row-reverse py-16;
  }

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

  .about__skills, .about__contact {
    gap: .5rem 2rem;
  }

  .about__subtitle {
    @apply mb-8;

    font-size: 7vw;
  }

  .about__contact {
    @apply grid grid-cols-2;

    & > li {
      @apply mr-6;
    }
  }
}

@screen lg {
  .about__skills, .about__education {
    font-size: 1.75vw;
  }

  .about__contact {
    @apply flex flex-row flex-wrap;

    font-size: 2vw;

    & > li {
      @apply mr-20;
    }
  }

  .about__subtitle {
    @apply mb-10;

    font-size: 3.5vw;
  }

  .about__intro__text {
    font-size: 2vw;
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
    opacity: .2;
    transform: translateY(101%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
