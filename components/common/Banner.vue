<template>
  <transition name="fade">
    <div
      v-if="isShown"
      class="flex flex-row items-center justify-between px-2 py-2 bg-secondary"
    >
      <div class="flex-1"><slot /></div>
      <i
        v-if="closable"
        class="fas fa-times ml-3 text-white hover:text-primary cursor-pointer"
        @click="isShown = !isShown"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShown: true,
    };
  },
});
</script>
