<template>
  <aside
    class="
      absolute
      w-80
      transform
      transition-all
      duration-300
      bg-white
      shadow-lg
      z-20
      h-screen
    "
    :class="{
      'translate-x-0': sideBar,
      '-translate-x-80': !sideBar,
    }"
  >
    <div
      class="flex flex-row justify-between items-center px-5 py-2.5 bg-primary"
    >
      <NuxtLink to="#">
        <img
          class="w-9 navbar__brand-icon"
          src="~/assets/images/walmart-icon.svg"
        />
      </NuxtLink>
      <i
        class="fas fa-times text-white text-xl cursor-pointer hover:text-accent"
        @click="closeSideBar"
      />
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters({
      sideBar: 'ui/sideBar',
    }),
  },
  methods: {
    ...mapMutations({
      closeSideBar: 'ui/closeSideBar',
    }),
  },
});
</script>
