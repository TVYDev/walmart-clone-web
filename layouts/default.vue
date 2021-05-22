<template>
  <div>
    <header class="sticky top-0">
      <div class="w-full bg-primary transition-all duration-300 bg-primary">
        <CommonTabs :tabs="navTabs" class="bg-primary text-white" />
      </div>
      <NavBar />
    </header>
    <SideBar />
    <main>
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
  methods: {
    ...mapMutations({
      closeSideBar: 'ui/closeSideBar',
    }),
  },
});
</script>
