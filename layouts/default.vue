<template>
  <div>
    <header class="sticky top-0 z-20">
      <!-- TODO: Find another better solution instead of changing background of below div when side-bar is opened -->
      <div
        class="w-full bg-primary transition-all duration-300"
        :class="[sideBar ? 'bg-tertiary' : 'bg-primary']"
        @click="closeSideBar"
      >
        <CommonTabs :tabs="navTabs" class="bg-primary text-white" />
      </div>
      <NavBar />
    </header>
    <SideBar />
    <main>
      <CommonOverlay :is-shown="sideBar" :click-handler="closeSideBar" />
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  data() {
    return {
      navTabs: [
        {
          text: 'Pickup & delivery',
          active: false,
        },
        {
          text: 'Walmart.com',
          active: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      sideBar: 'ui/sideBar',
    }),
  },
  watch: {
    sideBar(newValue) {
      const el = document.body;
      if (newValue) {
        el.classList.add('overflow-hidden');
      } else {
        el.classList.remove('overflow-hidden');
      }
    },
  },
  methods: {
    ...mapMutations({
      closeSideBar: 'ui/closeSideBar',
    }),
  },
});
</script>
