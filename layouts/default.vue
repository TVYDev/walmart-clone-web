<template>
  <div>
    <!-- TODO: Find another better solution instead of changing background of below div when side-bar is opened -->
    <div
      class="w-full bg-primary transition-all duration-300"
      :class="[sideBar ? 'bg-tertiary' : 'bg-primary']"
      @click.stop="closeSideBar"
    >
      <CommonTabs :tabs="navTabs" class="bg-primary text-white" />
    </div>
    <SideBar />
    <div>
      <CommonOverlay :is-shown="sideBar" :click-handler="closeSideBar" />
      <header>
        <NavBar />
      </header>
      <main>
        <Nuxt />
      </main>
    </div>
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
