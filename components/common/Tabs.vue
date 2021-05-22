<template>
  <ul class="flex flex-row sm:w-80 h-10">
    <li
      v-for="tab in tabs"
      :key="tab.text"
      class="
        flex
        items-center
        justify-center
        cursor-pointer
        w-1/2
        sm:w-40
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
