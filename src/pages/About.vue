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
      'Google!',
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
      <article class="md:text-justify py-8 lg:py-12">
        <h1
          v-intersect.once
          class="about__title title-accent"
        >
          Call Me Namchee
        </h1>
        <p class="mb-6 md:text-xl lg:text-2xl">
          Hey, Namchee here. My full name is Cristopher &mdash; without Namchee
          on it. But, I prefer to be called Namchee since I'm acquaintanced
          with too much 'Chris' &mdash; and its many variants &mdash;
          in my life.
        </p>
        <p class="mb-6 md:text-xl lg:text-2xl">
          The world of web has caught my interest since my high school days.
          Since then, I started to explore the world of web from C and Java
          background. Nowadays, I do most of my work using my current favorite
          language, JavaScript.
        </p>
        <p class="md:text-xl lg:text-2xl">
          Right now, I spend my time doing personal open source projects with
          various interesting topics and hanging around on developer's server
          on Discord. To this day, I'm still learning as much as I can
          about the world of web as one of my passion.
        </p>
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
        <article class="w-full mt-8 lg:mt-0 lg:w-5/12 lg:ml-2">
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
                <span class="block uppercase text-sm">
                  {{ edu.yearStart }}
                  &mdash;
                  {{ edu.yearEnd || 'Present' }}
                </span>
                <span class="md:text-xl">
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
.about {
  @apply flex-grow flex flex-col justify-center mx-auto max-w-5xl;
}

.about__title, .about__subtitle {
  @apply text-4xl tracking-wide inline-block mb-6;
}

.about__contact {
  @apply font-normal text-base flex flex-col flex-wrap text-2xl;

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
  .about__skills, .about__contact {
    gap: .5rem 2rem;
  }

  .about__title, .about__subtitle {
    @apply font-medium mb-8;
  }

  .about__title {
    @apply text-6xl;
  }

  .about__subtitle {
    @apply text-5xl;
  }

  .about__contact {
    @apply flex-row mb-0;

    & > li {
      @apply mr-8;
    }
  }
}

@screen lg {
  .about__skills {
    @apply text-xl;
  }

  .about__contact {
    @apply text-3xl;

    & > li {
      @apply mr-16;
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
