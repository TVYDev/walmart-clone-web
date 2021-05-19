<template>
  <div class="flex flex-row items-center">
    <slot />
    <div
      class="
        -top-2
        left-1
        bg-accent
        flex
        font-semibold
        h-5
        items-center
        justify-center
        min-w-max
        p-1
        relative
        rounded-full
        text-xs text-primary
        w-5
      "
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
