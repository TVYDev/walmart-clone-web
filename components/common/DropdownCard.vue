<template>
  <div class="relative">
    <slot :dropdownToggler="dropdownToggler" />
    <transition name="slide-vertical">
      <div
        v-if="isShown"
        v-click-outside="dropdownToggler"
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
