<template>
  <aside
    class="
      absolute
      w-80
      transform
      transition-all
      duration-300
      bg-primary
      text-white
      z-10
    "
    :class="{
      'translate-x-0': sideBar,
      '-translate-x-80': !sideBar,
    }"
    @click="closeSideBar"
  >
    SideBar
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
