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
    <section class="px-6 py-6">
      <h2 class="font-bold mb-4">Walmart.com</h2>
      <CommonMenuList :menu="menu" />
    </section>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  data() {
    return {
      menu: [
        {
          text: 'Track Orders',
          to: '#',
          iconClass: 'fas fa-box',
        },
        {
          text: 'Buy Again',
          to: '#',
          iconClass: 'fas fa-shopping-bag',
        },
        {
          text: 'Lists',
          to: '#',
          iconClass: 'fas fa-list-alt',
        },
        {
          text: 'Walmart+',
          to: '#',
          iconClass: 'fab fa-google-wallet',
        },
        {
          text: 'Walmart Credit Card',
          to: '#',
          iconClass: 'fas fa-credit-card',
        },
        {
          text: 'Your Location:',
          to: '#',
          iconClass: 'fas fa-map-marker',
          subMenus: [],
        },
        {
          text: 'Local Store',
          iconClass: 'fas fa-store',
          subMenus: [
            {
              text: 'Local Store',
              to: '#',
              iconClass: 'fas fa-store',
            },
            {
              text: 'Store Finder',
              to: '#',
              iconClass: 'fas fa-street-view',
            },
            {
              text: 'Weekly Ad',
              to: '#',
              iconClass: 'fas fa-ad',
            },
            {
              text: 'Pickup Today',
              to: '#',
              iconClass: 'fas fa-box-open',
            },
          ],
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
