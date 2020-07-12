<script>
export default {};
</script>

<template>
  <div class="project__card">
    <!-- start: project tech and timelines -->
    <div class="project__card__info">
      <div class="project__card__timeline">
        <slot name="timeline"></slot>
      </div>

      <div class="project__card__technologies">
        <slot name="technologies"></slot>
      </div>
    </div>
    <!-- end: project tech and timelines -->

    <!-- start: project title and description -->
    <div class="project__card__description">
      <h3 class="project__card__title">
        <slot name="title"></slot>
      </h3>

      <div>
        <slot name="description"></slot>
      </div>
    </div>
    <!-- end: project title and description -->

    <!-- start: project links -->
    <div class="project__card__link">
      <slot name="link"></slot>
    </div>
    <!-- end: project links -->

  </div>
</template>

<style lang="postcss" scoped>
.project__card {
  @apply relative grid py-10 px-2 grid-cols-2;

  grid-template-rows: auto 1fr;

  &::before, &:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: #FFFAFA; /* IE 11 Fallback */
    background-color: var(--text-copy-primary);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

.project__card__info {
  @apply uppercase tracking-widest text-sm;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.project__card__link {
  @apply text-right text-base;

  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.project__card__description {
  @apply py-6;

  grid-column: 1 / 3;
  grid-row: 2 / 3;
}

.project__card__title {
  @apply text-2xl mb-4 leading-none;
}

@screen md {
  .project__card {
    @apply flex flex-row leading-relaxed;
  }

  .project__card__description {
    @apply flex-grow px-8 py-0;
  }

  .project__card__info {
    @apply py-0 text-right;

    min-width: 4rem;
  }

  .project__card__link {
    min-width: 7rem;
  }

  .project__card__title {
    @apply text-3xl;
  }
}

@screen lg {
  .project__card__title {
    @apply tracking-wide font-semibold;

    font-size: 2vw;
  }

  .project__card__description {
    padding-left: 2vw;
    padding-right: 2vw;
  }
}
</style>
