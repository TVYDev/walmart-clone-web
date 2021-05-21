<template>
  <ul class="flex flex-row sm:w-80">
    <li
      v-for="tab in tabs"
      :key="tab.text"
      class="
        cursor-pointer
        w-1/2
        sm:w-40
        py-2.5
        px-3
        text-xs
        font-semibold
        text-center
        border-b-2 border-transparent
        whitespace-nowrap
      "
      :class="{
        'border-accent': tab.active,
        'hover:border-secondary': !tab.active,
      }"
    >
      {{ tab.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
