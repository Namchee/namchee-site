<script>
import Person from './../assets/images/person.svg';

export default {
  components: {
    Person,
  },
};
</script>

<template>
  <layout>
    <div class="py-8">
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
            I was born in Jakarta, but moved out from Bandung 8 years ago.
            Currently, I'm pursuing my bachelor's degree in Informatics at
            <a href="http://informatika.unpar.ac.id/" class="text-link" ref="noreferrer">
              Parahyangan Catholic University
            </a>
          </p>
          <p>
            Right now, I spent my time doing personal open source projects with
            various interesting topics and hanging around on developer's server
            on Discord. To this day, I'm still learning as much as I can
            about the world of web as one of my passion.
          </p>
        </div>
      </div>

      <div class="my-16">
        <h2 class="text-4xl mb-4 font-semibold">
          Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl mb-2">Language</h3>
            <ul class="font-normal">
              <li>Java</li>
              <li>JavaScript <span class="font-semibold">(preferred)</span></li>
              <li>TypeScript <span class="font-semibold">(preferred)</span></li>
              <li>HTML5</li>
              <li>Python 3</li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl mb-2">Front-End Stack</h3>
            <ul class="font-normal">
              <li>CSS3</li>
              <li>SASS and PostCSS</li>
              <li>Bulma</li>
              <li>TailwindCSS</li>
              <li>VueJS</li>
              <li>Gridsome</li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl mb-2">Back-End Stack</h3>
            <ul class="font-normal">
              <li>NodeJS <span class="font-semibold">(preferred)</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl mb-2">Database</h3>
            <ul class="font-normal">
              <li>MySQL</li>
              <li>PostGre SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl mb-2">Other Tools and Services</h3>
            <ul class="font-normal">
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>Vercel</li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl mb-2">Currently Learning</h3>
            <ul class="font-normal">
              <li>Deno</li>
              <li>Go</li>
              <li>Dart (Flutter)</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-4xl mb-4 font-semibold">
          Contact
        </h3>
        <ul>
          <li>
            <span
              class="text-xl font-semibold contact-label"
            >
              E-mail
            </span>
            <a
              class="text-link contact-info"
              href="mailto:cristophernamchee12@gmail.com"
            >
              cristophernamchee12@gmail.com
            </a>
          </li>
           <li>
            <span
              class="text-xl font-semibold contact-label"
            >
              GitHub
            </span>
            <a
              class="text-link contact-info"
              href="mailto:cristophernamchee12@gmail.com"
              rel="noreferrer"
            >
              cristophernamchee12@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </layout>
</template>

<style lang="postcss" scoped>
.person {
  background-color: #FFFAFA;
  animation: morphing 15s infinite forwards;
  border-radius: 54% 46% 27% 73% / 71% 30% 70% 29%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-info {
  display: block;
}

@screen md {
  .contact-info {
    display: inline-block;
  }

  .contact-label::after {
    content: "—";
    margin: 0 .5rem;
  }
}

@keyframes morphing {
  0% {
    border-radius: 54% 46% 27% 73% / 71% 30% 70% 29%;
  }
  25% {
    border-radius: 31% 69% 68% 32% / 62% 59% 41% 38%;
  }
  50% {
    border-radius: 75% 25% 75% 25% / 38% 39% 61% 62%;
  }
  75% {
    border-radius: 40% 60% 27% 73% / 23% 37% 63% 77%;
  }
}
</style>
