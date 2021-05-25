<template>
  <aside
    class="
      fixed
      w-80
      top-10
      transform
      transition-all
      duration-300
      bg-white
      shadow-lg
      z-40
    "
    :class="{
      'translate-x-0': sideBar,
      '-translate-x-80': !sideBar,
    }"
  >
    <div
      class="flex flex-row justify-between items-center px-5 h-14 bg-primary"
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
    <section class="px-6 py-6 overflow-y-auto h-(screen-24) overscroll-contain">
      <h2 class="font-bold mb-4">Walmart.com</h2>
      <CommonMenuList :menu="menu" />
      <hr class="my-5" />
      <div class="flex flex-row items-center justify-between">
        <h2 class="font-bold">Departments</h2>
        <NuxtLink to="#" class="text-xs underline"> See all </NuxtLink>
      </div>
      <CommonMenuList :menu="departmentMenus" />
      <hr class="my-5" />
      <CommonMenuList :menu="additionalMenus" class="mb-7" />
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
      departmentMenus: [
        {
          text: 'Savings Spotlight',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Asian American & Pacific Islander Heritage Month',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Graduation Gifts',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Electronics & Office',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Clothing, Shoes & Accessories',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Home, Furniture & Appliances',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Toys, Games & Video Games',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Home Improvements',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Movies, Music & Books',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Baby',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Patio & Garden',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Food, Household & Pets',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Pharmacy, Health & Personal Care',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Beauty',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Sports, Fitness & Outdoors',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Auto, Tires & Industrial',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Photo & Personalized Shop',
          subMenus: [
            {
              text: '',
            },
          ],
        },
        {
          text: 'Art, Craft, Sewing & Party Supplies',
          subMenus: [
            {
              text: '',
            },
          ],
        },
      ],
      additionalMenus: [
        {
          text: 'Registry',
          to: '#',
          iconClass: 'fas fa-gift text-sm',
        },
        {
          text: 'Gift Finder',
          to: '#',
          iconClass: 'fas fa-search-dollar text-sm',
        },
        {
          text: 'Walmart Services',
          to: '#',
          iconClass: 'fas fa-shapes text-sm',
        },
        {
          text: 'Digital Video by Vudu',
          to: '#',
          iconClass: 'fas fa-video text-sm',
        },
        {
          text: 'Walmart Credit Card',
          to: '#',
          iconClass: 'fas fa-credit-card text-sm',
        },
        {
          text: 'Gift Card',
          to: '#',
          iconClass: 'fas fa-vr-cardboard text-sm',
        },
        {
          text: 'Weekly Ad',
          to: '#',
          iconClass: 'fas fa-ad text-sm',
        },
        {
          text: 'Ideas',
          to: '#',
          iconClass: 'fas fa-lightbulb text-sm',
        },
        {
          text: 'Help',
          to: '#',
          iconClass: 'fas fa-question-circle text-sm',
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
