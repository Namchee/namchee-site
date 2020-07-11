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
    const twColors = [
      'red',
      'orange',
      'yellow',
      'green',
      'teal',
      'indigo',
      'purple',
      'pink',
    ];

    const colorClass = computed(() => {
      return props.color ?
        `bg-${props.color.bg} text-${props.color.text}` :
        (() => {
          const colorIndex = Math.floor(Math.random() * twColors.length);
          const colorName = twColors[colorIndex];

          return `bg-${colorName}-100 text-${colorName}-800`;
        })();
    });

    return {
      colorClass,
    };
  },
};
</script>

<template>
  <div
    class="inline-flex items-center justify-center rounded-full py-2 px-3"
    :class='colorClass'
  >
    <slot name="text"></slot>
  </div>
</template>

<style lang="postcss" scoped>

</style>
