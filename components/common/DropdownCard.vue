<template>
  <div class="relative">
    <slot :dropdownToggler="dropdownToggler" />
    <transition name="slide-vertical">
      <div
        v-if="isShown"
        class="
          w-full
          hidden
          lg:block
          absolute
          top-9
          bg-white
          rounded-2xl
          p-3
          shadow-lg
        "
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    dropdownToggler() {
      this.isShown = !this.isShown;
    },
  },
});
</script>

<style scoped>
.slide-vertical-enter-active,
.slide-vertical-leave-active {
  transition: all 0.2s;
}
.slide-vertical-enter,
.slide-vertical-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
