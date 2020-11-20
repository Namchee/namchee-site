<script>
// import ArrowLink from '~/assets/icons/arrow-link.svg?inline';

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
    // ArrowLink,
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
  <section class="flex flex-col
    px-6 py-20
    max-w-6xl
    sm:py-16
    md:px-16
    lg:px-screen">
    <!-- start: About me -->
    <article class="self-end max-w-md">
      <h1 class="font-head text-copy-primary text-opacity-50 about__title">
        About Me
      </h1>

      <p class="text-copy-secondary paragraph">
        My full name is
      </p>
    </article>
    <!-- end: About me -->
  </section>
  <!-- end: about page -->
</template>

<style lang="postcss" scoped>
.about__title {
  font-size: clamp(2.5rem, 3.5vw, 6rem);
}

.paragraph {
  --text-opacity: 0.75;
  color: var(--text-copy-secondary);
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
