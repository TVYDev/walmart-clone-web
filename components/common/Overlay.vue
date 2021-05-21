<template>
  <transition name="fade">
    <div
      v-if="isShown"
      class="absolute h-full w-full bg-black z-10 opacity-30"
      @click="clickHandler"
    />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isShown: {
      type: Boolean,
      default: false,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
  },
});
</script>
