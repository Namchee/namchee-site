<script>
import { computed } from '@vue/composition-api';

export default {
  props: {
    color: {
      type: Object,
      validation: (value) => {
        return !!value.bg && !!value.text;
      },
    },
  },

  setup(props) {
    const colorClass = computed(() => {
      return props.color ?
        `bg-${props.color.bg} text-${props.color.text}` :
        'bg-accent-trans text-accent';
    });

    return {
      colorClass,
    };
  },
};
</script>

<template functional>
  <div
    class="inline-flex items-center justify-center rounded-full py-2 px-3"
    :class='colorClass'
  >
    <slot name="text"></slot>
  </div>
</template>

<style lang="postcss" scoped>

</style>
