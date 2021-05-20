<template>
  <ul class="flex flex-row">
    <li
      v-for="tab in tabs"
      :key="tab.text"
      class="
        cursor-pointer
        flex-1
        sm:flex-initial
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
