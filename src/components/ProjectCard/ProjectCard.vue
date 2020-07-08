<script>
export default {};
</script>

<template>
  <div class="project-card">
    <figure class="project-card__image">
      <slot name="image"></slot>
    </figure>

    <div class="project-card__content">
      <div class="project-card__technologies">
        <slot name="technologies"></slot>
      </div>

      <div class="project-card__description">
        <h3 class="mb-8 mt-4 text-3xl tracking-wide">
          <slot name="title"></slot>
        </h3>

        <div class="text-justify">
          <slot name="description"></slot>
        </div>
      </div>

      <div class="project-card__link">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.project-card {
  @apply flex flex-col py-4;
}

.project-card__image {
  @apply w-full;
}

.project-card__content {
  @apply py-8 w-full max-w-4xl;
}

.project-card__technologies {
  @apply uppercase text-sm tracking-widest opacity-75;
}

.project-card__link {
  @apply flex items-center;
}

@screen lg {
  .project-card {
    @apply flex-row;
  }

  .project-card__image {
    @apply w-1/2;
  }

  .project-card__content {
    @apply px-20 py-8 w-1/2;
  }
}
</style>
